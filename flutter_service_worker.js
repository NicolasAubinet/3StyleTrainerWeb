'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMITMESSAGE": "1a6d58fe5863cbfafb31ded2299f249a",
".git/COMMIT_EDITMSG": "da4445896355c969221db27512964dfd",
".git/config": "3bb9d243b9a690ccbbbb4422ebc70c88",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1f204238a488c1914e5512f915af6c89",
".git/fork-settings": "746da26f4c46ebc2aafd429475fb60ce",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "74f55c748639037f84ee3663fc42e0e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a2c1322bcac67c9b4062c75995dedbf",
".git/logs/refs/heads/master": "cb81d48a1ea39acb31ffd09298886777",
".git/logs/refs/heads/web-fix-attempts": "561fb1498fbd8436b6dace5616a9b685",
".git/logs/refs/remotes/origin/HEAD": "a3cbc2b025ae4e32c35dfd9cc530f5d7",
".git/logs/refs/remotes/origin/master": "67ee22d3fdd53c9dfb918fd456e4b15e",
".git/logs/refs/remotes/origin/web-fix-attempts": "95905b43fbcfabfa439877bf7efec143",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/90fe1d4d73c93b25d22cd2fd42fe291001fac1": "6054f4ad46849cae26de293da59d912a",
".git/objects/13/b96165713b2ebe074f8b0f6a74d657c7a474df": "31b20b363547f0a195c5068fc068a179",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/fadc4de84da0342b5b8c299f28b363c42db07c": "88210ea33b82c6e1eb52d5af58a25349",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/27625de280cc49eb67f8e8805a6a87cbc6aede": "f2fa987e81328b8e6d762d7f3b90bfd1",
".git/objects/2c/0ecdf123d5f5d262dc27a4566267841e6b0875": "6bc1a5011cb5fb8ae25f5b260009f906",
".git/objects/2d/28b33f8d0e89ebb50479718cc2277bb7bfe394": "f93fabe11cb0ab2b33a276cf26afb81f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/b0fd82dc650a1dedc413d5c8aa98c85d1d6c31": "278cf707f374010d3ce183d5d41179a0",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/4bf96a0a7c77850b6998419dfedb1207249ef6": "b0b31071aeaafaa685e5b1c259773b80",
".git/objects/3f/ad509fccf08103bfda4e3e59bb69571928e449": "9f52ccaa4c3aefcbe77ff40607f5a60c",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/89a184167db0e2629b1decff9584ab016b822d": "c592af159e512c1a02107671c9601983",
".git/objects/4f/bb4722beb2809f2d8e6c1a022f164fc1eb6cb9": "bf4b66ec9c923068bc43b3611220f6dd",
".git/objects/51/0002eab95c30be94535c1d37b541fc6c5a398c": "9dbbc503bcaa3477b94bfa1150e99865",
".git/objects/54/89c30c8e1b9c9f8e098714e14a790e9b17164f": "80384fef06a17f9a9a51e2c132bda133",
".git/objects/56/64ec3d3219c84d79ae2d3085bde424e77b208f": "79faf28371e7b6d5774cb49e4efee280",
".git/objects/60/6c8e8888378d6adc78b98b8a6ff4248b4f62d5": "6055ef8f8153aca04293513a4c9a5889",
".git/objects/66/0742d61d11ff8fccda78a436f0096a1c650c9b": "e2720ca545b06996fdf54310e7e6b6ef",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/da1981ec5932851cf8bf4f4988e0e451c28e1f": "1b56a7d3ed6d89fa30511e332aaab4da",
".git/objects/83/0dd8c57f0d10e315dcc693c457575d9f7e0fb8": "2501a88bd3891fe5a362bcb44ac8dac1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d30f614ef22719924a8c35bd2185cb400f828c": "c9930f48c7546d2e5ecb86f114f4f002",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/b6ebd9c904edd40e1b0d07d719f9378211362a": "db97e77f1d4ac86ce7ca61cdbf73bbc2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/04a606f42c9f267772a6ca1b5ee41683678d49": "98071418376193506aa52f57e977517f",
".git/objects/97/6cdf97d0a23a975dba19344756ce683e5a985b": "064a09bd1d4590f6794d5414b0a8cf34",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/736851948d2d76483b434113e2d9ee35554446": "319ea2f915002ec552ee33aa880d08d5",
".git/objects/be/ad897959d69fc59cdcef5687e27bbb38742338": "b766ea03d3597b32f34157059a5fccb4",
".git/objects/c4/39d2801275817e1e1110110db76b38bb506f94": "5a7190a6b2fb2b12e08144e0a65ae71c",
".git/objects/ce/2059df482b2ff9a54d6265cafd35df9c46d472": "5bc1ed65507b1500cb7a0e5cdd1b9810",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/5733434643aa5a9375cd9ca14d121d9b30bb27": "994b331912d07d7709b66875ec92b065",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0c59ee8876538ab16d53f57ce62e922ebfb10a": "d594455ed266b0632df13219ebc19be8",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dcef664842ec8ca1f06949ae4aa1f9a2d42180": "e0d3f80ee26444877413bebccc02e3f0",
".git/objects/da/882968ef94ff63aebfa49b9abddb5e25c1caae": "b496126487dc73c4877e4e2d14c0dc7e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/53e251cbcaccd190e25a502966162b71b1aa9d": "effe99f4924db07ca65f77382831f712",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/68b278280ca66c17298a0e4d9e8d609933ab57": "aecdeccc3e634bb26120d97f875ebfd1",
".git/objects/f8/2f2957b99771b6bc255b7f72551ce55495fafe": "4ce933e32cc7b0328e40c53f9aeb78ca",
".git/objects/f8/91bde430c883076609d8b5f6fa832f3d69b67c": "8bc1e212c0e0fa1a038e37a5696666ad",
".git/objects/pack/pack-e658e62af4f89588637c043e858574894b36f08e.idx": "d3e4fe08e5c198dc4a986c77a5087027",
".git/objects/pack/pack-e658e62af4f89588637c043e858574894b36f08e.pack": "94c636f78a3b48d9ffa24ed91151bc3b",
".git/objects/pack/pack-e658e62af4f89588637c043e858574894b36f08e.rev": "c99568414cb700e97c921ba67443214a",
".git/packed-refs": "82c198349cd7e0252bd2d4432541d9b8",
".git/refs/heads/master": "24869bc2a7b3ae4d4dfdf540e9169684",
".git/refs/heads/web-fix-attempts": "c4bd1ea6d41f01e511f61ceceb730b3e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "24869bc2a7b3ae4d4dfdf540e9169684",
".git/refs/remotes/origin/web-fix-attempts": "c4bd1ea6d41f01e511f61ceceb730b3e",
"assets/AssetManifest.bin": "cfb3c2d6916de16d2cac36cc3cec8aff",
"assets/AssetManifest.bin.json": "cc895604375106205e3abd5d2e7e531d",
"assets/AssetManifest.json": "683cedbf99abd8dcdd9d0e391c448c47",
"assets/FontManifest.json": "70f4cf4e6219ced6870776f9a65cf1cb",
"assets/fonts/MaterialIcons-Regular.otf": "cd7127f35bbf284fde25772b785dca16",
"assets/google_fonts/FiraCode-Bold.ttf": "94ca48ca47d40c014cfbb61b4772d0ad",
"assets/google_fonts/FiraCode-Light.ttf": "c655a614d7f118ae2e2bdb8ad817e698",
"assets/google_fonts/FiraCode-Medium.ttf": "b0ddf317b784a268d2a732a3ee4bb965",
"assets/google_fonts/FiraCode-Regular.ttf": "a09618fdaaa2aef4b7b45e26b7267763",
"assets/google_fonts/FiraCode-Retina.ttf": "0c564def7dd081229c612d1494e60ed5",
"assets/google_fonts/FiraCode-SemiBold.ttf": "dc9c69ba9623a4930d212150bbd3c6f8",
"assets/NOTICES": "d274d8cf39d87f250ed7b3c6ec158fd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "78d08dfd77db4d106b3d67067205f887",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "40f9cad092212e837797a7254436d181",
"icons/Icon-192.png": "673848d2b4f9fcad97eb5b987e85eb5d",
"icons/Icon-512.png": "96b5b64afa4ababebe695a92ee8198e7",
"icons/Icon-maskable-192.png": "673848d2b4f9fcad97eb5b987e85eb5d",
"icons/Icon-maskable-512.png": "96b5b64afa4ababebe695a92ee8198e7",
"index.html": "707ef2778217b24fac2a24c53169c5e6",
"/": "707ef2778217b24fac2a24c53169c5e6",
"LICENSE": "d229da563da18fe5d58cd95a6467d584",
"main.dart.js": "b9cd25bb89e1797d027a266eb92dc12d",
"manifest.json": "eee570776118bfe595ba8d37a2975751",
"version.json": "faba475054e77b1f01e2a50a98e4a2bd"};
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
