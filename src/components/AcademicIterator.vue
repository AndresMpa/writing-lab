<template>
  <v-card>
    <AcademicUpload
      @close-dialog="toggleDialog"
      @reload="reload"
      :isOpen="dialog"
    />
    <v-data-iterator
      :items-per-page="itemsPerPage"
      :items="bucketFiles"
      :search="search"
      :page="page"
    >
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Browse document"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            hide-details
            clearable
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
                <div
                  class="d-flex align-center text-caption text-medium-emphasis me-1"
                >
                  <v-icon icon="mdi-identifier" start></v-icon>
                  <div class="text-truncate">Identifier: {{ item.raw.fileId }}</div>
                </div>
              </div>

              <v-btn
                @click="downloadFile(item.raw)"
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

      <template v-slot:footer>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
            @update:model-value="pageChange"
          ></v-pagination>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
import { useBucketStore } from "@/stores/bucketStore";

const bucketStore = useBucketStore();

export default {
  props: {
    itemsPerPage: {
      type: Number,
      default: 8,
    },
    bucketFiles: {
      type: Array,
    },
  },
  data: () => ({
    dialog: false,
    search: "",
    page: 1,
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.bucketFiles.length / this.itemsPerPage);
    },
  },
  methods: {
    downloadFile(item) {
      bucketStore.download(`academicLiteracies/${item.fileName}`);
    },
    reload() {
      bucketStore.list();
    },
    pageChange(page) {
      this.$emit("pageChange", page);
    },
    toggleDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
