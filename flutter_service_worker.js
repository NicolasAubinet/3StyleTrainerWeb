'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMITMESSAGE": "114e2e6fab6d22d6754ba4b8940ac8b0",
".git/COMMIT_EDITMSG": "e2c19e6d5f2d0c76316af18e3e9e1f5a",
".git/config": "e5b0a69df0ca010e843961c58ddc256e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b230e3ede8f9c3dac94382b1ebb99dbb",
".git/fork-settings": "09468cc5e3fa30705d31c7a51bfa8686",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1eabd5855c0309b468301f5ec0569df2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63778eb0362364c748e56bfdbae36872",
".git/logs/refs/heads/master": "370852e74f7aa8d3b06c442d39c359b7",
".git/logs/refs/remotes/origin/HEAD": "d868aec5c2335ae55a465fc28b44b158",
".git/logs/refs/remotes/origin/master": "c6005df15198e9f393f41dbcc0a2dd77",
".git/objects/04/39655689929b70e0e8edd9d0a457f3b97fae2a": "409fbccb23e09a30555c21e780bafac2",
".git/objects/06/0bda39a79f38a3148e079775c178fa2ebfeeb5": "efaf52d48e3284edb9568bb049f4eb6a",
".git/objects/0e/272fcd328e8a854c6e288a8480fd5216e31fb4": "cc5e947acbad5dbc4dfcea27ca4e4788",
".git/objects/0e/9e199b8c29c85d28e056a7ae6125a1c545f449": "72210ccfa70867a6a972a529b03ef01f",
".git/objects/0f/474bc5d10b5aea8d7358f092ed25b5b5b65e71": "2b7014b280e03dce62fef487514b5f47",
".git/objects/11/017a17a2235418ac7fa910d14e8e2503f61599": "64b387d2195467dad45a4b89d5add46f",
".git/objects/24/73f8e41729e87006eb907adf3c7857b78bd1f5": "f8d6d30bbf0be652a944087d962d7934",
".git/objects/25/84f5aa47a01622c70f7363d407de76713b3456": "fc82e0f498360e4c36ee14f25537fe0b",
".git/objects/27/e9c213c04f8a394683ea5f32f13f072e92799e": "1fc37679fe7d9311b648c2204330bda3",
".git/objects/33/061a84a92296399f65b547558fee2da96ce543": "7a99094b73177d696dfae5d8846f6fcb",
".git/objects/33/81f5ae95304b05900f2fc1e36b610ebeb33ca4": "e3c18e0130083070763e064f09971c8b",
".git/objects/34/37a762d19fddc6dd7c59871b158d8ddd7154b7": "a38d58fc2566de80c6f3601b7b83c901",
".git/objects/4e/693edac0711011f16bb1289612998601844d2b": "e0e6ce67b2f49f48938fb4a511a1d827",
".git/objects/56/e9228204ba1f191053a44197eb3eebbe6943b6": "d9e7b7fd0b2f9a1388ddfc5fe3293988",
".git/objects/57/dc5b8ca27e92fa820e1e907993a62201e25fd0": "8e34a2aecf6b1e46a48f1c8614015b8b",
".git/objects/68/f9ae0ab3221126207c39a3b77181f8667db153": "3f2bdb78ddcb0c1cf3b0a4128cfb9e13",
".git/objects/6e/fcdc686adbb92341da8ec4961442cdb62375a4": "1430f85183dd2565476c1fc1314d6876",
".git/objects/71/b36b89c091f3c3ecc20e9575aa4a01f766eff8": "f3b36cde269929fd90c965585c2ff232",
".git/objects/7a/69a7e7163e5aad7d1c2e2a7665b2191305b65f": "67d0304ad337e19bc8e3d6e50319d6cd",
".git/objects/7b/dc3bcfeee9744b1875d83bd285b47970c1e878": "29274a5f8640b05d8eb5ffff930b8af4",
".git/objects/82/a087f17f1addfa0a6b56a936571b9247a62d52": "6df887711cd317f87a0598c7f8d0cfdf",
".git/objects/8a/ed4ae078b031d5781c8c9717f80ffc641f2140": "78affacc315afae126ba9a4b6e49c76b",
".git/objects/8d/f2364cd2c4d0f0cb637904ed8b81386fe8934d": "8710d7d21f4ca2349d9e5f21e2a8ebb6",
".git/objects/92/09559e23c9c0d7bdcce01ce1a5ca10f5a32060": "99cbe88a6711d52c0ee001c1d4642d56",
".git/objects/93/2981e7db89a3ca98d68f76a4ff7e72d81cfa70": "9f9550bf76417836fcc55f426b08252a",
".git/objects/93/75a42eb11dfe768d0ccd26d250e15106f0efa5": "e513519896891f884bc2e504e3bad87c",
".git/objects/94/f228ce300f7fbd18f463dffa3794b3db34cd55": "b242a35ac84e30cd8617fbc84a91d394",
".git/objects/96/d530553c417497f4e0fdd02f0d17c888aefb74": "80d1d72056c5600871891e5d3dd19db1",
".git/objects/97/a48a6822bce7c5115107275f19a82dbb5141f0": "8f6f825bd2837ecec76730fda31f9a52",
".git/objects/9d/7994fd834e013e2ad1ea667fee2232e996a8c1": "d4d3acb9ac99227e07169dd9b4d5b6bb",
".git/objects/a6/d5c1bc1262be6d6ced5662134ef8b18e07f3d2": "f17e5677c31eec716166ac8ec66636b5",
".git/objects/a8/a0953fa2f485da28ef782f29e64f16b0991988": "04a60869ab4f5a5418780f8a1502f893",
".git/objects/a9/4f1682b151614bdbda427d6978b48d46ed5f3f": "2050b9c73ed5c912e8bb4fccebde31c9",
".git/objects/b4/395b4cbc5ebe9884f32747396967338e6ebb4e": "5cd224da62c0cdc33d32e2927b20850b",
".git/objects/bc/37b2c89180dc80c1a30a94362baae127d42ca7": "fef5574b99d65136c2dc9b2b57a1a5cb",
".git/objects/c4/22013b2d17052739347421ea1896b07fd3a8be": "366be8d206fcc571e0dc27e71e54a839",
".git/objects/cc/729ada0ddb259a591e6e634aa52bdbde9b61b8": "e60e7fd67c48b468d3bf7f502b7807b3",
".git/objects/d1/1da50b875463b41df033415e6a55c0cdabdd87": "a80ea88bcc921ff0a5fcb91c0e2cbb1b",
".git/objects/d3/78a3d38f789e3f1d01e3edabb55001081b7c88": "e94030a18cdb2d6037f8431faa4b43fb",
".git/objects/dc/625710adffba45b17ff81465fa7ab322bdc7a0": "c41bc4ddaf7f1c2b07a53dcba9ae7f0e",
".git/objects/dc/c0aa5e6fb8ea22202f9ccda8a4aaac300f54b0": "f6a8dd32367a4e0c1ab5065c5445587d",
".git/objects/e2/2def2741ec01df4d6dc6bab41a7835f01bad78": "6fd14dfed769b2ab9ea82e2f2366e122",
".git/objects/ec/71f44a044c5ec834d2a9f5ff15cdac682e1b32": "41af43ecf9a11c36e79e97d58b610202",
".git/objects/f1/9b71f069df0a4cd26183a1f8f64895a31f10f5": "a8fb4ff10b766aceee24257e0c797197",
".git/objects/f1/9d73178509307377efbff64253cba6a8c1880c": "eef7eb50ab9c3680b2813c56bf2484f6",
".git/objects/f5/c547fb6b93357415abca7f353ea1d6f6f28d0f": "d28a6326b771fa360d75dd198e7fa1e0",
".git/objects/pack/pack-03da87bd3bdf1ec027c1b070fd0a2c42a83ca68a.idx": "f0751854e8515f2111609ea974cc909b",
".git/objects/pack/pack-03da87bd3bdf1ec027c1b070fd0a2c42a83ca68a.pack": "ff68e0ab0488ea1230c52b4f5b405268",
".git/objects/pack/pack-03da87bd3bdf1ec027c1b070fd0a2c42a83ca68a.rev": "5af124ecc31cf172b86a5772e10c8939",
".git/refs/heads/master": "2bbb64020e98589eb781302d6d8395a0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2bbb64020e98589eb781302d6d8395a0",
"assets/AssetManifest.bin": "ca7e69d6dd8e381c180d18a5f7779901",
"assets/AssetManifest.bin.json": "66d957813e8515515ae16f0c67182bdd",
"assets/AssetManifest.json": "c1986d25907121f4cd6a79a88aaf0961",
"assets/assets/icon/cubench.png": "9885ada0db2e053b95b845890cc53af9",
"assets/assets/icon/icon.png": "491139cf59e513d2964dab71f8a54172",
"assets/FontManifest.json": "70f4cf4e6219ced6870776f9a65cf1cb",
"assets/fonts/MaterialIcons-Regular.otf": "1e076477c7e8d1866a4bdb276df4f04c",
"assets/google_fonts/FiraCode-Bold.ttf": "94ca48ca47d40c014cfbb61b4772d0ad",
"assets/google_fonts/FiraCode-Light.ttf": "c655a614d7f118ae2e2bdb8ad817e698",
"assets/google_fonts/FiraCode-Medium.ttf": "b0ddf317b784a268d2a732a3ee4bb965",
"assets/google_fonts/FiraCode-Regular.ttf": "a09618fdaaa2aef4b7b45e26b7267763",
"assets/google_fonts/FiraCode-Retina.ttf": "0c564def7dd081229c612d1494e60ed5",
"assets/google_fonts/FiraCode-SemiBold.ttf": "dc9c69ba9623a4930d212150bbd3c6f8",
"assets/NOTICES": "4f0312ffc436667308db17f4f483c7ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "54b4d4e2e0c1932490fd7b3921b1999d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ea71c1648c2dc3b6f5fd6d0d6b529ab8",
"icons/Icon-192.png": "3989d5d856d33aeece06e108118fe89a",
"icons/Icon-512.png": "585efe07c0c8578d7f4a236c4c0cc68d",
"icons/Icon-maskable-192.png": "3989d5d856d33aeece06e108118fe89a",
"icons/Icon-maskable-512.png": "585efe07c0c8578d7f4a236c4c0cc68d",
"index.html": "56f38399d231cd0a3727d542f8211cc4",
"/": "56f38399d231cd0a3727d542f8211cc4",
"main.dart.js": "55b48a009d0270827b6cf68d948a8aac",
"manifest.json": "128d6dbae2140a8dc270e12145d75de2",
"sqflite_sw.js": "b33d5d23a10fb2afb682e01d36f59ead",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "e5477c90c822c3a6beb57cf33f61779c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
