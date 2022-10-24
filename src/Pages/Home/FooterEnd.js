import React from "react";
import footer from "../../assets/footer/pay_copyright.jpg";
import "./FooterEnd.css";
import imgLogo from "../../assets/Pasha Energy/logo/PE Logo.png";

const FooterEnd = () => {
	return (
		<div className=" py-6 px-8 border-t border-gray-300 flex flex-row bg-[#F8F8F8] font-medium">
			<div className="basis-1/3 text-start">
				<img src={imgLogo} alt="Logo" className="w-[25%] " />
			</div>
			<div className="flex items-center justify-center basis-1/3">
				<img src={footer} alt="" />
			</div>
			<div className="basis-1/3 text-end">
				<p className="text-sm">
					© Copyright 2020 | <span className="font-bold">AlampStore</span> By
					ShopiLaunch. Powered by
				</p>
				<p className="text-sm">Shopify.</p>
			</div>
		</div>
	);
};

export default FooterEnd;
