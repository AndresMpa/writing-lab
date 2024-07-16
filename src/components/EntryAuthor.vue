<template>
  <v-card>
    <div class="d-flex">
      <h2 class="h4">{{ post.title }}</h2>
      <v-chip>{{ post.level }}</v-chip>
    </div>
    <ProfileCard :profile="profile"></ProfileCard>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>
