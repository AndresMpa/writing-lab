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
export default {
  name: "SettingsProfile",
  data: () => ({
    loading: false,
  }),
  computed: {
    profileData() {
      const data = {
        username: "Jane Doe",
        nickname: "jDoe4",
        courses: [
          "Course 1",
          "Course 2",
          "Course 3",
          "Course 4",
          "Course 5",
          "Course 6",
          "Course 7",
          "Course 8",
        ],
      };
      return data;
    },
  },
};
</script>
