<template>
  <CollaborateActivity :activities="activities" />
</template>

<script>
export default {
  data: () => ({
    activities: [
      {
        title: "Example",
        authors: ["Some", "Other"],
        level: ["Course 1"],
        data: [
          {
            postId: 1,
            title: "Test",
            image: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            description: "lorem",
          },
          {
            postId: 1,
            title: "Test",
            image: "",
            description: "lorem",
          },
          {
            postId: 1,
            title: "Test",
            image: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            description: "lorem",
          },
        ],
      },
      {
        title: "Example",
        authors: ["Some", "Other"],
        data: [
          {
            postId: 1,
            title: "Test",
            level: ["data"],
            image: "",
            description: "lorem",
          },
          {
            postId: 1,
            title: "Test",
            level: ["data"],
            image: "",
            description: "lorem",
          },
        ],
      },
    ],
  }),
};
</script>
