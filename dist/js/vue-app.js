(function($) {
  

  // Define controller
  var controller = new ScrollMagic.Controller();



  // Creates a Smooth Scroll
  function smoothScrollInit(){
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  }





  // Defines animation for sub-page header when loaded
  function animFeatActive(el){

    var heading = el + ' > .feat__inner > h2';

    var tl = new TimelineMax();
      tl.add(TweenMax.to(el, 0.3, {x:0, y:0, z:0, rotationY: 0, scale: 1, width: '100%', height: '100vh', delay:0}));
      tl.add(TweenMax.to(heading, 0, {y:'1000px', delay:0}));
      tl.add(TweenMax.to(el, 0, {className: '+=feat--active', delay:0.9}));
      tl.add(TweenMax.to(heading, 0.3, {y:'-100px', delay:0}));

    return tl;
  }



  // Adds class to appear on animation
  function mpFadeIn() {

    var $window = $(window);
    var $animation_elements = $('.mpfadein');

    var window_height = $window.height();
    var window_top_position = ($window.scrollTop() + 200);
    var window_bottom_position = (window_top_position + window_height - 150);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('mpfadein--active');
      } else {
        $element.removeClass('mpfadein--active');
      }
    });
  }



  // Set page title
  function setDocTitle(title){
    if(title) document.title = title + ' | Metacin - Beyond Medicin';
    else document.title = 'Metacin - Beyond Medicine';
    return
  }



  // Some global Methods
  var mixin = {
    methods: {
      preload : function(pictureUrls, callback) { // Preloads images as new Image()
         var i,
              j,
              loaded = 0;

          for (i = 0, j = pictureUrls.length; i < j; i++) {
              (function (img, src) {
                  img.onload = function () {                               
                      if (++loaded == pictureUrls.length && callback) {
                          callback();
                      }
                  };

                  // Use the following callback methods to debug
                  // in case of an unexpected behavior.
                  img.onerror = function () {};
                  img.onabort = function () {};

                  img.src = src;
              } (new Image(), pictureUrls[i]));
          }
      },
      addLineBreaks : function(str) {
        
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        
      },
      msToTime : function (duration) {
          var milliseconds = parseInt((duration%1000)/100)
              , seconds = parseInt((duration/1000)%60)
              , minutes = parseInt((duration/(1000*60))%60)
              , hours = parseInt((duration/(1000*60*60))%24);

          hours = (hours < 10) ? "0" + hours : hours;
//          minutes = (minutes < 10) ? "0" + minutes : minutes;
          seconds = (seconds < 10) ? "0" + seconds : seconds;

          return minutes + ":" + seconds;
      }
    },
    computed : {
       isLoading : function() {
        return this.$store.state.loading;
      }
    }
  }


  
  //Replace vue-resource with axios
  
  Vue.prototype.$http = axios;



  // VueX Data Store
  const store = new Vuex.Store({
    state : {
      loading : true
    },
    mutations : {
      loadingOn : function(state) {
        state.loading = true;
        document.body.classList.add('no-scroll');
      },
      loadingOff : function(state) {
        state.loading = false;
        document.body.classList.remove('no-scroll');
      }
    }
  });




  // Main Home Component
  var Home = Vue.component('home', {
    template : '#featuredTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        menu : false,
        playing : false,
        feat : []
      }
    }, 
    methods : {
      playAudio : function(){ // Triggers audio
        $('.mpcard--music').addClass('hover');
        if(!this.playing){
          $('.mpaudio__player').get(0).play();  
          $('.mpcard__back__inner > i').removeClass('fa-play-circle').addClass('fa-pause');
        } else {
          $('.mpaudio__player').get(0).pause();
          $('.mpcard__back__inner > i').removeClass('fa-pause').addClass('fa-play-circle');
        }
        this.playing = !this.playing;
        return;
      },
      isLoading : function() { // return store loading
        return this.$store.state.loading; 
      }
    },
    computed : {
    },
    mounted : function(){
      this.$nextTick(function (){


        // Update title
        setDocTitle('Welcome');


        // Turn on loading
        store.commit('loadingOn');


        // Pre Load Images
        var a = ['http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/gallery-8.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/yeaman.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/pexels-2.jpg','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/neurons.jpg','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/pexels-1.jpg']; 
        var self = this;
        this.preload(a, function(){


          // Turn off loading
          store.commit('loadingOff');



          // Menu Animations
          $('.header__menu-item').click(function(){
            if(!self.menu){
              $('body').addClass('show-nav');
              $('body').removeClass('hide-nav');
              $('.header__menu-item').html('&#x2715;');
            } else {
              $('body').removeClass('show-nav');
              $('body').addClass('hide-nav');
              $('.header__menu-item').html('M&#9776;');
            } 
            self.menu = !self.menu;
          });

          $('.header-nav__a').click(function(){    
            $('body').removeClass('show-nav');
            $('body').addClass('hide-nav');
            $('.header__menu-item').html('M&#9776;');
            self.menu = !self.menu;
          });


          $('html, body').scrollTop(0);   




          // Parallax.js Init
  //        var parallaxScene = document.getElementById('mpreactive'),
  //          parallaxObj = new Parallax(parallaxScene);

          // Reanimate on Resize
          var $window = $(window);

          // Initialize Smooth Scroll Watcher
          smoothScrollInit();



          // Show featureds on animation
          mpFadeIn();
          $window.on('scroll resize', mpFadeIn);
          $window.trigger('scroll');


          //Colors for Particles
          var colors = [
            '#ffffff',
            '#FF5722',
            '#73156c',
            '#2582a8'
          ];
          var random = Math.floor(Math.random() * (3 + 1));


          // Particles Background
          // Uncomment for Production
           particlesJS("particles", {
             "particles": {
               "number": {
                 "value": 20,
                 "density": {
                   "enable": true,
                   "value_area": 800
                 }
               },
               "color": {
                 "value": '#ffffff',//colors[random]
               },
               "shape": {
                 "type": "circle",
                 "stroke": {
                   "width": 0,
                   "color": "#000000" 
                 },
                 "polygon": {
                   "nb_sides": 5
                 },
                 "image": {
                   "src": "img/github.svg",
                   "width": 100,
                   "height": 100
                 }
               },
               "opacity": {
                 "value": 0.3,
                 "random": false,
                 "anim": {
                   "enable": false,
                   "speed": 1,
                   "opacity_min": 0.1,
                   "sync": false
                 }
               },
               "size": {
                 "value": 4,
                 "random": true,
                 "anim": {
                   "enable": false,
                   "speed": 40,
                   "size_min": 0.1,
                   "sync": false
                 }
               },
               "line_linked": {
                 "enable": true,
                 "distance": 150,
                 "color": '#ffffff', //colors[random],
                 "opacity": 0.7,
                 "width": 2
               },
               "move": {
                 "enable": true,
                 "speed": 6,
                 "direction": "none",
                 "random": false,
                 "straight": false,
                 "out_mode": "out",
                 "bounce": false,
                 "attract": {
                   "enable": false,
                   "rotateX": 600,
                   "rotateY": 1200
                 }
               }
             },
             "interactivity": {
               "detect_on": "canvas",
               "events": {
                 "onhover": {
                   "enable": false,
                   "mode": "repulse"
                 },
                 "onclick": {
                   "enable": false,
                   "mode": "push"
                 },
                 "resize": true
               },
               "modes": {
                 "grab": {
                   "distance": 400,
                   "line_linked": {
                     "opacity": 1
                   }
                 },
                 "bubble": {
                   "distance": 400,
                   "size": 40,
                   "duration": 2,
                   "opacity": 8,
                   "speed": 3
                 },
                 "repulse": {
                   "distance": 200,
                   "duration": 0.4
                 },
                 "push": {
                   "particles_nb": 4
                 },
                 "remove": {
                   "particles_nb": 2
                 }
               }
             },
             "retina_detect": true
           }); 


        });
      });
    }
  });

  var Music = Vue.component('music', {
    template : '#musicTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        playing : false,
        posts : [],
      }
    },
    methods : {
      openAlbum : function(s){
        var p = '/music/' + s;
        router.push({path : p});
        return;
      },
      playAudio : function() {
        $('.mpcard--music').addClass('hover');
        if(!this.playing){
          $('.mpaudio__player').get(0).play();  
          $('.mpcard__back__inner > i').removeClass('fa-play-circle').addClass('fa-pause');
        } else {
          $('.mpaudio__player').get(0).pause();
          $('.mpcard__back__inner > i').removeClass('fa-pause').addClass('fa-play-circle');
        }
        this.playing = !this.playing;
        return;
      },
      
    },
    created : function(){
      
        var self = this;

        //After animation start loading
        store.commit('loadingOn');

        self.$http.get(wp.root + 'wp/v2/music/?per_page=50').then(function(response) {
          
          self.posts = response.data;
          

      }, function(response) {

          console.log(response);

      });

    },
    mounted : function(){
      var self = this;
      

        self.$nextTick(function(){

         // Update title
          setDocTitle('Music Hall');

          // Create array of images to load
          var a = ['http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-amazon.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/google-play.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-itunes.png']; 
          self.posts.forEach(function(post){
            a.push(post.better_featured_image.source_url);
          });

          self.preload(a, function(){

            // Remove Loader
            store.commit('loadingOff');


            // Add hover effect to gallery
            $('.mpgal__item img').hover(function(){
              $('.mpgal').addClass('mpgal--hovered');
            }, function(){
              $('.mpgal').removeClass('mpgal--hovered');
            });

            //SCROLLTOP on load
            $('html, body').scrollTop(0);


            // Show featureds on animation
            mpFadeIn();
            var $window = $(window);
            $window.on('scroll resize', mpFadeIn);
            $window.trigger('scroll');


            // Initialize Smooth Scroll Watcher
            smoothScrollInit();

          });

      });
      
    }
    
  });



  var Gallery = Vue.extend({
    template : '#galleryTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : true,
        posts : []
      }
    },
    methods : {},
    created : function(){
      
        var self = this;

       // Update title
        setDocTitle('Eye Gallery');

        //After animation start loading
        store.commit('loadingOn');

        self.$http.get(wp.root + 'wp/v2/gallery').then(function(response) {
          
          self.posts = response.data;
          

      }, function(response) {

          console.log(response);

      });

    },
    mounted : function(){
      var self = this;
      

        self.$nextTick(function(){

          // Create array of images to load
          var a = ['http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-amazon.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/google-play.png','http://metacin.dev/wp-content/themes/metacin-wp-theme/dist/img/icon-itunes.png']; 
          self.posts.forEach(function(post){
            a.push(post.better_featured_image.source_url);
          });

          self.preload(a, function(){

            // Remove Loader
            store.commit('loadingOff');


            // Add hover effect to gallery
            $('.mpgal__item img').hover(function(){
              $('.mpgal').addClass('mpgal--hovered');
            }, function(){
              $('.mpgal').removeClass('mpgal--hovered');
            });

            //SCROLLTOP on load
            $('html, body').scrollTop(0);


            // Show featureds on animation
            mpFadeIn();
            var $window = $(window);
            $window.on('scroll resize', mpFadeIn);
            $window.trigger('scroll');


            // Initialize Smooth Scroll Watcher
            smoothScrollInit();

          });

      });
      
    }
  });



  var Laboratory = Vue.extend({
    template : '#laboratoryTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : false 
      }
    },
    mounted : function(){
      this.$nextTick(function(){

          // Update title
          setDocTitle('Laboratory');

        $('html, body').scrollTop(0);

      });
    }
  });



  var Events = Vue.extend({
    template : '#eventsTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        loaded : false 
      }
    },
    mounted : function(){
      this.$nextTick(function(){

       // Update title
        setDocTitle('Events');

        $('html, body').scrollTop(0);

      });
    }
  });



  var Contact = Vue.component('contact', {
    template : '#contactTemplate',
    store: store,
    mixins : [mixin],
    data: function(){
      return {
        post : []
      }
    },
    mounted : function(){    
      
      store.commit('loadingOn');
      
      var self = this;
      
      self.$http.get(wp.root + 'wp/v2/pages?slug=contact').then(function(response) { 

        self.post = response.data[0];

        self.$nextTick(function(){

                // Update title
          setDocTitle('Contact');

          $('html, body').scrollTop(0);
          
          store.commit('loadingOff');

        });

        
      }, function(response) {

        console.log(response);

      });
      
    }
  });



  var Album = Vue.component('album', {
    template : '#albumTemplate',
    store: store,
    mixins : [mixin],
    data : function(){
      return {
        post : {
          
        },
        tracks : {
          
        },
        apiLoaded : false
      }
    },
    beforeDestroy : function(){
      $('.mpmodal').removeClass('mpmodal--active');
      document.body.classList.remove('no-scroll');

    },
    methods : {

    },
    created : function(){ 
      
    },
    mounted : function(){
      
      var self = this;
      
      self.$http.get(wp.root + 'wp/v2/music?slug=' + self.$route.params.slug).then(function(response) { 

        self.post = response.data[0];
        
        console.log(response.data[0].cmb2.music_metabox_itunes._met_itunes_id);
        
        if(response.data[0].cmb2.music_metabox_itunes._met_itunes_id != ''){
        
          self.$http.get('https://itunes.apple.com/lookup?id=' + response.data[0].cmb2.music_metabox_itunes._met_itunes_id + '&entity=song').then(function(response){

            console.log(response.data.results);

            self.tracks = response.data.results;

            self.tracks.splice(0,1);

          });
          
        } else {
          
          self.tracks = false;
          
        }
        

        self.$nextTick(function(){
          
          
          self.apiLoaded = true;
         // Update title
          setDocTitle(self.post.title.rendered);

          // Display Properties
          $('.mpmodal').addClass('mpmodal--active');
          document.body.classList.add('no-scroll');

          // Back on Escape
          $(document).keyup(function(e) {

            if (e.keyCode == 27) { // escape key maps to keycode `27`
              router.push({path : '/music'});
            }

          });

        });

        
      }, function(response) {

        console.log(response);

      });
      
      
    }
    
  });



  var Art = Vue.extend({
    template : '#artTemplate',
    store: store,
    mixins : [mixin],
    data : function(){
      return {
        post : {
          
        },
        apiLoaded : false
      }
    },
    beforeDestroy : function(){
      $('.mpmodal').removeClass('mpmodal--active');
      document.body.classList.remove('no-scroll');

    },
    methods : {

    },
    created : function(){ 
      
    },
    mounted : function(){
      
      var self = this;
      
      self.$http.get(wp.root + 'wp/v2/gallery?slug=' + self.$route.params.slug).then(function(response) { 

        self.post = response.data[0];

        self.$nextTick(function(){
          
          
          self.apiLoaded = true;
         // Update title
          setDocTitle(self.post.title.rendered);

          // Display Properties
          $('.mpmodal').addClass('mpmodal--active');
          document.body.classList.add('no-scroll');

          // Back on Escape
          $(document).keyup(function(e) {

            if (e.keyCode == 27) { // escape key maps to keycode `27`
              router.push({path : '/music'});
            }

          });
          
          function initMPAlbum(){

            // Set image height
            var imgHeight = $('.mpalbum__image > img').height() + 15;
  //          console.log('height', imgHeight);
            $('.mpalbum__progress').height(imgHeight + 'px');
            $('.mpalbum__progress-bar').height(imgHeight + 'px');

            // Set image width
            var imgWidth = $('.mpalbum__image > img').width();
  //          console.log('width', imgWidth);
            $('.mpalbum__progress').width(imgWidth + 'px');


            // Track Audio Position
            $('.mpalbum__player').bind('play', function(){
              $('.mpalbum__progress-bar').width('0%');
            });

            $('.mpalbum__player').bind('timeupdate', function(){
  //            console.log (this.currentTime);
  //            console.log (this.duration);
  //            console.log ((this.currentTime / this.duration));

              $('.mpalbum__progress-bar').width(((this.currentTime / this.duration) * 100) + '%');
            });

          }

          var checkExist = setInterval(function() {
             if ($('.mpalbum__image > img').width() > 0) {
                initMPAlbum();
                clearInterval(checkExist);
             }
          }, 100); // check every 100ms

        });

        
      }, function(response) {

        console.log(response);

      });
      
      
    },
    created: function() {

    }
  });



  // Create our Router instance
  var router = new VueRouter({
    mode : 'history',
    routes : [
      {
        path : '/',
        name : 'home',
        component: Home
      },
      {
        path : '/index.html', 
        name : 'home', 
        component: Home
      },
      {
        path : '/music',
        name : 'music', 
        component : Music,
        children : [
          {
            path : ':slug',
            component : Album
          }
        ]
      },
      {
        path : '/gallery',
        name : 'gallery', 
        component: Gallery,
        children : [
          {
            path : ':slug',
            component : Art
          }
        ]
      },
      {
        path : '/laboratory',
        name : 'laboratory', 
        component: Laboratory
      },
      {
        path : '/events',
        name : 'events', 
        component: Events
      },
      {
        path : '/contact',
        name : 'contact', 
        component: Contact
      },
      {
        path : '*',
        redirect : '/'
      }
    ]
  });



  // Mount app and launch
  var app = new Vue({
    router : router
  }).$mount('#app');
  
})( jQuery );