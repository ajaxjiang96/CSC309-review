# CSC309 Review
## Week 1: HTML, CSS

### URL:
-	`scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]`

### HTML
-	Describe content and structure of a webpage.
-	Made up by elements marked by tags
    -  	`<element>[content]</element>`
    -	required tags
thirdLevel`<!DOCTYPE html>`
        -   `<html>`
thirdLevel`<body>`

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

## Week2: CSS, HTTP, Servers

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

## Week 3: Javascript and DOM

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
thirdLevel`alert`, `confirm`, `prompt`
        -   `setInterval`, `setTimeout`, `clearInterval`, `clearTimeout`
	    -   `open`, `close`
thirdLevel`blur`, `focus`, `moveBy`, `moveTo`, `print`, `resizeBy`, `resizeTo`, `scrollBy`, `scrollTo`
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
thirdLevel`assign`, `reload`, `replace`
-	`navigator`
    -   Information about the browser
    -   Properties:
        -   appName, appVersion, browserLanguage, cookieEnabled, platform, userAgent
-	`screen`
    -   Info about display screen
    -   Properties:
        -   `availHeight`, `availWidth`, `colorDepth`, `height`, `pixelDepth`, `width`
-   [IMAGE]

## Week 4: JQuery & Ajax

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
        -   From a file: `require(“./^^^.js”); // reads specified file`
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
        });
    myEmitter.emit('myEvent', 'arg1', 'arg2'); // like signal
    ```

### `express.js`
-   relatively thin layer on top of the base `node.js` functionality.
    ```javascript
    var express = require('express');
    var expressApp = express();
    expressApp.get('/', function (httpRequest, httpResponse) {
          httpResponse.send('hello world');
    });
    expressApp.listen(3000);
    ```
-   http methods:
    ```javascript
    expressApp.get(urlPath, requestProcessFunction);
    expressApp.post(urlPath, requestProcessFunction);
    expressApp.put(urlPath, requestProcessFunction);
    expressApp.delete(urlPath, requestProcessFunction);
    expressApp.all(urlPath, requestProcessFunction);
    ```
    -   Can contain parameters (e.g. `'/user/:user_id'`)
-   http `req` object
    -  `req` of  `expressApp.get('/user/:user_id', function (req, res)`
    -   `request.params` - Object containing URL rout params (e.g. `user_id`)
    -   `request.query` - Object containing query params (e.g `&foo=9` => `{foo: 9}`)
    -   `request.body` - Object containing the parsed body
    -   `request.get(field)` - Returns the value of the specified HTTP header field

-   http `res` object
    -   `res` of  `expressApp.get('/user/:user_id', function (req, res)`
    -   `res.write(content)` - Build up the response body with content
    -   `res.status(code)` - Set the HTTP status code of the reply
    -   `res.set(prop, value)` - set the response header property to value
    -   `res.end()` - End the request by responding it
    -   `res.send(content)` - Do write and End

## Week 7: Databases, MongoDB and Mongoose

### Relational Databases
-   collection of tables with rows and columns
-   Each row represents a record
-   Each column represents an attribute of the records contained in the table
-   Why
    -   Data safety
    -   Concurrent access
    -   Fault tolerance
    -   Data integrity
    -   Scalability
    -   Reporting

### ACID
-   Atomic
    -   All operations in a transaction complete, or none do
-   Consistent
    -   On completion of transaction, database is sound (?)
    -   Constraints of the database are applied and database is in a valid state
-   Isolated
    -   transactions don't interfere with each other
-   Durability
    -   results of a transaction are permanent even in the case of failures

### SQL
-   Structured Query Language
-   A special purpose programming language
-   Data definition, manipulation, and controls.
    -   Insert, Query, Update, delete
-   Schema creation and modification
-   Examples:
    -   SQLite
    -   MySQL
    -   PostgreSQL
    -   Access
    -   PointBase

-   Keys
    -   Primary Key: organize data around accesses
        -   Uniquely identifies a row in the table
    -   Secondary Key: Other columns that are having unique values
    -   Foreign Key: The Primary Key defined in another table

-   Schemas
    -   Define the structure of the database
        -   tables, column indices
    -   Needs to be defined before adding data
    -   Not great match with agile development approaches (Each new feature may require a schema change)
        -   Database migration allow incremental changes
    -   __NoSQL databases are built to allow the insertion of data without a predefined schema__

### NoSQL
-   Do not use relational model or SQLite
    -   Flexible schema
    -   Quicker/cheaper to setup
    -   Scalability
    -   No declarative query language -> more programming
    -   Relaxed consistency
        -   -> Higher performance and availability
        -   -> fewer guarantees
-   Document types apply a key to a "document" with a complex data structure
    -   Contain many different `key: value` pairs
    -   Use standard data format (e.g. JSON, HTML)
    -   Can be organized by collection, tags, etc.

### NoSQL vs Relational
-   Relational databases usually scale vertically
-   NoSQL databases usually support
    -   __auto-sharding__: natively and automatically store data across an arbitrary number of Servers
    -   __automatic replication__: High availability and disaster recovery without involving separate applications to manage these tasks
    -   __caching__: keep frequently used data in system memory and removing the need for a separate caching layer

### BASE
-   Basic Availability
    -   Most of the database  is available most of the time
-   Soft-state
    -   Stores don't have to be write consistent
-   Eventual consistency
    -   At some later point, data stores will be Consistent

### MongoDB
-   NoSQL database uses a JSON-like (BSON) document oriented model
-   Data is stored in collections (rather than tables)
    -   Dynamic schema
    -   Works with many programming languages
    -   Caching: Most recent kept in RAM.
    -   No transactions, but allows atomic operations.
-   BSON
    -   Binary JSON
    -   MongoDB encodes JSON documents in binary format behind the scenes
    -   Extends JSON to provide data types
-   Document validation provided within the database
-   Connect to MongoDB instance
    ```javascript
    mongoose.connect('mongodb://localhost/myproject');
    ```
-   wait for connection to Complete
    ```javascript
    mongoose.connection.on('open', function ()  {
       // Can start processing model fetch requests
    });
    mongoose.connection.on('error', function (err) { });
    ```
    -   Can also listen for connecting, connected, disconnecting, disconnected

#### schema
-   Defines collections
-   Types:
    -   String, Number, Data, Buffer, Boolean
    -   Array - e.g comments `[ObjectId]`
    -   ObjectID - reference to another object
    -   Mixed - anything

-   Defining:

    ```javascript
    var userSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        emailAddresses: [String],
        location: String
    });
    ```
-   Secondary indices
    -   faster query
    -   slower mutating operations: Add, delete, update must update indexes
    -   Uses more space
    -   When:
        -   Common queries spend a lot of time scanning
        -   Need to enforce uniqueness
-   Making model from schema

    ```javascript
    var User = mongoose.model('User', userSchema);
    ```
-   Making objects from model

    ```javascript
    User.create({ first_name: 'Amy', last_name: 'Pond'}, doneCallback);
    function doneCallback(err, newUser) {
        assert (!err);
        console.log('Created object with ID', newUser._id);
    }
    ```
-   Queries

    ```javascript
    User.find(function(err, users) {
        /* users is an array of objects */
    });
    User.findOne({key: value}, function(err, user) {
        /* user is an object */
    })
    User.findOne({key: value}, function(err, user) {
        // Update user object
        user.save();
    })
    ```

    ```javascript
    var query = User.find({});
    // Projection
    query.select("first_name last_name")
          .exec(doneCallback);
    // Sorting
    query.sort("first_name").exec(doneCallback);
    //Limits
    query.limit(50).exec(doneCallback);
    query.sort("-location");
    ```
    ```javascript
    // Deleting one
    User.remove({_id: user_id}, function (err) { } );
    // Deleting all
    User.remove({}, function (err) { } );
    ```

#### CRUD
-   Create, Read, Update, delete
-   Simpler access model than SQL

#### Mongoose
-   Object Definition Language (ODL)

### Web Architectures
-   Higher level structures underlying a web app
-   Made up of elements, their properties and relationships among elements

#### n-tier
-   separate the components of a web app into different tiers of layers
-   Components:
    -   presentation: the static or dynamically generated content rendered by the browser (front-end)
    -   processing logic: dynamic content processing and generation, e.g. using node.js, PHP, Java EE, ASP.NET
    -   data management: database, comprising data sets and data management system (back-end)
-   __1-tier__
    -   All three layers are on the same machine and presentation, logic and data are tightly connected
    -   Scalability: single processor, no separation, hard to scale
    -   Portability: Moving to a new machine, or changing anything may mean major re-writes.
    -   Maintenance: Changing one layer requires changing other layers
-   __2-tier__
    -   Database runs on a separated server
    -   Presentation and logic layers are tightly coupled
    -   Can easily switch to a different Database
    -   Coupling of presentation and logic can lead to heavy server load and network congestion
-   __3-tier__
    -   Each tier is separate with a clear interface between them
    -   Each tier can potentially run on a different machine
    -   client-server
    -   unconnected tiers should not communicate (_in our project, client never communicates with database server directly_)
    -   change in platform affects only that tier
-   Presentation Layer
    -   user interface and Interactions
    -   client-view or front-end
    -   should not contain business logic or data access code
-   Logic Layer
    -   Set of rules for processing the data and accommodates many individual users
    -   No Presentation or access code
-   Data Layer
    -   Physical storage for data Persistence
    -   Manages access to the DB or file system
    -   Also called back-end
-   __Benifites__
    -   Easier Maintenance
    -   Reusable Components
    -   Faster development

#### MVC
-   Model View Controller
    -   User uses Controller
    -   Controller manipulates Model
    -   Model updates View
    -   View seen by User
-   __Model__ manages application state by responding to reqs for info about its __state__ (from view) or instructions to __change state__ (from controller)
    -   Database
    -   Session info
    -   rules governing transaction
-   __View__ renders the model into a form suitable for __interaction__ (UI). Multiple views can exist for a single model give different contexts
    -   front-end website (HTML, CSS, and server-side templates)
-   __Controller__ receives user input and initiates a response by making updates to the __state__ of objects in the model and __selecting__ a view for the response
    -   Client-side scripting that manages __user interactions__, HTTP __request__ processing and business __logic__ preprocessing
-   Benefits:
    -   Clarity of design
    -   Separation of concerns
    -   Parallel development
    -   Distributable

#### 3-tier vs MVC
-   communication
    -   3-tier:
        -   Presentation Layer never communicates directly with data layer (only through logic layer)
    -   MVC
        -   All layers communicate directly
-   Usage
    -   3-tier
        -   Client, middleware and data tiers are on physically separate platforms
    -   MVC
        -   model, view and controller are together

## Week 8: React
## Week 9: review, templates

### Templates

-   Mustache, Pug (Jade), EJS, Handlebars, (Our project used nunjucks)...
-   Move Javascript out of HTML
-   Separate logic and display
-   Create a readable, maintainable language to write views
-   Modularize views to reuse pieces
-   User variables in HTML

## Week 10: Security

### Security

-   Goals
    -   Confidentiality
    -   integrity
    -   availability
-   Risks
    -   Financial
    -   Reputation
    -   physical
-   Threats
    -   Insiders
    -   Criminals
    -   Commercial competitors
    -   Nation-states
    -   Law Enforcement
    -   Vandals

### Attacks

-   Directly on system:
    -   Stealing data, passwords, credit card Number
    -   defacing, DOS (denial of service), link spam
-   On users
    -   cross site scripting, request forgery (CSRF), Man-In-The-Middle (MITM), profiling
-   Both
    -   Hosting bad content, "drive-by download"
-   Neither
    -   Ad-based malware

### Transport Layer Security (TLS)

-   Security mechanism underlying HTTPS
-   Often called SSL
-   Client and server use public-key encryption on shared per-session secret, then use secret to encrypt session data

### Authentication
-   Always store passwords salted & hashed, use trusted algorithms (_we used passport in our project_)

### Injection
SQL Injection:
-   Example 1
    ```Java
    String query = "SELECT * FROM accounts WHERE custID='" + request.getParameter("id") + "'";
    ```
    With a input of ```foo' or 'x'='x``` will form
    ```Java
    String query = "SELECT * FROM accounts WHERE custID=' foo' or 'x'='x '";
    ```
    Which returns all customer information.
-   Example 2
    ```SQL
    SELECT email, passwd, login_id, full_name
    FROM members
    WHERE email = '?';
    ```
    When replacing `?` with `x';UPDATE membersSET email = 'steve@unixwiz.net' WHERE email = ‘bob@example.com` will result
    ```SQL
    SELECT email, passwd, login_id, full_name
    FROM members
    WHERE email = 'x';
        UPDATE members
        SET email = 'steve@unixwiz.net'
        WHERE email = 'bob@example.com';
    ```
    Which replaces original email information with `'steve@unixwiz.net'`.

