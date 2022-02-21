import React, { VFC } from 'react';

type TProps = {
	caption: string;
	to: string;
};

/** Компонент ссылки */
export const Link: VFC<TProps> = (props) => {
	const {caption, to} = props;
	
	return (
		<a
			className="App-link"
			href={to}
			target="_blank"
			rel="noopener noreferrer"
		>
			{caption}
		</a>
	);
};