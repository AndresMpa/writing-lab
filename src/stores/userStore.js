import { defineStore } from "pinia";
import { signUpNewUser } from "@/api/auth.model";
import { createUserRegister, getUserData } from "@/api/user.model";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    /*
    id: null,
    image: null,
    username: null,
    nickname: null,
    courses: null,
    */
    id: 1,
    nickname: "jDoe4",
    username: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    courses: ["Course 1", "Course 2", "Course 3", "Course 4"],
  }),
  getters: {
    userId: (state) => state.id,
    userData: (state) => ({
      image: state.image,
      username: state.username,
      nickname: state.nickname,
      courses: state.courses,
    }),
    checkPassword: (state) => (password) =>
      checkAccountPassword(state.username, password),
  },
  actions: {
    async createNewUser(email, password, userData) {
      const signResult = await signUpNewUser(email, password);
      const userResult = await createUserRegister(userData);
      signResult && userResult
        ? this.$router.push({ name: "login" })
        : this.$router.push({ name: "error" });
    },
    async initAccount(username, password) {
      if (checkAccountPassword(username, password)) {
        const userData = await getUserData();

        this.id = userData.id;
        this.username = userData.username;
        this.nickname = userData.nickname;
        this.image = userData.image;
        this.courses = userData.courses;

        this.$router.push({ name: "home" });
      } else {
        return "404";
      }
    },
    closeSession() {
      this.id = null;
      this.image = null;
      this.username = null;
      this.nickname = null;
      this.courses = null;

      this.$router.push({ name: "home" });
    },
  },
});
