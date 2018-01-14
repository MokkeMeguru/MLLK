// Compiled by ClojureScript 1.9.946 {}
goog.provide('bouncer.validators');
goog.require('cljs.core');
goog.require('cljs_time.format');
var ret__80672__auto___87169 = (function (){
/**
 * Defines a new validating function using args & body semantics as provided by "defn".
 *   docstring and opts-map are optional
 * 
 *   opts-map is a map of key-value pairs and may be one of:
 * 
 *   - `:default-message-format` used when the client of this validator doesn't
 *   provide a message (consider using custom message functions)
 * 
 *   - `:optional` whether the validation should be run only if the given key has
 *   a non-nil value in the map. Defaults to true.
 * 
 *   or any other key-value pair which will be available in the validation result
 *   under the `:metadata` key.
 * 
 *   The function will be called with the value being validated as its first argument.
 * 
 *   Any extra arguments will be passed along to the function in the order they were used in the
 *   "validate" call.
 * 
 *   e.g.:
 * 
 * 
 *  (defvalidator member
 *    [value coll]
 *    (some #{value} coll))
 * 
 *  (validate {:age 10}
 *    :age [[member (range 5)]])
 * 
 * 
 *   This means the validator `member` will be called with the arguments `10` and `(0 1 2 3 4)`,
 *   in that order.
 */
bouncer.validators.defvalidator = (function bouncer$validators$defvalidator(var_args){
var args__80633__auto__ = [];
var len__80626__auto___87170 = arguments.length;
var i__80627__auto___87171 = (0);
while(true){
if((i__80627__auto___87171 < len__80626__auto___87170)){
args__80633__auto__.push((arguments[i__80627__auto___87171]));

var G__87172 = (i__80627__auto___87171 + (1));
i__80627__auto___87171 = G__87172;
continue;
} else {
}
break;
}

var argseq__80634__auto__ = ((((3) < args__80633__auto__.length))?(new cljs.core.IndexedSeq(args__80633__auto__.slice((3)),(0),null)):null);
return bouncer.validators.defvalidator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__80634__auto__);
});

bouncer.validators.defvalidator.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
var vec__87160 = ((typeof cljs.core.first.call(null,options) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,options),cljs.core.next.call(null,options)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options], null));
var docstring = cljs.core.nth.call(null,vec__87160,(0),null);
var options__$1 = cljs.core.nth.call(null,vec__87160,(1),null);
var vec__87163 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,options__$1),cljs.core.next.call(null,options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options__$1], null));
var fn_meta = cljs.core.nth.call(null,vec__87163,(0),null);
var vec__87166 = cljs.core.nth.call(null,vec__87163,(1),null);
var seq__87167 = cljs.core.seq.call(null,vec__87166);
var first__87168 = cljs.core.first.call(null,seq__87167);
var seq__87167__$1 = cljs.core.next.call(null,seq__87167);
var args = first__87168;
var body = seq__87167__$1;
var fn_meta__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),fn_meta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
var arglists = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__80089__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__80089__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})(),(function (){var x__80089__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__80089__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__80089__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})(),(function (){var x__80089__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__80089__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})(),(function (){var x__80089__auto__ = fn_meta__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__80089__auto__);
})())));
});

bouncer.validators.defvalidator.cljs$lang$maxFixedArity = (3);

bouncer.validators.defvalidator.cljs$lang$applyTo = (function (seq87156){
var G__87157 = cljs.core.first.call(null,seq87156);
var seq87156__$1 = cljs.core.next.call(null,seq87156);
var G__87158 = cljs.core.first.call(null,seq87156__$1);
var seq87156__$2 = cljs.core.next.call(null,seq87156__$1);
var G__87159 = cljs.core.first.call(null,seq87156__$2);
var seq87156__$3 = cljs.core.next.call(null,seq87156__$2);
return bouncer.validators.defvalidator.cljs$core$IFn$_invoke$arity$variadic(G__87157,G__87158,G__87159,seq87156__$3);
});

return null;
})()
;
bouncer.validators.defvalidator.cljs$lang$macro = true;

