import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Chat from './pages/Chat';
import ProductDetails from './pages/ProductDetails'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
		<Router>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}>
					{" "}
				</Route>
				<Route
					exact
					path="/signup"
					element={<Signup />}>
					{" "}
				</Route>
				<Route
					exact
					path="/login"
					element={<Login />}>
					{" "}
				</Route>
				<Route
					exact
					path="/product/:id"
					element={<ProductDetails />}
				/>
				<Route
					exact
					path="/chat/:id"
					element={<Chat />}
				/>
			</Routes>
			<Footer />
			<ToastContainer />
		</Router>
	)
}

export default App