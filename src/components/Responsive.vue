<script setup>
import { AdvancedImage, responsive } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
const myImg = cld.image('sample');

// Define plugins with responsive steps.
const plugins = [responsive({ steps: [800, 1000, 1400] })];

</script>

<template>
  <div class="App-body">
    <h3>
      Use the responsive plugin to request the best size of image for the viewport, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#responsive_images"
        target="_blank"
      >
        Responsive images
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" />
  </div>
</template>
