#Simple library for mygene.info in javascript.

The library has three basic functions for now.

	mygeneinfo.getJSON(query,limit,callback);
	mygeneinfo.printJSON(query,limit,container_id);
	mygeneinfo.printPrettyJSON(query,limit,container_id);

Check out demo code at <http://gkarthik.net/csb/geneinfo-jsclient/>.

External library for pretty view used in the demo is prettyPrint.js. 
Github repo - <https://github.com/padolsey/prettyPrint.js>

#Requirements
jQuery 1.9.1

#Implementation
Include the jQuery library and mygeneinfo.js in the head tag. 

	:::coffeescript
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="mygeneinfo.js"></script>

Then simply call the functions in your javascript file.

#Functions

##mygeneinfo.getJSON(query,limit,callback)

Function queries and retrieves JSON from http://mygene.info/ which can be stored or manipulated in a callback function.

query - The query statement. Syntax available at <http://mygene.info/>
limit - The number of rows to be retrieved.
callback - A call back function which is used to manipulate or store data retrieved

Example

	:::coffeescript
	mygeneinfo.getJSON(query_text,20,function(data){
		var foo = data;//data is the JSON object retrieved.
	});

##mygeneinfo.printJSON(query,limit,container_id);

Function queries and retrieves JSON from http://mygene.info/ and directly displays the raw JSON in a container of your choice.

query - The query statement. Syntax available at <http://mygene.info/>
limit - The number of rows to be retrieved.
container_id - The ID of the HTML element to show the raw JSON in.

Example

	:::coffeescript
	<script>
		mygeneinfo.printJSON(query_text,20,"content");
	</script>
	<div id="content"></div>

##mygeneinfo.printPrettyJSON(query,limit,container_id);

Function queries and retrieves JSON from http://mygene.info/ and displays a pretty version of the JSON in a container of your choice.

query - The query statement. Syntax available at <http://mygene.info/>
limit - The number of rows to be retrieved.
container_id - The ID of the HTML element to show the raw JSON in.

Example

	:::coffeescript
	<script>
		mygeneinfo.printPrettyJSON(query_text,20,"content");
	</script>
	<div id="content"></div>

Check out demo code at <http://gkarthik.net/csb/geneinfo-jsclient/>.
