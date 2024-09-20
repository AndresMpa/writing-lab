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
  props: {
    items: Array,
  },
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
