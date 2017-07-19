<!doctype html>
<html class="no-js" lang="en">
 
  <head>
   
    <meta charset="utf-8">
    
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    
    <title>Metacin - Beyond Metacin</title>
    
    <meta name="description" content="">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
    
  </head>
  
  <body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="main-entry" id="app">
     
      <div id="particles"></div>

      <header class="header" v-bind:class="$route.name === 'music' || $route.name === 'gallery' || $route.name === 'laboratory' || $route.name === 'events' ? 'header--active' : ''">
       
        <div class="header__site-info">
         
          <router-link to="/" class="header__title">
           
            METACIN
            
          </router-link>
          
          <div class="header__subtitle">
           
            Beyond Medicine &reg;
            
          </div>
          
        </div>
        
         <a class="header__menu-item header__mobile-link">
          
           M&#9776;
           
         </a>
         
         <nav class="header-nav">
          
           <div class="header-nav__wrapper">
            
             <router-link class="header-nav__a" active-class="header-nav__a-home-active" to="/">
             
               <span>Home</span>
             
             </router-link>
             
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/music">
             
               <span>Music Hall</span>
             
             </router-link>
             
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/gallery">
             
               <span>Eye Gallery</span>
             
             </router-link>
             
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/laboratory">
             
               <span>Laboratory</span>
             
             </router-link>
             
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/events">
             
               <span>Events</span>
             
             </router-link>
             
             <router-link class="header-nav__a" active-class="header-nav__a-active" to="/contact">
              
               <span>Contact</span>
             
             </router-link>
             
           </div>
           
         </nav>
         
         
      </header>
      
      <div class="mprouter" v-bind:class="$route.name === 'music' || $route.name === 'gallery' || $route.name === 'laboratory' || $route.name === 'events' ? 'mprouter--sub' : 'mprouter--main'">

        <div class="mpscroll" v-if="$route.name !== 'page'">
         
          <a class="mpscroll__inner">
             &#10151;
          </a>
          
        </div>  
  
        <router-view></router-view>
        
      </div>
      
      
      <footer>
        
        <p>&copy; 2017 Metacin. <router-link :to="'/contact'">Contact</router-link>. </p>
        
      </footer>
      
    </div>

  
     <?php get_template_part( 'templates/featured' ); ?>
     
     <?php get_template_part( 'templates/music' ); ?>
     
     <?php get_template_part( 'templates/album' ); ?>
     
     <?php get_template_part( 'templates/gallery' ); ?>
     
     <?php get_template_part( 'templates/art' ); ?>
     
     <?php get_template_part( 'templates/laboratory' ); ?>
     
     <?php get_template_part( 'templates/events' ); ?>
     
     <?php get_template_part( 'templates/page' ); ?>
    
     <?php wp_footer(); ?>
   
  </body>
  
</html>