import { defineStore } from "pinia";

import { getPostData, getPosts } from "@/api/post.model";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    noData: false,

    selectedLevel: null,

    postDetail: null,
    experiences: [],
    insight: [],
    wonder: [],
    page: 0,
  }),
  getters: {},
  actions: {
    async getPostData(id) {
      const data = await getPostData(id);
      this.postDetail = {
        postData: data.post,
        authorData: data.author,
        commentsData: data.comments
      };
    },
    async loadInsight(offset) {
      const data = await getPosts(this.page, this.page + offset, "Insight");
      this.insight = [...this.insight, ...data];
      this.page += offset + 1;
    },
    async loadExperiences(offset) {
      const data = await getPosts(this.page, this.page + offset, "Experience");
      if (data.length !== 0) {
        this.experiences = [...this.experiences, ...data];
        this.page += offset + 1;
      } else {
        this.noData = true;
      }
    },
    async loadWonder(offset) {
      const data = await getPosts(this.page, this.page + offset, "Wonder");
      this.wonder = [...this.wonder, ...data];
      this.page += offset;
    },
    refresh() {
      this.noData = false;

      this.selectedLevel = null;

      this.postDetail = null;
      this.experiences = [];
      this.insight = [];
      this.wonder = [];
      this.page = 0;
    },
    setLevel(level) {
      this.selectedLevel = level;
    },
    setPage(page) {
      this.page = page;
    },
  },
});
