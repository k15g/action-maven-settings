import { create } from 'xmlbuilder2'
import * as core from '@actions/core'
import * as yaml from 'js-yaml'
import merge = require('lodash.merge')
import { initiateDocument } from './model'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

// Default repositories
const default_reposetories = {
    central: {
        url: 'https://repo1.maven.org/maven2'
    }
}

// Default servers
const default_servers = {
    github: {
        username: '${env.GITHUB_ACTOR}',
        password: '${env.GITHUB_TOKEN}'
    }
}

async function run() {
    // Initiate document
    const doc = initiateDocument()

    // Load profile identifier
    const profile = core.getInput('profile', { required: false }) || 'github'
    doc.settings.activeProfiles.activeProfile.push(profile)
    doc.settings.profiles.profile.id = profile

    // Load repositories
    const repositories = merge(default_reposetories, yaml.load(core.getInput('repositories', { required: false })) || {})

    for (const [id, value] of Object.entries(repositories)) {
        doc.settings.profiles.profile.repositories.repository.push({ id, ...value })
    }

    // Load servers
    const servers = merge(default_servers, yaml.load(core.getInput('servers', { required: false })) || {})

    for (const [id, value] of Object.entries(servers)) {
        doc.settings.servers['server'].push({ id, ...value })
    }

    // Write to settings file
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`
    console.log(path_location)
    fs.mkdirSync(path.dirname(path_location), { recursive: true })
    fs.writeFileSync(path_location, create(doc).end({ prettyPrint: true }))
}

run()