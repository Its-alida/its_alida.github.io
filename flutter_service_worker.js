'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3ce7edc8efa511f4646e1f8dcfb9c904",
".git/config": "17a2e2adaf5fae12f55f1e9879804331",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "5565ac431c07c682f02d0df99b03fcfd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ecff0140a0fd27f700022b183dea3c4",
".git/logs/refs/heads/main": "aa22999ec80f2b2f8856fb274218b170",
".git/logs/refs/remotes/origin/main": "546a6a6c02681f988ba0f20645b2a9dd",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/6e1aedb3f9dd5a9d429b899f8c2275326674cd": "3fe0a4ce1f6cd595822df336bfd70c53",
".git/objects/05/8b677a4854027724be6ecfbddeacab0a392f1b": "bbb20c18bdf8551000a2e1dbe854e474",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/06/beaf738f32ab5787001721d2bf0931532e43b1": "b6c9b0598e506eea380c6d36ad35d1d1",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/7893977080ba50d0f33e6ffd3bf19e88471ca7": "ae30f957427ec23820f05388c47b147b",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/15/2911b59a96da31050e3b2bc24a7dcc99ad9ae2": "aca1bfa58480208172d2ed54e5941fa3",
".git/objects/16/955e483b60a43146c952356e0e10e908907a7f": "1ae3466bb63b06f9cb78ad2df3b86c7b",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1d/75643ecf52cef93e94204fc98f937955395a2b": "6f222c979262c03450c626adbab4a1d2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/28/79f8a241f5717aef1d804578d7eef0f7704f91": "82d324b47844dba88fea960517d7dbeb",
".git/objects/29/6c0dd18eda50820b620489df8c227fab15af21": "a57b0e0d7a12979b840c83a28baac5be",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/a56fe414e7b233ab30dc4f6e47abe873a7457b": "6902447df77ff8c6f2dbe5be8897452f",
".git/objects/2c/df9d6b7013375012e5a17bb7adfef52cbe0f14": "ec66f6224f280599b0e6b6d2dc25fc01",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/3a/25a889b83a000709595cdae7e5dc8742a579aa": "95b12d532128715e4171218738e5cd2a",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/9b2b42080243750c968de1286bedcd5ca8135c": "4f284ebcbf9f9222f0e960781b24fbad",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/744586c94b3905c5a65e97fabba9d3d7b60bb5": "4fe8b1d4ba112c66f376705542d53ebd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/8e43241ed2f43d00a5aae8853f8d79118a4a80": "661a7c2aaca9c92be3b4238de6e2cd1b",
".git/objects/5a/d0acc0be30698acd1a70651b9107254d89d442": "17e6e58fa3cd18304d5edf7f35061f1c",
".git/objects/5f/be7f037fbcbef66922fc6447199e28ae3915aa": "d8eece2157dced2e7952106cb1fc48dd",
".git/objects/61/547967d890bf95f3b391776356c6d0c83a4822": "73d10ee3493eccf6685d91af588fe8e9",
".git/objects/66/d0e4c1d5a94b930490ea694c7321fd596daa5a": "aec8b4666651842e742420bc8ef86d58",
".git/objects/6b/73f68a9ccb4e0dd247ea90657fbaf82650d59e": "c038ed8ec8aea0db213de73605f71f33",
".git/objects/6c/39cabefd3a122b2caf143d0b2a7d8617052a86": "2b5b5eb4f29600300b8e278f1dab2315",
".git/objects/76/051e847efa0084fd3af12dd91b9380c1d4a2b8": "19d8e3aa1f5ab02f2496cdc40c5fe502",
".git/objects/76/f795e3e772666e124f8baa2ae701ab872ad1df": "037012fe4af9630d3a6c3d3d6997be5d",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c9a732ad1489fd9fb6f016a078ed7493ca6921": "eb1b96855820ff24969a2cbc607ec814",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/94/9ca4c40007afd0c2a368be95929b90d8a95816": "01659ee0e846269c257d391a553bd659",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9d/f865fe0ee42870e6820d881b4a22a4cd05cf18": "c6932f16f56560d6eaa70a6007f889f5",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/b5/b73b3ff26cf5524b33fcf0f0af54b750a0cee3": "8dc9b079bc1d5d3b6c8f41463f224286",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/b6/ca6d13a8f4839001abed2701f69c0404bba228": "fd65dccf7ac0081e554052a8f5035b7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c2/d825ad139cb9fa8b38a6eaba0fa60f4bfa983b": "b55606545bda426bdf0a999e171e90e3",
".git/objects/cb/768f2486cb77ec1578c17ed9dc246c51e153d6": "1ad5e91cd29f8f22f816dc17d123d6d4",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/cf/e3e7961609209b94c2a10e47da6ba4e2c4b16a": "c93c4f749f59258c20f986826a827767",
".git/objects/d0/b746ed70d054d01c245f23d9f60178a33bde51": "35216a33189ccc7636c776bf8a15a37e",
".git/objects/d4/7eacc55d9ef339efed3b44c250b70090a227e6": "b6f85fc59d3bf4042c74282d4afd706d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/be2e4a65ee154c63ccb4b6054be85311fb0d46": "69d36f3d09f9c431305c32261b31d53b",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/da12929034ca22553c0fa59948112fd06d7980": "a41dac15226f286d5a67c1707a32567d",
".git/objects/da/70b378fac1845136e21b0fbf1456c65c206041": "4b10a7a940f99c151c4dd528a379ce5f",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/dd/67eb042e0bb5fce47cbe50f8718c47fe48a439": "b5e955abd999f0d6eff5cf53d9ba480e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/b1372c442c46dd0312f7cb03b6fe630e72d508": "7c473a78d51f658bd23e80b4ddb92035",
".git/objects/e2/737c78a46811667bcede5945b7e06a04164a96": "6e79b21267bfcdfeb263d8d4b7ff16ff",
".git/objects/e4/3e8bbf41f9ba576b8e0611bdc98dfa70da198b": "ad97002787aba802193a31e9d5b802a6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/09209a96fc96865ea1ed6511fc03ab421d69ef": "4e6550b9aed474af2600e1f898555c01",
".git/objects/e7/22ba1ab24f4dbdec4abf6c33b9bb9f0715aa4c": "792e5218b5af66ca2afb508a19d6c247",
".git/objects/e8/6069ccd3d388abcfa433f149b95809bc2d88df": "ea4f1582e517043b7e504ecae08eacfc",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/fc/603d3de9899aa1aa64786b449977cf4ed5bc0b": "253da4b527215dd473ebb956d709859f",
".git/refs/heads/main": "a655e2341298bf52e3c5f684562dd143",
".git/refs/remotes/origin/main": "a655e2341298bf52e3c5f684562dd143",
"assets/AssetManifest.bin": "fc5e3b17dc07c22c0bb3e98cedd467a0",
"assets/AssetManifest.bin.json": "19bf6c9e9a0da4364a59b9a739e9af8b",
"assets/AssetManifest.json": "2d1c674d29ddd11d2a835560cecad78b",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/ai.svg": "7d1f3d3975308c5ff50391882659c88f",
"assets/assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/assets/icons/cloud.svg": "0de26330bad65adcb3e9158bf7c12f2d",
"assets/assets/icons/devops.svg": "236d4c68349b45a5cb875a6f7115768b",
"assets/assets/icons/graphic.svg": "630269cfd18d3d8cf578673a89b377d7",
"assets/assets/icons/unity.svg": "be4f76efc57c5310c117c4f1afb77131",
"assets/assets/icons/VR_dev.svg": "856f2762417d6a2e96b40f4506a15180",
"assets/assets/icons/website.svg": "eb7f68d101ed55ef94b1a819515a4781",
"assets/assets/imgs/02.jpg": "96a4499a04ab6ec522f0002ada9df8dd",
"assets/assets/imgs/03.png": "04ebff1b6f86c9ad89186fe48024eb87",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/1.png": "faf55cc91dea52cb9be105fa02b388fc",
"assets/assets/imgs/5424482.jpg": "64a0ac3c0ef3cbda7c58b4cdc887e853",
"assets/assets/imgs/ai.png": "b2bedd841f71ffc13dfdb749af84c300",
"assets/assets/imgs/argocd.jpg": "385b8cd756910aca7295a4e64b7d78af",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/cnn.png": "882b79d98842fb9f12d5a4398f0d379b",
"assets/assets/imgs/devops.png": "73e4a4a358c403c7a79de4e5ba4efe81",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/IMG_0107.jpeg": "3041bf48321682e78073a5a6aa7d76b7",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "e608273ecc1ee06b27797671b8b2ef95",
"assets/NOTICES": "8d12c0b34e3b43baad0ba161ac5c45d1",
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
"favicon.png": "12826d360fd0ce34e4409890344039a9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f8906aed0fc6b84d2f00d579094d3278",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "060c98a73327640323c84ed3121ad610",
"/": "060c98a73327640323c84ed3121ad610",
"main.dart.js": "678e73345503df4dbcc2c50264358c57",
"manifest.json": "db15ef869b81679f0f8d8e0926c864a8",
"version.json": "f124181e58b12572810925130e6735b8"};
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
