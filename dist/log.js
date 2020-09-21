"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const request = require("request");
class Log {
    constructor(config) {
        this.config = config;
    }
    log(namespace, podName, containerName, stream, done, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const path = `/api/v1/namespaces/${namespace}/pods/${podName}/log`;
            const cluster = this.config.getCurrentCluster();
            if (!cluster) {
                throw new Error('No currently active cluster');
            }
            const url = cluster.server + path;
            const requestOptions = {
                method: 'GET',
                qs: Object.assign({}, options, { container: containerName }),
                uri: url,
            };
            yield this.config.applyToRequest(requestOptions);
            const req = request(requestOptions, (error, response, body) => {
                if (error) {
                    done(error);
                }
                else if (response && response.statusCode !== 200) {
                    done(body);
                }
                else {
                    done(null);
                }
            }).on('response', (response) => {
                if (response.statusCode === 200) {
                    req.pipe(stream);
                }
            });
            return req;
        });
    }
}
exports.Log = Log;
//# sourceMappingURL=log.js.map