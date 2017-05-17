(function (exports) {
'use strict';

const makeTemplate = function (strings) {
    let html = strings[strings.length - 1];
    let template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

exports.makeTemplate = makeTemplate;

}((this.makeTemplate = this.makeTemplate || {})));
//# sourceMappingURL=makeTemplate.iffe.js.map
