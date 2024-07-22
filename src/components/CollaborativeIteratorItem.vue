<template>
  <v-card class="pb-3" border flat>
    <v-img :src="img"></v-img>

    <v-list-item :subtitle="description" class="mb-2">
      <template v-slot:title>
        <strong class="text-h6 mb-2">{{ title }}</strong>
      </template>
    </v-list-item>

    <div class="d-flex justify-space-between px-4">
      <div class="d-flex align-center text-caption text-medium-emphasis me-1">
        <v-chip class="text-truncate" size="x-small">{{ level }}</v-chip>
      </div>

      <v-btn
        :to="{ name: 'entry', params: { id: id } }"
        append-icon="mdi-link-variant"
        variant="text"
        class="ml-auto"
        color="primary"
        size="x-small"
        text="Read"
      />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    description: String,
    title: String,
    level: String,
    img: String,
    id: String,
  },
};
</script>
