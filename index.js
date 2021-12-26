"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = require("lodash.merge");
const xmlbuilder = require("xmlbuilder2");
const core = require("@actions/core");
const yaml = require("js-yaml");
const model = require("./model");
const fs = require("fs");
const path = require("path");
const os = require("os");
const default_reposetories = {
    central: {
        url: 'https://repo1.maven.org/maven2'
    }
};
const default_servers = {
    github: {
        username: '${env.GITHUB_ACTOR}',
        password: '${env.GITHUB_TOKEN}'
    }
};
async function run() {
    const doc = model.initiateDocument();
    const profile = core.getInput('profile', { required: false }) || 'github';
    doc.settings.activeProfiles.activeProfile.push(profile);
    doc.settings.profiles.profile.id = profile;
    const repositories = merge(default_reposetories, yaml.load(core.getInput('repositories', { required: false })) || {});
    for (const [id, value] of Object.entries(repositories)) {
        doc.settings.profiles.profile.repositories.repository.push({ id, ...value });
    }
    const servers = merge(default_servers, yaml.load(core.getInput('servers', { required: false })) || {});
    for (const [id, value] of Object.entries(servers)) {
        doc.settings.servers['server'].push({ id, ...value });
    }
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`;
    fs.mkdirSync(path.dirname(path_location), { recursive: true });
    fs.writeFileSync(path_location, xmlbuilder.create(doc).end({ prettyPrint: true }));
}
run();
