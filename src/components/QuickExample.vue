<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions.
import { sepia } from "@cloudinary/url-gen/actions/effect";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'front_face'.
const myImg = cld.image('front_face');

// Apply the transformation.
myImg.effect(sepia()); // Apply a sepia effect.

</script>

<template>
  <div class="App-body">
    <h3>
      Apply a sepia effect, as shown in the
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_integration#quick_example"
        target="_blank"
      >
        Quick Example
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
