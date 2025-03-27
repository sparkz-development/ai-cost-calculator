"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperBuilder = void 0;
const core_1 = require("./core");
/**
 * Simplified builder class for creating path mappers with a fluent interface
 */
class MapperBuilder {
    /**
     * Create a new mapper builder
     * @param name The name of the mapper
     */
    constructor(name) {
        this.mappings = [];
        this.mapperName = name;
    }
    /**
     * Map a path from external to internal
     */
    map(externalPath, internalPath) {
        this.mappings.push({
            external: externalPath,
            internal: internalPath,
        });
        return this;
    }
    /**
     * Map a path from external to internal with a transformation
     */
    mapWithTransform(externalPath, internalPath, toInternal, toExternal, description) {
        this.mappings.push({
            external: externalPath,
            internal: internalPath,
            transform: {
                toInternal,
                toExternal,
            },
            description,
        });
        return this;
    }
    /**
     * Builds and returns the mapper
     */
    build() {
        return new core_1.PathMapper(this.mapperName, this.mappings);
    }
}
exports.MapperBuilder = MapperBuilder;
