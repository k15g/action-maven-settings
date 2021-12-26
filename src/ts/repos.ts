import { Repository } from './model'

// https://mvnrepository.com/repos

export const defaults: { [key: string]: Repository } = {
    central: {
        url: 'https://repo1.maven.org/maven2'
    }
}

export const library: { [key: string]: Repository } = {

    // String Maven repositories
    'spring-releases': {
        name: 'Spring Releases',
        url: 'https://repo.spring.io/release',
        snapshots: {
            enabled: false
        }
    },
    'spring-snapshots': {
        name: 'Spring Snapshots',
        url: 'https://repo.spring.io/snapshot',
        releases: {
            enabled: false
        },
        snapshots: {
            enabled: true
        }
    },

    // Sonatype Repository
    sonatype: {
        name: 'Sonatype Repository',
        url: 'https://oss.sonatype.org/content/repositories/releases/',
    },
}