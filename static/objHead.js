var site = site || {};
(site.window = $(window)), (site.document = $(document)), (site.Width = (3 * site.window.width()) / 5), (site.Height = site.window.height());
var Background = function () {};
(Background = function () {
   Modernizr.webgl || alert("Your browser dosent support WebGL");
   var e,
      n = 0,
      r = 0,
      t = site.Width / 2,
      i = site.Height / 2;
   (Background.camera = new THREE.PerspectiveCamera(35, site.Width / site.Height, 1, 2e3)), (Background.camera.position.z = 300), (Background.scene = new THREE.Scene());
   var a = new THREE.LoadingManager();
   a.onProgress = function (e, n, r) {};
   var o = new THREE.Geometry(),
      c = new THREE.ParticleBasicMaterial({
         color: 15874874,
         size: 1.5
      });

   function d() {
      (Background.camera.position.x += (0.5 * n - Background.camera.position.x) * 0.05),
      (Background.camera.position.y += (-(0.5 * r) - Background.camera.position.y) * 0.05),
      Background.camera.lookAt(Background.scene.position),
         Background.renderer.render(Background.scene, Background.camera);
   }
   new THREE.OBJLoader(a).load("head.obj", function (n) {
         n.traverse(function (e) {
               e instanceof THREE.Mesh &&
                  $(e.geometry.vertices).each(function () {
                     o.vertices.push(new THREE.Vector3(8 * this.x, 8 * this.y, 8 * this.z));
                  });
            }),
            Background.scene.add(e);
      }),
      (e = new THREE.ParticleSystem(o, c)),
      (Background.renderer = new THREE.WebGLRenderer({
         alpha: !0
      })),
      Background.renderer.setSize(site.Width, site.Height),
      Background.renderer.setClearColor(0, 0),
      $(".particlehead").append(Background.renderer.domElement),
      $(".particlehead").on("mousemove", function e(a) {
         (n = (a.clientX - t) / 2), (r = (a.clientY - i) / 2);
      }),
      site.window.on("resize", function e() {
         (t = site.Width / 2), (i = site.Height / 2), (Background.camera.aspect = site.Width / site.Height), Background.camera.updateProjectionMatrix(), Background.renderer.setSize(site.Width, site.Height);
      }),
      (Background.animate = function () {
         (Background.ticker = TweenMax.ticker), Background.ticker.addEventListener("tick", Background.animate), d();
      }),
      d(),
      Background.animate();
})();