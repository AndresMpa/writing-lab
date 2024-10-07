<template>
  <v-container fluid>
    <v-row>
      <v-col
        class="my-auto"
        v-for="(item, index) in comments"
        :cols="getCols(item.content.length, index)"
        :key="`${index}_identifier`"
      >
        <v-card class="mx-auto scroll" max-height="210">
          <v-card-text> {{ item.content }} </v-card-text>
          <v-card-title>@{{ item.author.nickname }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getCols(commentLength, index) {
      let cols;
      let colsRemaining = 12;
      let currentRow = Math.floor(index / 3);

      if (commentLength > 500) {
        cols = 12;
      } else if (commentLength > 250) {
        cols = 8;
      } else if (commentLength > 200) {
        cols = 6;
      } else if (commentLength >= 120) {
        cols = 7;
      } else {
        cols = 4;
      }

      if (index === 0 || currentRow !== Math.floor((index - 1) / 3)) {
        cols = 12;
        colsRemaining = 0;
      } else {
        if (cols > colsRemaining) {
          cols = colsRemaining;
          colsRemaining = 0;
        } else {
          colsRemaining -= cols;
        }
      }

      if ((index + 1) % 3 === 0 || index === this.comments.length - 1) {
        if (colsRemaining > 0) {
          cols = colsRemaining;
        }
        colsRemaining = 12;
      }

      return cols;
    },
  },
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}
</style>
