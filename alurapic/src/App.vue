<template>
  <div class="corpo">
    <meu-menu :routes="routes"></meu-menu>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },

  data() {
    return {
      routes
    }
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

  a {
    text-decoration: none;
  }

  .headerwrap {
    margin-top: 30px;
    padding-top: 20px;
    text-align: center;
  }

  .headerwrap h1 {
    font-size: 70px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.25rem;
  }

  .headerwrap h2 {
    margin-top: -30px;
    font-size: 40px;
    letter-spacing: -0.15rem;
    text-transform: lowercase;
  }

  .headerwrap h3 {
    color: white;
    font-weight: 100;
  }

  .centralizado {
    text-align: center;
  }

  .corpo {
    /* font-family: Helvetica, sans-serif; */
    /* margin: 0 auto;
    width: 96%; */
  }

  .pagina-enter, .pagina-leave-active{
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active{
    /* transition: opacity 300ms ease-in; */
    transition: opacity 300ms;
  }
</style>
