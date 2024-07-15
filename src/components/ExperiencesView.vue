<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="ml-5" style="width: 400px">
        <v-card-title class="text-h5 text-break title">
          {{ title }}
        </v-card-title>
        <v-card-subtitle>{{ description }}</v-card-subtitle>

        <div class="d-flex justify-space-between pa-4">
          <v-chip size="x-small">{{ level }}</v-chip>

          <v-btn
            :to="{ name: 'entry', params: { id: id } }"
            append-icon="mdi-link-variant"
            variant="tonal"
            class="ml-auto"
            color="primary"
            size="x-small"
            text="Read"
          />
        </div>
      </div>

      <v-avatar class="ma-3" rounded="0" size="125">
        <v-img :src="img"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    level: String,
    img: String,
    id: String,
  },
};
</script>

<style scoped lang="sass">
.title
  white-space: normal
</style>
