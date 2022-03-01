import { VFC } from "react";
import classNames from "classnames";
import { Link } from "../Link";
import "./LinksList.css";

type TListEntry = { caption: string; key: string; to: string };

type TProps = {
	data: TListEntry[];
};

export const LinksList: VFC<TProps> = (props) => {
	const { data } = props;

	return (
		<ul className="links-list">
			{data.map((item) => {
				const { key, ...linkProps } = item;

				const className = classNames(["link-list__item", `link-list__item--${key.toLowerCase()}`]);

				return (
					<li className={className} key={key}>
						<Link {...linkProps} />
					</li>
				);
			})}
		</ul>
	);
};
