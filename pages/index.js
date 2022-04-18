import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
// import "../node_modules/mux.js/dist/mux.js";

const TutorialContainer = dynamic(import("../containers/Tutorial"), {
  ssr: false,
});

class Tutorial extends React.PureComponent {
  render() {
    const licenseServer = "https://widevine-proxy.appspot.com/proxy";
    // const mpdFile =
    //   "https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd";
    const m3u8File =
      "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8";
    const videoThumbnail =
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png";

    return (
      <>
        <Head>
          <script src="https://github.com/videojs/mux.js/releases/latest/download/mux.js"></script>
        </Head>
        <TutorialContainer
          licenseServer={licenseServer}
          manifestUrl={m3u8File}
          posterUrl={videoThumbnail}
        />
      </>
    );
  }
}

export default Tutorial;
