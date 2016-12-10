# CSC309 Review
## Week 1

### URL:
-	`scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]`

### HTML
-	Describe content and structure of a webpage.
-	Made up by elements marked by tags
    -  	`<element>[content]</element>`
    -	required tags
        -	`<!DOCTYPE html>`
        -   `<html>`
        -	`<body>`

### HTML5
-	Designed to support modern multimedia

### CSS
-	Describe appearance, layout and presentation of info
-	Describe how info is to be displayed
-	`<style> or separate .css file`
-	`<link href="styles.css" rel="stylesheet" />`
-	syntax
`css
selector {
    property: value;
    property: value;
}`
-	Bowser's default styles -> external css (in a `<link>` tag) -> embedded `<style>` tag -> inline style (`style="name:value;"`) -> `!important`

## Week2
### Elements
-	id provides a unique identifier for an element
-	class provides a general way of accessing certain elements
-	pseudo-classes: a:hover

### CSS box model
-	Each element: content, padding, border margin
-	`width` = content width + L/R padding + L/R border + L/R margin
-	`height` = content height + T/B padding + T/B border + T/B margin
-	`width`: percentage or pixels (can apply max-width, min-width)
-	`float`: remove element from normal document flow
-	Need to `clear` element that follow a floating element

### HTTP
-	Protocols:
    -   Application layer: FTP, HTTP, SSH, IMAP
    -   Transport Layer: TCP, UDP
    -   Internet Layer: IP
    -   Link Layer: Ethernet, Wi-Fi
-	IP:
    -   Connectionless protocol
    -   Transfer packets from source address to dest
-	TCP/IP:
    -   TCP: Transmission Control Protocol
        -   Connection Oriented
        -   Reliable
-	Application Layer Protocols
    -   One piece of an app
    -   Defines messages exchanged by apps
    -   Uses services provided by lower layer protocols
    -   Application:
        -   Running on network hosts in user space
        -   Exchange messages to implement app
-	API:
    -   Application programming interface
    -   Define interface between application and transport layer
    -   Socket:
        -   Send, receive
-	HTTP:
    -   Hypertext Transfer Protocol
    -   Sits on top of TCP
    -   Transfer objects between client and server
    -   Process:
        -   http client initiates TCP connection on http server
        -   http server accepts the connection, notify client
        -   client sends http request message into TCP socket
        -   http server receives request message, form response message and sends into socket
    -   HTTP is stateless:
        -   Does not maintain status info across client reqs
        -   No way to correlate multiple req from some user
        -   Protocols that maintain state are complex
        -   History must be maintained
        -   If server of client crashes, their view of state may be inconsistent and must be reconciled.
-	Simple server

## Week3 Javascript and DOM

### Javascript:
-	Not related to java
-	Always `"use strict"`

### IIFE:
-	Immediately invoked function expression
-	`(function defining)();`

### Anonymous functions:
-	no function name to display in stack trees
-	can't refer to itself for recursion or unbinding and event handler

### Closure:
-	`return`

### Objects:
-	`var point = {x: 10, y: 20};`
-	`var point = {"x": 10, "y": 20};`
-	is a container of properties (`name: value` pairs)
-	Methods in Objects:
        -   (`methodName: functionName`)
        -   `Object.methodName()`
-	Adding properties:
    -   `Object.newProperty = newProperty`

### this:
-	Different from other programming languages
-	Refers to the containing object of the call-site of a function, not where the function is defined
-	Not eligible for this binding under `"use strict"`

### Explicit binding:
-	[IMAGE]
-	Lost binding:
    -   [IMAGE]
-	Explicit binding:
    -   [IMAGE]

### DOM
-	Document Object Model
-   [IMAGE]

### BOM
-	Browser Object Model
-   [IMAGE]
-	`window`
	-   Top level object in BOM
    -  	Methods:
        -	`alert`, `confirm`, `prompt`
        -   `setInterval`, `setTimeout`, `clearInterval`, `clearTimeout`
	    -   `open`, `close`
        -	`blur`, `focus`, `moveBy`, `moveTo`, `print`, `resizeBy`, `resizeTo`, `scrollBy`, `scrollTo`
-	`document`:
	-   Current page and its elements
    -	Properties:
	    -   anchors, body, cookie, domain, forms, images, links, referrer, title, URL
    -   Methods:
	    -   `getElementById`
	    -   `getElementsByName`
	    -   `getElementsByTagName`
	    -   `close`, `open`, `write`, `writeln`
-	`location`:
    -	URL of the current page
    -	Properties:
	    -   host, hostname, href, pathname, port, protocol, search
    -	Methods:
        -	`assign`, `reload`, `replace`
-	`navigator`
    -   Information about the browser
    -   Properties:
        -   appName, appVersion, browserLanguage, cookieEnabled, platform, userAgent
-	`screen`
    -   Info about display screen
    -   Properties:
        -   `availHeight`, `availWidth`, `colorDepth`, `height`, `pixelDepth`, `width`
