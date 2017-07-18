<?php




add_action( 'cmb2_init', 'cmb2_metaboxes' );
/**
 * Define the metabox and field configurations.
 */
function cmb2_metaboxes() {

	// Start with an underscore to hide fields from custom fields list
	$prefix = '_met_';

	/**
	 * Main Custom Fields
	 */
	$cmb = new_cmb2_box( array(
		'id'            => 'music_metabox_main',
		'title'         => __( 'Music Custom Fields', 'cmb2' ),
		'object_types'  => array( 'music', 'gallery'), // Post type
		'context'       => 'normal',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // Keep the metabox closed by default
        'show_in_rest' => WP_REST_Server::ALLMETHODS,
	) );

	// Regular text field
	$cmb->add_field( array(
		'name'       => __( 'Release Text', 'cmb2' ),
//		'desc'       => __( 'field description (optional)', 'cmb2' ),
		'id'         => $prefix . 'release',
		'type'       => 'wysiwyg',
		'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
		// 'sanitization_cb' => 'my_custom_sanitization', // custom sanitization callback parameter
		// 'escape_cb'       => 'my_custom_escaping',  // custom escaping callback parameter
		// 'on_front'        => false, // Optionally designate a field to wp-admin only
		// 'repeatable'      => true,
        'options'    => array(
            'media_buttons' => false,
            'teeny'         => true,
            'wpautop'       => true
        ),
	) );

	// Regular text field
	$cmb->add_field( array(
		'name'       => __( 'Research Text', 'cmb2' ),
//		'desc'       => __( 'field description (optional)', 'cmb2' ),
		'id'         => $prefix . 'research_text',
		'type'       => 'wysiwyg',
		'show_on_cb' => 'cmb2_hide_if_no_cats', // function should return a bool value
		// 'sanitization_cb' => 'my_custom_sanitization', // custom sanitization callback parameter
		// 'escape_cb'       => 'my_custom_escaping',  // custom escaping callback parameter
		// 'on_front'        => false, // Optionally designate a field to wp-admin only
		// 'repeatable'      => true,
        'options'    => array(
            'media_buttons' => false,
            'teeny'         => true,
            'wpautop'       => true
        ),
	) );

	$cmb->add_field( array(
		'name' => __( 'Research URL', 'cmb2' ),
//		'desc' => __( 'field description (optional)', 'cmb2' ),
		'id'   => $prefix . 'research_url',
		'type' => 'text_url',
		 'protocols' => array('http', 'https'), // Array of allowed protocols
		// 'repeatable' => true,
	) );
  
  

	/**
	 * Music Purchase Links Metabox
	 */
	$cmb = new_cmb2_box( array(
		'id'            => 'music_metabox_purchase',
		'title'         => __( 'Music Purchase Links', 'cmb2' ),
		'object_types'  => array( 'music', ), // Post type
		'context'       => 'normal',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // Keep the metabox closed by default
        'show_in_rest' => WP_REST_Server::ALLMETHODS,
	) );

	$cmb->add_field( array(
		'name' => __( 'ITunes URL', 'cmb2' ),
//		'desc' => __( 'field description (optional)', 'cmb2' ),
		'id'   => $prefix . 'itunes',
		'type' => 'text_url',
		 'protocols' => array('http', 'https'), // Array of allowed protocols
		// 'repeatable' => true,
	) );

	$cmb->add_field( array(
		'name' => __( 'Google Play URL', 'cmb2' ),
//		'desc' => __( 'field description (optional)', 'cmb2' ),
		'id'   => $prefix . 'google_play',
		'type' => 'text_url',
		 'protocols' => array('http', 'https'), // Array of allowed protocols
		// 'repeatable' => true,
	) );

	$cmb->add_field( array(
		'name' => __( 'Amazon URL', 'cmb2' ),
//		'desc' => __( 'field description (optional)', 'cmb2' ),
		'id'   => $prefix . 'amazon',
		'type' => 'text_url',
		 'protocols' => array('http', 'https'), // Array of allowed protocols
		// 'repeatable' => true,
	) );
  
  
  
  

	/**
	 * Album Track Listing
	 */
	$cmb = new_cmb2_box( array(
		'id'            => 'music_metabox_tracks',
		'title'         => __( 'Music Manual Track Listing', 'cmb2' ),
		'object_types'  => array( 'music', ), // Post type
		'context'       => 'normal',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // Keep the metabox closed by default
        'show_in_rest' => WP_REST_Server::ALLMETHODS,
	) );

    $music_tracks_group = $cmb->add_field( array(
        'id'          => 'music_tracks_repeat_group',
        'type'        => 'group',
//        'description' => __( 'Generates reusable form entries', 'cmb2' ),
        // 'repeatable'  => false, // use false if you want non-repeatable group
        'options'     => array(
            'group_title'   => __( 'Track {#}', 'cmb2' ), // since version 1.1.4, {#} gets replaced by row number
            'add_button'    => __( 'Add Another Track', 'cmb2' ),
            'remove_button' => __( 'Remove Track', 'cmb2' ),
            'sortable'      => true, // beta
            // 'closed'     => true, // true to have the groups closed by default
        ),
    ) );

    $cmb->add_group_field( $music_tracks_group, array(
        'name' => 'Track Title',
        'id'   => 'title',
        'type' => 'text',
        // 'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
    ) );

    $cmb->add_group_field( $music_tracks_group, array(
        'name' => 'Track Length',
//        'description' => 'Write a short description for this entry',
        'id'   => 'length',
        'type' => 'text_small',
    ) );

  
  
  

	/**
	 * Gallery MP3 File
	 */
	$cmb = new_cmb2_box( array(
		'id'            => 'gallery_metabox_preview',
		'title'         => __( 'Music Preview File', 'cmb2' ),
		'object_types'  => array( 'gallery', ), // Post type
		'context'       => 'normal',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // Keep the metabox closed by default
        'show_in_rest' => WP_REST_Server::ALLMETHODS,
	) );

    $cmb->add_field( array(
        'name'    => 'Audio Privew File',
        'desc'    => 'Upload an MP3 or enter an URL.',
        'id'      => 'audio_preview_file',
        'type'    => 'file',
        // Optional:
        'options' => array(
            'url' => false, // Hide the text input for the url
        ),
        'text'    => array(
            'add_upload_file_text' => 'Add File' // Change upload button text. Default: "Add or Upload File"
        ),
        // query_args are passed to wp.media's library query.
        'query_args' => array(
            'type' => 'audio/mpeg', // Make library only display MP3s.
        ),
    ) );
  

	/**
	 * Music Itunes ID
	 */
	$cmb = new_cmb2_box( array(
		'id'            => 'music_metabox_itunes',
		'title'         => __( 'Music ITunes ID', 'cmb2' ),
		'object_types'  => array( 'music', ), // Post type
		'context'       => 'normal',
		'priority'      => 'high',
		'show_names'    => true, // Show field names on the left
		// 'cmb_styles' => false, // false to disable the CMB stylesheet
		// 'closed'     => true, // Keep the metabox closed by default
        'show_in_rest' => WP_REST_Server::ALLMETHODS,
	) );



	$cmb->add_field( array(
		'name' => __( 'ITunes ID', 'cmb2' ),
//		'desc' => __( 'field description (optional)', 'cmb2' ),
		'id'   => $prefix . 'itunes_id',
		'type' => 'text_small',
		// 'repeatable' => true,
	) );
}