// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85409 = arguments.length;
var i__83010__auto___85410 = (0);
while(true){
if((i__83010__auto___85410 < len__83009__auto___85409)){
args__83016__auto__.push((arguments[i__83010__auto___85410]));

var G__85411 = (i__83010__auto___85410 + (1));
i__83010__auto___85410 = G__85411;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__85405){
var vec__85406 = p__85405;
var default$ = cljs.core.nth.call(null,vec__85406,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq85403){
var G__85404 = cljs.core.first.call(null,seq85403);
var seq85403__$1 = cljs.core.next.call(null,seq85403);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__85404,seq85403__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85418 = arguments.length;
var i__83010__auto___85419 = (0);
while(true){
if((i__83010__auto___85419 < len__83009__auto___85418)){
args__83016__auto__.push((arguments[i__83010__auto___85419]));

var G__85420 = (i__83010__auto___85419 + (1));
i__83010__auto___85419 = G__85420;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__85414){
var vec__85415 = p__85414;
var default$ = cljs.core.nth.call(null,vec__85415,(0),null);
var or__80935__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__80935__auto__)){
return or__80935__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq85412){
var G__85413 = cljs.core.first.call(null,seq85412);
var seq85412__$1 = cljs.core.next.call(null,seq85412);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__85413,seq85412__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85423 = arguments.length;
var i__83010__auto___85424 = (0);
while(true){
if((i__83010__auto___85424 < len__83009__auto___85423)){
args__83016__auto__.push((arguments[i__83010__auto___85424]));

var G__85425 = (i__83010__auto___85424 + (1));
i__83010__auto___85424 = G__85425;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq85421){
var G__85422 = cljs.core.first.call(null,seq85421);
var seq85421__$1 = cljs.core.next.call(null,seq85421);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__85422,seq85421__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85432 = arguments.length;
var i__83010__auto___85433 = (0);
while(true){
if((i__83010__auto___85433 < len__83009__auto___85432)){
args__83016__auto__.push((arguments[i__83010__auto___85433]));

var G__85434 = (i__83010__auto___85433 + (1));
i__83010__auto___85433 = G__85434;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__85428){
var vec__85429 = p__85428;
var default$ = cljs.core.nth.call(null,vec__85429,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq85426){
var G__85427 = cljs.core.first.call(null,seq85426);
var seq85426__$1 = cljs.core.next.call(null,seq85426);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__85427,seq85426__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85441 = arguments.length;
var i__83010__auto___85442 = (0);
while(true){
if((i__83010__auto___85442 < len__83009__auto___85441)){
args__83016__auto__.push((arguments[i__83010__auto___85442]));

var G__85443 = (i__83010__auto___85442 + (1));
i__83010__auto___85442 = G__85443;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__85437){
var vec__85438 = p__85437;
var default$ = cljs.core.nth.call(null,vec__85438,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq85435){
var G__85436 = cljs.core.first.call(null,seq85435);
var seq85435__$1 = cljs.core.next.call(null,seq85435);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__85436,seq85435__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85448 = arguments.length;
var i__83010__auto___85449 = (0);
while(true){
if((i__83010__auto___85449 < len__83009__auto___85448)){
args__83016__auto__.push((arguments[i__83010__auto___85449]));

var G__85450 = (i__83010__auto___85449 + (1));
i__83010__auto___85449 = G__85450;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((2) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__83017__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__85444_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__85444_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq85445){
var G__85446 = cljs.core.first.call(null,seq85445);
var seq85445__$1 = cljs.core.next.call(null,seq85445);
var G__85447 = cljs.core.first.call(null,seq85445__$1);
var seq85445__$2 = cljs.core.next.call(null,seq85445__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__85446,G__85447,seq85445__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85455 = arguments.length;
var i__83010__auto___85456 = (0);
while(true){
if((i__83010__auto___85456 < len__83009__auto___85455)){
args__83016__auto__.push((arguments[i__83010__auto___85456]));

var G__85457 = (i__83010__auto___85456 + (1));
i__83010__auto___85456 = G__85457;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((2) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__83017__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__85451_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__85451_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq85452){
var G__85453 = cljs.core.first.call(null,seq85452);
var seq85452__$1 = cljs.core.next.call(null,seq85452);
var G__85454 = cljs.core.first.call(null,seq85452__$1);
var seq85452__$2 = cljs.core.next.call(null,seq85452__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__85453,G__85454,seq85452__$2);
});


//# sourceMappingURL=session.js.map
