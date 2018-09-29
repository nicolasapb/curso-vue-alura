<template>
    <button  @click="disparaAcao()" class="botao botao-perigo" :type="tipo">
        <font-awesome-icon class="botao-icone" :icon="icone"/><p class="botao-texto">{{ rotulo }}</p>
    </button>
</template>

<script>
export default {

    props: ['tipo', 'rotulo', 'icone'],

    methods: {
        disparaAcao() {
            if(confirm('confirma a operação?')) {
                this.$emit('botaoAtivado');
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

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>
