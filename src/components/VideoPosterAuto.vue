<script>
import { AdvancedVideo } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import {fill} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {Gravity} from "@cloudinary/url-gen/qualifiers";
import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";



// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
  url: {
      analytics: false,
    }
});

// Use the video with public ID, 'docs/walking_talking'.
const myVideo = cld.video('docs/walking_talking');

// Apply the transformation.
myVideo.resize(fill().width(150).height(150)
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(20));    // Round the corners.


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
    <h3>Set the cldPoster property to auto, as shown in  <br><a class="App-link" href="https://cloudinary.com/documentation/vue_video_transformations#the_cldposter_property" target="_blank">The cldPoster property</a></h3>
    <AdvancedVideo :cldVid="myVideo" cldPoster="auto" controls muted/>
  </div>
</template>