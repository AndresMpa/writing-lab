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
    postType: null,
    postImage: null,
    extra: null,
    title: "",
    post: "",
  }),
  getters: {
    authorsRawData: (state) => state.authorList,
    authorsData: (state) => state.author,
    draftData: (state) => ({
      id: "new",
      level: state.level,
      title: state.title,
      image: state.postImage,
      description: state.post,
      postType: state.postType,
      extra: state.extra,
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
          this.postType = null;
          this.postImage = null;
          this.extra = null;
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
              postType: this.postType,
              postImage: this.postImage,
              extra: this.extra,
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
    extraKind() {
      this.actions = {
        title: "Select your post type",
        description:
          "The type defines the section this post is going to be show",
        icon: "mdi-format-list-bulleted-type",
        label: "Save type",
        color: "primary",
        variant: "postType",
        action: (postType) => {
          this.postType = postType;
          this.dialogExtras = false;
        },
      };
      this.dialogExtras = true;
    },
    extraCourse() {
      this.actions = {
        title: "What course level is this post?",
        description: "Define the level for your post",
        icon: "mdi-account-school",
        label: "Save course",
        color: "primary",
        variant: "course",
        action: (course) => {
          if (typeof course == "string") {
            this.setCourseLevel([
              {
                name: course,
                id: `C-${course.slice(course.length - 1, course.length)}`,
              },
            ]);
          }
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
        action: (image) => {
          this.postImage = image;
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
        action: (extra) => {
          this.extra = extra;
          this.dialogExtras = false;
        },
      };
      this.dialogExtras = true;
    },
    loadDraft() {
      const draft = localStorage.getItem("draft");
      if (draft) {
        const { title, post, level, author, postType, extra } =
          JSON.parse(draft);

        this.title = title;
        this.post = post;
        this.level = level;
        this.author = author;
        this.postType = postType;
        this.extra = extra;
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
