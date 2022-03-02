import React, { VFC } from "react";
import classnames from "classnames/bind";
import { Link } from "../Link";
import styles from "./LinksList.module.less";

type TListEntry = { caption: string; key: string; to: string };

type TProps = {
	data: TListEntry[];
};

const cx = classnames.bind(styles);
const className = "links-list";

export const LinksList: VFC<TProps> = (props) => {
	const { data } = props;

	return (
		<ul className={cx(className)}>
			{data.map((item) => {
				const { key, ...linkProps } = item;

				const classNames = cx(`${className}__item`);

				return (
					<li className={classNames} key={key}>
						<Link type={key} {...linkProps} />
					</li>
				);
			})}
		</ul>
	);
};
