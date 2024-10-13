# Run Lighthouse from terminal for Multiple URLS

This will run lighthouse audit for multiple urls specified in the `listOfUrls.json` file and will run then in parallel for faster speeds and will open the results for both mobile and desktop for each url. For most accurate scores limit urls to 3 as more the scores will start to differ.

## Sources:

-   <a href="https://medium.com/@iamasamanthaa/the-magic-of-running-multiple-lighthouse-performance-tests-on-macos-4d22ae56621c">Medium Article</a>
-   <a href="https://www.npmjs.com/package/lighthouse">NPM Lighthouse Package</a>

## 1. Install Lighthouse

`sudo npm install -g lighthouse`

Note: If need to uninstall lighthouse

`sudo npm uninstall -g lighthouse`

## 2. Update List of URLS in JSON file

## 3. Can modify the config files `lighthouse-mobile-config.json` and `lighthouse-desktop-config.json`

## 4. Add Executable permissions to file

`chmod a+x ./runLighthouseMultipleUrls.js`

## 5. Run the tests

`./runLighthouseMultipleUrls.js`
