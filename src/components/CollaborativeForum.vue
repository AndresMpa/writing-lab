<template>
  <v-card class="ma-2" :loading="loading">
    <v-card-title class="d-flex align-center">
      <h2>{{ question.title }}</h2>

      <v-chip class="ml-auto" :color="question.active ? 'primary' : 'purple'">
        {{ question.date }}
      </v-chip>
    </v-card-title>
    <v-card-text>{{ question.description }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="d-flex" v-if="canEnd && question.active">
      <v-btn
        size="small"
        color="secondary"
        class="ml-auto pa-2"
        @click="deleteQuestion(question.postId)"
      >
        Delete question
      </v-btn>
      <v-btn
        size="small"
        color="primary"
        class="pa-2"
        @click="answerQuestion(question.postId)"
      >
        Mark as answered
      </v-btn>
    </v-card-actions>
    <v-card-actions class="d-flex" v-else-if="!canEnd && question.active">
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
        @click="postComment(question.postId, newComment)"
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
import { useUserStore } from "@/stores/userStore";

const forumStore = useForumStore();
const userStore = useUserStore();

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
    loading: false,
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
      return this.newComment.length > 1048 || this.loading;
    },
  },
  methods: {
    deleteQuestion(postId) {
      this.loading = true;
      forumStore.deleteQuestion(postId);
      this.loading = false;
    },
    answerQuestion(postId) {
      this.loading = true;
      forumStore.answerQuestion(postId);
      this.loading = false;
    },
    postComment(postId, comment) {
      this.loading = true;
      this.newComment = "";
      forumStore.postComment(postId, comment, userStore.userId);
      this.loading = false;
    },
  },
};
</script>
