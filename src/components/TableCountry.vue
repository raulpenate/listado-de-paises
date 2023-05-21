<template>
  <EasyDataTable :headers="headers" :items="countries" :rows-per-page="10" show-index>
    <template #item-picture="{ picture }">
      <img class="picture" :src="picture" alt="flag" />
    </template>
    <template #item-name="{ name, capital }"> {{ name }}, {{ capital }} </template>
    <template #item-show="{ searchName }">
      <a-button class="bg-blue-500" type="primary" @click="showModal(searchName)">Ver...</a-button>
      <a-modal
        :title="country.name"
        :open.sync="getModalVisibility(searchName)"
        @cancel="handleExit(searchName)"
        ok-text="Cerrar"
        cancel-text=""
        width="800px"
        footer=""
        :closable="true"
        :afterClose="cleanCountry"
      >
        <div class="grid grid-cols-2 gap-1">
          <div>
            <img :src="country.picture" alt="" srcset="" />
          </div>

          <div>
            <div>
              <h3 class="text-2xl font-extrabold">Datos:</h3>
            </div>
            <div><b>Codigo numerico:</b> {{ country.cca2 }}</div>
            <div><b>Poblacion:</b> {{ country.population }}</div>
            <div><b>Codigo alpha2:</b> {{ country.ccn3 }}</div>
          </div>

          <div class="col-span-12 mt-10 grid grid-cols-5 gap-1">
            <div class="bg-blue-500 m-1 py-2 px-2 text-white font-bold border-blue-700">
              {{ country.ara && country.ara.common }}
            </div>
            <div class="bg-blue-500 m-1 py-2 px-2 text-white font-bold border-blue-700">
              {{ country.ara && country.jpn.common }}
            </div>
            <div class="bg-blue-500 m-1 py-2 px-2 text-white font-bold border-blue-700">
              {{ country.kor && country.kor.common }}
            </div>
            <div class="bg-blue-500 m-1 py-2 px-2 text-white font-bold border-blue-700">
              {{ country.por && country.por.common }}
            </div>
            <div class="bg-blue-500 m-1 py-2 px-2 text-white font-bold border-blue-700">
              {{ country.ita && country.ita.common }}
            </div>
          </div>
        </div>
      </a-modal>
    </template>
  </EasyDataTable>
</template>
<script setup>
import useCountries from '../composables/useCountries'
import { ref, reactive } from 'vue'

const { getCountries, getCountry, cleanCountry,  countries, country, openModal, closeModal } = useCountries()

getCountries()

const headers = ref([
  { text: 'Bandera', value: 'picture' },
  { text: 'Nombre', value: 'name', sortable: true },
  { text: 'Poblacion', value: 'population', sortable: true },
  { text: '', value: 'show', sortable: true }
])

const modals = reactive({})

const showModal = (searchName) => {
  modals[searchName] = true
  getCountry(searchName)
}

const getModalVisibility = (searchName) => {
  return modals[searchName] || false
}

const handleExit = (searchName) => {
  modals[searchName] = false
}
</script>

<style lang="scss">
.picture {
  width: 50px;
  height: 30px;
}

.button-color {
  background-color: #17e7a4;
}
</style>