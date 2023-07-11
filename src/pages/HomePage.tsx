import Footer from "../components/Home/Footer";
import ViewCars from "../components/Home/ViewCars";
import Welcome from "../components/Home/Welcome";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <>
      <div>
        <NavBar />
        <Welcome />
        <ViewCars />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
