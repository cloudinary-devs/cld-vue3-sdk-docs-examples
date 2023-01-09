<script>
import { AdvancedVideo } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import the scale mode from the resize action.
import {scale} from "@cloudinary/url-gen/actions/resize";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
  url: {
      analytics: false,
    }
});

// Use the video with public ID, 'elephants'.
const myVideo = cld.video('elephants');

// Scale the video to a width of 400 pixels.
myVideo.resize(scale().width(400));


export default {
  components: {
    AdvancedVideo,
  },
  data() {
    return {
      myVideo,
    };
  },
};
</script>

<template>
  <div class="App-body">
    <h3>Resize a video to a width of 400 pixels, as shown in <br><a class="App-link" href="https://cloudinary.com/documentation/vue_video_transformations#transforming_your_video" target="_blank">Transforming your video</a></h3>
    <AdvancedVideo :cldVid="myVideo" controls autoPlay loop muted/>
  </div>
</template>