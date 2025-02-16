<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from "@cloudinary/url-gen";
import { CloudConfig } from "@cloudinary/url-gen";

// Set the Cloud configuration and URL configuration
const cloudConfig = new CloudConfig({ cloudName: 'demo' });
const urlConfig = new URLConfig({ secure: true });

// Instantiate and configure a CloudinaryImage object.
const myImg = new CloudinaryImage('docs/shoes', cloudConfig, urlConfig);

</script>

<template>
  <div class="App-body">
    <h3>
      Specify the Cloudinary configuration when instantiating an asset, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_integration#asset_instance_configuration"
        target="_blank"
      >
        Asset instance configuration
      </a>
    </h3>
    <AdvancedImage :cldImg="myImg" />
  </div>
</template>
