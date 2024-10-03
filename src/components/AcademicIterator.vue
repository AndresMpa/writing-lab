<template>
  <v-card>
    <AcademicUpload :isOpen="dialog" @close-dialog="toggleDialog" />
    <v-data-iterator :items="bucketFiles" :items-per-page="9" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Browse document"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            clearable
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn
            @click="toggleDialog"
            prepend-icon="mdi-upload"
            color="primary"
            text="Upload"
            elevated
          />
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <div v-for="item in items" :key="item.title" cols="auto" md="4">
          <v-card class="pb-3" border flat>
            <v-list-item class="mb-2">
              <template v-slot:title>
                <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
              </template>
            </v-list-item>

            <div class="d-flex justify-space-between px-4">
              <div>
                <div
                  class="d-flex align-center text-caption text-medium-emphasis me-1"
                >
                  <v-icon icon="mdi-file" start></v-icon>
                  <div class="text-truncate">Type: {{ item.raw.fileType }}</div>
                </div>
                <div
                  class="d-flex align-center text-caption text-medium-emphasis me-1"
                >
                  <v-icon icon="mdi-weight" start></v-icon>
                  <div class="text-truncate">Size: {{ item.raw.size }}</div>
                </div>
                <div
                  class="d-flex align-center text-caption text-medium-emphasis me-1"
                >
                  <v-icon icon="mdi-calendar-clock" start></v-icon>
                  <div class="text-truncate">
                    Last update: {{ item.raw.update }}
                  </div>
                </div>
              </div>

              <v-btn
                @click="downloadFile"
                prepend-icon="mdi-download"
                class="text-none mt-auto"
                text="Download"
                color="primary"
                variant="text"
                size="small"
              >
              </v-btn>
            </div>
          </v-card>
        </div>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
export default {
  props: {
    bucketFiles: {
      type: Array,
    },
  },
  data: () => ({
    dialog: false,
    search: "",
  }),
  methods: {
    downloadFile(fileUrl, fileName) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    toggleDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
