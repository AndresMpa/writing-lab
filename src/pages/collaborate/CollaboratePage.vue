<template>
  <CollaborateDescription />
  <CollaborateSummary :items="items" />
</template>

<script>
import insightImage from "../../assets/img/insight.svg";
import experiencesImage from "../../assets/img/experiences.svg";
import collaborateImage from "../../assets/img/collaborate.svg";
import wonderImage from "../../assets/img/wonder.svg";


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
        title: "Help your peers",
        image: wonderImage,
        label:
          "In trouble teaching Academic Writing? Get advice from your peers!",
        to: "wonderHowCould",
      },
      {
        title: "Collaborative activities",
        image: collaborateImage,
        label: "Join your peers to collaborate in Academic Writing projects",
        to: "collaborativeActivities",
      },
    ],
  }),
};
</script>