Prevention:
-   User parameterized Queries
-   Escape everything
-   Validate input
-   Never trust raw input

### Auth and Sessions
Vulnerabilities
-   User credentials not stored using hashing or encryption
-   Credentials can be guessed or overwritten
-   Session IDs exposed in URL
-   Session IDs don't timeout
-   Auth tokens not invalidated on log out
-   Passwords, session IDs sent over unencrypted Connections

#### OAuth
-   Auth framework that delegates user authentication to a service that hosts the user account
-   Must register app with the auth service, including the URL to redirect to
-   Auth service redirects to a registered URL with an authorization code
-   ![OAuth](/assets/images/OAuth.png)

### Cross-Site scripting
-   Data enters web application and is included in dynamic content sent to a web user without being validated for malicious content.
-   Usually JS but may also include HTML and other Data
-   Types (3):
    -   stored
        -   injected script is permanently stored on server
    -   reflected
    -   DOM-based

Prevention:
-   Escape all untrusted data

### Insecure Direct Object reference
-   Attacker is an authorized user
-   Attacker can gain access to objects by guessing parameters

Prevention:
-   Ensure user is authorized for access

### Security Misconfiguration
-   Software out of date
-   Unnecessary features enabled
-   default accounts and passwords still enabled / unchanged
-   error handling reveal stack traces or overly informative error messages sent to users
-   Security settings in development frameworks not set to secure values

