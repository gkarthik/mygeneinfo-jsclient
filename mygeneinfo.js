var mygeneinfo = (function(){
	return {
		getJSON: function(query_text,limit,callback){
			$.getJSON("http://mygene.info/query?q="+query_text+"&limit="+limit+"&callback=gene_padding", function(data){
				callback(data);
		});
		},
		printJSON: function(query_text,limit,element_id){
			$("#"+element_id).html("Loading...");
			$.getJSON("http://mygene.info/query?q="+query_text+"&limit="+limit+"&callback=gene_padding", function(data){
				$("#"+element_id).html(syntaxHighlight(data));
			});
		},
		printPrettyJSON: function(query_text,limit,element_id){
			$("#"+element_id).html("Loading...");
			$.getJSON("http://mygene.info/query?q="+query_text+"&limit="+limit+"&callback=gene_padding", function(data){
				var json = JSON.stringify(data, null, 2);
				$("#"+element_id).html("<pre>"+json+"</pre>");
			});
		}
	};
}());

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    console.log(json);
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
