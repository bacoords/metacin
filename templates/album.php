   <!--  Album Modal  -->
    <template id="albumTemplate">
      <div>
        <div class="mpmodal__overlay">
          <a class="mpmodal__exit"></a>
        </div>
        <div class="mpmodal__box">
          <div class="mpalbum">
            <div class="mpalbum__close">
              <a class="mpmodal__exit">&#x2715;</a>
            </div>
            <div class="mpalbum__body">
              <div class="mpalbum__image">
                <img :src="post.better_featured_image.source_url" :alt="post.title.rendered" >
              </div>
              <div class="mpalbum__description">
                <div class="mpalbum__title">
                  <h3>{{post.title.rendered}}</h3>
                </div>
                <div class="mpalbum__content">
                  <h4>Teaser</h4>
                  <div v-html="post.content.rendered"></div>
                  <small v-html="post.cmb2.music_metabox_main._met_release.replace(/(?:\r\n|\r|\n)/g, '<br />')"></small>
                </div>
                <div class="mpalbum__footer">

                  <div class="mpalbum__tracks">
                    <div>
                      <h4>Track Listing</h4>
                      <ul>
                        <li v-for="(track, key) in post.cmb2.music_metabox_tracks.music_tracks_repeat_group">

                          <span>{{key + 1}}. {{track.title}}</span>
                          <span>{{track.length}}</span>

                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mpalbum__downloadheader">
                    <h4>Download Now</h4>
                  </div>
                  <div class="mpalbum__download">
                    <a :href="post.cmb2.music_metabox_purchase._met_itunes" target="_blank"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-itunes.png" alt="Available on iTunes"></a>
                    <a :href="post.cmb2.music_metabox_purchase._met_google_play" target="_blank"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/google-play.png" alt="Listen on Spotify"></a>
                    <a :href="post.cmb2.music_metabox_purchase._met_amazon" target="_blank"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-amazon.png" alt="Available on Amazon Music"></a>
                  </div>
                </div>
              
              </div>
            </div>
            </div>
          </div>

        </div>
    </template>