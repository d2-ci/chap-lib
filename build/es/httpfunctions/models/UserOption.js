export var UserOption;
(function (UserOption) {
    let type;
    (function (type) {
        type["STRING"] = "string";
        type["INTEGER"] = "integer";
        type["FLOAT"] = "float";
        type["BOOLEAN"] = "boolean";
    })(type = UserOption.type || (UserOption.type = {}));
})(UserOption || (UserOption = {}));
