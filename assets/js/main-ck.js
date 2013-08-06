/* Author: Federico Vezzoli

*/// This ready handler passes the jQuery alias in to avoid conflict with other libraries.
jQuery(document).ready(function(e){function r(){var e="A local variable, scoped to this method."}function i(t){console.log(t);e("body").each(function(){console.log(this)})}var t="A constant, available to all methods of this closure.",n="An instance variable, available to all methods of this closure.";this.init=function(){r()}()});