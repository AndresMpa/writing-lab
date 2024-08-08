<template>
  <v-card :width="800" variant="text" class="ml-8 mt-8">
    <v-card-title
      class="text-h4 font-weight-black greeter-title"
      color="primary"
    >
      Collaborate with your peers to become a better strategist
    </v-card-title>

    <v-card-text class="font-weight-thin text-body-1 my-3">
      Welcome to the ILEX Writing Lab platform. Here, you will be empowered to
      bring your academic writing lessons to the next level. Are you ready to
      start collaborating with your peers?
    </v-card-text>

    <v-card-actions>
      <v-btn :to="{ name: 'collaborative' }" color="primary" variant="outlined">
        Collaborate
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script></script>

<style scoped lang="sass">
.greeter-title
  white-space: normal
</style>
