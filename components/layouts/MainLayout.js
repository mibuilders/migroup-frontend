import Head from "next/head";
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import CopyRight from "../common/CopyRight";
import Image from "next/image";

const MainLayout = ({
  children,
  title = "Mi Group",
  description = "Mi Group",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Icons/icon.svg" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
        
      </footer>
      {/* <a
        href="https://wa.me/your-number"  
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-0 z-[1] transition-transform transform hover:scale-110"
      >
       <Image className="w-[3.5rem] h-full" height={500} alt="wtsp" width={500} src={"/Icons/watsapp.png"} />
      </a> */}
    </div>
  );
};

export default MainLayout;
