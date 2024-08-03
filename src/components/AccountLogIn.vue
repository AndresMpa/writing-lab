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
          placeholder="Nickname"
          density="compact"
          v-model="nickname"
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-email"
          placeholder="Email"
          density="compact"
          v-model="email"
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
          density="compact"
          v-model="password"
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
import { useUserStore } from "@/stores/userStore";
import { genMailto } from "@/lib/mailto";

const userStore = useUserStore();

export default {
  name: "AccountLogIn",
  data: () => ({
    nickname: "",
    password: "",
    email: "",
    visible: false,
    mailto: genMailto(),
  }),

  computed: {
    enable() {
      return this.nickname !== "" || this.email !== "" || this.password !== "";
    },
  },

  methods: {
    async logInUser() {
      userStore.setEmail(this.email);
      userStore.setNickname(this.nickname);
      await userStore.initAccount(this.email, this.password);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
