<template>
  <div>
    <v-alert
      border="start"
      v-model="alert"
      icon="mdi-book-information-variant"
      close-label="Close Alert"
      title="Disclaimer alert"
      variant="tonal"
      closable
    >
      To create your account we require you to read the terms of usage of this
      platform, by clicking the checkbox below we are assuming you read the
      terms and conditions of usage
    </v-alert>
  </div>
</template>
<script>
export default {
  data: () => ({
    alert: true,
  }),
};
</script>
