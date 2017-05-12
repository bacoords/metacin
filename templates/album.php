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
                <img :src="post.image" :alt="post.title" >
              </div>
              <div class="mpalbum__description">
                <div class="mpalbum__title">
                  <h3>{{post.title}}</h3>
                </div>
                <div class="mpalbum__content">
                  <h4>Teaser</h4>
                  <div v-html="post.content"></div>
                  <small>&copy; 2012 Michael Yeaman / Metacin, Inc. &amp; Chris Rhodes / SSRMW<br>(P) 2017 Michael Yeaman / Metacin, Inc.</small>
                </div>
                <div class="mpalbum__footer">

                  <div class="mpalbum__tracks">
                    <div v-show="post.tracks">
                      <h4>Track Listing</h4>
                      <ul>
                        <li v-for="track in post.tracks">

                          <span>{{track.index}}. {{track.title}}</span>
                          <span>{{track.time}}</span>

                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mpalbum__downloadheader">
                    <h4>Download Now</h4>
                  </div>
                  <div class="mpalbum__download">
                    <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-itunes.png" alt="Available on iTunes"></a>
                    <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-spotify.png" alt="Listen on Spotify"></a>
                    <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/icon-amazon.png" alt="Available on Amazon Music"></a>
                  </div>
                </div>
              
              </div>
            </div>
            </div>
          </div>

        </div>
    </template>