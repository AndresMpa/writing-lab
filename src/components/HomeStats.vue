<template>
  <v-container fluid>
    <v-row class="mx-auto w-75">
      <v-col align="center" v-for="item in items">
        <v-progress-circular
          color="primary"
          :model-value="item.value"
          :rotate="360"
          :size="item.size ? item.size : 100"
          :width="15"
        >
          {{ item.value }}%
        </v-progress-circular>
        <h5 class="mt-3">{{ item.label }}</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          value: 25,
          label: "AW Basic",
        },
        {
          value: 45,
          label: "Collaborate",
          size: 120,
        },
        {
          value: 35,
          label: "AW Teaching",
        },
      ],
    };
  },
};
</script>
