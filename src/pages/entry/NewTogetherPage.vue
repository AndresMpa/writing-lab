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
          :items="['Peers', 'Type', 'Course', 'Topic', 'Review']"
          class="mx-12"
          hide-actions
          alt-labels
          editable
        >
          <template v-slot:item.1>
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

          <template v-slot:item.2>
            <ComboSearch
              @save-options="saveType"
              :options="typeOptions"
              title="Type of collaboration"
              label=""
              single
            />
          </template>

          <template v-slot:item.3>
            <ComboSearch
              @save-options="saveCourses"
              title="Course the post is focused on"
              label=""
              single
            />
          </template>

          <template v-slot:item.4>
            <v-text-field
              v-model="typeUnit"
              density="compact"
              name="type-unit"
              label=""
            />
          </template>

          <template v-slot:item.5>
<v-card>

</v-card>
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
    savePeers(peers) {
      const data = peers.map((peer) => {
        return { id: peer.user_id, username: peer.fullname, ...peer };
      });
      editorStore.setAuthors(data);
    },
    saveCourses(courses) {
      let data;
      if (typeof courses === "string") {
        data = [courses];
      } else {
        data = [...courses];
      }
      editorStore.setCourseLevel(data);
    },
    createDraft() {
      this.$router.push({ name: "draft" });
    },
    leavePage() {
      this.$router.push({ name: "collaborate" });
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
