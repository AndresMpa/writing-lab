<template>
  <v-container>
    <v-spacer class="my-6"></v-spacer>

    <v-card class="mx-auto" :loading="loading">
      <v-card-item>
        <ProfileCard :profile="profileData"></ProfileCard>
      </v-card-item>

      <ProfileSettingsInfo></ProfileSettingsInfo>
    </v-card>

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsCourses></ProfileSettingsCourses>

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsPassword></ProfileSettingsPassword>

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsDelete></ProfileSettingsDelete>

    <v-spacer class="my-6"></v-spacer>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  data: () => ({
    loading: false,
    profileData: null,
  }),
  created() {
    const userStore = useUserStore();
    this.profileData = userStore.userData;
  },
};
</script>
