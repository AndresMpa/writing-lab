<template>
  <v-card class="pb-3 my-auto" border flat>
    <v-img :src="img" :max-height="200"  aspect-ratio="16/9" class="mx-auto" cover></v-img>

    <v-list-item class="mb-2" :href="date ? `question/${id}` : `post/${id}`">
      <template v-slot:title>
        <strong class="text-h6 mb-2 title">{{ title }}</strong>
      </template>
    </v-list-item>

    <div class="d-flex justify-space-between px-4">
      <div class="d-flex align-center text-caption text-medium-emphasis me-1">
        <v-chip v-for="course in level" class="mx-1 text-truncate" size="x-small">
          {{ course }}
        </v-chip>
      </div>

      <v-btn
        :to="
          date
            ? { name: 'question', params: { id: id } }
            : { name: 'entry', params: { id: id } }
        "
        :append-icon="
          date && !active
            ? 'mdi-check'
            : date
            ? 'mdi-calendar'
            : 'mdi-link-variant'
        "
        :color="date && !active ? 'purple' : date ? 'secondary' : 'primary'"
        :text="date && !active ? 'Solved' : date ? `Due ${date}` : 'Read'"
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
    active: Boolean,
    date: String,
    img: String,
    id: Number,
  },
};
</script>

<style scoped lang="sass">
.title
  white-space: normal
</style>
