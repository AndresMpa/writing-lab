import { defineStore } from "pinia";

import { getPostData, getPosts } from "@/api/post.model";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    selectedLevel: null,
    postDetail: null,
    experiences: [],
    together: [],
    insight: [],
    wonder: [],
    page: 0,
  }),
  getters: {},
  actions: {
    async getPostData(id) {
      const data = await getPostData(id);
      console.log(data);
      this.postDetail = {
        postData: data.post,
        authorData: data.author,
      };
    },
    async loadInsight(offset) {
      const data = await getPosts(this.page, this.page + offset, "Insight");
      this.insight = [...this.insight, ...data];
      this.page += offset;
    },
    async loadExperiences() {
      const data = await getPosts(this.page, this.page + offset, "Experience");
      this.insight = [...this.insight, ...data];
      this.page += offset;
    },
    async loadWonder() {
      const data = await getPosts(this.page, this.page + offset, "Wonder");
      this.insight = [...this.insight, ...data];
      this.page += offset;
    },
    setLevel(level) {
      this.selectedLevel = level;
    },
    setPage(page) {
      this.page = page;
    },
  },
});
