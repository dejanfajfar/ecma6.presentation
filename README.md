# ecma6.presentation

![ECMA6](/styles/es6_logo.jpg)

To give you a running start into the great new world of ECMA script 6 and some of the new features introduced.

Not all new features are listed and those that are are not cowered in full detail.

This is an instructional presentation aimed at developers with somewhat of a web background that want to get up to speed.

# What is covered

In the presentation the following are covered:

* let
* const
* Template strings
* for..of
* Default parameters
* Spread parameters
* Rest parameters
* Destructuring
* Arrow functions
* Classes
* Generators
* Promises
* Map
* Set
* Symbols

# Code samples

Working code samples can be found in the __samples__ folder.

To execute them use nodejs console executor:

	$ node let.js

In which case _let.js_ demonstrates the advantage and usage of the __let__ keyword.

## Missing support

At the time of writing some features are still not supported even if enabling the experimental "stuff" in nodeJs. 

So before you get frustrated please check if the feature in the sample is even compatible with your environment.

[ECMA6 compatibility table](https://kangax.github.io/compat-table/es6/)

# Get it running

Before we can get the presentation running locally we have to be aware of the fact that this presentation is 
actually a web page that acts like a presentation.

Clone the git repository

    $ git clone https://github.com/dejanfajfar/ecma6.presentation.git .

Use __jspm__ to resolve all dependencies

    $ jspm install

## Get the files to the browser

I have found that the easiest way to get the files served the files is with [local web server](https://www.npmjs.com/package/local-web-server)

Install it using

	$ npm i local-web-server

# Honorable mentions

This presentation is made possible with the following frameworks:

* [reveal-js](http://lab.hakim.se/reveal-js/#/)
* [jspm](http://jspm.io/)
* [prismjs](http://prismjs.com/)
* [lesscss](http://lesscss.org/)