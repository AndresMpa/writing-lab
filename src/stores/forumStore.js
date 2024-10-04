import { defineStore } from "pinia";

import {
  deletePost,
  insertComment,
  insertPost,
  updatePost,
} from "@/api/post.model";

import { useUserStore } from "./userStore";

export const useForumStore = defineStore("forumStore", {
  state: () => ({
    error: false,
    success: false,
    loading: false,

    postId: "new",
    postType: "Wonder",
    title: "",
    description: "",
    author: null,
    level: null,
    dueDate: null,
    active: true,
    level: null
  }),
  getters: {},
  actions: {
    async createQuestion() {
      this.loading = true;

      const userStore = useUserStore();
      const userId = userStore.userId;

      const postData = {
        post_type: this.postType,
        image: null,
        title: this.title,
        description: this.description,
        level: this.level,
        extra: null,
        due_date: this.dueDate,
        active: this.active,
      };

      let result;

      if (this.postId === "new") {
        result = await insertPost(userId, postData, [userId]);
      } else {
        result = await updatePost(this.postId, postData);
      }

      if (result) {
        this.success = true;
        setTimeout(() => (this.success = false), 3000);
      } else {
        this.error = true;
        setTimeout(() => (this.error = false), 3000);
      }
      this.loading = false;

      this.clearQuestion();
    },

    async deleteQuestion(postId) {
      const data = await deletePost(postId);
      return data === null;
    },

    async answerQuestion(postId) {
      updatePost(postId, { active: false });
    },

    async postComment(postId, comment, author) {
      const commentData = {
        post_id: postId,
        content: comment,
        author: author,
      };
      await insertComment(commentData);
    },

    setCourseLevel(data) {
      this.level = data;
    },

    clearQuestion() {
      this.postId = "new";
      this.postType = "Wonder";
      this.title = "";
      this.description = "";
      this.author = null;
      this.level = null;
      this.dueDate = null;
      this.active = true;
    },
  },
});
