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
-	`<link href=”styles.css” rel=“stylesheet” />`
-	syntax
`css
selector {
    property: value;
    property: value;
}`
-	Bowser’s default styles -> external css (in a `<link>` tag) -> embedded `<style>` tag -> inline style (`style=”name:value;”`) -> `!important`

## Week2
### Elements
-	id provides a unique identifier for an element
-	class provides a general way of accessing certain elements
-	pseudo-classes: a:hover

### CSS box model
-	Each element: content, padding, border margin
-	Width = content width + L/R padding + L/R border + L/R margin
-	Height = content height + T/B padding + T/B border + T/B margin
-	Width: percentage or pixels (can apply max-width, min-width)
-	Float remove element from normal document flow
-	Need to clear element that follow a floating element

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
-	Always “use strict”

### IIFE:
-	Immediately invoked function expression
-	(function defining)();

### Anonymous functions:
-	no function name to display in stack trees
-	can’t refer to itself for recursion or unbinding and event handler

### Closure:
-	return

### Objects:
-	`var point = {x: 10, y: 20};`
-	`var point = {“x”: 10, “y”: 20};`
-	is a container of properties (`name: value` pairs)
-	Methods in Objects:
        -   (`methodName: functionName`)
        -   `Object.methodName()`
-	Adding properties:
    -   `Object.newProperty = newProperty`

