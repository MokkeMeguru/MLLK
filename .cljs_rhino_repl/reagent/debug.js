// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__85549__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__85549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85550__i = 0, G__85550__a = new Array(arguments.length -  0);
while (G__85550__i < G__85550__a.length) {G__85550__a[G__85550__i] = arguments[G__85550__i + 0]; ++G__85550__i;}
  args = new cljs.core.IndexedSeq(G__85550__a,0,null);
} 
return G__85549__delegate.call(this,args);};
G__85549.cljs$lang$maxFixedArity = 0;
G__85549.cljs$lang$applyTo = (function (arglist__85551){
var args = cljs.core.seq(arglist__85551);
return G__85549__delegate(args);
});
G__85549.cljs$core$IFn$_invoke$arity$variadic = G__85549__delegate;
return G__85549;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__85552__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__85552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85553__i = 0, G__85553__a = new Array(arguments.length -  0);
while (G__85553__i < G__85553__a.length) {G__85553__a[G__85553__i] = arguments[G__85553__i + 0]; ++G__85553__i;}
  args = new cljs.core.IndexedSeq(G__85553__a,0,null);
} 
return G__85552__delegate.call(this,args);};
G__85552.cljs$lang$maxFixedArity = 0;
G__85552.cljs$lang$applyTo = (function (arglist__85554){
var args = cljs.core.seq(arglist__85554);
return G__85552__delegate(args);
});
G__85552.cljs$core$IFn$_invoke$arity$variadic = G__85552__delegate;
return G__85552;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
