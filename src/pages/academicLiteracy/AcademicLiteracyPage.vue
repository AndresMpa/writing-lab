<template>
  <div v-if="bucketFiles">
    <AcademicIterator :bucketFiles="bucketFiles" />
  </div>
  <div v-else>
    <DisplayPicture />
  </div>
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture.vue";

import { useBucketStore } from "@/stores/bucketStore";

const bucketStore = useBucketStore();

export default {
  computed: {
    bucketFiles() {
      return bucketStore.bucketFiles;
    },
  },
  created() {
    bucketStore.list();
  },
};
</script>
