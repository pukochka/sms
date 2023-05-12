<template>
  <q-dialog
    v-model="states.loadings.init"
    maximized
    transition-duration="100"
    transition-show="no"
    transition-hide="fade">
    <q-card class="flex flex-center">
      <q-spinner color="primary" size="4em" />
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useStatesStore } from 'stores/states/statesStore';

const states = useStatesStore();
</script>

<style lang="scss" scoped></style>
