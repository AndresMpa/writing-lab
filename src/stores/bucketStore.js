import { defineStore } from "pinia";

import { listFiles, uploadFile } from "@/api/storage";

export const useBucketStore = defineStore("bucketStore", {
  state: () => ({
    file: null,
    bucketFiles: null,
  }),
  getters: {},
  actions: {
    setFile(data) {
      this.file = data;
    },
    async list() {
      const rawResponse = await listFiles("academicLiteracies", 0, 10);
      const filteredResponse = rawResponse.filter(
        (file) => file.metadata.mimetype !== "application/octet-stream"
      );

      this.bucketFiles = filteredResponse.map((file) => {
        return {
          fileName: file.id,
          title: file.name.split(".").slice(0, -1).join("."),
          fileType: file.metadata.mimetype,
          update: file.created_at,
          size: file.metadata.size,
        };
      });
    },
    async upload(filePath) {
      const response = await uploadFile(this.file, filePath);
      return response;
    },
  },
});
