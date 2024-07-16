<template>
  <v-dialog v-model="dialogBell" width="auto">
    <v-card
      :prepend-icon="notificationData.icon"
      :title="notificationData.title"
      :text="notificationData.text"
      max-width="400"
    >
      <template v-slot:actions>
        <v-btn
          @click="dialogBell = !dialogBell"
          class="ms-auto"
          text="Continue"
        ></v-btn>
        <v-btn
          @click="dialogBell = !dialogBell"
          class="ms-auto"
          text="Close"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    notificationData: [Object],
  },
  data: () => ({
    dialogBell: false,
  }),
};
</script>
