"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
exports.defaults = {
    github: {
        username: '${env.GITHUB_ACTOR}',
        password: '${env.GITHUB_TOKEN}',
    }
};
