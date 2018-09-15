<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      foto: {
        url: 'https://picsum.photos/g/450/450/?image=76',
        titulo: 'bicicleta'
      }
    }
  }
}
</script>

<style>

</style>
