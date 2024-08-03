import { defineStore } from "pinia";

import {
  signInWithEmail,
  signUpNewUser,
  updateUserPassword,
} from "@/api/auth.model";
import {
  createUserRegister,
  deleteAccount,
  getUserData,
  updateUserData,
} from "@/api/user.model";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    /*
    id: null,
    image: null,
    fullname: null,
    nickname: null,
    courses: null,
    notification: null,
    email: null
    */
    id: 21,
    nickname: "jDoe4",
    fullname: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    courses: ["Course 1", "Course 2", "Course 3", "Course 4"],
    notification: ["Este", "Esto otro"],
    email: "",
  }),
  getters: {
    userId: (state) => state.id,
    userData: (state) => ({
      image: state.image,
      fullname: state.fullname,
      nickname: state.nickname,
      course: state.courses,
    }),
    notificationList: (state) => {
      return [...state.notification];
    },
    checkPassword: (state) => (password) => {
      const result = signInWithEmail(state.email, password);
      return result === null;
    },
  },
  actions: {
    async createNewUser(email, password, userData) {
      const signResult = await signUpNewUser(email, password);
      const userResult = await createUserRegister(userData);
      signResult && userResult
        ? this.$router.push({ name: "login" })
        : this.$router.push({ name: "error" });
    },

    async initAccount(email, password) {
      console.log("email, password", email, password);
      const isLogged = await signInWithEmail(email, password);
      console.log("isLogged ", isLogged);
      if (isLogged) {
        const userData = await getUserData(this.nickname);
        console.log("userData ", userData);

        if (userData == null) {
          this.$router.push({ name: "error" });
        }

        this.id = userData.id;
        this.image = userData.image;
        this.username = userData.username;
        this.nickname = userData.nickname;
        this.courses = userData.courses;

        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: "error" });
      }
    },

    async updateField(data) {
      await updateUserData(data, this.id);
    },

    async updateNotificationList() {
      await updateUserData({ notification: this.notification }, this.id);
    },

    async deleteAccount() {
      await deleteAccount(this.id);
    },

    closeSession() {
      this.id = null;
      this.image = null;
      this.username = null;
      this.nickname = null;
      this.courses = null;
      this.email = null;

      this.$router.push({ name: "home" });
    },
    setEmail(data) {
      this.email = data;
    },
  },
});
