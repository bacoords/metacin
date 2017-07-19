
  <!--  Contact  -->
  <template id="pageTemplate">
   
    <div id="pageAnchor">

      <div class="mpwppage" v-if="post.content">

        <h1>{{post.title.rendered}}</h1>
        
        <div v-html="post.content.rendered"></div>

      </div>
    
    </div>
   
  </template>