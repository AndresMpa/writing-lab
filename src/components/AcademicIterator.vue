<template>
  <v-card>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="500"
      persistent
    >
      <v-card>
        <v-btn class="ms-auto">Upload</v-btn>
        <v-btn text @click="toggleDialog">Cancel</v-btn>
      </v-card>
    </v-dialog>

    <v-data-iterator :items="games" :items-per-page="9" :search="search">
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
            <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
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
  data: () => ({
    dialog: false,
    search: "",
    games: [
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "The Sci-Fi Shooter Experience",
        subtitle:
          "Dive into a futuristic world of intense battles and alien encounters.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "Epic Adventures in Open Worlds",
        subtitle:
          "Embark on a journey through vast, immersive landscapes and quests.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "Surviving the Space Station Horror",
        subtitle:
          "Navigate a haunted space station in this chilling survival horror game.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "Neon-Lit High-Speed Racing Thrills",
        subtitle:
          "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "Retro-Style Platformer Adventures",
        subtitle:
          "Jump and dash through pixelated worlds in this classic-style platformer.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "Medieval Strategic War Campaigns",
        subtitle:
          "Lead armies into epic battles and conquer kingdoms in this strategic game.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "Underwater VR Exploration Adventure",
        subtitle:
          "Dive deep into the ocean and discover the mysteries of the underwater world.",
        update: "20-03-2024",
        size: "20 MB"
      },
      {
        fileUrl: "",
        fileName: "",
        fileType: "PDF",
        title: "1920s Mystery Detective Chronicles",
        subtitle:
          "Solve crimes and uncover secrets in the glamourous 1920s era.",
        update: "20-03-2024",
        size: "20 MB"
      },
    ],
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
