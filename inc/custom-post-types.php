<?php


/**
 * Register a custom post type called "book".
 *
 * @see get_post_type_labels() for label keys.
 */
function met_custom_post_types_init() {
    $music_labels = array(
        'name'                  => _x( 'Musics', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'Music', 'Post type singular name', 'textdomain' ),
        'menu_name'             => _x( 'Musics', 'Admin Menu text', 'textdomain' ),
        'name_admin_bar'        => _x( 'Music', 'Add New on Toolbar', 'textdomain' ),
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New Music', 'textdomain' ),
        'new_item'              => __( 'New Music', 'textdomain' ),
        'edit_item'             => __( 'Edit Music', 'textdomain' ),
        'view_item'             => __( 'View Music', 'textdomain' ),
        'all_items'             => __( 'All Musics', 'textdomain' ),
        'search_items'          => __( 'Search Musics', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent Musics:', 'textdomain' ),
        'not_found'             => __( 'No Musics found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No Musics found in Trash.', 'textdomain' ),
        'featured_image'        => _x( 'Music Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'archives'              => _x( 'Music archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
        'insert_into_item'      => _x( 'Insert into Music', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this Music', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
        'filter_items_list'     => _x( 'Filter Musics list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
        'items_list_navigation' => _x( 'Musics list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
        'items_list'            => _x( 'Musics list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
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
        'show_in_rest' => true,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' ),
    );
 
    register_post_type( 'music', $music_args );
}
 
add_action( 'init', 'met_custom_post_types_init' );