'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMITMESSAGE": "2e2511f63e7d1fe31dba9a2f9ee3d309",
".git/COMMIT_EDITMSG": "4ee70fa7454311bf6c8e1d4582c783ea",
".git/config": "e5b0a69df0ca010e843961c58ddc256e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d4dd447598dc2afb6b8e710d687abdb0",
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
".git/index": "ddd565737583db4b854ba4f84e5e4234",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3e3b36603a4bdb591c1cc62d9712c9f",
".git/logs/refs/heads/master": "d3b78a7fa703e9b30369ce73ed871abf",
".git/logs/refs/remotes/origin/HEAD": "d868aec5c2335ae55a465fc28b44b158",
".git/logs/refs/remotes/origin/master": "59fa0bbcc99c9bd988a16a98d2add821",
".git/objects/04/39655689929b70e0e8edd9d0a457f3b97fae2a": "409fbccb23e09a30555c21e780bafac2",
".git/objects/0e/9e199b8c29c85d28e056a7ae6125a1c545f449": "72210ccfa70867a6a972a529b03ef01f",
".git/objects/33/061a84a92296399f65b547558fee2da96ce543": "7a99094b73177d696dfae5d8846f6fcb",
".git/objects/33/81f5ae95304b05900f2fc1e36b610ebeb33ca4": "e3c18e0130083070763e064f09971c8b",
".git/objects/57/dc5b8ca27e92fa820e1e907993a62201e25fd0": "8e34a2aecf6b1e46a48f1c8614015b8b",
".git/objects/7a/69a7e7163e5aad7d1c2e2a7665b2191305b65f": "67d0304ad337e19bc8e3d6e50319d6cd",
".git/objects/8d/f2364cd2c4d0f0cb637904ed8b81386fe8934d": "8710d7d21f4ca2349d9e5f21e2a8ebb6",
".git/objects/92/09559e23c9c0d7bdcce01ce1a5ca10f5a32060": "99cbe88a6711d52c0ee001c1d4642d56",
".git/objects/93/2981e7db89a3ca98d68f76a4ff7e72d81cfa70": "9f9550bf76417836fcc55f426b08252a",
".git/objects/93/75a42eb11dfe768d0ccd26d250e15106f0efa5": "e513519896891f884bc2e504e3bad87c",
".git/objects/a9/4f1682b151614bdbda427d6978b48d46ed5f3f": "2050b9c73ed5c912e8bb4fccebde31c9",
".git/objects/c4/22013b2d17052739347421ea1896b07fd3a8be": "366be8d206fcc571e0dc27e71e54a839",
".git/objects/cc/729ada0ddb259a591e6e634aa52bdbde9b61b8": "e60e7fd67c48b468d3bf7f502b7807b3",
".git/objects/ec/71f44a044c5ec834d2a9f5ff15cdac682e1b32": "41af43ecf9a11c36e79e97d58b610202",
".git/objects/f1/9d73178509307377efbff64253cba6a8c1880c": "eef7eb50ab9c3680b2813c56bf2484f6",
".git/objects/pack/pack-03da87bd3bdf1ec027c1b070fd0a2c42a83ca68a.idx": "f0751854e8515f2111609ea974cc909b",
".git/objects/pack/pack-03da87bd3bdf1ec027c1b070fd0a2c42a83ca68a.pack": "ff68e0ab0488ea1230c52b4f5b405268",
".git/objects/pack/pack-03da87bd3bdf1ec027c1b070fd0a2c42a83ca68a.rev": "5af124ecc31cf172b86a5772e10c8939",
".git/refs/heads/master": "4170219e1033c32f943fcf93181ceccb",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4170219e1033c32f943fcf93181ceccb",
"assets/AssetManifest.bin": "9a565ec70a7f467d23e3a3e073782fae",
"assets/AssetManifest.bin.json": "f9ea73be5208f47c2187d0baafc26861",
"assets/AssetManifest.json": "95b1923ef4ba9cb503324ec0749cd614",
"assets/assets/icon/icon.png": "491139cf59e513d2964dab71f8a54172",
"assets/FontManifest.json": "70f4cf4e6219ced6870776f9a65cf1cb",
"assets/fonts/MaterialIcons-Regular.otf": "1307ce2e4128f930f69004d52c153349",
"assets/google_fonts/FiraCode-Bold.ttf": "94ca48ca47d40c014cfbb61b4772d0ad",
"assets/google_fonts/FiraCode-Light.ttf": "c655a614d7f118ae2e2bdb8ad817e698",
"assets/google_fonts/FiraCode-Medium.ttf": "b0ddf317b784a268d2a732a3ee4bb965",
"assets/google_fonts/FiraCode-Regular.ttf": "a09618fdaaa2aef4b7b45e26b7267763",
"assets/google_fonts/FiraCode-Retina.ttf": "0c564def7dd081229c612d1494e60ed5",
"assets/google_fonts/FiraCode-SemiBold.ttf": "dc9c69ba9623a4930d212150bbd3c6f8",
"assets/NOTICES": "ae97f5f05277754d86883643446f68f7",
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
"flutter_bootstrap.js": "219beafa5951cf7fb02b1cbda353a106",
"icons/Icon-192.png": "3989d5d856d33aeece06e108118fe89a",
"icons/Icon-512.png": "585efe07c0c8578d7f4a236c4c0cc68d",
"icons/Icon-maskable-192.png": "3989d5d856d33aeece06e108118fe89a",
"icons/Icon-maskable-512.png": "585efe07c0c8578d7f4a236c4c0cc68d",
"index.html": "e177be93d4af2925aa274eab26a040d1",
"/": "e177be93d4af2925aa274eab26a040d1",
"main.dart.js": "2724037b1a6e0cba411825d65e156230",
"manifest.json": "16589995843ac2dfa4ae929dde9b46c8",
"sqflite_sw.js": "b33d5d23a10fb2afb682e01d36f59ead",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "364b458f4d4e174fa01ed9f114217fca"};
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
