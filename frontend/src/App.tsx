import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "./pages/LoginPage";
import { UserProvider } from "./context/useAuth";

function App() {
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
}

export default App;
