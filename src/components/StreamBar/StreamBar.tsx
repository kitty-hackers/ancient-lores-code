import React, { VFC } from "react";
import classNames from "classnames/bind";
import { LinksList, TListEntry } from "../LinksList";
import { Link } from "../Link";
import { streamsLinksList } from "./constants/streamsLinksList";
import streamBarStyles from "./styles/StreamBar.module.less";
import streamLinkStyles from "./styles/StreamLink.module.less";

const cx = classNames.bind({
	...streamBarStyles,
	...streamLinkStyles,
});

const STREAM_BAR_CLASSNAME = "stream-bar";
const STREAM_LINK_CLASSNAME = "stream-link";

export const StreamBar: VFC = () => {
	const itemRender = (item: TListEntry) => {
		const classNames = {
			[STREAM_LINK_CLASSNAME]: true,
			[`${STREAM_LINK_CLASSNAME}--${item.key?.toLowerCase()}`]: item.key ?? false,
		};

		return <Link className={cx(classNames)} {...item} />;
	};

	return (
		<div className={cx(STREAM_BAR_CLASSNAME)}>
			<LinksList data={streamsLinksList} itemRender={itemRender} />
		</div>
	);
};
