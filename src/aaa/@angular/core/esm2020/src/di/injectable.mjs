/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { makeDecorator } from '../util/decorators';
import { compileInjectable } from './jit/injectable';
export { compileInjectable };
/**
 * Injectable decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export const Injectable = makeDecorator('Injectable', undefined, undefined, undefined, (type, meta) => compileInjectable(type, meta));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFDLGFBQWEsRUFBZ0IsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQztBQXNFM0I7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQXdCLGFBQWEsQ0FDeEQsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUM3QyxDQUFDLElBQWUsRUFBRSxJQUFnQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7bWFrZURlY29yYXRvciwgVHlwZURlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHtDbGFzc1NhbnNQcm92aWRlciwgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIsIEV4aXN0aW5nU2Fuc1Byb3ZpZGVyLCBGYWN0b3J5U2Fuc1Byb3ZpZGVyLCBTdGF0aWNDbGFzc1NhbnNQcm92aWRlciwgVmFsdWVTYW5zUHJvdmlkZXJ9IGZyb20gJy4vaW50ZXJmYWNlL3Byb3ZpZGVyJztcbmltcG9ydCB7Y29tcGlsZUluamVjdGFibGV9IGZyb20gJy4vaml0L2luamVjdGFibGUnO1xuXG5leHBvcnQge2NvbXBpbGVJbmplY3RhYmxlfTtcblxuLyoqXG4gKiBJbmplY3RhYmxlIHByb3ZpZGVycyB1c2VkIGluIGBASW5qZWN0YWJsZWAgZGVjb3JhdG9yLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgSW5qZWN0YWJsZVByb3ZpZGVyID0gVmFsdWVTYW5zUHJvdmlkZXJ8RXhpc3RpbmdTYW5zUHJvdmlkZXJ8U3RhdGljQ2xhc3NTYW5zUHJvdmlkZXJ8XG4gICAgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXJ8RmFjdG9yeVNhbnNQcm92aWRlcnxDbGFzc1NhbnNQcm92aWRlcjtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBJbmplY3RhYmxlIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIERlY29yYXRvciB0aGF0IG1hcmtzIGEgY2xhc3MgYXMgYXZhaWxhYmxlIHRvIGJlXG4gICAqIHByb3ZpZGVkIGFuZCBpbmplY3RlZCBhcyBhIGRlcGVuZGVuY3kuXG4gICAqXG4gICAqIEBzZWUgW0ludHJvZHVjdGlvbiB0byBTZXJ2aWNlcyBhbmQgREldKGd1aWRlL2FyY2hpdGVjdHVyZS1zZXJ2aWNlcylcbiAgICogQHNlZSBbRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVdKGd1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uKVxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiBNYXJraW5nIGEgY2xhc3Mgd2l0aCBgQEluamVjdGFibGVgIGVuc3VyZXMgdGhhdCB0aGUgY29tcGlsZXJcbiAgICogd2lsbCBnZW5lcmF0ZSB0aGUgbmVjZXNzYXJ5IG1ldGFkYXRhIHRvIGNyZWF0ZSB0aGUgY2xhc3Mnc1xuICAgKiBkZXBlbmRlbmNpZXMgd2hlbiB0aGUgY2xhc3MgaXMgaW5qZWN0ZWQuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgYSBzZXJ2aWNlIGNsYXNzIGlzIHByb3Blcmx5XG4gICAqICBtYXJrZWQgc28gdGhhdCBhIHN1cHBvcnRpbmcgc2VydmljZSBjYW4gYmUgaW5qZWN0ZWQgdXBvbiBjcmVhdGlvbi5cbiAgICpcbiAgICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzXCIgcmVnaW9uPVwiSW5qZWN0YWJsZVwiPjwvY29kZS1leGFtcGxlPlxuICAgKlxuICAgKi9cbiAgKCk6IFR5cGVEZWNvcmF0b3I7XG4gIChvcHRpb25zPzoge3Byb3ZpZGVkSW46IFR5cGU8YW55Pnwncm9vdCd8J3BsYXRmb3JtJ3wnYW55J3xudWxsfSZcbiAgIEluamVjdGFibGVQcm92aWRlcik6IFR5cGVEZWNvcmF0b3I7XG4gIG5ldygpOiBJbmplY3RhYmxlO1xuICBuZXcob3B0aW9ucz86IHtwcm92aWRlZEluOiBUeXBlPGFueT58J3Jvb3QnfCdwbGF0Zm9ybSd8J2FueSd8bnVsbH0mXG4gICAgICBJbmplY3RhYmxlUHJvdmlkZXIpOiBJbmplY3RhYmxlO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEluamVjdGFibGUgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdGFibGUge1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGljaCBpbmplY3RvcnMgd2lsbCBwcm92aWRlIHRoZSBpbmplY3RhYmxlLlxuICAgKlxuICAgKiAtIGBUeXBlPGFueT5gIC0gYXNzb2NpYXRlcyB0aGUgaW5qZWN0YWJsZSB3aXRoIGFuIGBATmdNb2R1bGVgIG9yIG90aGVyIGBJbmplY3RvclR5cGVgLiBUaGlzXG4gICAqIG9wdGlvbiBpcyBERVBSRUNBVEVELlxuICAgKiAtICdudWxsJyA6IEVxdWl2YWxlbnQgdG8gYHVuZGVmaW5lZGAuIFRoZSBpbmplY3RhYmxlIGlzIG5vdCBwcm92aWRlZCBpbiBhbnkgc2NvcGUgYXV0b21hdGljYWxseVxuICAgKiBhbmQgbXVzdCBiZSBhZGRlZCB0byBhIGBwcm92aWRlcnNgIGFycmF5IG9mIGFuIFtATmdNb2R1bGVdKGFwaS9jb3JlL05nTW9kdWxlI3Byb3ZpZGVycyksXG4gICAqIFtAQ29tcG9uZW50XShhcGkvY29yZS9EaXJlY3RpdmUjcHJvdmlkZXJzKSBvciBbQERpcmVjdGl2ZV0oYXBpL2NvcmUvRGlyZWN0aXZlI3Byb3ZpZGVycykuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgb3B0aW9ucyBzcGVjaWZ5IHRoYXQgdGhpcyBpbmplY3RhYmxlIHNob3VsZCBiZSBwcm92aWRlZCBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgKiBpbmplY3RvcnM6XG4gICAqIC0gJ3Jvb3QnIDogVGhlIGFwcGxpY2F0aW9uLWxldmVsIGluamVjdG9yIGluIG1vc3QgYXBwcy5cbiAgICogLSAncGxhdGZvcm0nIDogQSBzcGVjaWFsIHNpbmdsZXRvbiBwbGF0Zm9ybSBpbmplY3RvciBzaGFyZWQgYnkgYWxsXG4gICAqIGFwcGxpY2F0aW9ucyBvbiB0aGUgcGFnZS5cbiAgICogLSAnYW55JyA6IFByb3ZpZGVzIGEgdW5pcXVlIGluc3RhbmNlIGluIGVhY2ggbGF6eSBsb2FkZWQgbW9kdWxlIHdoaWxlIGFsbCBlYWdlcmx5IGxvYWRlZFxuICAgKiBtb2R1bGVzIHNoYXJlIG9uZSBpbnN0YW5jZS4gVGhpcyBvcHRpb24gaXMgREVQUkVDQVRFRC5cbiAgICpcbiAgICovXG4gIHByb3ZpZGVkSW4/OiBUeXBlPGFueT58J3Jvb3QnfCdwbGF0Zm9ybSd8J2FueSd8bnVsbDtcbn1cblxuLyoqXG4gKiBJbmplY3RhYmxlIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEluamVjdGFibGU6IEluamVjdGFibGVEZWNvcmF0b3IgPSBtYWtlRGVjb3JhdG9yKFxuICAgICdJbmplY3RhYmxlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCxcbiAgICAodHlwZTogVHlwZTxhbnk+LCBtZXRhOiBJbmplY3RhYmxlKSA9PiBjb21waWxlSW5qZWN0YWJsZSh0eXBlIGFzIGFueSwgbWV0YSkpO1xuIl19