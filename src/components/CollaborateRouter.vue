<template>
  <v-list density="compact" min-width="250" rounded="lg" slim nav>
    <v-list-item
      :to="{ name: 'collaborate' }"
      prepend-icon="mdi-home"
      title="Collaborate home"
    ></v-list-item>

    <v-divider class="my-2"></v-divider>

    <v-list-item
      :to="{ name: 'getInsights' }"
      prepend-icon="mdi-lightbulb"
      title="Get insights"
    ></v-list-item>

    <v-list-item
      :to="{ name: 'meaningfulExperiences' }"
      prepend-icon="mdi-camera-burst"
      title="Meaningful experiences"
    ></v-list-item>

    <v-list-item
      :to="{ name: 'wonderHowCould' }"
      prepend-icon="mdi-account-question"
      title="I wonder how I could"
    ></v-list-item>

    <v-list-item
      :to="{ name: 'collaborativeActivities' }"
      prepend-icon="mdi-handshake"
      title="Collaborative activities"
    ></v-list-item>
  </v-list>
</template>
