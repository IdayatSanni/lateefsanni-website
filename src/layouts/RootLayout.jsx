import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/Header";
import FooterBar from "../components/FooterBar";

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}
