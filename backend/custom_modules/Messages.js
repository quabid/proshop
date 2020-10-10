// @ts-nocheck

const chalk = require('chalk');

export const mStatus = (msg = '') => chalk.rgb(75, 75, 255).bold(`${msg}`);
export const mError = (msg = '') => chalk.rgb(255, 40, 40).bold(`${msg}`);
export const mSuccess = (msg = '') => chalk.rgb(44, 255, 44).bold(`${msg}`);
export const mWarning = (msg = '') => chalk.rgb(255, 255, 44).bold(`${msg}`);
export const mInformation = (msg = '') =>
  chalk.rgb(185, 220, 250).bold(`${msg}`);
export const mFYI = (msg = '') => chalk.rgb(255, 194, 3).bold(`${msg}`);
