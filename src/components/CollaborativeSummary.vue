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
import insightImage from "../assets/img/insight.svg";
import experiencesImage from "../assets/img/experiences.svg";
import togetherImage from "../assets/img/together.svg";
import wonderImage from "../assets/img/wonder.svg";

export default {
  data: () => ({
    items: [
      {
        title: "Get insights",
        image: insightImage,
        label: "Get inspiring ideas from your peers",
        to: "getInsights",
      },
      {
        title: "Meaningful experiences",
        image: experiencesImage,
        label: "Explore and share students' work",
        to: "meaningfulExperiences",
      },
      {
        title: "I wonder how I could",
        image: togetherImage,
        label:
          "In trouble teaching Academic Writing? Get advice from your peers!",
        to: "wonderHowCould",
      },
      {
        title: "Let's work together",
        image: wonderImage,
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
