import { defineStore } from "pinia";

import { deletePost, getPostData, getPosts } from "@/api/post.model";
import { getAuthorsData } from "@/api/user.model";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    noData: false,

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
      const rawData = await getPostData(id);
      const authorRawData = await getAuthorsData();

      const comments = rawData.comments.map((comment) => {
        const newComment = {
          ...comment,
          author: authorRawData.find(
            (author) => author.user_id == comment.author
          ),
        };
        return newComment;
      });

      this.postDetail = {
        postData: rawData.post,
        authorData: rawData.author,
        commentsData: comments,
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
    async loadTogether(offset) {
      const data = await getPosts(this.page, this.page + offset, "Together");

      const groupedData = data.reduce((acc, item) => {
        const uuid = item.collaboration.uuid;
        if (!acc[uuid]) {
          acc[uuid] = {
            collaboration: item.collaboration,
            level: item.level || [],
            entries: [],
          };
        }
        acc[uuid].entries.push({
          postId: item.postId,
          title: item.title,
          image: item.image || "",
          description: item.description || "",
          level: item.level,
          date: item.date,
          active: item.active,
        });
        return acc;
      }, {});

      const groupedArray = Object.values(groupedData);
      this.together = [...this.together, ...groupedArray];
      this.page += offset;
    },
    async deletePost(id) {
      const data = await deletePost(id);
      return data === null;
    },
    refresh() {
      this.noData = false;

      this.selectedLevel = null;

      this.postDetail = null;
      this.experiences = [];
      this.together = [];
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