bouncer.validators.required = cljs.core.with_meta.call(null,(function bouncer$validators$required(value){
if(typeof value === 'string'){
return !(cljs.core.empty_QMARK_.call(null,value));
} else {
return !((value == null));
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),false,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be present",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","required","bouncer.validators/required",-465826887)], null));
bouncer.validators.number = cljs.core.with_meta.call(null,(function bouncer$validators$number(maybe_a_number){
return typeof maybe_a_number === 'number';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a number",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","number","bouncer.validators/number",-1457674719)], null));
bouncer.validators.integer = cljs.core.with_meta.call(null,(function bouncer$validators$integer(maybe_an_int){
return cljs.core.integer_QMARK_.call(null,maybe_an_int);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be an integer",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","integer","bouncer.validators/integer",-412024393)], null));
bouncer.validators.boolean$ = cljs.core.with_meta.call(null,(function bouncer$validators$boolean(maybe_a_boolean){
return (cljs.core._EQ_.call(null,false,maybe_a_boolean)) || (cljs.core._EQ_.call(null,true,maybe_a_boolean));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a boolean",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","boolean","bouncer.validators/boolean",-14906243)], null));
bouncer.validators.string = cljs.core.with_meta.call(null,(function bouncer$validators$string(maybe_a_string){
return typeof maybe_a_string === 'string';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a string",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","string","bouncer.validators/string",-17988663)], null));
bouncer.validators.in_range = cljs.core.with_meta.call(null,(function bouncer$validators$in_range(value,p__87173){
var vec__87174 = p__87173;
var from = cljs.core.nth.call(null,vec__87174,(0),null);
var to = cljs.core.nth.call(null,vec__87174,(1),null);
return ((from <= value)) && ((value <= to));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be in a specified range",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","in-range","bouncer.validators/in-range",-1520951092)], null));
bouncer.validators.positive = cljs.core.with_meta.call(null,(function bouncer$validators$positive(number){
return (number > (0));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a positive number",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","positive","bouncer.validators/positive",-155537451)], null));
bouncer.validators.member = cljs.core.with_meta.call(null,(function bouncer$validators$member(value,coll){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([value]),coll);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be one of the values in the list",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","member","bouncer.validators/member",-1164005429)], null));
bouncer.validators.custom = cljs.core.with_meta.call(null,(function bouncer$validators$custom(value,pred){
cljs.core.println.call(null,"Warning: bouncer.validators/custom is deprecated and will be removed. Use plain functions instead.");

return pred.call(null,value);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","custom","bouncer.validators/custom",2142880173)], null));
bouncer.validators.every = cljs.core.with_meta.call(null,(function bouncer$validators$every(coll,pred){
return cljs.core.every_QMARK_.call(null,pred,coll);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"All items in %s must satisfy the predicate",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","every","bouncer.validators/every",-281179041)], null));
bouncer.validators.matches = cljs.core.with_meta.call(null,(function bouncer$validators$matches(value,re){
return cljs.core.complement.call(null,cljs.core.empty_QMARK_).call(null,cljs.core.re_seq.call(null,re,value));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must satisfy the given pattern",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","matches","bouncer.validators/matches",-1184599255)], null));
bouncer.validators.email = cljs.core.with_meta.call(null,(function bouncer$validators$email(value){
var and__77940__auto__ = bouncer.validators.required.call(null,value);
if(cljs.core.truth_(and__77940__auto__)){
return bouncer.validators.matches.call(null,value,/^[^@]+@[^@\\.]+[\\.].+/);
} else {
return and__77940__auto__;
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid email address",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","email","bouncer.validators/email",-1058548467)], null));
bouncer.validators.datetime = cljs.core.with_meta.call(null,(function() { 
var bouncer$validators$datetime__delegate = function (value,p__87177){
var vec__87178 = p__87177;
var seq__87179 = cljs.core.seq.call(null,vec__87178);
var first__87180 = cljs.core.first.call(null,seq__87179);
var seq__87179__$1 = cljs.core.next.call(null,seq__87179);
var opt = first__87180;
var _ = seq__87179__$1;
var formatter = ((typeof opt === 'string')?cljs_time.format.formatter.call(null,opt):opt);
try{if(cljs.core.truth_(formatter)){
return cljs_time.format.parse.call(null,formatter,value);
} else {
return cljs_time.format.parse.call(null,value);
}
}catch (e87181){if((e87181 instanceof Error)){
var e = e87181;
return false;
} else {
throw e87181;

}
}};
var bouncer$validators$datetime = function (value,var_args){
var p__87177 = null;
if (arguments.length > 1) {
var G__87182__i = 0, G__87182__a = new Array(arguments.length -  1);
while (G__87182__i < G__87182__a.length) {G__87182__a[G__87182__i] = arguments[G__87182__i + 1]; ++G__87182__i;}
  p__87177 = new cljs.core.IndexedSeq(G__87182__a,0,null);
} 
return bouncer$validators$datetime__delegate.call(this,value,p__87177);};
bouncer$validators$datetime.cljs$lang$maxFixedArity = 1;
bouncer$validators$datetime.cljs$lang$applyTo = (function (arglist__87183){
var value = cljs.core.first(arglist__87183);
var p__87177 = cljs.core.rest(arglist__87183);
return bouncer$validators$datetime__delegate(value,p__87177);
});
bouncer$validators$datetime.cljs$core$IFn$_invoke$arity$variadic = bouncer$validators$datetime__delegate;
return bouncer$validators$datetime;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid date",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","datetime","bouncer.validators/datetime",-2030523505)], null));
bouncer.validators.max_count = cljs.core.with_meta.call(null,(function bouncer$validators$max_count(value,maximum){
return (cljs.core.count.call(null,cljs.core.seq.call(null,value)) <= maximum);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s is longer than the maximum",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","max-count","bouncer.validators/max-count",-835039936)], null));
bouncer.validators.min_count = cljs.core.with_meta.call(null,(function bouncer$validators$min_count(value,minimum){
return (cljs.core.count.call(null,cljs.core.seq.call(null,value)) >= minimum);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s is less than the minimum",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","min-count","bouncer.validators/min-count",-359601934)], null));

//# sourceMappingURL=validators.js.map
