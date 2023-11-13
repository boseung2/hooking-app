import Providers from "@/config/providers";
import RootLayout from "@/layouts/RootLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hooking",
  description: "Hooking community",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ height: "100vh" }}>
        <Providers>
          <RootLayout>{children}</RootLayout>
        </Providers>
      </body>
    </html>
  );
}
