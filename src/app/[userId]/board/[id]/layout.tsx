import DetailLayout from "@/components/layouts/DetailLayout";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <DetailLayout>{children}</DetailLayout>;
}

export default Layout;
