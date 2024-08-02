<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto pa-12 pb-8"
      max-width="448"
      elevation="8"
      rounded="lg"
    >
      <v-alert
        v-if="error"
        icon="$error"
        title="Something went wrong try again"
        closable
      >
      </v-alert>
      <v-form ref="form">
        <div class="text-subtitle-1 text-medium-emphasis">
          Type your password to delete enable the button
        </div>

        <v-text-field
          v-model="password"
          @click:append-inner="visible = !visible"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          placeholder="Enter your password"
          density="compact"
        ></v-text-field>
      </v-form>

      <v-card-actions class="d-block mx-auto">
        <div class="mb-2">
          <v-btn
            @click="deleteAccount"
            :disabled="password === ''"
            variant="tonal"
            size="large"
            color="red"
            block
          >
            Delete Account
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
  name: "AccountDelete",
  data: () => ({
    loading: false,
    error: false,
    password: "",
    visible: false,
  }),
  methods: {
    async deleteAccount() {
      this.loading = true;
      const userStore = useUserStore();

      if (userStore.checkPassword(this.password)) {
        userStore.deleteAccount();
      } else {
        this.error = true;
        setTimeout(() => (this.error = false), 3000);
      }

      this.loading = false;
    },
    cancel() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped></style>
