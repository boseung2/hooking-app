import Providers from "@/config/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hooking",
  description: "Hooking community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
