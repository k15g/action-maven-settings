interface Document {
    settings: Settings
}

interface Settings {
    '@xmlns': string
    '@xmlns:xsi': string
    '@xsi:schemaLocation': string
    activeProfiles: ActiveProfiles
    profiles: Profiles
    servers: Servers
}

interface ActiveProfiles {
    activeProfile: string[]
}

interface Profiles {
    profile: Profile
}

interface Profile {
    id?: string
    repositories: Repositories
}

interface Repositories {
    repository: Repository[]
}

interface Repository {
    id: string
    url: string
    snapshot?: Snapshot
}

interface Snapshot {
    enabled?: boolean
}

interface Servers {
    server: any
}

export function initiateDocument() {
    var doc: Document = {
        settings: {
            '@xmlns': 'http://maven.apache.org/SETTINGS/1.0.0',
            '@xmlns:xsi': "http://www.w3.org/2001/XMLSchema-instance",
            '@xsi:schemaLocation': 'http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd',
            activeProfiles: {
                activeProfile: []
            },
            profiles: {
                profile: {
                    repositories: {
                        repository: []
                    }
                }
            },
            servers: {
                server: []
            }
        }
    }

    return doc
}