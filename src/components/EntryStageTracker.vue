<template>
  <v-card flat max-width="950">
    <v-card-text class="d-flex card-line">
      <div>
        <h2 class="font-weight-bold ms-1 mb-2">
          {{ title }}
        </h2>
        <div class="d-flex">
          <div class="mr-6">
            <v-chip v-for="course in courses">
              {{ course }}
            </v-chip>
          </div>
          <div>
            <v-chip class="mr-2">{{ topic }}</v-chip>
          </div>
          <div>
            <v-chip class="mr-2">{{ ctype }}</v-chip>
          </div>
        </div>
      </div>

      <v-timeline side="end">
        <v-timeline-item
          v-for="(entry, index) in entries"
          :key="entry"
          :dot-color="stages[index].color"
          size="small"
        >
          <v-alert
            :title="stages[index].title"
            :icon="stages[index].icon"
            :color="stages[index].color"
            :value="true"
          >
            <div class="text-h6 text-medium-emphasis">
              {{ entry.title }}
            </div>
            <div class="d-flex justify-end">
              <v-btn
                :to="{ name: 'entry', params: { id: entry.postId } }"
                :append-icon="'mdi-link-variant'"
                :text="'Check'"
                size="x-small"
                variant="text"
              ></v-btn>
            </div>
          </v-alert>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: [String],
      required: true,
    },
    courses: {
      type: Array,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    ctype: {
      type: String,
      required: true,
    },
    entries: {
      type: [Array, null],
      required: true,
    },
  },
  data: () => ({
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
};
</script>
