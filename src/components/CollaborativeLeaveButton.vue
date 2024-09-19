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
      this.$router.back();
    },
  },
};
</script>
