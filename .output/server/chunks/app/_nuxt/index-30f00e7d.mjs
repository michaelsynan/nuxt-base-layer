import { _ as __nuxt_component_0$1 } from './nuxt-link-99c1aeca.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$4 = {
  data() {
    return {
      isMenuOpen: false
    };
  },
  props: {
    bgColor: {
      type: String,
      default: "bg-black bg-opacity-30"
    }
  },
  computed: {
    bgColorClass() {
      return this.bgColor;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "navbar",
    class: ["w-full", "text-white", "py-4", "px-4", "md:px-20", $options.bgColorClass]
  }, _attrs))}><div class="container mx-auto flex flex-wrap justify-between items-center"><div class="w-1/2 md:w-auto text-left mb-4 md:mb-0 text-sm">LOGO</div><div class="hidden md:flex text-center md:text-left mb-4 md:mb-0 space-x-4">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "hover:bg-gray-800 p-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "hover:bg-gray-800 p-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "hover:bg-gray-800 p-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "hover:bg-gray-800 p-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-1/2 md:w-auto text-right md:text-left"><button class="md:hidden text-white text-2xl focus:outline-none"><i class="material-icons">${ssrInterpolate($data.isMenuOpen ? "close" : "menu")}</i></button></div></div><div class="${ssrRenderClass([{ "hidden": !$data.isMenuOpen, "block": $data.isMenuOpen }, "md:hidden"])}"><div class="flex flex-col text-center divide-y divide-gray-800">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "py-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "py-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "py-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "py-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theNavbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "relative w-full h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat",
    style: `background-image: url(${_ctx.imageUrl})`
  }, _attrs))} data-v-c1dfb946><div class="absolute inset-0 bg-black bg-opacity-50" data-v-c1dfb946></div><div class="relative container mx-auto px-4 md:px-20 flex flex-col justify-center items-center h-full text-white" data-v-c1dfb946><div class="relative flex flex-col items-center text-center z-10" data-v-c1dfb946><h1 class="text-3xl md:text-5xl font-semibold" data-v-c1dfb946>Your Hero Title</h1><p class="text-xl md:text-2xl mt-4" data-v-c1dfb946>Your hero description goes here.</p></div><div class="absolute top-0 left-0 w-full h-full z-0" data-v-c1dfb946><div class="bg-gradient-to-br animate-night-nebula-sky h-full w-full" data-v-c1dfb946></div><div class="overlay-pattern h-full w-full" data-v-c1dfb946></div></div><div class="mt-6 flex flex-col space-y-4 z-10" data-v-c1dfb946><button class="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200" data-v-c1dfb946>Regular Button</button><button class="border-2 border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black" data-v-c1dfb946>Ghost Button</button></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theHero5.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c1dfb946"]]);
const _sfc_main$2 = {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form data:", this.formData);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-stone-900 p-8 rounded-lg max-w-2xl mx-auto" }, _attrs))}><h2 class="text-stone-100 text-2xl font-bold mb-6">Contact Us</h2><form><div class="mb-4"><label for="name" class="text-stone-100 mb-2">Name</label><input type="text" id="name"${ssrRenderAttr("value", $data.formData.name)} class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 rounded"></div><div class="mb-4"><label for="email" class="text-stone-100 mb-2">Email</label><input type="email" id="email"${ssrRenderAttr("value", $data.formData.email)} class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 rounded"></div><div class="mb-4"><label for="message" class="text-stone-100 mb-2">Message</label><textarea id="message" rows="4" class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 rounded">${ssrInterpolate($data.formData.message)}</textarea></div><button type="submit" class="px-4 py-2 text-stone-100 bg-stone-600 hover:bg-stone-500 rounded"> Send </button></form></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    bgColor: {
      type: String,
      default: "bg-black bg-opacity-30"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_i_material_symbols_keyboard_double_arrow_right_rounded = resolveComponent("i-material-symbols-keyboard-double-arrow-right-rounded");
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: `w-full text-white py-4 px-4 md:px-20 mt-auto ${$props.bgColor}`
  }, _attrs))}><div class="container mx-auto flex flex-wrap justify-between items-center"><div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0 text-sm">FOOTER BRANDING</div><div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "#" }, {
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
  _push(`</div><div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "#" }, {
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
  _push(`</div><div class="w-full md:w-auto text-center md:text-left">`);
  _push(ssrRenderComponent(_component_i_material_symbols_keyboard_double_arrow_right_rounded, {
    style: { "color": "white" },
    class: "text-xl md:text-2xl inline"
  }, null, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/theFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_theNavbar = __nuxt_component_0;
  const _component_TheHero5 = __nuxt_component_1;
  const _component_theContactForm = __nuxt_component_2;
  const _component_theFooter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><div class="flex-grow">`);
  _push(ssrRenderComponent(_component_theNavbar, { "bg-color": "bg-blue-500" }, null, _parent));
  _push(ssrRenderComponent(_component_TheHero5, null, null, _parent));
  _push(ssrRenderComponent(_component_theContactForm, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_theFooter, { "bg-color": "bg-red-500" }, null, _parent));
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
//# sourceMappingURL=index-30f00e7d.mjs.map
