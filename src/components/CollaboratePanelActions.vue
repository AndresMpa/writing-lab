<template>
  <v-list>
    <v-list-item
      @click="createDraft"
      prepend-icon="mdi-draw"
      title="Write a new post"
      link
    >
    </v-list-item>

    <v-list-item
      @click="createQuestion"
      prepend-icon="mdi-chat-question"
      title="I wonder how I could"
      link
    >
    </v-list-item>

    <v-list-item
      @click="workTogether"
      prepend-icon="mdi-account-group"
      title="Let's work together"
      link
    >
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  methods: {
    createDraft() {
      this.$router.push({ name: "draft" });
    },
    createQuestion() {
      this.$router.push({ name: "ask" });
    },
    workTogether() {
      this.$router.push({ name: "together" });
    }
  },
};
</script>

