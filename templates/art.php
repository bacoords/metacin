   <!--  Album Modal  -->
    <template id="artTemplate">
      <div v-if="apiLoaded">
        <div class="mpmodal__overlay">
          <router-link class="mpmodal__exit" :to=" '/gallery' " class="mpmodal__exit"></router-link>
        </div>
        <div class="mpmodal__box">
          <div class="mpalbum">
           
            <div class="mpalbum__close">
              <router-link class="mpmodal__exit" :to=" '/gallery' " class="mpmodal__exit">&#x2715;</router-link>
            </div>
            <div class="mpalbum__body">
            
              <div class="mpalbum__image">
                <img :src="post.better_featured_image.source_url" :alt="post.title.rendered" >
                <div class="mpalbum__progress" v-if="post.cmb2.gallery_metabox_preview.audio_preview_file">
                  <div class="mpalbum__progress-bar"></div>
                </div>
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
                <div class="mpalbum__songheader" v-if="post.cmb2.gallery_metabox_preview.audio_preview_file">
                  <h4>Preview</h4>
                </div>
                <div class="mpalbum__song" v-if="post.cmb2.gallery_metabox_preview.audio_preview_file">
                  <audio :src="post.cmb2.gallery_metabox_preview.audio_preview_file" controls="controls" class="mpalbum__player">

                </div>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </template>