-   [IMAGE]

## Week4 JQuery & Ajax
### JQuery
-	a library to make it easier to manipulate DOM
    -   traversal
    -   event handling
    -   animation
    -   Ajax
-	Syntax
    -  ` $(selector).action()`
    -   `$("#id")`, `$(".class")`, `$("tag")`
    -   `$("[attr]")` to select all elements with a certain `attr`
    -   `$("[attr=value]")` to select all elements which attr = value
    -   `$('this')` to set current element
    -   like CSS
-	actions
    -   getter
        -   read the selection
        -   operate on the first element in the selection
    -   setter
        -   change the selection
        -   operate on all elements in the selection (implicit iteration)
        -   return the selected element so they can be chained
-	Event delegation
        -   [IMAGE]

### Ajax
-	Asynchronized Javascript and XML
-	Name of a great person
-	An Ajax call:
    1.	User interaction invoke an event handler
    2.	Event handler create XMLHttpRequest obecjt
    3.	XMLGrrpRequest object requests a page from server
    4.	Server retrieves appropriate data based on the page requested and sent it back
    5.	XMLHttpRequest object fires a callback when data arrives, often a callback function
    6.	Callback event handler processes the data and updates the DOM accordingly
-   [IMAGE]

### XML
-	usage
-	Webstore store data as XML files
    -   Databases that return query results as XML
    -   Web services that use XML to communicate
-	a universal format for exchange of data
-	can use schema or DTD to describe structure/markup
    -   standardize integrity and interoperability

### JSON
-	language independent convention for formatting data as a set of JS objects
-	value can include an ordered list of values (array)
Ajax and JSON
-	JSON.parse(string)
-	JSON.stringify(object)

### Ajax and JQuery
```Javascript
$.ajax({
    url: "url",
    data: {},
    datatype: type,
    success: function() {
	       JQuery
       }
});
```

## Week5: Forms and Validation, Cookies and Sessions

### `<form>`
-	allow submission of data to the server
-	GET and POST
    -   GET: best for small amounts of insecure data.
        -   Asks a server for a page or data
        -   Parameters are sent in URL query (`?name=value&name=value`)
    -   POST: large chunks or sensitive data
        -   Retrieves the server's response
        -   Parameters are embedded in request's HTTP packet

### URL encoding
-	Special characters will be encoded for URL query
-	Automatically encoded by browser

### File Upload
-	`<input type="file" name="avatar">`

### Form Validation
-	Ensuring the necessary values when the field is required
    -   Preventing blank
    -   Ensuring type of values
        -   Format and range
    -   Ensuring confirmation fields fit together (retype password/email)
-	Approaches
    -   HTML 5 validation
    -   Client-side
    -   Server-side
-	Provide appropriates and useful feedback on front-end to end-users
    -   On-submit or on-the-fly
    -   Static hints beside fields
    -   Provide tooltips (on-hover tips)
    -   Provide dynamic tips (shown as user interacts with a field)

### Distinguishing human/machine
-	CAPTCHA
    -   Completely Automated Public Turning test to tell computers and Humans Apart
    -   Problems easy for humans to solve, but hard/impossible for computers to solve
    -   Let to spam-sponsored CAPTCHA farms
-	reCAPTCHA
    -   Put all that free labor to good use
    -   Translate real words in images and archival texts
-	NoCAPTCHA
    -   Ask to click a box (I am not a robot)

### Cookies and Sessions
-	HTTP simply allows request a single document from a web server, doesn't remember or keep track of anything between invocations (short-lived)
-	Every resource that is accessed via HTTP is a single, one-off request with no threaded connection between them
-	Need:
    -   A way to remember/track states
    -   Uniquely identify each client from the server
    -   A way of providing custom content for each client
-	Options:
    -   Client mechanisms:
        -   Cookies
        -   Hidden Variables
        -   URL rewriting
        -   HTML5 local storage (HTTP 1.1)
    -   Server mechanisms:
        -   Session
-	Cookies
    -   Small piece of data sent by server to a browser, and sent back by browser on future page requests.
        -    Authentication
        -    User tracking
        -    Personalization: Maintain user preferences, shopping carts, etc.
    -   Get/set cookie manually by:
        -    `document.cookie=""`
        -    `Cookies.set("", "");`
    -   Keep track of state on the client
    -   Mostly only visible to application
    -   HttpOnly: don't allow Javascript to manipulate cookies (but still may be able to read them or learn of their existence)
    -   Secure: Only send over HTTPS
    -   Doesn't seem to be best practices yet
    -   Lifetime
        -    Session cookies by default are temporary cookie stored only in browser's memory. Erased when browser closed.
    -   Can't be used for long-term tracking
    -   Safer, because only the browser has access
        -    Persistent cookies are stored in a file on the browser's computer and can track long-term info
    -   Potentially less secure because users/programs can open cookie file, see/change cookie values
        -    Problems and Limitations
    -   Browsers can disable cookies.
    -   Users can delete and disable cookies.
    -   Size limit / expiration policy
    -   Security issue: stored in plaintext
    -   Privacy issue: ID of the users
    -   Not handling cookie expiry well