### this:
-	Different from other programming languages
-	Refers to the containing object of the call-site of a function, not where the function is defined
-	Not eligible for this binding under “use strict”
Explicit binding:
-	[IMAGE]
-	Lost binding:
o
-	Explicit binding:
o
DOM
-	Document Object Model
o
BOM
-	Browser Object Model
-
-	window:
o	Top level object in BOM
o	Methods:
♣	Alert, confirm, prompt
♣	setInterval, setTimeout, clearInterval, clearTimeout
♣	open, close
♣	blur, focus, moveBy, moveTo, print, resizeBy, resizeTo, scrollBy, scrollTo
-	document:
o	Current page and its elements
o	Properties:
♣	Anchors, body, cookie, domain, forms, images, links, referrer, title, URL
o	Methods:
♣	getElementById
♣	getElementsByName
♣	getElementsByTagName
♣	close, open, write, writeln
-	Location:
o	URL of the current page
o	Properties:
♣	Host, hostname, href, pathname, port, protocol, search
o	Methods:
♣	Assign, reload, replace
-	Navigator
o	Information about the browser
o	Properties:
♣	appName, appVersion, browserLanguage, cookieEnabled, platform, userAgent
-	Screen:
o	Info about display screen
o	Properties:
♣	availHeight, availWidth, colorDepth, height, pixelDepth, width
-
Week4 JQuery & Ajax
JQuery
-	a library to make it easier to manipulate DOM
o	traversal
o	event handling
o	animation
o	Ajax
-	Syntax
o	$(selector).action()
o	$(“#id”), $(“.class”), $(“tag”)
o	$(“[attr]”) to select all elements with a certain attr
o	$(“[attr=value]”) to select all elements which attr = value
o	$(‘this’) to set current element
o	like CSS
-	actions
o	getter
♣	read the selection
♣	operate on the first element in the selection
o	setter
♣	change the selection
♣	operate on all elements in the selection (implicit iteration)
♣	return the selected element so they can be chained
-	Event delegation
o
Ajax
-	Asynchronized Javascript and XML
-	Name of a great person
-	An Ajax call:
1.	User interaction invoke an event handler
2.	Event handler create XMLHttpRequest obecjt
3.	XMLGrrpRequest object requests a page from server
4.	Server retrieves appropriate data based on the page requested and sent it back
5.	XMLHttpRequest object fires a callback when data arrives, often a callback function
6.	Callback event handler processes the data and updates the DOM accordingly
-

XML
-	usage
o	Webstore store data as XML files
o	Databases that return query results as XML
o	Web services that use XML to communicate
-	a universal format for exchange of data
-	can use schema or DTD to describe structure/markup
o	standardize integrity and interoperability
JSON
-	language independent convention for formatting data as a set of JS objects
-	value can include an ordered list of values (array)
Ajax and JSON
-	JSON.parse(string)
-	JSON.stringify(object)
Ajax and JQuery
-	$.ajax({
url: “url”,
data: {},
datatype: type,
success: function() {
	JQuery
}
		});

Week5: Forms and Validation, Cookies and Sessions
<form>
-	allow submission of data to the server
-	GET and POST
o	GET: best for small amounts of insecure data.
♣	Asks a server for a page or data
♣	Parameters are sent in URL query
(?name=value&name=value)
o	POST: large chunks or sensitive data
♣	Retrieves the server’s response
♣	Parameters are embedded in request’s HTTP packet
URL encoding
-	Special characters will be encoded for URL query
-	Automatically encoded by browser
File Upload
-	<input type=”file” name=”avatar”>
Form Validation
-	Ensuring the necessary values when the field is required
o	Preventing blank
o	Ensuring type of values
♣	Format and range
o	Ensuring confirmation fields fit together (retype password/email)
-	Approaches
o	HTML 5 validation
o	Client-side
o	Server-side
-	Provide appropriates and useful feedback on front-end to end-users
o	On-submit or on-the-fly
o	Static hints beside fields
o	Provide tooltips (on-hover tips)
o	Provide dynamic tips (shown as user interacts with a field)
Distinguishing human/machine
-	CAPTCHA

o	Completely Automated Public Turning test to tell computers and Humans Apart
o	Problems easy for humans to solve, but hard/impossible for computers to solve
o	Let to spam-sponsored CAPTCHA farms
-	reCAPTCHA
o	Put all that free labor to good use
o	Translate real words in images and archival texts
-	NoCAPTCHA
o	Ask to click a box (I am not a robot)

Cookies and Sessions
-	HTTP simply allows request a single document from a web server, doesn't remember or keep track of anything between invocations (short-lived)
-	Every resource that is accessed via HTTP is a single, one-off request with no threaded connection between them
-	Need:
o	A way to remember/track states
o	Uniquely identify each client from the server
o	A way of providing custom content for each client
-	Options:
o	Client mechanisms:
♣	Cookies
♣	Hidden Variables
♣	URL rewriting
♣	HTML5 local storage (HTTP 1.1)
o	Server mechanisms:
♣	Session
-	Cookies
o	Small piece of data sent by server to a browser, and sent back by browser on future page requests.
♣	Authentication
♣	User tracking
♣	Personalization: Maintain user preferences, shopping carts, etc.
o	Get/set cookie manually by:
♣	Document.cookie=””
♣	Cookies.set(“”, “”);
o	Keep track of state on the client
o	Mostly only visible to application
o	HttpOnly: don't allow Javascript to manipulate cookies (but still may be able to read them or learn of their existence)
o	Secure: Only send over HTTPS
o	Doesn’t seem to be best practices yet
o	Lifetime
♣	Session cookies by default are temporary cookie stored only in browser’s memory. Erased when browser closed.
•	Can’t be used for long-term tracking
•	Safer, because only the browser has access
♣	Persistent cookies are stored in a file on the browser’s computer and can track long-term info
•	Potentially less secure because users/programs can open cookie file, see/change cookie values
♣	Problems and Limitations
•	Browsers can disable cookies.
•	Users can delete and disable cookies.
•	Size limit / expiration policy
•	Security issue: stored in plaintext
•	Privacy issue: ID of the users
•	Not handling cookie expiry well
-	Hidden Variables
o	Store state info in webpages
o	Cross-browser support
o	For form-based apps only
♣	Change of URL losses the state
♣	Irrespective of what was submitted previously
-	URLS
o	Store state in the URL such that URL becomes a GET request
o	Supported by all browsers
o	Requires all URLs contain all state info
o	Current submitted page represents current state
o	Independent of what was done previously
o	Example
♣
-	Sessions:
o	A server-side option
o	Store the current states on the server
o	Each request includes a token identifying browser’s session
♣	Tokens can be passed via cookies, hidden variables, URL rewriting
♣	At each request, executing script uses the token to fetch the session state.
♣	##Session Hijacking
-	HTML5 local storage
o	Store data with no expiration date
o	localStorage.setItem(“lastname”, “Smith”);
o	localStorage,getItem(“lastname”);
