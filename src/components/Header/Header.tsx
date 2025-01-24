import Search from "../Search/Search";
import Temp from "../Temp/Temp";
import "./Header.scss";

export default function Header() {
	return (
		<header>
			<Search />
			<Temp />
			<h2>Header</h2>
		</header>
	);
}
