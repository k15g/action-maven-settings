"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const fs = require("fs");
const os = require("os");
async function run() {
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`;
    fs.unlinkSync(path_location);
}
run();
