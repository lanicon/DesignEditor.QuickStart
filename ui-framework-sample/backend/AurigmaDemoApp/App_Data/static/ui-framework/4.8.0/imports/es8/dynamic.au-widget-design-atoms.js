(window.multistep_editor_jsonpFunction=window.multistep_editor_jsonpFunction||[]).push([[30],{403:function(e,t,r){"use strict";r.d(t,"a",function(){return n});class n{static throw(e,...t){throw`${e}: ${t.join(", ")}`}}n.InvalidProcessorExpression="Invalid expression",n.CannotFoundType="Cannot found type",n.CannotFoundTypeConstructor="Cannot found constructor of type",n.CannotFoundStaticMethod="Cannot found static method",n.CannotFoundEnum="Cannot found enumeration",n.InvalidEnumValue="Enum does not contain value",n.DublicateTypesFound="Dublicate types have been detected",n.CommandNotFound="Command not found"},542:function(e,t,r){"use strict";var n=r(21),i=r(22),s=r(403),o=r(27),a=r(404),c=r(368),l=r(375),u=r(389),d=r(380),h=r(372);class p{constructor(){this._types=new Map;const e=[a,c,l,u];for(let t=0;t<e.length;t++)this._loadModuleTypes(e[t]);this._loadModuleTypes({Collection:d.a})}fromConstructor(e,...t){Object(h.e)(e)&&s.a.throw("Invalid argument",e);const r=this._findFunction(e);this._isConstructor(r)||s.a.throw(s.a.CannotFoundTypeConstructor,e);const n=r;try{return new n(...t)}catch(e){throw console.error(e),e}}_findFunction(e){const t=e.split(".");this._types.has(t[0])||s.a.throw(s.a.CannotFoundType,e);let r=this._types.get(t[0]);for(let n=1;n<t.length;n++)void 0==r[t[n]]&&s.a.throw(s.a.CannotFoundTypeConstructor,e),r=r[t[n]];return r}_isConstructor(e){return e instanceof Function&&null!=e.prototype.constructor}fromStaticMethod(e,...t){const r=this._findFunction(e);null!=r&&r instanceof Function||s.a.throw(s.a.CannotFoundStaticMethod,e);try{return r(...t)}catch(e){throw console.error(e),e}}fromProperties(e,t){const r=this.fromConstructor(e);return Object(h.a)(r,[t],{deep:!1,ignoreNull:!1})}fromEnum(e,t){this._types.has(e)||s.a.throw(s.a.CannotFoundEnum,e);const r=this._types.get(e);return r instanceof Object||s.a.throw(s.a.CannotFoundEnum,e),null==r[t]&&s.a.throw(s.a.InvalidEnumValue,{type:e,value:t}),r[t]}_loadModuleTypes(e){if(void 0!==e)for(let[t,r]of Object.entries(e))(r instanceof Function||r instanceof Object)&&(this._types.has(t)&&s.a.throw(s.a.DublicateTypesFound,t),this._types.set(t,r))}}r.d(t,"a",function(){return m});class m extends i.a{subProcessorAllocatorFactory(){const e=new o.a;return e.register(new w(this,new p)),e}}class w extends n.a{constructor(e,t){super(e),this._builder=t}apply(e,t,r=(e=>e)){switch(!0){case Array.isArray(e):return e.map(e=>r(e));case this.isObject(e):const t={};for(let[n,i]of Object.entries(e)){if(this._isNewExpression(n)||this._isCallExpression(n))return this._buildObjectModel(n,i,r);t[n]=this._buildModelProperty(i,r)}return t;case this._isEnumExpression(e):return this._parseEnum(e);default:return e}}_buildModelProperty(e,t){switch(!0){case this.isObject(e):return t(e);case this._isEnumExpression(e):return this._parseEnum(e);default:return e}}_parseArguments(e,t){switch(!0){case Array.isArray(e):return e.map(e=>this._parseArguments(e,t));case this.isObject(e)&&this.canApply(e):return t(e);case this._isEnumExpression(e):return this._parseEnum(e);default:return e}}_parseEnum(e){const t=this.splitOperandAndCondition(e);1===t.length&&null!=t[0].body||s.a.throw(s.a.InvalidProcessorExpression,e);const r=t[0].body.split(".");return 2==r.length?this._builder.fromEnum(r[0],r[1]):null}_buildObjectModel(e,t,r){const n=this.splitOperandAndCondition(e);1==n.length&&null!=n[0].body||s.a.throw(s.a.InvalidProcessorExpression,e);const i=n[0].body;return this._isCallExpression(e)?this._buildObjectByFactory(i,t,r):this._createObjectModel(i,t,r)}_buildObjectByFactory(e,t,r){let n=t;return Array.isArray(t)?n=t.map(e=>this._parseArguments(e,r)):this.isObject(t)&&(n=r(t)),this._builder.fromStaticMethod(e,n)}_createObjectModel(e,t,r){switch(!0){case this.isObject(t):return this._builder.fromProperties(e,r(t));case Array.isArray(t):const n=t.map(e=>this._parseArguments(e,r));return this._builder.fromConstructor(e,...n);default:return this._builder.fromConstructor(e,t)}}canApply(e){return this.isObject(e)&&void 0!==Object.entries(e).find(([e,t])=>this._isNewExpression(e)||this._isCallExpression(e)||this._isEnumExpression(t))}_isNewExpression(e){return/{{.*(#new).*/gi.test(e)}_isCallExpression(e){return/{{.*(#call).*/gi.test(e)}_isEnumExpression(e){return this.isString(e)&&/{{.*(#enum).*/gi.test(e)}}},870:function(e,t){e.exports='<style>\r\n    #viewer-wrapper {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 32px;\r\n        box-sizing: border-box;\r\n        display: flex;\r\n\r\n    }\r\n\r\n    #viewer {\r\n        flex-grow: 1;\r\n        height: 100%;\r\n        border: 1px solid #e0e0e0;\r\n    }\r\n</style>\r\n\r\n<div id="viewer-wrapper">\r\n    <div id="viewer"></div>\r\n</div>'},922:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(404),s=r(435),o=r(389),a=r(368),c=r(441),l=r(870),u=r(1),d=r(117),h=r(896),p=r(372),m=r(371);function w(e){if(null==e)throw new m.b("options cannot be null");if(null==e.backendUrl||Object(p.e)(e.backendUrl))throw new m.b("backendUrl cannot be null or empty");if(null==e.holderElement)throw new m.b("holderElement cannot be null");const t=e.holderElement;e=function(e){return Object(p.a)({backendUrl:"",holderElement:null,canvasBackground:{color:"white"},clearSelectionOnDocumentClick:!1,clearSelectionOnViewerClick:!1,rulerScale:.0138888889},[e],{deep:!1,ignoreNull:!1})}(e);const r=new h.a({holderElement:t,backendUrl:e.backendUrl,canvasBackground:e.canvasBackground});return r.clearSelectionOnDocumentClick=e.clearSelectionOnDocumentClick,r.clearSelectionOnViewerClick=e.clearSelectionOnViewerClick,r.rulerScale=e.rulerScale,function(e,t){t=function(e){const t={rotationGripColor:"rgb(255, 255, 255)",rotationGripLineColor:"rgb(48, 194, 255)",rotationGripLineLength:10,rotationGripSize:6,selectionColor:"rgb(48, 194, 255)",selectionWidth:1,loadingImageUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAYAAABmvqYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwVJREFUeNqclE9oE1EQxmeTLGnatGtocqhR04MeClUMVWupJyO5iBTBgAcvIojiqUUoeNOLh0I9Fk9qwYsHL+qhiOCf5CJiMFIUQqxJiAk2aU1MN2k3TfxmfRvW2NjYBz925+3svHnfzHvSzMwM7WBcB1/A4385WToMtgvMmuxb4KzJnt3qJ1uHwV8AD3gPTmqa9hHP3bIs38XzOzgH9oLQ/wT3gSS4AW4j6JTL5dLsdrvKu15fXz+8urpKWITtq+IfB6hsF5y/fQUPwIjT6cz7fL5WH5XnYrGYarVan4g6TADndpp7wTMwZLFY8oODg/oksv8Lv99P8KmyL3jaSUFZjknQjUGJRIKSySRVKhUqFoukqqoemEe1WiVeHHY3zPPbaW4RBbyE7arIijPTg7ndbgoEArpTJBKhXC7HmpPD4WAf1n4aPATf2mXO28uBoCRJalNgZDs2NtZ0Gh0dbWbPo6urq4jHBZDW5WwTfBFcFE6yMckZokOaTtls9o+fhCyvwGX+1yzLUSHHB24lBJLgfGRzc3Mf7B/0W3yan5+n8fFxwo4oHo/rc6ZCd+O/+zDftWp+DB+nuYeh80u8vwZDcP6MbOuY13fJ2obDYT2Y0UG8ABfbUM9cUG56tV6vLwwPDydsNn09DcVRUqlUfz6fH2Ef2M9l1kUE48EHCIeK1tbWKJPJKJiXxc73c7dZg8FgDS8NfDjUaDQ0bis8rRsbG+W+vj5ruVxOYuE7tVrtIJ51o3PgQ5CMlpeXaWVlRUEx7wmte8EjI/Mz4Dgy1gqFAoVCIfJ6vRSNRuV0Oh1XFEVGu00gaRekKAEX11IU2g3teUPcJT+55cFU2z5HMLNpdMoA2MPdZjQKeANOCLsB6lvdH3wn+LHt05BGm5ubI4/Ho2vZ09NDS0tLA8iM+15radVFky21u5y4oDeh9QK0tHPm0Jt1pFKpxAenjOCfRJGMcaqTe9omrkcJBbqGqk/zcYeOWSzWi7kDCKzQDodZ87d82aMDmocIwa/gvR8UdhL8lwADABtmSFbWE/QHAAAAAElFTkSuQmCC",resizeGripLineColor:"rgb(48, 194, 255)",resizeGripColor:"rgb(255, 255, 255)",resizeGripSize:8,handleButtonCssClass:"cc-icon-placeholder-handle",doneButtonCssClass:"cc-icon-placeholder-done"};return null!=e?Object(p.a)(t,[e],{deep:!1,ignoreNull:!1}):t}(t),e.rotationGripColor=t.rotationGripColor,e.rotationGripLineColor=t.rotationGripLineColor,e.rotationGripLineLength=t.rotationGripLineLength,e.rotationGripSize=t.rotationGripSize,e.selectionColor=t.selectionColor,e.selectionWidth=t.selectionWidth,e.loadingImageUrl=t.loadingImageUrl,e.resizeGripLineColor=t.resizeGripLineColor,e.resizeGripColor=t.resizeGripColor,e.resizeGripSize=t.resizeGripSize,e.handleButtonCssClass=t.handleButtonCssClass,e.doneButtonCssClass=t.doneButtonCssClass}(r.canvas,e.canvasInitOptions),function(e){e.querySelector("#grips").style.position="relative";const t=e.querySelectorAll("#grips div");for(let e=0;e<t.length;e++)t[e].style.position="fixed"}(r.get_element()),r}function g(e,t,r){null!=e&&null!=t&&((r=r>0?r:0)>t.length-1||(e.surface=t.get(r)))}class f{constructor(e,t){this._widget=e,this._holderElementId=t}get name(){return f.Name}async execute(e){this._widget._backendUrl=e.backendUrl;const t=Object(p.a)({backendUrl:"",holderElement:null},[e.viewerSettings],{deep:!0,ignoreNull:!1});t.backendUrl=e.backendUrl,t.holderElement=this._widget.getElementById(this._holderElementId);const r=w(t);null!=e.product&&g(r,e.product.surfaces,e.surfaceIndex),await r.waitUpdate(),this._widget.viewer=r,this._widget.productModel=e.product}}f.Name="initial";class _{constructor(e){this._widget=e}get name(){return _.Name}async execute(e){null!=e&&null!=e.product&&(g(this._widget.viewer,e.product.surfaces,e.surfaceIndex),await this._widget.viewer.waitUpdate(),this._widget.productModel=e.product)}}_.Name="setProductModel";class b{constructor(e,t){this._widget=e,this._serializer=null!=t?t:new s.a}get name(){return b.Name}async execute(e){if(null==e||Object(p.e)(e.serializedProduct))return;const t=this._serializer.deserialize(e.serializedProduct);g(this._widget.viewer,t.surfaces,e.surfaceIndex),await this._widget.viewer.waitUpdate(),this._widget.productModel=t}}b.Name="setSerializedProduct";var C=r(403);class y{constructor(e){this._widget=e}get name(){return y.Name}async execute(e){if(null==e)return;const t=this._widget.viewer;null==t&&C.a.throw("Viewer cannot be null");const r=(e,t)=>void 0!=e&&null!=t&&typeof e==typeof t;for(let n in e)r(t[n],e[n])&&(t[n]=e[n]);await t.waitUpdate()}}y.Name="setViewerSettings";var v=r(194);class E{constructor(e){this._widget=e}get name(){return E.Name}async execute(e){const t=this._widget.viewer;null==t&&C.a.throw("Viewer cannot be null");const r=this._widget.productModel;null==r&&C.a.throw("Product cannot be null");const n=r.getAllItems();for(let r of n){const n=e.items[r.name];if(Object(v.a)(n))continue;const i=t.getHandler(r);i.beginUpdate(),Object(p.b)(r,n),i.endUpdate(),i.update()}await t.waitUpdate()}}E.Name="updateItems";var A,U=r(542);r.d(t,"AuWidgetDesignAtoms",function(){return S}),r.d(t,"ResizeMode",function(){return I}),r.d(t,"widget",function(){return S});let S=A=class extends d.c{constructor(){super(),this._serializer=new s.a,this._configProcessor=new U.a,this._backendUrl="",this._proofImageUrls=[],this._hiResUrls=[],this._commandExecutor=new class{constructor(e){this._normalizeConfig=e}async executeCommand(e,t){const r=this._normalizeConfig(t);await e.execute(r)}async executeCommands(e,t){const r=this.getUpdatedConfig(t.oldParams,t.newParams);for(let t in r){const n=e[t];Object(v.a)(n)||await this.executeCommand(n,r[t])}}getUpdatedConfig(e,t){if(null==e)return t;const r={};if(null==t)return r;for(let n in t)null==t[n]||this.equals(e[n],t[n])||(r[n]=t[n]);return r}equals(e,t){return JSON.stringify(e)===JSON.stringify(t)}}(e=>this._configProcessor.process(e,{})),this._commands={[f.Name]:new f(this,A.holderElementId),[_.Name]:new _(this),[b.Name]:new b(this,this._serializer),[y.Name]:new y(this),[E.Name]:new E(this)}}get productModel(){return this._product}set productModel(e){this._product!==e&&(this._product=e,null!=this._currentParams&&this._currentParams.autoItemSelectionEnabled&&this._autoSelectItem(),this.emitChange({productModel:e},!1))}get viewer(){return this._viewer}set viewer(e){this._viewer!=e&&(this._viewer=e)}get selectedItems(){return null!=this.viewer?this.viewer.selectedItems:[]}rotateCanvas(e=90){null!=this.viewer&&this.viewer.rotateContent(e)}rotateSelectedItems(e=90){null!=this.viewer&&(this.viewer.selectedItems.forEach(t=>{t.transform.setAngle(t.transform.angle+e)}),this._updateSelection())}_autoSelectItem(){if(null==this.viewer||null==this.currentSurface)return;const e=this.viewer.surface.containers.first(e=>e.name===c.a.MAIN_CONTAINER_NAME);null!=e?this.viewer.selectedItems=[e.items.first(e=>!e.locked)]:this.logger.warn("Cannot found main container")}resizeSelectedImages(e,t){if(null==this.viewer)throw"Cannot perform resize because viewer is null";const r=this.viewer.selectedItems.filter(e=>e instanceof o.ImageItem);if(null==t&&null==this.currentSurface)throw"Cannot perform resize because targetSize cannot be determined";t=null==t?new a.SizeF(this.currentSurface.width,this.currentSurface.height):t,r.forEach(r=>this._resizeImage(r,t,e)),this._updateSelection()}_resizeImage(e,t,r){const n=this.viewer.getHandler(e);n.beginUpdate();const i=t.width/n.width,s=t.height/n.height;switch(r){case I.Fit:n.width*=i,n.height*=s;break;case I.Proportional:const t=Math.min(i,s);n.width*=t,n.height*=t;break;case I.Source:n.width=e.sourceRectangle.width,n.height=e.sourceRectangle.height}const o=n.getControlCenter(),a=this.currentSurface.width/2,c=this.currentSurface.height/2;e.transform.setTranslateX(a-o.x),e.transform.setTranslateY(c-o.y),n.endUpdate(),n.update()}_updateSelection(){const e=this.viewer.selectedItems;this.viewer.canvas.clearSelectedItemHandlers(),this.viewer.selectedItems=e}get currentSurface(){return null!=this.viewer?this.viewer.surface:null}updateParams(e){}async updateParamsAsync(e){await super.updateParamsAsync(e),this._currentParams=e,this.showPreloader(!0);try{null!=e&&await this._commandExecutor.executeCommands(this._commands,{oldParams:this._lastParams,newParams:e})}catch(e){console.log(e),this.logger.error(`Some error has been corruped when execute commands: ${e}`,Error)}finally{this.showPreloader(!1),this._lastParams=e}}getSerializedProduct(){return null!=this.productModel?this._serializer.serialize(this._product):null}async executeCommand(e,t){const r=this._commands[e];try{if(null!=r)return await this._commandExecutor.executeCommand(r,t)}catch(t){console.log(t),this.logger.error(`Some error has been corruped when execute command: ${e}.\nError:${t}`,Error)}this.logger.error(C.a.CommandNotFound+e,Error)}async render(e,t){const r=`${this._backendUrl}/api/render/${t}`,n=[];for(const t of e.surfaces){const e=(new s.a).serialize(new i.Product([t])),o=await fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:`{product: ${e}}`}),a=await o.blob();n.push(URL.createObjectURL(a))}return n}get hiResUrls(){return this._hiResUrls}get proofImageUrls(){return this._proofImageUrls}async getHiResImages(){return this._hiResUrls=await this.render(this._product,"pdf"),this.emitChange({hiresUrls:this._hiResUrls},!1),this._hiResUrls}async getProofImages(){return this._proofImageUrls=await this.render(this._product,"jpg"),this.emitChange({proofImageUrls:this._proofImageUrls},!1),this._proofImageUrls}};var I;S.holderElementId="viewer",S=A=n.b([Object(u.a)("au-widget-design-atoms",l),n.d("design:paramtypes",[])],S),function(e){e.Fit="Fit",e.Proportional="Proportional",e.Source="Source"}(I||(I={}))}}]);