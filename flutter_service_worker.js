'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMITMESSAGE": "098f6bcd4621d373cade4e832627b4f6",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "e5b0a69df0ca010e843961c58ddc256e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7b95926d54a9168ee26c63abda9efc43",
".git/fork-settings": "57c971686c9972833900d5a3b2d3d54f",
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
".git/index": "3e630d78e90467c91f39beedfeb03ef6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1980b6de803b658e6ed13907a17f8816",
".git/logs/refs/heads/master": "0439803f51ca61f5ac71fde7d6bf3ae6",
".git/logs/refs/heads/test": "933c5c7df0f4f4e962a89b1c26616d08",
".git/logs/refs/remotes/origin/master": "65521b184b1cf13c635f1dc56f96ba02",
".git/objects/06/ec12313f3d87f7ca1dce2c66dd1fda2083f07e": "0ab1acf5d644d077bb9acc7ff4ef1383",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/90fe1d4d73c93b25d22cd2fd42fe291001fac1": "6054f4ad46849cae26de293da59d912a",
".git/objects/13/b96165713b2ebe074f8b0f6a74d657c7a474df": "31b20b363547f0a195c5068fc068a179",
".git/objects/1c/e36c6d29e37dca8ecb4ec6e524432250b1ee49": "e9e16f6f2d5193c29447f1b3b62ec867",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/1eeb9e9f8b2b4b0d119366dda99c6fd7d35c64": "36b35938e0c57b26db0cfe487524a192",
".git/objects/2a/27625de280cc49eb67f8e8805a6a87cbc6aede": "f2fa987e81328b8e6d762d7f3b90bfd1",
".git/objects/2a/4863f3af7a3e87679b3c8390442c33ba1d73ec": "f949fbd4377d15991f940d7983d42b87",
".git/objects/2c/0ecdf123d5f5d262dc27a4566267841e6b0875": "6bc1a5011cb5fb8ae25f5b260009f906",
".git/objects/2d/28b33f8d0e89ebb50479718cc2277bb7bfe394": "f93fabe11cb0ab2b33a276cf26afb81f",
".git/objects/2e/034abd172b092cef7f70df82fcd8e90d9898a1": "50a5521e0c86cbb5df667122f6455b7b",
".git/objects/2e/50721aefe8ed98190bfe18e19f7a426079e5e4": "35f98faa67136cba4d34d3a4054653c0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/b2894c45f2308a80c7fafaac2da8eb861f98ae": "ae55589ab897d8a35bc2c329e4c1d98f",
".git/objects/3a/4aac82145d20347628d3dc87ed27dcb48f4e9a": "cf0e8db0e7f5ba1eaae24e4b24c1d2a5",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/594636c1d063517c211a1d4780993a56e18e24": "3c2c8532ab852b37510e73fe8ddc5284",
".git/objects/43/6de7053cbd7f6aba0c6abfe4254ad9cff6727d": "db6e58fb0e38c3eadba6c6612ee5337e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4a/d3721828c40787cd7cfe126d11b95c5bf8c720": "3e20795bce2e343b9819e8939735711b",
".git/objects/4b/89a184167db0e2629b1decff9584ab016b822d": "c592af159e512c1a02107671c9601983",
".git/objects/4f/78d9987123d5da7fa7cb1eeb3a28a7faaaf63b": "3f88f71296a7e6bc4581aeef01290b72",
".git/objects/4f/bb4722beb2809f2d8e6c1a022f164fc1eb6cb9": "bf4b66ec9c923068bc43b3611220f6dd",
".git/objects/51/0002eab95c30be94535c1d37b541fc6c5a398c": "9dbbc503bcaa3477b94bfa1150e99865",
".git/objects/56/64ec3d3219c84d79ae2d3085bde424e77b208f": "79faf28371e7b6d5774cb49e4efee280",
".git/objects/59/ec637669c4d27b460a6dea30bf631f1e705f24": "e04dc3db951b8187fdab27759909596f",
".git/objects/5f/3cc64210de40d835cb89c1987b700d4633baca": "40defa289aa9dea5faec8062a54aa958",
".git/objects/60/6c8e8888378d6adc78b98b8a6ff4248b4f62d5": "6055ef8f8153aca04293513a4c9a5889",
".git/objects/66/0742d61d11ff8fccda78a436f0096a1c650c9b": "e2720ca545b06996fdf54310e7e6b6ef",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/da1981ec5932851cf8bf4f4988e0e451c28e1f": "1b56a7d3ed6d89fa30511e332aaab4da",
".git/objects/7e/b938d0ad61c39ede3f796ff6ba474285eec1f5": "7a766b926aa8f2214aeeb5503f88ac01",
".git/objects/83/0dd8c57f0d10e315dcc693c457575d9f7e0fb8": "2501a88bd3891fe5a362bcb44ac8dac1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d30f614ef22719924a8c35bd2185cb400f828c": "c9930f48c7546d2e5ecb86f114f4f002",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aa5cf9af9a8312108f15f83a0a6d1ad1f8257e": "a8d072cd58ea5372177d9946c833d804",
".git/objects/8f/57a99980891ccc68701b94b94342f7ae0e02d6": "1fbb678a273d6cb7864e009f9bfa84c9",
".git/objects/8f/b6ebd9c904edd40e1b0d07d719f9378211362a": "db97e77f1d4ac86ce7ca61cdbf73bbc2",
".git/objects/8f/f02cff86ee574fd27f74fb8bf5e7085e18ba92": "8778daf8b1bbd9d5d4f81e4c9808137b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/19d260dcd1f52571b5fc0de3340efb77ca4daf": "7dea2c13957c248a13847e91e88ce16a",
".git/objects/93/9ef7857d6628d2edf3530785bb336a4065287f": "966ae7bee4200471509505a37a53f45f",
".git/objects/97/3158882b302d55bf723edb72c1d9bb296dbfd6": "73af86f3809287b6063863b095aca6ec",
".git/objects/97/6cdf97d0a23a975dba19344756ce683e5a985b": "064a09bd1d4590f6794d5414b0a8cf34",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/10c45c586d50d116d1c132cc0de165d45d2303": "d0c4a4a7e3a9827a059b0983d3f01c9e",
".git/objects/9b/5c669fce79e945eb3b5dc4fe19e1357dd363e9": "a2f724c3e9ebf6f982f9b44bb7a4ad18",
".git/objects/af/ed3e23936556e116d3206930b54bc09b4ad1a3": "d1594e9a2c450d2ee1fe8e329c3b3f14",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/736851948d2d76483b434113e2d9ee35554446": "319ea2f915002ec552ee33aa880d08d5",
".git/objects/be/71fe4b2c81a6306153abdff0da1745c73e328f": "ef6671b85ff87f39704bf64d8a30d523",
".git/objects/bf/07f031c2cd1271c8784bea11fbf052a035d6a8": "a20d917727e7edddf38a7e30af931054",
".git/objects/bf/89c972b43e6de97a2d7462b81b44ea7e664f81": "b14f0e5f0fd2100af72dbf48ed21753c",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c4/39d2801275817e1e1110110db76b38bb506f94": "5a7190a6b2fb2b12e08144e0a65ae71c",
".git/objects/cd/1b7d626eae691d98032c9b9c8038a3e925172b": "9124a86c1a2df93ac75798aba9aef006",
".git/objects/cd/3c69e09cd12faee8e2182ddca43f9590210520": "295190485297b4583810287a78008cc8",
".git/objects/ce/2059df482b2ff9a54d6265cafd35df9c46d472": "5bc1ed65507b1500cb7a0e5cdd1b9810",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/5733434643aa5a9375cd9ca14d121d9b30bb27": "994b331912d07d7709b66875ec92b065",
".git/objects/d1/ade312c10153a32f0c209e61addea70ffdfc31": "902a23967189d73c33ff0bfed9b521ad",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0c59ee8876538ab16d53f57ce62e922ebfb10a": "d594455ed266b0632df13219ebc19be8",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dcef664842ec8ca1f06949ae4aa1f9a2d42180": "e0d3f80ee26444877413bebccc02e3f0",
".git/objects/da/882968ef94ff63aebfa49b9abddb5e25c1caae": "b496126487dc73c4877e4e2d14c0dc7e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/53e251cbcaccd190e25a502966162b71b1aa9d": "effe99f4924db07ca65f77382831f712",
".git/objects/dd/cb3171adf346c6d98f6b182e511276f77533b6": "91135da7422d24310b0e6ba2ecf967fc",
".git/objects/dd/f632a52d3a8848affc967b1e76d5e5e42a6597": "52d953c1fbfd9057937078e0e5716647",
".git/objects/e6/55b9226de7eab6a836209944cdba884fa6581f": "df6826beb4050333617cbf67fa7fc7a6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/14facb97d8218c23959c50a460c0dcc403bd8e": "fca0b79a786336d59c4db3b63592eb03",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/68b278280ca66c17298a0e4d9e8d609933ab57": "aecdeccc3e634bb26120d97f875ebfd1",
".git/objects/f8/2f2957b99771b6bc255b7f72551ce55495fafe": "4ce933e32cc7b0328e40c53f9aeb78ca",
".git/objects/f8/91bde430c883076609d8b5f6fa832f3d69b67c": "8bc1e212c0e0fa1a038e37a5696666ad",
".git/refs/heads/master": "0503ab43bc3ca56bc02eefd6df3f0955",
".git/refs/heads/test": "d259d23df2dcceb71e695a2a0eb69fb3",
".git/refs/remotes/origin/master": "0503ab43bc3ca56bc02eefd6df3f0955",
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
"assets/NOTICES": "92a7901d02ef1c8f725cc345f9847f63",
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
"flutter_bootstrap.js": "00b5c7dd9e39928b885e16773861826e",
"icons/Icon-192.png": "673848d2b4f9fcad97eb5b987e85eb5d",
"icons/Icon-512.png": "96b5b64afa4ababebe695a92ee8198e7",
"icons/Icon-maskable-192.png": "673848d2b4f9fcad97eb5b987e85eb5d",
"icons/Icon-maskable-512.png": "96b5b64afa4ababebe695a92ee8198e7",
"index.html": "e177be93d4af2925aa274eab26a040d1",
"/": "e177be93d4af2925aa274eab26a040d1",
"LICENSE": "d229da563da18fe5d58cd95a6467d584",
"main.dart.js": "e51e0d4b049339afc6b4537b9ab8c3e1",
"manifest.json": "6a59d11f60e7c6c94171f4fc3e2ce993",
"sqflite_sw.js": "b33d5d23a10fb2afb682e01d36f59ead",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
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
