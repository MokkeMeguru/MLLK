// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__62399__auto__,writer__62400__auto__,opt__62401__auto__){
return cljs.core._write.call(null,writer__62400__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65827 = arguments.length;
var i__63029__auto___65828 = (0);
while(true){
if((i__63029__auto___65828 < len__63028__auto___65827)){
args__63039__auto__.push((arguments[i__63029__auto___65828]));

var G__65829 = (i__63029__auto___65828 + (1));
i__63029__auto___65828 = G__65829;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq65826){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65826));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65831 = arguments.length;
var i__63029__auto___65832 = (0);
while(true){
if((i__63029__auto___65832 < len__63028__auto___65831)){
args__63039__auto__.push((arguments[i__63029__auto___65832]));

var G__65833 = (i__63029__auto___65832 + (1));
i__63029__auto___65832 = G__65833;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq65830){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65830));
});

var g_QMARK__65834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_65835 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__65834){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__65834))
,null));
var mkg_65836 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__65834,g_65835){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__65834,g_65835))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__65834,g_65835,mkg_65836){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__65834).call(null,x);
});})(g_QMARK__65834,g_65835,mkg_65836))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__65834,g_65835,mkg_65836){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_65836).call(null,gfn);
});})(g_QMARK__65834,g_65835,mkg_65836))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__65834,g_65835,mkg_65836){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_65835).call(null,generator);
});})(g_QMARK__65834,g_65835,mkg_65836))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__64389__auto___65856 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__64389__auto___65856){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65857 = arguments.length;
var i__63029__auto___65858 = (0);
while(true){
if((i__63029__auto___65858 < len__63028__auto___65857)){
args__63039__auto__.push((arguments[i__63029__auto___65858]));

var G__65859 = (i__63029__auto___65858 + (1));
i__63029__auto___65858 = G__65859;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65856))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65856){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65856),args);
});})(g__64389__auto___65856))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__64389__auto___65856){
return (function (seq65837){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65837));
});})(g__64389__auto___65856))
;


var g__64389__auto___65860 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__64389__auto___65860){
return (function cljs$spec$gen$alpha$list(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65861 = arguments.length;
var i__63029__auto___65862 = (0);
while(true){
if((i__63029__auto___65862 < len__63028__auto___65861)){
args__63039__auto__.push((arguments[i__63029__auto___65862]));

var G__65863 = (i__63029__auto___65862 + (1));
i__63029__auto___65862 = G__65863;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65860))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65860){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65860),args);
});})(g__64389__auto___65860))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__64389__auto___65860){
return (function (seq65838){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65838));
});})(g__64389__auto___65860))
;


var g__64389__auto___65864 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__64389__auto___65864){
return (function cljs$spec$gen$alpha$map(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65865 = arguments.length;
var i__63029__auto___65866 = (0);
while(true){
if((i__63029__auto___65866 < len__63028__auto___65865)){
args__63039__auto__.push((arguments[i__63029__auto___65866]));

var G__65867 = (i__63029__auto___65866 + (1));
i__63029__auto___65866 = G__65867;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65864))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65864){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65864),args);
});})(g__64389__auto___65864))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__64389__auto___65864){
return (function (seq65839){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65839));
});})(g__64389__auto___65864))
;


var g__64389__auto___65868 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__64389__auto___65868){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65869 = arguments.length;
var i__63029__auto___65870 = (0);
while(true){
if((i__63029__auto___65870 < len__63028__auto___65869)){
args__63039__auto__.push((arguments[i__63029__auto___65870]));

var G__65871 = (i__63029__auto___65870 + (1));
i__63029__auto___65870 = G__65871;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65868))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65868){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65868),args);
});})(g__64389__auto___65868))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__64389__auto___65868){
return (function (seq65840){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65840));
});})(g__64389__auto___65868))
;


var g__64389__auto___65872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__64389__auto___65872){
return (function cljs$spec$gen$alpha$set(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65873 = arguments.length;
var i__63029__auto___65874 = (0);
while(true){
if((i__63029__auto___65874 < len__63028__auto___65873)){
args__63039__auto__.push((arguments[i__63029__auto___65874]));

var G__65875 = (i__63029__auto___65874 + (1));
i__63029__auto___65874 = G__65875;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65872))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65872){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65872),args);
});})(g__64389__auto___65872))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__64389__auto___65872){
return (function (seq65841){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65841));
});})(g__64389__auto___65872))
;


