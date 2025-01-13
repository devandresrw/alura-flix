"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getFullImagePath;
function getFullImagePath(path) {
    var baseUrl = 'https://image.tmdb.org/t/p/w500';
    return "".concat(baseUrl).concat(path);
}
