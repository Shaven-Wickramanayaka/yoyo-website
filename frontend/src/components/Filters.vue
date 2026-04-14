<script setup>
import { ref } from "vue";

const filterEnabled = ref(false);
const filterToggle = () => {
  filterEnabled.value = !filterEnabled.value;
  console.log(filterEnabled.value);
};
</script>
<template>
  <section class="flex bg-amber-300">
    <button class="text-2xl" @click="filterToggle">
      Filters
      <i class="mdi mdi-home" aria-hidden="true"></i>
    </button>
  </section>
  <div
    class="h-full w-sm md:w-xl fixed top-0 left-0 bg-blue-100"
    v-if="filterEnabled"
  >
    <div class="flex flex-row justify-between m-2 p-1 text-2xl">
      <h2>Filters</h2>
      <button @click="filterToggle">
        <i class="mdi mdi-close" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
