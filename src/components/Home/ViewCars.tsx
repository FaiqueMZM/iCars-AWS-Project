import { useState, useEffect } from "react";
import axios from "axios";

interface Car {
  id: string;
  manufacturer: string;
  model: string;
  year: string;
  price: string;
  seatLayout: string;
  exteriorColor: string;
  interiorColor: string;
  wheels: string;
  topSpeed: string;
  imageUrl: string;
}

function ViewCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedWheels, setSelectedWheels] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get<Car[]>(
        "https://3e2hdb8sjg.execute-api.ap-northeast-1.amazonaws.com/dev"
      );
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const sortCars = () => {
    let sortedCars = [...cars];

    if (selectedManufacturer) {
      sortedCars = sortedCars.filter(
        (car) => car.manufacturer === selectedManufacturer
      );
    }

    if (selectedWheels) {
      sortedCars = sortedCars.filter((car) => car.wheels === selectedWheels);
    }

    sortedCars.sort((a, b) => {
      if (selectedManufacturer && a.manufacturer !== b.manufacturer) {
        return a.manufacturer.localeCompare(b.manufacturer);
      }
      if (selectedWheels && a.wheels !== b.wheels) {
        return a.wheels.localeCompare(b.wheels);
      }
      return 0;
    });

    setCars(sortedCars);
  };

  const resetSort = () => {
    setSelectedManufacturer("");
    setSelectedWheels("");
    fetchCars();
  };

  return (
    <>
      <div className="container">
        <h1>View Cars</h1>
        <div className="sort-options">
          {/* Manufacturer Dropdown */}
          <label>
            Select Manufacturer:
            <select
              value={selectedManufacturer}
              onChange={(e) => setSelectedManufacturer(e.target.value)}
            >
              <option value="">All</option>
              {Array.from(new Set(cars.map((car) => car.manufacturer))).map(
                (manufacturer) => (
                  <option key={manufacturer} value={manufacturer}>
                    {manufacturer}
                  </option>
                )
              )}
            </select>
          </label>

          {/* Wheels Dropdown */}
          <label>
            Select Wheels:
            <select
              value={selectedWheels}
              onChange={(e) => setSelectedWheels(e.target.value)}
            >
              <option value="">All</option>
              {Array.from(new Set(cars.map((car) => car.wheels))).map(
                (wheels) => (
                  <option key={wheels} value={wheels}>
                    {wheels}
                  </option>
                )
              )}
            </select>
          </label>

          {/* Sort Button */}
          <button className="btn btn-primary btn-sm m-1" onClick={sortCars}>
            Sort
          </button>

          {/* Reset Button */}
          <button className="btn btn-primary btn-sm m-1" onClick={resetSort}>
            Reset
          </button>
        </div>

        <div className="card-columns mt-4">
          {/* Car cards */}
          {cars.map((car) => (
            <div key={car.id} className="card mb-4">
              {car.imageUrl && (
                <img
                  src={car.imageUrl}
                  alt="Car"
                  className="card-img-top"
                  style={{}}
                />
              )}
              <div className="card-body row">
                <h5 className="card-title">{car.manufacturer}</h5>
                <div className="col-md">
                  <p className="card-text">Model: {car.model}</p>
                  <p className="card-text">Year: {car.year}</p>
                  <p className="card-text">Price: Rs.{car.price}</p>
                  <p className="card-text">Seat Layout: {car.seatLayout}</p>
                </div>
                <div className="col-md">
                  <p className="card-text">
                    Exterior Color: {car.exteriorColor}
                  </p>
                  <p className="card-text">
                    Interior Color: {car.interiorColor}
                  </p>
                  <p className="card-text">Wheels: {car.wheels}</p>
                  <p className="card-text">Top Speed: {car.topSpeed} kmph</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewCars;
