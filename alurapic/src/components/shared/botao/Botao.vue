<template>
    <button  @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">
        <font-awesome-icon class="botao-icone" :icon="icone"/><p class="botao-texto">{{ rotulo }}</p>
    </button>
</template>

<script>
export default {

    props: ['tipo', 'rotulo', 'icone', 'confirmacao', 'estilo'],

    methods: {
        disparaAcao() {
            if(this.confirmacao) {
                if(confirm('confirma a operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloDoBotao() {

            if (this.estilo === 'padrao' || !this.estilo) {
                return 'botao-padrao';
            }
            if (this.estilo === 'perigo') {
                return 'botao-perigo';
            }
        }
    }
}
</script>

<style scoped>
    .botao {
        /* position: relative; */
        /* display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 2px; */
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;

    }

    .botao-perigo {
        color: #fff;
        background-color: #f09b24;
        border-color: #eea236;
    }

    .botao-padrao {
        color: #fff;
        background-color: #008b8b;
        border-color: #118f8f
    }

    .botao-icone {
        font-size: 0.8em;
    }

    .botao-texto {
        display: inline;
        /* line-height: 2px; */
        /* font-size: 0.8em; */
        /* font-weight: 700; */
        /* font-family: 'Oswald', sans-serif; */
        text-transform: uppercase;
        margin-left: 4px;
    }


</style>
