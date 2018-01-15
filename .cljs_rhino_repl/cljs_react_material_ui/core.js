// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__85559){
var vec__85560 = p__85559;
var k = cljs.core.nth.call(null,vec__85560,(0),null);
var v = cljs.core.nth.call(null,vec__85560,(1),null);
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
var G__85564 = arguments.length;
switch (G__85564) {
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
var G__85567 = arguments.length;
switch (G__85567) {
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
var args__83829__auto__ = [];
var len__83814__auto___85570 = arguments.length;
var i__83815__auto___85571 = (0);
while(true){
if((i__83815__auto___85571 < len__83814__auto___85570)){
args__83829__auto__.push((arguments[i__83815__auto___85571]));

var G__85572 = (i__83815__auto___85571 + (1));
i__83815__auto___85571 = G__85572;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq85569){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85569));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85574 = arguments.length;
var i__83815__auto___85575 = (0);
while(true){
if((i__83815__auto___85575 < len__83814__auto___85574)){
args__83829__auto__.push((arguments[i__83815__auto___85575]));

var G__85576 = (i__83815__auto___85575 + (1));
i__83815__auto___85575 = G__85576;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq85573){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85573));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85578 = arguments.length;
var i__83815__auto___85579 = (0);
while(true){
if((i__83815__auto___85579 < len__83814__auto___85578)){
args__83829__auto__.push((arguments[i__83815__auto___85579]));

var G__85580 = (i__83815__auto___85579 + (1));
i__83815__auto___85579 = G__85580;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq85577){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85577));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85582 = arguments.length;
var i__83815__auto___85583 = (0);
while(true){
if((i__83815__auto___85583 < len__83814__auto___85582)){
args__83829__auto__.push((arguments[i__83815__auto___85583]));

var G__85584 = (i__83815__auto___85583 + (1));
i__83815__auto___85583 = G__85584;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq85581){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85581));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85586 = arguments.length;
var i__83815__auto___85587 = (0);
while(true){
if((i__83815__auto___85587 < len__83814__auto___85586)){
args__83829__auto__.push((arguments[i__83815__auto___85587]));

var G__85588 = (i__83815__auto___85587 + (1));
i__83815__auto___85587 = G__85588;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq85585){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85585));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85590 = arguments.length;
var i__83815__auto___85591 = (0);
while(true){
if((i__83815__auto___85591 < len__83814__auto___85590)){
args__83829__auto__.push((arguments[i__83815__auto___85591]));

var G__85592 = (i__83815__auto___85591 + (1));
i__83815__auto___85591 = G__85592;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq85589){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85589));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85594 = arguments.length;
var i__83815__auto___85595 = (0);
while(true){
if((i__83815__auto___85595 < len__83814__auto___85594)){
args__83829__auto__.push((arguments[i__83815__auto___85595]));

var G__85596 = (i__83815__auto___85595 + (1));
i__83815__auto___85595 = G__85596;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq85593){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85593));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85598 = arguments.length;
var i__83815__auto___85599 = (0);
while(true){
if((i__83815__auto___85599 < len__83814__auto___85598)){
args__83829__auto__.push((arguments[i__83815__auto___85599]));

var G__85600 = (i__83815__auto___85599 + (1));
i__83815__auto___85599 = G__85600;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq85597){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85597));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85602 = arguments.length;
var i__83815__auto___85603 = (0);
while(true){
if((i__83815__auto___85603 < len__83814__auto___85602)){
args__83829__auto__.push((arguments[i__83815__auto___85603]));

var G__85604 = (i__83815__auto___85603 + (1));
i__83815__auto___85603 = G__85604;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq85601){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85601));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85606 = arguments.length;
var i__83815__auto___85607 = (0);
while(true){
if((i__83815__auto___85607 < len__83814__auto___85606)){
args__83829__auto__.push((arguments[i__83815__auto___85607]));

var G__85608 = (i__83815__auto___85607 + (1));
i__83815__auto___85607 = G__85608;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq85605){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85605));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85610 = arguments.length;
var i__83815__auto___85611 = (0);
while(true){
if((i__83815__auto___85611 < len__83814__auto___85610)){
args__83829__auto__.push((arguments[i__83815__auto___85611]));

var G__85612 = (i__83815__auto___85611 + (1));
i__83815__auto___85611 = G__85612;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq85609){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85609));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85614 = arguments.length;
var i__83815__auto___85615 = (0);
while(true){
if((i__83815__auto___85615 < len__83814__auto___85614)){
args__83829__auto__.push((arguments[i__83815__auto___85615]));

var G__85616 = (i__83815__auto___85615 + (1));
i__83815__auto___85615 = G__85616;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq85613){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85613));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85618 = arguments.length;
var i__83815__auto___85619 = (0);
while(true){
if((i__83815__auto___85619 < len__83814__auto___85618)){
args__83829__auto__.push((arguments[i__83815__auto___85619]));

var G__85620 = (i__83815__auto___85619 + (1));
i__83815__auto___85619 = G__85620;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq85617){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85617));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85622 = arguments.length;
var i__83815__auto___85623 = (0);
while(true){
if((i__83815__auto___85623 < len__83814__auto___85622)){
args__83829__auto__.push((arguments[i__83815__auto___85623]));

var G__85624 = (i__83815__auto___85623 + (1));
i__83815__auto___85623 = G__85624;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq85621){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85621));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85626 = arguments.length;
var i__83815__auto___85627 = (0);
while(true){
if((i__83815__auto___85627 < len__83814__auto___85626)){
args__83829__auto__.push((arguments[i__83815__auto___85627]));

var G__85628 = (i__83815__auto___85627 + (1));
i__83815__auto___85627 = G__85628;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq85625){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85625));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85630 = arguments.length;
var i__83815__auto___85631 = (0);
while(true){
if((i__83815__auto___85631 < len__83814__auto___85630)){
args__83829__auto__.push((arguments[i__83815__auto___85631]));

var G__85632 = (i__83815__auto___85631 + (1));
i__83815__auto___85631 = G__85632;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq85629){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85629));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85634 = arguments.length;
var i__83815__auto___85635 = (0);
while(true){
if((i__83815__auto___85635 < len__83814__auto___85634)){
args__83829__auto__.push((arguments[i__83815__auto___85635]));

var G__85636 = (i__83815__auto___85635 + (1));
i__83815__auto___85635 = G__85636;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq85633){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85633));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85638 = arguments.length;
var i__83815__auto___85639 = (0);
while(true){
if((i__83815__auto___85639 < len__83814__auto___85638)){
args__83829__auto__.push((arguments[i__83815__auto___85639]));

var G__85640 = (i__83815__auto___85639 + (1));
i__83815__auto___85639 = G__85640;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq85637){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85637));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85642 = arguments.length;
var i__83815__auto___85643 = (0);
while(true){
if((i__83815__auto___85643 < len__83814__auto___85642)){
args__83829__auto__.push((arguments[i__83815__auto___85643]));

var G__85644 = (i__83815__auto___85643 + (1));
i__83815__auto___85643 = G__85644;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq85641){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85641));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85646 = arguments.length;
var i__83815__auto___85647 = (0);
while(true){
if((i__83815__auto___85647 < len__83814__auto___85646)){
args__83829__auto__.push((arguments[i__83815__auto___85647]));

var G__85648 = (i__83815__auto___85647 + (1));
i__83815__auto___85647 = G__85648;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq85645){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85645));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85650 = arguments.length;
var i__83815__auto___85651 = (0);
while(true){
if((i__83815__auto___85651 < len__83814__auto___85650)){
args__83829__auto__.push((arguments[i__83815__auto___85651]));

var G__85652 = (i__83815__auto___85651 + (1));
i__83815__auto___85651 = G__85652;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq85649){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85649));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85654 = arguments.length;
var i__83815__auto___85655 = (0);
while(true){
if((i__83815__auto___85655 < len__83814__auto___85654)){
args__83829__auto__.push((arguments[i__83815__auto___85655]));

var G__85656 = (i__83815__auto___85655 + (1));
i__83815__auto___85655 = G__85656;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq85653){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85653));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85658 = arguments.length;
var i__83815__auto___85659 = (0);
while(true){
if((i__83815__auto___85659 < len__83814__auto___85658)){
args__83829__auto__.push((arguments[i__83815__auto___85659]));

var G__85660 = (i__83815__auto___85659 + (1));
i__83815__auto___85659 = G__85660;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq85657){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85657));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85662 = arguments.length;
var i__83815__auto___85663 = (0);
while(true){
if((i__83815__auto___85663 < len__83814__auto___85662)){
args__83829__auto__.push((arguments[i__83815__auto___85663]));

var G__85664 = (i__83815__auto___85663 + (1));
i__83815__auto___85663 = G__85664;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq85661){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85661));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85666 = arguments.length;
var i__83815__auto___85667 = (0);
while(true){
if((i__83815__auto___85667 < len__83814__auto___85666)){
args__83829__auto__.push((arguments[i__83815__auto___85667]));

var G__85668 = (i__83815__auto___85667 + (1));
i__83815__auto___85667 = G__85668;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq85665){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85665));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85670 = arguments.length;
var i__83815__auto___85671 = (0);
while(true){
if((i__83815__auto___85671 < len__83814__auto___85670)){
args__83829__auto__.push((arguments[i__83815__auto___85671]));

var G__85672 = (i__83815__auto___85671 + (1));
i__83815__auto___85671 = G__85672;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq85669){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85669));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85674 = arguments.length;
var i__83815__auto___85675 = (0);
while(true){
if((i__83815__auto___85675 < len__83814__auto___85674)){
args__83829__auto__.push((arguments[i__83815__auto___85675]));

var G__85676 = (i__83815__auto___85675 + (1));
i__83815__auto___85675 = G__85676;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq85673){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85673));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85678 = arguments.length;
var i__83815__auto___85679 = (0);
while(true){
if((i__83815__auto___85679 < len__83814__auto___85678)){
args__83829__auto__.push((arguments[i__83815__auto___85679]));

var G__85680 = (i__83815__auto___85679 + (1));
i__83815__auto___85679 = G__85680;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq85677){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85677));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85682 = arguments.length;
var i__83815__auto___85683 = (0);
while(true){
if((i__83815__auto___85683 < len__83814__auto___85682)){
args__83829__auto__.push((arguments[i__83815__auto___85683]));

var G__85684 = (i__83815__auto___85683 + (1));
i__83815__auto___85683 = G__85684;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq85681){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85681));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85686 = arguments.length;
var i__83815__auto___85687 = (0);
while(true){
if((i__83815__auto___85687 < len__83814__auto___85686)){
args__83829__auto__.push((arguments[i__83815__auto___85687]));

var G__85688 = (i__83815__auto___85687 + (1));
i__83815__auto___85687 = G__85688;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq85685){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85685));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85690 = arguments.length;
var i__83815__auto___85691 = (0);
while(true){
if((i__83815__auto___85691 < len__83814__auto___85690)){
args__83829__auto__.push((arguments[i__83815__auto___85691]));

var G__85692 = (i__83815__auto___85691 + (1));
i__83815__auto___85691 = G__85692;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq85689){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85689));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85694 = arguments.length;
var i__83815__auto___85695 = (0);
while(true){
if((i__83815__auto___85695 < len__83814__auto___85694)){
args__83829__auto__.push((arguments[i__83815__auto___85695]));

var G__85696 = (i__83815__auto___85695 + (1));
i__83815__auto___85695 = G__85696;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq85693){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85693));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85698 = arguments.length;
var i__83815__auto___85699 = (0);
while(true){
if((i__83815__auto___85699 < len__83814__auto___85698)){
args__83829__auto__.push((arguments[i__83815__auto___85699]));

var G__85700 = (i__83815__auto___85699 + (1));
i__83815__auto___85699 = G__85700;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq85697){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85697));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85702 = arguments.length;
var i__83815__auto___85703 = (0);
while(true){
if((i__83815__auto___85703 < len__83814__auto___85702)){
args__83829__auto__.push((arguments[i__83815__auto___85703]));

var G__85704 = (i__83815__auto___85703 + (1));
i__83815__auto___85703 = G__85704;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq85701){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85701));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85706 = arguments.length;
var i__83815__auto___85707 = (0);
while(true){
if((i__83815__auto___85707 < len__83814__auto___85706)){
args__83829__auto__.push((arguments[i__83815__auto___85707]));

var G__85708 = (i__83815__auto___85707 + (1));
i__83815__auto___85707 = G__85708;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq85705){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85705));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85710 = arguments.length;
var i__83815__auto___85711 = (0);
while(true){
if((i__83815__auto___85711 < len__83814__auto___85710)){
args__83829__auto__.push((arguments[i__83815__auto___85711]));

var G__85712 = (i__83815__auto___85711 + (1));
i__83815__auto___85711 = G__85712;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq85709){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85709));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85714 = arguments.length;
var i__83815__auto___85715 = (0);
while(true){
if((i__83815__auto___85715 < len__83814__auto___85714)){
args__83829__auto__.push((arguments[i__83815__auto___85715]));

var G__85716 = (i__83815__auto___85715 + (1));
i__83815__auto___85715 = G__85716;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq85713){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85713));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85718 = arguments.length;
var i__83815__auto___85719 = (0);
while(true){
if((i__83815__auto___85719 < len__83814__auto___85718)){
args__83829__auto__.push((arguments[i__83815__auto___85719]));

var G__85720 = (i__83815__auto___85719 + (1));
i__83815__auto___85719 = G__85720;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq85717){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85717));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85722 = arguments.length;
var i__83815__auto___85723 = (0);
while(true){
if((i__83815__auto___85723 < len__83814__auto___85722)){
args__83829__auto__.push((arguments[i__83815__auto___85723]));

var G__85724 = (i__83815__auto___85723 + (1));
i__83815__auto___85723 = G__85724;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq85721){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85721));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85726 = arguments.length;
var i__83815__auto___85727 = (0);
while(true){
if((i__83815__auto___85727 < len__83814__auto___85726)){
args__83829__auto__.push((arguments[i__83815__auto___85727]));

var G__85728 = (i__83815__auto___85727 + (1));
i__83815__auto___85727 = G__85728;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq85725){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85725));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85730 = arguments.length;
var i__83815__auto___85731 = (0);
while(true){
if((i__83815__auto___85731 < len__83814__auto___85730)){
args__83829__auto__.push((arguments[i__83815__auto___85731]));

var G__85732 = (i__83815__auto___85731 + (1));
i__83815__auto___85731 = G__85732;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq85729){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85729));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85734 = arguments.length;
var i__83815__auto___85735 = (0);
while(true){
if((i__83815__auto___85735 < len__83814__auto___85734)){
args__83829__auto__.push((arguments[i__83815__auto___85735]));

var G__85736 = (i__83815__auto___85735 + (1));
i__83815__auto___85735 = G__85736;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq85733){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85733));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85738 = arguments.length;
var i__83815__auto___85739 = (0);
while(true){
if((i__83815__auto___85739 < len__83814__auto___85738)){
args__83829__auto__.push((arguments[i__83815__auto___85739]));

var G__85740 = (i__83815__auto___85739 + (1));
i__83815__auto___85739 = G__85740;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq85737){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85737));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85742 = arguments.length;
var i__83815__auto___85743 = (0);
while(true){
if((i__83815__auto___85743 < len__83814__auto___85742)){
args__83829__auto__.push((arguments[i__83815__auto___85743]));

var G__85744 = (i__83815__auto___85743 + (1));
i__83815__auto___85743 = G__85744;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq85741){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85741));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85746 = arguments.length;
var i__83815__auto___85747 = (0);
while(true){
if((i__83815__auto___85747 < len__83814__auto___85746)){
args__83829__auto__.push((arguments[i__83815__auto___85747]));

var G__85748 = (i__83815__auto___85747 + (1));
i__83815__auto___85747 = G__85748;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq85745){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85745));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85750 = arguments.length;
var i__83815__auto___85751 = (0);
while(true){
if((i__83815__auto___85751 < len__83814__auto___85750)){
args__83829__auto__.push((arguments[i__83815__auto___85751]));

var G__85752 = (i__83815__auto___85751 + (1));
i__83815__auto___85751 = G__85752;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq85749){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85749));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85754 = arguments.length;
var i__83815__auto___85755 = (0);
while(true){
if((i__83815__auto___85755 < len__83814__auto___85754)){
args__83829__auto__.push((arguments[i__83815__auto___85755]));

var G__85756 = (i__83815__auto___85755 + (1));
i__83815__auto___85755 = G__85756;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq85753){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85753));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85758 = arguments.length;
var i__83815__auto___85759 = (0);
while(true){
if((i__83815__auto___85759 < len__83814__auto___85758)){
args__83829__auto__.push((arguments[i__83815__auto___85759]));

var G__85760 = (i__83815__auto___85759 + (1));
i__83815__auto___85759 = G__85760;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq85757){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85757));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85762 = arguments.length;
var i__83815__auto___85763 = (0);
while(true){
if((i__83815__auto___85763 < len__83814__auto___85762)){
args__83829__auto__.push((arguments[i__83815__auto___85763]));

var G__85764 = (i__83815__auto___85763 + (1));
i__83815__auto___85763 = G__85764;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq85761){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85761));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85766 = arguments.length;
var i__83815__auto___85767 = (0);
while(true){
if((i__83815__auto___85767 < len__83814__auto___85766)){
args__83829__auto__.push((arguments[i__83815__auto___85767]));

var G__85768 = (i__83815__auto___85767 + (1));
i__83815__auto___85767 = G__85768;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq85765){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85765));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85770 = arguments.length;
var i__83815__auto___85771 = (0);
while(true){
if((i__83815__auto___85771 < len__83814__auto___85770)){
args__83829__auto__.push((arguments[i__83815__auto___85771]));

var G__85772 = (i__83815__auto___85771 + (1));
i__83815__auto___85771 = G__85772;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq85769){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85769));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85774 = arguments.length;
var i__83815__auto___85775 = (0);
while(true){
if((i__83815__auto___85775 < len__83814__auto___85774)){
args__83829__auto__.push((arguments[i__83815__auto___85775]));

var G__85776 = (i__83815__auto___85775 + (1));
i__83815__auto___85775 = G__85776;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq85773){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85773));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85778 = arguments.length;
var i__83815__auto___85779 = (0);
while(true){
if((i__83815__auto___85779 < len__83814__auto___85778)){
args__83829__auto__.push((arguments[i__83815__auto___85779]));

var G__85780 = (i__83815__auto___85779 + (1));
i__83815__auto___85779 = G__85780;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq85777){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85777));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85782 = arguments.length;
var i__83815__auto___85783 = (0);
while(true){
if((i__83815__auto___85783 < len__83814__auto___85782)){
args__83829__auto__.push((arguments[i__83815__auto___85783]));

var G__85784 = (i__83815__auto___85783 + (1));
i__83815__auto___85783 = G__85784;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq85781){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85781));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85786 = arguments.length;
var i__83815__auto___85787 = (0);
while(true){
if((i__83815__auto___85787 < len__83814__auto___85786)){
args__83829__auto__.push((arguments[i__83815__auto___85787]));

var G__85788 = (i__83815__auto___85787 + (1));
i__83815__auto___85787 = G__85788;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq85785){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85785));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85790 = arguments.length;
var i__83815__auto___85791 = (0);
while(true){
if((i__83815__auto___85791 < len__83814__auto___85790)){
args__83829__auto__.push((arguments[i__83815__auto___85791]));

var G__85792 = (i__83815__auto___85791 + (1));
i__83815__auto___85791 = G__85792;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq85789){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85789));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85794 = arguments.length;
var i__83815__auto___85795 = (0);
while(true){
if((i__83815__auto___85795 < len__83814__auto___85794)){
args__83829__auto__.push((arguments[i__83815__auto___85795]));

var G__85796 = (i__83815__auto___85795 + (1));
i__83815__auto___85795 = G__85796;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq85793){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85793));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85798 = arguments.length;
var i__83815__auto___85799 = (0);
while(true){
if((i__83815__auto___85799 < len__83814__auto___85798)){
args__83829__auto__.push((arguments[i__83815__auto___85799]));

var G__85800 = (i__83815__auto___85799 + (1));
i__83815__auto___85799 = G__85800;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq85797){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85797));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85802 = arguments.length;
var i__83815__auto___85803 = (0);
while(true){
if((i__83815__auto___85803 < len__83814__auto___85802)){
args__83829__auto__.push((arguments[i__83815__auto___85803]));

var G__85804 = (i__83815__auto___85803 + (1));
i__83815__auto___85803 = G__85804;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq85801){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85801));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85806 = arguments.length;
var i__83815__auto___85807 = (0);
while(true){
if((i__83815__auto___85807 < len__83814__auto___85806)){
args__83829__auto__.push((arguments[i__83815__auto___85807]));

var G__85808 = (i__83815__auto___85807 + (1));
i__83815__auto___85807 = G__85808;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq85805){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85805));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85810 = arguments.length;
var i__83815__auto___85811 = (0);
while(true){
if((i__83815__auto___85811 < len__83814__auto___85810)){
args__83829__auto__.push((arguments[i__83815__auto___85811]));

var G__85812 = (i__83815__auto___85811 + (1));
i__83815__auto___85811 = G__85812;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq85809){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85809));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85814 = arguments.length;
var i__83815__auto___85815 = (0);
while(true){
if((i__83815__auto___85815 < len__83814__auto___85814)){
args__83829__auto__.push((arguments[i__83815__auto___85815]));

var G__85816 = (i__83815__auto___85815 + (1));
i__83815__auto___85815 = G__85816;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq85813){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85813));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85818 = arguments.length;
var i__83815__auto___85819 = (0);
while(true){
if((i__83815__auto___85819 < len__83814__auto___85818)){
args__83829__auto__.push((arguments[i__83815__auto___85819]));

var G__85820 = (i__83815__auto___85819 + (1));
i__83815__auto___85819 = G__85820;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq85817){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85817));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85822 = arguments.length;
var i__83815__auto___85823 = (0);
while(true){
if((i__83815__auto___85823 < len__83814__auto___85822)){
args__83829__auto__.push((arguments[i__83815__auto___85823]));

var G__85824 = (i__83815__auto___85823 + (1));
i__83815__auto___85823 = G__85824;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq85821){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85821));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85826 = arguments.length;
var i__83815__auto___85827 = (0);
while(true){
if((i__83815__auto___85827 < len__83814__auto___85826)){
args__83829__auto__.push((arguments[i__83815__auto___85827]));

var G__85828 = (i__83815__auto___85827 + (1));
i__83815__auto___85827 = G__85828;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq85825){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85825));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__83829__auto__ = [];
var len__83814__auto___85830 = arguments.length;
var i__83815__auto___85831 = (0);
while(true){
if((i__83815__auto___85831 < len__83814__auto___85830)){
args__83829__auto__.push((arguments[i__83815__auto___85831]));

var G__85832 = (i__83815__auto___85831 + (1));
i__83815__auto___85831 = G__85832;
continue;
} else {
}
break;
}

var argseq__83830__auto__ = ((((0) < args__83829__auto__.length))?(new cljs.core.IndexedSeq(args__83829__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__83830__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq85829){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85829));
});


//# sourceMappingURL=core.js.map
