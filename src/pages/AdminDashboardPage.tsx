import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import AdminNavBar from "../components/Admin/AdminNavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserPool from "../UserPool";
import AddCars from "../components/Admin/AddCars";
import ViewCarsAdmin from "../components/Admin/ViewCarsAdmin";
import InventoryReport from "../components/Admin/InventoryReport";

function AdminDashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const user: CognitoUser | null = UserPool.getCurrentUser();
      if (!user) {
        // No user session, redirect to login page
        navigate("/adminlogin");
        return;
      }

      try {
        const session: CognitoUserSession = await new Promise(
          (resolve, reject) => {
            user.getSession(
              (err: Error | null, session: CognitoUserSession | null) => {
                if (err) {
                  reject(err);
                } else if (session) {
                  resolve(session);
                } else {
                  reject(new Error("Session is null"));
                }
              }
            );
          }
        );

        if (!session.isValid() || !session.getIdToken().payload) {
          // Invalid session or missing user info, redirect to login page
          navigate("/adminlogin");
          return;
        }

        // Session is valid and has user info, continue with dashboard logic
        const userId = session.getIdToken().payload.sub;
        console.log("User ID:", userId);
        // Add your dashboard logic here
      } catch (error) {
        console.error("Error retrieving session:", error);
        // Redirect to login page on error
        navigate("/adminlogin");
      }
    };

    checkSession();
  }, [navigate]);
  return (
    <>
      <div>
        <AdminNavBar />
        <AddCars />
        <InventoryReport />
        <ViewCarsAdmin />
      </div>
    </>
  );
}

export default AdminDashboardPage;
