<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="6">
        <v-img
          height="300"
          max-width="500"
          class="mx-auto"
          :src="item.image || deco"
        />
      </v-col>
      <v-col cols="6" class="my-auto mx-auto">
        <div v-if="item.collaboration && item.collaboration.ctype && item.collaboration.topicUnit">
          <v-chip color="primary">
            {{ item.collaboration.ctype }}
          </v-chip>
          <v-chip color="secondary" class="mx-4">
            {{ item.collaboration.topicUnit }}
          </v-chip>
        </div>
        <v-card class="mx-auto my-2">
          <h1 class="h1 pa-3">
            {{ item.title }}
          </h1>
        </v-card>
        <h4 class="h4" v-if="item.collaboration && item.collaboration.title">
          From: <i>{{ item.collaboration.title }}</i>
        </h4>
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
    <v-row no-gutters>
      <v-col v-if="item.extra[0] !== null">
        <v-card title="References"></v-card>
        <p v-for="(reference, index) in item.extra" class="pa-3 font-weight-black">
          <a
            class="cursor-pointer text-body-1 font-weight-thin"
            :href="reference"
            target="_blank"
            >{{ index + 1 }}. {{ reference }}</a
          >
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import deco from "@/assets/img/deco.png";

export default {
  props: {
    item: Object,
  },
  data: () => ({
    deco,
  }),
};
</script>
