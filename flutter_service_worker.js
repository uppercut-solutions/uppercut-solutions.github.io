'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8a4d4495993477137ecfaf9f14149274",
"index.html": "55d6e6cbb355609c4244eed79b2efe36",
"/": "55d6e6cbb355609c4244eed79b2efe36",
"main.dart.js": "fe98c242d78e40c18cebd78d6b4f1ad1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons.zip": "286294a45d11a29cee7cecbb15ba82bb",
"icons/Icon-192.png": "a4f9f5297dfe2bec520dc8223ae277bd",
"icons/Icon-maskable-192.png": "14c8884dcbaa02459ca8ea2875463db7",
"icons/Icon-maskable-512.png": "236c101972f9edaa5fe04262763b493d",
"icons/Icon-512.png": "b5de0512f1309467bc19cc93a1dc12e6",
"manifest.json": "3c61658c3da960e3ec2725ad5fed8551",
"assets/AssetManifest.json": "79f168d80ae7ac5eb3245b9237745abb",
"assets/NOTICES": "f171a6be4c46b2ab20b99f66221a2183",
"assets/FontManifest.json": "22ac63f451b72cd01ede538e1ff2fb2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "26d1325a79edee97fddc8d6c62d5ba4e",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/googleplay.png": "f7c965b2475b99fa827e7a00bffde786",
"assets/assets/images/flutter_logo.png": "b6ca4a15347f8764549333387316f838",
"assets/assets/images/us_flag.png": "e2fd4f21fdb9fdfa9ca9292bc0ad7b59",
"assets/assets/images/uppercut-glove%2520copy.png": "6f884daaa05bae485d8105c21273f756",
"assets/assets/images/uppercut-glove.png": "b1c945efe7b572853db5b2391ec94402",
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
"assets/assets/images/web_development.svg": "ebd88e874622dff51740d14e213f70e3",
"assets/assets/images/appstore.png": "d69425725728d51ffa1438301d8ee247",
"assets/assets/images/uppercut-text.png": "e040a8113f306f2c7e894042a89fee1a",
"assets/assets/images/iphone.png": "18a3fc4be9cc72c2f2f0287d4d02464f",
"assets/assets/images/uppercut-logo.svg": "daf0ce573bfaf799b05480069fb293f3",
"assets/assets/images/phone.png": "7e332d09d1286e7d42be8b401e44fdfb",
"assets/assets/images/lottie_success.json": "f3fb9d6ba04176d74ebdeb904c291cd9",
"assets/assets/images/mobile_development.svg": "7a025649a73f5b6d4f09e9c9f490eae2",
"assets/assets/images/es_flag.png": "4fdef62ff5f46fb121623767854e93ed",
"assets/assets/images/uppercut-logo.png": "0987223d2030ce315fc95cef655adb19",
"assets/assets/images/flutter_icon.svg": "a1a6320e1650aedaebf13ebf7f6b5415",
"assets/assets/fonts/Nunito/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf": "e093edf93d2cb0593b82c0deccc42361",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "004ce174f09a95594c74016b9a8333e8",
"assets/assets/fonts/Nunito/Nunito-ExtraLightItalic.ttf": "094cafc8c8d6b6f2c6289ec2f3b17e35",
"assets/assets/fonts/Nunito/Nunito-Light.ttf": "42405ee88f303e033d1ff57280f9cffc",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "45db66b4d9dff8842f4a8e5e3deb2f94",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito/Nunito-BoldItalic.ttf": "d04df59ad34c6fdf194ca2a15cd745b4",
"assets/assets/fonts/Nunito/Nunito-Black.ttf": "18f25c22e665649aaf09be87bc6f23bb",
"assets/assets/fonts/Nunito/Nunito-ExtraLight.ttf": "4c3094fa4bad68656f343116ebb3dae0",
"assets/assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf": "118fc054cbee46eb0b5c906c7f7530f8",
"assets/assets/fonts/Nunito/Nunito-BlackItalic.ttf": "532b7e25d7061374787866705a7af091",
"assets/assets/fonts/Nunito/Nunito-Italic.ttf": "ce460427f5742744a5a062cce0fdf93e",
"assets/assets/fonts/Nunito/Nunito-LightItalic.ttf": "abb8821a23633196c3ba7ae926205042",
"assets/assets/fonts/Nunito/Nunito-MediumItalic.ttf": "480ca924396b3ab3a227e036f3fe95e9",
"assets/assets/fonts/Tiempos/TiemposHeadline-SemiBold.otf": "36153d464bc7b82f3b22dbccc739624f",
"assets/assets/fonts/Tiempos/TiemposHeadline-SemiBoldItalic.otf": "deb13b5ec122fe0114b4b5d8075fd69f",
"assets/assets/fonts/Tiempos/TiemposHeadline-Black.otf": "10b5d1cd21cf618ba6fc3f1a60180b49",
"assets/assets/fonts/Tiempos/TiemposHeadline-RegularItalic.otf": "25e70a4bc2b68715260d78953e8c000d",
"assets/assets/fonts/Tiempos/TiemposHeadline-MediumItalic.otf": "bacf2244e25c6940974833e448fe8bd7",
"assets/assets/fonts/Tiempos/TiemposHeadline-LightItalic.otf": "3d00ee401e19edb79040475986d929ec",
"assets/assets/fonts/Tiempos/TiemposHeadline-Bold.otf": "81d7945d2c4688e806eb6df55f9a3635",
"assets/assets/fonts/Tiempos/TiemposHeadline-Light.otf": "a770c664435204a1a6cd2ce3aa863ad8",
"assets/assets/fonts/Tiempos/TiemposHeadline-BoldItalic.otf": "cdb5a3cc609a9705f43fbfb3da931b2d",
"assets/assets/fonts/Tiempos/TiemposHeadline-Regular.otf": "20e0ab086aa768c6ec00c49c1c9861ff",
"assets/assets/fonts/Tiempos/TiemposHeadline-BlackItalic.otf": "66b5dce345ca565a0b166ed163014ff3",
"assets/assets/fonts/Tiempos/TiemposHeadline-Medium.otf": "fb07cba82e6fbc13ee1cf66673309906",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "e70e5d8d5129f35418fe2cfaa6132c1d",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "9d216a715551da3b92a4a9b0e8994868",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "59cdce8fbd384a39ab0fd14b9f693de5",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "fca7947b08333e5ffcb80c069755b5c9",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "2e7c02a0a4a5fd318b0625d120ad2033",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "a943ff860cf7bda5ce3722cad5c1dc06",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "e4d0c1f4d67a7f3d23a1f2f78d24ea57",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "d41c0a341637c2e35ae019730b2d45a5",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "e07b3f35e3e0073b2cde4c5a951cc24e",
"assets/assets/fonts/Ubuntu/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/fonts/Ubuntu/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
