<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos" v-bind:key="foto.id">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },

  created() {
    alert('criei o bixo');
  }
}
</script>

<style>

</style>
