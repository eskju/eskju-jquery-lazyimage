# esKju's jQuery lazyImage Plugin

## What is it?

EsKju's LazyImage is a tool for fading images once loaded.
It was built using the jQuery library. Licensed under MIT and GPL licenses.

## Features

+ Useable as a preloader
+ Customizable trough settings and CSS
+ Highly compatible
+ Uses CSS3 transitions by default

## How to use

### 1. doctype

Make sure you are using valid DOCTYPE. This is required for LazyImage to look and function correctly.

```
<!DOCTYPE html>
```

### 2. include files

Loading jQuery from CDN (Content Delivery Network) is recommended.
Include all lazyImage JavaScript and CSS files in addition.

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/eskju.jquery.lazyimage.js"></script>
<link rel="stylesheet" href="css/eskju.jquery.lazyimage.css" />
```

### 3. html markup

```
Create a HTML container.
<div id="example1">
	<div class="esKju-lazyimage">
		<!-- Pay attention to correct width and height definition -->
		<img src="http://placekitten.com/g/300/200" width="300" height="200" alt="My Demo Image" />
	</div>
</div>
```

Or ensure you enabled the `createParentContainers` option and use:

```
<div id="example1">
	<!-- Pay attention to correct width and height definition -->
	<img class="esKju-lazyimage" src="http://placekitten.com/g/300/200" width="300" height="200" alt="My Demo Image" />
</div>
```

###4. fire plugin using jquery selector

If you are not familiar with jQuery, please, read this tutorial for beginners.
Sample examples:

```
$( document ).ready( function( )
{
	$( ".esKju-lazyimage" ).LazyImage(
	{
		// your options
	});
} );
```

## Author & Help

For more information visit the author's page:

+ <http://www.cwdesigns.de> esKju's Playground
+ <http://www.cwdesigns.de/eskju-jquery-lazyimage.html> esKju's LazyImage Project Page
