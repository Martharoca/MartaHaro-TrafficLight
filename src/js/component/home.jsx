
import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
// las llaves <>  al principio de la clase "traffic-top" me aparecen automaticamente cuando le digo a codespace que me lo ponga formato jsx
	return (
		<><div className="traffic-top"></div>
		<div className="traffic-light">
			<div onClick={() => setColor("red")}
				className={"red" + (color === "red" ? " glow" : "")}></div>
			<div onClick={() => setColor("yellow")}
				className={"yellow" + (color === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setColor("green")}
				className={"green" + (color === "green" ? " glow" : "")}></div>
		</div></>
	);
};

export default Home;