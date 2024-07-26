<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <CollaborativeIterator
          :post="postData"
          :itemsPerPage="5"
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
    postData: null,
    statesToFilter: null,
    states: ["Active", "Closed"],
  }),
  created() {
    postStore.loadWonder();
    this.postData = postStore.wonderPost;
  },
};
</script>

<style lang="scss" scoped>
.w-95 {
  width: 95%;
}
</style>
