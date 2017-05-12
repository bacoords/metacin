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
  },
  computed : {
     isLoading : function() {
      return this.$store.state.loading;
    }
  }
}





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
var Home = Vue.extend({
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
      var a = ['wp-content/themes/metacin-wp-theme/dist/img/gallery-8.png','wp-content/themes/metacin-wp-theme/dist/img/yeaman.png','wp-content/themes/metacin-wp-theme/dist/img/pexels-2.jpg','wp-content/themes/metacin-wp-theme/dist/img/neurons.jpg','wp-content/themes/metacin-wp-theme/dist/img/pexels-1.jpg']; 
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

var Music = Vue.extend({
  template : '#musicTemplate',
  store: store,
  mixins : [mixin],
  data: function(){
    return {
      playing : false,
      posts : [
        {
          title : 'Infexious',
          slug : 'infexious',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-1.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Kinetic',
          slug : 'kinetic',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-2.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Seasons',
          slug : 'seasons',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-3.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Odyssey',
          slug : 'odyssey',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/odysse.final.jpg',
          content : '<p>Every life is an odyssey – a journey of pathways mirroring will and fate.  Each odyssey is a story of passages:  leaving home – facing challenges – finding courage – being changed – returning home.  In time, each tale is told through setback and loss – chance and victory.  Meaning emerges from quiet rhythms of each moment – and great echoes of each season – in the odyssey of every life.  Embrace your odyssey.</p>',
          tracks : [
            {
              index : '1',
              title: 'Odyssey',
              time: '5:29' 
            },{
              index : '2',
              title: 'Wayfarer',
              time: '5:32'
            },{
              index : '3',
              title: 'Conquest',
              time: '5:31'
            },{
              index : '4',
              title: 'Sirens',
              time: '7:48'
            },{
              index : '5',
              title: 'Nightfall',
              time: '5:57'
            },{
              index : '6',
              title: 'Underworld',
              time: '5:28'
            },{
              index : '7',
              title: 'Helios',
              time: '6:01'
            },{
              index : '8',
              title: 'Windsong',
              time: '5:44'
            },{
              index : '9',
              title: 'Homeland',
              time: '5:42'
            },{
              index : '10',
              title: 'Invictus',
              time: '4:26'
            }
          ] 
        },
        {
          title : 'Nuvo',
          slug : 'nuvo',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-5.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Giving Light 2015',
          slug : 'giving-light-2015',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-6.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Giving Light 2014',
          slug : 'giving-light-2014',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-7.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Archetype',
          slug : 'archetype',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-8.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Giving Light  2013',
          slug : 'giving-light-2013',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-9.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Mariposa',
          slug : 'mariposa',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-10.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Rhythmology',
          slug : 'rythmology',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-11.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Elements',
          slug : 'elements',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-12.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Aegis',
          slug : 'aegis',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-13.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Code Among Chaos',
          slug : 'code-among-chaos',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-14.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Voices of the Moon',
          slug : 'voices-of-the-moon',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/album-15.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>' 
        },
      ],
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
    }
  },
  mounted : function(){
    this.$nextTick(function(){
   
      
      var self = this;
      
     // Update title
      setDocTitle('Music Hall');
      

      //After animation start loading
      store.commit('loadingOn');



      // Create array of images to load
      var a = ['wp-content/themes/metacin-wp-theme/dist/img/icon-amazon.png','wp-content/themes/metacin-wp-theme/dist/img/icon-spotify.png','wp-content/themes/metacin-wp-theme/dist/img/icon-itunes.png']; 
      self.posts.forEach(function(p){
        a.push(p.image);
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
      posts : [
        {
          title : 'Earth',
          slug : 'earth',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-1.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Sirens',
          slug : 'sirens',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-2.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Autumn',
          slug : 'autumn',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-3.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Sky',
          slug : 'sky',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-4.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Winter',
          slug : 'winter',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-5.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Solstice',
          slug : 'solstice',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-6.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Obelisk',
          slug : 'obelisk',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-7.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Canon in D',
          slug : 'canon-in-d',
          image : 'wp-content/themes/metacin-wp-theme/dist/img/gallery-8.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        }
      ]
    }
  },
  methods : {},
  mounted : function(){
    this.$nextTick(function(){
   
     // Update title
      setDocTitle('Eye Gallery');
  
      
      var self = this;
      

      //After animation start loading
      store.commit('loadingOn');



      // Create array of images to load
      var a = ['wp-content/themes/metacin-wp-theme/dist/img/icon-amazon.png','wp-content/themes/metacin-wp-theme/dist/img/icon-spotify.png','wp-content/themes/metacin-wp-theme/dist/img/icon-itunes.png']; 
      self.posts.forEach(function(p){
        a.push(p.image);
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
 


var Contact = Vue.extend({
  template : '<div class="coming-soon"><h1>Contact</h1><h2>Coming Soon</h2></div>',
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
      setDocTitle('Contact');
        
      $('html, body').scrollTop(0);
 
    });
  }
});
 


var Album = Vue.extend({
  template : '#albumTemplate',
  store: store,
  mixins : [mixin],
  data : function(){
    return {
      post : {
        title : '',
        content : '',
        image : '',
        slug : ''
      }
    }
  },
  beforeDestroy : function(){
    $('.mpmodal').removeClass('mpmodal--active');
    document.body.classList.remove('no-scroll');
    
  },
  methods : {
    closeAlbum : function(){
      router.push({path : '/music'});
      
   
      // Update title
      setDocTitle('Music Hall');
      return;
    }
  },
  mounted : function(){
    this.$nextTick(function(){
      
      
      // Get Post Info (from parent but soon to be VueX)
      var self = this;
      var p = this.$parent.posts.filter(function(post){
        return post.slug == self.$route.params.slug;
      });
      console.log(p[0]);
      this.post = Object.assign({}, { content : p[0].content, image : p[0].image, slug : p[0].slug, title : p[0].title, tracks : p[0].tracks});

   
     // Update title
      setDocTitle(this.post.title);

      // Display Properties
      $('.mpmodal').addClass('mpmodal--active');
      document.body.classList.add('no-scroll');

      
      
      // Back on Escape
      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
          router.push({path : '/music'});
        }
      });
     
      
      
      // Back on exit button
      $('.mpmodal__exit').click(function(){
        console.log('exit');  
        self.closeAlbum();
      });
      
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
        title : '',
        content : '',
        image : '',
        slug : ''
      }
    }
  },
  beforeDestroy : function(){
    $('.mpmodal').removeClass('mpmodal--active');
    document.body.classList.remove('no-scroll');
    
  },
  methods : {
    closeAlbum : function(){
      router.push({path : '/gallery'});
      // Update title
      setDocTitle('Eye Gallery');
      return;
    }
  },
  mounted : function(){
    this.$nextTick(function(){
      
      var self = this;
      
      var p = this.$parent.posts.filter(function(post){
        return post.slug == self.$route.params.slug;
      });
      
      this.post = Object.assign({}, { content : p[0].content, image : p[0].image, slug : p[0].slug, title : p[0].title });

   
     // Update title
      setDocTitle(this.post.title);
      



      // Display Properties
      $('.mpmodal').addClass('mpmodal--active');
      document.body.classList.add('no-scroll');



      // Back on Escape
      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
          router.push({path : '/gallery'});
        }
      });



      // Back on exit click
      $('.mpmodal__exit').click(function(){
        self.closeAlbum();
      });
      
      function initMPAlbum(){
        
        // Set image height
        var imgHeight = $('.mpalbum__image > img').height() + 15;
        console.log('height', imgHeight);
        $('.mpalbum__progress').height(imgHeight + 'px');
        $('.mpalbum__progress-bar').height(imgHeight + 'px');

        // Set image width
        var imgWidth = $('.mpalbum__image > img').width();
        console.log('width', imgWidth);
        $('.mpalbum__progress').width(imgWidth + 'px');


        // Track Audio Position
        $('.mpalbum__player').bind('play', function(){
          $('.mpalbum__progress-bar').width('0%');
        });

        $('.mpalbum__player').bind('timeupdate', function(){
          console.log (this.currentTime);
          console.log (this.duration);
          console.log ((this.currentTime / this.duration));

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