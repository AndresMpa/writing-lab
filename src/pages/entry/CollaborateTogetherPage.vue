<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <EntryViewLeave title="Continue working" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex">
          <EntryStageTracker />

          <CollaborateProgress progress="2" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.card-line {
  flex-direction: column;
  align-items: flex-start;
}
</style>
