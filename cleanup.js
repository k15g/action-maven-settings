"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const fs = require("fs");
const os = require("os");
const path = require("path");
async function run() {
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`;
    fs.rmSync(path.dirname(path_location), { recursive: true, force: true });
}
run();
