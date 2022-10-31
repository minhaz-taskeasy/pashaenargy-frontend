import React from "react";
// import obCard1 from "../../assets/ourBlog/ob1.jpg";
// import obCard2 from "../../assets/ourBlog/ob2.jpg";
// import obCard3 from "../../assets/ourBlog/ob3.jpg";
import imgBlog01 from "../../assets/Pasha Energy/our_blog/blog6_1024x1024.jpg";
import imgBlog02 from "../../assets/Pasha Energy/our_blog/blog7_1024x1024.jpg";
import imgBlog03 from "../../assets/Pasha Energy/our_blog/blog8_1024x1024.jpg";
import "./OurBlog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const OurBlog = () => {
	const obCards = [
		{
			img: imgBlog01,
			name: "Our Favorite Greige Colors",
			price:
				"This time of the year brings cooler weather, shorter days, cocooning on the couch, Netflix bingeing, and indoor projects and crafts. Maybe...",
		},
		{
			img: imgBlog02,
			name: "Table Lamps High to Low",
			price: "78",
		},
		{
			img: imgBlog03,
			name: "Trend We Are Loving: Fluted Details",
			price: "96",
		},
		{
			img: imgBlog02,
			name: "Table Lamps High to Low",
			price: "78",
		},
	];
	return (
		<div className="bg-[#fff] pt-10">
			<div className="container mx-auto">
				<h2 className="bsTitle p-10">Our Blog</h2>
				<p className="pb-10">Don't Miss Today's Featured Deals</p>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					cssMode={true}
					loop={true}
					navigation={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper mt-10  bg-white"
				>
					{obCards.map((card) => (
						<SwiperSlide className="pb-14">
							<div className="w-full relative">
								<div className="absolute top-[20px] left-[20px] bg-white px-[19px] py-[6px] rounded-full">
									<h4 className="font-bold text-lg text-gray-600">13</h4>
									<div className="hr-rule h-[1px] w-[30px] bg-gray-700"></div>
									<h4>JUL</h4>
								</div>
								<figure className="obFiger overflow-hidden">
									<img
										className=" obImage min-h-[347px] w-full hover:scale-110 transition-all duration-600"
										src={card.img}
										alt="Shoes"
									/>
								</figure>
								<div className="mt-4">
									<a className="obNews" href="/">
										NEWS
									</a>
									<a className="obLink" href="/">
										<h4 className="obName">{card.name}</h4>
									</a>

									<p className="obtext">
										This time of the year brings cooler weather, shorter days,
										cocooning on the couch, Netflix bingeing, and indoor
										projects and crafts. Maybe...
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default OurBlog;
