<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';
import { Adjust } from "@cloudinary/url-gen/actions";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
const myImg = cld.image('sample');

// Apply the transformation (replace the most prominent color with light blue).
myImg.adjust(Adjust.replaceColor('lightblue').tolerance(17));

</script>

<template>
  <div class="App-body">
    <h3>
      Replace the most prominent color with light blue, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#syntax_overview"
        target="_blank"
      >
        Syntax overview
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
