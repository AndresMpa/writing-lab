<template>
  <div v-if="userSession" class="mx-2">
    <v-container class="mx-auto pt-6" fluid>
      <v-row>
        <v-col>
          <HomeLoged></HomeLoged>
        </v-col>
        <v-col>
          <v-card class="my-12 py-12">
            <HomeStats></HomeStats>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div v-else>
    <v-container class="mx-auto py-12" fluid>
      <v-row>
        <v-col>
          <v-sheet class="pb-4 pt-1 ml-8" rounded>
            <HomeGreeter></HomeGreeter>
          </v-sheet>
        </v-col>
        <v-col>
          <v-img
            cover
            :width="300"
            class="mx-auto"
            aspect-ratio="4/3"
            src="../../assets/img/deco_alt.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    userSession: true,
  }),
};
</script>

<style scoped lang="sass">
.home-page
  background-image: linear-gradient(to left top, #1970c6, #007ccd, #0088d3, #0094d7, #009fdb, #47aae1, #67b4e6, #81bfec, #adccf2, #cfdbf7, #eaecfb, #ffffff), url('../assets/img/deco_alt.png')
  background-position: center, bottom right
  background-repeat: no-repeat, no-repeat
  background-size: cover, auto
  background-attachment: fixed
</style>
