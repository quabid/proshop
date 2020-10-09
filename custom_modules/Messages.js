// @ts-nocheck

const chalk = require("chalk");

exports.mStatus = (msg = "") => chalk.rgb(75, 75, 255).bold(`${msg}`);
exports.mError = (msg = "") => chalk.rgb(255, 40, 40).bold(`${msg}`);
exports.mSuccess = (msg = "") => chalk.rgb(44, 255, 44).bold(`${msg}`);
exports.mWarning = (msg = "") => chalk.rgb(255, 255, 44).bold(`${msg}`);
exports.mInformation = (msg = "") => chalk.rgb(185, 220, 250).bold(`${msg}`);
exports.mFYI = (msg = "") => chalk.rgb(255, 194, 3).bold(`${msg}`);
