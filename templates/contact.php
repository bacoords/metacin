
  <!--  Contact  -->
  <template id="contactTemplate">
    <div id="contactAnchor">
      <div class="mploading" v-show="isLoading">
         <div class="mploading__bouncer">
           <div class="double-bounce1"></div>
           <div class="double-bounce2"></div>
         </div>
      </div>
      <div v-show="!isLoading">

        <div class="mpintro">
          <div class="mpintro__text">
            <h1>Contact</h1>
            <?php echo do_shortcode( '[contact-form-7 id="4" title="Contact form 1"]' ); ?>
          </div>
        </div>


    </div>
   </div>
  </template>