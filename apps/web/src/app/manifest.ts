import type { MetadataRoute } from "next";
import { APP_NAME } from "@/config/app";

export default function manifest(): MetadataRoute.Manifest {
  return { name: APP_NAME, short_name: APP_NAME, start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#1d4ed8" };
}
