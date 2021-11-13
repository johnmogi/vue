<template>
  <div class="App container">
  <layout></layout>
    <router-view/>
  </div>
</template>

<script>
import Layout from './layout/Layout.vue';

export default {
    components: {

        'layout': Layout
    }
}
</script>