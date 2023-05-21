<template>
  <div>
    <h1>Listado de paises</h1>
    <br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <br />
    <EasyDataTable :headers="headers" :items="countries" :rows-per-page="10" show-index>
      <template #item-picture="{ picture }">
        <img class="picture" :src="picture" alt="flag" />
      </template>
      <template #item-name="{ name, capital }">
        {{ name }}, {{ capital }}
      </template>
      <template #item-show="{ searchName }">
        <a-button type="primary" @click="showModal(searchName)">Ver...</a-button>
        <a-modal
        title="Title"
        :open.sync="getModalVisibility(searchName)"
        @ok="handleOk(searchName)"
      >
        <p>{{ country }}</p>
      </a-modal>
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup>
import useCountries from '../composables/useCountries'
import { ref, reactive } from 'vue'

const { getCountries, getCountry ,countries, country } = useCountries()

getCountries()

const value = ref('')

const onSearch = (searchValue) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}

const headers = ref([
  { text: 'Bandera', value: 'picture' },
  { text: 'Nombre', value: 'name', sortable: true },
  { text: 'Poblacion', value: 'population', sortable: true },
  { text: '', value: 'show', sortable: true }
])

const modals = reactive({});

const showModal = (searchName) => {
  modals[searchName] = true;
  getCountry(searchName)
};

const getModalVisibility = (searchName) => {
  return modals[searchName] || false;
};

const handleOk = (searchName) => {
  modals[searchName] = false;
};
</script>

<style>
.picture {
  width: 50px;
  height: 30px;
}
</style>
