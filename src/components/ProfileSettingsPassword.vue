<template>
  <v-card fluid>
    <v-card-title class="pt-4 ml-1"> Change password </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col cols="11">
          <v-text-field
            @click:append="showOldPassword = !showOldPassword"
            :append-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showOldPassword ? 'text' : 'password'"
            v-model="oldPassword"
            hint="Type your old password"
            label="Old password"
            density="compact"
            name="password"
          ></v-text-field>
        </v-col>

        <v-col cols="1">
          <v-btn
            @click="checkPassword"
            color="primary"
            variant="flat"
            text="Check"
          ></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            @click:append="showPassword = !showPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :disabled="disablePassword"
            :rules="passwordRules"
            v-model="password"
            hint="At least 8 characters, numbers and special characters"
            density="compact"
            label="Password"
            name="password"
            counter
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            @click:append="showRePassword = !showRePassword"
            :append-icon="showRePassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showRePassword ? 'text' : 'password'"
            :disabled="disablePassword"
            :rules="passwordReRules"
            v-model="rePassword"
            hint="Both password should match each other"
            label="Confirm your password"
            name="re-password"
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mb-2"></v-divider>

    <v-card-actions class="ma-2">
      <v-btn
        :disabled="disablePassword"
        variant="plain"
        class="ml-auto"
        text="Discard"
      ></v-btn>

      <v-btn
        :variant="disablePassword ? 'outlined' : 'flat'"
        :disabled="disablePassword"
        color="primary"
        class="ml-4"
        text="Save"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    password: "",
    rePassword: "",
    oldPassword: "",
    showPassword: false,
    showRePassword: false,
    showOldPassword: false,
    disablePassword: true,
  }),

  computed: {
    passwordRules() {
      return [
        (value) => !!value || "Password can not be empty",
        (value) =>
          value.length >= 8 || "Password must have at least 8 characters",
        (value) =>
          /[A-Z]/.test(value)
            ? true
            : "Password must have at least 1 upper cased character",
        (value) =>
          /[0-9]/.test(value) ? true : "Password must have at least 1 number",
        (value) =>
          /[!@#$%^&*(),.?":{}|<>]/.test(value)
            ? true
            : "Password must have at least 1 special character",
      ];
    },
    passwordReRules() {
      return [
        (value) => !!value || "You have to confirm your password",
        (value) =>
          value === this.password || "Passwords do not match each other",
      ];
    },
    profileState() {
      return this.rePassword !== this.password || this.rePassword === "";
    },
  },

  methods: {
    checkPassword() {
      if (this.oldPassword === "data") {
        this.disablePassword = false;
      }
    },
  },
};
</script>
