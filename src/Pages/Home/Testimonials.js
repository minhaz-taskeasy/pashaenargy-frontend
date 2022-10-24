import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "./Testimonials.css";
import user1 from "../../assets/fixedimage/user1.jpg";
import user2 from "../../assets/fixedimage/user2.jpg";
import user3 from "../../assets/fixedimage/user3.jpg";
import user4 from "../../assets/fixedimage/user4.jpg";

const Testimonials = () => {
	return (
		<div
			className="w-full my-10 py-10"
			style={{
				backgroundColor: "rgba(0, 0, 0, 0)",
				color: "white",
			}}
		>
			<h3 className="tstHeading pb-10 ">TESTIMONIALS</h3>
			<div className=" w-full mt-4 ">
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
					className="mySwiper"
				>
					<SwiperSlide
						style={{
							backgroundColor: "transparent ",
						}}
					>
						<div className="flex items-center justify-center flex-col py-6">
							<img src={user1} className=" tstImg" alt="slider" />
							<h3 className="text-white">DESTINEE</h3>
							<p className="marketing">Marketing Personal</p>
							<p className="tstTxt">
								Saved our business! We have no regrets! Thanks for the great
								service. This template is worth much more than I paid Saved our
								business! We have no regrets!
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent ",
						}}
					>
						<div className="flex items-center justify-center flex-col py-6">
							<img src={user2} className=" tstImg" alt="test slider" />
							<h3 className="text-white">DESTINEE</h3>
							<p className="marketing">Marketing Personal</p>
							<p className="tstTxt">
								Saved our business! We have no regrets! Thanks for the great
								service. This template is worth much more than I paid Saved our
								business! We have no regrets!
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent ",
						}}
					>
						<div className="flex items-center justify-center flex-col py-6">
							<img src={user3} className=" tstImg" alt="test slider" />
							<h3 className="text-white">DESTINEE</h3>
							<p className="marketing">Marketing Personal</p>
							<p className="tstTxt">
								Saved our business! We have no regrets! Thanks for the great
								service. This template is worth much more than I paid Saved our
								business! We have no regrets!
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent ",
						}}
					>
						<div className="flex items-center justify-center flex-col py-6">
							<img src={user4} className=" tstImg" alt="test slider" />
							<h3>DESTINEE</h3>
							<p className="marketing">Marketing Personal</p>
							<p className="tstTxt">
								Saved our business! We have no regrets! Thanks for the great
								service. This template is worth much more than I paid Saved our
								business! We have no regrets!
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
