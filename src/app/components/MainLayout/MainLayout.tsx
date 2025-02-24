"use client";
import { usePathname } from "next/navigation";
import type { FC, PropsWithChildren } from "react";
import Header from "../Header/Header";
import GlobalContainer from "../GlobalContainer/GlobalContainer";
import Footer from "../Footer/Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const authPathNames = pathname === "/login" || pathname === "/registrar";
  return authPathNames ? (
    <>{children}</>
  ) : (
    <>
      <GlobalContainer>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </GlobalContainer>
    </>
  );
};

export default MainLayout;
