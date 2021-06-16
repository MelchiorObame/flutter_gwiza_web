'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "59666135599f6e7aaebf8f093200a954",
".git/config": "b700d85957bf7f6423099903013aff5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "490ccaf96d70d37ceb4dab85f9cfbcbd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2a5824751b87c91d3415f12d7eba59cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a54efc366f6d72b547df029cbbebf726",
".git/logs/refs/heads/main": "a54efc366f6d72b547df029cbbebf726",
".git/logs/refs/remotes/origin/HEAD": "ca6b10a5668d55900968f713c53a6d68",
".git/logs/refs/remotes/origin/main": "48ef7c649fe88c9e8fff4f327975d507",
".git/objects/0d/9452c358b3923ee15d98224e9400fc19736790": "7ff50afddc29c419d8590c434387c160",
".git/objects/0f/e86c459da23ca0db1b9b37fff028e74b663e6a": "632dd8d0a066818ff4115504a79cbb4d",
".git/objects/13/0926c8adb07933a2e2036f3852e9f6b3f00d7c": "0c9bbc58485859e2d24d5071eaef4d7e",
".git/objects/18/a14fc73f35450044559e8b64670e1686ecde89": "4841580053e770054be7da5d6f26beb1",
".git/objects/1a/580fa5846cd4b09e7fc3292e9280415769250e": "d921594426f93ce23d4c62b92904f8b2",
".git/objects/1c/539df65fa73e78566d90db5e3e8186ae698fe8": "8e3a9c76da48c8607ee53a86cd9fbc24",
".git/objects/1e/cc698beb60194b8e2a922c24bc49e381243f65": "75c1ab3e8a7345b39d57dfebc7996b91",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/5c12033f0e85ef0cdecf0cc1eadc82c7d11375": "671952a6fb344d842b7aa26f50807fa6",
".git/objects/2a/7e1ab52f45cebf99c86d1e6474d232e861b480": "5ae163069e1422269efdcf5623e7f50d",
".git/objects/2c/f9d8e443db820c53656ab252d68c05dcc350f0": "600a8ee39b291258eeff1f4dce90b188",
".git/objects/30/03ee9e326389be2b4acc22a2d9d25e0634eac6": "77e53388fbdd922068bac7a4c2eee086",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/db81c603cd1b3ba154f7b45f4d4e950c6eb3b3": "bfc19840ac8e1bd69ad1c37eb9a10999",
".git/objects/35/8fcf27288d7d9d5e5cf861c73dbee013cbb7ca": "d6ad72a3fa96c4ff80ccfba71ae9705f",
".git/objects/36/04c6b350d483fbea66a365268c71c2e71825ce": "985f18fdb5338d2e9e904069a569d4e2",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/42/1a04ffb17a7cb585046256b0bd448da2d1d53a": "39fe2e91c01decc0d4158e32947b5f4f",
".git/objects/42/dc1e82677d35d2dcaecba2153d4cacb63fc0c2": "cc5050e78c5024a3c2ebb14c02f99dd5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/1e73d18bb204988aaa17bc7c1201d3e39f6254": "23d95676280944774ce4ccd748c44c03",
".git/objects/51/f056b843b042ae092194652a53c146dbcbf98a": "06c7eaa92a0f9f3b601a3b2aec48d3bf",
".git/objects/54/88bd2f7299cf0efb55559e6737bec4bc6a4b6d": "b02863fc39bf69c62780c25af3a9b9e6",
".git/objects/56/3c9b7b50ce4a121a1c0b4a92333fcf168733d3": "6a3b246f8c58cf204db3054bfcabe5c2",
".git/objects/56/3ffc67d10190e0a0b39747f5ab17f569d12e6a": "9a31ffe6f05acbdf6bf51a551e8d39d6",
".git/objects/66/51654e69fcf78e8d44ec3ede47acd1ef97c131": "90d8fbc9eb0ed6cf43bb964f5ac50ae8",
".git/objects/68/bd55df028919bbb1b1d5545977a15277d625f4": "732e932bbb5c9944c967748ad602adaf",
".git/objects/6a/69463fa6b6f40df5323444e647351bb2b55049": "46b3951d9dab67721bf193848b49192c",
".git/objects/76/f46d93f767b253b1f9d9ebb79ca9f4acae427a": "e6ee118a95db6b511288edff57e4df8f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7a/f1fad401745431fcf46e7220a913a49022c8a7": "c40a4ab88fad7adb221d3085d156290a",
".git/objects/82/07c4f0271bac2c8350c0e53bae9d1d48ebf22b": "d300b4266a366d8a48ae7db1b45ace14",
".git/objects/85/15ea5ecce7706780b42970c298f21586617121": "f20f5c18eed65d9aa3341460bcebd54c",
".git/objects/86/c6f72238991c7b5aacda63b9737e4e3b6c3029": "81a0522119030d3073818880cffbf95f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cd0b475347e5c0cdb0b72d2a95815dc3a1ab7a": "b02428e423240d7da147859903d664ce",
".git/objects/8c/82ed2c3b19289c1d9fb422b43f3d7e5f295c6b": "74bb46752273d73b4e18c82abf4be5c6",
".git/objects/90/24109da14828c90f2eaadfd6c02e38b30283cc": "f681c6692a58756caaa9bb740131edbe",
".git/objects/9b/f67e78d04866f6b01fe598d428198217b578e1": "4a82a16d08d3414c62945e85aa9043b5",
".git/objects/9d/383c8434194d817d94fdc572c6479b149b3640": "bcbe89d8fcf62c7f7ca92ea1a34a2130",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/52abd15864d090ccd11c364016efdc140b04e0": "b74060baf38ff6792f5601d3b78b8f5e",
".git/objects/a7/52e9aecef00f4f610e031a928095c07e749a3a": "cbd7f9d2fd71207a1505277907c7828d",
".git/objects/a7/fb49c42c1162b56f6c6852a80edb23e668de84": "3183fa9fbcb0cde5124f6b8839678f81",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/1b861bf13f184146ed30a8b617535b2b3f7c7a": "046ba99d04f02f3bfcf948278bf4c797",
".git/objects/b6/790336f75c6d14e3d9390f621907aa4ed71a63": "b9d00959b60a60a143cd46aba88b4587",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5862642a283b6e2c350feba14d4337cdf47fdc": "c3a5bbeee9d0d0ab3989c0301afa1663",
".git/objects/b9/142709c93411f4a88382f02a5a2c7523464b46": "7f9fc450310448e623c0184c61f60266",
".git/objects/c2/41f52aace9bdc3eb90435f9649688a519f0ec0": "923962d9ab7e477ff3984ada5a3b44fb",
".git/objects/c3/aa8200f9c7eed3c8ff112be06b38a01e297c3c": "ae3d4181c23fd9f4f8f913a578c2a43e",
".git/objects/c4/e04a9367bc7e90ee6dc301d8fe780b6a0cbd85": "a7822a0cca91decd2b511dfa2885f3df",
".git/objects/dc/bfc55d6d1b34d0da93b794324cd13b4aa8012e": "30bf2acc619b407d48ae4fe8bf1747b2",
".git/objects/dd/38d97c1b4417e25791e858e66550c350a2ce4d": "f4890829c243bc781647a32b747963fa",
".git/objects/e0/57e0c4500661a3b6b0e1ae6b0d66fced08b493": "1401393c9560f67a93ab893254aa712d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/9bda1e4b7c6d0492e60242932388b337299a49": "6cbfc84d97a845faadd9c9719c98c067",
".git/objects/f2/95884f4e695063dd45dbd70483549988d6b88a": "f7811378cda31ed779f1167fabe98c13",
".git/objects/fc/bc568128a8dfa52d331b021ded11561ca739f1": "187a0595e04896e40e80245051d1904e",
".git/objects/fd/2b26002a8639c0ea6bcd6aab34119a05444786": "115c7009680e059209d922813891d840",
".git/objects/pack/pack-39e989f229136aafbf7eb928c9213ebc657a179d.idx": "9870ef854d899b68fcb90510c2dea5c2",
".git/objects/pack/pack-39e989f229136aafbf7eb928c9213ebc657a179d.pack": "20189a8ee79e21c42a9569fdfd635ac2",
".git/ORIG_HEAD": "928f3cb9c2a4d66f382442b5798f0b75",
".git/packed-refs": "e2d51643a1df0cd803d94baa290ba21d",
".git/refs/heads/main": "babe35c38f56bf4e0d813d2ea3cf93b8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "babe35c38f56bf4e0d813d2ea3cf93b8",
".github/workflows/main.yml": "a4f1d4d1fdbcf46c32800f689ac17cf8",
"assets/AssetManifest.json": "11493240c706508d0514c5bdc74591cb",
"assets/assets/images/carrousel1.jpg": "34dd9883e56fb3120c62882f99d6a613",
"assets/assets/images/carrousel2.jpg": "9d3494c99282ddf288f53433a5d4f80d",
"assets/assets/images/carrousel3.jpeg": "8ca4b0179a295354b078b2514dbe788d",
"assets/assets/images/demenagement.jpg": "a37a85c89561717da597e7ffa0917886",
"assets/assets/images/logoTest.jpg": "a89dddca256af5bd5f7d17bb56c00098",
"assets/assets/images/logoTest.png": "a89dddca256af5bd5f7d17bb56c00098",
"assets/assets/images/profil1.jpg": "299c7a58f60166129113b682a6fc0f8d",
"assets/assets/images/profil2.jpg": "10923dd824556c7ce40d71ff6c680cf0",
"assets/assets/images/sectionpic.jpg": "d9753f3d2b3b149378fd6b852f2f7df1",
"assets/assets/images/sponsor1.png": "ee9e12f4604cdb095540837675161880",
"assets/assets/images/sponsor2.png": "1542b217b5e9ac24cafd802c9b91ef93",
"assets/assets/svg/demenagement_02%2520-%2520Copie.svg": "ae66aa9aaa37a59877a6acfa6e2f6547",
"assets/assets/svg/demenagement_02.svg": "a5e1e473a31cf0782cc24106d3750dca",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "513cb6081a4e5743e9919e259523c4a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5195cb70dee8185073bf7c5ec3c52829",
"/": "5195cb70dee8185073bf7c5ec3c52829",
"main.dart.js": "7b04ec73532ca8f728973c1b520b1406",
"manifest.json": "687603794bd6fbf692335294d5b7eeee",
"README.md": "7da4f94cd9d52839e2b77d68b6c6033d",
"version.json": "6d7e2b8bfb794e74706649cfc5f8189d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
