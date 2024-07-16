import { defineStore } from "pinia";

const createData = (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "12",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png",
          title: "The Sci-Fi Shooter Experience",
          description:
            "Dive into a futuristic world of intense battles and alien encounters.",
          level: "Course 1",
          entryType: `${type}`,
        },
        {
          id: "1234",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png",
          title: "Epic Adventures in Open Worlds",
          description:
            "Embark on a journey through vast, immersive landscapes and quests.",
          level: "Course 4",
          entryType: `${type}`,
        },
        {
          id: "5432423",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png",
          title: "Surviving the Space Station Horror",
          description:
            "Navigate a haunted space station in this chilling survival horror game.",
          level: "Course 6",
          entryType: `${type}`,
        },
        {
          id: "5435342",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png",
          title: "Neon-Lit High-Speed Racing Thrills",
          description:
            "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
          level: "Course 2",
          entryType: `${type}`,
        },
        {
          id: "09543",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png",
          title: "Retro-Style Platformer Adventures",
          description:
            "Jump and dash through pixelated worlds in this classic-style platformer.",
          level: "Course 8",
          entryType: `${type}`,
        },
        {
          id: "9543",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png",
          title: "Medieval Strategic War Campaigns",
          description:
            "Lead armies into epic battles and conquer kingdoms in this strategic game.",
          level: "Course 5",
          entryType: `${type}`,
        },
        {
          id: "6454",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png",
          title: "Underwater VR Exploration Adventure",
          description:
            "Dive deep into the ocean and discover the mysteries of the underwater world.",
          level: "Course 5",
          entryType: `${type}`,
        },
        {
          id: "9532",
          img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png",
          title: "1920s Mystery Detective Chronicles",
          description:
            "Solve crimes and uncover secrets in the glamourous 1920s era.",
          level: "Course 4",
          entryType: `${type}`,
        },
      ]);
    }, 1000);
  });
};

export const usePostStore = defineStore("postStore", {
  state: () => ({
    selectedLevel: null,
    experiences: [],
    together: [],
    insight: [],
    wonder: [],
    page: 0,
  }),
  getters: {
    insightPost: (state) => state.insight,
    experiencesPost: (state) => state.experiences,
    togetherPost: (state) => state.together,
    wonderPost: (state) => state.wonder,
  },
  actions: {
    async getExample(type) {
      await setTimeout(() => {
        this.insight.push(...createData(type));
        this.experiences.push(...createData(type));
        this.wonder.push(...createData(type));
      }, 3000);
    },
    setLevel(level) {
      this.selectedLevel = level;
    },
    setPage(page) {
      this.page = page;
    },
  },
});
