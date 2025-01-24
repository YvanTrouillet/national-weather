import "./Temp.scss";

export default function Temp() {
	return (
		<div className="Temp">
			<div className="Temp__number">
				<h2>20°C</h2>
				<h3>17°C</h3>
			</div>
			<div className="Temp__wind">
				<h3>9.8%</h3>
				<p>Vent : 6km/h</p>
			</div>
		</div>
	);
}
