var gdjs;(function(l){l.PixiFiltersTools.registerFilterCreator("KawaseBlur",new class extends l.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(t,e){return new PIXI.filters.KawaseBlurFilter}updatePreRender(t,e){}updateDoubleParameter(t,e,r){const i=t;e==="pixelizeX"?i.pixelSize[0]=r:e==="pixelizeY"?i.pixelSize[1]=r:e==="blur"?i.blur=r:e==="quality"&&(i.quality=r)}getDoubleParameter(t,e){const r=t;return e==="pixelizeX"?r.pixelSize[0]:e==="pixelizeY"?r.pixelSize[1]:e==="blur"?r.blur:e==="quality"?r.quality:0}updateStringParameter(t,e,r){}updateColorParameter(t,e,r){}getColorParameter(t,e){return 0}updateBooleanParameter(t,e,r){}getNetworkSyncData(t){const e=t;return{px:e.pixelSize[0],py:e.pixelSize[1],b:e.blur,q:e.quality}}updateFromNetworkSyncData(t,e){const r=t;r.pixelSize[0]=e.px,r.pixelSize[1]=e.py,r.blur=e.b,r.quality=e.q}})})(gdjs||(gdjs={}));
//# sourceMappingURL=kawase-blur-pixi-filter.js.map
