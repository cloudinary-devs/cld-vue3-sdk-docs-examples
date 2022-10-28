<script>
import { AdvancedImage } from '@cloudinary/vue3';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {outline, cartoonify} from "@cloudinary/url-gen/actions/effect";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {outer} from "@cloudinary/url-gen/qualifiers/outlineMode";


const myImage = new CloudinaryImage("actor", {cloudName: "demo"});

// Apply the transformation.
myImage
.effect(cartoonify())
.roundCorners(max())
.effect(outline().mode(outer()).width(100).color("lightblue"))
.backgroundColor("lightblue")
.resize(scale().height(300));

export default {
  components: {
    AdvancedImage,
  },
  data() {
    return {
        myImage,
    };
  },
};
</script>

<template>
  <div class="App-body">
    <h3>Apply various transformations, as shown in<br><a class="App-link" href="https://cloudinary.com/documentation/vue_image_transformations#applying_image_effects_and_filters" target="_blank">Applying image effects and filters</a></h3>
    <AdvancedImage :cldImg="myImage" />
  </div>
</template>

