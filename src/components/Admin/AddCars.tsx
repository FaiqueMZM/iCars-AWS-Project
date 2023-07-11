import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddCars() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [seatLayout, setSeatLayout] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [wheels, setWheels] = useState("");
  const [topSpeed, setTopSpeed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !manufacturer ||
      !model ||
      !year ||
      !price ||
      !seatLayout ||
      !exteriorColor ||
      !interiorColor ||
      !wheels ||
      !topSpeed ||
      !imageUrl
    ) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
      return;
    }

    try {
      const carDetails = {
        id: uuidv4(),
        manufacturer,
        model,
        year,
        price,
        seatLayout,
        exteriorColor,
        interiorColor,
        wheels,
        topSpeed,
        imageUrl: imageUrl,
      };

      const responseAddCars = await axios.post(
        "https://cxi28cfhia.execute-api.ap-northeast-1.amazonaws.com/dev",
        carDetails
      );

      console.log(responseAddCars.data);

      // const file = (event.target as any).image.files[0];

      // // // Create form data for image upload
      // const formData = new FormData();
      // formData.append("image", file);

      // // // Make API request to upload image
      // const responseUploadImage = await axios.post(
      //   "https://uv3h6rq3qf.execute-api.ap-northeast-1.amazonaws.com/dev",
      //   formData
      // );

      // console.log(responseUploadImage.data);

      // Clear the form fields after successful submission
      setManufacturer("");
      setModel("");
      setYear("");
      setPrice("");
      setSeatLayout("");
      setExteriorColor("");
      setInteriorColor("");
      setWheels("");
      setTopSpeed("");
      setImageUrl("");

      setSuccessMessage("Car details added successfully");
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("Error adding car details");
      // console.log(JSON.stringify(carDetails));
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1>Add Cars</h1>
          </div>
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="form-group col-md">
                <label htmlFor="manufacturer">Manufacturer</label>
                <select
                  className="form-control"
                  id="manufacturer"
                  onChange={(e) => setManufacturer(e.target.value)}
                >
                  <option value="Nissan">Nissan</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="BMW">BMW</option>
                  <option value="Audi">Audi</option>
                </select>
              </div>
              <div className="form-group col-md">
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  placeholder="GTR R34"
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="form-group col-md">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  placeholder="2023"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="form-group col-md">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="1234567890"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md">
                <label htmlFor="seatLayout">Seat Layout</label>
                <select
                  className="form-control"
                  id="seatLayout"
                  onChange={(e) => setSeatLayout(e.target.value)}
                >
                  <option value="2 seat">2 seat</option>
                  <option value="5 seat">5 seat</option>
                  <option value="7 seat">7 seat</option>
                </select>
              </div>
              <div className="form-group col-md">
                <label htmlFor="exteriorColor">Exterior Color</label>
                <input
                  type="text"
                  className="form-control"
                  id="exteriorColor"
                  placeholder="Blue"
                  onChange={(e) => setExteriorColor(e.target.value)}
                />
              </div>
              <div className="form-group col-md">
                <label htmlFor="interiorColor">Interior Color</label>
                <select
                  className="form-control"
                  id="interiorColor"
                  onChange={(e) => setInteriorColor(e.target.value)}
                >
                  <option value="Beige">Beige</option>
                  <option value="Black">Black</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm">
                <label htmlFor="wheels">Wheels</label>
                <select
                  className="form-control"
                  id="wheels"
                  onChange={(e) => setWheels(e.target.value)}
                >
                  <option value="19''">19"</option>
                  <option value="20''">20"</option>
                  <option value="21''">21"</option>
                </select>
              </div>
              <div className="form-group col-sm">
                <label htmlFor="topSpeed">Top Speed (kmph)</label>
                <input
                  type="number"
                  className="form-control"
                  id="topSpeed"
                  placeholder="251"
                  onChange={(e) => setTopSpeed(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group col-md">
              <label htmlFor="imageUrl">Image Url</label>
              {/* <input type="file" className="form-control" id="image" /> */}
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg mt-2">
                Add Car
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AddCars;
