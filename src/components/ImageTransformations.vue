<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'front_face'.
const myImg = cld.image('front_face');

// Apply the transformation.
myImg
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))) // Crop the image, focusing on the face.
  .roundCorners(byRadius(20)); // Round the corners.

</script>

<template>
  <div class="App-body">
    <h3>
      Apply a thumbnail crop with rounded corners, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#image_transformations_with_vue_js"
        target="_blank"
      >
        Image transformations with Vue.js
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
