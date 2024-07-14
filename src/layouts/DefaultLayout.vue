<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view />
    </v-main>

    <AppFooter :sites="sites" />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({
    sites: [
      { icon: "mdi-instagram", href: "https://www.instagram.com/utpilex/" },
      { icon: "mdi-web", href: "https://idiomas.utp.edu.co/" },
      {
        icon: "mdi-code-braces",
        href: "https://github.com/AndresMpa/writing-lab",
      },
    ],
  }),
};
</script>
