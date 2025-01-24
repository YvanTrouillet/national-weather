import "./Search.scss";
import iconSearch from "../../assets/icon_search.svg";

export default function Search() {
	return (
		<div className="search">
			<form action="">
				<input type="text" name="search" />
				<button type="submit">
					<img src={iconSearch} alt="Search" />
				</button>
			</form>
		</div>
	);
}
