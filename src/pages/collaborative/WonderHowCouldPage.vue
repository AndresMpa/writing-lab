<template>
  <v-container fluid>
    <v-row v-if="success || error">
      <v-col>
        <v-alert
          closable
          type="info"
          icon="$success"
          title="Question posted"
          v-if="success"
        ></v-alert>
        <v-alert
          closable
          icon="$error"
          color="purple"
          title="Question could not be posted try again later"
          v-if="error"
        >
        </v-alert>
      </v-col>
    </v-row>
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
import { useForumStore } from "@/stores/forumStore";
import { usePostStore } from "@/stores/postStore";

const forumStore = useForumStore();
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
    error: {
      get() {
        return forumStore.error;
      },
      set(value) {
        forumStore.error = value;
      },
    },
    success: {
      get() {
        return forumStore.success;
      },
      set(value) {
        forumStore.success = value;
      },
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
