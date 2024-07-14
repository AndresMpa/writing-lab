<template>
  <v-container class="pt-12" fluid>
    <v-row class="mx-12 mt-6">
      <v-col v-for="(item, index) in items" class="text-center">
        <v-img
          cover
          :key="index"
          :width="250"
          :src="item.image"
          class="mx-auto"
          aspect-ratio="16/9"
        ></v-img>
        <v-sheet class="pa-2 ma-2 mx-auto">
          {{ item.label }}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "/src/assets/img/insight.svg",
        label: "Get inspiring ideas from your peers",
      },
      {
        image: "/src/assets/img/experiences.svg",
        label: "Explore and share students' work",
      },
      {
        image: "/src/assets/img/together.svg",
        label:
          "In trouble teaching Academic Writing? Get advice from your peers!",
      },
      {
        image: "/src/assets/img/wonder.svg",
        label: "Join your peers to collaborate in Academic Writing projects",
      },
    ],
  }),
};
</script>
