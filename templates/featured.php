  
   <template id="featuredTemplate">
     
     <div id="featuredAnchor">
       <div class="mploading" v-show="isLoading">
         <div class="mploading__bouncer">
           <div class="double-bounce1"></div>
           <div class="double-bounce2"></div>
         </div>
       </div>
       <div v-show="!isLoading" class="mpsnapcontainer">    
     

        <div class="mpsnapbox mpsnapbox--mpreactive">
         <a href="#featuredScrollAnchor" class="mpreactive">
           <div class="mpreactive__left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/yeaman-revised.jpg" alt="Michael Yeaman"></div>
           <div class="mpreactive__right"><h2>METACIN</h2><h3>Beyond Medicine&copy;</h3></div>
         </a>
       </div>




    
          <!--     Featured Tune Box-->
        <div id="featuredScrollAnchor" class="mpsnapbox mpsnapbox--sub mpsnapbox--music body-bg">
         <div class="mpsnapbox__inner mpfront">
          <div class="mpbox">
            <div class="mpbox__inner">
              <div class="mpbox__mpcard mpfadein">
                <div class="mpcard mpcard--music" ontouchstart="this.classList.toggle('hover');">
                  <div class="mpcard__inner">
                    <div class="mpcard__front">

                    </div>
                    <div class="mpcard__back">
                      <div class="mpcard__back__inner">
                        <i class="fa fa-play-circle" aria-hidden="true" @click="playAudio"></i>
                        <audio src="<?php echo get_stylesheet_directory_uri(); ?>/dist/mp3/odyssey.mp3" controls="controls" class="mpaudio__player">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mpbox__text">
                <h2>Music Hall</h2>
                <p>Explore the music of Michael Yeaman on the <strong>Soundstage</strong> — and go inside the music to learn more <strong>On the Record</strong>. </p>
                <router-link to="/music" >Visit Music Hall</router-link>
              </div>
            </div>
          </div>
          </div>
        </div>

        <!--     Featured Art Box-->
        <div class="mpsnapbox mpsnapbox--sub mpsnapbox--gallery">
          <div class="mpsnapbox__inner  mpfront">
            <div class="mpbox">
              <div class="mpbox__inner">
                <div class="mpbox__mpcard mpfadein">
                  <div class="mpcard mpcard--gallery" ontouchstart="this.classList.toggle('hover');">
                    <div class="mpcard__inner">
                      <div class="mpcard__front">

                      </div>
                      <div class="mpcard__back">
                        <div class="mpcard__back__inner">
                          <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mpbox__text ">
                  <h2>Eye Gallery</h2>
                  <p>Explore the art of Michael Yeaman in the <strong>Eye Gallery</strong> to see music in a beautiful new way that is more than meets the ear.</p>
                  <router-link to="/gallery" >Visit Eye Gallery</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--     Laboratory Box-->
        <div class="mpsnapbox mpsnapbox--sub mpsnapbox--laboratory">
          <div class="mpsnapbox__inner  mpfront">
            <div class="mpbox">
              <div class="mpbox__inner">
                <div class="mpbox__mpcard mpfadein">
                  <div class="mpcard mpcard--laboratory" ontouchstart="this.classList.toggle('hover');">
                    <div class="mpcard__inner">
                      <div class="mpcard__front">

                      </div>
                      <div class="mpcard__back">
                        <div class="mpcard__back__inner">
                          <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mpbox__text">
                  <h2>Laboratory</h2>
                  <p>Explore the science of Michael Yeaman in the <strong>Laboratory</strong> to interact in his sound medicine research.</p>
                  <router-link to="/laboratory" >Visit Laboratory</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <!--     Events Box-->
        <div class="mpsnapbox mpsnapbox--sub mpsnapbox--events">
          <div class="mpsnapbox__inner  mpfront">
            <div class="mpbox">
              <div class="mpbox__inner">
                <div class="mpbox__mpcard mpfadein">
                  <div class="mpcard mpcard--events" ontouchstart="this.classList.toggle('hover');">
                    <div class="mpcard__inner">
                      <div class="mpcard__front">

                      </div>
                      <div class="mpcard__back">
                        <div class="mpcard__back__inner">
                          <router-link to="/gallery/canon-in-d"><i class="fa fa-plus-circle" aria-hidden="true"></i></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mpbox__text">
                  <h2>Events</h2>
                  <p>You are invited to join the Metacin contact list to receive the latest updates on new music releases, performances and special events.</p>
                  <router-link to="/events" >See Upcoming Events</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </div>
       
   </template>