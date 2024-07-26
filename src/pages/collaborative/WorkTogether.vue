<template>
  <v-stepper v-if="peers" alt-labels :items="['Peers', 'Course']" class="ma-12">
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
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "@/components/decoration/Loading";
import { useTogetherStore } from "@/stores/togetherStore";

const togetherStore = useTogetherStore();

export default {
  data: () => ({
    peers: null,
  }),
  methods: {
    savePeers(peers) {
      const data = [...peers];
      console.log(data);
    },
    saveCourses(courses) {
      const data = [...courses];
      console.log(data);

      this.$router.push({ name: "draft" });
    },
  },
  created() {
    togetherStore.initStore();
    this.peers = togetherStore.usersData;
  },
};
</script>
