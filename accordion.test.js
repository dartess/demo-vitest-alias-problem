import * as React from "react"; // console.log('version', React.version);
import * as ReactDOM from "react-dom"; // console.log('version', ReactDOM.version);
import { describe, expect, it } from "vitest";

// console.log('version', ReactDOM.version);
console.log('version', React.version, ReactDOM.version);

describe("test", () => {
	it("test", () => {
		expect(0).toEqual(0);
	});
});
