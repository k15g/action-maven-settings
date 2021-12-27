import { ServerIndex } from './model'

export const defaults: ServerIndex = {
    github: {
        username: '${env.GITHUB_ACTOR}',
        password: '${env.GITHUB_TOKEN}',
    }
}