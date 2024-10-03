<template>
  <v-dialog
    :model-value="isOpen"
    transition="dialog-bottom-transition"
    max-width="800"
    persistent
  >
    <v-card>
      <v-card-title>Uploading a new literacy</v-card-title>

      <v-card-item>
        <v-file-input v-model="filesToBeSend" label="File input"></v-file-input>
      </v-card-item>

      <v-card-text v-if="filesToBeSend">
        <v-row align="center" class="mx-0">
          <v-col>
            <div>
              File name:
              <v-chip :color="fileSizeLimit ? 'error' : 'primary'">{{
                filesToBeSend.name
              }}</v-chip>
            </div>
          </v-col>
          <v-col>
            <div>
              File type:
              <v-chip :color="fileSizeLimit ? 'error' : 'primary'">{{
                filesToBeSend.type
              }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" class="mx-0">
          <v-col>
            <div>Last modified date: {{ filesToBeSend.lastModifiedDate }}</div>
          </v-col>
          <v-col>
            <div>
              File maximum size:
              <v-chip :color="fileSizeLimit ? 'error' : 'primary'">
                {{ fileSize }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider class="mb-2"></v-divider>

      <v-card-actions>
        <div class="ml-auto">
          <v-btn @click="$emit('closeDialog')" text="Cancel" />
          <v-btn
            @click="uploadFile"
            :disabled="fileSizeLimit"
            :color="fileSizeLimit ? 'error' : 'primary'"
            text="Upload"
            class="mr-2"
          />
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useBucketStore } from "@/stores/bucketStore";

const bucketStore = useBucketStore();

export default {
  name: "UploadDialog",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    filesToBeSend: null,
  }),
  computed: {
    fileSize() {
      return this.filesToBeSend
        ? this.bytesToMb(this.filesToBeSend.size)
        : null;
    },
    fileSizeLimit() {
      return this.fileSize === "Too big";
    },
  },
  methods: {
    bytesToMb(bytes, maxMbLimit = 4) {
      const kb = bytes / 1024;
      const mb = kb / 1024;

      if (mb >= maxMbLimit) {
        return "Too big";
      } else if (mb >= 1) {
        return `${mb.toFixed(2)} MB`;
      } else {
        return `${kb.toFixed(2)} KB`;
      }
    },

    uploadFile() {
      bucketStore.setFile(this.filesToBeSend);
      bucketStore.upload(`academicLiteracies/${this.filesToBeSend.name}`);
    },
  },
};
</script>
