   
    <!--    Gallery-->
    <template id="galleryTemplate">
      <div id="galleryAnchor">
        <div class="mploading" v-show="isLoading">
           <div class="mploading__bouncer">
             <div class="double-bounce1"></div>
             <div class="double-bounce2"></div>
           </div></div>
        <div v-show="!isLoading">

        <!--  Scroll Down Indicator       -->




        <!--     Musicology Intro-->
        <div class="mpsnapbox mpsnapbox--gallery">
          <div class="mpsnapbox__inner">
             <div class="mpintro">
              <div class="mpintro__text">
                <h2 >Eye Gallery</h2>
                <br><br>
                <p>Music touches every sense — from rhythm and movement to emotion and memory.  Listening to music is one way to experience its benefits — and visualizing music is another way to appreciate its patterns and meaning. </p>
                <p> Explore the art of Michael Yeaman in the <a href="#mpgal">Eye Gallery</a> to see music in a beautiful new way that is more than meets the ear. </p>
                
                <br><br>
                <a href="#mpgal" class="mpintro__btn">Explore the Sound of Light</a>
              </div>
            </div>           
          </div>
        </div>


        <!--      Sound of Light Catalog-->
        <div id="mpgal" class="mpgal mpgal--gallery">
          <div class="mpgal__header">
            <h2>Sound of Light</h2>
          </div>
          <div v-for="post in posts" class="mpgal__item mpfadein">
            <router-link :to="'/gallery/' + post.slug">
              <img :src="post.image" :alt="post.title">
            </router-link>
          </div>
        </div>


        <!--      Sound Stage Modal Router Frame-->
        <div class="mpmodal">
          <router-view></router-view>
        </div>




        <!--      On the Record Narrative-->
        <div class="mpintro">
          <div class="mpintro__text">
            <h2>Meets the Eye</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta deserunt eaque, quod quidem totam laudantium, quos repellendus architecto et dolorem eum? Blanditiis sunt officiis vitae, necessitatibus nemo ipsam, amet.</p>
          </div>
        </div>

      </div>
     </div>
    </template>