import("../../Welcome.css");

function Welcome() {
  return (
    <>
      <header className="masthead">
        <div className="container"></div>
        <div className="container">
          <div className="masthead-subheading">
            <h1>Welocome to iCars</h1>
          </div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <div>
            <p>
              "Welcome to iCars, your trusted destination for premium
              automobiles. At iCars, we are passionate about delivering the
              ultimate driving experience to our valued customers. With a wide
              range of meticulously curated vehicles, we bring together luxury,
              performance, and innovation."
            </p>
          </div>
          <a className="btn btn-primary btn-xl text-uppercase">
            Explore more...
          </a>
        </div>
      </header>
    </>
  );
}

export default Welcome;
