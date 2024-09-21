<template>
  <v-container class="pt-6" fluid>
    <v-row v-for="(activity, index) in activities" class="mx-12">
      <v-col class="pa-4">
        <h2 class="text-h4">
          {{ activity.title }}
        </h2>
        <div class="d-flex pa-3">
          <div
            v-for="(data, index) in activity.data"
            @click="sendTo(activity.to)"
            class="pa-2 my-auto activity-sizing"
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
          </div>
        </div>

        <div class="d-flex mt-3 mb-6">
          <v-chip
            v-for="level in activity.level"
            class="pa-2 mr-auto text-truncate"
            color="primary"
          >
            {{ level }}
          </v-chip>

          <v-chip
            v-for="author in activity.authors"
            class="pa-2 ml-2 text-truncate"
          >
            {{ author }}
          </v-chip>
        </div>

        <v-divider class="mt-6"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    activities: {
      type: [Array, null],
      required: true,
    },
  },
  methods: {
    sendTo(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style>
.activity-sizing {
  width: 100vw;
}
</style>
