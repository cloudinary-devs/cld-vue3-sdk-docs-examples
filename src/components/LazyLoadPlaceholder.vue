<script setup>
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'brown_sheep'.
const myImg = cld.image('brown_sheep');

// Define plugins.
const plugins = [lazyload(), placeholder({ mode: 'predominant-color' })];

</script>

<template>
  <div class="App-body">
    <h3>
      Combine the lazyload and placeholder plugins, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#example_2_combine_lazy_loading_with_a_placeholder"
        target="_blank"
      >
        Lazy load and placeholder
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" />
  </div>
</template>
