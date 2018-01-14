// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__87602){
var map__87603 = p__87602;
var map__87603__$1 = ((((!((map__87603 == null)))?((((map__87603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87603):map__87603);
var replacement_transformers = cljs.core.get.call(null,map__87603__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__87603__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__87603__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__87603,map__87603__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_87605 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__87606 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_87605,map__87603,map__87603__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__87609,transformer){
var vec__87610 = p__87609;
var text = cljs.core.nth.call(null,vec__87610,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__87610,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_87605,map__87603,map__87603__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__80935__auto__ = replacement_transformers;
if(cljs.core.truth_(or__80935__auto__)){
return or__80935__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__87606,(0),null);
var new_state = cljs.core.nth.call(null,vec__87606,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_87605;
}});
;})(map__87603,map__87603__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__83016__auto__ = [];
var len__83009__auto___87615 = arguments.length;
var i__83010__auto___87616 = (0);
while(true){
if((i__83010__auto___87616 < len__83009__auto___87615)){
args__83016__auto__.push((arguments[i__83010__auto___87616]));

var G__87617 = (i__83010__auto___87616 + (1));
i__83010__auto___87616 = G__87617;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq87613){
var G__87614 = cljs.core.first.call(null,seq87613);
var seq87613__$1 = cljs.core.next.call(null,seq87613);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__87614,seq87613__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__87618_87622 = cljs.core.seq.call(null,lines);
var chunk__87619_87623 = null;
var count__87620_87624 = (0);
var i__87621_87625 = (0);
while(true){
if((i__87621_87625 < count__87620_87624)){
var line_87626 = cljs.core._nth.call(null,chunk__87619_87623,i__87621_87625);
markdown.links.parse_reference_link.call(null,line_87626,references);

var G__87627 = seq__87618_87622;
var G__87628 = chunk__87619_87623;
var G__87629 = count__87620_87624;
var G__87630 = (i__87621_87625 + (1));
seq__87618_87622 = G__87627;
chunk__87619_87623 = G__87628;
count__87620_87624 = G__87629;
i__87621_87625 = G__87630;
continue;
} else {
var temp__5457__auto___87631 = cljs.core.seq.call(null,seq__87618_87622);
if(temp__5457__auto___87631){
var seq__87618_87632__$1 = temp__5457__auto___87631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87618_87632__$1)){
var c__82661__auto___87633 = cljs.core.chunk_first.call(null,seq__87618_87632__$1);
var G__87634 = cljs.core.chunk_rest.call(null,seq__87618_87632__$1);
var G__87635 = c__82661__auto___87633;
var G__87636 = cljs.core.count.call(null,c__82661__auto___87633);
var G__87637 = (0);
seq__87618_87622 = G__87634;
chunk__87619_87623 = G__87635;
count__87620_87624 = G__87636;
i__87621_87625 = G__87637;
continue;
} else {
var line_87638 = cljs.core.first.call(null,seq__87618_87632__$1);
markdown.links.parse_reference_link.call(null,line_87638,references);

var G__87639 = cljs.core.next.call(null,seq__87618_87632__$1);
var G__87640 = null;
var G__87641 = (0);
var G__87642 = (0);
seq__87618_87622 = G__87639;
chunk__87619_87623 = G__87640;
count__87620_87624 = G__87641;
i__87621_87625 = G__87642;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__87643_87647 = cljs.core.seq.call(null,lines);
var chunk__87644_87648 = null;
var count__87645_87649 = (0);
var i__87646_87650 = (0);
while(true){
if((i__87646_87650 < count__87645_87649)){
var line_87651 = cljs.core._nth.call(null,chunk__87644_87648,i__87646_87650);
markdown.links.parse_footnote_link.call(null,line_87651,footnotes);

var G__87652 = seq__87643_87647;
var G__87653 = chunk__87644_87648;
var G__87654 = count__87645_87649;
var G__87655 = (i__87646_87650 + (1));
seq__87643_87647 = G__87652;
chunk__87644_87648 = G__87653;
count__87645_87649 = G__87654;
i__87646_87650 = G__87655;
continue;
} else {
var temp__5457__auto___87656 = cljs.core.seq.call(null,seq__87643_87647);
if(temp__5457__auto___87656){
var seq__87643_87657__$1 = temp__5457__auto___87656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87643_87657__$1)){
var c__82661__auto___87658 = cljs.core.chunk_first.call(null,seq__87643_87657__$1);
var G__87659 = cljs.core.chunk_rest.call(null,seq__87643_87657__$1);
var G__87660 = c__82661__auto___87658;
var G__87661 = cljs.core.count.call(null,c__82661__auto___87658);
var G__87662 = (0);
seq__87643_87647 = G__87659;
chunk__87644_87648 = G__87660;
count__87645_87649 = G__87661;
i__87646_87650 = G__87662;
continue;
} else {
var line_87663 = cljs.core.first.call(null,seq__87643_87657__$1);
markdown.links.parse_footnote_link.call(null,line_87663,footnotes);

var G__87664 = cljs.core.next.call(null,seq__87643_87657__$1);
var G__87665 = null;
var G__87666 = (0);
var G__87667 = (0);
seq__87643_87647 = G__87664;
chunk__87644_87648 = G__87665;
count__87645_87649 = G__87666;
i__87646_87650 = G__87667;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__87669 = cljs.core.split_with.call(null,(function (p1__87668_SHARP_){
return cljs.core.not_empty.call(null,p1__87668_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__87669,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__87669,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_87672 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_87673 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_87672,_STAR_formatter_STAR_87673){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_87672,_STAR_formatter_STAR_87673))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__87674 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__87674,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__87674,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__87680_87687 = lines__$1;
var vec__87681_87688 = G__87680_87687;
var seq__87682_87689 = cljs.core.seq.call(null,vec__87681_87688);
var first__87683_87690 = cljs.core.first.call(null,seq__87682_87689);
var seq__87682_87691__$1 = cljs.core.next.call(null,seq__87682_87689);
var line_87692 = first__87683_87690;
var more_87693 = seq__87682_87691__$1;
var state_87694 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__87680_87695__$1 = G__87680_87687;
var state_87696__$1 = state_87694;
while(true){
var vec__87684_87697 = G__87680_87695__$1;
var seq__87685_87698 = cljs.core.seq.call(null,vec__87684_87697);
var first__87686_87699 = cljs.core.first.call(null,seq__87685_87698);
var seq__87685_87700__$1 = cljs.core.next.call(null,seq__87685_87698);
var line_87701__$1 = first__87686_87699;
var more_87702__$1 = seq__87685_87700__$1;
var state_87703__$2 = state_87696__$1;
var line_87704__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_87703__$2))?"":line_87701__$1);
var state_87705__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_87703__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_87703__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_87703__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_87703__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_87703__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_87702__$1))){
var G__87706 = more_87702__$1;
var G__87707 = cljs.core.assoc.call(null,transformer.call(null,html,line_87704__$2,cljs.core.first.call(null,more_87702__$1),cljs.core.dissoc.call(null,state_87705__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_87704__$2));
G__87680_87695__$1 = G__87706;
state_87696__$1 = G__87707;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_87705__$3))),line_87704__$2,"",cljs.core.assoc.call(null,state_87705__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_87673;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_87672;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__83016__auto__ = [];
var len__83009__auto___87710 = arguments.length;
var i__83010__auto___87711 = (0);
while(true){
if((i__83010__auto___87711 < len__83009__auto___87710)){
args__83016__auto__.push((arguments[i__83010__auto___87711]));

var G__87712 = (i__83010__auto___87711 + (1));
i__83010__auto___87711 = G__87712;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq87708){
var G__87709 = cljs.core.first.call(null,seq87708);
var seq87708__$1 = cljs.core.next.call(null,seq87708);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__87709,seq87708__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__83016__auto__ = [];
var len__83009__auto___87715 = arguments.length;
var i__83010__auto___87716 = (0);
while(true){
if((i__83010__auto___87716 < len__83009__auto___87715)){
args__83016__auto__.push((arguments[i__83010__auto___87716]));

var G__87717 = (i__83010__auto___87716 + (1));
i__83010__auto___87716 = G__87717;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq87713){
var G__87714 = cljs.core.first.call(null,seq87713);
var seq87713__$1 = cljs.core.next.call(null,seq87713);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__87714,seq87713__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__83016__auto__ = [];
var len__83009__auto___87719 = arguments.length;
var i__83010__auto___87720 = (0);
while(true){
if((i__83010__auto___87720 < len__83009__auto___87719)){
args__83016__auto__.push((arguments[i__83010__auto___87720]));

var G__87721 = (i__83010__auto___87720 + (1));
i__83010__auto___87720 = G__87721;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((0) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__83017__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq87718){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87718));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__83016__auto__ = [];
var len__83009__auto___87723 = arguments.length;
var i__83010__auto___87724 = (0);
while(true){
if((i__83010__auto___87724 < len__83009__auto___87723)){
args__83016__auto__.push((arguments[i__83010__auto___87724]));

var G__87725 = (i__83010__auto___87724 + (1));
i__83010__auto___87724 = G__87725;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((0) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__83017__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq87722){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87722));
});


//# sourceMappingURL=core.js.map
