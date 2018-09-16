<template>
    <div class="painel">
        <h3 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h3>
        <transition name="painel-fade">
          <div class="painel-corpo" v-show="visivel">
              <slot></slot>
          </div><!-- fim painel-corpo -->
        </transition>
    </div><!-- fim painel -->
</template>

<script>
export default {

    props: ['titulo'],

    data() {

      return {
        visivel: true
      }
    }
}
</script>

<style scoped>
  .painel {
    padding: 0 auto;
    border: solid 3px #333;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 350px;
    height: auto;
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

  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity 300ms;
  }

</style>
