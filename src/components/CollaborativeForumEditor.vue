<template>
  <v-card flat>
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
      v-model="post"
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
      <v-btn
        class="ml-auto"
        color="primary"
        variant="tonal"
        prepend-icon="mdi-email-newsletter"
        @click="createPost"
        >Ask</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { useForumStore } from "@/stores/forumStore";

const forumStore = useForumStore()

export default {
  data: () => ({
    title: "",
    post: "",
  }),

  computed: {
    titleState() {
      return [this.title !== "" || "Every question needs a title"];
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
      postStore.createQuestion(this.title, this.post);
    },
  },
};
</script>
