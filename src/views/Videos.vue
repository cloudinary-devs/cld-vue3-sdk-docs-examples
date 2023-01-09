<script setup>
import VideoTransformations from '../components/VideoTransformations.vue';
import AdvancedVideoProperties from '../components/AdvancedVideoProperties.vue';
import TransformingYourVideo from '../components/TransformingYourVideo.vue';
import VideoExample1 from '../components/VideoExample1.vue';
import VideoExample2 from '../components/VideoExample2.vue';
</script>

<template>
  <div class="App-body">
  <h1>Video Transformations</h1>
  </div>
  <VideoTransformations />
  <AdvancedVideoProperties />
  <TransformingYourVideo />
  <VideoExample1 />
  <VideoExample2 />
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
