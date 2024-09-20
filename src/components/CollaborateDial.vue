<template>
  <v-speed-dial
    small
    location="left center"
    transition="slide-x-reverse-transition"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab
        v-bind="activatorProps"
        :size="iconSize"
        :icon="mainIcon"
        color="primary"
      ></v-fab>
    </template>

    <div v-for="(dial, index) in dialActions" key="1">
      <v-tooltip location="bottom" :key="index">
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
            color="secondary"
            @click="dial.action"
            :key="index"
          >
            <v-icon> {{ dial.icon }} </v-icon>
          </v-btn>
        </template>
        <span>{{ dial.label }}</span>
      </v-tooltip>
    </div>
  </v-speed-dial>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: String,
      default: "large",
    },
    mainIcon: {
      type: String,
      default: "mdi-plus",
    },
    dialActions: {
      type: [Array],
      required: true,
    },
  },
};
</script>
