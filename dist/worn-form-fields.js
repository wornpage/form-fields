//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function _() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/constants.js
var v = 1 << 24, y = 1024, b = 2048, x = 4096, S = 8192, ee = 16384, te = 32768, ne = 1 << 25, re = 65536, ie = 1 << 19, ae = 1 << 20, oe = 1 << 25, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, de = Symbol("$state"), fe = Symbol("legacy props"), pe = Symbol(""), me = Symbol("attributes"), he = Symbol("class"), ge = Symbol("style"), _e = Symbol("text"), ve = Symbol("form reset"), ye = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), be = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function xe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Se(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function we() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Te(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ke() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ae() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function je(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Me() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ne() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var C = !1;
function w(e) {
	C = e;
}
var T;
function E(t) {
	if (t === null) throw je(), e;
	return T = t;
}
function Pe() {
	return E(/* @__PURE__ */ z(T));
}
function Fe(t) {
	if (C) {
		if (/* @__PURE__ */ z(T) !== null) throw je(), e;
		T = t;
	}
}
function Ie(e = 1) {
	if (C) {
		for (var t = e, n = T; t--;) n = /* @__PURE__ */ z(n);
		T = n;
	}
}
function Le(e = !0) {
	for (var t = 0, n = T;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ z(n);
		e && n.remove(), n = i;
	}
}
function Re(t) {
	if (!t || t.nodeType !== 8) throw je(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function ze(e) {
	return e === this.v;
}
function Be(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ve(e) {
	return !Be(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var D = null;
function He(e) {
	D = e;
}
function O(e, t = !1, n) {
	D = {
		p: D,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function k(e) {
	var t = D, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) hn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, D = t.p, e ?? {};
}
function Ue() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var We = [];
function Ge() {
	var e = We;
	We = [], g(e);
}
function A(e) {
	if (We.length === 0 && !Dt) {
		var t = We;
		queueMicrotask(() => {
			t === We && Ge();
		});
	}
	We.push(e);
}
function Ke() {
	for (; We.length > 0;) Ge();
}
function qe(e) {
	var t = K;
	if (t === null) return U.f |= ue, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Je(e, t);
}
function Je(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ye = ~(b | x | y);
function j(e, t) {
	e.f = e.f & Ye | t;
}
function Xe(e) {
	e.f & 512 || e.deps === null ? j(e, y) : j(e, x);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ze(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= se, Ze(t.deps));
}
function Qe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ze(e.deps), j(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var $e = !1;
function et(e) {
	var t = $e;
	try {
		return $e = !1, [e(), $e];
	} finally {
		$e = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function tt(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, A(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function nt(e) {
	C && /* @__PURE__ */ rn(e) !== null && cn(e);
}
var rt = !1;
function it() {
	rt || (rt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ve]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function at(e) {
	var t = U, n = K;
	G(null), q(null);
	try {
		return e();
	} finally {
		G(t), q(n);
	}
}
function ot(e, t, n, r = n) {
	e.addEventListener(t, () => at(n));
	let i = e[ve];
	e[ve] = i ? () => {
		i(), r(!0);
	} : () => r(!0), it();
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function st(e) {
	let t = 0, n = Ht(0), r;
	return () => {
		pn() && (Q(n), bn(() => (t === 0 && (r = er(() => e(() => qt(n)))), t += 1, () => {
			A(() => {
				--t, t === 0 && (r?.(), r = void 0, qt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ct = re | ie;
function lt(e, t, n, r) {
	new ut(e, t, n, r);
}
var ut = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = C ? T : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = st(() => (this.#m = Ht(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Sn(() => {
			if (C) {
				let e = this.#t;
				Pe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, ct), C && (this.#e = T);
	}
	#g() {
		try {
			this.#a = V(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		A(r), t && (this.#s = V(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ne();
				return;
			}
			t = !0, n && ke(), this.#s !== null && kn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					Je(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), A(() => {
			var e = this.#c = document.createDocumentFragment(), t = R();
			e.append(t), this.#a = this.#S(() => V(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, kn(this.#o, () => {
				this.#o = null;
			}), this.#x(N));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = V(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Nn(this.#a, e);
				let t = this.#n.pending;
				this.#o = V(() => t(this.#e));
			} else this.#x(N);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Qe(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = U, r = D;
		q(this.#i), G(this.#i), He(this.#i.ctx);
		try {
			return Nt.ensure(), e();
		} catch (e) {
			return qe(e), null;
		} finally {
			q(t), G(n), He(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && kn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, A(() => {
			this.#d = !1, this.#m && Gt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		N?.is_fork ? (this.#a && N.skip_effect(this.#a), this.#o && N.skip_effect(this.#o), this.#s && N.skip_effect(this.#s), N.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), C && (E(this.#t), Ie(), E(Le()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return V(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Je(e, this.#i.parent), null;
				}
			}));
		};
		A(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Je(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Je(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function dt(e, t, n, r) {
	let i = Ue() ? ht : vt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = ft(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Je(e, s);
			}
			pt();
		}
	}
	var d = mt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ _t(e))).then(u).catch((e) => Je(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), pt();
	}) : f();
}
function ft() {
	var e = K, t = U, n = D, r = N;
	return function(i = !0) {
		q(e), G(t), He(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function pt(e = !0) {
	q(null), G(null), He(null), e && N?.deactivate();
}
function mt() {
	var e = K, t = e.b, n = N, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ht(e) {
	var n = 2 | b;
	return K !== null && (K.f |= ie), {
		ctx: D,
		deps: null,
		effects: null,
		equals: ze,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: K,
		ac: null
	};
}
var gt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function _t(e, n, r) {
	let i = K;
	i === null && xe();
	var a = void 0, o = Ht(t), s = !U, c = /* @__PURE__ */ new Set();
	return yn(() => {
		var t = K, n = _();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ye && n.reject(e);
			}).finally(pt);
		} catch (e) {
			n.reject(e), pt();
		}
		var r = N;
		if (s) {
			if (t.f & 32768) var l = mt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(gt);
			else for (let e of c.values()) e.reject(gt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== gt && (r.activate(), t ? (o.f |= ue, Gt(o, t)) : (o.f & 8388608 && (o.f ^= ue), Gt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), mn(() => {
		for (let e of c) e.reject(gt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function M(e) {
	let t = /* @__PURE__ */ ht(e);
	return Rn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function vt(e) {
	let t = /* @__PURE__ */ ht(e);
	return t.equals = Ve, t;
}
function yt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function bt(e) {
	var n, r = K, i = e.parent;
	if (!In && i !== null && e.v !== t && i.f & 24576) return Ae(), e.v;
	q(i);
	try {
		e.f &= ~se, yt(e), n = qn(e);
	} finally {
		q(r);
	}
	return n;
}
function xt(e) {
	var t = bt(e);
	if (!e.equals(t) && (e.wv = Wn(), (!N?.is_fork || e.deps === null) && (N === null ? e.v = t : (N.capture(e, t, !0), Tt?.capture(e, t, !0)), e.deps === null))) {
		j(e, y);
		return;
	}
	In || (P === null ? Xe(e) : (pn() || N?.is_fork) && P.set(e, t));
}
function St(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && at(() => {
		t.ac.abort(ye), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Yn(t, 0), Tn(t));
}
function Ct(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Xn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var wt = null, N = null, Tt = null, P = null, Et = null, Dt = !1, Ot = !1, kt = null, At = null, jt = 0, Mt = 1, Nt = class e {
	id = Mt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		wt === null ? wt = this : (wt.#n = this, this.#t = wt), wt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) j(r, b), t(r);
			for (r of n.m) j(r, x), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, jt++ > 1e3 && (this.#x(), Pt());
		for (let e of this.#u) this.#d.delete(e), j(e, b), this.schedule(e);
		for (let e of this.#d) j(e, x), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = kt = [], r = [], i = At = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Rt(e), this.#h() || this.discard(), t;
		}
		if (N = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (kt = null, At = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Lt(e, t);
			i.length > 0 && N.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Tt = this, Ft(r), Ft(n), Tt = null, this.#s?.resolve();
		var s = N;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= y;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= y : i & 4 ? t.push(r) : Gn(r) && (i & 16 && this.#d.add(r), Xn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), j(i, b), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), N = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Qe(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), P?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		N = this;
	}
	deactivate() {
		N = null, P = null;
	}
	flush() {
		try {
			Ot = !0, N = this, this.#g();
		} finally {
			jt = 0, Et = null, kt = null, At = null, Ot = !1, N = null, P = null, Bt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(gt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, A(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= _()).promise;
	}
	static ensure() {
		if (N === null) {
			let t = N = new e();
			!Ot && !Dt && A(() => {
				t.#e || t.flush();
			});
		}
		return N;
	}
	apply() {
		P = null;
	}
	schedule(e) {
		if (Et = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (kt !== null && t === K && (U === null || !(U.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= y;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? wt = e : t.#t = e, this.linked = !1;
		}
	}
};
function F(e) {
	var t = Dt;
	Dt = !0;
	try {
		var n;
		for (e && (N !== null && !N.is_fork && N.flush(), n = e());;) {
			if (Ke(), N === null) return n;
			N.flush();
		}
	} finally {
		Dt = t;
	}
}
function Pt() {
	try {
		Ce();
	} catch (e) {
		Je(e, Et);
	}
}
var I = null;
function Ft(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Gn(r) && (I = /* @__PURE__ */ new Set(), Xn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && On(r), I?.size > 0)) {
				Bt.clear();
				for (let e of I) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) I.has(n) && (I.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Xn(n);
					}
				}
				I.clear();
			}
		}
		I = null;
	}
}
function It(e) {
	N.schedule(e);
}
function Lt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, y);
		for (var n = e.first; n !== null;) Lt(n, t), n = n.next;
	}
}
function Rt(e) {
	j(e, y);
	for (var t = e.first; t !== null;) Rt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var zt = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Map(), Vt = !1;
function Ht(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: ze,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ut(e, t) {
	let n = Ht(e, t);
	return Rn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Wt(e, t = !1, n = !0) {
	let r = Ht(e);
	return t || (r.equals = Ve), r;
}
function L(e, t, n = !1) {
	return U !== null && (!W || U.f & 131072) && Ue() && U.f & 4325394 && (J === null || !J.has(e)) && Oe(), Gt(e, n ? Yt(t) : t, At);
}
function Gt(e, t, n = null) {
	if (!e.equals(t)) {
		Bt.set(e, In ? t : e.v);
		var r = Nt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && bt(t), P === null && Xe(t);
		}
		e.wv = Wn(), Jt(e, b, n), Ue() && K !== null && K.f & 1024 && !(K.f & 96) && (Z === null ? zn([e]) : Z.push(e)), !r.is_fork && zt.size > 0 && !Vt && Kt();
	}
	return t;
}
function Kt() {
	Vt = !1;
	for (let e of zt) {
		e.f & 1024 && j(e, x);
		let t;
		try {
			t = Gn(e);
		} catch {
			t = !0;
		}
		t && Xn(e);
	}
	zt.clear();
}
function qt(e) {
	L(e, e.v + 1);
}
function Jt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ue(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & b) === 0;
			if (l && j(s, t), c & 131072) zt.add(s);
			else if (c & 2) {
				var u = s;
				P?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= se), Jt(u, x, n));
			} else if (l) {
				var d = s;
				c & 16 && I !== null && I.add(d), n === null ? It(d) : n.push(d);
			}
		}
	}
}
function Yt(e) {
	if (typeof e != "object" || !e || de in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ Ut(0), s = null, c = Hn, u = (e) => {
		if (Hn === c) return e();
		var t = U, n = Hn;
		G(null), Un(c);
		var r = e();
		return G(t), Un(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ Ut(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ee();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ Ut(n.value, s);
				return i.set(t, e), e;
			}) : L(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ Ut(t, s));
					i.set(n, e), qt(o);
				}
			} else L(r, t), qt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === de) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ Ut(Yt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Q(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Q(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === de) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || K !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ Ut(a ? Yt(e[n]) : t, s)), i.set(n, r)), Q(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ Ut(t, s)), i.set(p + "", m)) : L(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ Ut(void 0, s)), L(d, Yt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Yt(r));
				L(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && L(_, v + 1);
				}
				qt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Q(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			De();
		}
	});
}
function Xt(e) {
	try {
		if (typeof e == "object" && e && de in e) return e[de];
	} catch {}
	return e;
}
function Zt(e, t) {
	return Object.is(Xt(e), Xt(t));
}
var Qt, $t, en, tn;
function nn() {
	if (Qt === void 0) {
		Qt = window, $t = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		en = l(t, "firstChild").get, tn = l(t, "nextSibling").get, m(e) && (e[he] = void 0, e[me] = null, e[ge] = void 0, e.__e = void 0), m(n) && (n[_e] = void 0);
	}
}
function R(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function rn(e) {
	return en.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function z(e) {
	return tn.call(e);
}
function an(e, t) {
	if (!C) return /* @__PURE__ */ rn(e);
	var n = /* @__PURE__ */ rn(T);
	if (n === null) n = T.appendChild(R());
	else if (t && n.nodeType !== 3) {
		var r = R();
		return n?.before(r), E(r), r;
	}
	return t && dn(n), E(n), n;
}
function on(e, t = !1) {
	if (!C) {
		var n = /* @__PURE__ */ rn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ z(n) : n;
	}
	if (t) {
		if (T?.nodeType !== 3) {
			var r = R();
			return T?.before(r), E(r), r;
		}
		dn(T);
	}
	return T;
}
function sn(e, t = 1, n = !1) {
	let r = C ? T : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ z(r);
	if (!C) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = R();
			return r === null ? i?.after(a) : r.before(a), E(a), a;
		}
		dn(r);
	}
	return E(r), r;
}
function cn(e) {
	e.textContent = "";
}
function ln() {
	return !1;
}
function un(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function dn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function fn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function B(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= S);
	var r = {
		ctx: D,
		deps: null,
		nodes: null,
		f: e | b | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	N?.register_created_effect(r);
	var i = r;
	if (e & 4) kt === null ? Nt.ensure().schedule(r) : kt.push(r);
	else if (t !== null) {
		try {
			Xn(r);
		} catch (e) {
			throw H(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= re));
	}
	if (i !== null && (i.parent = n, n !== null && fn(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function pn() {
	return U !== null && !W;
}
function mn(e) {
	let t = B(8, null);
	return j(t, y), t.teardown = e, t;
}
function hn(e) {
	return B(4 | ae, e);
}
function gn(e) {
	Nt.ensure();
	let t = B(64 | ie, e);
	return () => {
		H(t);
	};
}
function _n(e) {
	Nt.ensure();
	let t = B(64 | ie, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? kn(t, () => {
			H(t), n(void 0);
		}) : (H(t), n(void 0));
	});
}
function vn(e) {
	return B(4, e);
}
function yn(e) {
	return B(le | ie, e);
}
function bn(e, t = 0) {
	return B(8 | t, e);
}
function xn(e, t = [], n = [], r = []) {
	dt(r, t, n, (t) => {
		B(8, () => {
			e(...t.map(Q));
		});
	});
}
function Sn(e, t = 0) {
	return B(16 | t, e);
}
function Cn(e, t = 0) {
	return B(v | t, e);
}
function V(e) {
	return B(32 | ie, e);
}
function wn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = In, n = U;
		Ln(!0), G(null);
		try {
			t.call(null);
		} finally {
			Ln(e), G(n);
		}
	}
}
function Tn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && at(() => {
			e.abort(ye);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : H(n, t), n = r;
	}
}
function En(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || H(t), t = n;
	}
}
function H(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Dn(e.nodes.start, e.nodes.end), n = !0), e.f |= ne, Tn(e, t && !n), Yn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	wn(e), e.f ^= ne, e.f |= ee;
	var i = e.parent;
	i !== null && i.first !== null && On(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Dn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ z(e);
		e.remove(), e = n;
	}
}
function On(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kn(e, t, n = !0) {
	var r = [];
	An(e, r, !0);
	var i = () => {
		n && H(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function An(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= S;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				An(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function jn(e) {
	Mn(e, !0);
}
function Mn(e, t) {
	if (e.f & 8192) {
		e.f ^= S, e.f & 1024 || (j(e, b), Nt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Mn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Nn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ z(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Pn = null, Fn = !1, In = !1;
function Ln(e) {
	In = e;
}
var U = null, W = !1;
function G(e) {
	U = e;
}
var K = null;
function q(e) {
	K = e;
}
var J = null;
function Rn(e) {
	U !== null && (J ??= /* @__PURE__ */ new Set()).add(e);
}
var Y = null, X = 0, Z = null;
function zn(e) {
	Z = e;
}
var Bn = 1, Vn = 0, Hn = Vn;
function Un(e) {
	Hn = e;
}
function Wn() {
	return ++Bn;
}
function Gn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~se), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Gn(a) && xt(a), a.wv > e.wv) return !0;
		}
		t & 512 && P === null && j(e, y);
	}
	return !1;
}
function Kn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(J !== null && J.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Kn(a, t, !1) : t === a && (n ? j(a, b) : a.f & 1024 && j(a, x), It(a));
	}
}
function qn(e) {
	var t = Y, n = X, r = Z, i = U, a = J, o = D, s = W, c = Hn, l = e.f;
	Y = null, X = 0, Z = null, U = l & 96 ? null : e, J = null, He(e.ctx), W = !1, Hn = ++Vn, e.ac !== null && (at(() => {
		e.ac.abort(ye);
	}), e.ac = null);
	try {
		e.f |= ce;
		var u = e.fn, d = u();
		e.f |= te;
		var f = e.deps, p = N?.is_fork;
		if (Y !== null) {
			var m;
			if (p || Yn(e, X), f !== null && X > 0) for (f.length = X + Y.length, m = 0; m < Y.length; m++) f[X + m] = Y[m];
			else e.deps = f = Y;
			if (pn() && e.f & 512) for (m = X; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && X < f.length && (Yn(e, X), f.length = X);
		if (Ue() && Z !== null && !W && f !== null && !(e.f & 6146)) for (m = 0; m < Z.length; m++) Kn(Z[m], e);
		if (i !== null && i !== e) {
			if (Vn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Vn;
			if (t !== null) for (let e of t) e.rv = Vn;
			Z !== null && (r === null ? r = Z : r.push(...Z));
		}
		return e.f & 8388608 && (e.f ^= ue), d;
	} catch (e) {
		return qe(e);
	} finally {
		e.f ^= ce, Y = t, X = n, Z = r, U = i, J = a, He(o), W = s, Hn = c;
	}
}
function Jn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (Y === null || !a.call(Y, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~se), c.v !== t && Xe(c), c.ac !== null && at(() => {
			c.ac.abort(ye), c.ac = null, j(c, b);
		}), St(c), Yn(c, 0);
	}
}
function Yn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Jn(e, n[r]);
}
function Xn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		j(e, y);
		var n = K, r = Fn;
		K = e, Fn = !(t & 96);
		try {
			t & 16777232 ? En(e) : Tn(e), wn(e);
			var i = qn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Bn;
		} finally {
			Fn = r, K = n;
		}
	}
}
async function Zn() {
	await Promise.resolve(), F();
}
function Q(e) {
	var t = !!(e.f & 2);
	if (Pn?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (J === null || !J.has(e))) {
		var n = U.deps;
		if (U.f & 2097152) e.rv < Vn && (e.rv = Vn, Y === null && n !== null && n[X] === e ? X++ : Y === null ? Y = [e] : Y.push(e));
		else {
			U.deps ??= [], a.call(U.deps, e) || U.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [U] : a.call(r, U) || r.push(U);
		}
	}
	if (In && Bt.has(e)) return Bt.get(e);
	if (t) {
		var i = e;
		if (In) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || $n(i)) && (o = bt(i)), Bt.set(i, o), o;
		}
		var s = !(i.f & 512) && !W && U !== null && (Fn || !!(U.f & 512)), c = (i.f & te) === 0;
		Gn(i) && (s && (i.f |= 512), xt(i)), s && !c && (Ct(i), Qn(i));
	}
	if (P?.has(e)) return P.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Qn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ct(t), Qn(t));
}
function $n(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Bt.has(t) || t.f & 2 && $n(t)) return !0;
	return !1;
}
function er(e) {
	var t = W;
	try {
		return W = !0, e();
	} finally {
		W = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var tr = Symbol("events"), nr = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Set();
function ir(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || cr.call(t, e), !e.cancelBubble) return at(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? A(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function ar(e, t, n) {
	(t[tr] ??= {})[e] = n;
}
function or(e) {
	for (var t = 0; t < e.length; t++) nr.add(e[t]);
	for (var n of rr) n(e);
}
var sr = null;
function cr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	sr = e;
	var o = 0, s = sr === e && e[tr];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[tr] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = U, f = K;
		G(null), q(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[tr]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[tr] = t, delete e.currentTarget, G(d), q(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var lr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ur(e) {
	return lr?.createHTML(e) ?? e;
}
function dr(e) {
	var t = un("template");
	return t.innerHTML = ur(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function fr(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function pr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (C) return fr(T, null), T;
		i === void 0 && (i = dr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ rn(i)));
		var t = r || $t ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ rn(t), s = t.lastChild;
			fr(o, s);
		} else fr(t, t);
		return t;
	};
}
function mr() {
	if (C) return fr(T, null), T;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = R();
	return e.append(t, n), fr(t, n), e;
}
function hr(e, t) {
	if (C) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = T), Pe();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function gr(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var _r = [
	"beforeinput",
	"click",
	"change",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
];
function vr(e) {
	return _r.includes(e);
}
var yr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), br = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback"
};
function xr(e) {
	return e = e.toLowerCase(), br[e] ?? e;
}
[...yr];
var Sr = ["touchstart", "touchmove"];
function Cr(e) {
	return Sr.includes(e);
}
function wr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[_e] ??= e.nodeValue) && (e[_e] = n, e.nodeValue = `${n}`);
}
function Tr(e, t) {
	return Or(e, t);
}
function Er(t, n) {
	nn(), n.intro = n.intro ?? !1;
	let r = n.target, i = C, a = T;
	try {
		for (var o = /* @__PURE__ */ rn(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ z(o);
		if (!o) throw e;
		w(!0), E(o);
		let i = Or(t, {
			...n,
			anchor: o
		});
		return w(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && we(), nn(), cn(r), w(!1), Tr(t, n);
	} finally {
		w(i), E(a);
	}
}
var Dr = /* @__PURE__ */ new Map();
function Or(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	nn();
	var u = void 0, d = _n(() => {
		var c = r ?? n.appendChild(R());
		lt(c, { pending: () => {} }, (n) => {
			O({});
			var r = D;
			if (s && (r.c = s), a && (i.$$events = a), C && fr(n, null), u = t(n, i) || {}, C && (K.nodes.end = T, T === null || T.nodeType !== 8 || T.data !== "]")) throw je(), e;
			k();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = Cr(r);
					for (let e of [n, document]) {
						var a = Dr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Dr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, cr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(nr)), rr.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = Dr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, cr), t.delete(e), t.size === 0 && Dr.delete(r)) : t.set(e, i);
			}
			rr.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return kr.set(u, d), u;
}
var kr = /* @__PURE__ */ new WeakMap();
function Ar(e, t) {
	let n = kr.get(e);
	return n ? (kr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var jr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) jn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (jn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (H(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Nn(r, t), t.append(R()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else H(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), kn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (H(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = N, r = ln();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = R();
				i.append(a), this.#n.set(e, {
					effect: V(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, V(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else C && (this.anchor = T), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Mr(e, t, n = !1) {
	var r;
	C && (r = T, Pe());
	var i = new jr(e), a = n ? re : 0;
	function o(e, t) {
		if (C) {
			var n = Re(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Le();
				E(a), i.anchor = a, w(!1), i.ensure(e, t), w(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Sn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Nr(e, t, n) {
	for (var r = [], i = t.length, a, s = t.length, c = 0; c < i; c++) {
		let n = t[c];
		kn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Pr(e, o(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = r.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n, d = u.parentNode;
			cn(d), d.append(u), e.items.clear();
		}
		Pr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Pr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= oe, Nn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var Fr;
function Ir(e, t, n, i, a, s = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = C ? E(/* @__PURE__ */ rn(u)) : u.appendChild(R());
	}
	C && Pe();
	var d = null, f = /* @__PURE__ */ vt(() => {
		var e = n();
		return r(e) ? e : e == null ? [] : o(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Rr(v, p, c, t, i), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= oe, Br(d, null, c)) : jn(d) : kn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: Sn(() => {
			p = Q(f);
			var e = p.length;
			let r = !1;
			C && Re(c) === "[!" != (e === 0) && (c = Le(), E(c), w(!1), r = !0);
			for (var o = /* @__PURE__ */ new Set(), u = N, v = ln(), y = 0; y < e; y += 1) {
				C && T.nodeType === 8 && T.data === "]" && (c = T, r = !0, w(!1));
				var b = p[y], x = i(b, y), S = h ? null : l.get(x);
				S ? (S.v && Gt(S.v, b), S.i && Gt(S.i, y), v && u.unskip_effect(S.e)) : (S = zr(l, h ? c : Fr ??= R(), b, x, y, a, t, n), h || (S.e.f |= oe), l.set(x, S)), o.add(x);
			}
			if (e === 0 && s && !d && (h ? d = V(() => s(c)) : (d = V(() => s(Fr ??= R())), d.f |= oe)), e > o.size && Se("", "", ""), C && e > 0 && E(Le()), !h) {
				if (m.set(u, o), v) {
					for (let [e, t] of l) o.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			r && w(!0), Q(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, C && (c = T);
}
function Lr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Rr(e, t, n, r, i) {
	var a = !!(r & 8), s = t.length, c = e.items, l = Lr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < s; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (jn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= oe, _ === l) Br(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Vr(e, d, _), Vr(e, _, y), Br(_, y, n), d = _, p = [], m = [], l = Lr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Br(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Vr(e, S.prev, ee.next), Vr(e, d, S), Vr(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), Br(_, l, n), Vr(e, _.prev, _.next), Vr(e, _, d === null ? e.effect.first : d.next), Vr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Lr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Lr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Pr(e, o(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var te = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || te.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && te.push(l), l = Lr(l.next);
		var ne = te.length;
		if (ne > 0) {
			var re = r & 4 && s === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
			}
			Nr(e, te, re);
		}
	}
	a && A(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function zr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Ht(n) : /* @__PURE__ */ Wt(n, !1, !1) : null, l = o & 2 ? Ht(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Br(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ z(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Vr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Hr(e, t) {
	vn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = un("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Ur(e, t) {
	var n = void 0, r;
	Cn(() => {
		n !== (n = t()) && (r &&= (H(r), null), n && (r = V(() => {
			vn(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Wr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Wr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Gr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Wr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Kr(e) {
	return typeof e == "object" ? Gr(e) : e ?? "";
}
var qr = [..." 	\n\r\f\xA0\v﻿"];
function Jr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || qr.includes(r[o - 1])) && (s === r.length || qr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Yr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Xr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Zr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Xr)), i && c.push(...Object.keys(i).map(Xr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Xr(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Yr(r)), i && (n += Yr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Qr(e, t, n, r, i, a) {
	var o = e[he];
	if (C || o !== n || o === void 0) {
		var s = Jr(n, r, a);
		(!C || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[he] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function $r(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ei(e, t, n, r) {
	var i = e[ge];
	if (C || i !== t) {
		var a = Zr(t, r);
		(!C || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[ge] = t;
	} else r && (Array.isArray(r) ? ($r(e, n?.[0], r[0]), $r(e, n?.[1], r[1], "important")) : $r(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function ti(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!r(t)) return Me();
		for (var i of e.options) i.selected = t.includes(ii(i));
		return;
	}
	for (i of e.options) if (Zt(ii(i), t)) {
		i.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function ni(e) {
	var t = new MutationObserver(() => {
		"__value" in e && ti(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), mn(() => {
		t.disconnect();
	});
}
function ri(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet(), i = !0;
	ot(e, "change", (t) => {
		var i = t ? "[selected]" : ":checked", a;
		if (e.multiple) a = [].map.call(e.querySelectorAll(i), ii);
		else {
			var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
			a = o && ii(o);
		}
		n(a), e.__value = a, N !== null && r.add(N);
	}), vn(() => {
		var a = t();
		if (e === document.activeElement) {
			var o = N;
			if (r.has(o)) return;
		}
		if (ti(e, a, i), i && a === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (a = ii(s), n(a));
		}
		e.__value = a, i = !1;
	}), ni(e);
}
function ii(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ai = Symbol("class"), oi = Symbol("style"), si = Symbol("is custom element"), ci = Symbol("is html"), li = be ? "link" : "LINK", ui = be ? "input" : "INPUT", di = be ? "option" : "OPTION", fi = be ? "select" : "SELECT";
function pi(e) {
	if (C) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					hi(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					hi(e, "checked", null), e.checked = r;
				}
			}
		};
		e[ve] = n, A(n), it();
	}
}
function mi(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function hi(e, t, n, r) {
	var i = vi(e);
	C && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === li) || i[t] !== (i[t] = n) && (t === "loading" && (e[pe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && bi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function gi(e, n, r, i, a = !1, o = !1) {
	if (C && a && e.nodeName === ui) {
		var s = e;
		(s.type === "checkbox" ? "defaultChecked" : "defaultValue") in r || pi(s);
	}
	var c = vi(e), l = c[si], u = !c[ci];
	let d = C && l;
	d && w(!1);
	var f = n || {}, p = e.nodeName === di;
	for (var m in n) m in r || (r[m] = null);
	r.class ? r.class = Kr(r.class) : (i || r[ai]) && (r.class = null), r[oi] && (r.style ??= null);
	var h = bi(e);
	if (e.nodeName === ui && "type" in r && ("value" in r || "__value" in r)) {
		var g = r.type;
		(g !== f.type || g === void 0 && e.hasAttribute("type")) && (f.type = g, hi(e, "type", g, o));
	}
	for (let a in r) {
		let s = r[a];
		if (p && a === "value" && s == null) {
			e.value = e.__value = "", f[a] = s;
			continue;
		}
		if (a === "class") {
			Qr(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", s, i, n?.[ai], r[ai]), f[a] = s, f[ai] = r[ai];
			continue;
		}
		if (a === "style") {
			ei(e, s, n?.[oi], r[oi]), f[a] = s, f[oi] = r[oi];
			continue;
		}
		var _ = f[a];
		if (!(s === _ && !(s === void 0 && e.hasAttribute(a)))) {
			f[a] = s;
			var v = a[0] + a[1];
			if (v !== "$$") {
				if (v === "on") {
					let t = {}, n = "$$" + a, r = a.slice(2);
					var y = vr(r);
					if (gr(r) && (r = r.slice(0, -7), t.capture = !0), !y && _) {
						if (s != null) continue;
						e.removeEventListener(r, f[n], t), f[n] = null;
					}
					if (y) ar(r, e, s), or([r]);
					else if (s != null) {
						function i(e) {
							f[a].call(this, e);
						}
						f[n] = ir(r, e, i, t);
					}
				} else if (a === "style") hi(e, a, s);
				else if (a === "autofocus") tt(e, !!s);
				else if (!l && (a === "__value" || a === "value" && s != null)) e.value = e.__value = s;
				else if (a === "selected" && p) mi(e, s);
				else {
					var b = a;
					u || (b = xr(b));
					var x = b === "defaultValue" || b === "defaultChecked";
					if (s == null && !l && !x) {
						if (c[a] = null, b === "value" || b === "checked") {
							let t = e, r = n === void 0;
							if (b === "value") {
								let e = t.defaultValue;
								t.removeAttribute(b), t.defaultValue = e, t.value = t.__value = r ? e : null;
							} else {
								let e = t.defaultChecked;
								t.removeAttribute(b), t.defaultChecked = e, t.checked = r ? e : !1;
							}
						} else e.removeAttribute(a);
					} else x || h.includes(b) && (l || typeof s != "string") ? (e[b] = s, b in c && (c[b] = t)) : typeof s != "function" && hi(e, b, s, o);
				}
			}
		}
	}
	return d && w(!0), f;
}
function _i(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	dt(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === fi, l = !1;
		if (Cn(() => {
			var u = t(...n.map(Q)), d = gi(e, r, u, a, o, s);
			l && c && "value" in u && ti(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || H(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && H(i[t]), i[t] = V(() => Ur(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			vn(() => {
				ti(u, r.value, !0), ni(u);
			});
		}
		l = !0;
	});
}
function vi(e) {
	return e[me] ??= {
		[si]: e.nodeName.includes("-"),
		[ci]: e.namespaceURI === n
	};
}
var yi = /* @__PURE__ */ new Map();
function bi(e) {
	var t = e.getAttribute("is") || e.nodeName, n = yi.get(t);
	if (n) return n;
	yi.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function xi(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	ot(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Si(e) ? Ci(a) : a, n(a), N !== null && r.add(N), await Zn(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (C && e.defaultValue !== e.value || er(t) == null && e.value) && (n(Si(e) ? Ci(e.value) : e.value), N !== null && r.add(N)), bn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = N;
			if (r.has(i)) return;
		}
		Si(e) && n === Ci(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Si(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Ci(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var wi = {
	get(e, t) {
		if (!e.exclude.has(t)) return e.props[t];
	},
	set(e, t) {
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.has(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	has(e, t) {
		return !e.exclude.has(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
	}
};
/*#__NO_SIDE_EFFECTS__*/
function Ti(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, wi);
}
function $(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ ht(r), Q(u)) : (c && (c = !1, s = o ? er(r) : r), s);
	let f;
	if (a) {
		var p = de in e || fe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = et(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Te(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? ht : vt)(() => (v = !1, g()));
	a && Q(y);
	var b = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(y) : i && a ? Yt(e) : e;
			return L(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return In && v || b.f & 16384 ? y.v : Q(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Ei(e) {
	return new Di(e);
}
var Di = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Wt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === fe || (Q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return L(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Er : Tr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && F(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			Ar(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Oi;
typeof HTMLElement == "function" && (Oi = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = un("slot");
					e !== "default" && (n.name = e), hr(t, n);
				};
			}
			let t = {}, n = Ai(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = ki(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Ei({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = gn(() => {
				bn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = ki(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = ki(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function ki(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Ai(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function ji(e, t, n, r, i, a) {
	let o = class extends Oi {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = ki(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/Input.svelte
var Mi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"type",
	"placeholder",
	"value",
	"oninput",
	"onchange",
	"onkeydown",
	"onblur",
	"required",
	"disabled",
	"readonly",
	"autocomplete",
	"inputmode",
	"spellcheck",
	"rows",
	"id",
	"class"
]), Ni = /* @__PURE__ */ pr("<textarea></textarea>"), Pi = /* @__PURE__ */ pr("<input/>"), Fi = {
	hash: "svelte-iabhe7",
	code: ".worn-input.svelte-iabhe7 {--worn-field-boundary: color-mix(in srgb, var(--cockpit-border-strong) 30%, var(--cockpit-text-muted));box-sizing:border-box;inline-size:100%;max-inline-size:100%;min-block-size:44px;min-inline-size:0;padding:9px 12px;border:1px solid var(--worn-field-boundary);border-radius:var(--cockpit-radius-sm);background:var(--cockpit-surface);color:var(--cockpit-text);font-family:var(--font-typewriter);font-size:14px;line-height:1.4;touch-action:manipulation;transition:background-color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;}.worn-input-textarea.svelte-iabhe7 {min-block-size:72px;padding:8px 12px;resize:vertical;line-height:28px;background-image:repeating-linear-gradient(\n      to bottom,\n      transparent,\n      transparent 27px,\n      var(--cockpit-border) 27px,\n      var(--cockpit-border) 28px\n    );background-attachment:local;}.worn-input.svelte-iabhe7:focus-visible {outline:2px dashed var(--worn-field-focus, var(--cockpit-focus, var(--cockpit-text, #21322b)));outline-offset:2px;border-color:var(--cockpit-accent);box-shadow:0 0 0 1px var(--cockpit-accent-50);}.worn-input.svelte-iabhe7::placeholder {color:var(--cockpit-text-muted);opacity:1;}.worn-input.svelte-iabhe7:read-only:not(:disabled) {background-color:var(--cockpit-bg-secondary);color:var(--cockpit-text-secondary, var(--cockpit-text));}.worn-input.svelte-iabhe7:disabled {background-color:var(--cockpit-bg-secondary);border-color:var(--worn-field-boundary);color:var(--cockpit-text-muted);-webkit-text-fill-color:var(--cockpit-text-muted);cursor:not-allowed;opacity:1;}\n\n  @media (pointer: coarse) {.worn-input.svelte-iabhe7 {font-size:16px;}\n  }\n\n  @media (prefers-reduced-motion: reduce) {.worn-input.svelte-iabhe7 {transition:none;}\n  }"
};
function Ii(e, t) {
	O(t, !0), Hr(e, Fi);
	let n = $(t, "type", 3, "text"), r = $(t, "placeholder", 3, ""), i = $(t, "value", 15, ""), a = $(t, "required", 3, !1), o = $(t, "disabled", 3, !1), s = $(t, "readonly", 3, !1), c = $(t, "spellcheck", 3, !1), l = $(t, "class", 3, ""), u = /* @__PURE__ */ Ti(t, Mi), d = /* @__PURE__ */ M(() => n() === "textarea" || t.rows !== void 0);
	var f = mr(), p = on(f), m = (e) => {
		var n = Ni();
		nt(n), _i(n, () => ({
			class: `worn-input worn-input-textarea ${l() ?? ""}`,
			id: t.id,
			placeholder: r(),
			oninput: t.oninput,
			onchange: t.onchange,
			onkeydown: t.onkeydown,
			onblur: t.onblur,
			required: a(),
			disabled: o(),
			readonly: s(),
			autocomplete: t.autocomplete,
			spellcheck: c() === !0,
			rows: t.rows,
			...u
		}), void 0, void 0, void 0, "svelte-iabhe7"), xi(n, i), hr(e, n);
	}, h = (e) => {
		var d = Pi();
		_i(d, () => ({
			class: `worn-input ${l() ?? ""}`,
			id: t.id,
			type: n(),
			placeholder: r(),
			oninput: t.oninput,
			onchange: t.onchange,
			onkeydown: t.onkeydown,
			onblur: t.onblur,
			required: a(),
			disabled: o(),
			readonly: s(),
			autocomplete: t.autocomplete,
			inputmode: t.inputmode,
			spellcheck: c() === !0,
			...u
		}), void 0, void 0, void 0, "svelte-iabhe7", !0), xi(d, i), hr(e, d);
	};
	Mr(p, (e) => {
		Q(d) ? e(m) : e(h, -1);
	}), hr(e, f), k();
}
//#endregion
//#region src/InputElement.svelte
var Li = {
	hash: "svelte-bcf70r",
	code: ":host {display:inline-block;inline-size:100%;max-inline-size:100%;min-inline-size:0;vertical-align:middle;}"
};
function Ri(e, t) {
	O(t, !0), Hr(e, Li);
	let n = $(t, "type", 7, "text"), r = $(t, "value", 7, ""), i = $(t, "placeholder", 7, ""), a = $(t, "required", 7, !1), o = $(t, "disabled", 7, !1), s = $(t, "readonly", 7, !1), c = $(t, "autocomplete", 7), l = $(t, "inputmode", 7), u = $(t, "ariaLabel", 7, ""), d = t.$$host, f = /* @__PURE__ */ M(() => u() || d.getAttribute("aria-label") || "");
	function p(e) {
		d.value = e.currentTarget.value;
	}
	var m = {
		get type() {
			return n();
		},
		set type(e = "text") {
			n(e), F();
		},
		get value() {
			return r();
		},
		set value(e = "") {
			r(e), F();
		},
		get placeholder() {
			return i();
		},
		set placeholder(e = "") {
			i(e), F();
		},
		get required() {
			return a();
		},
		set required(e = !1) {
			a(e), F();
		},
		get disabled() {
			return o();
		},
		set disabled(e = !1) {
			o(e), F();
		},
		get readonly() {
			return s();
		},
		set readonly(e = !1) {
			s(e), F();
		},
		get autocomplete() {
			return c();
		},
		set autocomplete(e) {
			c(e), F();
		},
		get inputmode() {
			return l();
		},
		set inputmode(e) {
			l(e), F();
		},
		get ariaLabel() {
			return u();
		},
		set ariaLabel(e = "") {
			u(e), F();
		}
	};
	{
		let t = /* @__PURE__ */ M(() => Q(f) || void 0);
		Ii(e, {
			get type() {
				return n();
			},
			get placeholder() {
				return i();
			},
			get required() {
				return a();
			},
			get disabled() {
				return o();
			},
			get readonly() {
				return s();
			},
			get autocomplete() {
				return c();
			},
			get inputmode() {
				return l();
			},
			get "aria-label"() {
				return Q(t);
			},
			oninput: p,
			onchange: p,
			get value() {
				return r();
			},
			set value(e) {
				r(e);
			}
		});
	}
	return k(m);
}
customElements.define("worn-input", ji(Ri, {
	type: {
		reflect: !0,
		type: "String"
	},
	value: {
		reflect: !0,
		type: "String"
	},
	placeholder: {
		reflect: !0,
		type: "String"
	},
	required: {
		reflect: !0,
		type: "Boolean"
	},
	disabled: {
		reflect: !0,
		type: "Boolean"
	},
	readonly: {
		reflect: !0,
		type: "Boolean"
	},
	autocomplete: {
		reflect: !0,
		type: "String"
	},
	inputmode: {
		reflect: !0,
		type: "String"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
//#region src/Textarea.svelte
var zi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"value",
	"placeholder",
	"rows",
	"oninput",
	"onchange",
	"onkeydown",
	"onblur",
	"required",
	"disabled",
	"readonly",
	"autocomplete",
	"spellcheck",
	"id",
	"class"
]), Bi = /* @__PURE__ */ pr("<div class=\"worn-textarea-wrap svelte-h9zoyp\"><textarea></textarea></div>"), Vi = {
	hash: "svelte-h9zoyp",
	code: ".worn-textarea-wrap.svelte-h9zoyp {inline-size:100%;max-inline-size:100%;min-inline-size:0;position:relative;}.worn-textarea.svelte-h9zoyp {--worn-field-boundary: color-mix(in srgb, var(--cockpit-border-strong) 30%, var(--cockpit-text-muted));box-sizing:border-box;inline-size:100%;max-inline-size:100%;min-block-size:72px;min-inline-size:0;padding:8px 12px;border:1px solid var(--worn-field-boundary);border-radius:var(--cockpit-radius-sm);background:var(--cockpit-surface);background-image:repeating-linear-gradient(\n      to bottom,\n      transparent,\n      transparent 27px,\n      var(--cockpit-border) 27px,\n      var(--cockpit-border) 28px\n    );background-attachment:local;color:var(--cockpit-text);font-family:var(--font-typewriter);font-size:14px;line-height:28px;resize:vertical;touch-action:manipulation;transition:background-color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;}.worn-textarea.svelte-h9zoyp:focus-visible {outline:2px dashed var(--worn-field-focus, var(--cockpit-focus, var(--cockpit-text, #21322b)));outline-offset:2px;border-color:var(--cockpit-accent);box-shadow:0 0 0 1px var(--cockpit-accent-50);}.worn-textarea.svelte-h9zoyp::placeholder {color:var(--cockpit-text-muted);opacity:1;}.worn-textarea.svelte-h9zoyp:read-only:not(:disabled) {background-color:var(--cockpit-bg-secondary);color:var(--cockpit-text-secondary, var(--cockpit-text));}.worn-textarea.svelte-h9zoyp:disabled {background-color:var(--cockpit-bg-secondary);border-color:var(--worn-field-boundary);color:var(--cockpit-text-muted);-webkit-text-fill-color:var(--cockpit-text-muted);cursor:not-allowed;opacity:1;}\n\n  @media (pointer: coarse) {.worn-textarea.svelte-h9zoyp {font-size:16px;}\n  }\n\n  @media (prefers-reduced-motion: reduce) {.worn-textarea.svelte-h9zoyp {transition:none;}\n  }"
};
function Hi(e, t) {
	O(t, !0), Hr(e, Vi);
	let n = $(t, "value", 15, ""), r = $(t, "placeholder", 3, ""), i = $(t, "rows", 3, 3), a = $(t, "required", 3, !1), o = $(t, "disabled", 3, !1), s = $(t, "readonly", 3, !1), c = $(t, "spellcheck", 3, !1), l = $(t, "class", 3, ""), u = /* @__PURE__ */ Ti(t, zi);
	var d = Bi(), f = an(d);
	nt(f), _i(f, () => ({
		class: `worn-textarea ${l() ?? ""}`,
		id: t.id,
		placeholder: r(),
		rows: i(),
		oninput: t.oninput,
		onchange: t.onchange,
		onkeydown: t.onkeydown,
		onblur: t.onblur,
		required: a(),
		disabled: o(),
		readonly: s(),
		autocomplete: t.autocomplete,
		spellcheck: c() === !0,
		...u
	}), void 0, void 0, void 0, "svelte-h9zoyp"), Fe(d), xi(f, n), hr(e, d), k();
}
//#endregion
//#region src/TextareaElement.svelte
var Ui = {
	hash: "svelte-yi6djx",
	code: ":host {display:block;inline-size:100%;max-inline-size:100%;min-inline-size:0;}"
};
function Wi(e, t) {
	O(t, !0), Hr(e, Ui);
	let n = $(t, "value", 7, ""), r = $(t, "placeholder", 7, ""), i = $(t, "rows", 7, 3), a = $(t, "required", 7, !1), o = $(t, "disabled", 7, !1), s = $(t, "readonly", 7, !1), c = $(t, "autocomplete", 7), l = $(t, "ariaLabel", 7, ""), u = t.$$host, d = /* @__PURE__ */ M(() => l() || u.getAttribute("aria-label") || "");
	function f(e) {
		u.value = e.currentTarget.value;
	}
	var p = {
		get value() {
			return n();
		},
		set value(e = "") {
			n(e), F();
		},
		get placeholder() {
			return r();
		},
		set placeholder(e = "") {
			r(e), F();
		},
		get rows() {
			return i();
		},
		set rows(e = 3) {
			i(e), F();
		},
		get required() {
			return a();
		},
		set required(e = !1) {
			a(e), F();
		},
		get disabled() {
			return o();
		},
		set disabled(e = !1) {
			o(e), F();
		},
		get readonly() {
			return s();
		},
		set readonly(e = !1) {
			s(e), F();
		},
		get autocomplete() {
			return c();
		},
		set autocomplete(e) {
			c(e), F();
		},
		get ariaLabel() {
			return l();
		},
		set ariaLabel(e = "") {
			l(e), F();
		}
	};
	{
		let t = /* @__PURE__ */ M(() => Q(d) || void 0);
		Hi(e, {
			get placeholder() {
				return r();
			},
			get rows() {
				return i();
			},
			get required() {
				return a();
			},
			get disabled() {
				return o();
			},
			get readonly() {
				return s();
			},
			get autocomplete() {
				return c();
			},
			get "aria-label"() {
				return Q(t);
			},
			oninput: f,
			onchange: f,
			get value() {
				return n();
			},
			set value(e) {
				n(e);
			}
		});
	}
	return k(p);
}
customElements.define("worn-textarea", ji(Wi, {
	value: {
		reflect: !0,
		type: "String"
	},
	placeholder: {
		reflect: !0,
		type: "String"
	},
	rows: {
		reflect: !0,
		type: "Number"
	},
	required: {
		reflect: !0,
		type: "Boolean"
	},
	disabled: {
		reflect: !0,
		type: "Boolean"
	},
	readonly: {
		reflect: !0,
		type: "Boolean"
	},
	autocomplete: {
		reflect: !0,
		type: "String"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
//#region src/Select.svelte
var Gi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"value",
	"onchange",
	"options",
	"required",
	"disabled",
	"id",
	"class"
]), Ki = /* @__PURE__ */ pr("<option> </option>"), qi = /* @__PURE__ */ pr("<select></select>"), Ji = {
	hash: "svelte-11krpw7",
	code: ".worn-select.svelte-11krpw7 {--worn-field-boundary: color-mix(in srgb, var(--cockpit-border-strong) 30%, var(--cockpit-text-muted));box-sizing:border-box;max-inline-size:100%;min-block-size:44px;min-inline-size:0;padding:9px 32px 9px 12px;overflow:hidden;border:1px solid var(--worn-field-boundary);border-radius:var(--cockpit-radius-sm);background-color:var(--cockpit-surface);background-image:linear-gradient(45deg, transparent 50%, currentColor 50%),\n      linear-gradient(135deg, currentColor 50%, transparent 50%);background-position:calc(100% - 14px) calc(50% + 1px),\n      calc(100% - 9px) calc(50% + 1px);background-repeat:no-repeat;background-size:5px 5px, 5px 5px;color:var(--cockpit-text);font-family:var(--font-typewriter);font-size:14px;line-height:1.4;text-overflow:ellipsis;white-space:nowrap;appearance:none;cursor:pointer;touch-action:manipulation;transition:background-color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;}.worn-select.svelte-11krpw7:focus-visible {outline:2px dashed var(--worn-field-focus, var(--cockpit-focus, var(--cockpit-text, #21322b)));outline-offset:2px;border-color:var(--cockpit-accent);box-shadow:0 0 0 1px var(--cockpit-accent-50);}.worn-select.svelte-11krpw7:disabled {background-color:var(--cockpit-bg-secondary);border-color:var(--worn-field-boundary);color:var(--cockpit-text-muted);-webkit-text-fill-color:var(--cockpit-text-muted);cursor:not-allowed;opacity:1;}\n\n  @media (pointer: coarse) {.worn-select.svelte-11krpw7 {font-size:16px;}\n  }\n\n  @media (prefers-reduced-motion: reduce) {.worn-select.svelte-11krpw7 {transition:none;}\n  }"
};
function Yi(e, t) {
	O(t, !0), Hr(e, Ji);
	let n = $(t, "value", 15, ""), r = $(t, "required", 3, !1), i = $(t, "disabled", 3, !1), a = $(t, "class", 3, ""), o = /* @__PURE__ */ Ti(t, Gi);
	var s = qi();
	_i(s, () => ({
		class: `worn-select ${a() ?? ""}`,
		id: t.id,
		onchange: t.onchange,
		required: r(),
		disabled: i(),
		...o
	}), void 0, void 0, void 0, "svelte-11krpw7"), Ir(s, 21, () => t.options, (e) => e.value, (e, t) => {
		var n = Ki(), r = an(n, !0);
		Fe(n);
		var i = {};
		xn(() => {
			n.disabled = Q(t).disabled, wr(r, Q(t).label), i !== (i = Q(t).value) && (n.value = (n.__value = Q(t).value) ?? "");
		}), hr(e, n);
	}), Fe(s), ri(s, n), hr(e, s), k();
}
//#endregion
//#region src/SelectElement.svelte
var Xi = {
	hash: "svelte-142x5jn",
	code: ":host {display:inline-block;max-inline-size:100%;min-inline-size:0;vertical-align:middle;}"
};
function Zi(e, t) {
	O(t, !0), Hr(e, Xi);
	let n = $(t, "value", 7, ""), r = $(t, "options", 23, () => []), i = $(t, "required", 7, !1), a = $(t, "disabled", 7, !1), o = $(t, "ariaLabel", 7, ""), s = t.$$host, c = /* @__PURE__ */ M(() => o() || s.getAttribute("aria-label") || "");
	function l(e) {
		s.value = e.currentTarget.value;
	}
	var u = {
		get value() {
			return n();
		},
		set value(e = "") {
			n(e), F();
		},
		get options() {
			return r();
		},
		set options(e = []) {
			r(e), F();
		},
		get required() {
			return i();
		},
		set required(e = !1) {
			i(e), F();
		},
		get disabled() {
			return a();
		},
		set disabled(e = !1) {
			a(e), F();
		},
		get ariaLabel() {
			return o();
		},
		set ariaLabel(e = "") {
			o(e), F();
		}
	};
	{
		let t = /* @__PURE__ */ M(() => Q(c) || void 0);
		Yi(e, {
			get options() {
				return r();
			},
			get required() {
				return i();
			},
			get disabled() {
				return a();
			},
			get "aria-label"() {
				return Q(t);
			},
			onchange: l,
			get value() {
				return n();
			},
			set value(e) {
				n(e);
			}
		});
	}
	return k(u);
}
customElements.define("worn-select", ji(Zi, {
	value: {
		reflect: !0,
		type: "String"
	},
	options: { type: "Array" },
	required: {
		reflect: !0,
		type: "Boolean"
	},
	disabled: {
		reflect: !0,
		type: "Boolean"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
//#region src/Range.svelte
var Qi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"value",
	"min",
	"max",
	"step",
	"label",
	"suffix",
	"oninput",
	"onchange",
	"disabled",
	"class"
]), $i = /* @__PURE__ */ pr("<div role=\"group\"><div class=\"worn-range-control svelte-8d7xt8\"><input/> <div class=\"worn-range-track svelte-8d7xt8\"><div></div></div></div> <span class=\"worn-range-value svelte-8d7xt8\" aria-hidden=\"true\"> </span></div>"), ea = {
	hash: "svelte-8d7xt8",
	code: ".worn-range.svelte-8d7xt8 {box-sizing:border-box;display:flex;align-items:center;gap:8px;inline-size:100%;max-inline-size:100%;min-block-size:44px;min-inline-size:0;}.worn-range-control.svelte-8d7xt8 {box-sizing:border-box;position:relative;display:flex;flex:1 1 auto;align-items:center;min-block-size:44px;min-inline-size:44px;}.worn-range-input.svelte-8d7xt8 {position:absolute;z-index:1;inset:0;inline-size:100%;block-size:100%;margin:0;opacity:0;cursor:pointer;touch-action:pan-y;-webkit-appearance:none;appearance:none;}.worn-range-input.svelte-8d7xt8:disabled {cursor:not-allowed;}.worn-range-track.svelte-8d7xt8 {position:relative;flex:1 1 auto;min-inline-size:44px;block-size:8px;overflow:hidden;border-radius:var(--worn-range-radius, 4px);background:var(--worn-range-track, var(--cockpit-border, #d8d2c8));}.worn-range-input.svelte-8d7xt8:focus-visible + .worn-range-track:where(.svelte-8d7xt8) {outline:2px dashed var(--worn-range-focus, var(--worn-field-focus, var(--cockpit-focus, var(--cockpit-text, #21322b))));outline-offset:3px;}.worn-range-fill.svelte-8d7xt8 {block-size:100%;min-inline-size:0;border-radius:inherit;background:var(--worn-range-fill, var(--cockpit-accent, #0f766e));pointer-events:none;transition:width 0.15s ease;}.worn-range-value.svelte-8d7xt8 {flex:0 1 auto;min-inline-size:32px;max-inline-size:40%;overflow:hidden;color:var(--worn-range-value, var(--cockpit-text-muted, #506058));font-family:var(--font-typewriter, ui-monospace, SFMono-Regular, Consolas, monospace);font-size:13px;line-height:1.4;text-align:end;text-overflow:ellipsis;white-space:nowrap;user-select:none;}.worn-range.is-disabled.svelte-8d7xt8 .worn-range-track:where(.svelte-8d7xt8) {background:var(--cockpit-bg-secondary, #ece6dd);box-shadow:inset 0 0 0 1px var(--cockpit-border, #d8d2c8);}.worn-range.is-disabled.svelte-8d7xt8 .worn-range-fill:where(.svelte-8d7xt8) {background:var(--cockpit-text-muted, #506058);}.worn-range.is-disabled.svelte-8d7xt8 .worn-range-value:where(.svelte-8d7xt8) {color:var(--cockpit-text-secondary, #394b43);}.worn-range-fill-0.svelte-8d7xt8 {width:0%;}.worn-range-fill-5.svelte-8d7xt8 {width:5%;}.worn-range-fill-10.svelte-8d7xt8 {width:10%;}.worn-range-fill-15.svelte-8d7xt8 {width:15%;}.worn-range-fill-20.svelte-8d7xt8 {width:20%;}.worn-range-fill-25.svelte-8d7xt8 {width:25%;}.worn-range-fill-30.svelte-8d7xt8 {width:30%;}.worn-range-fill-35.svelte-8d7xt8 {width:35%;}.worn-range-fill-40.svelte-8d7xt8 {width:40%;}.worn-range-fill-45.svelte-8d7xt8 {width:45%;}.worn-range-fill-50.svelte-8d7xt8 {width:50%;}.worn-range-fill-55.svelte-8d7xt8 {width:55%;}.worn-range-fill-60.svelte-8d7xt8 {width:60%;}.worn-range-fill-65.svelte-8d7xt8 {width:65%;}.worn-range-fill-70.svelte-8d7xt8 {width:70%;}.worn-range-fill-75.svelte-8d7xt8 {width:75%;}.worn-range-fill-80.svelte-8d7xt8 {width:80%;}.worn-range-fill-85.svelte-8d7xt8 {width:85%;}.worn-range-fill-90.svelte-8d7xt8 {width:90%;}.worn-range-fill-95.svelte-8d7xt8 {width:95%;}.worn-range-fill-100.svelte-8d7xt8 {width:100%;}\n\n  @media (pointer: coarse) {.worn-range-input.svelte-8d7xt8 {font-size:16px;}\n  }\n\n  @media (prefers-reduced-motion: reduce) {.worn-range-fill.svelte-8d7xt8 {transition:none;}\n  }"
};
function ta(e, t) {
	O(t, !0), Hr(e, ea);
	let n = $(t, "value", 15, 0), r = $(t, "min", 3, 0), i = $(t, "max", 3, 100), a = $(t, "step", 3, 1), o = $(t, "label", 3, ""), s = $(t, "suffix", 3, ""), c = $(t, "disabled", 3, !1), l = $(t, "class", 3, ""), u = /* @__PURE__ */ Ti(t, Qi), d = /* @__PURE__ */ M(() => i() > r() ? Math.min(100, Math.max(0, Math.round((n() - r()) / (i() - r()) * 100))) : 0), f = /* @__PURE__ */ M(() => Math.round(Q(d) / 5) * 5), p = /* @__PURE__ */ M(() => `${n()}${s()}`);
	var m = $i();
	let h;
	var g = an(m), _ = an(g);
	_i(_, () => ({
		class: "worn-range-input",
		type: "range",
		min: r(),
		max: i(),
		step: a(),
		oninput: t.oninput,
		onchange: t.onchange,
		disabled: c(),
		"aria-label": o() || "Value",
		...u
	}), void 0, void 0, void 0, "svelte-8d7xt8", !0);
	var v = sn(_, 2), y = an(v);
	Fe(v), Fe(g);
	var b = sn(g, 2), x = an(b, !0);
	Fe(b), Fe(m), xn(() => {
		h = Qr(m, 1, `worn-range ${l() ?? ""}`, "svelte-8d7xt8", h, { "is-disabled": c() }), hi(m, "aria-label", o() || "Range slider"), hi(m, "aria-disabled", c()), Qr(y, 1, `worn-range-fill worn-range-fill-${Q(f) ?? ""}`, "svelte-8d7xt8"), hi(b, "title", Q(p)), wr(x, Q(p));
	}), xi(_, n), hr(e, m), k();
}
//#endregion
//#region src/RangeElement.svelte
var na = {
	hash: "svelte-1e950mw",
	code: ":host {display:inline-block;inline-size:100%;max-inline-size:100%;min-inline-size:0;vertical-align:middle;}"
};
function ra(e, t) {
	O(t, !0), Hr(e, na);
	let n = $(t, "value", 7, 0), r = $(t, "min", 7, 0), i = $(t, "max", 7, 100), a = $(t, "step", 7, 1), o = $(t, "suffix", 7, ""), s = $(t, "disabled", 7, !1), c = $(t, "ariaLabel", 7, ""), l = t.$$host, u = /* @__PURE__ */ M(() => c() || l.getAttribute("aria-label") || "Value");
	function d(e) {
		let t = Number(e.currentTarget.value);
		n(t), l.value = t;
	}
	return ta(e, {
		get min() {
			return r();
		},
		get max() {
			return i();
		},
		get step() {
			return a();
		},
		get label() {
			return Q(u);
		},
		get suffix() {
			return o();
		},
		get disabled() {
			return s();
		},
		oninput: d,
		onchange: d,
		get value() {
			return n();
		},
		set value(e) {
			n(e);
		}
	}), k({
		get value() {
			return n();
		},
		set value(e = 0) {
			n(e), F();
		},
		get min() {
			return r();
		},
		set min(e = 0) {
			r(e), F();
		},
		get max() {
			return i();
		},
		set max(e = 100) {
			i(e), F();
		},
		get step() {
			return a();
		},
		set step(e = 1) {
			a(e), F();
		},
		get suffix() {
			return o();
		},
		set suffix(e = "") {
			o(e), F();
		},
		get disabled() {
			return s();
		},
		set disabled(e = !1) {
			s(e), F();
		},
		get ariaLabel() {
			return c();
		},
		set ariaLabel(e = "") {
			c(e), F();
		}
	});
}
customElements.define("worn-range", ji(ra, {
	value: {
		reflect: !0,
		type: "Number"
	},
	min: {
		reflect: !0,
		type: "Number"
	},
	max: {
		reflect: !0,
		type: "Number"
	},
	step: {
		reflect: !0,
		type: "Number"
	},
	suffix: {
		reflect: !0,
		type: "String"
	},
	disabled: {
		reflect: !0,
		type: "Boolean"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
