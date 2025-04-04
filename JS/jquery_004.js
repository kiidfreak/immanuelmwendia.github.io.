

/*! Magnific Popup - v0.9.4 - 2013-08-07
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
	var t, i, n, o, a, r, s, l = "Close",
		c = "BeforeClose",
		d = "AfterClose",
		u = "BeforeAppend",
		p = "MarkupParse",
		f = "Open",
		m = "Change",
		g = "mfp",
		v = "." + g,
		h = "mfp-ready",
		C = "mfp-removing",
		y = "mfp-prevent-close",
		w = function () {},
		b = !!window.jQuery,
		I = e(window),
		x = function (e, i) {
			t.ev.on(g + e + v, i)
		},
		k = function (t, i, n, o) {
			var a = document.createElement("div");
			return a.className = "mfp-" + t, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)), a
		},
		T = function (i, n) {
			t.ev.triggerHandler(g + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
		},
		E = function () {
			(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).trigger("focus")
		},
		S = function (i) {
			return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
		},
		P = function () {
			e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
		},
		_ = function (i) {
			if (!e(i).hasClass(y)) {
				var n = t.st.closeOnContentClick,
					o = t.st.closeOnBgClick;
				if (n && o) return !0;
				if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
				if (i === t.content[0] || e.contains(t.content[0], i)) {
					if (n) return !0
				} else if (o && e.contains(document, i)) return !0;
				return !1
			}
		},
		O = function () {
			var e = document.createElement("p").style,
				t = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== e.transition) return !0;
			for (; t.length;)
				if (t.pop() + "Transition" in e) return !0;
			return !1
		};
	w.prototype = {
		constructor: w,
		init: function () {
			var i = navigator.appVersion;
			t.isIE7 = -1 !== i.indexOf("MSIE 7."), t.isIE8 = -1 !== i.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = O(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document.body), o = e(document), t.popupsCache = {}
		},
		open: function (i) {
			var n;
			if (i.isObj === !1) {
				t.items = i.items.toArray(), t.index = 0;
				var a, s = i.items;
				for (n = 0; s.length > n; n++)
					if (a = s[n], a.parsed && (a = a.el[0]), a === i.el[0]) {
						t.index = n;
						break
					}
			} else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
			if (t.isOpen) return t.updateItemHTML(), void 0;
			t.types = [], r = "", t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : o, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function () {
				t.close()
			}), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function (e) {
				_(e.target) && t.close()
			}), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
			var l = e.magnificPopup.modules;
			for (n = 0; l.length > n; n++) {
				var c = l[n];
				c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
			}
			T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, i, n) {
				i.close_replaceWith = S(n.type)
			}), r += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
				overflow: t.st.overflowY,
				overflowX: "hidden",
				overflowY: t.st.overflowY
			}) : t.wrap.css({
				top: I.scrollTop(),
				position: "absolute"
			}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
				height: o.height(),
				position: "absolute"
			}), t.st.enableEscapeKey && o.on("keyup" + v, function (e) {
				27 === e.keyCode && t.close()
			}), I.on("resize" + v, function () {
				t.updateSize()
			}), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
			var d = t.wH = I.height(),
				u = {};
			if (t.fixedContentPos && t._hasScrollBar(d)) {
				var m = t._getScrollbarSize();
				m && (u.paddingRight = m)
			}
			t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : u.overflow = "hidden");
			var g = t.st.mainClass;
			t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), T("BuildControls"), e("html").css(u), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function () {
				t.content ? (t._addClassToMFP(h), E()) : t.bgOverlay.addClass(h), o.on("focusin" + v, function (i) {
					return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (E(), !1)
				})
			}, 16), t.isOpen = !0, t.updateSize(d), T(f)
		},
		close: function () {
			t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
				t._close()
			}, t.st.removalDelay)) : t._close())
		},
		_close: function () {
			T(l);
			var i = C + " " + h + " ";
			if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
				var n = {
					paddingRight: ""
				};
				t.isIE7 ? e("body, html").css("overflow", "") : n.overflow = "", e("html").css(n)
			}
			o.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).trigger("focus"), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
		},
		updateSize: function (e) {
			if (t.isIOS) {
				var i = document.documentElement.clientWidth / window.innerWidth,
					n = window.innerHeight * i;
				t.wrap.css("height", n), t.wH = n
			} else t.wH = e || I.height();
			t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
		},
		updateItemHTML: function () {
			var i = t.items[t.index];
			t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
			var n = i.type;
			if (T("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
				var o = t.st[n] ? t.st[n].markup : !1;
				T("FirstMarkupParse", o), t.currTemplate[n] = o ? e(o) : !0
			}
			a && a !== i.type && t.container.removeClass("mfp-" + a + "-holder");
			var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
			t.appendContent(r, n), i.preloaded = !0, T(m, i), a = i.type, t.container.prepend(t.contentContainer), T("AfterChange")
		},
		appendContent: function (e, i) {
			t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
		},
		parseEl: function (i) {
			var n = t.items[i],
				o = n.type;
			if (n = n.tagName ? {
					el: e(n)
				} : {
					data: n,
					src: n.src
				}, n.el) {
				for (var a = t.types, r = 0; a.length > r; r++)
					if (n.el.hasClass("mfp-" + a[r])) {
						o = a[r];
						break
					}
				n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
			}
			return n.type = o || t.st.type || "inline", n.index = i, n.parsed = !0, t.items[i] = n, T("ElementParse", n), t.items[i]
		},
		addGroup: function (e, i) {
			var n = function (n) {
				n.mfpEl = this, t._openClick(n, e, i)
			};
			i || (i = {});
			var o = "click.magnificPopup";
			i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
		},
		_openClick: function (i, n, o) {
			var a = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
			if (a || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
				var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
				if (r)
					if (e.isFunction(r)) {
						if (!r.call(t)) return !0
					} else if (r > I.width()) return !0;
				i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
			}
		},
		updateStatus: function (e, n) {
			if (t.preloader) {
				i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
				var o = {
					status: e,
					text: n
				};
				T("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
					e.stopImmediatePropagation()
				}), t.container.addClass("mfp-s-" + e), i = e
			}
		},
		_addClassToMFP: function (e) {
			t.bgOverlay.addClass(e), t.wrap.addClass(e)
		},
		_removeClassFromMFP: function (e) {
			this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
		},
		_hasScrollBar: function (e) {
			return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
		},
		_parseMarkup: function (t, i, n) {
			var o;
			n.data && (i = e.extend(n.data, i)), T(p, [t, i, n]), e.each(i, function (e, i) {
				if (void 0 === i || i === !1) return !0;
				if (o = e.split("_"), o.length > 1) {
					var n = t.find(v + "-" + o[0]);
					if (n.length > 0) {
						var a = o[1];
						"replaceWith" === a ? n[0] !== i[0] && n.replaceWith(i) : "img" === a ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
					}
				} else t.find(v + "-" + e).html(i)
			})
		},
		_getScrollbarSize: function () {
			if (void 0 === t.scrollbarSize) {
				var e = document.createElement("div");
				e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
			}
			return t.scrollbarSize
		}
	}, e.magnificPopup = {
		instance: null,
		proto: w.prototype,
		modules: [],
		open: function (e, t) {
			return P(), e || (e = {}), e.isObj = !0, e.index = t || 0, this.instance.open(e)
		},
		close: function () {
			return e.magnificPopup.instance.close()
		},
		registerModule: function (t, i) {
			i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">×</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	}, e.fn.magnificPopup = function (i) {
		P();
		var n = e(this);
		if ("string" == typeof i)
			if ("open" === i) {
				var o, a = b ? n.data("magnificPopup") : n[0].magnificPopup,
					r = parseInt(arguments[1], 10) || 0;
				a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({
					mfpEl: o
				}, n, a)
			} else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
		else b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
		return n
	};
	var z, M, B, H = "inline",
		L = function () {
			B && (M.after(B.addClass(z)).detach(), B = null)
		};
	e.magnificPopup.registerModule(H, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function () {
				t.types.push(H), x(l + "." + H, function () {
					L()
				})
			},
			getInline: function (i, n) {
				if (L(), i.src) {
					var o = t.st.inline,
						a = e(i.src);
					if (a.length) {
						var r = a[0].parentNode;
						r && r.tagName && (M || (z = o.hiddenClass, M = k(z), z = "mfp-" + z), B = a.after(M).detach().removeClass(z)), t.updateStatus("ready")
					} else t.updateStatus("error", o.tNotFound), a = e("<div>");
					return i.inlineElement = a, a
				}
				return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
			}
		}
	});
	var A, F = "ajax",
		j = function () {
			A && n.removeClass(A)
		};
	e.magnificPopup.registerModule(F, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function () {
				t.types.push(F), A = t.st.ajax.cursor, x(l + "." + F, function () {
					j(), t.req && t.req.abort()
				})
			},
			getAjax: function (i) {
				A && n.addClass(A), t.updateStatus("loading");
				var o = e.extend({
					url: i.src,
					success: function (n, o, a) {
						var r = {
							data: n,
							xhr: a
						};
						T("ParseAjax", r), t.appendContent(e(r.data), F), i.finished = !0, j(), E(), setTimeout(function () {
							t.wrap.addClass(h)
						}, 16), t.updateStatus("ready"), T("AjaxContentAdded")
					},
					error: function () {
						j(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
					}
				}, t.st.ajax.settings);
				return t.req = e.ajax(o), ""
			}
		}
	});
	var N, W = function (i) {
		if (i.data && void 0 !== i.data.title) return i.data.title;
		var n = t.st.image.titleSrc;
		if (n) {
			if (e.isFunction(n)) return n.call(t, i);
			if (i.el) return i.el.attr(n) || ""
		}
		return ""
	};
	e.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function () {
				var e = t.st.image,
					i = ".image";
				t.types.push("image"), x(f + i, function () {
					"image" === t.currItem.type && e.cursor && n.addClass(e.cursor)
				}), x(l + i, function () {
					e.cursor && n.removeClass(e.cursor), I.off("resize" + v)
				}), x("Resize" + i, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
			},
			resizeImage: function () {
				var e = t.currItem;
				if (e && e.img && t.st.image.verticalFit) {
					var i = 0;
					t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
				}
			},
			_onImageHasSize: function (e) {
				e.img && (e.hasSize = !0, N && clearInterval(N), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
			},
			findImageSize: function (e) {
				var i = 0,
					n = e.img[0],
					o = function (a) {
						N && clearInterval(N), N = setInterval(function () {
							return n.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (i > 200 && clearInterval(N), i++, 3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500), void 0)
						}, a)
					};
				o(1)
			},
			getImage: function (i, n) {
				var o = 0,
					a = function () {
						i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(a, 100) : r()))
					},
					r = function () {
						i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
					},
					s = t.st.image,
					l = n.find(".mfp-img");
				if (l.length) {
					var c = document.createElement("img");
					c.className = "mfp-img", i.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), i.img[0].naturalWidth > 0 && (i.hasSize = !0)
				}
				return t._parseMarkup(n, {
					title: W(i),
					img_replaceWith: i.img
				}, i), t.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
			}
		}
	});
	var R, Z = function () {
		return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
	};
	e.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (e) {
				return e.is("img") ? e : e.find("img")
			}
		},
		proto: {
			initZoom: function () {
				var e = t.st.zoom,
					i = ".zoom";
				if (e.enabled && t.supportsTransition) {
					var n, o, a = e.duration,
						r = function (t) {
							var i = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								n = "all " + e.duration / 1e3 + "s " + e.easing,
								o = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								a = "transition";
							return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, i.css(o), i
						},
						s = function () {
							t.content.css("visibility", "visible")
						};
					x("BuildControls" + i, function () {
						if (t._allowZoom()) {
							if (clearTimeout(n), t.content.css("visibility", "hidden"), image = t._getItemToZoom(), !image) return s(), void 0;
							o = r(image), o.css(t._getOffset()), t.wrap.append(o), n = setTimeout(function () {
								o.css(t._getOffset(!0)), n = setTimeout(function () {
									s(), setTimeout(function () {
										o.remove(), image = o = null, T("ZoomAnimationEnded")
									}, 16)
								}, a)
							}, 16)
						}
					}), x(c + i, function () {
						if (t._allowZoom()) {
							if (clearTimeout(n), t.st.removalDelay = a, !image) {
								if (image = t._getItemToZoom(), !image) return;
								o = r(image)
							}
							o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function () {
								o.css(t._getOffset())
							}, 16)
						}
					}), x(l + i, function () {
						t._allowZoom() && (s(), o && o.remove())
					})
				}
			},
			_allowZoom: function () {
				return "image" === t.currItem.type
			},
			_getItemToZoom: function () {
				return t.currItem.hasSize ? t.currItem.img : !1
			},
			_getOffset: function (i) {
				var n;
				n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
				var o = n.offset(),
					a = parseInt(n.css("padding-top"), 10),
					r = parseInt(n.css("padding-bottom"), 10);
				o.top -= e(window).scrollTop() - a;
				var s = {
					width: n.width(),
					height: (b ? n.innerHeight() : n[0].offsetHeight) - r - a
				};
				return Z() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
			}
		}
	});
	var q = "iframe",
		D = "//about:blank",
		K = function (e) {
			if (t.currTemplate[q]) {
				var i = t.currTemplate[q].find("iframe");
				i.length && (e || (i[0].src = D), t.isIE8 && i.css("display", e ? "block" : "none"))
			}
		};
	e.magnificPopup.registerModule(q, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function () {
				t.types.push(q), x("BeforeChange", function (e, t, i) {
					t !== i && (t === q ? K() : i === q && K(!0))
				}), x(l + "." + q, function () {
					K()
				})
			},
			getIframe: function (i, n) {
				var o = i.src,
					a = t.st.iframe;
				e.each(a.patterns, function () {
					return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
				});
				var r = {};
				return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
			}
		}
	});
	var Y = function (e) {
			var i = t.items.length;
			return e > i - 1 ? e - i : 0 > e ? i + e : e
		},
		U = function (e, t, i) {
			return e.replace("%curr%", t + 1).replace("%total%", i)
		};
	e.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function () {
				var i = t.st.gallery,
					n = ".mfp-gallery",
					a = Boolean(e.fn.mfpFastClick);
				return t.direction = !0, i && i.enabled ? (r += " mfp-gallery", x(f + n, function () {
					i.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img", function () {
						return t.items.length > 1 ? (t.next(), !1) : void 0
					}), o.on("keydown" + n, function (e) {
						37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
					})
				}), x("UpdateStatus" + n, function (e, i) {
					i.text && (i.text = U(i.text, t.currItem.index, t.items.length))
				}), x(p + n, function (e, n, o, a) {
					var r = t.items.length;
					o.counter = r > 1 ? U(i.tCounter, a.index, r) : ""
				}), x("BuildControls" + n, function () {
					if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
						var n = i.arrowMarkup,
							o = t.arrowLeft = e(n.replace("%title%", i.tPrev).replace("%dir%", "left")).addClass(y),
							r = t.arrowRight = e(n.replace("%title%", i.tNext).replace("%dir%", "right")).addClass(y),
							s = a ? "mfpFastClick" : "click";
						o[s](function () {
							t.prev()
						}), r[s](function () {
							t.next()
						}), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", r[0], !1, !0), k("a", r[0], !1, !0)), t.container.append(o.add(r))
					}
				}), x(m + n, function () {
					t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
						t.preloadNearbyImages(), t._preloadTimeout = null
					}, 16)
				}), x(l + n, function () {
					o.off(n), t.wrap.off("click" + n), t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
				}), void 0) : !1
			},
			next: function () {
				t.direction = !0, t.index = Y(t.index + 1), t.updateItemHTML()
			},
			prev: function () {
				t.direction = !1, t.index = Y(t.index - 1), t.updateItemHTML()
			},
			goTo: function (e) {
				t.direction = e >= t.index, t.index = e, t.updateItemHTML()
			},
			preloadNearbyImages: function () {
				var e, i = t.st.gallery.preload,
					n = Math.min(i[0], t.items.length),
					o = Math.min(i[1], t.items.length);
				for (e = 1;
					(t.direction ? o : n) >= e; e++) t._preloadItem(t.index + e);
				for (e = 1;
					(t.direction ? n : o) >= e; e++) t._preloadItem(t.index - e)
			},
			_preloadItem: function (i) {
				if (i = Y(i), !t.items[i].preloaded) {
					var n = t.items[i];
					n.parsed || (n = t.parseEl(i)), T("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
						n.hasSize = !0
					}).on("error.mfploader", function () {
						n.hasSize = !0, n.loadError = !0, T("LazyLoadError", n)
					}).attr("src", n.src)), n.preloaded = !0
				}
			}
		}
	});
	var G = "retina";
	e.magnificPopup.registerModule(G, {
			options: {
				replaceSrc: function (e) {
					return e.src.replace(/\.\w+$/, function (e) {
						return "@2x" + e
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function () {
					if (window.devicePixelRatio > 1) {
						var e = t.st.retina,
							i = e.ratio;
						i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + G, function (e, t) {
							t.img.css({
								"max-width": t.img[0].naturalWidth / i,
								width: "100%"
							})
						}), x("ElementParse." + G, function (t, n) {
							n.src = e.replaceSrc(n, i)
						}))
					}
				}
			}
		}),
		function () {
			var t = 1e3,
				i = "ontouchstart" in window,
				n = function () {
					I.off("touchmove" + a + " touchend" + a)
				},
				o = "mfpFastClick",
				a = "." + o;
			e.fn.mfpFastClick = function (o) {
				return e(this).each(function () {
					var r, s = e(this);
					if (i) {
						var l, c, d, u, p, f;
						s.on("touchstart" + a, function (e) {
							u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + a, function (e) {
								p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, n())
							}).on("touchend" + a, function (e) {
								n(), u || f > 1 || (r = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
									r = !1
								}, t), o())
							})
						})
					}
					s.on("click" + a, function () {
						r || o()
					})
				})
			}, e.fn.destroyMfpFastClick = function () {
				e(this).off("touchstart" + a + " click" + a), i && I.off("touchmove" + a + " touchend" + a)
			}
		}()
})(window.jQuery || window.Zepto);

