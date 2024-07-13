<template>
  <v-footer class="d-flex flex-column">
    <div class="d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="site in sites"
        :key="site.icon"
        :icon="site.icon"
        :href="site.href"
        target="_blank"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
    </div>

    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} —
      <strong>
        {{ $name.charAt(0).toUpperCase() + $name.slice(1) }} — V.{{ $version }}
      </strong>
    </div>
  </v-footer>
</template>

<script>
export default {
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

<style scoped lang="sass"></style>
