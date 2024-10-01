<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <EntryViewLeave title="Continue working" />
      </v-col>
    </v-row>
    <v-row class="mb-5" v-for="(data, index) in mockData" :key="index">
      <v-col>
        <div class="d-flex">
          <EntryStageTracker
            :title="data.title"
            :course="data.course"
            :authors="data.authors"
            :entries="data.entries"
          />
          <div class="ml-auto w-25">
            <CollaborateProgress :progress="data.entries.length" />
            <div class="d-flex flex-column justify-content-end">
              <v-btn
                @click="createDraft(data)"
                v-if="data.entries.length < 3"
                icon="mdi-file-document-edit"
                class="mt-5 ml-auto mr-3"
              />
              <v-btn class="mt-5 ml-auto mr-3" icon="mdi-trash-can" />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    mockData: [
      {
        title: "Example",
        course: "Course 8",
        collaborationType: "Example",
        topic: "Some example",
        authors: ["Nel"],
        entries: [
          { postId: 56, title: "Bla" },
          { postId: 56, title: "Bla" },
          { postId: 56, title: "Bla" },
        ],
      },
      {
        title: "Example",
        course: "Course 8",
        authors: ["Nel"],
        entries: [
          { postId: 56, title: "Bla" },
          { postId: 56, title: "Bla" },
        ],
      },
      {
        title: "Example",
        course: "Course 7",
        authors: ["Nel"],
        entries: [{ postId: 54, title: "Bla" }],
      },
    ],
  }),
  methods: {
    createDraft(data) {
      console.log(data);
    },
  },
};
</script>

<style>
.card-line {
  flex-direction: column;
  align-items: flex-start;
}

.tracker {
  margin-left: auto;
  width: 25%;
}
</style>
