<template>
  <div v-if="forumData">
    <v-container fluid>
      <v-row>
        <v-col>
          <CollaborativeLeaveButton />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <CollaborativeForum
            :question="forumData.postData"
            :canEnd="enableActions"
          />
        </v-col>
      </v-row>
    </v-container>
    <CollaborativeBento :comments="forumData.commentsData" />
  </div>

  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import { usePostStore } from "@/stores/postStore";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

export default {
  computed: {
    enableActions() {
      return this.postStore.postDetail.authorData.some((user) => user.user_id === userStore.userId) || false;
    },
    forumData() {
      return this.postStore.postDetail;
    },
  },
  methods: {
    async getData(id) {
      await this.postStore.getPostData(id);
    },
  },
  created() {
    this.postStore = usePostStore();
    this.$watch(() => this.$route.params.id, this.getData, {
      immediate: true,
    });
  },
};
</script>
