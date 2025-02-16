<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Use the image with public ID, 'basketball_in_net'.
const myImg = cld.image('basketball_in_net');

// Apply the transformation.
myImg.resize(fill().width(200).height(300).gravity(autoGravity()));

</script>

<template>
  <div class="App-body">
    <h3>
      Crop an image to keep the most interesting part, as shown in
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
