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
      <template #item-show="{ name }">
        <a-button type="primary" @click="showModal(name)">Ver...</a-button>
        <a-modal
        title="Title"
        :open.sync="getModalVisibility(name)"
        @ok="handleOk(name)"
      >
        <p>{{ name }}</p>
      </a-modal>
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup>
import useCountries from '../composables/useCountries'
import { ref, reactive } from 'vue'

const { getCountries, countries, country } = useCountries()

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

const showModal = (name) => {
  modals[name] = true;
  console.log(name)
};

const getModalVisibility = (name) => {
  return modals[name] || false;
};

const handleOk = (name) => {
  modals[name] = false;
};
</script>

<style>
.picture {
  width: 50px;
  height: 30px;
}
</style>
