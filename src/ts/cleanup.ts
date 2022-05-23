import * as core from '@actions/core'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

async function run() {
    // Delete settings file
    const path_location = core.getInput('path', { required: false }) || `${os.homedir}/.m2/settings.xml`
    // fs.unlinkSync(path_location)

    // Delete folder
    fs.rmSync(path.dirname(path_location), { recursive: true, force: true });
}

run()