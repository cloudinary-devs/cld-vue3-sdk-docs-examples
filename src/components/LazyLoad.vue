<script>
import { AdvancedImage, lazyload } from '@cloudinary/vue3';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'flowers'.
const myImg = cld.image('flowers');

export default {
  components: {
    AdvancedImage,
  },
  data() {
    return {
        plugins: [lazyload({rootMargin: '10px 20px 10px 30px', threshold: 0.25})],
        myImg,
    };
  },
};
</script>

<template>
  <div class="App-body">
    <h3>Use the lazyload plugin to delay loading the image until it reaches the
      viewport, as shown in<br><a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#lazy_loading" target="_blank">Lazy loading</a></h3>
    <AdvancedImage :width="759" :height="400" :cldImg="myImg" :plugins="plugins"/>
  </div>
</template>
