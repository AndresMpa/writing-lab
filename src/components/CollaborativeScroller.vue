<template>
  <v-infinite-scroll :items="items" :height="height" :onLoad="load">
    <v-container fluid>
      <v-row>
        <template v-for="(item, index) in items" :key="index">
          <v-col cols="6" class="my-auto">
            <CollaborativeIteratorItem
              :title="item.title"
              :level="item.level"
              :img="item.image"
              :id="item.postId"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>

    <template v-slot:empty>
      <v-alert type="warning"  v-if="items.length <= 0">
        There are no experiences to show, come back later
      </v-alert>
    </template>
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
