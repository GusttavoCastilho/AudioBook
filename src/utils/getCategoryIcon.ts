import ActivityIcon from "@assets/activity.svg";
import MedicalIcon from "@assets/medical.svg";
import PlayIcon from "@assets/play.svg";
import CameraIcon from "@assets/camera.svg";

export function getCategoryIcon(type: string) {
  switch (type) {
    case "business":
      return ActivityIcon;
    case "medical":
      return MedicalIcon;
    case "music":
      return PlayIcon;
    case "photography":
      return CameraIcon;
  }
}
