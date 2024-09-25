<template>
  <v-card class="mx-auto">
    <v-toolbar
      :elevation="8"
      :color="loading ? 'primary' : ''"
      density="compact"
      class="d-flex"
    >
      <v-btn prepend-icon="mdi-door-open" @click="leavePage">Leave</v-btn>
      <v-spacer></v-spacer>
      <h2 class="text-h5 mx-3">{{ title }}</h2>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    title: String,
  },
  methods: {
    leavePage() {
      this.$router.push({ name: "collaborate" });
    },
  },
};
</script>
