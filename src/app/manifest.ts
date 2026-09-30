import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Licence System UI Demo",
    short_name: "Licence UI",
    description: "Statyczna prezentacja interfejsu panelu licencji.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
