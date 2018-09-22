<template>
    <nav class="menu">
        <ul>
            <li v-for="(route, i) in routes" :key="i">
                <router-link class="menu-item" :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
            </li>

        </ul>
    </nav>
</template>
<script>
    export default {
        props: {
            routes: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>

.menu {
    position: absolute;
    top: 0;
    background: #333;
    height: 50px;
    width: 100%;

}
.menu li {
    display: inline;
    margin-right: 4em;
}

.menu .menu-item {
    text-transform: uppercase;
    color: white;
    letter-spacing: 0.1rem;
    font-size: 12px;
}
</style>
