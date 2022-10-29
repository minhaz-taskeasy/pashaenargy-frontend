import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import imgSlider01 from "../../assets/Pasha Energy/slider/Banner-01.jpg";
// import imgSlider02 from "../../assets/Pasha Energy/slider/Banner-02.jpg";
// import imgSlider03 from "../../assets/Pasha Energy/slider/Banner-03.jpg";
// import imgSlider04 from "../../assets/Pasha Energy/slider/Banner-04.jpg";
// import imgSlider05 from "../../assets/Pasha Energy/slider/Banner-02.jpg";
import imgSlider01 from "../../assets/Main Banner Image/Main Banner-01.jpg";
import imgSlider02 from "../../assets/Main Banner Image/Main Banner-02.jpg";
import imgSlider03 from "../../assets/Main Banner Image/Main Banner-03.jpg";
import imgSlider04 from "../../assets/Main Banner Image/Main Banner-04.jpg";
import imgSlider05 from "../../assets/Main Banner Image/Main Banner-05.jpg";
import "./Banner.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Banner = () => {
	return (
		<div className="w-full z-40 bannerTop">
			<Swiper
				cssMode={true}
				navigation={true}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper mt-10 py-10"
			>
				<SwiperSlide>
					<div className=" relative w-full">
						<img src={imgSlider01} className="w-full" alt="slider" />
						<div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<div>
								<h3 className="lighting font-serif">Lighting Accessories</h3>
								<p className="sale">Sale up to 50% off today</p>
								<button className="px-4 py-2 mt-4 rounded-md font-medium bg-[#c6a38b] text-white text-lg hover:bg-white hover:text-black transition-all duration-200">
									Shop All Collection
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=" relative w-full">
						<img src={imgSlider02} className="w-full" alt="slider" />
						<div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<div>
								<h3 className="lighting font-serif">Decorative Lighting</h3>
								<p className="sale">Sale up to 50% off today</p>
								<button className="px-4 py-2 mt-4 rounded-md font-medium bg-[#c6a38b] text-white text-lg hover:bg-white hover:text-black transition-all duration-200">
									Shop All Collection
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=" relative w-full">
						<img src={imgSlider05} className="w-full" alt="slider" />
						<div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<div>
								<h3 className="lighting font-serif">Lighting Accessories</h3>
								<p className="sale">Sale up to 50% off today</p>
								<button className="px-4 py-2 mt-4 rounded-md font-medium bg-[#c6a38b] text-white text-lg hover:bg-white hover:text-black transition-all duration-200">
									Shop All Collection
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-full">
						<img src={imgSlider03} className="w-full" alt="slider" />
						<div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<div className=" ">
								<h3 className="lighting font-serif">Decorative Lighting</h3>
								<p className="sale">Sale up to 50% off today</p>
								<button className="px-4 py-2 mt-4 rounded-md font-medium bg-[#c6a38b] text-white text-lg hover:bg-white hover:text-black transition-all duration-200">
									Shop All Collection
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-full">
						<img src={imgSlider04} className="w-full" alt="slider" />
						<div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<div className=" ">
								<h3 className="lighting font-serif">Decorative Lighting</h3>
								<p className="sale">Sale up to 50% off today</p>
								<button className="px-4 py-2 mt-4 rounded-md font-medium bg-[#c6a38b] text-white text-lg hover:bg-white hover:text-black transition-all duration-200">
									Shop All Collection
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
