<template>
  <v-card>
    <v-card-title>
      <h2 class="h4">{{ post.title }}</h2>
    </v-card-title>
    <v-card-subtitle>
      <v-chip>{{ post.level.name }}</v-chip>
    </v-card-subtitle>
    <v-container fluid>
      <v-row>
        <v-col v-for="author in profile">
          <ProfileCard :profile="author"></ProfileCard>
        </v-col>
      </v-row>
    </v-container>
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
