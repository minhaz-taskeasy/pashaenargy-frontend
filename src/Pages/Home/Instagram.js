import React from "react";
// import instimg1 from "../../assets/instgm/instagram1.jpg";
// import instimg2 from "../../assets/instgm/instagram2.jpg";
// import instimg3 from "../../assets/instgm/instagram3.jpg";
// import instimg4 from "../../assets/instgm/instagram4.jpg";
import imgIns01 from "../../assets/Pasha Energy/alamp_on_instagram/instagram1.jpg";
import imgIns02 from "../../assets/Pasha Energy/alamp_on_instagram/instagram2.jpg";
import imgIns03 from "../../assets/Pasha Energy/alamp_on_instagram/instagram3.jpg";
import imgIns04 from "../../assets/Pasha Energy/alamp_on_instagram/instagram4.jpg";
import imgInsNew01 from "../../assets/Pasha Energy/newIns-01.jpg";
import imgInsNew02 from "../../assets/Pasha Energy/newIns-02.jpg";

import "./HotDeal.css";
import { BsInstagram } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";

const Instagram = () => {
	const obCards = [
		{
			img: imgInsNew01,
		},
		{
			img: imgIns02,
		},

		{
			img: imgIns04,
		},
		{
			img: imgInsNew02,
		},
	];

	return (
		<div className="bg-[#fff] pt-10">
			<h2 className="bsTitle pt-10 font-bold">Alamp On Instagram</h2>
			<p className="p-10">@alamp</p>
			<Swiper
				slideToS={1}
				cssMode={true}
				navigation={true}
				loop={true}
				loopFillGroupWithBlank={true}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 0,
					},
				}}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Mousewheel, Keyboard]}
				className="mySwiper mt-10 py-10 bg-gray-800"
			>
				{obCards.map((card) => (
					<SwiperSlide>
						<div className="card rounded-none overflow-hidden">
							<figure className="obFiger">
								<img className="w-full obImage" src={card.img} alt="Shoes" />
							</figure>
							<div className="hover-card absolute top-0 left-0 w-full h-full bg-gray-900/50 transition-all duration-300">
								<div className="w-full h-full flex items-center justify-center">
									<BsInstagram className="text-5xl text-white font-bold" />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Instagram;
