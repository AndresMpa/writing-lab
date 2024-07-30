import { defineStore } from "pinia";

import { insertPost } from "@/api/post.model";

import { useUserStore } from "./userStore";

export const useForumStore = defineStore("forumStore", {
  state: () => ({
    postId: "new",
    postType: null,
    title: "",
    description: "",
    author: null,
    level: null,
    dueDate: null,
    active: true,
  }),
  getters: {},
  actions: {
    getForumData() {},

    getForumDetail() {},
  },
});
