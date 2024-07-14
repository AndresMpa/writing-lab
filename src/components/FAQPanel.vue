<template>
  <v-container>
    <v-expansion-panels class="my-4" variant="inset">
      <v-expansion-panel
        v-for="(item, index) in items"
        :key="index"
        :text="item.text"
        :title="item.title"
      ></v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: [Array, null],
      required: true,
    },
  },
};
</script>
