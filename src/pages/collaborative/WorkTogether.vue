<template>
  <v-stepper v-if="peers.length > 0" alt-labels :items="['Peers', 'Course']" class="ma-12">
    <template v-slot:item.1>
      <ProfileList :peers="peers" @save-peers="savePeers" />
    </template>

    <template v-slot:item.2>
      <ProfileSettingsCourses
        @save-courses="saveCourses"
        title="Course the post is focused on"
        label=""
      />
    </template>
  </v-stepper>

  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture";
import { useEditorStore } from "@/stores/editorStore";

const editorStore = useEditorStore();

export default {
  data: () => ({
    peers: null,
  }),
  methods: {
    savePeers(peers) {
      const data = [...peers];
      editorStore.setAuthors(data);
    },
    saveCourses(courses) {
      const data = [...courses];
      editorStore.setCourseLevel(data);
      this.$router.push({ name: "draft" });
    },
  },
  created() {
    editorStore.getAuthorsList();
    this.peers = editorStore.authorsRawData;
  },
};
</script>
