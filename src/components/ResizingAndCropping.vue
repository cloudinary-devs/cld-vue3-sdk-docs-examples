<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Use the image with public ID, 'family_bench'.
const myImg = cld.image('family_bench');

// Apply the transformation (crop while focusing on faces).
myImg.resize(fill().width(250).height(250).gravity(focusOn(FocusOn.faces())));

</script>

<template>
  <div class="App-body">
    <h3>
      Crop an image to keep the faces, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#resizing_and_cropping"
        target="_blank"
      >
        Resizing and cropping
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
