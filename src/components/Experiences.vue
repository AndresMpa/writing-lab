<template>
  <v-infinite-scroll ref="infinite" :height="height" @load="load">
    <div>
      <v-container fluid>
        <v-row>
          <template v-for="(item, index) in items" :key="index">
            <v-col cols="6" class="my-auto">
              <ExperiencesView
                :title="item.title"
                :description="item.description"
                :level="item.level"
                :img="item.img"
                :id="item.id"
              />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </v-infinite-scroll>
</template>

<script>
export default {
  data: () => ({
    size: 300,
    virtualLength: 12,
    height: window.innerHeight - 65,
    items: [
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png",
        title: "The Sci-Fi Shooter Experience",
        description:
          "Dive into a futuristic world of intense battles and alien encounters.",
        level: "Course 8",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png",
        title: "Epic Adventures in Open Worlds",
        description:
          "Embark on a journey through vast, immersive landscapes and quests.",
        level: "Course 1",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png",
        title: "Surviving the Space Station Horror",
        description:
          "Navigate a haunted space station in this chilling survival horror game.",
        level: "Course 7",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png",
        title: "Neon-Lit High-Speed Racing Thrills",
        description:
          "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
        level: "Course 2",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png",
        title: "Retro-Style Platformer Adventures",
        description:
          "Jump and dash through pixelated worlds in this classic-style platformer.",
        level: "Course 4",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png",
        title: "Medieval Strategic War Campaigns",
        description:
          "Lead armies into epic battles and conquer kingdoms in this strategic game.",
        level: "Course 6",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png",
        title: "Underwater VR Exploration Adventure",
        description:
          "Dive deep into the ocean and discover the mysteries of the underwater world.",
        level: "Course 4",
      },
      {
        id: "10",
        img: "https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png",
        title: "1920s Mystery Detective Chronicles",
        description:
          "Solve crimes and uncover secrets in the glamourous 1920s era.",
        level: "Course 3",
      },
    ],
  }),

  methods: {
    load({ done }) {
      setTimeout(() => {
        this.items.push(...this.items);

        done("ok");
      }, 1000);
    },
  },
};
</script>

<style scoped lang="sass"></style>
