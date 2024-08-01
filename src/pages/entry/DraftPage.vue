<template>
  <div>
    <EntryEditor @editor-preview="showPreviewData" />
    <div v-if="showPreview">
      <EntryView :item="previewData" />
      <EntryAuthor :post="previewData" :profile="previewAuthor" />
    </div>
  </div>
</template>

<script>
import { useEditorStore } from "@/stores/editorStore";

const editorStore = useEditorStore();

export default {
  data: () => ({
    showPreview: false,
  }),
  computed: {
    previewData() {
      return editorStore.draftData;
    },
    previewAuthor() {
      return editorStore.author;
    },
  },
  methods: {
    showPreviewData() {
      this.showPreview = !this.showPreview;
    },
  },
};
</script>
