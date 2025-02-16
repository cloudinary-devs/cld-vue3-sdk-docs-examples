<script setup>
import { AdvancedVideo, lazyload } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';
import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from "@cloudinary/url-gen/qualifiers/videoCodec";

// Define sources array for multiple video formats
const sources = [
  {
    type: "mp4",
    codecs: ["avc1.4d002a"],
    transcode: videoCodec(auto())
  },
  {
    type: "webm",
    codecs: ["vp8", "vorbis"],
    transcode: videoCodec(vp9())
  }
];

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
  url: {
    analytics: false,
  }
});

// Instantiate Cloudinary video object
const myVideo = cld.video('dog');

// Define plugins (static, so no reactivity needed).
const plugins = [lazyload()];
</script>

<template>
  <div class="App-body">
    <h3>
      Use various properties, as shown in
      <br />
      <a
        class="App-link"
        href="https://cloudinary.com/documentation/vue_video_transformations#advancedvideo_properties"
        target="_blank"
      >
        AdvancedVideo properties
      </a>
    </h3>
    <AdvancedVideo 
      :cldVid="myVideo" 
      :plugins="plugins" 
      :sources="sources" 
      controls 
      playsInline 
      muted
    />
  </div>
</template>
