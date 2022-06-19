import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "./projects.scss";
SwiperCore.use([Autoplay]);

export default function Projects() {
	const [breakpoints] = useState({
		0: { slidesPerView: 1 },
		350: { slidesPerView: 2 },
		520: { slidesPerView: 3 },
		792: { slidesPerView: 4 },
		1250: { slidesPerView: 5 },
	});
	let delay = 0;

	const projects = {
		html_css_js: [
			{
				img: "Halloween.ico",
				title: "Halloween",
				link: "Halloween",
			},
			{
				img: "Foods.ico",
				title: "Foods Restaurant",
				link: "food",
			},
			{
				img: "Education.ico",
				title: "Education",
				link: "Education",
			},
			{
				img: "Christmas.ico",
				title: "Christmas",
				link: "Christmas",
			},
			{
				img: "Porftolio.ico",
				title: "Porftolio",
				link: "portfolio",
			},
			{
				img: "NovaHosiptal.ico",
				title: "Nova Hosiptal",
				link: "Nova Hospital",
			},
			{
				img: "Coffee.ico",
				title: "Coffee",
				link: "coffee",
			},
			{
				img: "Eduford.ico",
				title: "Eduford Collegos",
				link: "Eduford",
			},
		],

		gulp_api: [
			{
				img: "Grocery.ico",
				title: "Grocery",
				link: "grocery",
			},
			{
				img: "Travel.ico",
				title: "Online booking",
				link: "travel",
			},
			{
				img: "Vegetarian.ico",
				title: "Market",
				link: "Vegeterian",
			},
			{
				img: "Books.ico",
				title: "Books Shop",
				link: "books",
			},
		],

		pug_scss_bootstrap: [
			{
				img: "Quarter.ico",
				title: "Quarter",
				link: "Quarter/HTML/Pages",
			},
			{
				img: "Fashion1.ico",
				title: "Fashion Store",
				link: "Fashion1",
			},
			{
				img: "Fitness.ico",
				title: "Fitness",
				link: "fitness",
			},
			{
				img: "Seo.ico",
				title: "Seo Website",
				link: "SEO/HTML",
			},
			{
				img: "Journy.ico",
				title: "Journy",
				link: "Journey",
			},
			{
				img: "Cars.ico",
				title: "Cars",
				link: "cars",
			},
			{
				img: "Music.ico",
				title: "Music Player",
				link: "music gallery",
			},
			{
				img: "Burber.ico",
				title: "Burber Shop",
				link: "Barber_Shop",
			},
			{
				img: "Fashion2.ico",
				title: "Fashion Store",
				link: "Fashion2",
			},
			{
				img: "Youtube.ico",
				title: "Youtube",
				link: "Youtube/html",
			},
			{
				img: "Pet.ico",
				title: "Pet Shop",
				link: "pet shop",
			},
		],

		react: [
			{
				img: "Ecommerce.ico",
				title: "E-Commerce",
				link: "http://www.electronicsmarket.tk/",
			},
			{
				img: "dashboard.webp",
				title: "Dashboard",
				link: "http://admin-dashboard.tk/",
			},
			{
				img: "film-line.svg",
				title: "FilmLane",
				link: "http://filme-line.ml/",
			},
			{
				img: "Ecommerce.ico",
				title: "E-Commerce",
				link: "http://www.electronicsmarket.tk/",
			},
			{
				img: "dashboard.webp",
				title: "Dashboard",
				link: "http://admin-dashboard.tk/",
			},
			{
				img: "film-line.svg",
				title: "FilmLane",
				link: "http://filme-line.ml/",
			},
			{
				img: "Ecommerce.ico",
				title: "E-Commerce",
				link: "http://www.electronicsmarket.tk/",
			},
			{
				img: "dashboard.webp",
				title: "Dashboard",
				link: "http://admin-dashboard.tk/",
			},
			{
				img: "film-line.svg",
				title: "FilmLane",
				link: "http://filme-line.ml/",
			},
		],
	};

	let renderLocalProjects = (objData) => {
		if (delay < 5) delay += 1;
		else delay = 1;

		return (
			<Swiper
				modules={[Navigation, Pagination]}
				loop={true}
				spaceBetween={20}
				grabCursor={true}
				navigation
				pagination={{ clickable: true }}
				breakpoints={breakpoints}
				autoplay={{ delay: 2000, disableOnInteraction: false }}>
				{objData.map((item, i) => {
					delay < 5 ? (delay += 1) : (delay = 1);
					return (
						<SwiperSlide className="project-box" key={i}>
							<div className="project-content">
								<img className="content-img" src={`./images/${item.img}`} alt={item.img} />
								<h3 className="content-title">{item.title}</h3>
							</div>
							<div className="project-overlay">
								<a className="mybtn" href={`./projects/${item.link}/index.html`} target="_blank" rel="noreferrer">
									Visit Site
								</a>
								<div className="overlay"></div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		);
	};

	let renderRemoteProjects = (objData) => {
		if (delay < 5) delay += 1;
		else delay = 1;

		return (
			<Swiper
				modules={[Navigation, Pagination]}
				loop={true}
				spaceBetween={20}
				grabCursor={true}
				navigation
				pagination={{ clickable: true }}
				breakpoints={breakpoints}
				autoplay={{ delay: 2000, disableOnInteraction: false }}>
				{objData.map((item, i) => {
					delay < 5 ? (delay += 1) : (delay = 1);
					return (
						<SwiperSlide className="project-box" key={i}>
							<div className="project-content">
								<img className="content-img" src={`./images/${item.img}`} alt={item.img} />
								<h3 className="content-title">{item.title}</h3>
							</div>
							<div className="project-overlay">
								<a className="mybtn" href={item.link} target="_blank" rel="noreferrer">
									Visit Site
								</a>
								<div className="overlay"></div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		);
	};

	return (
		<section className="projects-section" id="projects-section">
			<div className="light-title" data-aos="fade-down" data-aos-delay="150">
				<h1>My Projects</h1>
				<span>Some Of My Previous Work</span>
			</div>

			<div className="projects-category">
				<div className="html-css-js" data-aos="fade-right" data-aos-delay="150">
					<h3 className="category-title">HTML, Css, Javascript</h3>
					{renderLocalProjects(projects.html_css_js)}
				</div>
				<div className="pug-bootstrap-scss" data-aos="fade-right" data-aos-delay="250">
					<h3 className="category-title">pug, bootstrap, scss</h3>
					{renderLocalProjects(projects.pug_scss_bootstrap)}
				</div>
				<div className="gulp-api" data-aos="fade-right" data-aos-delay="350">
					<h3 className="category-title">gulp, Api</h3>
					{renderLocalProjects(projects.gulp_api)}
				</div>
				<div className="react.js" data-aos="fade-right" data-aos-delay="450">
					<h3 className="category-title">React.js</h3>
					{renderRemoteProjects(projects.react)}
				</div>
			</div>
		</section>
	);
}
