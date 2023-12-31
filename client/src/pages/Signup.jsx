/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { BsTwitterX } from "react-icons/bs"
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [Name,setName] = useState("")

	const handleSignup = async (e) => {
		e.preventDefault()
		await axios.post('http://localhost:3000/register',{email: email,password: password,username: Name},{
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then((res)=>{
			console.log(res);
			toast.success("Account Created Successfully")
			window.location.href = "/";
		})
		.catch((err)=>{
			if(err.response.data.message){
				toast.error(err.response.data.message)
			}
			else
			toast.error("User Already Exists")
			console.log("User Already Exists" + err.message);
		}
		)
	}

	const handleGoogle = async () => {
		window.open("http://localhost:3000/auth/google", "_self")
	}
	const handleTwitter = async () => {
		window.open("http://localhost:3000/auth/twitter", "_parent")
	}
	
	return (
		<div className="font-sans h-[98vh] flex justify-center items-center bg-blue-600">
			<div className="bg-white flex-col border h-[90%] md:w-[30%] w-[90%] p-5 border-solid border-[rgb(231,231,231)] flex justify-center items-center">
				<h2 className="text-2xl mt-12 mb-4 font-mono text-blue-700">
					Create your Account
				</h2>
				<form
					className="rounded-md gap-2 text-base flex-col border-b-neutral-300 w-4/5 px-2.5 py-5 border-b border-solid flex justify-center items-center"
					onSubmit={handleSignup}>
					<input
						className="w-[100%] m-[5px] p-2.5 bg-slate-200"
						type="text"
						placeholder="Enter your username"
						value={Name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						className="w-[100%] m-[5px] p-2.5 bg-slate-200"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						className="w-[100%] m-[5px] p-2.5 bg-slate-200"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<div className="flex w-full justify-center gap-2 pt-4 pb-2">
						<input
							className="text-xl bg-blue-600 text-[white] cursor-pointer font-mono rounded-md py-1 "
							type="submit"
							id=""
							value="Signup"
						/>
					</div>
					<p className="text-base">
						{"Have"} an account?{" "}
						<Link to="/login">
							<span className="text-blue-700">Login</span>
						</Link>
					</p>
				</form>
				<div className="gap-2 flex rounded-none flex-col py-4 mb-8  whitespace-nowrap justify-center items-center">
					<div
						className=" cursor-pointer bg-slate-200 flex place-items-center rounded-md border-2 border-blue-800 p-1 px-3 gap-2 text-right"
						onClick={handleGoogle}>
						<FcGoogle />
						{"Signup with Google"}
					</div>
					<div
						className=" cursor-pointer bg-slate-200 border-2 rounded-md	 flex place-items-center border-blue-800 p-1 px-4 text-right gap-2"
						onClick={handleTwitter}>
						<BsTwitterX />
						{"Signup  with twitter"}
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	)
}

export default Login
