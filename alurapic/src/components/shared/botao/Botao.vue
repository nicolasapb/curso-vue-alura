<template>
    <button class="botao botao-perigo" :type="tipo">
        <font-awesome-icon class="botao-icone" :icon="icone"/><p class="botao-texto">{{ rotulo }}</p>
    </button>
</template>

<script>
export default {

    props: ['tipo', 'rotulo', 'icone']
}
</script>

<style scoped>
    .botao {
        /* position: relative; */
        /* display: inline-block; */
        padding: 10px;
        border-radius: 3px;
        margin: 2px;
        border-color: #333;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-icone {
        font-size: 0.8em;
    }

    .botao-texto {
        display: inline;
        /* line-height: 2px; */
        font-size: 0.8em;
        font-weight: 700;
        font-family: 'Oswald', sans-serif;
        text-transform: lowercase;
        margin-left: 4px;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>
