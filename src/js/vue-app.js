var Home = Vue.extend({
  template : '#featuredTemplate',
  ready : function(){
    $(document).ready(function(){
      $('.main-entry').addClass('main-entry--return-home');
      $('.main-entry').removeClass('main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory'); 
    
      //Circle Hover Stuff

      $('#circle-bottom-bg').on('mouseenter',function(){
        $('.logo').removeClass('circle-top-run circle-right-run circle-left-run').width();
        $('.logo').addClass('circle-bottom-run');
        $('.name').addClass('name--hovered');
      });

      $('#circle-left-bg').on('mouseenter',function(){
        $('.logo').removeClass('circle-top-run circle-right-run circle-bottom-run').width();
        $('.logo').addClass('circle-left-run');
        $('.name').addClass('name--hovered');
      });

      $('#circle-right-bg').on('mouseenter',function(){
        $('.logo').removeClass('circle-top-run circle-bottom-run circle-left-run').width();
        $('.logo').addClass('circle-right-run');
        $('.name').addClass('name--hovered');
      });

      $('.logo').on('mouseleave',function(){
        $('.logo').removeClass('circle-right-run circle-left-run circle-bottom-run circle-top-run').width();
        $('.name').removeClass('name--hovered');
      });

      
      $('html, body').scrollTop(0);
      //Rellax Init
      var rellax = new Rellax('.rellax');
    });
  }
});

var Music = Vue.extend({
  template : '#musicTemplate',
  ready : function(){
    $(document).ready(function(){
      $('.main-entry').addClass('main-entry--return-home');
      $('.main-entry').removeClass('main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory');

      $('.main-entry').removeClass('main-entry--return-home');
      $('.main-entry').addClass('main-entry--open-all main-entry--open-music');
      $('.logo').removeClass('circle-right-run circle-left-run circle-bottom-run circle-top-run').width();
      $('.name').removeClass('name--hovered');
      
      $('html, body').scrollTop(0);
      //Rellax Init
      var rellax = new Rellax('.rellax');

    });
  }
});
 

var Gallery = Vue.extend({
  template : '<h1>Gallery</h1>',
  ready : function(){
    $(document).ready(function(){
      $('.main-entry').addClass('main-entry--return-home');
      $('.main-entry').removeClass('main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory');


      $('.main-entry').removeClass('main-entry--return-home');
      $('.main-entry').addClass('main-entry--open-all main-entry--open-gallery');
      $('.logo').removeClass('circle-right-run circle-left-run circle-bottom-run circle-top-run').width();
      $('.name').removeClass('name--hovered');
      
      $('html, body').scrollTop(0);
      //Rellax Init
      var rellax = new Rellax('.rellax');      
    });
  }
});
 

var Laboratory = Vue.extend({
  template : '<h1>Laboratory</h1>',
  ready : function(){
    $(document).ready(function(){
      $('.main-entry').addClass('main-entry--return-home');
      $('.main-entry').removeClass('main-entry--open-all main-entry--open-featured main-entry--open-music main-entry--open-gallery main-entry--open-laboratory');


      $('.main-entry').removeClass('main-entry--return-home');
      $('.main-entry').addClass('main-entry--open-all main-entry--open-laboratory');
      $('.logo').removeClass('circle-right-run circle-left-run circle-bottom-run circle-top-run').width();
      $('.name').removeClass('name--hovered');  
      
      $('html, body').scrollTop(0);
      //Rellax Init
      var rellax = new Rellax('.rellax');    
    });
  }
});
 


// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
// !! Note that the App is not a Vue instance.
var App = Vue.extend({});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
  history : true
});

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/': {
    component: Home
  },
  '/index.html':{
    component: Home
  },
  '/music': {
    component: Music
  },
  '/gallery': {
    component: Gallery
  },
  '/laboratory': {
    component: Laboratory
  }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app'); 