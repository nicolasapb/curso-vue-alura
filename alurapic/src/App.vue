<template>
  <div class="headerwrap corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos centralizado">
      <li class="lista-fotos-item" v-for="foto of fotos" v-bind:key="foto.id">

        <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {

  components: {
    'meu-painel': Painel
  },

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

  body {
    background-color: #f2f2f2;
    font-family: 'EB Garamond', serif;
    font-weight: 300;
    font-size: 16px;
    color: #555;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    color: #333;
  }

.headerwrap {
    margin-top: -10px;
    padding-top: 20px;
    text-align: center;
  }

  .headerwrap h1 {
    font-size: 70px;
    font-weight: 700;
  }

  .headerwrap h3 {
    color: white;
    font-weight: 100;
  }

  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    margin: 2px;
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
    height: 100%;
  }

</style>
