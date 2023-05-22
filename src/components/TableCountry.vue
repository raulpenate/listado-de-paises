<template>
  <EasyDataTable :headers="headers" :items="countries" :rows-per-page="10" class="md:w-1/2 w-full rounded" show-index>
    <template #item-picture="{ picture }">
      <img class="picture" :src="picture" alt="flag" />
    </template>
    <template #item-name="{ name, capital }">
      {{ name }}, {{ capital }}
    </template>
    <template #item-show="{ searchName }">
      <a-button class="bg-blue-500" type="primary" @click="showModal(searchName)"><i class="fa fa-solid fa-eye"></i></a-button>
      <a-modal
        :title="country.name"
        :open.sync="getModalVisibility(searchName, display)"
        @cancel="handleExit(searchName)"
        ok-text="Cerrar"
        cancel-text=""
        width="800px"
        footer=""
        :closable="true"
        :afterClose="cleanCountry"
      >
        <div class="grid md:grid-cols-2 gap-2">
          <div class="order-2 md:order-none">
            <img :src="country.picture" alt="" srcset="" class="w-full shadow-2xl" />
          </div>

          <div class="order-1 md:order-none">
            <div>
              <h3 class="text-1xl md:text-2xl font-extrabold text-center"><i class="fa fa-solid fa-circle-info"></i> Datos:</h3>
            </div>
            <div class="text-center"><b>Codigo numerico:</b> {{ country.cca2 }}</div>
            <div class="text-center"><b>Poblacion:</b> {{ country.population }}</div>
            <div class="text-center"><b>Codigo alpha2:</b> {{ country.ccn3 }}</div>
          </div>

          <div class="row-span-2 col-span-2 order-last md:order-none">
            <div class="grid grid-cols-2 md:grid-cols-5 md:gap-1">
              <div class="bg-blue-500 m-2 py-2 px-2 text-white font-bold border-blue-700">
                {{ country.ara && country.ara.common }}
              </div>
              <div class="bg-blue-500 m-2 py-2 px-2 text-white font-bold border-blue-700">
                {{ country.ara && country.jpn.common }}
              </div>
              <div class="bg-blue-500 m-2 py-2 px-2 text-white font-bold border-blue-700">
                {{ country.kor && country.kor.common }}
              </div>
              <div class="bg-blue-500 m-2 py-2 px-2 text-white font-bold border-blue-700">
                {{ country.por && country.por.common }}
              </div>
              <div class="bg-blue-500 m-2 py-2 px-2 text-white font-bold border-blue-700">
                {{ country.ita && country.ita.common }}
              </div>
            </div>
          </div>
        </div>
      </a-modal>
    </template>
  </EasyDataTable>
</template>

<script setup>
import useCountries from '../composables/useCountries'
import { ref  } from 'vue'

const {
  getCountries,
  getCountry,
  cleanCountry,
  countries,
  country,
  openModal,
  closeModal,
  displayModal
} = useCountries()

getCountries()

const display = ref(false)

const headers = ref([
  { text: 'Bandera', value: 'picture' },
  { text: 'Nombre', value: 'name', sortable: true },
  { text: 'Poblacion', value: 'population', sortable: true },
  { text: '', value: 'show', sortable: true }
])

const showModal = (searchName) => {
  getCountry(searchName)
  openModal(searchName)
}

const getModalVisibility = (searchName, display) => {
  console.log(display.value)
  return displayModal(searchName) || display.value
}

const handleExit = (searchName) => {
  closeModal(searchName)
}
</script>

<style lang="scss">
.picture {
  width: 50px;
  height: 30px;
}

@media screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}
</style>