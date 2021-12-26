"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xmlbuilder2_1 = require("xmlbuilder2");
const core = require("@actions/core");
const yaml = require("js-yaml");
const merge = require("lodash.merge");
const model_1 = require("./model");
const fs = require("fs");
const path = require("path");
var default_reposetories = {
    central: {
        url: 'https://repo1.maven.org/maven2'
    }
};
const doc = (0, model_1.initiateDocument)();
async function run() {
    const profile = core.getInput('profile', { required: false }) || 'github';
    doc.settings.activeProfiles.activeProfile.push(profile);
    doc.settings.profiles.profile.id = profile;
    const repositories = merge(default_reposetories, yaml.load(core.getInput('repositories', { required: false })) || {});
    for (const [id, value] of Object.entries(repositories)) {
        doc.settings.profiles.profile.repositories.repository.push({ id, ...value });
    }
    const servers = yaml.load(core.getInput('servers', { required: false })) || {};
    for (const [id, value] of Object.entries(servers)) {
        doc.settings.servers['server'].push({ id, ...value });
    }
    const path_location = core.getInput('path', { required: false }) || '.m2/settings.xml';
    fs.mkdirSync(path.dirname(path_location), { recursive: true });
    fs.writeFileSync(path_location, (0, xmlbuilder2_1.create)(doc).end({ prettyPrint: true }));
}
run();
