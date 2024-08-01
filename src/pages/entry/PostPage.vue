<template>
  <div v-if="postData">
    <div class="position-relative">
      <CollaborativeLeaveButton class="position-fixed top-0 left-0 ml-3 mt-3" />
    </div>
    <div v-if="enableActions" class="dial">
      <CollaborativeDial :dialActions="dialData" />
    </div>
    <EntryView :item="postData" />
    <EntryAuthor :post="postData" :profile="authorData" />
  </div>
  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture";

import { useEditorStore } from "@/stores/editorStore";
import { usePostStore } from "@/stores/postStore";
import { useUserStore } from "@/stores/userStore";

const postStore = usePostStore();
const userStore = useUserStore();
const editorStore = useEditorStore();

export default {
  name: "PostPage",
  data: () => ({
    postData: null,
    authorData: null,
    dialData: null,
  }),
  computed: {
    enableActions() {
      return this.authorData.some((user) => user.id === userStore.userId);
    },
  },
  methods: {
    async getData(id) {
      await postStore.getPostData(id);

      this.postData = postStore.postDetail.postData;
      this.authorData = postStore.postDetail.authorData;
    },
    logOut() {
      this.$router.back();
    },
    loadDataToEdit() {
      editorStore.loadDataToEdit();
    },
    deletePost(id) {
      postStore.deletePost(id);
    },
  },
  created() {
    this.$watch(() => this.$route.params.id, this.getData, {
      immediate: true,
    });

    this.dialData = [
      {
        icon: "mdi-text-box-edit",
        label: "Edit this post",
        action: this.loadDataToEdit,
      },
      {
        icon: "mdi-delete",
        label: "Delete post",
        action: this.deletePost,
      },
    ];
  },
};
</script>

<style scoped>
.dial {
  position: fixed;
  bottom: calc(100vh - 56px * 1);
  left: calc(100vw - 56px * 1.8);
  z-index: 100;
}
</style>