var g__64389__auto___65876 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__64389__auto___65876){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65877 = arguments.length;
var i__63029__auto___65878 = (0);
while(true){
if((i__63029__auto___65878 < len__63028__auto___65877)){
args__63039__auto__.push((arguments[i__63029__auto___65878]));

var G__65879 = (i__63029__auto___65878 + (1));
i__63029__auto___65878 = G__65879;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65876))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65876){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65876),args);
});})(g__64389__auto___65876))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__64389__auto___65876){
return (function (seq65842){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65842));
});})(g__64389__auto___65876))
;


var g__64389__auto___65880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__64389__auto___65880){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65881 = arguments.length;
var i__63029__auto___65882 = (0);
while(true){
if((i__63029__auto___65882 < len__63028__auto___65881)){
args__63039__auto__.push((arguments[i__63029__auto___65882]));

var G__65883 = (i__63029__auto___65882 + (1));
i__63029__auto___65882 = G__65883;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65880))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65880){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65880),args);
});})(g__64389__auto___65880))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__64389__auto___65880){
return (function (seq65843){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65843));
});})(g__64389__auto___65880))
;


var g__64389__auto___65884 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__64389__auto___65884){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65885 = arguments.length;
var i__63029__auto___65886 = (0);
while(true){
if((i__63029__auto___65886 < len__63028__auto___65885)){
args__63039__auto__.push((arguments[i__63029__auto___65886]));

var G__65887 = (i__63029__auto___65886 + (1));
i__63029__auto___65886 = G__65887;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65884))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65884){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65884),args);
});})(g__64389__auto___65884))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__64389__auto___65884){
return (function (seq65844){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65844));
});})(g__64389__auto___65884))
;


var g__64389__auto___65888 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__64389__auto___65888){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65889 = arguments.length;
var i__63029__auto___65890 = (0);
while(true){
if((i__63029__auto___65890 < len__63028__auto___65889)){
args__63039__auto__.push((arguments[i__63029__auto___65890]));

var G__65891 = (i__63029__auto___65890 + (1));
i__63029__auto___65890 = G__65891;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65888))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65888){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65888),args);
});})(g__64389__auto___65888))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__64389__auto___65888){
return (function (seq65845){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65845));
});})(g__64389__auto___65888))
;


var g__64389__auto___65892 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__64389__auto___65892){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65893 = arguments.length;
var i__63029__auto___65894 = (0);
while(true){
if((i__63029__auto___65894 < len__63028__auto___65893)){
args__63039__auto__.push((arguments[i__63029__auto___65894]));

var G__65895 = (i__63029__auto___65894 + (1));
i__63029__auto___65894 = G__65895;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65892))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65892),args);
});})(g__64389__auto___65892))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__64389__auto___65892){
return (function (seq65846){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65846));
});})(g__64389__auto___65892))
;


var g__64389__auto___65896 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__64389__auto___65896){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65897 = arguments.length;
var i__63029__auto___65898 = (0);
while(true){
if((i__63029__auto___65898 < len__63028__auto___65897)){
args__63039__auto__.push((arguments[i__63029__auto___65898]));

var G__65899 = (i__63029__auto___65898 + (1));
i__63029__auto___65898 = G__65899;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65896))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65896),args);
});})(g__64389__auto___65896))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__64389__auto___65896){
return (function (seq65847){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65847));
});})(g__64389__auto___65896))
;


var g__64389__auto___65900 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__64389__auto___65900){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65901 = arguments.length;
var i__63029__auto___65902 = (0);
while(true){
if((i__63029__auto___65902 < len__63028__auto___65901)){
args__63039__auto__.push((arguments[i__63029__auto___65902]));

var G__65903 = (i__63029__auto___65902 + (1));
i__63029__auto___65902 = G__65903;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65900))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65900),args);
});})(g__64389__auto___65900))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__64389__auto___65900){
return (function (seq65848){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65848));
});})(g__64389__auto___65900))
;


