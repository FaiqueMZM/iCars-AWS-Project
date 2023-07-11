import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../UserPool";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: userName,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: userName,
      Password: password,
    });

    try {
      await new Promise<void>((resolve, reject) => {
        user.authenticateUser(authDetails, {
          onSuccess: () => {
            resolve();
          },
          onFailure: (err) => {
            reject(err);
          },
        });
      });

      // If authentication is successful, navigate to the next page
      console.log("Authentication successful - Redirecting to next page");
      // Add your navigation logic here
      window.location.href = "/dashboard";
    } catch (error) {
      // If authentication fails, display an error message
      console.error("Authentication failed:", error);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="src/assets/admin.png"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={onSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                        </div>
                      )}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          User Name
                        </label>
                        <input
                          type="username"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={userName}
                          onChange={(event) => setUserName(event.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-primary btn-md btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <div>
                        <p className="mb-5 pb-lg-2">
                          Don't have an account?{" "}
                          <a
                            href="/adminsignup"
                            className="btn btn-primary btn-md me-3"
                            role="button"
                          >
                            Sign Up
                          </a>
                        </p>
                        <p>
                          Go back to{" "}
                          <a
                            href="/"
                            className="btn btn-primary btn-md"
                            role="button"
                          >
                            Home
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
