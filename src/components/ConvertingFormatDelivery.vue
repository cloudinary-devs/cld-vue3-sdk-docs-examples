<script>
import { AdvancedImage } from '@cloudinary/vue3';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Use the image with public ID, 'docs/shoes'.
const myImg = cld.image('docs/shoes');

// Set the format to GIF.
myImg.format('gif');

export default {
  components: {
    AdvancedImage,
  },
  data() {
    return {
      myImg,
    };
  },
};
</script>

<template>
  <div class="App-body">
    <h3>"Deliver a .jpg file in .gif format by setting the delivery format, as shown in<br><a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#converting_format_example1b" target="_blank">Converting to another image format</a></h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>

