<template>
  <v-card flat max-width="950">
    <v-card-text class="d-flex card-line">
      <div>
        <h2 class="font-weight-bold ms-1 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        </h2>
        <div class="d-flex">
          <div class="mr-6">
            <v-chip>Course 1</v-chip>
          </div>
          <div>
            <v-chip class="mr-2">Course 1</v-chip>
            <v-chip class="mr-2">Course 1</v-chip>
            <v-chip class="mr-2">Course 1</v-chip>
          </div>
        </div>
      </div>

      <v-timeline side="end">
        <v-timeline-item
          v-for="item in items"
          :key="item.id"
          :dot-color="item.color"
          size="small"
        >
          <v-alert :color="item.color" :icon="item.icon" :value="true">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
          </v-alert>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
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
