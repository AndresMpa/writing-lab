<template>
  <v-data-iterator
    :items-per-page="itemsPerPage"
    :loading="loading"
    :search="search"
    :items="post"
    :page="page"
  >
    <template v-slot:default="{ items }">
      <v-container class="pt-6" fluid>
        <v-row v-for="(activity, index) in items" class="mx-2">
          <v-col class="py-4">
            <h2 class="text-h4">
              {{ activity.raw.collaboration.title }}
            </h2>
            <div class="d-flex pa-3 justify-space-around">
              <div
                class="pa-2 my-auto activity-sizing"
                v-for="(data, index) in activity.raw.entries"
              >
                <CollaborateIteratorItem
                  :id="data.postId"
                  :title="data.title"
                  :level="data.level"
                  :img="data.image"
                  :description="data.description"
                  :date="data.date"
                  :active="data.active"
                />

                <v-alert
                  :icon="stages[index].icon"
                  :title="stages[index].title"
                  :color="stages[index].color"
                  class="my-4"
                />
              </div>
            </div>

            <div class="d-flex mt-3 mb-6">
              <v-chip
                v-for="level in activity.raw.level"
                class="pa-2 mr-auto text-truncate"
                color="primary"
              >
                {{ level }}
              </v-chip>
              <v-chip class="pa-2 ml-auto text-truncate" color="secondary">
                {{ activity.raw.collaboration.ctype }}
              </v-chip>
            </div>

            <v-divider class="mt-6"></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    rowsPerPost: {
      type: Number,
      default: 2,
    },
    columnsPerPost: {
      type: Number,
      default: 3,
    },
    post: {
      type: [Array],
    },
  },
  data: () => ({
    search: "",
    page: 1,
    stages: [
      {
        title: "Planning stage",
        icon: "mdi-notebook-outline",
        color: "deep-purple-darken-4",
      },
      {
        title: "Execution stage",
        icon: "mdi-briefcase",
        color: "light-blue-darken-3",
      },
      {
        title: "Assessment stage",
        icon: "mdi-message-bulleted",
        color: "light-blue-accent-4",
      },
    ],
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.post.length / this.itemsPerPage);
    },
  },
  methods: {
    pageChange(page) {
      this.$emit("pageChange", page);
    },
    sendTo(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style>
.activity-sizing {
  min-width: 30vw;
}
</style>
