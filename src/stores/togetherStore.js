import { defineStore } from "pinia";

const getData = () => {
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
    {
      id: 3,
      nickname: "Testboy",
      username: "Teodor Felix",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      courses: ["Course 3", "Course 4"],
    },
    {
      id: 4,
      nickname: "JijoKramer",
      username: "Jule Jules",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      courses: ["Course 1", "Course 4"],
    },
  ];
};

export const useTogetherStore = defineStore("togetherStore", {
  state: () => ({
    users: [],
  }),
  getters: {
    usersData: (state) => state.users,
  },
  actions: {
    async initStore() {
      await setTimeout(() => {
        const data = getData();
        this.users.push(...data);
      }, 3000);
    },
  },
});
