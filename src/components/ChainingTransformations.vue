<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
const myImg = cld.image('sample');

// Transform the image.
myImg    
    .resize(fill(150, 150))
    .roundCorners(byRadius(20))
    .effect(sepia())
    .overlay(   
        source(
        text('This is my picture', new TextStyle('arial', 18))
        .textColor('white')      
        )
        .position(new Position().gravity(compass('north')).offsetY(20))
    )
    .rotate(byAngle(20))
    .format('png');

</script>

<template>
  <div class="App-body">
    <h3>
      Chain several transformations together, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_image_transformations#chaining_transformations"
        target="_blank"
      >
        Chaining transformations
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
