<template>
  <div class="corpo headerwrap">
    <h1 class="headerwrap centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos centralizado">
      <li class="lista-fotos-item" v-for="foto of fotos" v-bind:key="foto.id">
        <div class="painel">
          <h3 class="headerwrap painel-titulo">{{foto.titulo}}</h3>
          <div class="painel-corpo">

            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">

          </div><!-- fim painel-corpo -->
        </div><!-- fim painel -->
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
    /* background-attachment: relative;
    background-position: center center; */
    /* min-height: 700px;
    width: 100%; */
    /* -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
  }

  .headerwrap h1 {
    /* margin-top: 150px; */
    /* color: white; */
    font-size: 70px;
    font-weight: 700;
  }

  .headerwrap h3 {
    color: white;
    /* font-size: 30px; */
    font-weight: 100;
    /* font-family: 'EB Garamond', serif; */
    /* font-style: oblique; */
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
    /* width: 350px;
    height: 350px; */
  }

  .imagem-responsiva {
    width: 100%;
    height: 100%;
  }

  .painel {
    padding: 0 auto;
    border: solid 3px #333;
    display: inline-block;
    /* margin: 0.1px; */
    /* box-shadow: 5px 5px 10px grey; */
    /* width: 350px; */
    /* height: 350px; */

    vertical-align: top;
    text-align: center;
  }

  .painel .painel-corpo {
    width: 350px;
    height: 350px;
  }
  .painel .painel-titulo {
    text-align: center;
    border: solid 0.5px #333;
    background: #333;
    margin: 0 0 0 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>
