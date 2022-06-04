import React, { useEffect } from "react";

export default function Preloader() {
	useEffect(() => {
		return () => {
			setTimeout(() => {
				let loader = document.querySelector(".pre-loader");
				if (loader) loader.remove();
			}, 500);
		};
	}, []);

	return (
		<div className="pre-loader" id="pre-loader">
			<img src="./images/pre-loader.gif" alt="pre" />
		</div>
	);
}
