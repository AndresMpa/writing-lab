<template>
  <v-list>
    <v-list-item
      @click="dialogBell = !dialogBell"
      prepend-icon="mdi-bell"
      title="Notifications"
      link
    >
      <template v-slot:append>
        <v-badge color="primary" content="6" inline></v-badge>
      </template>
    </v-list-item>

    <v-list-item
      @click="createDraft"
      prepend-icon="mdi-draw"
      title="Write an insight"
      link
    >
    </v-list-item>

    <v-dialog v-model="dialogBell" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-bell"
        title="Your notifications"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Close"
            @click="dialogBell = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    dialogBell: false,
  }),
  methods: {
    createDraft() {
      this.$router.push({ name: "draft" });
    },
  },
};
</script>
