<template>
  <v-container class="pt-6" fluid>
    <v-row class="mx-12 mt-6">
      <v-col v-for="(item, index) in items" class="text-center">
        <div @click="sendTo(item.to)" class="pointer">
          <h2 class="text-h6 font-weight-black">
            {{ item.title }}
          </h2>
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
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Get insights",
        image: "/src/assets/img/insight.svg",
        label: "Get inspiring ideas from your peers",
        to: "getInsights",
      },
      {
        title: "Meaningful experiences",
        image: "/src/assets/img/experiences.svg",
        label: "Explore and share students' work",
        to: "meaningfulExperiences",
      },
      {
        title: "I wonder how I could",
        image: "/src/assets/img/together.svg",
        label:
          "In trouble teaching Academic Writing? Get advice from your peers!",
        to: "wonderHowCould",
      },
      {
        title: "Let's work together",
        image: "/src/assets/img/wonder.svg",
        label: "Join your peers to collaborate in Academic Writing projects",
        to: "workTogether",
      },
    ],
  }),
  methods: {
    sendTo(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
