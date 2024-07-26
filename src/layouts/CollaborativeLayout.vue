<template>
  <v-layout>
    <v-app-bar prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        {{ $route.meta.nickname }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu v-if="this.$route.name !== 'workTogether'">
        <template v-slot:activator="{ props }">
          <v-btn
            :append-icon="props ? 'mdi-chevron-down ' : 'mdi-chevron-up'"
            v-bind="props"
          >
            {{
              this.selectedCourse === null
                ? "All Courses"
                : this.selectedCourse.title
            }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="updateSelectedCourse(index)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      location="right"
      v-model="drawer"
      width="260"
      temporary
      floating
    >
      <template v-slot:prepend>
        <v-list-item
          :subtitle="profile.nickname"
          :title="profile.username"
          lines="two"
        >
          <template v-slot:prepend>
            <Avatar :profile="profile"></Avatar>
          </template>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <CollaborativeRouter></CollaborativeRouter>

      <v-divider></v-divider>

      <CollaborativeNotifications></CollaborativeNotifications>

      <v-divider></v-divider>

      <div class="d-flex justify-center pa-3">
        <RouterLink :to="{ name: 'home' }">
          <v-img width="100" src="../assets/img/ilex.png"></v-img>
        </RouterLink>
      </div>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import Avatar from "@/components/decoration/Avatar.vue";
import { usePostStore } from "@/stores/postStore";
import { useUserStore } from "@/stores/userStore";

const postStore = usePostStore();

export default {
  data: () => ({
    drawer: false,
    profile: null,
    userSession: false,
    selectedCourse: null,
    items: [
      { title: "All Course", filter: null },
      { title: "Course 1", filter: "C1" },
      { title: "Course 2", filter: "C2" },
      { title: "Course 3", filter: "C3" },
      { title: "Course 4", filter: "C4" },
      { title: "Course 5", filter: "C5" },
      { title: "Course 6", filter: "C6" },
      { title: "Course 7", filter: "C7" },
      { title: "Course 8", filter: "C8" },
    ],
  }),
  methods: {
    updateSelectedCourse(index) {
      this.selectedCourse = this.items[index];
      postStore.setLevel(this.items[index].filter);
    },
  },
  created() {
    const userStore = useUserStore();

    this.profile = userStore.userData;

    if (userStore.userId !== null) {
      this.userSession = true;
    }
  },
};
</script>
