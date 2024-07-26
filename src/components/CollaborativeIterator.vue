<template>
  <v-card variant="text" flat>
    <v-data-iterator
      :items-per-page="itemsPerPage"
      :loading="loading"
      :search="search"
      :items="post"
    >
      <template v-slot:header>
        <v-toolbar class="px-2" flat>
          <v-text-field
            density="compact"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            v-model="search"
            hide-details
            clearable
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:loader>
        <v-container class="pa-1" fluid>
          <v-row dense no-gutters>
            <v-col
              v-for="(_, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
              :md="columnsPerPost"
              :key="index"
              cols="auto"
            >
              <v-skeleton-loader
                class="border ma-1"
                type="image, article"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
              v-for="(item, key) in items"
              :key="`${item.title}-${key}`"
              :md="columnsPerPost"
              cols="auto"
            >
              <CollaborativeIteratorItem
                :id="item.raw.id"
                :title="item.raw.title"
                :level="item.raw.level.name"
                :img="noImg ? '' : item.raw.img"
                :description="noDescription ? '' : item.raw.description"
                :date="useDate ? item.raw.date : ''"
              />
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pt-2">
          <v-btn
            @click="prevPage"
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            @click="nextPage"
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
export default {
  props: {
    noImg: {
      type: Boolean,
      default: false,
    },
    useDate: {
      type: Boolean,
      default: false,
    },
    noDescription: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 5
    },
    rowsPerPost: {
      type: Number,
      default: 2,
    },
    columnsPerPost: {
      type: Number,
      default: 3,
    },
    post: {
      type: [Array],
    },
  },
  data: () => ({
    search: "",
  }),
};
</script>
