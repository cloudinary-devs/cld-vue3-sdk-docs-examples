<script>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Use the image with public ID, 'pond_reflect'.
const myImg = cld.image('pond_reflect');

// Request automatic format and quality.
myImg
.format('auto')
.quality('auto');

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
    <h3>Apply automatic format and quality, as shown in<br><a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#image_optimizations" target="_blank">Image optimizations</a></h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>

