#!/usr/bin/env node
const { exec } = require('child_process');
let urls = require('./listOfUrls.json'); // The file where your list of urls lives

const runLighthouse = (url, configPath, deviceType, index) => {
	return new Promise((resolve, reject) => {
		const outputFileName = `${url.replace(/https?:\/\//, '').replace(/\//g, '_')}-${deviceType}.html`;
		console.log(`Running lighthouse test ${index + 1} (${deviceType}) - ${url}`);
		exec(`lighthouse ${url} --config-path=${configPath} --view --chrome-flags=--headless --output-path=./reports/${outputFileName} `, (err, stdout, stderr) => {
			if (err) {
				console.log(`${deviceType} lighthouse test ${index + 1} failed`);
				reject(err);
			} else {
				console.log(`Finished running ${deviceType} lighthouse test ${index + 1}`);
				resolve(stdout);
			}
		});
	});
};

(async () => {
	let tasks = [];
	let runs = 0;

	for (const url of urls) {
		tasks.push(runLighthouse(url, './lighthouse-mobile-config.json', 'Mobile', runs));
		tasks.push(runLighthouse(url, './lighthouse-desktop-config.json', 'Desktop', runs));
		runs++;
	}

	// Run all tasks in parallel
	try {
		await Promise.all(tasks);
		console.log('All finished');
	} catch (err) {
		console.error('One or more tests failed', err);
	}
})();
