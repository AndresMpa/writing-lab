<template>
  <v-app-bar :elevation="1">
    <v-app-bar-title>
      <RouterLink class="bar-title" :to="{ name: 'home' }">
        <v-img :width="80" src="../assets/img/ilex.png"></v-img>
        <h3 class="bar-title--text">ILEX Writing lab</h3>
      </RouterLink>
    </v-app-bar-title>

    <template v-slot:append>
      <div v-if="userSession" class="mx-2">
        <v-btn
          :to="{ name: 'faq' }"
          prepend-icon="mdi-head-question"
          variant="plain"
          class="mr-2"
        >
          FAQ
        </v-btn>
        <v-btn prepend-icon="mdi-bookshelf" variant="plain" class="mr-2">
          AW
          <v-menu
            activator="parent"
            location="bottom end"
            transition="fade-transition"
          >
            <v-list density="compact" min-width="250" rounded="lg" slim>
              <v-list-item
                :to="{ name: 'awBasic' }"
                prepend-icon="mdi-alphabetical-variant"
                title="Basic"
              ></v-list-item>

              <v-list-item
                :to="{ name: 'awTeaching' }"
                prepend-icon="mdi-human-male-board"
                title="Teaching"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-btn prepend-icon="mdi-crowd" variant="text" class="mr-2">
          Collaborate
          <v-menu
            activator="parent"
            location="bottom end"
            transition="fade-transition"
          >
            <CollaborativeRouter />
          </v-menu>
        </v-btn>
        <ProfileBubble :profile="profile"></ProfileBubble>
      </div>
      <div v-else class="mx-2">
        <v-btn
          prepend-icon="mdi-account-circle"
          :to="{ name: 'login' }"
          variant="plain"
        >
          Sign in
        </v-btn>
        <v-btn
          prepend-icon="mdi-badge-account"
          :to="{ name: 'createAccount' }"
          variant="outlined"
        >
          Sign up
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  data: () => ({
    userSession: false,
    profile: null,
  }),
  created() {
    const userStore = useUserStore();

    this.profile = userStore.userData;

    if (userStore.userId !== null) {
      this.userSession = true;
    }
  },
};
</script>

<style scoped lang="sass">
.bar-title
  display: inline-flex
  margin: 0 15px
  &--text
    display: flex
    align-items: center
    margin: 0 25px

    color: white
    font-weight: bold
</style>
