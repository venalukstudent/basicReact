import Header from "./components/Header";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Clients />
      <Features />
      <Pricing />
      <Footer />
      <main class="site-content"></main>
    </div>
  );
};
