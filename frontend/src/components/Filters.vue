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
    <div class="flex flex-col">
      <!-- TODO Find a way to scroll through all the filter without hardcoding the divs -->
      <div class="m-2 p-1 flex flex-row justify-between">
        <h3 class="text-2xl self-center">Size</h3>
        <div class="grid grid-cols-3 grid-rows-2">
          <button class="p-2 bg-red-200 rounded-2xl m-1">Extra-small</button>
          <button class="p-2 bg-red-200 rounded-2xl m-1">Small</button>
          <button class="p-2 bg-red-200 rounded-2xl m-1">Medium</button>
          <button class="p-2 bg-red-200 rounded-2xl m-1">Large</button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <h2 class="p-2">Apply Filters</h2>
      </div>
    </div>
  </div>
</template>
