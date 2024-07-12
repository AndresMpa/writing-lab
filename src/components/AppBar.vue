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
      <div v-else class="mx-2">
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
            <CollaborativeRouter></CollaborativeRouter>
          </v-menu>
        </v-btn>
        <v-btn variant="outlined" size="small" icon>
          <v-avatar>
            <span class="text-h5">AP</span>
          </v-avatar>
          <v-menu
            activator="parent"
            location="bottom end"
            transition="fade-transition"
          >
            <v-list density="compact" min-width="250" rounded="lg" slim>
              <v-list-item
                :to="{ name: 'settings' }"
                prepend-icon="mdi-cogs"
                title="Settings"
              ></v-list-item>

              <v-list-item
                :to="{ name: 'logout' }"
                prepend-icon="mdi-logout"
                title="Logout"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    userSession: false,
  }),
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
