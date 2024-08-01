<template>
  <v-container fluid>
    <v-row no-gutters class="mb-3">
      <v-col>
        <v-card class="mx-auto" :loading="loading">
          <v-toolbar
            :elevation="8"
            :color="lock ? 'primary' : ''"
            density="compact"
          >
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="notificationLeaving">
                  <v-icon> mdi-door-open </v-icon>
                </v-btn>
              </template>
              <span>Leave</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="notificationDeleting">
                  <v-icon> mdi-trash-can </v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="lockEditor">
                  <v-icon>
                    {{ lock ? "mdi-lock-open-variant" : "mdi-lock" }}</v-icon
                  >
                </v-btn>
              </template>
              <span> {{ lock ? "Unlock" : "Lock" }}</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="notificationSaveDraft">
                  <v-icon> mdi-content-save </v-icon>
                </v-btn>
              </template>
              <span>Save</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-spacer></v-spacer>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="extraKind">
                  <v-icon> mdi-typewriter </v-icon>
                </v-btn>
              </template>
              <span>Post type</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="extraCourse">
                  <v-icon> mdi-school </v-icon>
                </v-btn>
              </template>
              <span>Select course</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="extraImage">
                  <v-icon> mdi-image </v-icon>
                </v-btn>
              </template>
              <span>Post image</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="extraReferences">
                  <v-icon> mdi-link-variant </v-icon>
                </v-btn>
              </template>
              <span>Reference link</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="notificationPublish">
                  <v-icon> mdi-cube-send</v-icon>
                </v-btn>
              </template>
              <span>Publish</span>
            </v-tooltip>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>

    <EntryEditorNotification />
    <EntryEditorExtras />

    <v-card
      v-if="error"
      variant="tonal"
      color="red-darken-3"
      title="Something went wrong try again"
      class="d-flex pl-2"
    >
      <v-card-actions class="ml-auto">
        <v-btn icon="mdi-close-circle" @click="error = !error"></v-btn>
      </v-card-actions>
    </v-card>

    <v-row no-gutters>
      <v-col>
        <v-textarea
          v-model="title"
          v-show="!lock"
          placeholder="Add your title"
          class="mx-auto my-1"
          variant="underlined"
          autocomplete="on"
          name="textarea"
          auto-grow
          counter
          rows="1"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-textarea
          v-model="post"
          v-show="!lock"
          placeholder="Write..."
          variant="underlined"
          autocomplete="on"
          name="textarea"
          class="mx-auto"
          auto-grow
          rows="18"
          no-resize
          counter
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { useEditorStore } from "@/stores/editorStore";

const userStore = useUserStore();

export default {
  data: () => ({
    lock: false,
  }),
  computed: {
    loading() {
      this.editorStore.loading;
    },
    error: {
      get() {
        return this.editorStore.error;
      },
      set(value) {
        this.editorStore.error = value;
      },
    },
    title: {
      get() {
        return this.editorStore.title;
      },
      set(value) {
        this.editorStore.title = value;
      },
    },
    post: {
      get() {
        return this.editorStore.post;
      },
      set(value) {
        this.editorStore.post = value;
      },
    },
  },
  methods: {
    lockEditor() {
      this.lock = !this.lock;
      this.$emit("editorPreview");
    },
    notificationLeaving() {
      this.editorStore.notificationLeaving();
    },
    notificationDeleting() {
      this.editorStore.notificationDeleting();
    },
    notificationSaveDraft() {
      this.editorStore.notificationSaveDraft();
    },
    notificationPublish() {
      this.editorStore.notificationPublish();
    },
    extraKind() {
      this.editorStore.extraKind();
    },
    extraCourse() {
      this.editorStore.extraCourse();
    },
    extraImage() {
      this.editorStore.extraImage();
    },
    extraReferences() {
      this.editorStore.extraReferences();
    },
  },
  created() {
    this.editorStore = useEditorStore();
    this.editorStore.loadDraft();

    if (this.editorStore.author == null) {
      const currentUser = { id: userStore.userId, ...userStore.userData };
      this.editorStore.setAuthors([currentUser]);
    } else {
      const currentUser = { id: userStore.userId, ...userStore.userData };
      this.editorStore.author.push(currentUser);
    }

    if (this.editorStore.level == null) {
      this.editorStore.setCourseLevel(["Course 1"]);
    }
  },
};
</script>

<style lang="sass" scoped>
.w-90
  width: 90vw
</style>
