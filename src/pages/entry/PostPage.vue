<template>
  <div v-if="postData">
    <div class="position-relative">
      <v-btn
        @click="logOut"
        class="position-absolute top-0 left-0 ml-3 mt-3"
        prepend-icon="mdi-door-open"
        size="small"
      >
        Leave
      </v-btn>
    </div>
    <EntryView :item="postData" />
    <EntryAuthor :post="postData" :profile="authorData" />
  </div>
  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture";
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  name: "PostPage",
  data: () => ({
    postData: null,
    authorData: null,
  }),
  created() {
    this.$watch(() => this.$route.params.id, this.getData, {
      immediate: true,
    });
  },
  methods: {
    logOut() {
      this.$router.back();
    },
    async getData(id) {
      await postStore.getPostData(id);
      const rawData = postStore.postDetail;

      this.postData = rawData.postData;
      this.authorData = rawData.authorData;
    },
  },
};
</script>
