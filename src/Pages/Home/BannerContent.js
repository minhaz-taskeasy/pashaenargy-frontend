import React from "react";
import "./BannerContent.css";
// import banner31 from "../../assets/images/banner3.1.jpg";
// import banner32 from "../../assets/images/banner3.2.jpg";
// import banner33 from "../../assets/images/banner3.3.jpg";
// import banner34 from "../../assets/images/banner3.4.jpg";
// import imgBanner01 from "../../assets/Pasha Energy/banner/banner3.1.jpg";
// import imgBanner02 from "../../assets/Pasha Energy/banner/banner3.1.jpg";
// import imgBanner03 from "../../assets/Pasha Energy/banner/banner3.3.jpg";
import imgBanner01 from "../../assets/Main Banner Image/01.jpg";
import imgBanner02 from "../../assets/Main Banner Image/02.jpg";
import imgBanner04 from "../../assets/Main Banner Image/03.jpg";
import imgBanner03 from "../../assets/Main Banner Image/04.jpg";

const BannerContent = () => {
	return (
		<div className="w-full">
			<div className="w-full bg-white p-4">
				<div
					className="flex gap-6"
					style={{
						width: "100% !important",
					}}
				>
					<div
						className="w-2/3 flex items-center"
						style={{
							backgroundImage: `url(${imgBanner01})`,
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						<div className="banner-shadow text-left w-[50%] pl-20 text-white">
							<h3 className="text-[40px] font-bold">
								Carnegie Light Armed Scone
							</h3>
							<p className="py-6">
								Retro open basket design wall light in a black finish, featuring
								an inner clear glass cylinder light shade.
							</p>
							<a className="shopBtnL" href="/">
								<button className="shopBtn banner-shadow">SHOP NOW</button>
							</a>
						</div>
					</div>
					<img src={imgBanner02} className="w-1/3" alt="banner content" />
				</div>
			</div>
			<div className="w-full bg-white p-4">
				<div
					className="flex gap-6"
					style={{
						width: "100% !important",
					}}
				>
					<img src={imgBanner04} className="w-1/3" alt="banner" />
					<div
						className="w-2/3 flex items-center"
						style={{
							backgroundImage: `url(${imgBanner03})`,
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						<div className="text-left w-[50%] pl-20 banner-shadow text-white">
							<h3 className="text-[40px] font-bold ">
								Carnegie Light Armed Scone
							</h3>
							<p className="py-6">
								Retro open basket design wall light in a black finish, featuring
								an inner clear glass cylinder light shade.
							</p>
							<a className="shopBtnL" href="/">
								<button className="shopBtn banner-shadow">SHOP NOW</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerContent;
