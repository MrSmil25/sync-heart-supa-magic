import { createFileRoute, redirect } from "@tanstack/react-router";
import { MyRoomAuth } from "@/components/MyRoomAuth";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "My Room — Ruang Kolaborasi Organisasi" },
      {
        name: "description",
        content: "Masuk ke My Room untuk mengelola pekerjaan dan aktivitas organisasi.",
      },
      { property: "og:title", content: "My Room — Ruang Kolaborasi Organisasi" },
      {
        property: "og:description",
        content: "Masuk ke My Room untuk mengelola pekerjaan dan aktivitas organisasi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "preload", as: "image", href: "/assets/Logo_aplikasi_MR.png" }],
  }),
  beforeLoad: async () => {
    const { supabase } = await import("@/lib/supabase-external");
    const { data } = await supabase.auth.getUser();
    if (data.user) throw redirect({ to: "/dashboard", replace: true });
  },
  component: OpeningPage,
});

function OpeningPage() {
  return <MyRoomAuth view="intro" />;
}
