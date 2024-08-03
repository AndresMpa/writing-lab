<template>
  <v-card flat>
    <v-card-title class="pt-4 ml-1"> Profile information </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            v-model="fullName"
            :rules="nameRules"
            label="Full name"
            name="full-name"
            density="compact"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="nickName"
            :rules="nameRules"
            density="compact"
            label="Nickname"
            name="nickname"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="userPicture"
            label="URL to your picture"
            hint="You can leave this field empty"
            name="picture"
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mb-2"></v-divider>

    <v-card-actions class="ma-2">
      <v-btn
        @click="discard"
        variant="plain"
        class="ml-auto"
        text="Discard"
      ></v-btn>

      <v-btn
        @click="save"
        color="primary"
        variant="flat"
        class="ml-4"
        text="Save"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useUserStore } from '@/stores/userStore';

export default {
  data: () => ({
    fullName: "",
    nickName: "",
    userPicture: "",
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
  },

  methods: {
    save() {
      const userStore  = useUserStore()
      const data = {
        fullname: this.fullName || userStore.fullname,
        nickname: this.nickName  || userStore.nickname,
        image: this.userPicture || userStore.image,
      };
      userStore.updateField(data)
    },
    discard() {
      this.fullName = "";
      this.nickName = "";
      this.userPicture = "";
    },
  },
};
</script>
