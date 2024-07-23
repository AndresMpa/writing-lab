<template>
  <CollaborativeIterator
    :post="postData"
    :columnsPerPost="12"
    noDescription
    useDate
    noImg
  />
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  data: () => ({
    postData: null,
  }),
  created() {
    postStore.loadInsight();
    this.postData = postStore.insightPost;
    this.topData = postStore.insightPost;
  },
};
</script>
