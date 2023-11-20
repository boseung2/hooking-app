import UserLayout from "@/components/layouts/UserLayout";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>;
}

export default Layout;
