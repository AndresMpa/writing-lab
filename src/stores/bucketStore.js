import { defineStore } from "pinia";

import { downloadFile, listFiles, uploadFile } from "@/api/storage";

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
    async list(from, to) {
      const rawResponse = await listFiles("academicLiteracies", from, to);
      const filteredResponse = rawResponse.filter(
        (file) => file.metadata.mimetype !== "application/octet-stream"
      );

      this.bucketFiles = filteredResponse.map((file) => {
        return {
          fileId: file.id,
          fileName: file.name,
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
    async download(file_path) {
      const url = await downloadFile(file_path);
      if (typeof url === "string") {
        const link = document.createElement("a");
        link.href = url;
        link.download = file_path.split("/").pop();
        link.click();
      } else {
        console.error("Error al descargar el archivo:", url);
      }
    },
  },
});
