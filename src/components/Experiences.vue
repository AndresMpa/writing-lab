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
  props: {
    items: {
      type: Array,
      required: true,
    },
    load: {
      type: Function,
      required: true,
    }
  },
  data: () => ({
    height: window.innerHeight - 65
  }),
};
</script>

<style scoped lang="sass"></style>
