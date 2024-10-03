<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <EntryViewLeave title="Continue working" />
      </v-col>
    </v-row>
    <v-row class="mb-5" v-for="(data, index) in postData" :key="index">
      <v-col>
        <div class="d-flex">
          <EntryStageTracker
            :title="data.collaboration.title"
            :ctype="data.collaboration.ctype"
            :topic="data.collaboration.topicUnit"
            :courses="data.level"
            :entries="data.entries"
          />
          <div class="ml-auto w-25">
            <CollaborateProgress :progress="data.entries.length" />
            <div class="d-flex flex-column justify-content-end">
              <v-btn
                @click="
                  createDraft(
                    data.collaboration,
                    data.entries[0].postId,
                    data.level
                  )
                "
                v-if="data.entries.length < 3"
                icon="mdi-file-document-edit"
                class="mt-5 ml-auto mr-3"
              />
              <v-dialog
                transition="dialog-bottom-transition"
                max-width="500"
                persistent
              >
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    class="mt-5 ml-auto mr-3"
                    icon="mdi-trash-can"
                    v-bind="activatorProps"
                  />
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    title="Your about to delete"
                    prepend-icon="mdi-trash-can"
                    class="mx-auto"
                    min-width="450"
                  >
                    <v-card-text>
                      <v-list-item
                        v-for="(entry, index) in data.entries"
                        :key="index"
                        :value="entry"
                        color="primary"
                      >
                        <v-list-item-title v-text="entry.title" />
                      </v-list-item>
                    </v-card-text>
                    <template v-slot:actions>
                      <v-btn @click="isActive.value = false">Cancel</v-btn>
                      <v-btn
                        @click="deletePost(data.entries)"
                        text="Delete"
                        color="red"
                      />
                    </template>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useEditorStore } from "@/stores/editorStore";
import { usePostStore } from "@/stores/postStore";

const editorStore = useEditorStore();
const postStore = usePostStore();

export default {
  data: () => ({
    offset: 4,
  }),
  computed: {
    postData() {
      return postStore.together;
    },
  },
  methods: {
    async createDraft(data, postId, level) {
      await postStore.getPostData(postId);
      const authorRawData = postStore.postDetail.authorData;

      const authorData = authorRawData.map((peer) => {
        return { id: peer.user_id, username: peer.fullname, ...peer };
      });

      editorStore.setAuthors(authorData);
      editorStore.setPostType("Together");
      editorStore.setCourseLevel(level);
      editorStore.saveCollaborationData({ ...data });

      this.$router.push({ name: "draft" });
    },
    async deletePost(entries) {
      const entriesToDelete = entries.map((entry) => entry.postId);

      entriesToDelete.forEach(
        async (entryId) => await postStore.deletePost(entryId)
      );

      this.$router.push({ name: "collaborate" });
    },
    getPosts(page) {
      let currentPage = page || 1;
      postStore.loadTogether(this.offset * currentPage);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style>
.card-line {
  flex-direction: column;
  align-items: flex-start;
}

.tracker {
  margin-left: auto;
  width: 25%;
}
</style>
