import { createFileRoute } from "@tanstack/react-router";
import { MyRoomAuth } from "@/components/MyRoomAuth";

export const Route = createFileRoute("/login")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Masuk — My Room" },
      {
        name: "description",
        content: "Masuk ke My Room, ruang bersama untuk terhubung dan bertumbuh.",
      },
      { property: "og:title", content: "Masuk — My Room" },
      {
        property: "og:description",
        content: "Masuk ke My Room, ruang bersama untuk terhubung dan bertumbuh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "preload", as: "image", href: "/assets/Logo_aplikasi_MR.png" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return <MyRoomAuth view="login" />;
}
