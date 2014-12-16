/*
 * jQuery lazyImage plugin
 *
 * Copyright (c) 2014 Christian Witte
 * licensed under MIT license.
 *
 * https://github.com/...
 *
 * Version: 0.9a
 * 
 * Licensed under MIT license.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial 
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

	$.fn.LazyImage = function( options )
	{
		new LazyImage( this, options );
	}
	
	LazyImage = function( selector, options )
	{
		this.init( selector, options );
	}
	
	$.extend( LazyImage.prototype,
	{
		init : function( selector, options )
		{
			this.selector = $( selector );
			this.options = $.extend(
			{
				classLoading: "esKju-lazyimage",
				classLoaded: "esKju-lazyimage-loaded",
				classBroken: "esKju-lazyimage-broken",
				applyDimensions: true,
				createParentContainers: true,
				parentContainerHtml: "<div></div>",
				animation: "fade",
				filter: "bloom"
			}, options );
			
			this.bindImages();
		},
		
		applyAnimation : function( obj )
		{
			switch( this.options.filter )
			{
				case "bloom":
					$( obj ).addClass( "esKju-lazyimage-filter-bloom" );
					break;
			}
			
			switch( this.options.animation )
			{
				case "fade":
					break;
					
				case "translate":
					$( obj ).addClass( "esKju-lazyimage-translate" );
					break;
					
				case "zoom":
					$( obj ).addClass( "esKju-lazyimage-zoom" );
					break;
					
				case "skew":
					$( obj ).addClass( "esKju-lazyimage-skew" );
					break;
			}
		},
		
		bindImages : function()
		{
			var $this = this;
			
			this.selector.each( function( key, obj )
			{
				obj = $this.createParentContainers( obj );
				$this.applyDimensions( obj );
				$this.applyAnimation( obj );
				
				obj = $( $( obj ).find( "img" ) );
				
				obj.one( "load", function( )
				{
					$this.loaded( obj );
				} ).each( function( )
				{
					if( this.complete )
					{
						$( this ).load( );
					}
				} );
				
				$( obj ).error( function( )
				{
					$this.error( obj );
				} );
			} );
		},
		
		createParentContainers : function( obj )
		{
			if( this.options.createParentContainers )
			{
				if( $( obj ).prop( "tagName" ) == "IMG" )
				{
					$( obj ).removeClass( this.options.classLoading );
					
					newElement = $( this.options.parentContainerHtml );
					newElement.addClass( this.options.classLoading );
					newElement.append( $( obj ).clone( ) );
					
					$( obj ).replaceWith( newElement );
					
					return newElement;
				}
			}
			
			return obj;
		},
		
		applyDimensions : function( obj )
		{
			if( this.options.applyDimensions )
			{
				imageWidth = $( $( obj ).find( "img" ) ).width( );
				imageHeight = $( $( obj ).find( "img" ) ).height( );
				
				$( obj ).css({
					width: imageWidth,
					height: imageHeight
				});
			}
		},
		
		loaded : function( obj )
		{
			$( obj.parent( ) ).addClass( this.options.classLoaded );
		},
		
		error : function( obj )
		{
			$( obj.parent( ) ).addClass( this.options.classBroken );
			$( obj.parent( ) ).removeClass( this.options.classLoaded );
		}
	});