<template>
  <div>
    <v-list lines="three">
      <v-list-item v-for="(item, index) in peersList" :key="index">
        <v-container fluid>
          <v-row>
            <v-col cols="11">
              <ProfileCard :profile="item" />
            </v-col>
            <v-col class="d-flex">
              <v-checkbox-btn
                class="d-flex justify-center align-center"
                v-model="selected"
                :value="item"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-list-item>
    </v-list>
    <v-card flat>
      <v-card-title class="d-flex pr-0">
        Collaborate with:
        <v-chip v-for="user in collaborating" :key="user" class="mx-2">
          {{ user }}
        </v-chip>
        <v-btn
          @click="$emit('savePeers', selected)"
          color="primary"
          class="ml-auto"
        >
          Save
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

export default {
  props: {
    peers: {
      type: Array,
    },
  },
  data: () => ({
    selected: [],
  }),
  computed: {
    peersList() {
      return this.peers.filter((person) => {
        if (userStore.userId !== person.user_id) {
          return person;
        }
      });
    },
    collaborating() {
      const filteredObjects = this.peers.filter((user) =>
        this.selected.includes(user)
      );
      const usernames = filteredObjects.map((user) => user.nickname);
      return usernames;
    },
  },
};
</script>
