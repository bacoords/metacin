<?php


/**
 * Register a custom post type called "book".
 *
 * @see get_post_type_labels() for label keys.
 */
function met_custom_post_types_init() {
  
  
  //Music POst Type
    $music_labels = array(
        'name'                  => _x( 'Albums', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'Album', 'Post type singular name', 'textdomain' ),
        'menu_name'             => _x( 'Albums', 'Admin Menu text', 'textdomain' ),
        'name_admin_bar'        => _x( 'Album', 'Add New on Toolbar', 'textdomain' ),
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New Album', 'textdomain' ),
        'new_item'              => __( 'New Album', 'textdomain' ),
        'edit_item'             => __( 'Edit Album', 'textdomain' ),
        'view_item'             => __( 'View Album', 'textdomain' ),
        'all_items'             => __( 'All Albums', 'textdomain' ),
        'search_items'          => __( 'Search Albums', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent Albums:', 'textdomain' ),
        'not_found'             => __( 'No Albums found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No Albums found in Trash.', 'textdomain' ),
        'featured_image'        => _x( 'Album Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'archives'              => _x( 'Album archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
        'insert_into_item'      => _x( 'Insert into Album', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this Album', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
        'filter_items_list'     => _x( 'Filter Albums list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
        'items_list_navigation' => _x( 'Albums list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
        'items_list'            => _x( 'Albums list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
    );
 
    $music_args = array(
        'labels'             => $music_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'music' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-admin-media',
        'show_in_rest' => true,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' ),
    );
 
    register_post_type( 'music', $music_args );
  
  
  // Art Post Type
      $gallery_labels = array(
        'name'                  => _x( 'Art Pieces', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'Art Piece', 'Post type singular name', 'textdomain' ),
        'menu_name'             => _x( 'Art Pieces', 'Admin Menu text', 'textdomain' ),
        'name_admin_bar'        => _x( 'Art Piece', 'Add New on Toolbar', 'textdomain' ),
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New Art Piece', 'textdomain' ),
        'new_item'              => __( 'New Art Piece', 'textdomain' ),
        'edit_item'             => __( 'Edit Art Piece', 'textdomain' ),
        'view_item'             => __( 'View Art Piece', 'textdomain' ),
        'all_items'             => __( 'All Art Pieces', 'textdomain' ),
        'search_items'          => __( 'Search Art Pieces', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent Art Pieces:', 'textdomain' ),
        'not_found'             => __( 'No Art Pieces found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No Art Pieces found in Trash.', 'textdomain' ),
        'featured_image'        => _x( 'Art Piece Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'archives'              => _x( 'Art Piece archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
        'insert_into_item'      => _x( 'Insert into Art Piece', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this Art Piece', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
        'filter_items_list'     => _x( 'Filter Art Pieces list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
        'items_list_navigation' => _x( 'Art Pieces list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
        'items_list'            => _x( 'Art Pieces list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
    );
 
    $gallery_args = array(
        'labels'             => $gallery_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'gallery' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-admin-media',
        'show_in_rest' => true,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' ),
    );
 
    register_post_type( 'gallery', $gallery_args ); 
  
  // Event Post Type
      $event_labels = array(
        'name'                  => _x( 'Events', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'Event', 'Post type singular name', 'textdomain' ),
        'menu_name'             => _x( 'Events', 'Admin Menu text', 'textdomain' ),
        'name_admin_bar'        => _x( 'Event', 'Add New on Toolbar', 'textdomain' ),
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New Event', 'textdomain' ),
        'new_item'              => __( 'New Event', 'textdomain' ),
        'edit_item'             => __( 'Edit Event', 'textdomain' ),
        'view_item'             => __( 'View Event', 'textdomain' ),
        'all_items'             => __( 'All Events', 'textdomain' ),
        'search_items'          => __( 'Search Events', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent Events:', 'textdomain' ),
        'not_found'             => __( 'No Events found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No Events found in Trash.', 'textdomain' ),
        'featured_image'        => _x( 'Event Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'archives'              => _x( 'Event archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
        'insert_into_item'      => _x( 'Insert into Event', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this Event', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
        'filter_items_list'     => _x( 'Filter Events list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
        'items_list_navigation' => _x( 'Events list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
        'items_list'            => _x( 'Events list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
    );
 
    $event_args = array(
        'labels'             => $event_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'events' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-admin-media',
        'show_in_rest' => true,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' ),
    );
 
    register_post_type( 'event', $event_args );
}
 
add_action( 'init', 'met_custom_post_types_init' );