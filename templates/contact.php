
  <!--  Contact  -->
  <template id="contactTemplate">
    <div id="contactAnchor">

      <div class="mpwppage" v-if="post.content">

        <div class="mpintro">
          <div class="mpintro__text">
            <h1>Contact</h1>
            <div v-html="post.content.rendered"></div>
          </div>
        </div>


    </div>
   </div>
  </template>