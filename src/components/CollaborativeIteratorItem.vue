<template>
  <v-card class="pb-3" border flat>
    <v-img :src="img"></v-img>

    <v-list-item class="mb-2">
      <template v-slot:title>
        <strong class="text-h6 mb-2">{{ title }}</strong>
      </template>
    </v-list-item>

    <div class="d-flex justify-space-between px-4">
      <div class="d-flex align-center text-caption text-medium-emphasis me-1">
        <v-chip v-for="course in level" class="text-truncate" size="x-small">
          {{ course }}
        </v-chip>
      </div>

      <v-btn
        :to="
          date
            ? { name: 'question', params: { id: id } }
            : { name: 'entry', params: { id: id } }
        "
        :append-icon="date ? 'mdi-calendar' : 'mdi-link-variant'"
        :color="date ? 'secondary' : 'primary'"
        :text="date ? `Due to ${date}` : 'Read'"
        class="ml-auto"
        size="x-small"
        variant="text"
      />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    level: Array,
    date: String,
    img: String,
    id: String,
  },
};
</script>

<style scoped lang="sass">
.title
  white-space: normal
</style>
