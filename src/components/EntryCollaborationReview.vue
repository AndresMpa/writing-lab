<template>
  <v-card>
    <v-card-title>{{ collaboration.title }} - Review</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-col>
          <div>
            You will be collaborating with
            <v-chip v-for="user in peers" :key="user" class="mx-1">
              {{ user.nickname }}
            </v-chip>
          </div>
        </v-col>
        <v-col>
          <div>You will work on a "{{ collaboration.ctype }}" project</div>
        </v-col>
      </v-row>
      <v-row align="center" class="mx-0">
        <v-col>
          <div>
            You will be focus on
            <v-chip v-for="course in level" :key="course" class="mx-1">
              {{ course }}
            </v-chip>
          </div>
        </v-col>
        <v-col>
          <div>
            Your Unit or Topic will be "{{ collaboration.topicUnit }}" project
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider class="mb-2"></v-divider>

    <v-card-actions class="ma-2">
      <v-btn
        @click="discordCollaboration"
        text="Cancel collaboration"
        variant="plain"
        class="ml-auto"
      ></v-btn>
      <v-btn
        @click="createDraft"
        text="Make a draft"
        color="primary"
        variant="flat"
        class="ml-4"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useEditorStore } from "@/stores/editorStore";

const editorStore = useEditorStore();

export default {
  computed: {
    peers() {
      return editorStore.authorsRawData;
    },
    level() {
      const { level } = editorStore.draftData;
      return level;
    },
    collaboration() {
      return editorStore.collaborationData;
    },
  },
  methods: {
    createDraft() {
      this.$router.push({ name: "draft" });
    },
    discordCollaboration() {
      editorStore.deleteDraft();
    },
  },
};
</script>
