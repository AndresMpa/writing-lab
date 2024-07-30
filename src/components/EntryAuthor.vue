<template>
  <v-card>
    <v-card-title>
      <h2 class="h4">{{ post.title }}</h2>
    </v-card-title>
    <v-card-subtitle class="d-flex">
      <v-chip class="mr-4" variant="outlined" color="primary">
        {{ post.postType }}
      </v-chip>
      <div v-for="item in post.level">
        <v-chip class="mr-2">{{ item }}</v-chip>
      </div>
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
