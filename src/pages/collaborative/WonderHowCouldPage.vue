<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <CollaborativeIterator
          :post="postData"
          :itemsPerPage="6"
          :columnsPerPost="12"
          :rowsPerPost="6"
          noDescription
          useDate
          noImg
        />
      </v-col>
      <v-col>
        <v-card flat>
          <v-card-title class="d-flex justify-space-between mb-0 mt-2">
            <h3>Last posted</h3>
          </v-card-title>
          <v-divider class="mt-2 mb-4"></v-divider>

          <CollaborativeIteratorItem
            :id="postData[0].id"
            :title="postData[0].title"
            :level="postData[0].level.name"
            :date="postData[0].date"
          />
        </v-card>
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
