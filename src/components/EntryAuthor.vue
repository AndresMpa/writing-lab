<template>

  <v-card>
    <ProfileCard :profile="profileData"></ProfileCard>
  </v-card>
</template>

<script>
export default {
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
