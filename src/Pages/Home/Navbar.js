import React, { useEffect, useState } from "react";
import imgLogo from "../../assets/Pasha Energy/logo/PE Logo.png";
import "./Navbar.css";

const Navbar = () => {
	// console.log(window.scrollY());

	const [navbar, setNavbar] = useState(false);
	//navbar scroll changeBackground function
	const changeBackground = () => {
		console.log(window.scrollY);
		if (window.scrollY >= 66) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	useEffect(() => {
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});
	return (
		// <div className="navbar bg-base-100">
		<div
			className="navbar navFixed sticky top-0 z-50"
			style={{
				backgroundColor: navbar ? "rgba(255, 255, 255, 0.719)" : "transparent",
			}}
		>
			<div className="navbar-start text-gray-600">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/">HOME</a>
						</li>
						<li>
							<a href="/">SHOP</a>
						</li>

						<li>
							<a href="/">FEATURE</a>
						</li>
						<li>
							<a href="/">PAGES</a>
						</li>
						<li>
							<a href="/">BLOGS</a>
						</li>
					</ul>
				</div>
				<div className="navbar-center hidden lg:flex py-6">
					<ul className="lg:pl-28 flex gap-8 font-bold">
						<li className="after:h-[1px] transition-all duration-300 after:bg-orange-600">
							<a
								href="/"
								className="after:content-end after:w-[20%] hover:after:w-[75%] "
							>
								HOME
							</a>
						</li>
						<li>
							<a href="/">SHOP</a>
						</li>

						<li className="shop">
							<span>FEATURE</span>
							<div className="dropdown-shop absolute left-24 top-22 bg-white shadow w-[520px] px-4 py-2">
								<div className="flex items-center justify-between font-normal">
									<ul>
										<li className="py-2 text-[17px] font-medium  hover:text-orange-700 uppercase text-black after:content-end after:w-[20%] hover:after:w-[75%] after:h-[1px] transition-all duration-300 after:bg-orange-600">
											Demo Layouts
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Businesses
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											regrets
										</li>
									</ul>
									<ul>
										<li className="py-2 text-[17px] font-medium  hover:text-orange-700 uppercase text-black after:content-end after:w-[20%] hover:after:w-[75%] after:h-[1px] transition-all duration-300 after:bg-orange-600">
											Best Sells
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Pendant
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Dome Pendant
										</li>
									</ul>
									<ul>
										<li className="py-2 text-[17px] font-medium  hover:text-orange-700 uppercase text-black after:content-end after:w-[20%] hover:after:w-[75%] after:h-[1px] transition-all duration-300 after:bg-orange-600">
											New Collections
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Great services
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											templates
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="/">PAGES</a>
						</li>
						<li className="shop">
							<span>BLOGS</span>
							<div className="dropdown-shop absolute left-24 top-22 bg-white shadow w-[520px] px-4 py-2">
								<div className="flex items-center justify-between font-normal">
									<ul>
										<li className="py-2 text-[17px] font-medium  hover:text-orange-700 uppercase text-black after:content-end after:w-[20%] hover:after:w-[75%] after:h-[1px] transition-all duration-300 after:bg-orange-600">
											Demo Layouts
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Businesses
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											regrets
										</li>
									</ul>
									<ul>
										<li className="py-2 text-[17px] font-medium  hover:text-orange-700 uppercase text-black after:content-end after:w-[20%] hover:after:w-[75%] after:h-[1px] transition-all duration-300 after:bg-orange-600">
											Best Sells
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Pendant
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Dome Pendant
										</li>
									</ul>
									<ul>
										<li className="py-2 text-[17px] font-medium  hover:text-orange-700 uppercase text-black after:content-end after:w-[20%] hover:after:w-[75%] after:h-[1px] transition-all duration-300 after:bg-orange-600">
											New Collections
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											Great services
										</li>
										<li className="py-2 hover:text-orange-700 text-[#7d7b7b]">
											features
										</li>
										<li className="py-1 hover:text-orange-700 text-[#7d7b7b]">
											templates
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<button className="text-4xl font-bold text-gray-800">
					<img src={imgLogo} alt="Logo" className="w-[50%] mx-auto" />
				</button>
			</div>
			<div className="navbar-end text-gray-800 flex items-center justify-end lg:pr-28">
				<button className="m-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
				<button className="m-1 w-10">
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
