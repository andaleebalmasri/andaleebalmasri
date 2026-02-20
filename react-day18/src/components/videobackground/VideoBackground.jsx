import "./VideoBackground.css";
import videoBg from "../../assets/video/video.mp4";

function VideoBackground() {
  return (
    <video autoPlay loop muted playsInline className="video-bg">
      <source src={videoBg} type="video/mp4" />
    </video>
  );
}

export default VideoBackground;