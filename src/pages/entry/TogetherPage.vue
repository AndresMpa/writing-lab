<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <EntryViewLeave title="Let's work together" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CollaborateSummary class="mt-1" :items="items" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StartImage from "../../assets/img/start.svg";
import ContinueImage from "../../assets/img/continue.svg";

export default {
  data: () => ({
    items: [
      {
        title: "Make a new collaboration",
        image: StartImage,
        label:
          "Press here to start collaborating with your peers on a new project",
        to: "newTogether",
      },
      {
        title: "Continue working",
        image: ContinueImage,
        label:
          "Complete your project! Press here to continue a collaborative project",
        to: "collaborateTogether",
      },
    ],
  }),
  methods: {
    leavePage() {
      this.$router.push({ name: "collaborate" });
    },
  },
};
</script>
