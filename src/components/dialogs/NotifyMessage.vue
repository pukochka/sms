<template>
  <q-dialog v-model="state.notifyValue.state" full-width>
    <q-card class="rounded-10">
      <q-card-section>
        <div class="text-h6">{{ main.language.errors.titles.notify }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ state.notifyValue.message }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          class="rounded-10"
          flat
          size="md"
          label="OK"
          color="primary"
          v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useStatesStore } from 'stores/states/statesStore';
import { useMainStore } from 'stores/main/mainStore';

const state = useStatesStore();
const main = useMainStore();
</script>

<style lang="scss" scoped></style>
