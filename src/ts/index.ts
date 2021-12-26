import merge = require('lodash.merge')
import * as xmlbuilder from 'xmlbuilder2'
import * as core from '@actions/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import * as model from './model'
import * as repos from './repos'
import * as servs from './servers'

async function run() {
    // Initiate document
    const doc = model.initiateDocument()

    // Load profile identifier
    const profile = core.getInput('profile', { required: false }) || 'github'
    doc.settings.activeProfiles.activeProfile.push(profile)
    doc.settings.profiles.profile.id = profile


    // REPOSITORIES
    let repositories = repos.defaults

    // Include additional known repos
    let include_repos = yaml.load(core.getInput('include', { required: false })) as string[] || []

    include_repos.forEach(repo => {
        if (repo in repos.library) {
            repositories[repo] = repos.library[repo]
        }        
    });

    // Load repositories from input
    repositories = merge(repositories, yaml.load(core.getInput('repositories', { required: false })) || {})

    for (const [id, value] of Object.entries(repositories)) {
        doc.settings.profiles.profile.repositories.repository.push({ id, ...value })
    }


    // SERVERS
    let servers = servs.defaults

    // Load servers from input
    servers = merge(servers, yaml.load(core.getInput('servers', { required: false })) || {})

    for (const [id, value] of Object.entries(servers)) {
        doc.settings.servers['server'].push({ id, ...value })
    }


    // Write to settings file
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`
    fs.mkdirSync(path.dirname(path_location), { recursive: true })
    fs.writeFileSync(path_location, xmlbuilder.create(doc).end({ prettyPrint: true }))
}

run()