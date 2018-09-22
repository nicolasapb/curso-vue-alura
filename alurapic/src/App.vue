<template>
  <div class="corpo">
    <nav>
      <ul>
          <li v-for="(route, i) in routes" :key="i">
            <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
          </li>

      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import { routes } from './routes';

export default {

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

  .headerwrap {
    margin-top: -10px;
    padding-top: 20px;
    text-align: center;
  }

  .headerwrap h1 {
    font-size: 70px;
    font-weight: 700;
  }

  .headerwrap h2 {
    font-size: 50px;
    font-weight: 500;
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
    margin: 0 auto;
    width: 96%;
  }
</style>
