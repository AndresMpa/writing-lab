<template>
  <div
    v-if="small"
    class="d-flex justify-center align-center mb-6x mx-auto w-25"
  >
    <v-img
      src="../../assets/img/utp.png"
      class="mx-auto my-6"
      max-width="84"
    ></v-img>
    <v-img
      src="../../assets/img/ilex.png"
      class="mx-auto my-6"
      max-width="84"
    ></v-img>
  </div>

  <v-card v-else variant="text" class="my-6 mt-12">
    <v-img
      height="300"
      max-width="500"
      class="mx-auto"
      src="../../assets/img/logout.svg"
    />

    <v-card-title class="text-center">
      {{ currentTitle }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "DecorationLog",
  props: {
    small: Boolean,
  },
  data: () => ({
    items: [
      "Come back soon, we will keep working!",
      "We are working to develop language, keep up with us!",
      "Share your new experiences soon!",
      "Keep on the top with collaborative!",
    ],
  }),
  computed: {
    currentTitle() {
      const randomIndex = Math.floor(Math.random() * this.items.length);
      return this.items[randomIndex];
    },
  },
};
</script>