-	Hidden Variables
    -    Store state info in webpages
    -    Cross-browser support
    -    For form-based apps only
        -    Change of URL losses the state
        -    Irrespective of what was submitted previously
-	URLS
    -    Store state in the URL such that URL becomes a GET request
    -    Supported by all browsers
    -    Requires all URLs contain all state info
    -    Current submitted page represents current state
    -    Independent of what was done previously
    -    Example
        -   [IMAGE]
-	Sessions:
    -    A server-side option
    -    Store the current states on the server
    -    Each request includes a token identifying browser's session
        -    Tokens can be passed via cookies, hidden variables, URL rewriting
        -    At each request, executing script uses the token to fetch the session state.
        -    ##Session Hijacking
-	HTML5 local storage
    -    Store data with no expiration date
    -    `localStorage.setItem("lastname", "Smith");`
    -    `localStorage,getItem("lastname");`
-	session storage
    -	store data for one session (lost when browser tab is closed)

## Week 6: REST, NODE, Express
### REST
-	REpresentational State Transfer
-	Architectural style for using HTTP to provide resources over the web
-	Focus on roles and actions
-	Uniquely access resources through URLs
-	Use GET, POST, PUT, DELETE
-	User standard data format: HTML, XML, JSON
-	Stateless protocol
-	Benefits
    -   Performance (light weight)
    -   Scalability due to client-server separation
    -   Simplicity (nouns and verbs)
    -   Visibility of communication
    -   Portability (platform independent)
    -   Reliability at the system level
-	REST verbs
    -   `GET`: Read a specific resource (by identifier)
    -   `PUT`: Update or create a specific resource (by identifier)
    -   `DELETE`: Remove a specific resource
    -   `POST`: Create or Update a resource
    -   Need two basic URLs per resource:
        -   Collection of items in the resource
        -   Select a resource
-	RESTful API design
    -   Use logical URLs that are human-understandable and don't point to a file
    -   If dealing with a lot of data provide a paging mechanism
    -   Document everything and provide instructions
    -   Use POST (not GET) to make a change
    -   Provide multiple output data formats (JSON, XML, CSV, RSS. HTML)
    -   Use authentication if your API allows change/deletion/adding
-	Server-side
    -   Process HTTP requests, and output a combination of HTML, JSON, JS to client

### `node.js`
-	event-driven, I/O model-based runtime environment and library for developing server-side web apps using JS.
-	Threads
-	Event
    -   Event Queue
        -   Inner loop
```Javascript
while (true) {
        if (!eventQueue.notEmpty()) {
            eventQueue.pop().call();
        }
}
```
-	Get the same JS on browser and server
-	Don't need DOM on the server
-	Add events and an event queue, everything runs as a call from event loop. (See above)
-	Make event interface to all OS operations (???)
    -   Wrap all OS blocking calls
    -   Add some data handling support
-	Add a proper module system
    -   Each module gets its own scope
-	Module
    -   Import with:
        -   System module: `require(“module name”); // looks in nodes_module`
        -   From a file: `require(“./***.js”); // reads specified file`
        -   From a directory: `require(“./myModule”); // reads myModule/index.js`
    -   Modules have private scope
    -   Require returns what is assigned to module.exports
    -   Many standard Node modules
    -   Huge library of module (`npm`)
    -   We use:
        -   Express (framework)
        -   Mongoose (MongoDB object modeling)
-	`npm`
    -   `npm init`
        -   creates package.json
    -  ` npm install module –save`
        -   for any new modules you wanna install
-	`.gitignore`
    -   ignore files for git
-	Programming with events/callbacks
    -   Threads: Blocking/waiting is transparent
	```Javascript
	r1 = step1();
	console.log('step1 done', r1);
	r2 = step2(r1);
	console.log('step2 done', r2);
	r3 = step3(r2);
	console.log('step3 done', r3);
	console.log('All Done!');
	```
    -   Events: Blocking/waiting requires callback
	```javascript
	step1(function(r1) {
		console.log('s1 done', r1);
		step2(r1, function (r2) {
		    console.log('s2 done', r2);
		    step3(r2, function (r3) {
			console.log('s3done',r3);
			console.log('All Done!');
		    });
		});
	    });
	```
-   Listener/emitter pattern
    -   When programming with events, a listener/emitter is used.
    -   Listener - Function to be called when the event is signaled
    -   Emitter - Signal that an event has occurred
```Javascript
    var events = require('events');
    var myEmitter = new events.eventEmitter();
    myEmitter.on('myEvent', function(param1, param2) {
     console.log('myEvent occurred with ' + param1 + 'and' + param2 + '!'); // like wait
    myEmitter.emit('myEvent', 'arg1', 'arg2'); // like signal
```
