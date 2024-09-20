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
  data: () => ({
    colsRemaining: 12,
    currentRow: 0,
  }),
  methods: {
    getCols(commentLength, index) {
      let cols;

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

      if (index === 0 || this.currentRow !== Math.floor(index / 3)) {
        cols = 12;
        this.colsRemaining = 0;
        this.currentRow = Math.floor(index / 3);
      } else {
        if (cols > this.colsRemaining) {
          cols = this.colsRemaining;
          this.colsRemaining = 0;
        } else {
          this.colsRemaining -= cols;
        }
      }

      if ((index + 1) % 3 === 0 || index === this.comments.length - 1) {
        if (this.colsRemaining > 0) {
          cols = this.colsRemaining;
          this.colsRemaining = 12;
        } else {
          this.colsRemaining = 12;
        }
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
