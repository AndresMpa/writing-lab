<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="6">
        <v-img
          height="300"
          max-width="500"
          class="mx-auto"
          src="../assets/img/logout.svg"
        />
      </v-col>
      <v-col cols="6" class="my-auto mx-auto">
        <v-card class="mx-auto">
          <h1 class="h1 pa-3">
            {{ item.title }}
          </h1>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-6">
      <v-divider inset></v-divider>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <p class="text-body-1 pa-4">
          {{ item.description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    item: Object,
  },
  data: () => ({}),
};
</script>
