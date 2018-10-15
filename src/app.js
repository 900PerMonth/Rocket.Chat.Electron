import { remote } from 'electron';
import './branding/branding.js';

const { app } = remote;

Bugsnag.metaData = {
	// platformId: app.process.platform,
	// platformArch: app.process.arch,
	// electronVersion: app.process.versions.electron,
	version: app.getVersion(),
	// platformVersion: cordova.platformVersion
	// build: appInfo.build
};

Bugsnag.appVersion = app.getVersion();

window.$ = window.jQuery = require('./public/vendor/jquery-3.1.1');

export { default as main } from './scripts/start';
