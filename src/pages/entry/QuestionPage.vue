<template>
  <div v-if="question">
    <v-container fluid>
      <v-row>
        <v-col>
          <CollaborativeLeaveButton />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <CollaborativeForum :question="question" :canEnd="enableActions" />
        </v-col>
      </v-row>
    </v-container>

    <CollaborativeBento :comments="comments" />
  </div>

  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import { useForumStore } from "@/stores/forumStore";
import { useUserStore } from "@/stores/userStore";

const forumStore = useForumStore();
const userStore = useUserStore();

export default {
  data: () => ({
    question: null,
    comments: null,
    authorData: null,
  }),
  computed: {
    enableActions() {
      return this.authorData.some((user) => user.id === userStore.id);
    },
  },
  methods: {
    async getData(id) {
      await forumStore.getForumDetail(id);
      const rawData = forumStore.forumDetail;

      this.question = rawData.forumData;
      this.authorData = rawData.authorData;
    },
  },
  created() {
    this.$watch(() => this.$route.params.id, this.getData, {
      immediate: true,
    });
  },
};
</script>
