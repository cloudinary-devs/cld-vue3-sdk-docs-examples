<script>
import { AdvancedImage } from '@cloudinary/vue3';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Set the delivery type to 'fetch'
const myImg = cld.image('https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png').setDeliveryType('fetch');


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
    <h3>Use the fetch delivery type to deliver an image, as shown in<br><a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#specifying_the_delivery_type" target="_blank">Specifying the delivery type</a></h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>

