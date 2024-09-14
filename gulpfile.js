/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */
uswds.paths.src.projectSass = "./sass/custom";
// uswds.paths.src.theme = "./sass/theme";

uswds.paths.dist.css = "./dist/css";
uswds.paths.dist.theme = "./sass/theme";
uswds.paths.dist.js = "./assets/js";
uswds.paths.dist.fonts = "./dist/fonts";
uswds.paths.dist.img = "./dist/img";

/**
 * Exports
 * Add as many as you need
 */

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.update = uswds.updateUswds;
exports.default = uswds.watch;
exports.copyAll = uswds.copyAll;
