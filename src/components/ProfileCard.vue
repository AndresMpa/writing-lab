<template>
  <v-banner stacked>
    <template v-slot:prepend>
      <Avatar :size="60" :profile="profile"></Avatar>
    </template>

    <v-banner-text>
      <h2 class="text-h6">{{ profile.username }}</h2>
      <p>{{ profile.nickname }}</p>
    </v-banner-text>

    <v-divider vertical></v-divider>

    <div v-for="course in profile.courses" class="ml-2">
      <v-chip class="ml-1">{{ course }}</v-chip>
    </div>
  </v-banner>
</template>

<script>
import Avatar from "@/components/decoration/Avatar.vue";

export default {
  props: {
    profile: Object,
  },
};
</script>