var g__64389__auto___65904 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__64389__auto___65904){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65905 = arguments.length;
var i__63029__auto___65906 = (0);
while(true){
if((i__63029__auto___65906 < len__63028__auto___65905)){
args__63039__auto__.push((arguments[i__63029__auto___65906]));

var G__65907 = (i__63029__auto___65906 + (1));
i__63029__auto___65906 = G__65907;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65904))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65904){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65904),args);
});})(g__64389__auto___65904))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__64389__auto___65904){
return (function (seq65849){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65849));
});})(g__64389__auto___65904))
;


var g__64389__auto___65908 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__64389__auto___65908){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65909 = arguments.length;
var i__63029__auto___65910 = (0);
while(true){
if((i__63029__auto___65910 < len__63028__auto___65909)){
args__63039__auto__.push((arguments[i__63029__auto___65910]));

var G__65911 = (i__63029__auto___65910 + (1));
i__63029__auto___65910 = G__65911;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65908))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65908),args);
});})(g__64389__auto___65908))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__64389__auto___65908){
return (function (seq65850){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65850));
});})(g__64389__auto___65908))
;


var g__64389__auto___65912 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__64389__auto___65912){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65913 = arguments.length;
var i__63029__auto___65914 = (0);
while(true){
if((i__63029__auto___65914 < len__63028__auto___65913)){
args__63039__auto__.push((arguments[i__63029__auto___65914]));

var G__65915 = (i__63029__auto___65914 + (1));
i__63029__auto___65914 = G__65915;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65912))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65912),args);
});})(g__64389__auto___65912))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__64389__auto___65912){
return (function (seq65851){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65851));
});})(g__64389__auto___65912))
;


var g__64389__auto___65916 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__64389__auto___65916){
return (function cljs$spec$gen$alpha$return(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65917 = arguments.length;
var i__63029__auto___65918 = (0);
while(true){
if((i__63029__auto___65918 < len__63028__auto___65917)){
args__63039__auto__.push((arguments[i__63029__auto___65918]));

var G__65919 = (i__63029__auto___65918 + (1));
i__63029__auto___65918 = G__65919;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65916))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65916),args);
});})(g__64389__auto___65916))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__64389__auto___65916){
return (function (seq65852){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65852));
});})(g__64389__auto___65916))
;


var g__64389__auto___65920 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__64389__auto___65920){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65921 = arguments.length;
var i__63029__auto___65922 = (0);
while(true){
if((i__63029__auto___65922 < len__63028__auto___65921)){
args__63039__auto__.push((arguments[i__63029__auto___65922]));

var G__65923 = (i__63029__auto___65922 + (1));
i__63029__auto___65922 = G__65923;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65920))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65920),args);
});})(g__64389__auto___65920))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__64389__auto___65920){
return (function (seq65853){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65853));
});})(g__64389__auto___65920))
;


var g__64389__auto___65924 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__64389__auto___65924){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65925 = arguments.length;
var i__63029__auto___65926 = (0);
while(true){
if((i__63029__auto___65926 < len__63028__auto___65925)){
args__63039__auto__.push((arguments[i__63029__auto___65926]));

var G__65927 = (i__63029__auto___65926 + (1));
i__63029__auto___65926 = G__65927;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65924))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65924),args);
});})(g__64389__auto___65924))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__64389__auto___65924){
return (function (seq65854){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65854));
});})(g__64389__auto___65924))
;


var g__64389__auto___65928 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__64389__auto___65928){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65929 = arguments.length;
var i__63029__auto___65930 = (0);
while(true){
if((i__63029__auto___65930 < len__63028__auto___65929)){
args__63039__auto__.push((arguments[i__63029__auto___65930]));

var G__65931 = (i__63029__auto___65930 + (1));
i__63029__auto___65930 = G__65931;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64389__auto___65928))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64389__auto___65928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64389__auto___65928),args);
});})(g__64389__auto___65928))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__64389__auto___65928){
return (function (seq65855){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65855));
});})(g__64389__auto___65928))
;

