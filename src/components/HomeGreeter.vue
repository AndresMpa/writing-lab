<template>
  <v-card :width="500" variant="text" class="ml-8 mt-8">
    <v-card-title
      class="text-h4 font-weight-black greeter-title"
      color="primary"
    >
      Re-Configuring you Academic Writing Teaching
    </v-card-title>

    <v-card-text class="font-weight-thin text-body-1 my-3">
      This platform has been created in order to empower instructors at the UTP
      to tune their teaching practices to meet their students' needs in academic
      writing in the XXI century.
    </v-card-text>

    <v-card-actions>
      <v-btn :to="{ name: 'login' }" color="primary" variant="outlined">
        Start collaborating
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup></script>

<style scoped lang="sass">
.greeter-title
  white-space: normal
</style>
