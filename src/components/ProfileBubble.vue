<template>
  <v-btn size="small" icon>
    <Avatar></Avatar>
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
</template>

<script>
import Avatar from "@/components/decoration/Avatar.vue";
</script>
