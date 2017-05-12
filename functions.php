<?php

function met_enqueue_css()
{
	
  $the_theme = wp_get_theme();

	wp_enqueue_style('montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:400,700', false );
	wp_enqueue_style('font-awesom', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css', false );
  
	wp_enqueue_style('open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans', false );
	 
  wp_enqueue_style('theme-core', get_template_directory_uri() . '/dist/css/main.css?v=' . $the_theme->get( 'Version' ), false  );

}

function met_enqueue_scripts()
{	
  
  $the_theme = wp_get_theme();
  
	wp_register_script('theme-vendor-js', get_template_directory_uri() . '/dist/js/vendor.js?v=' . $the_theme->get( 'Version' ), array('jquery'), null, true);


	wp_register_script('theme-app-js', get_template_directory_uri() . '/dist/js/vue-app.js?v=' . $the_theme->get( 'Version' ), array('jquery'), null, true);


  wp_enqueue_script( 'theme-vendor-js' );
  wp_enqueue_script( 'theme-app-js' );

}


add_action('wp_enqueue_scripts', 'met_enqueue_css', 10);

add_action('wp_enqueue_scripts', 'met_enqueue_scripts', 20);

