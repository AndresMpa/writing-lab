<template>
  <v-window v-model="onboarding" show-arrows="hover">
    <v-window-item v-for="(item, index) in top" :key="index">
      <v-card
        class="d-flex align-center justify-center py-12"
        elevation="2"
        height="200"
      >
        <div class="text-justify">
          <v-chip size="x-small" color="primary">{{ item.level.name }}</v-chip>
          <v-card-title class="title">{{ item.title }} </v-card-title>
          <v-card-actions>
            <v-btn
              v-if="item.id"
              :to="{ name: 'entry', params: { id: item.id } }"
              append-icon="mdi-link-variant"
              class="ml-auto"
              color="primary"
              size="small"
              text="Read"
            />
          </v-card-actions>
        </div>
      </v-card>
    </v-window-item>
  </v-window>
</template>
<script>
export default {
  props: {
    top: {
      type: [Object, null],
      default: [
        {
          level: "Collaborative",
          title: "Welcome to ILEX Writing Lab - Get Insights",
          description:
            "Here you will find different ideas to implement then in your classes",
        },
      ],
    },
  },
  data: () => ({
    onboarding: 0,
  }),
};
</script>

<style lang="sass" scoped>
.title
  white-space: normal
</style>
