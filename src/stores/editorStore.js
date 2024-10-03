import { defineStore } from "pinia";

import { getAuthorsData } from "@/api/user.model";
import { insertPost, updatePost } from "@/api/post.model";

import { useUserStore } from "./userStore";

export const useEditorStore = defineStore("editorStore", {
  state: () => ({
    // Utilities
    error: false,
    loading: false,
    dialog: false,
    dialogExtras: false,
    actions: null,
    authorList: [],
    collaboration: null,

    // Post data
    postId: "new",
    author: null,
    level: null,
    postType: null,
    postImage: null,
    extra: [null],
    title: "",
    post: "",
  }),
  getters: {
    authorsRawData: (state) => state.authorList,
    draftData: (state) => ({
      id: state.postId,
      level: state.level,
      title: state.title,
      image: state.postImage,
      description: state.post,
      postType: state.postType,
      extra: state.extra,
      collaboration: state.collaboration,
    }),
    collaborationData: (state) => state.collaboration,
  },
  actions: {
    async getAuthorsList() {
      const data = await getAuthorsData();
      const authorIds = this.authorList.map((author) => author.user_id);
      data.forEach((newAuthor) => {
        if (!authorIds.includes(newAuthor.user_id)) {
          this.authorList.push(newAuthor);
        }
      });
    },
    notificationLeaving() {
      this.actions = {
        title: "Warning",
        description:
          "You are leaving the editor, your progress will not be saved",
        icon: "mdi-alert",
        label: "Leave",
        color: "red",
        action: () => {
          this.dialog = false;
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push({ name: "collaborate" });
      }
        },
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
          this.deleteDraft();
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push({ name: "collaborate" });
      }
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
              collaboration: this.collaboration,
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
        action: async () => {
          this.loading = true;
          this.dialog = false;

          const userStorage = useUserStore();

          const postData = {
            post_type: this.postType,
            image: this.postImage,
            title: this.title,
            description: this.post,
            level: [...this.level],
            extra: [...this.extra] || null,
            due_date: null,
            active: null,
            collaboration: this.collaboration || null,
          };

          let result;

          if (this.postId === "new") {
            result = await insertPost(
              userStorage.userId,
              postData,
              this.author.map((item) => item.id)
            );
          } else {
            result = await updatePost(this.postId, postData);
          }

          if (result) {
            this.deleteDraft();
            this.loading = false;
            this.$router.back();
          } else {
            this.loading = false;
            this.error = true;
            setTimeout(() => (this.error = true), 3000);
          }
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
            this.setCourseLevel([course]);
          } else {
            this.setCourseLevel([...course]);
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
    saveCollaborationData(data) {
      this.collaboration = { ...this.collaboration, ...data };
    },
    deleteDraft() {
      localStorage.removeItem("draft");

      this.postId = "new";
      this.title = "";
      this.post = "";
      this.level = null;
      this.author = null;
      this.postType = null;
      this.postImage = null;
      this.extra = null;
      this.collaboration = {};
      this.dialog = false;
    },
    loadDraft() {
      const draft = localStorage.getItem("draft");
      if (draft) {
        const {
          postType,
          postImage,
          title,
          post,
          level,
          extra,
          author,
          collaboration,
        } = JSON.parse(draft);

        this.postType = postType;
        this.postImage = postImage;
        this.title = title;
        this.post = post;
        this.level = level;
        this.extra = extra;
        this.author = author;
        this.collaboration = collaboration;
      }
    },
    loadDataToEdit(postId, postData, authorData) {
      this.postId = postId;
      this.postType = postData.postType;
      this.postImage = postData.image;
      this.title = postData.title;
      this.post = postData.description;
      this.level = postData.level;
      this.extra = postData.extra;
      this.author = authorData;
      this.collaboration = postData.collaboration;

      this.$router.push({ name: "draft" });
    },
    closeDialog() {
      this.dialog = false;
      this.dialogExtras = false;
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
    setAuthors(data) {
      this.author = data;
    },
    setPostType(data) {
      this.postType = data;
    },
    setCourseLevel(data) {
      this.level = data;
    },
  },
});
