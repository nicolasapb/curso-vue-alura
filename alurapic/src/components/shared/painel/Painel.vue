<template>
    <div class="painel">
        <h3 class="painel-titulo">{{foto.titulo}}</h3>
        <div class="painel-corpo">
        </div><!-- fim painel-corpo -->
    </div><!-- fim painel -->
</template>

<script>
export default {

}
</script>

<style>
  .painel {
    padding: 0 auto;
    border: solid 3px #333;
    display: inline-block;
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
