<template>
  <div v-if="userSession" class="mx-2">
    <v-container class="mx-auto pt-6" fluid>
      <v-row>
        <v-col>
          <HomeLogged />
        </v-col>
        <v-col>
          <v-card class="my-12 py-12">
            <HomeStats />
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
            <HomeGreeter />
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
import { useUserStore } from "@/stores/userStore";

export default {
  data: () => ({
    userSession: false,
  }),
  created() {
    const userStore = useUserStore();
    if (userStore.userId !== null) {
      this.userSession = true;
    }
  },
};
</script>
