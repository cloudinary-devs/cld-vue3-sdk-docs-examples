<script setup>
import QuickStart from './components/QuickStart.vue';
import FullExample from './components/FullExample.vue';
import AssetInstance from './components/AssetInstance.vue';
</script>

<template>
  <div class="App-body">
  <h1>Image Transformations</h1>
  </div>
  <QuickStart />
  <FullExample />
  <AssetInstance />
</template>

<style>
.App-body {
  text-align: center;
  font-size: calc(8px + 2vmin);
  color: black;
}

.App-link {
  color: #FF5050;
}

a:hover {
  color: #FF5050;
  text-decoration: underline;
}

img {
	max-width: 50%;
}

video {
	max-width: 50%;
}
</style>
