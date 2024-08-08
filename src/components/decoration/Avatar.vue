<!-- GravatarImage.vue -->
<template>
  <v-avatar>
    <v-img
      v-if="profile.image"
      :src="profile.image"
      :alt="profile.nickname.charAt(0)"
    />

    <span v-else class="text-h5">
      {{ profile.nickname.charAt(0) }}
    </span>
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
