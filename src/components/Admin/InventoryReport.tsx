import React, { useState } from "react";
import axios from "axios";

function InventoryReport(): JSX.Element {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generateReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://437nq3jm0a.execute-api.ap-northeast-1.amazonaws.com/dev"
      );
      console.log("Report generation request sent successfully");
      setSuccessMessage("Inventory Report Sent Successfully");
      setErrorMessage("");
    } catch (error) {
      console.error("Error generating report:", error);
      setSuccessMessage("");
      setErrorMessage("Error sending the Inventory Report");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Inventory Report</h1>
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
        <form onSubmit={generateReport}>
          <button type="submit" className="btn btn-primary btn-sm-3 mt-2">
            Send Inventory Report
          </button>
        </form>
      </div>
    </>
  );
}

export default InventoryReport;
