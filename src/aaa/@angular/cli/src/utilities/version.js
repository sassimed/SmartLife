"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
// Same structure as used in framework packages
class Version {
    constructor(full) {
        this.full = full;
        const [major, minor, patch] = full.split('-', 1)[0].split('.', 3);
        this.major = major;
        this.minor = minor;
        this.patch = patch;
    }
}
// TODO(bazel): Convert this to use build-time version stamping after flipping the build script to use bazel
// export const VERSION = new Version('15.2.4');
exports.VERSION = new Version(JSON.parse((0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '../../package.json'), 'utf-8')).version);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvY2xpL3NyYy91dGlsaXRpZXMvdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFFSCwyQkFBa0M7QUFDbEMsK0JBQStCO0FBRS9CLCtDQUErQztBQUMvQyxNQUFNLE9BQU87SUFLWCxZQUE0QixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUN0QyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQUVELDRHQUE0RztBQUM1RywyREFBMkQ7QUFDOUMsUUFBQSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBRTlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBQSxpQkFBWSxFQUFDLElBQUEsY0FBTyxFQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUczRSxDQUFDLE9BQU8sQ0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuLy8gU2FtZSBzdHJ1Y3R1cmUgYXMgdXNlZCBpbiBmcmFtZXdvcmsgcGFja2FnZXNcbmNsYXNzIFZlcnNpb24ge1xuICBwdWJsaWMgcmVhZG9ubHkgbWFqb3I6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IG1pbm9yOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBwYXRjaDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBmdWxsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBbbWFqb3IsIG1pbm9yLCBwYXRjaF0gPSBmdWxsLnNwbGl0KCctJywgMSlbMF0uc3BsaXQoJy4nLCAzKTtcbiAgICB0aGlzLm1ham9yID0gbWFqb3I7XG4gICAgdGhpcy5taW5vciA9IG1pbm9yO1xuICAgIHRoaXMucGF0Y2ggPSBwYXRjaDtcbiAgfVxufVxuXG4vLyBUT0RPKGJhemVsKTogQ29udmVydCB0aGlzIHRvIHVzZSBidWlsZC10aW1lIHZlcnNpb24gc3RhbXBpbmcgYWZ0ZXIgZmxpcHBpbmcgdGhlIGJ1aWxkIHNjcmlwdCB0byB1c2UgYmF6ZWxcbi8vIGV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzAuMC4wLVBMQUNFSE9MREVSJyk7XG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IG5ldyBWZXJzaW9uKFxuICAoXG4gICAgSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlLmpzb24nKSwgJ3V0Zi04JykpIGFzIHtcbiAgICAgIHZlcnNpb246IHN0cmluZztcbiAgICB9XG4gICkudmVyc2lvbixcbik7XG4iXX0=