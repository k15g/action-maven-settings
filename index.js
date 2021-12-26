"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = require("lodash.merge");
const xmlbuilder = require("xmlbuilder2");
const core = require("@actions/core");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const os = require("os");
const model = require("./model");
const repos = require("./repos");
const servs = require("./servers");
async function run() {
    const doc = model.initiateDocument();
    const profile = core.getInput('profile', { required: false }) || 'github';
    doc.settings.activeProfiles.activeProfile.push(profile);
    doc.settings.profiles.profile.id = profile;
    let repositories = repos.defaults;
    let include_repos = yaml.load(core.getInput('include', { required: false })) || [];
    include_repos.forEach(repo => {
        if (repo in repos.library) {
            repositories[repo] = repos.library[repo];
        }
    });
    repositories = merge(repositories, yaml.load(core.getInput('repositories', { required: false })) || {});
    for (const [id, value] of Object.entries(repositories)) {
        doc.settings.profiles.profile.repositories.repository.push({ id, ...value });
    }
    let servers = servs.defaults;
    servers = merge(servers, yaml.load(core.getInput('servers', { required: false })) || {});
    for (const [id, value] of Object.entries(servers)) {
        doc.settings.servers['server'].push({ id, ...value });
    }
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`;
    fs.mkdirSync(path.dirname(path_location), { recursive: true });
    fs.writeFileSync(path_location, xmlbuilder.create(doc).end({ prettyPrint: true }));
}
run();
