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
    id: 27,
    image: null,
    fullname: "Some full name",
    nickname: "Test",
    courses: null,
    notification: [],
    email: null,
    complete: 0,
    statsId: null,
  }),
  getters: {
    userId: (state) => state.id,
    userData: (state) => ({
      image: state.image,
      fullname: state.fullname,
      nickname: state.nickname,
      course: state.courses,
      complete: state.complete,
      statsId: state.statsId,
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
      const isLogged = await signInWithEmail(email, password);
      if (isLogged) {
        const userData = await getUserData(this.nickname);

        if (userData == null) {
          this.$router.push({ name: "error" });
        }

        this.id = userData[0].user_id;
        this.image = userData[0].image;
        this.fullname = userData[0].fullname;
        this.nickname = userData[0].nickname;
        this.courses = userData[0].course;
        this.notification = userData[0].notification;
        this.complete = userData[0].User_Stats.complete;
        this.statsId = userData[0].User_Stats.stats_id;

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

    async updateUserPassword(password) {
      await updateUserPassword(password)
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
    setNickname(data) {
      this.nickname = data;
    },
  },
});
