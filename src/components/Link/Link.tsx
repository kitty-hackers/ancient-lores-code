import { VFC } from "react";
import "./Link.css";

type TProps = {
	caption: string;
	to: string;
};

/** Компонент ссылки */
export const Link: VFC<TProps> = (props) => {
	const { caption, to } = props;

	return (
		<a className="app-link" href={to} rel="noopener noreferrer" target="_blank">
			{caption}
		</a>
	);
};
