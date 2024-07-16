import { defineStore } from "pinia";

export const useEditorStore = defineStore("editorStore", {
  state: () => ({
    loading: false,
    dialog: false,
    actions: null,
    title: "",
    post: "",
  }),
  actions: {
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
        description: `You are about to delete ${
          this.title === "" ? "" : ""
        } are you sure you want to delete it?`,
        icon: "mdi-delete-empty",
        label: "Delete",
        color: "red",
        action: () => {
          localStorage.removeItem("draft");
          this.title = "";
          this.post = "";
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
            JSON.stringify({ title: this.title, post: this.post })
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
        action: () => this.$router.back(),
      };
      this.dialog = true;
    },
    loadDraft() {
      const draft = localStorage.getItem("draft");
      if (draft) {
        const { title, post } = JSON.parse(draft);
        this.title = title;
        this.post = post;
      }
    },
    closeDialog() {
      this.dialog = false;
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
});
