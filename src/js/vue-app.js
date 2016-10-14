
var Home = Vue.extend({
  template : '#featuredTemplate',
  data: function(){
    return {
      loaded : false,
      menu : false,
      playing : false
    }
  },
  methods : {
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
    this.$nextTick(function (){
  

      var self = this;
      $('.header__menu-item').click(function(){
        if(!self.menu){
          $('body').addClass('show-nav');
          $('.header__menu-item').html('&#x2715;');
        } else {
          $('body').removeClass('show-nav');
          $('.header__menu-item').html('&#9776;');
        } 
        self.menu = !self.menu;
      });

      $('.header-nav__a').click(function(){    
        $('body').removeClass('show-nav');
        $('.header__menu-item').html('&#9776;');
        self.menu = !self.menu;
      });


      $('html, body').scrollTop(0);




          //Appear on animation
      var $animation_elements = $('.mpfadein');
      var $window = $(window);

      function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = ($window.scrollTop() + 150);
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

      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll');

    });
  }
});

var Music = Vue.extend({
  template : '#musicTemplate',
  data: function(){
    return {
      loaded : false,
      playing : false,
      posts : [
        {
          title : 'Infexious',
          slug : 'infexious',
          image : '/dist/img/album-1.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Kinetic',
          slug : 'kinetic',
          image : '/dist/img/album-2.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Seasons',
          slug : 'seasons',
          image : '/dist/img/album-3.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Odyssey',
          slug : 'odyssey',
          image : '/dist/img/album-4.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Nuvo',
          slug : 'nuvo',
          image : '/dist/img/album-5.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Giving Light 2015',
          slug : 'giving-light-2015',
          image : '/dist/img/album-6.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Giving Light 2014',
          slug : 'giving-light-2014',
          image : '/dist/img/album-7.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Archetype',
          slug : 'archetype',
          image : '/dist/img/album-8.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Giving Light  2013',
          slug : 'giving-light-2013',
          image : '/dist/img/album-9.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Mariposa',
          slug : 'mariposa',
          image : '/dist/img/album-10.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Rhythmology',
          slug : 'rythmology',
          image : '/dist/img/album-11.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Elements',
          slug : 'elements',
          image : '/dist/img/album-12.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Aegis',
          slug : 'aegis',
          image : '/dist/img/album-13.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Code Among Chaos',
          slug : 'code-among-chaos',
          image : '/dist/img/album-14.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Voices of the Moon',
          slug : 'voices-of-the-moon',
          image : '/dist/img/album-15.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>' 
        },
      ]
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
    preload : function(pictureUrls, callback) {
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
    }
  },
  mounted : function(){
    this.$nextTick(function(){
      

      document.body.style.overflow = 'hidden';
      var a = ['/dist/img/icon-amazon.png','/dist/img/icon-spotify.png','/dist/img/icon-itunes.png']; 
      this.posts.forEach(function(p){
        a.push(p.image);
      });
      var self = this;
      this.preload(a, function(){
        self.loaded = true;
        document.body.style.overflow = 'auto';
 
        

        $('.mpgal__item img').hover(function(){
          $('.mpgal').addClass('mpgal--hovered');
        }, function(){
          $('.mpgal').removeClass('mpgal--hovered');
        });

        //SCROLLTOP
        $('html, body').scrollTop(0);
        
   

        //Appear on animation
        var $animation_elements = $('.mpfadein');
        var $window = $(window);

        function check_if_in_view() {
          var window_height = $window.height();
          var window_top_position = ($window.scrollTop() + 150);
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

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');

      });
      
      
      
    });
    
  }
});
 
var Gallery = Vue.extend({
  template : '#galleryTemplate',
  data: function(){
    return {
      loaded : false,
      posts : [
        {
          title : 'Earth',
          slug : 'earth',
          image : '/dist/img/gallery-1.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Sirens',
          slug : 'sirens',
          image : '/dist/img/gallery-2.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Autumn',
          slug : 'autumn',
          image : '/dist/img/gallery-3.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Sky',
          slug : 'sky',
          image : '/dist/img/gallery-4.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Winter',
          slug : 'winter',
          image : '/dist/img/gallery-5.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Solstice',
          slug : 'solstice',
          image : '/dist/img/gallery-6.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Obelisk',
          slug : 'obelisk',
          image : '/dist/img/gallery-7.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        },
        {
          title : 'Canon in D',
          slug : 'canon-in-d',
          image : '/dist/img/gallery-8.png',
          content : '<p>When I get off of this mountain You know where I want to go Straight down the Mississippi River To the Gulf of Mexico </p><p> To Lake George, Louisiana Little Bessie, girl that I once knew And she told me just to come on by If there\'s anything she could do </p><p> Up on Cripple Creek she sends me If I spring a leak she mends me I don\'t have to speak she defends me A drunkard\'s dream if I ever did see one</p>'
        }
      ]
    }
  },
  methods : {
    preload : function(pictureUrls, callback) {
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
    }
  },
  mounted : function(){
    this.$nextTick(function(){

      

      document.body.style.overflow = 'hidden';
      var a = ['/dist/img/icon-amazon.png','/dist/img/icon-spotify.png','/dist/img/icon-itunes.png']; 
      this.posts.forEach(function(p){
        a.push(p.image);
      });
      var self = this;
      this.preload(a, function(){
        self.loaded = true;
        document.body.style.overflow = 'auto';
 
        

        $('.mpgal__item img').hover(function(){
          $('.mpgal').addClass('mpgal--hovered');
        }, function(){
          $('.mpgal').removeClass('mpgal--hovered');
        });

        //SCROLLTOP
        $('html, body').scrollTop(0);
        
   

        //Appear on animation
        var $animation_elements = $('.mpfadein');
        var $window = $(window);

        function check_if_in_view() {
          var window_height = $window.height();
          var window_top_position = ($window.scrollTop() + 150);
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

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');

      });
      

    });
  }
});
 
var Laboratory = Vue.extend({
  template : '<div class="coming-soon"><h1>Laboratory</h1><h2>Coming Soon</h2></div>',
  data: function(){
    return {
      loaded : false 
    }
  },
  mounted : function(){
    this.$nextTick(function(){

      $('html, body').scrollTop(0);

    });
  }
});

var Events = Vue.extend({
  template : '<div class="coming-soon"><h1>Events</h1><h2>Coming Soon</h2></div>',
  data: function(){
    return {
      loaded : false 
    }
  },
  mounted : function(){
    this.$nextTick(function(){

      $('html, body').scrollTop(0);
 
    });
  }
});
 
var Album = Vue.extend({
  template : '#albumTemplate',
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
    document.body.style.overflow = 'auto';
    
  },
  methods : {
    closeAlbum : function(){
      router.push({path : '/music'});
      return;
    }
  },
  mounted : function(){
    this.$nextTick(function(){
      
      var self = this;
      var p = this.$parent.posts.filter(function(post){
        return post.slug == self.$route.params.slug;
      });
      console.log(p[0]);
      this.post = Object.assign({}, { content : p[0].content, image : p[0].image, slug : p[0].slug, title : p[0].title });
      console.log(this.post);


      //Display Properties
      $('.mpmodal').addClass('mpmodal--active');
      document.body.style.overflow = 'hidden';

      //Back on Escape
      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
          router.push({path : '/music'});
        }
      });
      
      $('.mpmodal__exit').click(function(){
        console.log('exit');  
        self.closeAlbum();
      });
      
    });
  }
});

var Art = Vue.extend({
  template : '#artTemplate',
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
    document.body.style.overflow = 'auto';
    
  },
  methods : {
    closeAlbum : function(){
      router.push({path : '/gallery'});
      return;
    }
  },
  mounted : function(){
    this.$nextTick(function(){
      
      var self = this;
      var p = this.$parent.posts.filter(function(post){
        return post.slug == self.$route.params.slug;
      });
      console.log(p[0]);
      this.post = Object.assign({}, { content : p[0].content, image : p[0].image, slug : p[0].slug, title : p[0].title });
      console.log(this.post);


      //Display Properties
      $('.mpmodal').addClass('mpmodal--active');
      document.body.style.overflow = 'hidden';

      //Back on Escape
      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
          router.push({path : '/gallery'});
        }
      });
      
      $('.mpmodal__exit').click(function(){
        console.log('exit');  
        self.closeAlbum();
      });
      
    });
  }
});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
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
      path : '*',
      redirect : '/'
    }
  ]
});



var app = new Vue({
  router : router
}).$mount('#app');