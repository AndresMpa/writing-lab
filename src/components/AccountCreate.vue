<template>
  <v-card class="mx-auto pa-6" max-width="1000" elevation="8" rounded="lg">
    <v-form fast-fail @submit.prevent>
      <v-stepper editable non-linear v-model="step">
        <template v-slot:default="{ prev, next }">
          <v-stepper-header>
            <v-stepper-item
              value="1"
              :error="profileState"
              :complete="!profileState"
            >
              <template v-slot:title> Profile information </template>
              <template v-slot:subtitle>
                <p v-if="profileState">Action required</p>
              </template>
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item value="2" :error="ilexState" :complete="!ilexState">
              <template v-slot:title> Courses data </template>
              <template v-slot:subtitle>
                <p v-if="ilexState">Action required</p>
              </template>
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              value="3"
              :error="termsState"
              :complete="!termsState"
            >
              <template v-slot:title> Terms and conditions </template>
              <template v-slot:subtitle>
                <p v-if="termsState">Action required</p>
              </template>
            </v-stepper-item>
          </v-stepper-header>

          <v-stepper-window>
            <v-stepper-window-item value="1">
              <v-card>
                <v-container fluid>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model="fullName"
                        :rules="nameRules"
                        label="Full name"
                        name="full-name"
                        density="compact"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="nickName"
                        :rules="nameRules"
                        density="compact"
                        label="Nickname"
                        name="nickname"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="userPicture"
                        label="URL to your picture"
                        hint="You can leave this field empty"
                        name="picture"
                        density="compact"
                      ></v-text-field>
                    </v-col>

                    <v-divider vertical></v-divider>

                    <v-col cols="6">
                      <v-text-field
                        @click:append="showPassword = !showPassword"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        :rules="passwordRules"
                        v-model="password"
                        hint="At least 8 characters, numbers and special characters"
                        label="Password"
                        name="password"
                        counter
                        density="compact"
                      ></v-text-field>

                      <v-text-field
                        @click:append="showRePassword = !showRePassword"
                        :append-icon="
                          showRePassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="showRePassword ? 'text' : 'password'"
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
              </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item value="2">
              <v-card flat>
                <v-combobox
                  :items="courses"
                  v-model="nextCourses"
                  label="Courses for the next semester"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      size="small"
                      v-bind="data.attrs"
                      :disabled="data.disabled"
                      :model-value="data.selected"
                      :key="JSON.stringify(data.item)"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <template v-slot:prepend>
                        <v-avatar class="bg-accent text-uppercase" start>
                          C-{{
                            data.item.title.slice(
                              data.item.title.length - 1,
                              data.item.title.length
                            )
                          }}
                        </v-avatar>
                      </template>
                      {{ data.item.title }}
                    </v-chip>
                  </template>
                </v-combobox>

                <v-combobox
                  :items="courses"
                  v-model="previousCourses"
                  label="Previously taught courses"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      size="small"
                      v-bind="data.attrs"
                      :disabled="data.disabled"
                      :model-value="data.selected"
                      :key="JSON.stringify(data.item)"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <template v-slot:prepend>
                        <v-avatar class="bg-accent text-uppercase" start>
                          C-{{
                            data.item.title.slice(
                              data.item.title.length - 1,
                              data.item.title.length
                            )
                          }}
                        </v-avatar>
                      </template>
                      {{ data.item.title }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item value="3">
              <v-card flat>
                <AccountCreateDisclaimer></AccountCreateDisclaimer>

                <v-card-actions class="d-flex justify-space-between">
                  <AccountCreateTerms></AccountCreateTerms>

                  <div>
                    <v-btn
                      :disabled="!terms"
                      :variant="terms ? 'outlined' : 'text'"
                      :color="terms ? 'primary' : ''"
                      :prepend-icon="
                        terms ? 'mdi-account-plus' : 'mdi-account-off'
                      "
                      @click="createUser"
                    >
                      Create account
                    </v-btn>
                    <v-checkbox
                      hide-details
                      v-model="terms"
                      color="secondary"
                      label="I agree to site terms and conditions"
                    ></v-checkbox>
                  </div>
                </v-card-actions>
              </v-card>
            </v-stepper-window-item>
          </v-stepper-window>

          <v-stepper-actions
            :disabled="disabled"
            @click:next="next"
            @click:prev="prev"
          ></v-stepper-actions>
        </template>
      </v-stepper>
    </v-form>
  </v-card>
</template>

<script>
import AccountCreateTerms from "./AccountCreateTerms.vue";
import AccountCreateDisclaimer from "./AccountCreateDisclaimer.vue";

export default {
  data: () => ({
    fullName: "",
    nickName: "",
    userPicture: "",
    password: "",
    rePassword: "",
    showPassword: false,
    showRePassword: false,

    nextCourses: null,
    previousCourses: null,
    courses: [
      "Course 1",
      "Course 2",
      "Course 3",
      "Course 4",
      "Course 5",
      "Course 6",
      "Course 7",
      "Course 8",
    ],

    terms: false,

    step: 0,
    nextStep: 1,
  }),

  computed: {
    nameRules() {
      return [
        (value) => !!value || "Name is required",
        (value) => {
          if (/[^0-9]/.test(value)) return true;
          return "You name can not contain digits.";
        },
      ];
    },
    nickRules() {
      return [
        (value) => !!value || "Nickname is required",
        (value) =>
          /[^0-9]/.test(value) ? true : "You name can not contain digits.",
      ];
    },
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
      return (
        this.rePassword !== this.password ||
        this.rePassword === "" ||
        this.password === "" ||
        this.nickName === "" ||
        this.fullName === ""
      );
    },
    ilexState() {
      return this.nextCourses === null || this.previousCourses === null;
    },
    termsState() {
      return !this.terms;
    },

    disabled() {
      return this.step === 1
        ? "prev"
        : this.step === this.nextStep
        ? "next"
        : undefined;
    },
  },

  methods: {
    createUser() {
      console.log(
        this.fullName,
        this.nickName,
        this.userPicture,
        this.password,

        this.nextCourses.map((v) => v),
        this.previousCourses.map((v) => v)
      );
    },
  },
};
</script>
