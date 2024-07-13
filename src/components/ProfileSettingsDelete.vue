<template>
  <v-card class="mx-auto">
    <v-card-title class="pt-4 ml-1"> Danger zone </v-card-title>

    <v-divider class="my-2"></v-divider>

    <v-card-actions class="ma-2">
      <v-btn
        :to="{ name: 'deleteAccount' }"
        text="Delete account"
        class="ml-auto"
        variant="flat"
        color="red"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
