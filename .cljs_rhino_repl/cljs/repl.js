// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__65155){
var map__65156 = p__65155;
var map__65156__$1 = ((((!((map__65156 == null)))?((((map__65156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65156):map__65156);
var m = map__65156__$1;
var n = cljs.core.get.call(null,map__65156__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__65156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65158_65180 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65159_65181 = null;
var count__65160_65182 = (0);
var i__65161_65183 = (0);
while(true){
if((i__65161_65183 < count__65160_65182)){
var f_65184 = cljs.core._nth.call(null,chunk__65159_65181,i__65161_65183);
cljs.core.println.call(null,"  ",f_65184);

var G__65185 = seq__65158_65180;
var G__65186 = chunk__65159_65181;
var G__65187 = count__65160_65182;
var G__65188 = (i__65161_65183 + (1));
seq__65158_65180 = G__65185;
chunk__65159_65181 = G__65186;
count__65160_65182 = G__65187;
i__65161_65183 = G__65188;
continue;
} else {
var temp__5457__auto___65189 = cljs.core.seq.call(null,seq__65158_65180);
if(temp__5457__auto___65189){
var seq__65158_65190__$1 = temp__5457__auto___65189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65158_65190__$1)){
var c__62659__auto___65191 = cljs.core.chunk_first.call(null,seq__65158_65190__$1);
var G__65192 = cljs.core.chunk_rest.call(null,seq__65158_65190__$1);
var G__65193 = c__62659__auto___65191;
var G__65194 = cljs.core.count.call(null,c__62659__auto___65191);
var G__65195 = (0);
seq__65158_65180 = G__65192;
chunk__65159_65181 = G__65193;
count__65160_65182 = G__65194;
i__65161_65183 = G__65195;
continue;
} else {
var f_65196 = cljs.core.first.call(null,seq__65158_65190__$1);
cljs.core.println.call(null,"  ",f_65196);

var G__65197 = cljs.core.next.call(null,seq__65158_65190__$1);
var G__65198 = null;
var G__65199 = (0);
var G__65200 = (0);
seq__65158_65180 = G__65197;
chunk__65159_65181 = G__65198;
count__65160_65182 = G__65199;
i__65161_65183 = G__65200;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_65201 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__61343__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__61343__auto__)){
return or__61343__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_65201);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_65201)))?cljs.core.second.call(null,arglists_65201):arglists_65201));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65162_65202 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65163_65203 = null;
var count__65164_65204 = (0);
var i__65165_65205 = (0);
while(true){
if((i__65165_65205 < count__65164_65204)){
var vec__65166_65206 = cljs.core._nth.call(null,chunk__65163_65203,i__65165_65205);
var name_65207 = cljs.core.nth.call(null,vec__65166_65206,(0),null);
var map__65169_65208 = cljs.core.nth.call(null,vec__65166_65206,(1),null);
var map__65169_65209__$1 = ((((!((map__65169_65208 == null)))?((((map__65169_65208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65169_65208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65169_65208):map__65169_65208);
var doc_65210 = cljs.core.get.call(null,map__65169_65209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_65211 = cljs.core.get.call(null,map__65169_65209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_65207);

cljs.core.println.call(null," ",arglists_65211);

if(cljs.core.truth_(doc_65210)){
cljs.core.println.call(null," ",doc_65210);
} else {
}

var G__65212 = seq__65162_65202;
var G__65213 = chunk__65163_65203;
var G__65214 = count__65164_65204;
var G__65215 = (i__65165_65205 + (1));
seq__65162_65202 = G__65212;
chunk__65163_65203 = G__65213;
count__65164_65204 = G__65214;
i__65165_65205 = G__65215;
continue;
} else {
var temp__5457__auto___65216 = cljs.core.seq.call(null,seq__65162_65202);
if(temp__5457__auto___65216){
var seq__65162_65217__$1 = temp__5457__auto___65216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65162_65217__$1)){
var c__62659__auto___65218 = cljs.core.chunk_first.call(null,seq__65162_65217__$1);
var G__65219 = cljs.core.chunk_rest.call(null,seq__65162_65217__$1);
var G__65220 = c__62659__auto___65218;
var G__65221 = cljs.core.count.call(null,c__62659__auto___65218);
var G__65222 = (0);
seq__65162_65202 = G__65219;
chunk__65163_65203 = G__65220;
count__65164_65204 = G__65221;
i__65165_65205 = G__65222;
continue;
} else {
var vec__65171_65223 = cljs.core.first.call(null,seq__65162_65217__$1);
var name_65224 = cljs.core.nth.call(null,vec__65171_65223,(0),null);
var map__65174_65225 = cljs.core.nth.call(null,vec__65171_65223,(1),null);
var map__65174_65226__$1 = ((((!((map__65174_65225 == null)))?((((map__65174_65225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65174_65225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65174_65225):map__65174_65225);
var doc_65227 = cljs.core.get.call(null,map__65174_65226__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_65228 = cljs.core.get.call(null,map__65174_65226__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_65224);

cljs.core.println.call(null," ",arglists_65228);

if(cljs.core.truth_(doc_65227)){
cljs.core.println.call(null," ",doc_65227);
} else {
}

var G__65229 = cljs.core.next.call(null,seq__65162_65217__$1);
var G__65230 = null;
var G__65231 = (0);
var G__65232 = (0);
seq__65162_65202 = G__65229;
chunk__65163_65203 = G__65230;
count__65164_65204 = G__65231;
i__65165_65205 = G__65232;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__65176 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__65177 = null;
var count__65178 = (0);
var i__65179 = (0);
while(true){
if((i__65179 < count__65178)){
var role = cljs.core._nth.call(null,chunk__65177,i__65179);
var temp__5457__auto___65233__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___65233__$1)){
var spec_65234 = temp__5457__auto___65233__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_65234));
} else {
}

var G__65235 = seq__65176;
var G__65236 = chunk__65177;
var G__65237 = count__65178;
var G__65238 = (i__65179 + (1));
seq__65176 = G__65235;
chunk__65177 = G__65236;
count__65178 = G__65237;
i__65179 = G__65238;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__65176);
if(temp__5457__auto____$1){
var seq__65176__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65176__$1)){
var c__62659__auto__ = cljs.core.chunk_first.call(null,seq__65176__$1);
var G__65239 = cljs.core.chunk_rest.call(null,seq__65176__$1);
var G__65240 = c__62659__auto__;
var G__65241 = cljs.core.count.call(null,c__62659__auto__);
var G__65242 = (0);
seq__65176 = G__65239;
chunk__65177 = G__65240;
count__65178 = G__65241;
i__65179 = G__65242;
continue;
} else {
var role = cljs.core.first.call(null,seq__65176__$1);
var temp__5457__auto___65243__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___65243__$2)){
var spec_65244 = temp__5457__auto___65243__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_65244));
} else {
}

var G__65245 = cljs.core.next.call(null,seq__65176__$1);
var G__65246 = null;
var G__65247 = (0);
var G__65248 = (0);
seq__65176 = G__65245;
chunk__65177 = G__65246;
count__65178 = G__65247;
i__65179 = G__65248;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
