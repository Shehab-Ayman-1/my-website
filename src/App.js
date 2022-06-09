import React from "react";

// AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

// Swiper Style Library
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

// Pages
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

// Addition
import Scoller from "./components/scroller";
import Preloader from "./components/preloader";

Aos.init({ delay: 150, offset: 0, mirror: true });

function App() {
	setTimeout(() => {
		const LiveChat = document.querySelectorAll(".Window__Component-sc-1wwhwms-0.bBrlUg div");
		LiveChat.forEach((item) => {
			if (item.style.display == "flex") item.style.display = "none";
		});
	}, 10);

	return (
		<>
			{/* =========================================== Header =========================================== */}
			<Header />

			{/* ============================================ Home ============================================ */}
			<Home />

			{/* =========================================== About ============================================ */}
			<About />

			{/* ========================================= Services =========================================== */}
			<Services />

			{/* ========================================== Skills ============================================ */}
			<Skills />

			{/* ========================================= Projects =========================================== */}
			<Projects />

			{/* ========================================= Contact ============================================ */}
			<Contact />

			{/* ========================================= Footer ============================================= */}
			<Footer />

			{/* ========================================= Scoller ============================================ */}
			<Scoller />

			{/* ========================================= Pre-loader ========================================= */}
			<Preloader />
		</>
	);
}

export default App;
