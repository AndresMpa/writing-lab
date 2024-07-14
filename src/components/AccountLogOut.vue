<template>
  <div>
    <v-card class="mx-auto" max-width="448" elevation="8" rounded="lg">
      <v-card-actions class="d-block mx-auto">
        <div class="mb-2">
          <v-btn
            @click="logOut"
            variant="tonal"
            color="blue"
            size="large"
            block
          >
            Logout
          </v-btn>
        </div>
        <div>
          <v-btn @click="cancel" variant="tonal" size="large" block>
            Cancel
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  name: "AccountLogOut",
  methods: {
    logOut() {
      const userStore = useUserStore();
      userStore.closeSession();
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
