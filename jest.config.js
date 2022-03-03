module.exports = {
	testEnvironment: "jsdom",
	transformIgnorePatterns: [
		"/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx|ts|tsx)$",
	],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less)$": "identity-obj-proxy"
	}
};
