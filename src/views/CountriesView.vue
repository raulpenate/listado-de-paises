<template>
  <div>
    <h1 class="text-center text-4xl pt-3">Listado de paises</h1>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
      class="bg-blue-500 my-5"
    />
    <table-country/>
  </div>
</template>

<script setup>

import useCountries from '../composables/useCountries'
import { ref } from 'vue'

const { getCountries, getCountry} = useCountries()

getCountries()

const value = ref('')

const onSearch = (searchValue) => {
  const value = searchValue.trim()
  getCountry(value)
}
</script>

<style lang="scss">
.picture {
  width: 50px;
  height: 30px;
}

.button-color{
  background-color: #17E7A4;
}
</style>
