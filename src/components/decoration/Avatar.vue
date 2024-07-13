<!-- GravatarImage.vue -->
<template>
  <v-avatar>
    <span v-if="profileImage === ''" class="text-h5">
      {{ username.charAt(0) }}
    </span>

    <v-img v-else :src="profileImage" :alt="username.charAt(0)" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    avatarSize: {
      type: Number,
      default: 80,
    },
  },
  computed: {
    profileImage() {
      return "https://randomuser.me/api/portraits/women/80.jpg";
    },
    username() {
      return "Jane Doe";
    },
    nickname() {
      return "jDoe4";
    },
  },
};
</script>

<style scoped></style>
