import ActivityIcon from "@assets/activity.svg";
import ProfileIcon from "@assets/profile.svg";
import PlayIcon from "@assets/play.svg";
import CameraIcon from "@assets/camera.svg";

export function getCategoryIcon(type: string) {
  switch (type) {
    case "business":
      return ActivityIcon;
    case "personal":
      return ProfileIcon;
    case "music":
      return PlayIcon;
    case "photography":
      return CameraIcon;
  }
}
