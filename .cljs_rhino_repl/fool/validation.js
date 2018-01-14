// Compiled by ClojureScript 1.9.946 {}
goog.provide('fool.validation');
goog.require('cljs.core');
goog.require('struct.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
/**
 * require maps which contain name, pass, pass-confirm 
 * 
 *   3 <= name <= 30
 *   5 <= pass <= 500
 *   pass == pass-confirm
 */
fool.validation.user_registration_error = (function fool$validation$user_registration_error(p__87222){
var map__87223 = p__87222;
var map__87223__$1 = ((((!((map__87223 == null)))?((((map__87223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87223):map__87223);
var params = map__87223__$1;
var pass_confirm = cljs.core.get.call(null,map__87223__$1,new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590));
return cljs.core.first.call(null,bouncer.core.validate.call(null,params,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"user-name must be present"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(3),new cljs.core.Keyword(null,"message","message",-406056002),"user-name must contain at least 3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.max_count,(30),new cljs.core.Keyword(null,"message","message",-406056002),"user-name must contain at least 30"], null)], null),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"password must be present"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.max_count,(500),new cljs.core.Keyword(null,"message","message",-406056002),"password must contaion at most 500"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(5),new cljs.core.Keyword(null,"message","message",-406056002),"password must contain at least 5"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_,pass_confirm,new cljs.core.Keyword(null,"message","message",-406056002),"re-entered password does not match"], null)], null)));
});
/**
 * require maps which contain name, pass, pass-confirm 
 * 
 *   3 <= name <= 30
 *   5 <= pass <= 500
 */
fool.validation.login_error = (function fool$validation$login_error(params){
return cljs.core.first.call(null,bouncer.core.validate.call(null,params,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"user-name must be present"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(3),new cljs.core.Keyword(null,"message","message",-406056002),"user-name must contain at least 3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.max_count,(30),new cljs.core.Keyword(null,"message","message",-406056002),"user-name must contain at least 30"], null)], null),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"password must be present"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.max_count,(500),new cljs.core.Keyword(null,"message","message",-406056002),"password must contaion at most 500"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(5),new cljs.core.Keyword(null,"message","message",-406056002),"password must contain at least 5"], null)], null)));
});
/**
 * require maps which contain pass, newpass, newpass-confirm 
 * 
 *   5 <= pass <= 500
 *   5 <= newpass <= 500
 *   newpass == newpass-confirm
 */
fool.validation.update_password_error = (function fool$validation$update_password_error(p__87225){
var map__87226 = p__87225;
var map__87226__$1 = ((((!((map__87226 == null)))?((((map__87226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87226):map__87226);
var params = map__87226__$1;
var newpass_confirm = cljs.core.get.call(null,map__87226__$1,new cljs.core.Keyword(null,"newpass-confirm","newpass-confirm",876757089));
return cljs.core.first.call(null,bouncer.core.validate.call(null,params,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"password must be present"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.max_count,(500),new cljs.core.Keyword(null,"message","message",-406056002),"password must contaion at most 500"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(5),new cljs.core.Keyword(null,"message","message",-406056002),"password must contain at least 5"], null)], null),new cljs.core.Keyword(null,"newpass","newpass",-265253148),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"password must be present"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.max_count,(500),new cljs.core.Keyword(null,"message","message",-406056002),"password must contaion at most 500"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(5),new cljs.core.Keyword(null,"message","message",-406056002),"password must contain at least 5"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_,newpass_confirm,new cljs.core.Keyword(null,"message","message",-406056002),"re-entered password does not match"], null)], null)));
});

//# sourceMappingURL=validation.js.map
