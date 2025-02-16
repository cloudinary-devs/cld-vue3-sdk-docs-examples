<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import the scale mode from the resize action.
import { scale } from "@cloudinary/url-gen/actions/resize";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'bike'.
const myImg = cld.image('bike');

// Scale the image to a width of 400 pixels.
myImg.resize(scale().width(400));

</script>

<template>
  <div class="App-body">
    <h3>
      Scale an image to a width of 400 pixels, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#transforming_your_image"
        target="_blank"
      >
        Transforming your image
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
