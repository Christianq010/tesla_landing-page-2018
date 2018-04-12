<template>
    <div class="fullscreen-bg">
        <video loop muted autoplay poster="https://uploads-ssl.webflow.com/5acdc6ba61c67d68dd5c8d54/5acdd2d2c6f3e720339a0952_The Greatest Drive-poster-00001.jpg" class="fullscreen-bg__video">
            <source src="https://uploads-ssl.webflow.com/5acdc6ba61c67d68dd5c8d54/5acdd2d2c6f3e720339a0952_The Greatest Drive-transcode.webm" type="video/webm">
            <source src="https://uploads-ssl.webflow.com/5acdc6ba61c67d68dd5c8d54/5acdd2d2c6f3e720339a0952_The Greatest Drive-transcode.mp4" type="video/mp4">
            <!-- <source src="./../assets/Autopilot.mp4" type="video/mp4"> -->
        </video>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
    background: url('https://uploads-ssl.webflow.com/5acdc6ba61c67d68dd5c8d54/5acdd2d2c6f3e720339a0952_The Greatest Drive-poster-00001.jpg') center center / cover no-repeat;
  }

  .fullscreen-bg__video {
    display: none;
  }
}
</style>