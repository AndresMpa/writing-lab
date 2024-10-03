<template>
  <div>
    <v-btn @click="logOut" prepend-icon="mdi-door-open" size="small">
      Leave
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push({ name: "collaborate" });
      }
    },
  },
};
</script>
