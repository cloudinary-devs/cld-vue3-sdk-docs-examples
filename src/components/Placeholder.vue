<script setup>
import { AdvancedImage, placeholder } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/grizzly'.
const myImg = cld.image('docs/grizzly');

// Define plugins.
const plugins = [placeholder({ mode: 'blur' })];

</script>

<template>
  <div class="App-body">
    <h3>
      Use the placeholder plugin to show a blurred image while the image loads, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#image_placeholders"
        target="_blank"
      >
        Image placeholders
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" />
  </div>
</template>
