<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="500"
    persistent
  >
    <v-card
      :title="actions.title"
      :text="actions.description"
      :append-icon="actions.icon"
      max-width="450"
    >
      <template v-slot:actions>
        <v-btn
          @click="actions.action"
          :color="actions.color"
          :text="actions.label"
          class="ms-auto"
        ></v-btn>
  <v-btn text @click="closeDialog">Cancel</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
import { useEditorStore } from "@/stores/editorStore";

export default {
  computed: {
    actions() {
      return this.editorStore.actions;
    },
    dialog() {
      return this.editorStore.dialog;
    },
  },
  methods: {
    closeDialog() {
      this.editorStore.closeDialog();
    },
  },
  created() {
    this.editorStore = useEditorStore();
  },
};
</script>
