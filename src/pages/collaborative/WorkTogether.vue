<template>
  <v-stepper
    v-if="peers.length > 0"
    :items="['Peers', 'Course']"
    class="ma-12"
    alt-labels
  >
    <template v-slot:item.1>
      <ProfileList :peers="peers" @save-peers="savePeers" />
    </template>

    <template v-slot:item.2>
      <ProfileSettingsCourses
        @save-courses="saveCourses"
        title="Course the post is focused on"
        label=""
        single
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
  computed: {
    peers() {
      return editorStore.authorsRawData;
    },
  },
  methods: {
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
      this.$router.push({ name: "draft" });
    },
  },
  created() {
    editorStore.getAuthorsList();
  },
};
</script>
