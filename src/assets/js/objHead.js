// import $ from "jquery";

var site = site || {};
site.window = $(window);
site.document = $(document);
site.Width = site.window.width();
site.Height = site.window.height();

var Background = function() {};

Background = function() {

   // const particlehead = document.getElementById("particlehead");
   // // particlehead ? particlehead.childNodes[0].id = "kk" : null
   // const newss = particlehead.childNodes
    console.log("particlehead", $);
   if ( !Modernizr.webgl ) {
      alert('Your browser dosent support WebGL');
   }

   var camera, scene, renderer;
   var mouseX = 0, mouseY = 0;
   var p;

   var windowHalfX = site.Width / 2;
   var windowHalfY = site.Height / 2;

   Background.camera = new THREE.PerspectiveCamera( 35, site.Width / site.Height, 1, 1000 );
   Background.camera.position.z = 300;

   // scene
   Background.scene = new THREE.Scene();

   // texture
   var manager = new THREE.LoadingManager();
   manager.onProgress = function ( item, loaded, total ) {
      //console.log('webgl, twice??');
      //console.log( item, loaded, total );
   };


   // particles
   var p_geom = new THREE.Geometry();
   var p_material = new THREE.ParticleBasicMaterial({
      color: 0xF23B3A,
      size: 1.5,
   });

   // model
   var loader = new THREE.OBJLoader( manager );
   loader.load( 'head.obj', function ( object ) {
console.log(object)
      object.traverse( function ( child ) {

         if ( child instanceof THREE.Mesh ) {

            // child.material.map = texture;

            var scale = 8;

            $(child.geometry.vertices).each(function() {
               p_geom.vertices.push(new THREE.Vector3(this.x * scale, this.y * scale, this.z * scale));
            })
         }
      });

      Background.scene.add(p)
   });

   p = new THREE.ParticleSystem(
      p_geom,
      p_material
   );

   Background.renderer = new THREE.WebGLRenderer({ alpha: true });
   Background.renderer.setSize( site.Width, site.Height );
   Background.renderer.setClearColor(0x000000, 0);

   setTimeout(() => {
      $('#particlehead').append(Background.renderer.domElement);
   $('#particlehead').on('mousemove', onDocumentMouseMove);

   }, 500)
   site.window.on('resize', onWindowResize);

   function onWindowResize() {
      windowHalfX = site.Width / 2;
      windowHalfY = site.Height / 2;
      //console.log(windowHalfX);

      Background.camera.aspect = site.Width / site.Height;
      Background.camera.updateProjectionMatrix();

      Background.renderer.setSize( site.Width, site.Height );
   }

   function onDocumentMouseMove( event ) {
      mouseX = ( event.clientX - windowHalfX ) / 2;
      mouseY = ( event.clientY - windowHalfY ) / 2;
   }

   Background.animate = function() { 

      Background.ticker = TweenMax.ticker;
      Background.ticker.addEventListener("tick", Background.animate);

      render();
   }

   function render() {
      Background.camera.position.x += ( (mouseX * .5) - Background.camera.position.x ) * .05;
      Background.camera.position.y += ( -(mouseY * .5) - Background.camera.position.y ) * .05;

      Background.camera.lookAt( Background.scene.position );

      Background.renderer.render( Background.scene, Background.camera );
   }

   render();

   Background.animate();
};


Background();