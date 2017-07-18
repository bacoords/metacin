   <!--  Album Modal  -->
    <template id="albumTemplate">
      <div v-if="apiLoaded">
        <div class="mpmodal__overlay">
          <router-link class="mpmodal__exit" :to=" '/music' "></router-link>
        </div>
        <div class="mpmodal__box">
          <div class="mpalbum">
            <div class="mpalbum__close">
              <router-link class="mpmodal__exit" :to=" '/music' ">&#x2715;</router-link>
            </div>
            <div class="mpalbum__body">
              <div class="mpalbum__image">
                <img :src="post.better_featured_image.source_url" :alt="post.title.rendered" >
              </div>
              <div class="mpalbum__description">
                <div class="mpalbum__title">
                  <h3>{{post.title.rendered}}</h3>
                </div>
                <div class="mpalbum__content" v-if="post.content.rendered">
                  <h4>Teaser</h4>
                  <div v-html="post.content.rendered"></div>
                  <small v-html="post.cmb2.music_metabox_main._met_release.replace(/(?:\r\n|\r|\n)/g, '<br />')"></small>
                </div>
                <div class="mpalbum__footer">

                  <div class="mpalbum__tracks">
                    <div>
                      <h4>Track Listing</h4>
                      <ul v-if="tracks">
                        <li v-for="(track, key) in tracks">

                          <span>{{key + 1}}. {{track.trackName}}</span>
                          <span>{{msToTime(track.trackTimeMillis)}}</span>

                        </li>
                      </ul>
                      <ul v-if="!tracks">
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
                  <div class="mpalbum__download" v-if="post.cmb2.music_metabox_purchase._met_itunes || post.cmb2.music_metabox_purchase._met_google_play || post.cmb2.music_metabox_purchase._met_amazon">
                    <a :href="post.cmb2.music_metabox_purchase._met_itunes" target="_blank" v-if="post.cmb2.music_metabox_purchase._met_itunes"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-itunes.png" alt="Available on iTunes"></a>
                    <a :href="post.cmb2.music_metabox_purchase._met_google_play" target="_blank" v-if="post.cmb2.music_metabox_purchase._met_google_play"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/google-play.png" alt="Listen on Spotify"></a>
                    <a :href="post.cmb2.music_metabox_purchase._met_amazon" target="_blank" v-if="post.cmb2.music_metabox_purchase._met_amazon"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-amazon.png" alt="Available on Amazon Music"></a>
                  </div>
                </div>
              
              </div>
            </div>
            </div>
          </div>

        </div>
    </template>