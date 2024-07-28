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
    previewData: null,
    previewAuthor: null,
  }),
  methods: {
    showPreviewData() {
      this.previewData = editorStore.draftData;
      this.previewAuthor = editorStore.authorsData;
      this.showPreview = !this.showPreview;
    },
  },
};
</script>
