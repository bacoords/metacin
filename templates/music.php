 
    <!--    Music Hall-->
    <template id="musicTemplate">
      <div id="musicAnchor">
        <div class="mploading" v-show="isLoading">
           <div class="mploading__bouncer">
             <div class="double-bounce1"></div>
             <div class="double-bounce2"></div>
           </div>
        </div>
        <div v-show="!isLoading">

        <!--  Scroll Down Indicator       -->




        <!--     Musicology Intro-->
        
        <div class="mpsnapbox mpsnapbox--music">
          <div class="mpsnapbox__inner">
            

        
            <div class="mpintro">
              <div class="mpintro__text">
                <h2 >Musicology</h2>
                <br><br>
                <p>The essential elements of music are pitch, tone, volume and time.  Patterns of these elements govern musical structure — melody and harmony of course — but more:  motif, symmetry, proportion, relativity.  As in any language, arrangement of musical elements provides syntax and conveys meaning. </p>
                <p> Explore the music of Michael Yeaman on the <a href="#mpgal">Soundstage</a> — and go inside the music to learn more <a href="#mprecord">On the Record</a>. </p>
                <br><br>
                <a href="#mpgal" class="mpintro__btn">Explore the Soundstage</a>
              </div>
            </div>

          </div>
        </div>



        <!--      Sound Stage Catalog-->
        <div id="mpgal" class="mpgal">
          <div class="mpgal__header">
            <h2>Soundstage</h2>
          </div>
          <div v-for="post in posts" class="mpgal__item mpfadein">
            <router-link :to="'/music/' + post.slug">
              <img :src="post.better_featured_image.source_url" :alt="post.title.rendered">
            </router-link>
          </div>
        </div>


        <!--      Sound Stage Modal Router Frame-->
        <div class="mpmodal">
          <router-view></router-view>
        </div>




        <!--      On the Record Narrative-->
        <div id="mprecord" class="mpintro">
          <div class="mpintro__text">
            <h2>On The Record</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta deserunt eaque, quod quidem totam laudantium, quos repellendus architecto et dolorem eum? Blanditiis sunt officiis vitae, necessitatibus nemo ipsam, amet.</p>
          </div>
        </div>

      </div>
     </div>
    </template>