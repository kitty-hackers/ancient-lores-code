import React, { VFC } from "react";
import classNames from "classnames/bind";
import styles from "./Link.module.less";

type TProps = {
	caption: string;
	to: string;
	type?: string;
};

const cx = classNames.bind(styles);
const className = "link";

/** Компонент ссылки */
export const Link: VFC<TProps> = (props) => {
	const { caption, type, to } = props;

	const classnames = cx({
		[className]: true,
		[`${className}--${type?.toLowerCase()}`]: type ?? false,
	});

	return (
		<a className={classnames} href={to} rel="noopener noreferrer" target="_blank">
			{caption}
		</a>
	);
};
