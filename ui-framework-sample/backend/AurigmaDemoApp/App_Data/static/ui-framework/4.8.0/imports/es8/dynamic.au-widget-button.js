(window.multistep_editor_jsonpFunction=window.multistep_editor_jsonpFunction||[]).push([[8],{723:function(t,r){t.exports='<style>\r\n    :host {\r\n        display: block;\r\n    }\r\n\r\n    #button {\r\n        @apply --au-header-button-geometry;\r\n        @apply --au-button-font;\r\n        margin: 0;\r\n    }\r\n\r\n    #button.primary {\r\n        background-color: var(--theme-primary-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button.success {\r\n        background-color: var(--theme-success-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button.warning {\r\n        background-color: var(--theme-warning-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button.danger {\r\n        background-color: var(--theme-error-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button[disabled] {\r\n        background: var(--button-disable-background);\r\n        color: var(--button-disable-color);\r\n    }\r\n</style>\r\n<paper-button id="button" class$="[[classStyle]]" on-tap="_onClick" hidden="[[!visible]]" disabled="[[!enabled]]">\r\n    <span>[[text]]</span>\r\n</paper-button>'},899:function(t,r,n){"use strict";n.r(r),n.d(r,"AuWidgetButton",function(){return l}),n.d(r,"widget",function(){return l});var e=n(0),o=n(723),c=n(1),a=n(117),i=n(6);let l=class extends a.c{updateParams(t){this.text=t.text,this.classStyle=t.classStyle,this.visible=t.visible,this.enabled=t.enabled,this._onClick=i.a.functionWrapperConstructor(t.onClick)}};e.b([Object(c.c)(),e.d("design:type",Object)],l.prototype,"params",void 0),e.b([Object(c.c)(),e.d("design:type",String)],l.prototype,"text",void 0),e.b([Object(c.c)(),e.d("design:type",String)],l.prototype,"classStyle",void 0),e.b([Object(c.c)(),e.d("design:type",Boolean)],l.prototype,"enabled",void 0),e.b([Object(c.c)(),e.d("design:type",Boolean)],l.prototype,"visible",void 0),l=e.b([Object(c.a)("au-widget-button",o)],l)}}]);