var g__64402__auto___65953 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__64402__auto___65953){
return (function cljs$spec$gen$alpha$any(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65954 = arguments.length;
var i__63029__auto___65955 = (0);
while(true){
if((i__63029__auto___65955 < len__63028__auto___65954)){
args__63039__auto__.push((arguments[i__63029__auto___65955]));

var G__65956 = (i__63029__auto___65955 + (1));
i__63029__auto___65955 = G__65956;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65953))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65953){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65953);
});})(g__64402__auto___65953))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__64402__auto___65953){
return (function (seq65932){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65932));
});})(g__64402__auto___65953))
;


var g__64402__auto___65957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__64402__auto___65957){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65958 = arguments.length;
var i__63029__auto___65959 = (0);
while(true){
if((i__63029__auto___65959 < len__63028__auto___65958)){
args__63039__auto__.push((arguments[i__63029__auto___65959]));

var G__65960 = (i__63029__auto___65959 + (1));
i__63029__auto___65959 = G__65960;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65957))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65957){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65957);
});})(g__64402__auto___65957))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__64402__auto___65957){
return (function (seq65933){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65933));
});})(g__64402__auto___65957))
;


var g__64402__auto___65961 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__64402__auto___65961){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65962 = arguments.length;
var i__63029__auto___65963 = (0);
while(true){
if((i__63029__auto___65963 < len__63028__auto___65962)){
args__63039__auto__.push((arguments[i__63029__auto___65963]));

var G__65964 = (i__63029__auto___65963 + (1));
i__63029__auto___65963 = G__65964;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65961))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65961){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65961);
});})(g__64402__auto___65961))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__64402__auto___65961){
return (function (seq65934){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65934));
});})(g__64402__auto___65961))
;


var g__64402__auto___65965 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__64402__auto___65965){
return (function cljs$spec$gen$alpha$char(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65966 = arguments.length;
var i__63029__auto___65967 = (0);
while(true){
if((i__63029__auto___65967 < len__63028__auto___65966)){
args__63039__auto__.push((arguments[i__63029__auto___65967]));

var G__65968 = (i__63029__auto___65967 + (1));
i__63029__auto___65967 = G__65968;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65965))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65965){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65965);
});})(g__64402__auto___65965))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__64402__auto___65965){
return (function (seq65935){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65935));
});})(g__64402__auto___65965))
;


var g__64402__auto___65969 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__64402__auto___65969){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65970 = arguments.length;
var i__63029__auto___65971 = (0);
while(true){
if((i__63029__auto___65971 < len__63028__auto___65970)){
args__63039__auto__.push((arguments[i__63029__auto___65971]));

var G__65972 = (i__63029__auto___65971 + (1));
i__63029__auto___65971 = G__65972;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65969))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65969){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65969);
});})(g__64402__auto___65969))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__64402__auto___65969){
return (function (seq65936){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65936));
});})(g__64402__auto___65969))
;


var g__64402__auto___65973 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__64402__auto___65973){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65974 = arguments.length;
var i__63029__auto___65975 = (0);
while(true){
if((i__63029__auto___65975 < len__63028__auto___65974)){
args__63039__auto__.push((arguments[i__63029__auto___65975]));

var G__65976 = (i__63029__auto___65975 + (1));
i__63029__auto___65975 = G__65976;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65973))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65973){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65973);
});})(g__64402__auto___65973))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__64402__auto___65973){
return (function (seq65937){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65937));
});})(g__64402__auto___65973))
;


var g__64402__auto___65977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__64402__auto___65977){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65978 = arguments.length;
var i__63029__auto___65979 = (0);
while(true){
if((i__63029__auto___65979 < len__63028__auto___65978)){
args__63039__auto__.push((arguments[i__63029__auto___65979]));

var G__65980 = (i__63029__auto___65979 + (1));
i__63029__auto___65979 = G__65980;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65977))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65977){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65977);
});})(g__64402__auto___65977))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__64402__auto___65977){
return (function (seq65938){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65938));
});})(g__64402__auto___65977))
;


var g__64402__auto___65981 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__64402__auto___65981){
return (function cljs$spec$gen$alpha$double(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65982 = arguments.length;
var i__63029__auto___65983 = (0);
while(true){
if((i__63029__auto___65983 < len__63028__auto___65982)){
args__63039__auto__.push((arguments[i__63029__auto___65983]));

var G__65984 = (i__63029__auto___65983 + (1));
i__63029__auto___65983 = G__65984;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65981))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65981){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65981);
});})(g__64402__auto___65981))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__64402__auto___65981){
return (function (seq65939){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65939));
});})(g__64402__auto___65981))
;


