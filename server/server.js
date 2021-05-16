import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import { Provider } from "react-redux";
import App from "../src/App";
import store from "../src/core/redux/store";

const PORT = 3000;

const app = express();

app.use("^/$", (req, res) => {
	fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send("Some error happened");
		}
		return res.send(
			data?.replace(
				`<div id="root"></div>`,
				`<div id="root">${ReactDOMServer.renderToString(
					<Provider store={store}>
						<App />
					</Provider>,
				)}</div>`,
			),
		);
	});
});

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.listen(PORT, () => {
	console.log(`App launched on ${PORT}`);
});
