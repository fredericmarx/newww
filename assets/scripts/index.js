window.$ = require("jquery");
window.github = require("./github")();
window.star = require("./star")();

require("./hiring");
require("./npm-expansions");
require("./email-obfuscate")();
require("./payments")();
require("./pretty-numbers")();
require("./private-npm-beta")();
require('./user-content')();
require("./tooltips")();
require("./what-npm-is-for")();
require("./billing")();
require("./billing-cancel")();
require("./date-formatting")();
require("./keyboard-shortcuts")();
require("./add-active-class-to-links")();
require("./autoselect-inputs")();
require("./buy-enterprise-license")();