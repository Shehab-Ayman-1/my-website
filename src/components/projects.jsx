import React, { useEffect, useState } from "react";

export default function Projects() {
	const projects = [
		{
			id: 1,
			img: "Quarter.ico",
			title: "Quarter",
			link: "https://quarter.io",
		},
		{
			id: 2,
			img: "Halloween.ico",
			title: "Halloween",
			link: "https://quarter.io",
		},
		{
			id: 3,
			img: "Ecommerce.ico",
			title: "E-Commerce",
			link: "https://shehab-ayman.000webhostapp.com",
		},
		{
			id: 4,
			img: "Education.ico",
			title: "Education",
			link: "https://quarter.io",
		},
		{
			id: 5,
			img: "Christmas.ico",
			title: "Christmas",
			link: "https://quarter.io",
		},
		{
			id: 6,
			img: "Porftolio.ico",
			title: "Porftolio",
			link: "https://quarter.io",
		},
		{
			id: 7,
			img: "Journy.ico",
			title: "Journy",
			link: "https://quarter.io",
		},
		{
			id: 8,
			img: "NovaHosiptal.ico",
			title: "Nova Hosiptal",
			link: "https://quarter.io",
		},
		{
			id: 9,
			img: "Seo.ico",
			title: "Seo Website",
			link: "https://quarter.io",
		},
		{
			id: 10,
			img: "Cars.ico",
			title: "Cars",
			link: "https://quarter.io",
		},
		{
			id: 11,
			img: "Fitness.ico",
			title: "Fitness",
			link: "https://quarter.io",
		},
		{
			id: 12,
			img: "Coffee.ico",
			title: "Coffee",
			link: "https://quarter.io",
		},
		{
			id: 13,
			img: "Eduford.ico",
			title: "Eduford Collegos",
			link: "https://quarter.io",
		},
		{
			id: 14,
			img: "Fashion1.ico",
			title: "Fashion Store",
			link: "https://quarter.io",
		},
		{
			id: 15,
			img: "Foods.ico",
			title: "Foods Restaurant",
			link: "https://quarter.io",
		},
		{
			id: 16,
			img: "Grocery.ico",
			title: "Grocery",
			link: "https://quarter.io",
		},
		{
			id: 17,
			img: "Travel2.ico",
			title: "Travil Online Booking",
			link: "https://quarter.io",
		},
		{
			id: 18,
			img: "Vegetarian.ico",
			title: "Vegetarian Restaurant",
			link: "https://quarter.io",
		},
		{
			id: 19,
			img: "Books.ico",
			title: "Books Shop",
			link: "https://quarter.io",
		},
		{
			id: 20,
			img: "Doctors.png",
			title: "Doctors Clinics",
			link: "https://quarter.io",
		},
		{
			id: 21,
			img: "Music.ico",
			title: "Music Player",
			link: "https://quarter.io",
		},
		{
			id: 22,
			img: "Online-Eduford.ico",
			title: "Online Eduford",
			link: "https://quarter.io",
		},
		{
			id: 23,
			img: "Burber.ico",
			title: "Burber Shop",
			link: "https://quarter.io",
		},
		{
			id: 24,
			img: "Fashion2.ico",
			title: "Fashion Store",
			link: "https://quarter.io",
		},
	];

	let delay = 0;
	return (
		<section className="Projects" id="Projects">
			<div className="light-title" data-aos="fade-up" data-aos-delay="150">
				<h1>My Projects</h1>
				<span>Some Of My Previous Work</span>
			</div>

			<div className="projects-catagory">
				{projects.map((item, i) => {
					delay < 5 ? (delay += 1) : (delay = 1);
					return (
						<div className="project-box" data-aos="fade-up" data-aos-delay={`${delay}50`} key={i}>
							<div className="project-content">
								<img className="content-img" src={`./images/${item.img}`} alt={item.img} />
								<h3 className="content-title">{item.title}</h3>
							</div>
							<div className="project-overlay">
								<a href="#" className="mybtn">
									Visit Site
								</a>
								<div className="overlay"></div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