var g__64402__auto___65985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__64402__auto___65985){
return (function cljs$spec$gen$alpha$int(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65986 = arguments.length;
var i__63029__auto___65987 = (0);
while(true){
if((i__63029__auto___65987 < len__63028__auto___65986)){
args__63039__auto__.push((arguments[i__63029__auto___65987]));

var G__65988 = (i__63029__auto___65987 + (1));
i__63029__auto___65987 = G__65988;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65985))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65985){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65985);
});})(g__64402__auto___65985))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__64402__auto___65985){
return (function (seq65940){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65940));
});})(g__64402__auto___65985))
;


var g__64402__auto___65989 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__64402__auto___65989){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65990 = arguments.length;
var i__63029__auto___65991 = (0);
while(true){
if((i__63029__auto___65991 < len__63028__auto___65990)){
args__63039__auto__.push((arguments[i__63029__auto___65991]));

var G__65992 = (i__63029__auto___65991 + (1));
i__63029__auto___65991 = G__65992;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65989))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65989){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65989);
});})(g__64402__auto___65989))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__64402__auto___65989){
return (function (seq65941){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65941));
});})(g__64402__auto___65989))
;


var g__64402__auto___65993 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__64402__auto___65993){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65994 = arguments.length;
var i__63029__auto___65995 = (0);
while(true){
if((i__63029__auto___65995 < len__63028__auto___65994)){
args__63039__auto__.push((arguments[i__63029__auto___65995]));

var G__65996 = (i__63029__auto___65995 + (1));
i__63029__auto___65995 = G__65996;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65993))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65993){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65993);
});})(g__64402__auto___65993))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__64402__auto___65993){
return (function (seq65942){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65942));
});})(g__64402__auto___65993))
;


var g__64402__auto___65997 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__64402__auto___65997){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__63039__auto__ = [];
var len__63028__auto___65998 = arguments.length;
var i__63029__auto___65999 = (0);
while(true){
if((i__63029__auto___65999 < len__63028__auto___65998)){
args__63039__auto__.push((arguments[i__63029__auto___65999]));

var G__66000 = (i__63029__auto___65999 + (1));
i__63029__auto___65999 = G__66000;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___65997))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___65997){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___65997);
});})(g__64402__auto___65997))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__64402__auto___65997){
return (function (seq65943){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65943));
});})(g__64402__auto___65997))
;


var g__64402__auto___66001 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__64402__auto___66001){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66002 = arguments.length;
var i__63029__auto___66003 = (0);
while(true){
if((i__63029__auto___66003 < len__63028__auto___66002)){
args__63039__auto__.push((arguments[i__63029__auto___66003]));

var G__66004 = (i__63029__auto___66003 + (1));
i__63029__auto___66003 = G__66004;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66001))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66001){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66001);
});})(g__64402__auto___66001))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__64402__auto___66001){
return (function (seq65944){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65944));
});})(g__64402__auto___66001))
;


var g__64402__auto___66005 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__64402__auto___66005){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66006 = arguments.length;
var i__63029__auto___66007 = (0);
while(true){
if((i__63029__auto___66007 < len__63028__auto___66006)){
args__63039__auto__.push((arguments[i__63029__auto___66007]));

var G__66008 = (i__63029__auto___66007 + (1));
i__63029__auto___66007 = G__66008;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66005))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66005){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66005);
});})(g__64402__auto___66005))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__64402__auto___66005){
return (function (seq65945){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65945));
});})(g__64402__auto___66005))
;


var g__64402__auto___66009 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__64402__auto___66009){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66010 = arguments.length;
var i__63029__auto___66011 = (0);
while(true){
if((i__63029__auto___66011 < len__63028__auto___66010)){
args__63039__auto__.push((arguments[i__63029__auto___66011]));

var G__66012 = (i__63029__auto___66011 + (1));
i__63029__auto___66011 = G__66012;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66009))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66009){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66009);
});})(g__64402__auto___66009))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__64402__auto___66009){
return (function (seq65946){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65946));
});})(g__64402__auto___66009))
;


