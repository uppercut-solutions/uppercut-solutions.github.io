'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8a4d4495993477137ecfaf9f14149274",
"index.html": "bace4a0326893a41c91b0cb07cae6124",
"/": "bace4a0326893a41c91b0cb07cae6124",
"main.dart.js": "020825ed2aacd1108d4e19a2a8217f6d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "bb95cf2b3960f65aa8ff5a76a3ea450f",
"icons/Icon-192.png": "9a884e61d21ba857cd44b59f70cff3d5",
"icons/Icon-maskable-192.png": "9a884e61d21ba857cd44b59f70cff3d5",
"icons/Icon-maskable-512.png": "c939c43e7a21c2d1235b55fe3d7ecc80",
"icons/Icon-512.png": "c939c43e7a21c2d1235b55fe3d7ecc80",
"manifest.json": "a59866248c38281a152298354ff5ee1b",
"assets/AssetManifest.json": "5ba01fbecfcf2bbea8851d8cd3e69a26",
"assets/NOTICES": "0702d6823b76c9e2bd957de4621ba4e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "86d701d40c84b2657f2320e0406c1c5c",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/googleplay.png": "f7c965b2475b99fa827e7a00bffde786",
"assets/assets/images/projects/tutti_1.png": "980a2fd04e3d7c1841b90cc6f5d48866",
"assets/assets/images/projects/tutti_2.png": "2c7f1db2e498489877cc11380ebf92f2",
"assets/assets/images/projects/tutti_3.png": "6f7fdde5f7457c7eee9cbb1729b6bacd",
"assets/assets/images/projects/gurifamilia_8.png": "46cbdebbfd717caaf81b4c032b94dcb5",
"assets/assets/images/projects/tutti_4.png": "6fa7efc51c48d17331355247d4bc2183",
"assets/assets/images/projects/tutti_5.png": "2322b1c57bcb7ce30940fe6b519be11e",
"assets/assets/images/projects/guridocentes_3.png": "2538a1080147649947c068db0a151bf2",
"assets/assets/images/projects/guridocentes_2.png": "49363a6b478aff502633723b4399c882",
"assets/assets/images/projects/resitech_4.png": "a602dbfe9a5550e0f64aac348440208e",
"assets/assets/images/projects/guridocentes_1.png": "20b32d62934b12e0cac8888ad68b2a4f",
"assets/assets/images/projects/resitech_5.png": "976cff9de53ad09efebb7e911c876a78",
"assets/assets/images/projects/resitech_1.png": "02febc49f450b2da87fd7b3f3dca75d7",
"assets/assets/images/projects/guridocentes_5.png": "b96d13d1d737a61c2f851bbe5b7f35d6",
"assets/assets/images/projects/guridocentes_4.png": "bba6a26620e6bddc05091a51b9e99c6d",
"assets/assets/images/projects/resitech_2.png": "a666cccfb388efcab22cb57e91a562ab",
"assets/assets/images/projects/guridocentes_6.png": "53933af721ecf454ae0bea2783078dea",
"assets/assets/images/projects/guridocentes_7.png": "a07e6478c6b4d38a8b75ac2d59515bf3",
"assets/assets/images/projects/resitech_3.png": "fda6c94c8f1eaf03010d835c071d5b1d",
"assets/assets/images/projects/guridocentes_8.png": "0c8f3a3332b1c326ab3d52a76440046a",
"assets/assets/images/projects/gurifamiliaweb_3.png": "d98b61bf1306031be6650411c5004299",
"assets/assets/images/projects/gurifamilia_6.png": "5e1cf06aadf4188d609f90dcb88ba31e",
"assets/assets/images/projects/gurifamilia_7.png": "666bb8d4f349c35dc90bc81684be996d",
"assets/assets/images/projects/gurifamiliaweb_2.png": "7961fd8a1e0f432e3feb98dddadb70ec",
"assets/assets/images/projects/gurifamilia_5.png": "e78b0975b5789ee8a6839e4e3295c984",
"assets/assets/images/projects/gurifamilia_4.png": "f5a7f872ba4ea5284fedf0cc93a06ba7",
"assets/assets/images/projects/gurifamiliaweb_1.png": "9be9a11c466e731202ba7e62f2b3fa1f",
"assets/assets/images/projects/gurifamiliaweb_5.png": "66bec4df068124119ee6f24d16957f78",
"assets/assets/images/projects/gurifamilia_1.png": "c7510b5de3861bef6e44452616a9c34d",
"assets/assets/images/projects/gurifamiliaweb_4.png": "7dc056774ab6b3b1b6e901d29ed13e2a",
"assets/assets/images/projects/gurifamiliaweb_6.png": "12519fd538685fb59d3eaad8b3f05d7c",
"assets/assets/images/projects/gurifamilia_3.png": "b30296e905c76063772891cec64b3dd5",
"assets/assets/images/projects/gurifamilia_2.png": "17ccc1b6cf321a0c7f9897974c74abb9",
"assets/assets/images/under_construction.svg": "04a5932b357f610702893ded801912ec",
"assets/assets/images/mac.png": "f00c9a8f98405142b4adeaf23d350dfa",
"assets/assets/images/appstore.png": "d69425725728d51ffa1438301d8ee247",
"assets/assets/images/iphone.png": "18a3fc4be9cc72c2f2f0287d4d02464f",
"assets/assets/images/uppercut-logo.svg": "daf0ce573bfaf799b05480069fb293f3",
"assets/assets/images/phone.png": "7e332d09d1286e7d42be8b401e44fdfb",
"assets/assets/images/uppercut-logo.png": "0987223d2030ce315fc95cef655adb19",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
