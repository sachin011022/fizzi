import HeaderLogo from "./components/HeaderLogo";
import DivCan from "./components/model/DivCan";
import ViewCanvas from "./components/Three/ViewCanvas";
import Carausal from "./page/Carausal";
import DescriptionPage from "./page/DescriptionPage/DescriptionPage";
import Footer from "./page/Footer";
import Hero from "./page/Hero";

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <HeaderLogo />
      <main className="relative min-h-screen w-full">
        <Hero />
        <ViewCanvas />
      </main>
      <DivCan />
      <Carausal />
      <DescriptionPage />
      <Footer />
    </div>
  );
}
