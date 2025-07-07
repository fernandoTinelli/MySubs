import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";
import { UserProvider } from "./context/useAuth";
import { RegisterPage } from "./pages/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { HomePage } from "./pages/HomePage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<UserProvider>
					<Routes>
						<Route path="/" element={<WelcomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />

						<Route
							path="/home"
							element={
								<ProtectedRoutes>
									<HomePage />
								</ProtectedRoutes>
							}
						></Route>
					</Routes>
				</UserProvider>
			</BrowserRouter>

			<ToastContainer theme="auto" />
		</>
	);
};

export default App;
