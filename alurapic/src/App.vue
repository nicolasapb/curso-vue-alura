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
      fotos: [
        {
          id: '1',
          url: 'https://picsum.photos/g/450/450/?image=76',
          titulo: 'bicicleta'
        },
        {
          id: '2',
          url: 'https://picsum.photos/g/450/450/?image=83',
          titulo: 'bosque'
        }
      ]
    }
  }
}
</script>

<style>

</style>
