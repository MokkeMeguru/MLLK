// Compiled by ClojureScript 1.9.946 {}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__87859 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.call(null,vec__87859,(0),null);
var title = cljs.core.nth.call(null,vec__87859,(1),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link__$1,cljs.core.seq.call(null,"'"),(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str," title=",clojure.string.join.call(null,cljs.core.rest.call(null,title)),">")):cljs.core.seq.call(null,">")),text,cljs.core.seq.call(null,"</a>"),state);
});
markdown.links.img = (function markdown$links$img(var_args){
var args__83016__auto__ = [];
var len__83009__auto___87870 = arguments.length;
var i__83010__auto___87871 = (0);
while(true){
if((i__83010__auto___87871 < len__83009__auto___87870)){
args__83016__auto__.push((arguments[i__83010__auto___87871]));

var G__87872 = (i__83010__auto___87871 + (1));
i__83010__auto___87871 = G__87872;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((3) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__83017__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__87866){
var vec__87867 = p__87866;
var title = cljs.core.nth.call(null,vec__87867,(0),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq87862){
var G__87863 = cljs.core.first.call(null,seq87862);
var seq87862__$1 = cljs.core.next.call(null,seq87862);
var G__87864 = cljs.core.first.call(null,seq87862__$1);
var seq87862__$2 = cljs.core.next.call(null,seq87862__$1);
var G__87865 = cljs.core.first.call(null,seq87862__$2);
var seq87862__$3 = cljs.core.next.call(null,seq87862__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__87863,G__87864,G__87865,seq87862__$3);
});

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__87873 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__87873,(0),null);
var xy = cljs.core.nth.call(null,vec__87873,(1),null);
var vec__87876 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__87876,(0),null);
var zy = cljs.core.nth.call(null,vec__87876,(1),null);
var vec__87879 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__87879,(0),null);
var title = cljs.core.nth.call(null,vec__87879,(1),null);
var vec__87882 = markdown.links.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__87882,(0),null);
var new_state = cljs.core.nth.call(null,vec__87882,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__87886_SHARP_,p2__87885_SHARP_){
return cljs.core.apply.call(null,p2__87885_SHARP_,p1__87886_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__87887){
var map__87888 = p__87887;
var map__87888__$1 = ((((!((map__87888 == null)))?((((map__87888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87888):map__87888);
var state = map__87888__$1;
var code = cljs.core.get.call(null,map__87888__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__87888__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__80935__auto__ = code;
if(cljs.core.truth_(or__80935__auto__)){
return or__80935__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__87890 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__87890,(0),null);
var xs = cljs.core.nth.call(null,vec__87890,(1),null);
var vec__87893 = markdown.links.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__87893,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__87893,(1),null);
var vec__87896 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__87896,(0),null);
var ys = cljs.core.nth.call(null,vec__87896,(1),null);
var vec__87899 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__87899,(0),null);
var zs = cljs.core.nth.call(null,vec__87899,(1),null);
var vec__87902 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__87902,(0),null);
var tail = cljs.core.nth.call(null,vec__87902,(1),null);
if(((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1)))){
var G__87914 = cljs.core.concat.call(null,out,head,markdown.links.process_link_title.call(null,title,state),dud,link__$1);
var G__87915 = tail;
var G__87916 = loop_state__$1;
out = G__87914;
tokens = G__87915;
loop_state = G__87916;
continue;
} else {
if((cljs.core.not.call(null,img_QMARK_)) && (cljs.core.not_EQ_.call(null,cljs.core.last.call(null,head),"!"))){
var vec__87905 = markdown.links.href.call(null,cljs.core.rest.call(null,markdown.links.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__87905,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__87905,(1),null);
var G__87917 = cljs.core.concat.call(null,out,head,link_text);
var G__87918 = cljs.core.rest.call(null,tail);
var G__87919 = new_loop_state;
out = G__87917;
tokens = G__87918;
loop_state = G__87919;
continue;
} else {
if(cljs.core.truth_((function (){var and__80906__auto__ = img_QMARK_;
if(cljs.core.truth_(and__80906__auto__)){
return cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!");
} else {
return and__80906__auto__;
}
})())){
var alt = cljs.core.rest.call(null,title);
var vec__87908 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__87908,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__87908,(1),null);
var title__$2 = markdown.links.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__87911 = markdown.links.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__87911,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__87911,(1),null);
var G__87920 = cljs.core.concat.call(null,out,cljs.core.butlast.call(null,head),img_text);
var G__87921 = cljs.core.rest.call(null,tail);
var G__87922 = new_loop_state;
out = G__87920;
tokens = G__87921;
loop_state = G__87922;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.concat.call(null,out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link.call(null,false);
markdown.links.image = markdown.links.make_link.call(null,true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__5457__auto__ = markdown.links.reference.call(null,trimmed);
if(cljs.core.truth_(temp__5457__auto__)){
var link = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__87923 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__87923,(0),null);
var id = cljs.core.nth.call(null,vec__87923,(1),null);
var vec__87926 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__87926,(0),null);
var alt = cljs.core.nth.call(null,vec__87926,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(alt)?[" title='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),"'"].join(''):null)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,title,(1))),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__87929,link){
var vec__87930 = p__87929;
var i__$1 = cljs.core.nth.call(null,vec__87930,(0),null);
var encoded = cljs.core.nth.call(null,vec__87930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.call(null,encoded,markdown.common.gen_token.call(null,i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__87933){
var vec__87934 = p__87933;
var k = cljs.core.nth.call(null,vec__87934,(0),null);
var v = cljs.core.nth.call(null,vec__87934,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link.call(null,references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq.call(null,/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links.call(null,links,cljs.core.fnil.call(null,cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,((function (links,encoded_links){
return (function (s,p__87937){
var vec__87938 = p__87937;
var id = cljs.core.nth.call(null,vec__87938,(0),null);
var link = cljs.core.nth.call(null,vec__87938,(1),null);
return clojure.string.replace.call(null,s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links.call(null,references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__87941){
var map__87942 = p__87941;
var map__87942__$1 = ((((!((map__87942 == null)))?((((map__87942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87942):map__87942);
var state = map__87942__$1;
var code = cljs.core.get.call(null,map__87942__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__87942__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__87942__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__80935__auto__ = (references == null);
if(or__80935__auto__){
return or__80935__auto__;
} else {
var or__80935__auto____$1 = code;
if(cljs.core.truth_(or__80935__auto____$1)){
return or__80935__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links.call(null,references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace.call(null,text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__5457__auto__ = markdown.links.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__5457__auto__)){
var link = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__87944){
while(true){
var map__87945 = p__87944;
var map__87945__$1 = ((((!((map__87945 == null)))?((((map__87945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87945):map__87945);
var state = map__87945__$1;
var footnotes = cljs.core.get.call(null,map__87945__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__87947 = next_text;
var G__87948 = next_state;
text = G__87947;
p__87944 = G__87948;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__87949){
var map__87950 = p__87949;
var map__87950__$1 = ((((!((map__87950 == null)))?((((map__87950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87950):map__87950);
var state = map__87950__$1;
var code = cljs.core.get.call(null,map__87950__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__87950__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__87950__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__80935__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__80935__auto__){
return or__80935__auto__;
} else {
var or__80935__auto____$1 = code;
if(cljs.core.truth_(or__80935__auto____$1)){
return or__80935__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__87952 = markdown.links.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__87952,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__87952,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(title)?["\" title=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,title)),""].join(''):"\""))].join('');
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_text)," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__87955){
var map__87956 = p__87955;
var map__87956__$1 = ((((!((map__87956 == null)))?((((map__87956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87956):map__87956);
var state = map__87956__$1;
var references = cljs.core.get.call(null,map__87956__$1,new cljs.core.Keyword(null,"references","references",882562509));
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_.call(null,references))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.call(null,cljs.core.re_seq.call(null,matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq.call(null,ms)){
var vec__87958 = cljs.core.first.call(null,ms);
var m = cljs.core.nth.call(null,vec__87958,(0),null);
var alt = cljs.core.nth.call(null,vec__87958,(1),null);
var ref = cljs.core.nth.call(null,vec__87958,(2),null);
var refval = cljs.core.get.call(null,references,ref);
var im = markdown.links.make_image_reference.call(null,cljs.core.first.call(null,refval),alt,cljs.core.second.call(null,refval));
var G__87961 = cljs.core.rest.call(null,ms);
var G__87962 = clojure.string.replace.call(null,new_text,m,im);
ms = G__87961;
new_text = G__87962;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=links.js.map
