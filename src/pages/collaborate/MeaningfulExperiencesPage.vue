<template>
  <div v-if="postData.length > 0">
    <CollaborateScroller :items="postData" :load="loadData" />
  </div>
  <div v-else>
    <DisplayPicture
      currentTitle="Ups... There're not Meaningful experiences yet"
      :pictureToShow="4"
      goBack
    />
  </div>
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture.vue";
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  name: "MeaningfulExperiencesPage",
  data: () => ({
    offset: 4,
  }),
  computed: {
    postData() {
      if (postStore.selectedLevel) {
        return postStore.experiences.filter((data) =>
          data.level.includes(postStore.selectedLevel)
        );
      } else {
        return postStore.experiences;
      }
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
