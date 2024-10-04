<template>
  <div v-if="postData.length > 0">
    <CollaborateActivity
      @page-change="getPosts"
      :itemsPerPage="itemsPerPage"
      :loading="loading"
      :post="postData"
      class="pb-2"
    />
  </div>
  <div v-else>
    <DisplayPicture
      currentTitle="Ups... There's not collaborate activities yet"
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
    itemsPerPage: 4,
    offset: 4,
  }),
  computed: {
    postData() {
      if (postStore.selectedLevel) {
        return postStore.together.filter((data) =>
          data.level.includes(postStore.selectedLevel)
        );
      } else {
        return postStore.together;
      }
    },
  },
  methods: {
    getPosts(page) {
      this.loading = true;
      let currentPage = page || 1;
      postStore.loadTogether(this.offset * this.itemsPerPage * currentPage);
      this.loading = false;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
