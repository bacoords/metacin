   <!--  Album Modal  -->
    <template id="artTemplate">
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
                <div class="mpalbum__progress">
                  <div class="mpalbum__progress-bar"></div>
                </div>
              </div>
              <div class="mpalbum__description">
                <div class="mpalbum__title">
                  <h3>{{post.title}}</h3>
                </div>
                <div class="mpalbum__content">
                  <h4>Teaser</h4>
                  <div v-html="post.content"></div>
                  <small>Michael Yeaman &amp; Chris Rhodes<BR>© 2016 Metacin, Inc. / NovaMedia</small>
                </div>
                <div class="mpalbum__songheader">
                  <h4>Preview</h4>
                </div>
                <div class="mpalbum__song">
                  <audio src="<?php echo get_stylesheet_directory_uri(); ?>/dist/mp3/odyssey.mp3" controls="controls" class="mpalbum__player">

                </div>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </template>