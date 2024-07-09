<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8"
      max-width="448"
      elevation="8"
      rounded="lg"
    >
      <v-form ref="form">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          prepend-inner-icon="mdi-badge-account"
          placeholder="Username"
          variant="outlined"
          density="compact"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
          <a
            :href="mailto"
            class="text-caption text-decoration-none text-blue"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          @click:append-inner="visible = !visible"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          placeholder="Enter your password"
          variant="outlined"
          v-model="password"
          density="compact"
        ></v-text-field>

        <v-btn
          @click="logInUser"
          :disabled="!enable"
          variant="tonal"
          class="mb-8"
          color="blue"
          size="large"
          block
        >
          Log In
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <RouterLink :to="{ name: 'createAccount' }">
          <p class="text-blue text-decoration-none pointer">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </p>
        </RouterLink>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { genMailto } from "@/lib/mailto";

export default {
  data: () => ({
    username: "",
    password: "",
    visible: false,
    mailto: genMailto(),
  }),

  computed: {
    enable() {
      return this.username !== "" || this.password !== ""
    }

  },

  methods: {
    logInUser() {
      console.log(this.password, this.username);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
