import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
