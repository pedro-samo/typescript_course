"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission[Permission["USER"] = 2] = "USER";
    Permission[Permission["READONLY"] = 3] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
//# sourceMappingURL=enum.js.map