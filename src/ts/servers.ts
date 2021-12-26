import { Server } from './model'

export const defaults: { [key: string]: Server } = {
    github: {
        username: '${env.GITHUB_ACTOR}',
        password: '${env.GITHUB_TOKEN}'
    }
}