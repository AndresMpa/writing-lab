<template>
  <CollaborativeBanner :top="topData" />
  <v-container fluid>
    <v-row class="ma-2">
      <v-col>
        <h2>Last insight posted</h2>
      </v-col>
    </v-row>
  </v-container>
  <CollaborativeIterator :post="postData" class="pb-2" :itemsPerPage="8"/>
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  data: () => ({
    topData: null,
    postData: null,
    dialData: null,
  }),
  created() {
    postStore.loadInsight();
    this.postData = postStore.insightPost;
    this.topData = postStore.insightPost;
  },
};
</script>
