(function(a){a.fa.extend({autocomplete_relation:function(d,c,b){var e=a('<input autocomplete="off" value="" />');label=d.parent().children("label");if(label.text()){d.parent().show();d.click()}else{d.parent().hide()}b.select=function(f,g){d.val(g.item.value);d.parent().children("label").text(g.item.label);d.parent().show();e.val(g.item.label);d.click();return false};b.source=b.source+"?filter_by="+b.filter_by;e.autocomplete(b);c.append(e)}})})(jQuery);