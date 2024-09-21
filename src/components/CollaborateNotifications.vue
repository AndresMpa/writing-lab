<template>
  <v-btn icon="mdi-bell" variant="text" @click="dialogBell = !dialogBell">
    <template v-slot:append>
      <v-badge
        v-if="notificationCount > 0"
        :content="notificationCount"
        color="primary"
        inline
      ></v-badge>
    </template>
  </v-btn>
  <v-dialog v-model="dialogBell" width="auto">
    <template v-slot:default="{ isActive }">
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
    </template>
  </v-dialog>
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
    workTogether() {
      this.$router.push({ name: "workTogether" });
    },
  },
};
</script>
