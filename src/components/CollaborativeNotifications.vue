<template>
  <v-list>
    <v-list-item
      @click="dialogBell = !dialogBell"
      prepend-icon="mdi-bell"
      title="Notifications"
      link
    >
      <template v-slot:append>
        <v-badge
          v-if="notificationCount > 0"
          color="primary"
          :content="notificationCount"
          inline
        ></v-badge>
      </template>
    </v-list-item>

    <v-list-item
      @click="createDraft"
      prepend-icon="mdi-draw"
      title="Write an new post"
      link
    >
    </v-list-item>

    <v-dialog v-model="dialogBell" width="auto">
      <v-card width="800" prepend-icon="mdi-bell" title="Your notifications">
        <v-card
          class="d-flex justify-space-between"
          v-for="(item, index) in notificationList"
          :key="index"
          flat
        >
          <v-card-title>
            <h4 class="ml-6 mr-3">{{ item }}</h4>
          </v-card-title>
          <v-card-actions>
            <v-btn
              icon="mdi-check-bold"
              size="small"
              @click="checkNotification"
            ></v-btn>
          </v-card-actions>
        </v-card>
        <template v-slot:actions>
          <v-btn
            text="Close"
            class="ms-auto"
            @click="reviewNotifications"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-list>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

export default {
  data: () => ({
    dialogBell: false,
  }),
  computed: {
    notificationCount() {
      return userStore.notification.length;
    },
    notificationList: {
      get() {
        return userStore.notification;
      },
      set(value) {
        userStore.notification = value;
      },
    },
  },
  methods: {
    checkNotification(index) {
      this.notificationList.splice(index, 1);
    },
    reviewNotifications() {
      this.dialogBell = false;
      userStore.updateNotificationList();
    },
    createDraft() {
      this.$router.push({ name: "draft" });
    },
  },
};
</script>
