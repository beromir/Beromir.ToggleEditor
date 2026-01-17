(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();

  // node_modules/.pnpm/@neos-project+positional-array-sorter@8.3.14/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var positionalArraySorter = (subject, position = "position", idKey = "key") => {
    const positionAccessor = typeof position === "string" ? (value) => value[position] : position;
    const indexMapping = {};
    const middleKeys = {};
    const startKeys = {};
    const endKeys = {};
    const beforeKeys = {};
    const afterKeys = {};
    subject.forEach((item, index) => {
      const key = item[idKey] ? item[idKey] : String(index);
      indexMapping[key] = index;
      const positionValue = positionAccessor(item);
      const position2 = String(positionValue ? positionValue : index);
      let invalid = false;
      if (position2.startsWith("start")) {
        const weightMatch = position2.match(/start\s+(\d+)/);
        const weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
        if (!startKeys[weight]) {
          startKeys[weight] = [];
        }
        startKeys[weight].push(key);
      } else if (position2.startsWith("end")) {
        const weightMatch = position2.match(/end\s+(\d+)/);
        const weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
        if (!endKeys[weight]) {
          endKeys[weight] = [];
        }
        endKeys[weight].push(key);
      } else if (position2.startsWith("before")) {
        const match = position2.match(/before\s+(\S+)(\s+(\d+))?/);
        if (!match) {
          invalid = true;
        } else {
          const reference = match[1];
          const weight = match[3] ? Number(match[3]) : 0;
          if (!beforeKeys[reference]) {
            beforeKeys[reference] = {};
          }
          if (!beforeKeys[reference][weight]) {
            beforeKeys[reference][weight] = [];
          }
          beforeKeys[reference][weight].push(key);
        }
      } else if (position2.startsWith("after")) {
        const match = position2.match(/after\s+(\S+)(\s+(\d+))?/);
        if (!match) {
          invalid = true;
        } else {
          const reference = match[1];
          const weight = match[3] ? Number(match[3]) : 0;
          if (!afterKeys[reference]) {
            afterKeys[reference] = {};
          }
          if (!afterKeys[reference][weight]) {
            afterKeys[reference][weight] = [];
          }
          afterKeys[reference][weight].push(key);
        }
      } else {
        invalid = true;
      }
      if (invalid) {
        let numberPosition = parseFloat(position2);
        if (isNaN(numberPosition) || !isFinite(numberPosition)) {
          numberPosition = index;
        }
        if (!middleKeys[numberPosition]) {
          middleKeys[numberPosition] = [];
        }
        middleKeys[numberPosition].push(key);
      }
    });
    const resultStart = [];
    const resultMiddle = [];
    const resultEnd = [];
    const processedKeys = [];
    const sortedWeights = (dict, asc) => {
      const weights = Object.keys(dict).map((x) => Number(x)).sort((a, b) => a - b);
      return asc ? weights : weights.reverse();
    };
    const addToResults = (keys, result) => {
      keys.forEach((key) => {
        if (processedKeys.indexOf(key) >= 0) {
          return;
        }
        processedKeys.push(key);
        if (beforeKeys[key]) {
          const beforeWeights = sortedWeights(beforeKeys[key], true);
          for (const i of beforeWeights) {
            addToResults(beforeKeys[key][i], result);
          }
        }
        result.push(key);
        if (afterKeys[key]) {
          const afterWeights = sortedWeights(afterKeys[key], false);
          for (const i of afterWeights) {
            addToResults(afterKeys[key][i], result);
          }
        }
      });
    };
    for (const i of sortedWeights(startKeys, false)) {
      addToResults(startKeys[i], resultStart);
    }
    for (const i of sortedWeights(middleKeys, true)) {
      addToResults(middleKeys[i], resultMiddle);
    }
    for (const i of sortedWeights(endKeys, true)) {
      addToResults(endKeys[i], resultEnd);
    }
    for (const key of Object.keys(beforeKeys)) {
      if (processedKeys.indexOf(key) >= 0) {
        continue;
      }
      for (const i of sortedWeights(beforeKeys[key], false)) {
        addToResults(beforeKeys[key][i], resultStart);
      }
    }
    for (const key of Object.keys(afterKeys)) {
      if (processedKeys.indexOf(key) >= 0) {
        continue;
      }
      for (const i of sortedWeights(afterKeys[key], false)) {
        addToResults(afterKeys[key][i], resultMiddle);
      }
    }
    const sortedKeys = [...resultStart, ...resultMiddle, ...resultEnd];
    return sortedKeys.map((key) => indexMapping[key]).map((i) => subject[i]);
  };
  var positionalArraySorter_default = positionalArraySorter;

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default = readFromConsumerApi("manifest");

  // Resources/Private/Editor/ToggleEditor/index.jsx
  var import_react7 = __toESM(require_react());
  var import_prop_types = __toESM(require_prop_types());
  var import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
  var import_neos_ui_decorators3 = __toESM(require_neos_ui_decorators());
  var import_react_redux = __toESM(require_react_redux());

  // node_modules/.pnpm/carbon-neos-loadinganimation@1.2.0_@neos-project+neos-ui-extensibility@8.3.14/node_modules/carbon-neos-loadinganimation/src/LoadingWithStyles.jsx
  var import_react2 = __toESM(require_react());

  // node_modules/.pnpm/carbon-neos-loadinganimation@1.2.0_@neos-project+neos-ui-extensibility@8.3.14/node_modules/carbon-neos-loadinganimation/src/Elements.jsx
  var import_react = __toESM(require_react());
  function Circle({ style: style2, className, size = 30 }) {
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: size, height: size, stroke: "currentColor", viewBox: "0 0 24 24", style: style2, className }, /* @__PURE__ */ import_react.default.createElement("g", null, /* @__PURE__ */ import_react.default.createElement("circle", { cx: "12", cy: "12", r: "9.5", fill: "none", "stroke-width": "2", "stroke-linecap": "round" }, [
      {
        attribute: "dasharray",
        values: "0 150;42 150;42 150;42 150"
      },
      {
        attribute: "dashoffset",
        values: "0;-16;-59;-59"
      }
    ].map(({ attribute, values }) => /* @__PURE__ */ import_react.default.createElement(
      "animate",
      {
        key: attribute,
        attributeName: `stroke-${attribute}`,
        values,
        dur: "1.5s",
        calcMode: "spline",
        keyTimes: "0;0.475;0.95;1",
        keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",
        repeatCount: "indefinite"
      }
    ))), /* @__PURE__ */ import_react.default.createElement(
      "animateTransform",
      {
        attributeName: "transform",
        type: "rotate",
        dur: "2s",
        values: "0 12 12;360 12 12",
        repeatCount: "indefinite"
      }
    )));
  }
  function Dots({ style: style2, className, size = 30 }) {
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: size * 2, height: size, viewBox: "0 0 24 12", class: className, style: style2 }, [1, 2, 3].map((number) => {
      const cx = number * 6;
      const beginn = Math.round(100 / 3 * (number - 1)) / 100;
      return /* @__PURE__ */ import_react.default.createElement("circle", { cx, cy: "6", r: "0", fill: "currentColor" }, /* @__PURE__ */ import_react.default.createElement(
        "animate",
        {
          attributeName: "r",
          begin: beginn,
          calcMode: "spline",
          dur: "1.5s",
          keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
          repeatCount: "indefinite",
          values: "0;2;0;0"
        }
      ));
    }));
  }

  // node_modules/.pnpm/carbon-neos-loadinganimation@1.2.0_@neos-project+neos-ui-extensibility@8.3.14/node_modules/carbon-neos-loadinganimation/src/LoadingWithStyles.jsx
  var import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
  var style = {
    container: (heightMultiplier = 1) => ({
      display: "grid",
      gridTemplate: "'content' 1fr / 1fr",
      alignItems: "center",
      justifyItems: "center",
      width: "100%",
      minHeight: `calc(var(--spacing-GoldenUnit) * ${heightMultiplier})`
    }),
    item: (active = false) => ({
      gridArea: "content",
      transition: "opacity var(--transition-Default), transform var(--transition-Default) ease",
      opacity: active ? 1 : 0,
      transform: `scale(${active ? 1 : 0})`
    })
  };
  function Loading({
    id,
    title = "Neos.Neos:Main:loading",
    isLoading = false,
    delayTime = 500,
    timeoutTime = 5e3,
    i18nRegistry,
    heightMultiplier = 1,
    width = 60
  }) {
    const [showLoading, setShowLoading] = (0, import_react2.useState)(0);
    const translatedTitle = title ? i18nRegistry.translate(title) : null;
    (0, import_react2.useEffect)(() => {
      if (!isLoading) {
        setShowLoading(0);
        return;
      }
      const delay = setTimeout(() => {
        setShowLoading(1);
      }, delayTime);
      const timeout = setTimeout(() => {
        setShowLoading(2);
      }, delayTime + timeoutTime);
      return () => {
        clearTimeout(delay);
        clearTimeout(timeout);
      };
    }, [isLoading]);
    if (!isLoading) {
      return null;
    }
    return /* @__PURE__ */ import_react2.default.createElement("div", { id, style: style.container(heightMultiplier), title: translatedTitle }, /* @__PURE__ */ import_react2.default.createElement(Circle, { size: width / 2, style: style.item(showLoading == 1) }), /* @__PURE__ */ import_react2.default.createElement(Dots, { size: width / 2, style: style.item(showLoading == 2) }));
  }
  var neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n")
  }));
  var LoadingWithStyles_default = neosifier(Loading);

  // Resources/Private/Editor/ToggleEditor/index.jsx
  var import_react_ui_components3 = __toESM(require_react_ui_components());

  // Resources/Private/Editor/ToggleEditor/Components/Icons.jsx
  var import_react3 = __toESM(require_react());
  var import_react_ui_components = __toESM(require_react_ui_components());

  // Resources/Private/Editor/ToggleEditor/style.module.css
  var style_default = { "imageSVG": "beromir-toggleeditor-blateq-imageSVG", "layered": "beromir-toggleeditor-blateq-layered", "selected": "beromir-toggleeditor-blateq-selected", "transition": "beromir-toggleeditor-blateq-transition", "flex1": "beromir-toggleeditor-blateq-flex1", "colorBox": "beromir-toggleeditor-blateq-colorBox", "flex": "beromir-toggleeditor-blateq-flex", "colorButton": "beromir-toggleeditor-blateq-colorButton", "label": "beromir-toggleeditor-blateq-label", "allowEmptyShow": "beromir-toggleeditor-blateq-allowEmptyShow", "listButton": "beromir-toggleeditor-blateq-listButton", "colorPreview": "beromir-toggleeditor-blateq-colorPreview", "highlight": "beromir-toggleeditor-blateq-highlight", "wrapper": "beromir-toggleeditor-blateq-wrapper", "color": "beromir-toggleeditor-blateq-color", "image": "beromir-toggleeditor-blateq-image", "allowEmptyRadio": "beromir-toggleeditor-blateq-allowEmptyRadio", "error": "beromir-toggleeditor-blateq-error", "buttonCurrent": "beromir-toggleeditor-blateq-buttonCurrent", "flex-start": "beromir-toggleeditor-blateq-flex-start", "disabled": "beromir-toggleeditor-blateq-disabled", "list": "beromir-toggleeditor-blateq-list", "allowEmpty": "beromir-toggleeditor-blateq-allowEmpty", "content": "beromir-toggleeditor-blateq-content", "colorPreviewLast": "beromir-toggleeditor-blateq-colorPreviewLast", "button": "beromir-toggleeditor-blateq-button", "imageFull": "beromir-toggleeditor-blateq-imageFull", "grid": "beromir-toggleeditor-blateq-grid", "radio": "beromir-toggleeditor-blateq-radio", "colorTransparent": "beromir-toggleeditor-blateq-colorTransparent" };

  // node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // Resources/Private/Editor/ToggleEditor/utils.js
  var getPreviewConfig = (item) => getIconOrPreviewConfig("preview", item);
  var getIconConfig = (item) => getIconOrPreviewConfig("icon", item);
  function getItemVariants(item, key, activeFallbackToDefault = false, processItem = (value) => value, subkey = "") {
    const activeKey = `${key}Active${subkey}`;
    const defaultItem = item[key + subkey];
    let activeItem = item[activeKey];
    if (activeFallbackToDefault && activeItem === void 0) {
      activeItem = defaultItem;
    }
    if (defaultItem == void 0 && activeItem == void 0) {
      return null;
    }
    return {
      default: processItem(defaultItem),
      active: processItem(activeItem)
    };
  }
  function flattenValues(values, layout) {
    if (!values || typeof values !== "object") {
      return [];
    }
    const array = [];
    for (const value in values) {
      const item = values[value];
      if (item.hidden) {
        continue;
      }
      array.push({
        ...item,
        value,
        key: value == "" ? "__empty__" : value
      });
    }
    if (layout === "color") {
      return processColorValues(array);
    }
    return array;
  }
  function processColorValues(values) {
    if (!Array.isArray(values)) {
      return [];
    }
    values = values.map((item) => ({
      ...item,
      color: processColor(item.color)
    })).filter((item) => item.color);
    return values;
  }
  function processColor(color) {
    if (!color || typeof color !== "string" && !Array.isArray(color)) {
      return null;
    }
    if (typeof color === "string") {
      return [color];
    }
    color = color.filter(Boolean);
    if (color.length < 1) {
      return null;
    }
    return color;
  }
  function getIconOrPreviewConfig(type, item) {
    if (!item) {
      return null;
    }
    const state = getItemVariants(item, type);
    if (!state) {
      return null;
    }
    const needLayering = state.default && state.active;
    const rotate = getItemVariants(item, type, true, (value) => `rotate(${value || 0}deg)`, "Rotate");
    const label = getItemVariants("label", type, true);
    const description = getItemVariants("description", true);
    return {
      type,
      needLayering,
      state,
      label,
      description,
      rotate
    };
  }

  // Resources/Private/Editor/ToggleEditor/Components/Icons.jsx
  function Icons({ item, size, isCurrent }) {
    const config = getIconConfig(item);
    if (!config) {
      return null;
    }
    const { state, rotate, needLayering } = config;
    if (needLayering) {
      return /* @__PURE__ */ import_react3.default.createElement("span", { className: style_default.layered }, /* @__PURE__ */ import_react3.default.createElement(
        import_react_ui_components.Icon,
        {
          icon: state.default,
          className: style_default.transition,
          style: { opacity: isCurrent ? 0 : 1, transform: rotate?.default },
          size
        }
      ), /* @__PURE__ */ import_react3.default.createElement(
        import_react_ui_components.Icon,
        {
          icon: state.active,
          className: style_default.transition,
          style: { opacity: isCurrent ? 1 : 0, transform: rotate?.active },
          size
        }
      ));
    }
    if (state.default) {
      return /* @__PURE__ */ import_react3.default.createElement(
        import_react_ui_components.Icon,
        {
          icon: state.default,
          className: style_default.transition,
          style: { transform: isCurrent ? rotate?.active : rotate?.default },
          size
        }
      );
    }
    if (state.active && isCurrent) {
      return /* @__PURE__ */ import_react3.default.createElement(import_react_ui_components.Icon, { icon: state.active, style: { transform: rotate?.active }, size });
    }
    return null;
  }

  // Resources/Private/Editor/ToggleEditor/Components/PreviewImage.jsx
  var import_react5 = __toESM(require_react());

  // Resources/Private/Editor/ToggleEditor/Components/SinglePreview.jsx
  var import_react4 = __toESM(require_react());
  var import_neos_ui_decorators2 = __toESM(require_neos_ui_decorators());
  var neosifier2 = (0, import_neos_ui_decorators2.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n")
  }));
  var SinglePreview_default = neosifier2(SinglePreview);
  function SinglePreview({ src, className, style: style2, label, i18nRegistry }) {
    const translatedLabel = i18nRegistry.translate(label);
    if (src.startsWith("<svg ")) {
      return /* @__PURE__ */ import_react4.default.createElement(
        "div",
        {
          className: clsx_default(style_default.transition, style_default.imageSVG, className),
          style: style2,
          "aria-label": translatedLabel,
          dangerouslySetInnerHTML: { __html: src }
        }
      );
    }
    return /* @__PURE__ */ import_react4.default.createElement(
      "img",
      {
        className: clsx_default(style_default.transition, style_default.image, className),
        style: style2,
        alt: translatedLabel,
        src: src.startsWith("resource://") ? `/_Resources/Static/Packages/${src.substr(11)}` : src
      }
    );
  }

  // Resources/Private/Editor/ToggleEditor/Components/PreviewImage.jsx
  function PreviewImage({ item, isCurrent }) {
    const config = getPreviewConfig(item);
    if (!config) {
      return null;
    }
    const { state, rotate, needLayering, label, description } = config;
    const fullClass = item.previewFull ? style_default.imageFull : null;
    if (config.needLayering) {
      return /* @__PURE__ */ import_react5.default.createElement("span", { className: style_default.layered }, /* @__PURE__ */ import_react5.default.createElement(
        SinglePreview_default,
        {
          src: state.default,
          className: fullClass,
          style: { opacity: isCurrent ? 0 : 1, transform: rotate?.default },
          label: description?.default || label?.default
        }
      ), /* @__PURE__ */ import_react5.default.createElement(
        SinglePreview_default,
        {
          src: state.active,
          className: fullClass,
          style: { opacity: isCurrent ? 1 : 0, transform: rotate?.active },
          label: description?.active || label?.active
        }
      ));
    }
    if (state.default) {
      return /* @__PURE__ */ import_react5.default.createElement(
        SinglePreview_default,
        {
          src: state.default,
          className: fullClass,
          style: { transform: isCurrent ? rotate?.active : rotate?.default },
          label: description?.default || label?.default
        }
      );
    }
    if (state.active && isCurrent) {
      return /* @__PURE__ */ import_react5.default.createElement(
        SinglePreview_default,
        {
          src: state.active,
          className: fullClass,
          style: { transform: rotate?.active },
          label: description?.active || label?.active
        }
      );
    }
    return null;
  }

  // Resources/Private/Editor/ToggleEditor/Components/Wrapper.jsx
  var import_react6 = __toESM(require_react());
  var import_react_ui_components2 = __toESM(require_react_ui_components());
  function Wrapper({ children, label, id, className, title, style: style2, renderHelpIcon }) {
    if (!children) {
      return null;
    }
    return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, label && /* @__PURE__ */ import_react6.default.createElement(import_react_ui_components2.Label, { htmlFor: id }, label, " ", renderHelpIcon()), /* @__PURE__ */ import_react6.default.createElement("div", { id, className: clsx_default(style_default.wrapper, className), style: style2, title }, children));
  }

  // Resources/Private/Editor/ToggleEditor/index.jsx
  var getDataLoaderOptionsForProps = (props) => {
    return {
      contextNodePath: props.focusedNodePath,
      dataSourceIdentifier: props.options.dataSourceIdentifier,
      dataSourceUri: props.options.dataSourceUri,
      dataSourceAdditionalData: props.options.dataSourceAdditionalData,
      dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching)
    };
  };
  var defaultOptions = {
    layout: "grid",
    maximalColumns: 4,
    values: {},
    columns: null,
    allowEmpty: false,
    emptyValue: "",
    multiple: false,
    iconSize: null,
    disabled: false,
    hidden: false,
    dataSourceIdentifier: null,
    dataSourceUri: null,
    labelCustomStyle: null,
    buttonCustomStyle: null,
    wrapperCustomStyle: null
  };
  function Editor({ value, commit, highlight, i18nRegistry, id, dataSourcesDataLoader, renderHelpIcon, ...props }) {
    const mergedOptions = { ...defaultOptions, ...props.options };
    const {
      layout,
      values,
      columns,
      maximalColumns,
      emptyValue,
      iconSize,
      disabled,
      dataSourceIdentifier,
      dataSourceUri,
      dataSourceAdditionalData,
      multiple,
      labelCustomStyle,
      buttonCustomStyle,
      wrapperCustomStyle
    } = mergedOptions;
    const allowEmpty = multiple || mergedOptions.allowEmpty;
    let label = i18nRegistry.translate(props.label);
    if (label === "i18n") {
      const sitePackage = props.focusedNodeType.split(":")[0];
      const nodeType = props.focusedNodeType.split(":")[1];
      const qualifier = sitePackage + ":NodeTypes." + nodeType + ":properties." + props.identifier;
      return i18nRegistry.translate(qualifier);
    }
    const [savedValue, setSavedValue] = (0, import_react7.useState)([]);
    (0, import_react7.useEffect)(() => {
      if (!highlight) {
        setSavedValue(Array.isArray(value) ? value : [value]);
      }
    }, [highlight]);
    if (multiple && !Array.isArray(value)) {
      console.warn(
        `Misconfiguration in property "${props.identifier}". Multiple is activated but value type seems to be "string" or "integer" but should be "array".`
      );
    }
    const hasDataSource = !!(dataSourceIdentifier || dataSourceUri);
    const [isLoading, setIsLoading] = (0, import_react7.useState)(hasDataSource);
    const [options, setOptions] = (0, import_react7.useState)(hasDataSource ? [] : flattenValues(values, layout, i18nRegistry));
    const [active, setActive] = (0, import_react7.useState)(Array.isArray(value) ? value : [value]);
    const [dataSourceOptionsAsJSON, setDataSourceOptionsAsJSON] = (0, import_react7.useState)(null);
    (0, import_react7.useEffect)(() => {
      const dataAsJSON = JSON.stringify({ dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData });
      if (!hasDataSource || dataSourceOptionsAsJSON === dataAsJSON) {
        return;
      }
      setDataSourceOptionsAsJSON(dataAsJSON);
      dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(props), value).then((values2) => {
        setIsLoading(false);
        if (values2.hidden) {
          setOptions({ hidden: true });
          return;
        }
        values2 = values2.map((item) => ({ key: item.value == "" ? "__empty__" : item.value, ...item }));
        if (layout === "color") {
          setOptions(processColorValues(values2));
          return;
        }
        setOptions(values2);
      });
    }, [dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData]);
    if (isLoading) {
      return /* @__PURE__ */ import_react7.default.createElement(Wrapper, { id, label, renderHelpIcon }, /* @__PURE__ */ import_react7.default.createElement(LoadingWithStyles_default, { isLoading, title: "Beromir.ToggleEditor:Main:loading" }));
    }
    if (options.hidden) {
      return null;
    }
    if (!options || !options.length) {
      return /* @__PURE__ */ import_react7.default.createElement(Wrapper, { id, label, className: style_default.error, renderHelpIcon }, i18nRegistry.translate(
        `Beromir.ToggleEditor:Main:error.${hasDataSource ? "noDataFromSource" : "noNodeTypeDefintion"}`
      ));
    }
    function highlightItem(item) {
      if (JSON.stringify(active) === JSON.stringify(savedValue)) {
        return false;
      }
      const valueIsInSaved = savedValue.includes(item.value);
      if (!active.length) {
        return valueIsInSaved;
      }
      const valueIsActive = itemIsActive(item);
      if (!multiple) {
        return valueIsActive;
      }
      return valueIsActive && !valueIsInSaved || valueIsInSaved && !valueIsActive;
    }
    function itemIsActive(item) {
      return active.includes(item.value);
    }
    function onChange(item, node) {
      if (node) {
        node.blur();
      }
      if (!item) {
        commit(multiple ? [] : emptyValue);
        setActive([]);
        return;
      }
      const valueFromItem = item.value;
      let activeItems = [...active];
      const valueIsAlreadyActive = activeItems.includes(valueFromItem);
      if (!multiple) {
        activeItems = valueIsAlreadyActive ? [] : [valueFromItem];
      } else if (valueIsAlreadyActive) {
        activeItems.splice(activeItems.indexOf(valueFromItem), 1);
      } else {
        activeItems.push(valueFromItem);
      }
      if (!allowEmpty && activeItems.length === 0) {
        return;
      }
      setActive(activeItems);
      if (!multiple) {
        activeItems = activeItems[0] || emptyValue;
      }
      commit(activeItems);
    }
    const convertToColumns = (value2, maximalColumns2 = 0) => {
      if (typeof value2 === "number" && value2 > 0) {
        return value2;
      }
      const items = options.length || 1;
      if (!value2 || typeof value2 !== "string") {
        return items;
      }
      try {
        value2 = value2.replaceAll("{items}", items);
        if (maximalColumns2) {
          value2 = value2.replaceAll("{maximalColumns}", items);
        }
        const evaluateFn = new Function(`return Math.floor(${value2})`);
        return evaluateFn();
      } catch (e) {
        console.warn('An error occurred while trying to evaluate "' + value2 + '"\n', e);
      }
    };
    const getColumns = () => {
      const evaluatedColumns = convertToColumns(columns, maximalColumns);
      const evaluatedMaximalColumns = convertToColumns(maximalColumns);
      return { "--columns": Math.min(evaluatedColumns, evaluatedMaximalColumns) };
    };
    const resetLabel = i18nRegistry.translate("Beromir.ToggleEditor:Main:reset");
    const AllowEmptyIcon = ({ item, className = style_default.allowEmpty }) => allowEmpty && !multiple ? /* @__PURE__ */ import_react7.default.createElement("span", { className: clsx_default(className, itemIsActive(item) && style_default.allowEmptyShow) }, /* @__PURE__ */ import_react7.default.createElement(import_react_ui_components3.Icon, { size: "sm", icon: "times" })) : null;
    return /* @__PURE__ */ import_react7.default.createElement(
      Wrapper,
      {
        id,
        label,
        className: [style_default[layout], disabled && style_default.disabled],
        style: { ...wrapperCustomStyle || {}, ...getColumns() },
        renderHelpIcon
      },
      positionalArraySorter_default(options).map((item, index) => {
        const isCurrent = itemIsActive(item);
        const disabled2 = item.disabled;
        const state = isCurrent ? "active" : "default";
        const labels = getItemVariants(
          item,
          "label",
          true,
          (value2) => {
            if (value2 === "i18n") {
              const sitePackage = props.focusedNodeType.split(":")[0];
              const nodeType = props.focusedNodeType.split(":")[1];
              const qualifier = sitePackage + ":NodeTypes." + nodeType + ":properties." + props.identifier + ".values." + item.key;
              return i18nRegistry.translate(qualifier);
            }
            return i18nRegistry.translate(value2);
          }
        );
        const descriptions = getItemVariants(
          item,
          "description",
          true,
          (value2) => {
            if (value2 === "i18n") {
              const sitePackage = props.focusedNodeType.split(":")[0];
              const nodeType = props.focusedNodeType.split(":")[1];
              const qualifier = sitePackage + ":NodeTypes." + nodeType + ":properties." + props.identifier + ".descriptions." + item.key;
              return i18nRegistry.translate(qualifier);
            }
            return i18nRegistry.translate(value2);
          }
        );
        const label2 = labels?.[state];
        const description = descriptions?.[state];
        const title = description || label2;
        const ariaLabel = isCurrent && allowEmpty ? resetLabel : title;
        const highlightStyle = highlightItem(item) && style_default.highlight;
        switch (layout) {
          case "list":
            if (multiple) {
              return /* @__PURE__ */ import_react7.default.createElement(
                "label",
                {
                  className: clsx_default(style_default.listButton, highlightStyle),
                  title: description,
                  "aria-label": ariaLabel,
                  style: item.buttonCustomStyle || buttonCustomStyle || {},
                  key: `list-multiple-${index}`
                },
                /* @__PURE__ */ import_react7.default.createElement(
                  import_react_ui_components3.CheckBox,
                  {
                    isChecked: isCurrent,
                    disabled: disabled2,
                    onChange: () => onChange(item)
                  }
                ),
                /* @__PURE__ */ import_react7.default.createElement(Icons, { item, isCurrent, size: iconSize }),
                /* @__PURE__ */ import_react7.default.createElement(PreviewImage, { item, isCurrent }),
                label2 && /* @__PURE__ */ import_react7.default.createElement(
                  "span",
                  {
                    className: style_default.flex1,
                    style: item.labelCustomStyle || labelCustomStyle || {}
                  },
                  label2
                )
              );
            }
            return /* @__PURE__ */ import_react7.default.createElement(
              "button",
              {
                onClick: ({ currentTarget }) => onChange(item, currentTarget),
                type: "button",
                title: description,
                "aria-label": ariaLabel,
                disabled: disabled2,
                className: clsx_default(style_default.listButton, isCurrent && style_default.selected, highlightStyle),
                style: item.buttonCustomStyle || buttonCustomStyle || {},
                key: `list-single-${index}`
              },
              /* @__PURE__ */ import_react7.default.createElement("span", { className: style_default.radio }, /* @__PURE__ */ import_react7.default.createElement("span", null)),
              /* @__PURE__ */ import_react7.default.createElement(Icons, { item, isCurrent, size: iconSize }),
              /* @__PURE__ */ import_react7.default.createElement(PreviewImage, { item, isCurrent }),
              label2 && /* @__PURE__ */ import_react7.default.createElement(
                "span",
                {
                  className: style_default.flex1,
                  style: item.labelCustomStyle || labelCustomStyle || {}
                },
                label2
              ),
              /* @__PURE__ */ import_react7.default.createElement(AllowEmptyIcon, { item, className: style_default.allowEmptyRadio })
            );
          case "color":
            const maxColorIndex = item.color.length - 1;
            return /* @__PURE__ */ import_react7.default.createElement("div", { className: style_default.colorBox, key: `color-${index}` }, /* @__PURE__ */ import_react7.default.createElement(
              "button",
              {
                onClick: ({ currentTarget }) => onChange(item, currentTarget),
                type: "button",
                title,
                "aria-label": ariaLabel,
                disabled: disabled2,
                className: clsx_default(style_default.colorButton, isCurrent && style_default.selected, highlightStyle),
                style: item.buttonCustomStyle || buttonCustomStyle || {}
              },
              item.color.map((color, index2) => /* @__PURE__ */ import_react7.default.createElement(
                "span",
                {
                  key: `color-${index2}`,
                  className: clsx_default(
                    style_default.colorPreview,
                    color === "transparent" && style_default.colorTransparent,
                    maxColorIndex === index2 && style_default.colorPreviewLast
                  ),
                  style: { backgroundColor: color }
                }
              )),
              /* @__PURE__ */ import_react7.default.createElement(AllowEmptyIcon, { item })
            ), label2 && /* @__PURE__ */ import_react7.default.createElement("span", { className: clsx_default(style_default.label, disabled2 && style_default.disabled) }, label2));
          default:
            return /* @__PURE__ */ import_react7.default.createElement(
              "button",
              {
                onClick: () => onChange(item),
                title,
                "aria-label": ariaLabel,
                disabled: disabled2,
                className: clsx_default(style_default.button, isCurrent && style_default.buttonCurrent, highlightStyle),
                style: item.buttonCustomStyle || buttonCustomStyle || {},
                key: `default-${index}`,
                type: "button"
              },
              /* @__PURE__ */ import_react7.default.createElement(Icons, { item, isCurrent, size: iconSize }),
              /* @__PURE__ */ import_react7.default.createElement(PreviewImage, { item, isCurrent }),
              label2 && /* @__PURE__ */ import_react7.default.createElement(
                "span",
                {
                  className: clsx_default(item.icon || item.preview ? style_default.label : null),
                  style: item.labelCustomStyle || labelCustomStyle || {}
                },
                label2
              ),
              /* @__PURE__ */ import_react7.default.createElement(AllowEmptyIcon, { item })
            );
        }
      })
    );
  }
  Editor.propTypes = {
    value: import_prop_types.default.string,
    commit: import_prop_types.default.func.isRequired,
    i18nRegistry: import_prop_types.default.object.isRequired,
    options: import_prop_types.default.shape({
      layout: import_prop_types.default.oneOf(["grid", "flex", "flex-start", "list", "color"]),
      columns: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
      maximalColumns: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
      allowEmpty: import_prop_types.default.bool,
      emptyValue: import_prop_types.default.string,
      multiple: import_prop_types.default.bool,
      iconSize: import_prop_types.default.oneOf(["xs", "sm", "lg", "2x", "3x"]),
      labelCustomStyle: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
      buttonCustomStyle: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
      wrapperCustomStyle: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
      values: import_prop_types.default.objectOf(
        import_prop_types.default.shape({
          label: import_prop_types.default.string,
          labelCustomStyle: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
          buttonCustomStyle: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
          icon: import_prop_types.default.string,
          iconRotate: import_prop_types.default.number,
          description: import_prop_types.default.string,
          color: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
          hidden: import_prop_types.default.bool,
          preview: import_prop_types.default.string,
          previewFull: import_prop_types.default.bool,
          disabled: import_prop_types.default.bool
        })
      ),
      dataSourceIdentifier: import_prop_types.default.string,
      dataSourceUri: import_prop_types.default.string,
      dataSourceDisableCaching: import_prop_types.default.bool,
      dataSourceAdditionalData: import_prop_types.default.objectOf(import_prop_types.default.any)
    }).isRequired
  };
  var neosifier3 = (0, import_neos_ui_decorators3.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources")
  }));
  var connector = (0, import_react_redux.connect)((state) => {
    return {
      focusedNodePath: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodePathSelector(state),
      focusedNodeType: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodeTypeSelector(state)
    };
  });
  var ToggleEditor_default = neosifier3(connector(Editor));

  // Resources/Private/Editor/manifest.js
  dist_default("Beromir.ToggleEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    editorsRegistry.set("Beromir.ToggleEditor/Editor", {
      component: ToggleEditor_default,
      hasOwnLabel: true
    });
  });
})();
//# sourceMappingURL=Plugin.js.map
