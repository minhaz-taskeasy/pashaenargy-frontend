import React from "react";
// import card1 from "../../assets/cardimages/1.jpg";
// import card2 from "../../assets/cardimages/2.jpg";
// import card3 from "../../assets/cardimages/3.jpg";
// import card4 from "../../assets/cardimages/4.jpg";
// import card5 from "../../assets/cardimages/5.jpg";
// import card6 from "../../assets/cardimages/6.jpg";
// import card7 from "../../assets/cardimages/7.jpg";
// import card8 from "../../assets/cardimages/8.jpg";

import imgCard01 from "../../assets/Pasha Energy/best_seller/10.1.jpg";
import imgCard02 from "../../assets/Pasha Energy/best_seller/15.1.jpg";
import imgCard03 from "../../assets/Pasha Energy/best_seller/15.2.jpg";

import "./BestSeller.css";
import "./HotDeal.css";
import { BsHeart, BsSearch } from "react-icons/bs";

const cards = [
	{
		img: imgCard01,
		name: "Dome Pendant",
		price: "95",
	},
	{
		img: imgCard02,
		name: "Novelty Pendant",
		price: "78",
	},
	{
		img: imgCard03,
		name: "Cohen 1-Light Dome Pendant",
		price: "96",
	},
	{
		img: imgCard01,
		name: "Single Pendant",
		price: "22",
	},
	{
		img: imgCard02,
		name: "Light Drum Pendant",
		price: "78",
	},
	{
		img: imgCard01,
		name: "Cotton Novelty Pendant",
		price: "35",
	},
	{
		img: imgCard03,
		name: "Polyester Empire Lamp",
		price: "33",
	},
	{
		img: imgCard02,
		name: "Cotton Tapered Pendant",
		price: "16",
	},
];
// console.log('cd', cards[0].name)

const BestSeller = () => {
	return (
		<div className="bg-[#fff] pb-6">
			<div className="container mx-auto">
				<h2 className="bsTitle py-10">Best Seller</h2>
				<div className="flex justify-center ">
					<div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
						{cards.map((card) => (
							<div className="w-full card relative rounded-none ">
								<figure>
									<img className="w-full" src={card.img} alt="Shoes" />
								</figure>
								<div className="py-2">
									<h4 className="text-left tText text-gray-800">
										Dome Pendant
									</h4>
									<p className="text-left pText relative">
										<span className="hide-hover-card">$95.00</span>
										<span className="hover-card">Select option</span>
									</p>
								</div>

								<div className="transition linear duration-300 hover-card bg-gray-600/25 absolute bottom-[63px] w-full text-gray-700 h-full flex items-end justify-center ">
									<div className=" flex items-center justify-end flex-col w-full bg-white ">
										<div className="w-full flex  items-center justify-center my-2">
											<div className="w-full flex items-center justify-center text-center">
												<BsHeart className="text-2xl  text-center hover:text-rose-700 " />
											</div>
											<div className="w-full text-xl text-gray-400">|</div>
											<div className="w-full flex items-center justify-center text-center">
												<BsSearch className="text-2xl  text-center hover:text-indigo-800" />
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSeller;
