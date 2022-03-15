import React, { VFC } from "react";
import classNames from "classnames/bind";
import { StreamBar } from "../../../../components/StreamBar";
import styles from "./Content.module.less";

const cx = classNames.bind(styles);
const className = "content";

export const Content: VFC = () => (
	<section className={cx(className)} data-testid="appTestId">
		<StreamBar />
	</section>
);
