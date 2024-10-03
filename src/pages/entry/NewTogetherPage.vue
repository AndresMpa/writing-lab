<template>
  <v-container fluid v-if="peers.length > 0">
    <v-row no-gutters>
      <v-col>
        <EntryViewLeave title="Make a new collaboration" :loading="loading" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-stepper
          :items="['Title', 'Peers', 'Type', 'Course', 'Topic/Unit', 'Review']"
          v-model="currentStep"
          class="mx-12"
          hide-actions
          alt-labels
          editable
        >
          <template v-slot:item.1>
            <TextField
              @save-text="saveTitle"
              title="Name of your project"
              label="Type your collaboration project title"
            />
          </template>
          <template v-slot:item.2>
            <v-text-field
              density="compact"
              placeholder="Search your peer"
              prepend-inner-icon="mdi-magnify"
              v-model="peerToSearch"
              hide-details
              clearable
            ></v-text-field>

            <ProfileList :peers="filteredPeers" @save-peers="savePeers" />
          </template>

          <template v-slot:item.3>
            <ComboSearch
              @save-options="saveType"
              :options="typeOptions"
              title="Type of collaboration"
              label=""
              single
            />
          </template>

          <template v-slot:item.4>
            <ComboSearch
              @save-options="saveCourses"
              title="Course the post is focused on"
              label=""
              single
            />
          </template>

          <template v-slot:item.5>
            <TextField
              @save-text="saveTopic"
              title="Topic/Unit of the collaboration"
              label="Type your topic or unit here"
            />
          </template>

          <template v-slot:item.6>
            <EntryCollaborationReview />
          </template>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>

  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture";

import { useEditorStore } from "@/stores/editorStore";

const editorStore = useEditorStore();

export default {
  components: {
    DisplayPicture,
  },
  data: () => ({
    loading: false,
    currentStep: 1,
    peerToSearch: "",
    filteredPeers: [],
    typeOptions: [
      "Co-planning",
      "Co-teaching",
      "Pen-paling",
      "Project-based learning",
      "Problem-based learning",
      "Challenge-based learning",
    ],
  }),
  computed: {
    peers() {
      return editorStore.authorsRawData;
    },
  },
  watch: {
    peerToSearch() {
      this.filterPeers();
    },
  },
  methods: {
    filterPeers() {
      const searchLower = this.peerToSearch.toLowerCase();

      if (!this.peerToSearch) {
        return this.peers;
      } else {
        this.filteredPeers = this.peers.filter((peer) => {
          return (
            peer.fullname.toLowerCase().includes(searchLower) ||
            peer.nickname.toLowerCase().includes(searchLower) ||
            peer.course.some((course) =>
              course.toLowerCase().includes(searchLower)
            )
          );
        });
      }
    },
    saveTitle(title) {
      editorStore.saveCollaborationData({ title: title });
      this.nextStep();
    },
    savePeers(peers) {
      const data = peers.map((peer) => {
        return { id: peer.user_id, username: peer.fullname, ...peer };
      });
      editorStore.setAuthors(data);
      this.nextStep();
    },
    saveType(savedType) {
      editorStore.saveCollaborationData({ ctype: savedType });
      this.nextStep();
    },
    saveCourses(courses) {
      let data;
      if (typeof courses === "string") {
        data = [courses];
      } else {
        data = [...courses];
      }
      editorStore.setCourseLevel(data);
      this.nextStep();
    },
    saveTopic(topicUnit) {
      editorStore.saveCollaborationData({ topicUnit: topicUnit });
      this.nextStep();
    },
    nextStep() {
      if (this.currentStep < 6) {
        this.currentStep++;
      }
    },
    leavePage() {
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push({ name: "collaborate" });
      }
    },
  },
  created() {
    editorStore.getAuthorsList();
    this.filteredPeers = this.peers;
  },
  mounted() {
    this.filterPeers();
  },
};
</script>
