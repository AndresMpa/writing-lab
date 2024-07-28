import { defineStore } from "pinia";

const getAuthors = () => {
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

export const useEditorStore = defineStore("editorStore", {
  state: () => ({
    loading: false,
    dialog: false,
    dialogExtras: false,
    actions: null,
    authorList: [],
    author: null,
    level: null,
    title: "",
    post: "",
  }),
  getters: {
    authorsRawData: (state) => state.authorList,
    authorsData: (state) => state.author,
    draftData: (state) => ({
      title: state.title,
      post: state.post,
      level: state.level,
    }),
  },
  actions: {
    async getAuthorsList() {
      await setTimeout(() => {
        const data = getAuthors();
        this.authorList.push(...data);
      }, 3000);
    },
    setAuthors(data) {
      this.author = data;
    },
    setCourseLevel(data) {
      this.level = data;
    },
    notificationLeaving() {
      this.actions = {
        title: "Warning",
        description:
          "You are leaving the editor, your progress will not be saved",
        icon: "mdi-alert",
        label: "Leave",
        color: "red",
        action: () => this.$router.back(),
      };
      this.dialog = true;
    },
    notificationDeleting() {
      this.actions = {
        title: `Deleting ${this.title}`,
        description: `You are about to delete your draft. Are you sure you want to delete it?`,
        icon: "mdi-delete-empty",
        label: "Delete",
        color: "red",
        action: () => {
          localStorage.removeItem("draft");
          this.title = "";
          this.post = "";
          this.level = null;
          this.author = null;
          this.dialog = false;
        },
      };
      this.dialog = true;
    },
    notificationSaveDraft() {
      this.actions = {
        title: `Saving ${this.title}`,
        description:
          "This might take a couple of seconds, remember not to delete your cache!",
        icon: "mdi-content-save-edit",
        label: "Save draft",
        color: "green",
        action: () => {
          localStorage.setItem(
            "draft",
            JSON.stringify({
              title: this.title,
              post: this.post,
              level: this.level,
              author: this.author,
            })
          );
          this.dialog = false;
        },
      };
      this.dialog = true;
    },
    notificationPublish() {
      this.actions = {
        title: "You are about to publish",
        description:
          "Congratulations! You are about to publish a new post, this may take a couple of seconds.",
        icon: "mdi-check-decagram",
        label: "Publish",
        color: "primary",
        action: () => {
          this.$router.back();
          this.dialog = false;
        },
      };
      this.dialog = true;
    },
    extraCourse() {
      this.actions = {
        title: "What course level is this post?",
        description: "Define the level for your post",
        icon: "mdi-account-school",
        label: "Save course",
        color: "primary",
        variant: "course",
        action: () => {
          this.dialogExtras = false;
        },
      };
      this.dialogExtras = true;
    },
    extraImage() {
      this.actions = {
        title: "Add an image for your post",
        description:
          "Be sure your image is working correctly by checking the preview",
        icon: "mdi-image-edit",
        label: "Save image",
        color: "primary",
        variant: "image",
        action: () => {
          this.dialogExtras = false;
        },
      };
      this.dialogExtras = true;
    },
    extraReferences() {
      this.actions = {
        title: "Track your references",
        description:
          "Congratulations! You are about to publish a new post, this may take a couple of seconds.",
        icon: "mdi-link-variant-plus",
        label: "Save references",
        color: "primary",
        variant: "reference",
        action: () => {
          this.dialogExtras = false;
        },
      };
      this.dialogExtras = true;
    },
    loadDraft() {
      const draft = localStorage.getItem("draft");
      if (draft) {
        const { title, post, level, author } = JSON.parse(draft);
        this.title = title;
        this.post = post;
        this.level = level;
        this.author = author;
      }
    },
    closeDialog() {
      this.dialog = false;
      this.dialogExtras = false;
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
});
