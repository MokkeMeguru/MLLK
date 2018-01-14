// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84916 = arguments.length;
var i__83010__auto___84917 = (0);
while(true){
if((i__83010__auto___84917 < len__83009__auto___84916)){
args__83016__auto__.push((arguments[i__83010__auto___84917]));

var G__84918 = (i__83010__auto___84917 + (1));
i__83010__auto___84917 = G__84918;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq84914){
var G__84915 = cljs.core.first.call(null,seq84914);
var seq84914__$1 = cljs.core.next.call(null,seq84914);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__84915,seq84914__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84921 = arguments.length;
var i__83010__auto___84922 = (0);
while(true){
if((i__83010__auto___84922 < len__83009__auto___84921)){
args__83016__auto__.push((arguments[i__83010__auto___84922]));

var G__84923 = (i__83010__auto___84922 + (1));
i__83010__auto___84922 = G__84923;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq84919){
var G__84920 = cljs.core.first.call(null,seq84919);
var seq84919__$1 = cljs.core.next.call(null,seq84919);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__84920,seq84919__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84926 = arguments.length;
var i__83010__auto___84927 = (0);
while(true){
if((i__83010__auto___84927 < len__83009__auto___84926)){
args__83016__auto__.push((arguments[i__83010__auto___84927]));

var G__84928 = (i__83010__auto___84927 + (1));
i__83010__auto___84927 = G__84928;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq84924){
var G__84925 = cljs.core.first.call(null,seq84924);
var seq84924__$1 = cljs.core.next.call(null,seq84924);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__84925,seq84924__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84931 = arguments.length;
var i__83010__auto___84932 = (0);
while(true){
if((i__83010__auto___84932 < len__83009__auto___84931)){
args__83016__auto__.push((arguments[i__83010__auto___84932]));

var G__84933 = (i__83010__auto___84932 + (1));
i__83010__auto___84932 = G__84933;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq84929){
var G__84930 = cljs.core.first.call(null,seq84929);
var seq84929__$1 = cljs.core.next.call(null,seq84929);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__84930,seq84929__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84936 = arguments.length;
var i__83010__auto___84937 = (0);
while(true){
if((i__83010__auto___84937 < len__83009__auto___84936)){
args__83016__auto__.push((arguments[i__83010__auto___84937]));

var G__84938 = (i__83010__auto___84937 + (1));
i__83010__auto___84937 = G__84938;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq84934){
var G__84935 = cljs.core.first.call(null,seq84934);
var seq84934__$1 = cljs.core.next.call(null,seq84934);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__84935,seq84934__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84941 = arguments.length;
var i__83010__auto___84942 = (0);
while(true){
if((i__83010__auto___84942 < len__83009__auto___84941)){
args__83016__auto__.push((arguments[i__83010__auto___84942]));

var G__84943 = (i__83010__auto___84942 + (1));
i__83010__auto___84942 = G__84943;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq84939){
var G__84940 = cljs.core.first.call(null,seq84939);
var seq84939__$1 = cljs.core.next.call(null,seq84939);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__84940,seq84939__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84946 = arguments.length;
var i__83010__auto___84947 = (0);
while(true){
if((i__83010__auto___84947 < len__83009__auto___84946)){
args__83016__auto__.push((arguments[i__83010__auto___84947]));

var G__84948 = (i__83010__auto___84947 + (1));
i__83010__auto___84947 = G__84948;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq84944){
var G__84945 = cljs.core.first.call(null,seq84944);
var seq84944__$1 = cljs.core.next.call(null,seq84944);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__84945,seq84944__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84951 = arguments.length;
var i__83010__auto___84952 = (0);
while(true){
if((i__83010__auto___84952 < len__83009__auto___84951)){
args__83016__auto__.push((arguments[i__83010__auto___84952]));

var G__84953 = (i__83010__auto___84952 + (1));
i__83010__auto___84952 = G__84953;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq84949){
var G__84950 = cljs.core.first.call(null,seq84949);
var seq84949__$1 = cljs.core.next.call(null,seq84949);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__84950,seq84949__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__83016__auto__ = [];
var len__83009__auto___84956 = arguments.length;
var i__83010__auto___84957 = (0);
while(true){
if((i__83010__auto___84957 < len__83009__auto___84956)){
args__83016__auto__.push((arguments[i__83010__auto___84957]));

var G__84958 = (i__83010__auto___84957 + (1));
i__83010__auto___84957 = G__84958;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((1) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__83017__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__84346__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__84346__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__84346__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq84954){
var G__84955 = cljs.core.first.call(null,seq84954);
var seq84954__$1 = cljs.core.next.call(null,seq84954);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__84955,seq84954__$1);
});


//# sourceMappingURL=core.js.map
