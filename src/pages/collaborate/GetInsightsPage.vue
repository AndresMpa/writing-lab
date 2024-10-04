<template>
  <div v-if="postData.length > 0">
    <CollaborateBanner :top="topData" />
    <CollaborateIterator
      @hot-reload="reload"
      @page-change="getPosts"
      :itemsPerPage="itemsPerPage"
      :loading="loading"
      :post="postData"
      class="pb-2"
    />
  </div>
  <div v-else>
    <DisplayPicture
      currentTitle="Oh... There're not insight yet"
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
  data: () => ({
    loading: true,
    itemsPerPage: 8,
    offset: 8,
  }),
  computed: {
    topData() {
      return postStore.insight;
    },
    postData() {
      if (postStore.selectedLevel) {
        return postStore.insight.filter((data) =>
          data.level.includes(postStore.selectedLevel)
        );
      } else {
        return postStore.insight;
      }
    },
  },
  methods: {
    getPosts(page) {
      this.loading = true;
      let currentPage = page || 1;
      postStore.loadInsight(this.offset * this.itemsPerPage * currentPage);
      this.loading = false;
    },
    reload() {
      this.getPosts();
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
