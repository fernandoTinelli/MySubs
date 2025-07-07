import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";
import { UserProvider } from "./context/useAuth";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<UserProvider>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
					</Routes>
				</UserProvider>
			</BrowserRouter>

			<ToastContainer theme="auto" />
		</>
	);
};

export default App;
