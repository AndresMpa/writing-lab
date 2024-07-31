<template>
  <CollaborativeScroller :items="postData" :load="loadData" />
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  name: "MeaningfulExperiencesPage",
  data: () => ({
    offset: 4,
  }),
  computed: {
    postData() {
      return postStore.experiences;
    },
  },
  methods: {
    async loadData({ done }) {
      if (postStore.noData) {
        done("empty");
      } else {
        await postStore.loadExperiences(this.offset);
        done("ok");
      }
    },
  },
};
</script>
