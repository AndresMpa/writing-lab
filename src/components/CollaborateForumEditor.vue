<template>
  <v-card :loading="loading">
    <v-card-title class="d-flex justify-space-between mb-0 mt-2">
      <h3>Write a new question</h3>
    </v-card-title>

    <v-divider class="mt-2 mb-4"></v-divider>

    <v-textarea
      v-model="title"
      :rules="titleState"
      placeholder="Question title"
      class="mx-5 my-1"
      variant="underlined"
      autocomplete="on"
      name="textarea"
      rows="1"
      auto-grown
      counter
    ></v-textarea>

    <v-textarea
      v-model="description"
      :rules="descriptionState"
      placeholder="Question description"
      variant="underlined"
      autocomplete="on"
      name="textarea"
      class="mx-5"
      maxRows="5"
      rows="5"
      auto-grown
      counter
    ></v-textarea>

    <v-divider class="mt-12 mb-4"></v-divider>

    <v-card-actions class="d-flex">
      <CollaborateForumForm />

      <v-btn
        @click="createPost"
        :color="canSend ? '' : 'primary'"
        :disabled="canSend"
        class="font-weight-regular"
        prepend-icon="mdi-email-newsletter"
        variant="tonal"
        text="Publish"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useForumStore } from "@/stores/forumStore";

export default {
  computed: {
    canSend() {
      return (
        this.forumStore.title === null ||
        this.forumStore.description === null ||
        this.forumStore.dueDate === null
      );
    },
    loading() {
      return this.forumStore.loading;
    },
    title: {
      get() {
        return this.forumStore.title;
      },
      set(value) {
        this.forumStore.title = value;
      },
    },
    description: {
      get() {
        return this.forumStore.description;
      },
      set(value) {
        this.forumStore.description = value;
      },
    },
    titleState() {
      return [(value) => value !== "" || "Every question needs a title"];
    },
    descriptionState() {
      return [
        (value) =>
          value.length >= 25 || "Description must have at least 25 characters",
        (value) =>
          value.length <= 250 ||
          "Description must have least than 250 characters",
      ];
    },
  },

  methods: {
    createPost() {
      this.forumStore.createQuestion();
    },
  },
  created() {
    this.forumStore = useForumStore();
  },
};
</script>
