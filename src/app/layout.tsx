import Providers from "@/config/providers";
import RootLayout from "@/layouts/RootLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hooking",
  description: "후킹 커뮤니티 | 병점 동탄 독서모임",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <RootLayout>{children}</RootLayout>
        </Providers>
      </body>
    </html>
  );
}
