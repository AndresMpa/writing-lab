<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <CollaborativeIterator
          @page-change="getPosts"
          :post="postData"
          :loading="loading"
          :itemsPerPage="itemsPerPage"
          :columnsPerPost="12"
          :rowsPerPost="6"
          noDescription
          useDate
          noImg
        />
      </v-col>
      <v-col>
        <CollaborativeForumEditor />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  data: () => ({
    loading: true,
    itemsPerPage: 5,
    offset: 5,
  }),
  computed: {
    postData() {
      return postStore.wonder;
    },
  },
  methods: {
    getPosts(page) {
      this.loading = true;
      let currentPage = page || 1;
      postStore.loadWonder(this.offset * this.itemsPerPage * currentPage);
      this.loading = false;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
