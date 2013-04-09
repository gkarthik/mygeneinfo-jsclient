$(document).ready(function(){
var query_text;
var table;
var raw_json;
$("#input-main").keyup(function(){
	query_text=$("#input-main").val();
	if(query_text!="")
	{
		$("#loading-text").html("Loading...");
		$.getJSON("http://mygene.info/query?q="+query_text+"&limit=50&callback=gene_padding", function(data){
			table = prettyPrint(data,{maxDepth:10});
			raw_json=syntaxHighlight(data);
			$("#loading-text").html("");
			$("#content").html(table);	
		});	
	}
});

$("#raw-json").click(function(){
$("#content").html(raw_json);
});

$("#pretty-json").click(function(){
$("#content").html(table);
});

});

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
