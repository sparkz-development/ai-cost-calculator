"use strict";
/**
 * Common Result type for safe operations across the codebase
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = isError;
exports.isSuccess = isSuccess;
exports.unwrap = unwrap;
exports.unwrapAsync = unwrapAsync;
exports.unwrapList = unwrapList;
exports.ok = ok;
exports.err = err;
exports.resultMap = resultMap;
exports.map = map;
exports.promiseResultMap = promiseResultMap;
exports.resultsAll = resultsAll;
function isError(result) {
    return result.error !== null;
}
function isSuccess(result) {
    return result.error === null;
}
function unwrap(result) {
    if (isError(result)) {
        throw new Error(JSON.stringify(result.error));
    }
    return result.data;
}
async function unwrapAsync(result) {
    return unwrap(await result);
}
function unwrapList(results) {
    return results.map((result) => unwrap(result));
}
function ok(data) {
    return { data, error: null };
}
function err(error) {
    return { data: null, error };
}
function resultMap(result, f) {
    if (isError(result)) {
        return result;
    }
    return { data: f(result.data), error: null };
}
function map(result, mapFn) {
    if (result.error === null) {
        return ok(mapFn(result.data));
    }
    return err(result.error);
}
function promiseResultMap(result, f) {
    if (isError(result)) {
        return Promise.resolve(result);
    }
    return f(result.data).then((data) => ok(data));
}
function resultsAll(results) {
    const data = [];
    for (const r of results) {
        if (r.error !== null) {
            return err(r.error);
        }
        data.push(r.data);
    }
    return ok(data);
}
