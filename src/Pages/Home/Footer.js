import React from "react";
import twitter from "../../assets/icon/twitter.jpg";
import browser from "../../assets/icon/browser.jpg";
import be from "../../assets/icon/be.jpg";
import inst from "../../assets/icon/inst.jpg";

const Footer = () => {
	return (
		<>
			<footer className="footer p-10 bg-[#F8F8F8] text-gray-800 font-medium ">
				<div>
					<span className="footer-title">Shop</span>
					<a className="link link-hover">About Us</a>
					<a className="link link-hover">Privacy Policy</a>
					<a className="link link-hover">Terms & Conditions</a>
					<a className="link link-hover">Products Return</a>
					<a className="link link-hover">Wholesale Policy</a>
				</div>
				<div>
					<span className="footer-title">Infomation</span>
					<a className="link link-hover">Pagination</a>
					<a className="link link-hover">Terms & Conditions</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Accessories</a>
					<a className="link link-hover">Term of use</a>
				</div>
				<div>
					<span className="footer-title">About</span>
					<a className="link link-hover">Help Center</a>
					<a className="link link-hover">Address Store</a>
					<a className="link link-hover">Privacy Policy</a>
					<a className="link link-hover">Receivers & Amplifiers</a>
					<a className="link link-hover">Alamp</a>
				</div>
				<div>
					<span className="footer-title">Follow Us</span>
					<a className="link link-hover">(646) 663-4575</a>
					<a className="link link-hover">(646) 968-0608</a>
					<a className="link link-hover">help@shopilaunch.com</a>
					<a className="link link-hover">1201 Broadway Suite 600</a>
					<span className="flex items-center justify-between">
						<a href="/">
							<img src={twitter} alt="" />
						</a>
						<a href="/">
							<img src={browser} alt="" />
						</a>
						<a href="/">
							<img src={be} alt="" />
						</a>
						<a href="/">
							{" "}
							<img src={inst} alt="" />
						</a>
					</span>
				</div>
				<div>
					<span className="footer-title">Newsletter</span>
					<a className="link link-hover">Be the first who learns about our</a>
					<a className="link link-hover">great promotions!</a>
					<div className="form-control w-80">
						<div className="relative">
							<input
								type="text"
								placeholder="Enter your email..."
								className="input input-bordered w-full pr-16 bg-[#F8F8F8]"
							/>
							<a className="shopBtnL2 absolute top-0 right-0" href="/">
								<button className="shopBtn2 subBtn">SUBSCRIBE</button>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
