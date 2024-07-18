<template>
  <Experiences :items="postData" :load="loadData" />
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  name: "MeaningfulExperiencesPage",
  data: () => ({
    postData: null,
  }),
  methods: {
    async loadData({ done }) {
      postStore.loadExperiences();
      done("ok");
    },
  },
  created() {
    postStore.loadExperiences();
    this.postData = postStore.experiencesPost;
  },
};
</script>
