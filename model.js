"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateDocument = void 0;
function initiateDocument() {
    return {
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
    };
}
exports.initiateDocument = initiateDocument;
