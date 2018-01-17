// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__88165){
var vec__88166 = p__88165;
var k = cljs.core.nth.call(null,vec__88166,(0),null);
var v = cljs.core.nth.call(null,vec__88166,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__88170 = arguments.length;
switch (G__88170) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__88173 = arguments.length;
switch (G__88173) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js.call(null,cljs_react_material_ui.core.transform_keys.call(null,sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name.call(null,sablono.util.camel_case.call(null,color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88176 = arguments.length;
var i__84375__auto___88177 = (0);
while(true){
if((i__84375__auto___88177 < len__84374__auto___88176)){
args__84381__auto__.push((arguments[i__84375__auto___88177]));

var G__88178 = (i__84375__auto___88177 + (1));
i__84375__auto___88177 = G__88178;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq88175){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88175));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88180 = arguments.length;
var i__84375__auto___88181 = (0);
while(true){
if((i__84375__auto___88181 < len__84374__auto___88180)){
args__84381__auto__.push((arguments[i__84375__auto___88181]));

var G__88182 = (i__84375__auto___88181 + (1));
i__84375__auto___88181 = G__88182;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq88179){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88179));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88184 = arguments.length;
var i__84375__auto___88185 = (0);
while(true){
if((i__84375__auto___88185 < len__84374__auto___88184)){
args__84381__auto__.push((arguments[i__84375__auto___88185]));

var G__88186 = (i__84375__auto___88185 + (1));
i__84375__auto___88185 = G__88186;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq88183){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88183));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88188 = arguments.length;
var i__84375__auto___88189 = (0);
while(true){
if((i__84375__auto___88189 < len__84374__auto___88188)){
args__84381__auto__.push((arguments[i__84375__auto___88189]));

var G__88190 = (i__84375__auto___88189 + (1));
i__84375__auto___88189 = G__88190;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq88187){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88187));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88192 = arguments.length;
var i__84375__auto___88193 = (0);
while(true){
if((i__84375__auto___88193 < len__84374__auto___88192)){
args__84381__auto__.push((arguments[i__84375__auto___88193]));

var G__88194 = (i__84375__auto___88193 + (1));
i__84375__auto___88193 = G__88194;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq88191){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88191));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88196 = arguments.length;
var i__84375__auto___88197 = (0);
while(true){
if((i__84375__auto___88197 < len__84374__auto___88196)){
args__84381__auto__.push((arguments[i__84375__auto___88197]));

var G__88198 = (i__84375__auto___88197 + (1));
i__84375__auto___88197 = G__88198;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq88195){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88195));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88200 = arguments.length;
var i__84375__auto___88201 = (0);
while(true){
if((i__84375__auto___88201 < len__84374__auto___88200)){
args__84381__auto__.push((arguments[i__84375__auto___88201]));

var G__88202 = (i__84375__auto___88201 + (1));
i__84375__auto___88201 = G__88202;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq88199){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88199));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88204 = arguments.length;
var i__84375__auto___88205 = (0);
while(true){
if((i__84375__auto___88205 < len__84374__auto___88204)){
args__84381__auto__.push((arguments[i__84375__auto___88205]));

var G__88206 = (i__84375__auto___88205 + (1));
i__84375__auto___88205 = G__88206;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq88203){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88203));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88208 = arguments.length;
var i__84375__auto___88209 = (0);
while(true){
if((i__84375__auto___88209 < len__84374__auto___88208)){
args__84381__auto__.push((arguments[i__84375__auto___88209]));

var G__88210 = (i__84375__auto___88209 + (1));
i__84375__auto___88209 = G__88210;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq88207){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88207));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88212 = arguments.length;
var i__84375__auto___88213 = (0);
while(true){
if((i__84375__auto___88213 < len__84374__auto___88212)){
args__84381__auto__.push((arguments[i__84375__auto___88213]));

var G__88214 = (i__84375__auto___88213 + (1));
i__84375__auto___88213 = G__88214;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq88211){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88211));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88216 = arguments.length;
var i__84375__auto___88217 = (0);
while(true){
if((i__84375__auto___88217 < len__84374__auto___88216)){
args__84381__auto__.push((arguments[i__84375__auto___88217]));

var G__88218 = (i__84375__auto___88217 + (1));
i__84375__auto___88217 = G__88218;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq88215){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88215));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88220 = arguments.length;
var i__84375__auto___88221 = (0);
while(true){
if((i__84375__auto___88221 < len__84374__auto___88220)){
args__84381__auto__.push((arguments[i__84375__auto___88221]));

var G__88222 = (i__84375__auto___88221 + (1));
i__84375__auto___88221 = G__88222;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq88219){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88219));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88224 = arguments.length;
var i__84375__auto___88225 = (0);
while(true){
if((i__84375__auto___88225 < len__84374__auto___88224)){
args__84381__auto__.push((arguments[i__84375__auto___88225]));

var G__88226 = (i__84375__auto___88225 + (1));
i__84375__auto___88225 = G__88226;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq88223){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88223));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88228 = arguments.length;
var i__84375__auto___88229 = (0);
while(true){
if((i__84375__auto___88229 < len__84374__auto___88228)){
args__84381__auto__.push((arguments[i__84375__auto___88229]));

var G__88230 = (i__84375__auto___88229 + (1));
i__84375__auto___88229 = G__88230;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq88227){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88227));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88232 = arguments.length;
var i__84375__auto___88233 = (0);
while(true){
if((i__84375__auto___88233 < len__84374__auto___88232)){
args__84381__auto__.push((arguments[i__84375__auto___88233]));

var G__88234 = (i__84375__auto___88233 + (1));
i__84375__auto___88233 = G__88234;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq88231){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88231));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88236 = arguments.length;
var i__84375__auto___88237 = (0);
while(true){
if((i__84375__auto___88237 < len__84374__auto___88236)){
args__84381__auto__.push((arguments[i__84375__auto___88237]));

var G__88238 = (i__84375__auto___88237 + (1));
i__84375__auto___88237 = G__88238;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq88235){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88235));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88240 = arguments.length;
var i__84375__auto___88241 = (0);
while(true){
if((i__84375__auto___88241 < len__84374__auto___88240)){
args__84381__auto__.push((arguments[i__84375__auto___88241]));

var G__88242 = (i__84375__auto___88241 + (1));
i__84375__auto___88241 = G__88242;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq88239){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88239));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88244 = arguments.length;
var i__84375__auto___88245 = (0);
while(true){
if((i__84375__auto___88245 < len__84374__auto___88244)){
args__84381__auto__.push((arguments[i__84375__auto___88245]));

var G__88246 = (i__84375__auto___88245 + (1));
i__84375__auto___88245 = G__88246;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq88243){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88243));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88248 = arguments.length;
var i__84375__auto___88249 = (0);
while(true){
if((i__84375__auto___88249 < len__84374__auto___88248)){
args__84381__auto__.push((arguments[i__84375__auto___88249]));

var G__88250 = (i__84375__auto___88249 + (1));
i__84375__auto___88249 = G__88250;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq88247){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88247));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88252 = arguments.length;
var i__84375__auto___88253 = (0);
while(true){
if((i__84375__auto___88253 < len__84374__auto___88252)){
args__84381__auto__.push((arguments[i__84375__auto___88253]));

var G__88254 = (i__84375__auto___88253 + (1));
i__84375__auto___88253 = G__88254;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq88251){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88251));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88256 = arguments.length;
var i__84375__auto___88257 = (0);
while(true){
if((i__84375__auto___88257 < len__84374__auto___88256)){
args__84381__auto__.push((arguments[i__84375__auto___88257]));

var G__88258 = (i__84375__auto___88257 + (1));
i__84375__auto___88257 = G__88258;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq88255){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88255));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88260 = arguments.length;
var i__84375__auto___88261 = (0);
while(true){
if((i__84375__auto___88261 < len__84374__auto___88260)){
args__84381__auto__.push((arguments[i__84375__auto___88261]));

var G__88262 = (i__84375__auto___88261 + (1));
i__84375__auto___88261 = G__88262;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq88259){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88259));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88264 = arguments.length;
var i__84375__auto___88265 = (0);
while(true){
if((i__84375__auto___88265 < len__84374__auto___88264)){
args__84381__auto__.push((arguments[i__84375__auto___88265]));

var G__88266 = (i__84375__auto___88265 + (1));
i__84375__auto___88265 = G__88266;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq88263){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88263));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88268 = arguments.length;
var i__84375__auto___88269 = (0);
while(true){
if((i__84375__auto___88269 < len__84374__auto___88268)){
args__84381__auto__.push((arguments[i__84375__auto___88269]));

var G__88270 = (i__84375__auto___88269 + (1));
i__84375__auto___88269 = G__88270;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq88267){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88267));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88272 = arguments.length;
var i__84375__auto___88273 = (0);
while(true){
if((i__84375__auto___88273 < len__84374__auto___88272)){
args__84381__auto__.push((arguments[i__84375__auto___88273]));

var G__88274 = (i__84375__auto___88273 + (1));
i__84375__auto___88273 = G__88274;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq88271){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88271));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88276 = arguments.length;
var i__84375__auto___88277 = (0);
while(true){
if((i__84375__auto___88277 < len__84374__auto___88276)){
args__84381__auto__.push((arguments[i__84375__auto___88277]));

var G__88278 = (i__84375__auto___88277 + (1));
i__84375__auto___88277 = G__88278;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq88275){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88275));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88280 = arguments.length;
var i__84375__auto___88281 = (0);
while(true){
if((i__84375__auto___88281 < len__84374__auto___88280)){
args__84381__auto__.push((arguments[i__84375__auto___88281]));

var G__88282 = (i__84375__auto___88281 + (1));
i__84375__auto___88281 = G__88282;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq88279){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88279));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88284 = arguments.length;
var i__84375__auto___88285 = (0);
while(true){
if((i__84375__auto___88285 < len__84374__auto___88284)){
args__84381__auto__.push((arguments[i__84375__auto___88285]));

var G__88286 = (i__84375__auto___88285 + (1));
i__84375__auto___88285 = G__88286;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq88283){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88283));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88288 = arguments.length;
var i__84375__auto___88289 = (0);
while(true){
if((i__84375__auto___88289 < len__84374__auto___88288)){
args__84381__auto__.push((arguments[i__84375__auto___88289]));

var G__88290 = (i__84375__auto___88289 + (1));
i__84375__auto___88289 = G__88290;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq88287){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88287));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88292 = arguments.length;
var i__84375__auto___88293 = (0);
while(true){
if((i__84375__auto___88293 < len__84374__auto___88292)){
args__84381__auto__.push((arguments[i__84375__auto___88293]));

var G__88294 = (i__84375__auto___88293 + (1));
i__84375__auto___88293 = G__88294;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq88291){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88291));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88296 = arguments.length;
var i__84375__auto___88297 = (0);
while(true){
if((i__84375__auto___88297 < len__84374__auto___88296)){
args__84381__auto__.push((arguments[i__84375__auto___88297]));

var G__88298 = (i__84375__auto___88297 + (1));
i__84375__auto___88297 = G__88298;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq88295){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88295));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88300 = arguments.length;
var i__84375__auto___88301 = (0);
while(true){
if((i__84375__auto___88301 < len__84374__auto___88300)){
args__84381__auto__.push((arguments[i__84375__auto___88301]));

var G__88302 = (i__84375__auto___88301 + (1));
i__84375__auto___88301 = G__88302;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq88299){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88299));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88304 = arguments.length;
var i__84375__auto___88305 = (0);
while(true){
if((i__84375__auto___88305 < len__84374__auto___88304)){
args__84381__auto__.push((arguments[i__84375__auto___88305]));

var G__88306 = (i__84375__auto___88305 + (1));
i__84375__auto___88305 = G__88306;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq88303){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88303));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88308 = arguments.length;
var i__84375__auto___88309 = (0);
while(true){
if((i__84375__auto___88309 < len__84374__auto___88308)){
args__84381__auto__.push((arguments[i__84375__auto___88309]));

var G__88310 = (i__84375__auto___88309 + (1));
i__84375__auto___88309 = G__88310;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq88307){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88307));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88312 = arguments.length;
var i__84375__auto___88313 = (0);
while(true){
if((i__84375__auto___88313 < len__84374__auto___88312)){
args__84381__auto__.push((arguments[i__84375__auto___88313]));

var G__88314 = (i__84375__auto___88313 + (1));
i__84375__auto___88313 = G__88314;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq88311){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88311));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88316 = arguments.length;
var i__84375__auto___88317 = (0);
while(true){
if((i__84375__auto___88317 < len__84374__auto___88316)){
args__84381__auto__.push((arguments[i__84375__auto___88317]));

var G__88318 = (i__84375__auto___88317 + (1));
i__84375__auto___88317 = G__88318;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq88315){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88315));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88320 = arguments.length;
var i__84375__auto___88321 = (0);
while(true){
if((i__84375__auto___88321 < len__84374__auto___88320)){
args__84381__auto__.push((arguments[i__84375__auto___88321]));

var G__88322 = (i__84375__auto___88321 + (1));
i__84375__auto___88321 = G__88322;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq88319){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88319));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88324 = arguments.length;
var i__84375__auto___88325 = (0);
while(true){
if((i__84375__auto___88325 < len__84374__auto___88324)){
args__84381__auto__.push((arguments[i__84375__auto___88325]));

var G__88326 = (i__84375__auto___88325 + (1));
i__84375__auto___88325 = G__88326;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq88323){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88323));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88328 = arguments.length;
var i__84375__auto___88329 = (0);
while(true){
if((i__84375__auto___88329 < len__84374__auto___88328)){
args__84381__auto__.push((arguments[i__84375__auto___88329]));

var G__88330 = (i__84375__auto___88329 + (1));
i__84375__auto___88329 = G__88330;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq88327){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88327));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88332 = arguments.length;
var i__84375__auto___88333 = (0);
while(true){
if((i__84375__auto___88333 < len__84374__auto___88332)){
args__84381__auto__.push((arguments[i__84375__auto___88333]));

var G__88334 = (i__84375__auto___88333 + (1));
i__84375__auto___88333 = G__88334;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq88331){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88331));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88336 = arguments.length;
var i__84375__auto___88337 = (0);
while(true){
if((i__84375__auto___88337 < len__84374__auto___88336)){
args__84381__auto__.push((arguments[i__84375__auto___88337]));

var G__88338 = (i__84375__auto___88337 + (1));
i__84375__auto___88337 = G__88338;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq88335){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88335));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88340 = arguments.length;
var i__84375__auto___88341 = (0);
while(true){
if((i__84375__auto___88341 < len__84374__auto___88340)){
args__84381__auto__.push((arguments[i__84375__auto___88341]));

var G__88342 = (i__84375__auto___88341 + (1));
i__84375__auto___88341 = G__88342;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq88339){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88339));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88344 = arguments.length;
var i__84375__auto___88345 = (0);
while(true){
if((i__84375__auto___88345 < len__84374__auto___88344)){
args__84381__auto__.push((arguments[i__84375__auto___88345]));

var G__88346 = (i__84375__auto___88345 + (1));
i__84375__auto___88345 = G__88346;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq88343){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88343));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88348 = arguments.length;
var i__84375__auto___88349 = (0);
while(true){
if((i__84375__auto___88349 < len__84374__auto___88348)){
args__84381__auto__.push((arguments[i__84375__auto___88349]));

var G__88350 = (i__84375__auto___88349 + (1));
i__84375__auto___88349 = G__88350;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq88347){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88347));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88352 = arguments.length;
var i__84375__auto___88353 = (0);
while(true){
if((i__84375__auto___88353 < len__84374__auto___88352)){
args__84381__auto__.push((arguments[i__84375__auto___88353]));

var G__88354 = (i__84375__auto___88353 + (1));
i__84375__auto___88353 = G__88354;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq88351){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88351));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88356 = arguments.length;
var i__84375__auto___88357 = (0);
while(true){
if((i__84375__auto___88357 < len__84374__auto___88356)){
args__84381__auto__.push((arguments[i__84375__auto___88357]));

var G__88358 = (i__84375__auto___88357 + (1));
i__84375__auto___88357 = G__88358;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq88355){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88355));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88360 = arguments.length;
var i__84375__auto___88361 = (0);
while(true){
if((i__84375__auto___88361 < len__84374__auto___88360)){
args__84381__auto__.push((arguments[i__84375__auto___88361]));

var G__88362 = (i__84375__auto___88361 + (1));
i__84375__auto___88361 = G__88362;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq88359){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88359));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88364 = arguments.length;
var i__84375__auto___88365 = (0);
while(true){
if((i__84375__auto___88365 < len__84374__auto___88364)){
args__84381__auto__.push((arguments[i__84375__auto___88365]));

var G__88366 = (i__84375__auto___88365 + (1));
i__84375__auto___88365 = G__88366;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq88363){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88363));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88368 = arguments.length;
var i__84375__auto___88369 = (0);
while(true){
if((i__84375__auto___88369 < len__84374__auto___88368)){
args__84381__auto__.push((arguments[i__84375__auto___88369]));

var G__88370 = (i__84375__auto___88369 + (1));
i__84375__auto___88369 = G__88370;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq88367){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88367));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88372 = arguments.length;
var i__84375__auto___88373 = (0);
while(true){
if((i__84375__auto___88373 < len__84374__auto___88372)){
args__84381__auto__.push((arguments[i__84375__auto___88373]));

var G__88374 = (i__84375__auto___88373 + (1));
i__84375__auto___88373 = G__88374;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq88371){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88371));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88376 = arguments.length;
var i__84375__auto___88377 = (0);
while(true){
if((i__84375__auto___88377 < len__84374__auto___88376)){
args__84381__auto__.push((arguments[i__84375__auto___88377]));

var G__88378 = (i__84375__auto___88377 + (1));
i__84375__auto___88377 = G__88378;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq88375){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88375));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88380 = arguments.length;
var i__84375__auto___88381 = (0);
while(true){
if((i__84375__auto___88381 < len__84374__auto___88380)){
args__84381__auto__.push((arguments[i__84375__auto___88381]));

var G__88382 = (i__84375__auto___88381 + (1));
i__84375__auto___88381 = G__88382;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq88379){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88379));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88384 = arguments.length;
var i__84375__auto___88385 = (0);
while(true){
if((i__84375__auto___88385 < len__84374__auto___88384)){
args__84381__auto__.push((arguments[i__84375__auto___88385]));

var G__88386 = (i__84375__auto___88385 + (1));
i__84375__auto___88385 = G__88386;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq88383){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88383));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88388 = arguments.length;
var i__84375__auto___88389 = (0);
while(true){
if((i__84375__auto___88389 < len__84374__auto___88388)){
args__84381__auto__.push((arguments[i__84375__auto___88389]));

var G__88390 = (i__84375__auto___88389 + (1));
i__84375__auto___88389 = G__88390;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq88387){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88387));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88392 = arguments.length;
var i__84375__auto___88393 = (0);
while(true){
if((i__84375__auto___88393 < len__84374__auto___88392)){
args__84381__auto__.push((arguments[i__84375__auto___88393]));

var G__88394 = (i__84375__auto___88393 + (1));
i__84375__auto___88393 = G__88394;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq88391){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88391));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88396 = arguments.length;
var i__84375__auto___88397 = (0);
while(true){
if((i__84375__auto___88397 < len__84374__auto___88396)){
args__84381__auto__.push((arguments[i__84375__auto___88397]));

var G__88398 = (i__84375__auto___88397 + (1));
i__84375__auto___88397 = G__88398;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq88395){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88395));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88400 = arguments.length;
var i__84375__auto___88401 = (0);
while(true){
if((i__84375__auto___88401 < len__84374__auto___88400)){
args__84381__auto__.push((arguments[i__84375__auto___88401]));

var G__88402 = (i__84375__auto___88401 + (1));
i__84375__auto___88401 = G__88402;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq88399){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88399));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88404 = arguments.length;
var i__84375__auto___88405 = (0);
while(true){
if((i__84375__auto___88405 < len__84374__auto___88404)){
args__84381__auto__.push((arguments[i__84375__auto___88405]));

var G__88406 = (i__84375__auto___88405 + (1));
i__84375__auto___88405 = G__88406;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq88403){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88403));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88408 = arguments.length;
var i__84375__auto___88409 = (0);
while(true){
if((i__84375__auto___88409 < len__84374__auto___88408)){
args__84381__auto__.push((arguments[i__84375__auto___88409]));

var G__88410 = (i__84375__auto___88409 + (1));
i__84375__auto___88409 = G__88410;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq88407){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88407));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88412 = arguments.length;
var i__84375__auto___88413 = (0);
while(true){
if((i__84375__auto___88413 < len__84374__auto___88412)){
args__84381__auto__.push((arguments[i__84375__auto___88413]));

var G__88414 = (i__84375__auto___88413 + (1));
i__84375__auto___88413 = G__88414;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq88411){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88411));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88416 = arguments.length;
var i__84375__auto___88417 = (0);
while(true){
if((i__84375__auto___88417 < len__84374__auto___88416)){
args__84381__auto__.push((arguments[i__84375__auto___88417]));

var G__88418 = (i__84375__auto___88417 + (1));
i__84375__auto___88417 = G__88418;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq88415){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88415));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88420 = arguments.length;
var i__84375__auto___88421 = (0);
while(true){
if((i__84375__auto___88421 < len__84374__auto___88420)){
args__84381__auto__.push((arguments[i__84375__auto___88421]));

var G__88422 = (i__84375__auto___88421 + (1));
i__84375__auto___88421 = G__88422;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq88419){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88419));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88424 = arguments.length;
var i__84375__auto___88425 = (0);
while(true){
if((i__84375__auto___88425 < len__84374__auto___88424)){
args__84381__auto__.push((arguments[i__84375__auto___88425]));

var G__88426 = (i__84375__auto___88425 + (1));
i__84375__auto___88425 = G__88426;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq88423){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88423));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88428 = arguments.length;
var i__84375__auto___88429 = (0);
while(true){
if((i__84375__auto___88429 < len__84374__auto___88428)){
args__84381__auto__.push((arguments[i__84375__auto___88429]));

var G__88430 = (i__84375__auto___88429 + (1));
i__84375__auto___88429 = G__88430;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq88427){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88427));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88432 = arguments.length;
var i__84375__auto___88433 = (0);
while(true){
if((i__84375__auto___88433 < len__84374__auto___88432)){
args__84381__auto__.push((arguments[i__84375__auto___88433]));

var G__88434 = (i__84375__auto___88433 + (1));
i__84375__auto___88433 = G__88434;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq88431){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88431));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__84381__auto__ = [];
var len__84374__auto___88436 = arguments.length;
var i__84375__auto___88437 = (0);
while(true){
if((i__84375__auto___88437 < len__84374__auto___88436)){
args__84381__auto__.push((arguments[i__84375__auto___88437]));

var G__88438 = (i__84375__auto___88437 + (1));
i__84375__auto___88437 = G__88438;
continue;
} else {
}
break;
}

var argseq__84382__auto__ = ((((0) < args__84381__auto__.length))?(new cljs.core.IndexedSeq(args__84381__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__84382__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq88435){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88435));
});


//# sourceMappingURL=core.js.map
