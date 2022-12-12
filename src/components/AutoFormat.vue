<script>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Use the image with public ID, 'docs/shoes'.
const myImg = cld.image('docs/shoes');

// Request automatic format.
myImg.format('auto');

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
    <h3>Use auto format to deliver a file in the best format for the end device, as shown in<br><a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#converting_format_example2" target="_blank">Converting to another image format</a></h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>

