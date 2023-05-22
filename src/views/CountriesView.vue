<template>
  <div class="grid grid-cols-1 content-center items-center justify-items-center">
    <h1 class="text-center text-3xl md:text-5xl pt-3 text-white font-black m-2 subpixel-antialiased">🇸🇻 Lista Paises 🇸🇻</h1>
    <a-input-search
      v-model:value="value"
      placeholder="Buscar un pais..."
      enter-button
      @search="onSearch"
      class="bg-blue-500 my-5 md:w-1/2 w-4/5 p-1 rounded-lg"
    />
    <table-country :display="display" />
  </div>
</template>

<script setup>
import useCountries from '../composables/useCountries'
import { ref } from 'vue'

const { getCountries, getCountry, openModal, displayModal } = useCountries()

getCountries()

const value = ref('')
const display = ref(false)

const onSearch = (searchValue) => {
  const country = searchValue.trim()
  getCountry(country)
  openModal(country)
  console.log(display(country))
  display.value = displayModal(country)

  value.value =''
}
</script>