<template>
  <v-container fluid>
    <v-row class="h-100">
      <v-col cols="6" class="mx-auto">
        <v-card variant="text" class="my-6 mt-12">
          <v-img
            height="300"
            max-width="500"
            class="mx-auto"
            src="../../assets/img/loading.svg"
          />

          <v-progress-linear
            indeterminate
            color="primary"
            height="4"
          ></v-progress-linear>

          <v-card-title class="text-center">
            {{ currentTitle }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Loading",
  props: {
    currentTitle: {
      type: String,
      default: "Loading content",
    },
  },
};
</script>
