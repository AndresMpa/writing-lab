<template>
  <v-sheet
    class="d-flex align-center px-4 py-4 ml-auto w-25"
    max-height="60"
    color="#181a1b"
    rounded="lg"
  >
    <v-progress-linear
      :model-value="progress"
      :location="null"
      bg-color="#12aede"
      buffer-color="#e12b5a"
      buffer-opacity="1"
      buffer-value="3"
      color="#1970c6"
      height="12"
      max="3"
      min="1"
      rounded
    ></v-progress-linear>

    <div class="ms-4 text-h6">{{ progress }}/3</div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    progress: Number,
  },
};
</script>