### Sensitive Data Exposure
Sensitive data:
-   passwords
-   credit cards
-   personal info

Prevention:
-   Encrypt all sensitive data

### Missing Function Level Access Control
-   Modify URL to gain unauthorized Access
-   Internal ids appear in URLs

Prevention:
-   Check access authorization on every object
-   Not sufficient to simply not show privileged operations to unprivileged users in the UI

### Cross-Site Request forgery
-   Some Content on unrelated site includes a POST to app
-   If a user of the app navigates to compromised site while logged into the app, malicious POST request can pretend to be the user and steal the user's info from app

Prevention:
-   Include unpredictable token with each HTTP request (usually in a hidden field)

### Using Components with known security Vulnerabilities
-   Dev team / Dev Ops people must be vigilant
-   Be careful what you include in your app
-   Update software always

### Unvalidated redirects and Forwards
Apps user redirects or internal forwards where unvalidated parameters are used

## Promises
-   Callback function have been the main mechanism for managing asynchronous programming
-   Callbacks can be hard to trance and reason about
-   Promises are a different type of abstraction for managing asynchronous programming

### Terminology
-   Promise is an object or function with a `then` method whose behavior confirms its specification
-   thenable is an object or function that defines a then method
-   value is any legal JS value
-   exception is a value that is thrown using the throw statement
-   reason is a value that indicates why a promise was rejected
-   States: pending, fulfilled, rejected
-   settled: fulfilled or rejected

#### `.then`
-   Registers a callback to receive either a promise's eventual value, or the reason it cannot be fulfilled
-   returns a promise

    ```Javascript
    myPromise.then(handleResolve, handleReject);
    function handleResolve(data) {
        //handle success
    }
    function handleReject(error) {
        //handle failure
    }
    ```
