import React, { VFC } from "react";
import classNames from "classnames/bind";
import { SocialsBar } from "../../../../components/SocialsBar";
import styles from "./Footer.module.less";

const cx = classNames.bind(styles);
const className = "footer";

export const Footer: VFC = () => (
	<footer className={cx(className)}>
		<SocialsBar />
	</footer>
);
