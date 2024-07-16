<!-- GravatarImage.vue -->
<template>
  <v-avatar>
    <span v-if="profile.image == ''" class="text-h5">
      {{ profile.username.charAt(0) }}
    </span>

    <v-img v-else :src="profile.image" :alt="profile.username.charAt(0)" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    avatarSize: {
      type: Number,
      default: 80,
    },
    profile: { type: Object },
  },
};
</script>

<style scoped></style>
