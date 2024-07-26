<template>
  <v-infinite-scroll
    :items="items"
    :height="height"
    :onLoad="load"
  >
    <v-container fluid>
      <v-row>
        <template v-for="(item, index) in items" :key="index">
          <v-col cols="6" class="my-auto">
            <CollaborativeIteratorItem
              :title="item.title"
              :level="item.level.name"
              :img="item.img"
              :id="item.id"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-infinite-scroll>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    load: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    height: window.innerHeight - 65,
  }),
};
</script>

<style scoped lang="sass"></style>
