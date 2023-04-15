import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, computed, unref, toDisplayString, renderSlot, openBlock, createElementBlock, createElementVNode } from 'file:///home/mikey/git/baselayer/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'file:///home/mikey/git/baselayer/node_modules/vue/server-renderer/index.mjs';
import chroma from 'file:///home/mikey/git/baselayer/node_modules/chroma-js/chroma.js';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/ofetch/dist/node.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/unctx/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/unhead/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/scule/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/unstorage/dist/index.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/mikey/git/baselayer/node_modules/radix3/dist/index.mjs';

function randomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}
function generateShades(color) {
  const light = chroma(color).brighten(1).hex();
  const dark = chroma(color).darken(1).hex();
  return { light, dark };
}
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "generate",
  __ssrInlineRender: true,
  setup(__props) {
    const colors = ref([]);
    function generateColors() {
      const baseColor = randomHexColor();
      const palette = {
        primary: { name: "primary", hex: baseColor },
        secondary: { name: "secondary", hex: chroma(baseColor).set("hsl.h", "+120").hex() },
        tertiary: { name: "tertiary", hex: chroma(baseColor).set("hsl.h", "-120").hex() }
      };
      palette.primary_light = { name: "primary_light", hex: generateShades(palette.primary.hex).light };
      palette.primary_dark = { name: "primary_dark", hex: generateShades(palette.primary.hex).dark };
      palette.secondary_light = { name: "secondary_light", hex: generateShades(palette.secondary.hex).light };
      palette.secondary_dark = { name: "secondary_dark", hex: generateShades(palette.secondary.hex).dark };
      palette.tertiary_light = { name: "tertiary_light", hex: generateShades(palette.tertiary.hex).light };
      palette.tertiary_dark = { name: "tertiary_dark", hex: generateShades(palette.tertiary.hex).dark };
      palette.baseText_light = { name: "baseText_light", hex: chroma.mix(palette.primary.hex, "#ffffff", 0.95).hex() };
      palette.baseText_dark = { name: "baseText_dark", hex: chroma.mix(palette.primary.hex, "#000000", 0.98).hex() };
      colors.value = Object.values(palette);
    }
    generateColors();
    function textColor(hexColor) {
      return chroma(hexColor).luminance() > 0.5 ? "#000000" : "#ffffff";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-black" }, _attrs))} data-v-56dc3e1e><h2 class="text-white p-4" data-v-56dc3e1e>Pick Colors</h2><button class="btn" data-v-56dc3e1e>Generate Colors</button><div class="color-palette" data-v-56dc3e1e><!--[-->`);
      ssrRenderList(colors.value, (color, index2) => {
        _push(`<div class="color-swatch flex" style="${ssrRenderStyle({ backgroundColor: color.hex })}" data-v-56dc3e1e><div class="color-label" data-v-56dc3e1e><p class="color-name" style="${ssrRenderStyle({ color: textColor(color.hex) })}" data-v-56dc3e1e>${ssrInterpolate(color.name)}</p><p class="color-hex" style="${ssrRenderStyle({ color: textColor(color.hex) })}" data-v-56dc3e1e>${ssrInterpolate(color.hex)}</p></div></div>`);
      });
      _push(`<!--]--></div><button class="btn-add-to-theme align-start" data-v-56dc3e1e>Add to Theme</button></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/generate.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-56dc3e1e"]]);
const _sfc_main$f = {
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "tertiary"].includes(value)
    },
    type: {
      type: String,
      default: "default",
      validator: (value) => ["default", "ghost"].includes(value)
    }
  },
  computed: {
    buttonColor() {
      return this.type === "ghost" ? "bg-transparent" : `bg-${this.color}`;
    },
    textColor() {
      return this.type === "ghost" ? `text-${this.color}` : "text-white";
    },
    hoverColor() {
      return this.type === "ghost" ? `hover:bg-${this.color}` : `hover:bg-${this.color}-light`;
    },
    borderColor() {
      return `border border-${this.color}`;
    },
    hoverBorderColor() {
      return this.type === "ghost" ? `hover:border-${this.color}-light` : "";
    },
    hoverTextColor() {
      return this.type === "ghost" ? "hover:text-white" : "";
    },
    buttonClasses() {
      return [
        this.buttonColor,
        this.hoverColor,
        this.textColor,
        this.borderColor,
        this.hoverBorderColor,
        this.hoverTextColor,
        "px-4",
        "py-2",
        "focus:outline-none",
        "transition-colors",
        "duration-200",
        "max-w-min",
        "whitespace-nowrap"
      ];
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: $options.buttonClasses }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseBtn.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$b]]);
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const __unplugin_components_1$1 = { name: "mdi-menu", render: render$7 };
const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const __unplugin_components_0$4 = { name: "mdi-close", render: render$6 };
const _sfc_main$e = {
  data() {
    return {
      isMenuOpen: false
    };
  },
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "tertiary"].includes(value)
    },
    links: {
      type: Array,
      default: () => [
        { text: "Home", to: "#" },
        { text: "Services", to: "#" },
        { text: "Pricing", to: "#" },
        { text: "Contact", to: "#" }
      ]
    },
    logoText: {
      type: String,
      default: "LOGO"
    },
    logoImage: {
      type: String,
      default: ""
    }
  },
  computed: {
    bgColorClass() {
      return `bg-${this.color}`;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_i_mdi_close = __unplugin_components_0$4;
  const _component_i_mdi_menu = __unplugin_components_1$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "navbar",
    class: ["w-full", "text-white", "py-2", "px-4", "md:px-20", $options.bgColorClass]
  }, _attrs))}><div class="container mx-auto flex flex-wrap justify-between items-center"><div class="h-full md:w-auto text-left text-sm items-center">`);
  if ($props.logoImage) {
    _push(`<img${ssrRenderAttr("src", $props.logoImage)}${ssrRenderAttr("alt", $props.logoText)} class="h-8 md:h-12">`);
  } else {
    _push(`<span>${ssrInterpolate($props.logoText)}</span>`);
  }
  _push(`</div><div class="hidden md:flex text-center md:text-left space-x-4"><!--[-->`);
  ssrRenderList($props.links, (link) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      key: link.text,
      to: link.to,
      class: "nav-link p-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.text)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.text), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="md:w-auto text-right md:text-left flex justify-end items-center"><button class="md:hidden text-white text-2xl focus:outline-none h-full"><div class="flex items-center">`);
  if ($data.isMenuOpen) {
    _push(`<span>`);
    _push(ssrRenderComponent(_component_i_mdi_close, {
      style: { "color": "white" },
      class: "text-xl md:text-2xl inline"
    }, null, _parent));
    _push(`</span>`);
  } else {
    _push(`<span>`);
    _push(ssrRenderComponent(_component_i_mdi_menu, {
      style: { "color": "white" },
      class: "text-xl md:text-2xl inline"
    }, null, _parent));
    _push(`</span>`);
  }
  _push(`</div></button></div></div><div class="${ssrRenderClass([{ "hidden": !$data.isMenuOpen, "block": $data.isMenuOpen }, "md:hidden"])}"><div class="flex flex-col text-center"><!--[-->`);
  ssrRenderList($props.links, (link) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      key: link.text,
      to: link.to,
      class: "nav-link py-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.text)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.text), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div></nav>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseNav.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$a]]);
const _hoisted_1$5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const __unplugin_components_0$3 = { name: "mdi-magnify", render: render$5 };
const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_i_mdi_magnify = __unplugin_components_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary-light max-w-min" }, _attrs))}><div class="flex items-center p-4 space-x-4"><div class="flex items-center border border-gray-300 bg-white"><span class="pl-2 bg-white">`);
  _push(ssrRenderComponent(_component_i_mdi_magnify, null, null, _parent));
  _push(`</span><input class="p-2 outline-none" type="text" placeholder="Search..."></div><button class="bg-primary text-white px-4 py-2" type="submit">Search</button></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseSearch.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$c = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_i_mdi_magnify = __unplugin_components_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><div class="flex items-center"><div class="flex items-center border border-gray-300 rounded-l-md"><span class="pl-2">`);
  _push(ssrRenderComponent(_component_i_mdi_magnify, null, null, _parent));
  _push(`</span><input class="p-2 outline-none" type="text" placeholder="Search..."></div><button class="bg-blue-500 text-white p-2 rounded-r-md" type="submit">Search</button></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseSearchAlt.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8]]);
const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const __unplugin_components_2 = { name: "mdi-linkedin", render: render$4 };
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_1 = { name: "mdi-instagram", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_0$2 = { name: "mdi-github", render: render$2 };
const _sfc_main$b = {
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    bgColorClass() {
      return `bg-${this.color}`;
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_i_mdi_github = __unplugin_components_0$2;
  const _component_i_mdi_instagram = __unplugin_components_1;
  const _component_i_mdi_linkedin = __unplugin_components_2;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: `w-full text-white py-4 px-4 md:px-20 mt-auto bg-primary ${$options.bgColorClass}`
  }, _attrs))}><div class="container mx-auto flex flex-wrap justify-between items-center space-y-4 md:space-y-0"><div class="w-full md:w-auto text-center md:text-left text-sm">FOOTER BRANDING</div><div class="w-full md:w-auto text-center md:text-left">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full md:w-auto text-center md:text-left">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy`);
      } else {
        return [
          createTextVNode("Privacy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full md:w-auto text-center md:text-left flex space-x-2.5">`);
  _push(ssrRenderComponent(_component_i_mdi_github, {
    style: { "color": "white" },
    class: "text-xl md:text-2xl"
  }, null, _parent));
  _push(ssrRenderComponent(_component_i_mdi_instagram, {
    style: { "color": "white" },
    class: "text-xl md:text-2xl"
  }, null, _parent));
  _push(ssrRenderComponent(_component_i_mdi_linkedin, {
    style: { "color": "white" },
    class: "text-xl md:text-2xl"
  }, null, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseFooter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0$1 = { name: "mdi-close-thick", render: render$1 };
const _sfc_main$a = {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ["warn", "error", "success"].indexOf(value) !== -1;
      }
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    bgClass() {
      switch (this.type) {
        case "warn":
          return "bg-yellow-400";
        case "error":
          return "bg-red-400";
        case "success":
          return "bg-green-400";
        default:
          return "bg-gray-300";
      }
    },
    textColorClass() {
      return "text-white";
    }
  },
  methods: {
    close() {
      this.visible = false;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_i_mdi_close_thick = __unplugin_components_0$1;
  if ($data.visible) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: [$options.bgClass, $options.textColorClass, "p-4 shadow-md flex justify-between items-center"]
    }, _attrs))}><div>${ssrInterpolate($props.message)}</div><button class="text-white hover:text-gray-300">`);
    _push(ssrRenderComponent(_component_i_mdi_close_thick, null, null, _parent));
    _push(`</button></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseToast.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$9 = {
  __name: "baseTag",
  __ssrInlineRender: true,
  props: {
    bgColor: {
      type: String,
      default: "bg-blue-500"
    },
    textColor: {
      type: String,
      default: "text-white"
    },
    defaultText: {
      type: String,
      default: "Default Tag"
    }
  },
  setup(__props) {
    const props = __props;
    const tagClasses = computed(() => {
      return `tag ${props.bgColor} ${props.textColor} font-semibold text-xs py-1 px-2 rounded-full whitespace-nowrap`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [unref(tagClasses), "inline-block max-w-min cursor-pointer"]
      }, _attrs))} data-v-2790524f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.defaultText)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseTag.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-2790524f"]]);
const _sfc_main$8 = {
  __name: "baseTagGroup",
  __ssrInlineRender: true,
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const defaultTags = [
      { text: "Vue.js", bgColor: "bg-green-500", textColor: "text-white" },
      { text: "Nuxt.js", bgColor: "bg-blue-500", textColor: "text-white" },
      { text: "JavaScript", bgColor: "bg-yellow-500", textColor: "text-black" },
      { text: "CSS", bgColor: "bg-purple-500", textColor: "text-white" },
      { text: "HTML", bgColor: "bg-red-500", textColor: "text-white" }
    ];
    const tagList = computed(() => props.tags.length > 0 ? props.tags : defaultTags);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseTag = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tag-group" }, _attrs))} data-v-4f1e07b9><!--[-->`);
      ssrRenderList(unref(tagList), (tag, index2) => {
        _push(ssrRenderComponent(_component_baseTag, {
          key: index2,
          "bg-color": tag.bgColor,
          "text-color": tag.textColor
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseTagGroup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-4f1e07b9"]]);
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "mdi-chevron-down", render };
const _sfc_main$7 = {
  data() {
    return {
      isOpen: false,
      items: ["Item 1", "Item 2", "Item 3"]
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectItem(item) {
      this.isOpen = false;
      console.log("Selected item:", item);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_i_mdi_chevron_down = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-block" }, _attrs))} data-v-8810e662><button class="bg-primary text-white flex items-center px-4 py-2" data-v-8810e662> Dropdown <span class="ml-2" data-v-8810e662>`);
  _push(ssrRenderComponent(_component_i_mdi_chevron_down, {
    class: [$data.isOpen ? "rotate-180" : "rotate-0", "fas fa-chevron-down"]
  }, null, _parent));
  _push(`</span></button><div style="${ssrRenderStyle($data.isOpen ? null : { display: "none" })}" class="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-48 z-10" data-v-8810e662><ul class="py-2" data-v-8810e662><!--[-->`);
  ssrRenderList($data.items, (item, index2) => {
    _push(`<li class="cursor-pointer" data-v-8810e662><a class="block px-4 py-2 hover:bg-gray-200" href="#" data-v-8810e662>${ssrInterpolate(item)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseDropdown.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-8810e662"]]);
const _sfc_main$6 = {
  data() {
    return {
      isOpen: false,
      items: ["Item 1", "Item 2", "Item 3"]
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectItem(item) {
      this.isOpen = false;
      console.log("Selected item:", item);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_i_mdi_chevron_down = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative block" }, _attrs))} data-v-09434056><button class="text-black flex items-center" data-v-09434056> Link <span class="ml-1" data-v-09434056>`);
  _push(ssrRenderComponent(_component_i_mdi_chevron_down, {
    class: [$data.isOpen ? "rotate-180" : "rotate-0", "fas fa-chevron-down"]
  }, null, _parent));
  _push(`</span></button><div style="${ssrRenderStyle($data.isOpen ? null : { display: "none" })}" class="absolute left-0 mt-2 border-none shadow-none z-10" data-v-09434056><ul class="py-0" data-v-09434056><!--[-->`);
  ssrRenderList($data.items, (item, index2) => {
    _push(`<li class="cursor-pointer bg-white" data-v-09434056><a class="block px-4 py-2 hover:bg-gray-200" href="#" data-v-09434056>${ssrInterpolate(item)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menuDropdown.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-09434056"]]);
const _sfc_main$5 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    inputId: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
  if ($props.label) {
    _push(`<label${ssrRenderAttr("for", $props.inputId)} class="mb-2 text-sm font-medium">${ssrInterpolate($props.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttr("id", $props.inputId)}${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("placeholder", $props.placeholder)}${ssrRenderAttr("value", $props.value)} class="border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none"></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseInput.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  __name: "baseInputBtn",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: "Input Label"
    },
    placeholder: {
      type: String,
      default: "enter email"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseInput = __nuxt_component_11;
      const _component_BaseBtn = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex space-x-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_baseInput, {
        label: __props.label,
        placeholder: __props.placeholder
      }, null, _parent));
      _push(`<div class="flex self-end">`);
      _push(ssrRenderComponent(_component_BaseBtn, { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`Enter`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode("Enter")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseInputBtn.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_12 = _sfc_main$4;
const _sfc_main$3 = {
  props: {
    imageSrc: String,
    imageAlt: String,
    header: String,
    body: String
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_baseBtn = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row max-w-4xl my-20 bg-tertiary relative" }, _attrs))}><div class="md:w-1/2"><img class="h-auto object-cover rounded"${ssrRenderAttr("src", $props.imageSrc)}${ssrRenderAttr("alt", $props.imageAlt)}></div><div class="md:w-1/2 md:pl-8 pt-8 md:pt-0 flex flex-col justify-center"><h2 class="text-4xl text-white font-semibold pb-2">${ssrInterpolate($props.header)}</h2><p class="text-gray-100 text-2xl font-bold pb-4">${ssrInterpolate($props.body)}</p>`);
  _push(ssrRenderComponent(_component_baseBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More`);
      } else {
        return [
          createTextVNode("Read More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseHero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  setup() {
    const imageUrl = ref("");
    function fetchImage() {
      const width = window.innerWidth >= 768 ? 1200 : 600;
      const height = window.innerWidth >= 768 ? 700 : 500;
      imageUrl.value = `https://loremflickr.com/${width}/${height}/nature`;
    }
    return {
      imageUrl,
      fetchImage
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "relative w-full h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat",
    style: `background-image: url(${$setup.imageUrl})`
  }, _attrs))}><div class="absolute inset-0 bg-black bg-opacity-50"></div><div class="absolute top-0 left-0 w-full h-full z-0"></div><div class="relative container mx-auto px-4 md:px-20 flex flex-col justify-center h-full text-white"><h1 class="text-3xl md:text-5xl font-semibold text-left">Your Hero Title</h1><p class="text-xl md:text-2xl mt-4 text-left">Your hero description goes here. Make it count.</p><div class="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"><button class="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200">Regular Button</button><button class="border-2 border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black">Ghost Button</button></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/baseHeroAlt.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "teamMembers",
  __ssrInlineRender: true,
  setup(__props) {
    const teamMembers = [
      {
        id: 1,
        name: "John Doe",
        imageSrc: "https://via.placeholder.com/500x300",
        website: "https://johndoe.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida justo. Duis varius purus vel diam pellentesque, at consectetur nisi tincidunt."
      },
      {
        id: 2,
        name: "Jane Smith",
        imageSrc: "https://via.placeholder.com/500x300",
        website: "https://janesmith.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida justo. Duis varius purus vel diam pellentesque, at consectetur nisi tincidunt."
      },
      {
        id: 3,
        name: "Bob Johnson",
        imageSrc: "https://via.placeholder.com/500x300",
        website: "https://bobjohnson.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida justo. Duis varius purus vel diam pellentesque, at consectetur nisi tincidunt."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto my-20 sm:px-4 md:px-4" }, _attrs))}><!--[-->`);
      ssrRenderList(teamMembers, (member) => {
        _push(`<div class="bg-tertiary-dark shadow-lg overflow-hidden text-gray-100"><img${ssrRenderAttr("src", member.imageSrc)}${ssrRenderAttr("alt", member.name)} class="w-full h-48 object-cover"><div class="p-4"><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(member.name)}</h3><p class="text-gray-400 text-sm mb-4">${ssrInterpolate(member.bio)}</p><a${ssrRenderAttr("href", member.website)} target="_blank" class="text-primary-light text-sm hover:underline">${ssrInterpolate(member.website)}</a></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teamMembers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_15 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_generate = __nuxt_component_0;
  const _component_baseBtn = __nuxt_component_1;
  const _component_baseNav = __nuxt_component_2;
  const _component_baseSearch = __nuxt_component_3;
  const _component_baseSearchAlt = __nuxt_component_4;
  const _component_baseFooter = __nuxt_component_5;
  const _component_baseToast = __nuxt_component_6;
  const _component_baseTag = __nuxt_component_7;
  const _component_baseTagGroup = __nuxt_component_8;
  const _component_baseDropdown = __nuxt_component_9;
  const _component_menuDropdown = __nuxt_component_10;
  const _component_baseInput = __nuxt_component_11;
  const _component_baseInputBtn = __nuxt_component_12;
  const _component_baseHero = __nuxt_component_13;
  const _component_baseHeroAlt = __nuxt_component_14;
  const _component_teamMembers = __nuxt_component_15;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-20 space-y-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_generate, null, null, _parent));
  _push(`<h3>Buttons</h3><div class="flex space-x-4">`);
  _push(ssrRenderComponent(_component_baseBtn, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Button`);
      } else {
        return [
          createTextVNode("Test Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_baseBtn, { color: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Button`);
      } else {
        return [
          createTextVNode("Test Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_baseBtn, { color: "tertiary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Button`);
      } else {
        return [
          createTextVNode("Test Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex space-x-4">`);
  _push(ssrRenderComponent(_component_baseBtn, {
    color: "primary",
    type: "ghost"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Button`);
      } else {
        return [
          createTextVNode("Test Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_baseBtn, {
    color: "secondary",
    type: "ghost"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Button`);
      } else {
        return [
          createTextVNode("Test Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_baseBtn, {
    color: "tertiary",
    type: "ghost"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Test Button`);
      } else {
        return [
          createTextVNode("Test Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h3>Navigation Bars</h3>`);
  _push(ssrRenderComponent(_component_baseNav, { color: "primary" }, null, _parent));
  _push(ssrRenderComponent(_component_baseSearch, null, null, _parent));
  _push(ssrRenderComponent(_component_baseSearchAlt, null, null, _parent));
  _push(`<h3>Footers</h3>`);
  _push(ssrRenderComponent(_component_baseFooter, { color: "tertiary" }, null, _parent));
  _push(`<h3>Toasts</h3>`);
  _push(ssrRenderComponent(_component_baseToast, {
    type: "success",
    message: "Your changes have been saved."
  }, null, _parent));
  _push(ssrRenderComponent(_component_baseToast, {
    type: "warn",
    message: "Your changes have not been saved."
  }, null, _parent));
  _push(ssrRenderComponent(_component_baseToast, {
    type: "error",
    message: "There has been an error."
  }, null, _parent));
  _push(`<h3>Tags</h3>`);
  _push(ssrRenderComponent(_component_baseTag, null, null, _parent));
  _push(`<h3>Tag Groups</h3>`);
  _push(ssrRenderComponent(_component_baseTagGroup, null, null, _parent));
  _push(`<h3>Dropdowns</h3>`);
  _push(ssrRenderComponent(_component_baseDropdown, null, null, _parent));
  _push(ssrRenderComponent(_component_menuDropdown, null, null, _parent));
  _push(`<h3>Inputs</h3>`);
  _push(ssrRenderComponent(_component_baseInput, {
    label: "Input Label",
    placeholder: "enter email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_baseInputBtn, null, null, _parent));
  _push(`<h3>Heros</h3>`);
  _push(ssrRenderComponent(_component_baseHero, {
    imageSrc: "birds.jpg",
    header: "Lets Make It Happen",
    body: "This is the body text"
  }, null, _parent));
  _push(ssrRenderComponent(_component_baseHeroAlt, null, null, _parent));
  _push(ssrRenderComponent(_component_teamMembers, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ec454195.mjs.map
