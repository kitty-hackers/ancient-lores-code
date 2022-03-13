import React, { VFC } from "react";
import classNames from "classnames/bind";
import styles from "./Link.module.less";

type TProps = {
	caption: string;
	className?: string;
	to: string;
};

const cx = classNames.bind(styles);
const className = "link";

/** Компонент ссылки */
export const Link: VFC<TProps> = (props) => {
	const { caption, className: customClassNames = "", to } = props;

	const classnames: Record<string, boolean> = {
		[className]: true,
		[customClassNames]: true,
	};

	return (
		<a className={cx(classnames)} href={to} rel="noopener noreferrer" target="_blank">
			{caption}
		</a>
	);
};
