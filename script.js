$(document).ready(function(){
var query_text;
var table;
var raw_json;
$("#input-main").keyup(function(){
	query_text=$("#input-main").val();
	if(query_text!="")
	{
		mygeneinfo.printPrettyJSON(query_text,20,"content");
	}
});

$("#raw-json").click(function(){
	query_text=$("#input-main").val();
	if(query_text!="")
	{
		mygeneinfo.printJSON(query_text,20,"content");
	}
});

$("#pretty-extlib-json").click(function(){
	mygeneinfo.getJSON(query_text,20,function(data){
		$("#content").html(prettyPrint(data));
	});
});

$("#pretty-json").click(function(){
	query_text=$("#input-main").val();
	if(query_text!="")
	{
		mygeneinfo.printPrettyJSON(query_text,20,"content");
	}
});

});
