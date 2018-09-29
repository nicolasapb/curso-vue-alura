<template>
  <div>
    <div class="headerwrap">
        <h1>{{ titulo }}</h1>
        <h2>{{ subTitulo }}</h2>
        <div class="search-box">
        <font-awesome-icon icon="search" />
        <input
            type="search"
            @input="filtro = $event.target.value"
            :placeholder="searchText"
            class="filtro">
        </div>
    </div>

    <ul class="lista-fotos centralizado">
      <li
        class="lista-fotos-item"
        v-for="foto of fotosComFiltro"
        :key="foto.id">
       <div>

        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
            <meu-botao
              tipo="button"
              rotulo="remove"
              icone="times"
              :confirmacao="true"
              estilo="perigo"
              @botaoAtivado="remove(foto)"/>
        </meu-painel>
       </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue'

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      titulo: 'Alurapic',
      subTitulo: 'your timeline',
      searchText: 'look for...',
      fotos: [],
      filtro: ''
    }
  },

  computed: {

    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
      alert(foto.titulo);
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

<style scoped>
  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    margin: 2px;
    display: inline-block;
  }

  .filtro {
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
    letter-spacing: 0.1rem;
    width: 400px;
  }
</style>
