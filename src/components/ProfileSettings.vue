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

    <ComboSearch @save-options="saveCourses" />

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsPassword />

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsDelete />

    <v-spacer class="my-6"></v-spacer>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

export default {
  data: () => ({
    loading: false,
    profileData: null,
  }),
  methods: {
    saveCourses(courses) {
      userStore.updateField({
        course: [...courses],
      });
    },
  },
  created() {
    this.profileData = userStore.userData;
  },
};
</script>
