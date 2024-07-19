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
                <v-btn icon v-bind="props" @click="lock = !lock">
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
                <v-btn icon v-bind="props">
                  <v-icon> mdi-link-variant </v-icon>
                </v-btn>
              </template>
              <span>Link</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="notificationPublish">
                  <v-icon> mdi-invoice-text-send </v-icon>
                </v-btn>
              </template>
              <span>Publish</span>
            </v-tooltip>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>

    <EntryEditorNotification />

    <v-row no-gutters>
      <v-col>
        <v-textarea
          v-model="title"
          :disabled="lock"
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
          :disabled="lock"
          placeholder="Write..."
          variant="underlined"
          autocomplete="on"
          name="textarea"
          class="mx-auto"
          auto-grow
          rows="21"
          no-resize
          counter
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useEditorStore } from "@/stores/editorStore";

export default {
  data: () => ({
    lock: false,
  }),
  computed: {
    loading() {
      this.editorStore.loading;
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
  },
  created() {
    this.editorStore = useEditorStore();
    this.editorStore.loadDraft();
  },
};
</script>

<style lang="sass" scoped>
.w-90
  width: 90vw
</style>
