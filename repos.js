"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.library = exports.defaults = void 0;
exports.defaults = {
    central: {
        url: 'https://repo1.maven.org/maven2',
    },
};
exports.library = {
    github: {
        url: 'https://maven.pkg.github.com/${env.GITHUB_REPOSITORY}',
        snapshots: {
            enabled: true
        }
    },
    sonatype: {
        name: 'Sonatype Repository',
        url: 'https://oss.sonatype.org/content/repositories/releases/',
    },
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
};
