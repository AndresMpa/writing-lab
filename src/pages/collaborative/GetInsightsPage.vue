<template>
  <CollaborativeBanner :top="topData" />
  <v-container fluid>
    <v-row class="ma-2">
      <v-col>
        <h2>Last insight posted</h2>
      </v-col>
    </v-row>
  </v-container>
  <CollaborativeIterator
    @page-change="getPosts"
    :itemsPerPage="itemsPerPage"
    :loading="loading"
    :post="postData"
    class="pb-2"
  />
</template>

<script>
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
      return postStore.insight;
    },
  },
  methods: {
    getPosts(page) {
      this.loading = true;
      let currentPage = page || 1;
      postStore.loadInsight(this.offset * this.itemsPerPage * currentPage);
      this.loading = false;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
