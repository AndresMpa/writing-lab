import { defineStore } from "pinia";

const createData = (type) => {
  return [
    {
      id: "12",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png",
      title: "The Sci-Fi Shooter Experience",
      description:
        "Dive into a futuristic world of intense battles and alien encounters.",
      level: [{ name: "Course 1", id: "C-1" }],
      postType: `${type}`,
      date: "6/12/24",
      active: true,
      extra: [],
    },
    {
      id: "1234",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png",
      title: "Epic Adventures in Open Worlds",
      description:
        "Embark on a journey through vast, immersive landscapes and quests.",
      level: [{ name: "Course 4", id: "C-4" }],
      postType: `${type}`,
      date: "19/08/24",
      active: true,
      extra: [],
    },
    {
      id: "5432423",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png",
      title: "Surviving the Space Station Horror",
      description:
        "Navigate a haunted space station in this chilling survival horror game.",
      level: [{ name: "Course 6", id: "C-6" }],
      postType: `${type}`,
      date: "11/2/24",
      active: true,
      extra: [],
    },
    {
      id: "5435342",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png",
      title: "Neon-Lit High-Speed Racing Thrills",
      description:
        "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
      level: [{ name: "Course 2", id: "C-2" }],
      postType: `${type}`,
      date: "25/02/24",
      active: true,
      extra: [],
    },
    {
      id: "09543",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png",
      title: "Retro-Style Platformer Adventures",
      description:
        "Jump and dash through pixelated worlds in this classic-style platformer.",
      level: [{ name: "Course 8", id: "C-8" }],
      postType: `${type}`,
      date: "9/10/24",
      active: true,
      extra: [],
    },
    {
      id: "9543",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png",
      title: "Medieval Strategic War Campaigns",
      description:
        "Lead armies into epic battles and conquer kingdoms in this strategic game.",
      level: [{ name: "Course 5", id: "C-5" }],
      postType: `${type}`,
      date: "12/8/24",
      active: false,
      extra: [],
    },
    {
      id: "6454",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png",
      title: "Underwater VR Exploration Adventure",
      description:
        "Dive deep into the ocean and discover the mysteries of the underwater world.",
      level: [{ name: "Course 2", id: "C-2" }],
      postType: `${type}`,
      date: "8/2/24",
      active: false,
      extra: [],
    },
    {
      id: "9532",
      img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png",
      title: "1920s Mystery Detective Chronicles",
      description:
        "Solve crimes and uncover secrets in the glamourous 1920s era.",
      level: [{ name: "Course 7", id: "C-7" }],
      postType: `${type}`,
      date: "1/12/24",
      active: false,
      extra: [],
    },
  ];
};

const createAuthor = () => {
  return [
    {
      id: 1,
      nickname: "jDoe4",
      username: "Jane Doe",
      image: "https://randomuser.me/api/portraits/women/80.jpg",
      courses: ["Course 1", "Course 2", "Course 3", "Course 4"],
    },
    {
      id: 2,
      nickname: "jhonD",
      username: "Jhon Doe",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      courses: ["Course 1", "Course 3"],
    },
  ];
};

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
  getters: {
    postDetailData: (state) => state.postDetail,
    insightPost: (state) => state.insight,
    experiencesPost: (state) => state.experiences,
    togetherPost: (state) => state.together,
    wonderPost: (state) => state.wonder,
  },
  actions: {
    async loadInsight() {
      await new Promise((resolve) => {
        setTimeout(() => {
          const data = createData("Insight");
          this.insight.push(...data);
          resolve();
        }, 3000);
      });
    },
    async loadExperiences() {
      await new Promise((resolve) => {
        setTimeout(() => {
          const data = createData("Experiences");
          this.experiences.push(...data);
          resolve();
        }, 3000);
      });
    },
    async loadWonder() {
      await new Promise((resolve) => {
        setTimeout(() => {
          const data = createData("Wonder");
          this.wonder.push(...data);
          resolve();
        }, 3000);
      });
    },
    async getPostData(id) {
      await new Promise((resolve) => {
        setTimeout(() => {
          const post = createData("Experience");
          const author = createAuthor();
          this.postDetail = {
            postData: post.find((item) => item.id === id),
            authorData: author,
          };
          resolve();
        }, 3000);
      });
    },
    setLevel(level) {
      this.selectedLevel = level;
    },
    setPage(page) {
      this.page = page;
    },
  },
});
