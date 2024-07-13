<template>
  <v-container>
    <v-spacer class="my-6"></v-spacer>

    <v-card class="mx-auto" :loading="loading">
      <v-card-item>
        <v-banner stacked>
          <template v-slot:prepend>
            <Avatar :size="60"></Avatar>
          </template>

          <v-banner-text>
            <h2 class="text-h6">{{ username }}</h2>
            <p>{{ nickname }}</p>
          </v-banner-text>

          <v-divider vertical></v-divider>

          <div v-for="course in courses" class="ml-2">
            <v-chip class="ml-1">{{ course }}</v-chip>
          </div>
        </v-banner>
      </v-card-item>

      <ProfileSettingsInfo></ProfileSettingsInfo>
    </v-card>

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsPassword></ProfileSettingsPassword>

    <v-spacer class="my-6"></v-spacer>

    <ProfileSettingsDelete></ProfileSettingsDelete>

    <v-spacer class="my-6"></v-spacer>
  </v-container>
</template>

<script>
import Avatar from "@/components/decoration/Avatar.vue";

export default {
  name: "SettingsProfile",
  data: () => ({
    loading: false,
  }),
  computed: {
    username() {
      return "Jane Doe";
    },
    nickname() {
      return "jDoe4";
    },
    courses() {
      return [
        "Course 1",
        "Course 2",
        "Course 3",
        "Course 4",
        "Course 5",
        "Course 6",
        "Course 7",
        "Course 8",
      ];
    },
  },
};
</script>