var g__64402__auto___66013 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__64402__auto___66013){
return (function cljs$spec$gen$alpha$string(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66014 = arguments.length;
var i__63029__auto___66015 = (0);
while(true){
if((i__63029__auto___66015 < len__63028__auto___66014)){
args__63039__auto__.push((arguments[i__63029__auto___66015]));

var G__66016 = (i__63029__auto___66015 + (1));
i__63029__auto___66015 = G__66016;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66013))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66013){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66013);
});})(g__64402__auto___66013))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__64402__auto___66013){
return (function (seq65947){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65947));
});})(g__64402__auto___66013))
;


var g__64402__auto___66017 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__64402__auto___66017){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66018 = arguments.length;
var i__63029__auto___66019 = (0);
while(true){
if((i__63029__auto___66019 < len__63028__auto___66018)){
args__63039__auto__.push((arguments[i__63029__auto___66019]));

var G__66020 = (i__63029__auto___66019 + (1));
i__63029__auto___66019 = G__66020;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66017))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66017){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66017);
});})(g__64402__auto___66017))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__64402__auto___66017){
return (function (seq65948){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65948));
});})(g__64402__auto___66017))
;


var g__64402__auto___66021 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__64402__auto___66021){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66022 = arguments.length;
var i__63029__auto___66023 = (0);
while(true){
if((i__63029__auto___66023 < len__63028__auto___66022)){
args__63039__auto__.push((arguments[i__63029__auto___66023]));

var G__66024 = (i__63029__auto___66023 + (1));
i__63029__auto___66023 = G__66024;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66021))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66021){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66021);
});})(g__64402__auto___66021))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__64402__auto___66021){
return (function (seq65949){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65949));
});})(g__64402__auto___66021))
;


var g__64402__auto___66025 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__64402__auto___66025){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66026 = arguments.length;
var i__63029__auto___66027 = (0);
while(true){
if((i__63029__auto___66027 < len__63028__auto___66026)){
args__63039__auto__.push((arguments[i__63029__auto___66027]));

var G__66028 = (i__63029__auto___66027 + (1));
i__63029__auto___66027 = G__66028;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66025))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66025){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66025);
});})(g__64402__auto___66025))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__64402__auto___66025){
return (function (seq65950){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65950));
});})(g__64402__auto___66025))
;


var g__64402__auto___66029 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__64402__auto___66029){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66030 = arguments.length;
var i__63029__auto___66031 = (0);
while(true){
if((i__63029__auto___66031 < len__63028__auto___66030)){
args__63039__auto__.push((arguments[i__63029__auto___66031]));

var G__66032 = (i__63029__auto___66031 + (1));
i__63029__auto___66031 = G__66032;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66029))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66029){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66029);
});})(g__64402__auto___66029))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__64402__auto___66029){
return (function (seq65951){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65951));
});})(g__64402__auto___66029))
;


var g__64402__auto___66033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__64402__auto___66033){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66034 = arguments.length;
var i__63029__auto___66035 = (0);
while(true){
if((i__63029__auto___66035 < len__63028__auto___66034)){
args__63039__auto__.push((arguments[i__63029__auto___66035]));

var G__66036 = (i__63029__auto___66035 + (1));
i__63029__auto___66035 = G__66036;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});})(g__64402__auto___66033))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64402__auto___66033){
return (function (args){
return cljs.core.deref.call(null,g__64402__auto___66033);
});})(g__64402__auto___66033))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__64402__auto___66033){
return (function (seq65952){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65952));
});})(g__64402__auto___66033))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__63039__auto__ = [];
var len__63028__auto___66039 = arguments.length;
var i__63029__auto___66040 = (0);
while(true){
if((i__63029__auto___66040 < len__63028__auto___66039)){
args__63039__auto__.push((arguments[i__63029__auto___66040]));

var G__66041 = (i__63029__auto___66040 + (1));
i__63029__auto___66040 = G__66041;
continue;
} else {
}
break;
}

var argseq__63040__auto__ = ((((0) < args__63039__auto__.length))?(new cljs.core.IndexedSeq(args__63039__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__63040__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__66037_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__66037_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq66038){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66038));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__66042_SHARP_){
return (new Date(p1__66042_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
