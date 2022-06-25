// React
import React from "react";
import "./scss/style.scss";

// AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

// Swiper Style Library
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

// Pages
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

// layout
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Sidebar from "./layout/sidebar/sidebar";
import Scoller from "./layout/scroller";
import Preloader from "./layout/preloader";

Aos.init({ delay: 150, offset: 0, mirror: true });

function App() {
	setTimeout(() => {
		const LiveChat = document.querySelectorAll(".Window__Component-sc-1wwhwms-0.bBrlUg div");
		LiveChat.forEach((item) => {
			if (item.style.display === "flex") item.style.display = "none";
		});
	}, 10);

	return (
		<>
			{/* =========================================== Header ============================================= */}
			<Header />

			{/* =========================================== Sidebar ============================================ */}
			<Sidebar />

			{/* =========================================== Home =============================================== */}
			<Home />

			{/* =========================================== About ============================================== */}
			<About />

			{/* =========================================== Services =========================================== */}
			<Services />

			{/* =========================================== Skills ============================================= */}
			<Skills />

			{/* =========================================== Projects =========================================== */}
			<Projects />

			{/* =========================================== Contact ============================================ */}
			<Contact />

			{/* =========================================== Footer ============================================= */}
			<Footer />

			{/* =========================================== Scoller ============================================ */}
			<Scoller />

			{/* =========================================== Pre-loader ========================================= */}
			<Preloader />
		</>
	);
}

export default App;
