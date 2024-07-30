<template>
  <v-card class="ma-2">
    <v-card-title class="d-flex align-center">
      <h2>{{ question.title }}</h2>

      <v-chip class="ml-auto" :color="question.active ? 'primary' : 'purple'">
        {{ question.date }}
      </v-chip>
    </v-card-title>
    <v-card-text>{{ question.description }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="d-flex" v-if="canEnd">
      <v-btn
        size="small"
        color="primary"
        class="ml-auto pa-2"
        @click="answerQuestion(question.id)"
      >
        Mark as answered
      </v-btn>
    </v-card-actions>
    <v-card-actions class="d-flex" v-else>
      <v-textarea
        :rules="commentRules"
        v-model="newComment"
        placeholder="Add a contribution"
        variant="underlined"
        autocomplete="on"
        name="textarea"
        class="mx-5"
        auto-grow
        counter
        rows="1"
      ></v-textarea>
      <v-btn
        @click="postComment(question.id)"
        :disabled="enableSend"
        class="ml-auto pa-2"
        size="small"
        icon="mdi-send"
      >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useForumStore } from "@/stores/forumStore";

const forumStore = useForumStore

export default {
  props: {
    canEnd: {
      type: Boolean,
      default: false,
    },
    question: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    newComment: "",
  }),
  computed: {
    commentRules() {
      return [
        (value) =>
          value.length < 1048 ||
          "Your comment cannot be longer than 1048 characters",
      ];
    },
    enableSend() {
      return this.newComment.length > 1048;
    },
  },
  methods: {
    answerQuestion(postId) {
      forumStore.answerQuestion(postId);
    },
    postComment(postId) {
      forumStore.postComment(postId);
    },
  },
};
</script>
