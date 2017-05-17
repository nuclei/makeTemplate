const makeTemplate = function (strings) {
    let html = strings[strings.length - 1];
    let template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

export { makeTemplate };
//# sourceMappingURL=makeTemplate.js.map
