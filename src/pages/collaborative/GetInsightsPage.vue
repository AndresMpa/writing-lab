<template>
  <InsightBanner :top="topData" />
  <v-container fluid>
    <v-row class="ma-2">
      <v-col>
        <h2>Last insight posted</h2>
      </v-col>
      <v-col cols="1" class="d-flex">
        <v-spacer></v-spacer>
        <CollaborativeDial :dialActions="dialData" />
      </v-col>
    </v-row>
  </v-container>
  <InsightIterator :loading="fetchingData" :post="postData" />
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  data: () => ({
    topData: null,
    postData: null,
    dialData: null,
    fetchingData: true,
  }),
  methods: {
    createDraft() {
      this.$router.push({ name: "draft" });
    },
    toggleTop() {
      postStore.toggleTopVisibility();
    },
  },
  created() {
    postStore.getExample(1);
    this.postData = postStore.insightPost;
    this.topData = postStore.insightPost;

    this.dialData = [
      {
        icon: "mdi-draw",
        label: "Write an insight",
        action: this.createDraft,
      },
    ];

    this.fetchingData = false;
  },
};
</script>
