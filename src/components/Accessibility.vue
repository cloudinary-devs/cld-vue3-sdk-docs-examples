<script>
import { AdvancedImage, accessibility } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/piechart'.
const myImg = cld.image('docs/piechart');

export default {
  components: {
    AdvancedImage,
  },
  data() {
    return {
        plugins: [accessibility({mode: 'colorblind'})],
        myImg,
    };
  },
};
</script>

<template>
  <div class="App-body">
    <h3>Use the accessibility plugin to help color blind viewers, as shown in<br>
        <a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#image_accessibility" target="_blank">Image accessibility</a></h3>
    <AdvancedImage :cldImg="myImg" :plugins="plugins"/>
  </div>
</template>
