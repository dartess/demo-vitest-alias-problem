import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			react: "react-18",
			"react-dom": "react-dom-18",
		},
	},
	test: {
		deps: {
			// inline: true,
			// inline: [/react/],
			// registerNodeLoader: true
		}
	}
});
