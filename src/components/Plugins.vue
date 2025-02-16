<script setup>
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/colored_pencils'.
const myImg = cld.image('docs/colored_pencils');

// Define plugins.
const plugins = [lazyload(), responsive(), accessibility(), placeholder()];

</script>

<template>
  <div class="App-body">
    <h3>
      Use all the plugins (lazyload, responsive, accessibility, placeholder), as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#plugins"
        target="_blank"
      >
        Plugins
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" />
  </div>
</template>
