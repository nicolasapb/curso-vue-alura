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
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .then(fotos => this.fotos = fotos, err => console.log(err))
    .catch(console.log);
  }
}
</script>

<style>

</style>
