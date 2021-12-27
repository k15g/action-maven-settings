import { RepositoryIndex } from './model'

// https://mvnrepository.com/repos

export const defaults: RepositoryIndex = {
    central: {
        url: 'https://repo1.maven.org/maven2',
    },
}

export const library: RepositoryIndex = {

    // GitHub
    github: {
        url: 'https://maven.pkg.github.com/${env.GITHUB_REPOSITORY}',
        snapshots: {
            enabled: true
        }
    },

    // Sonatype Repository
    sonatype: {
        name: 'Sonatype Repository',
        url: 'https://oss.sonatype.org/content/repositories/releases/',
    },

    // String Maven repositories
    'spring-releases': {
        name: 'Spring Releases',
        url: 'https://repo.spring.io/release',
        snapshots: {
            enabled: false,
        },
    },
    'spring-snapshots': {
        name: 'Spring Snapshots',
        url: 'https://repo.spring.io/snapshot',
        releases: {
            enabled: false,
        },
        snapshots: {
            enabled: true,
        },
    },
}