import React from "react";
// import card3 from "../../assets/cardimages/3.jpg";
// import card5 from "../../assets/cardimages/5.jpg";
// import card8 from "../../assets/cardimages/8.jpg";
// import card9 from "../../assets/cardimages/9.4.jpg";
import imgCard01 from "../../assets/Pasha Energy/hot_deal/15.3.jpg";
import imgCard02 from "../../assets/Pasha Energy/hot_deal/15.6.jpg";
import imgCard03 from "../../assets/Pasha Energy/hot_deal/15.7.jpg";
import "./HotDeal.css";
import { BsHeart, BsSearch } from "react-icons/bs";

const HotDeal = () => {
	const bCards = [
		{
			img: imgCard01,
			name: "Cohen 1-Light Dome Pendant",
			price: "96",
		},
		{
			img: imgCard02,
			name: "Light Drum Pendant",
			price: "78",
		},
		{
			img: imgCard03,
			name: "Cotton Tapered Pendant",
			price: "16",
		},
		{
			img: imgCard02,
			name: "Cotton Tapered Pendant",
			price: "16",
		},
	];

	return (
		<div className="bg-[#fff]">
			<div className="container mx-auto">
				<h2 className="bsTitle p-8">Hot Deal</h2>
				<p className="pb-10">Don't Miss Today's Featured Deals</p>
				<div className="flex justify-center">
					<div
						//  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pl-5'
						className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6"
					>
						{bCards.map((card) => (
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

export default HotDeal;
