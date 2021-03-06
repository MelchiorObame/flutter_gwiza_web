'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1a0929d93af58dd56895bc5d6455b27a",
".git/config": "b700d85957bf7f6423099903013aff5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4448c01ee6da6307f97d39ea6fe3650a",
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
".git/index": "f25108aec4831ab5eee5dce5a748b99e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b407491d4f2e34f27da9046cc9073ea",
".git/logs/refs/heads/main": "5b407491d4f2e34f27da9046cc9073ea",
".git/logs/refs/remotes/origin/HEAD": "ca6b10a5668d55900968f713c53a6d68",
".git/logs/refs/remotes/origin/main": "94f0c2e4dacdd5994cff3134b0a1cf4a",
".git/objects/00/34a8ccadb217c91abc309f5e462d3862b53565": "f0db6a2cdc43f2c1d50b48491bf252cf",
".git/objects/01/ad0fc322532a74df6c633c6b26dbd6a9044570": "9e4a077b6c4cf3915f9e4547370a57c5",
".git/objects/04/92bbc8fedc5a91a063ac21685b9c8ad686c7be": "45a4fc26fc833c185e55bf3ed3d3c88a",
".git/objects/0c/f817d126cffc39e9a44e41c823ded0e6fff8c2": "3cfef3f79a508a0e221261ede687c86c",
".git/objects/0d/78bc1204d4a2135030a92ba0ad8ed31172cd73": "b06715309c21c1f071e5a816c91dda39",
".git/objects/0d/9452c358b3923ee15d98224e9400fc19736790": "7ff50afddc29c419d8590c434387c160",
".git/objects/0f/e86c459da23ca0db1b9b37fff028e74b663e6a": "632dd8d0a066818ff4115504a79cbb4d",
".git/objects/13/0926c8adb07933a2e2036f3852e9f6b3f00d7c": "0c9bbc58485859e2d24d5071eaef4d7e",
".git/objects/13/5412876d0ef899353d084031759fd912e9f9e5": "43582c8636ead47ff0e1faa153f40a1b",
".git/objects/13/5dc493a657be94ea978a70e1ee71a6508974fb": "ca42003227ace698955cc8608ec1ace5",
".git/objects/14/bcd09cd877fa9f950d5594119e942166814ed3": "58f8856523aaaf42b6c3d50cc1772651",
".git/objects/15/1d83dca08e0f676fd2169417f6ec8b9f7f14f6": "59d5614801f4830cd2026824cfcb629c",
".git/objects/17/30afc72c5b47b696d1ad3abdb07b054b6df04b": "3dd9d8748406ca53c1a75efd6d29cb58",
".git/objects/18/a14fc73f35450044559e8b64670e1686ecde89": "4841580053e770054be7da5d6f26beb1",
".git/objects/1a/580fa5846cd4b09e7fc3292e9280415769250e": "d921594426f93ce23d4c62b92904f8b2",
".git/objects/1c/301d4f4581cb326ba78c1f04e0cad1e26bc383": "e3d7a524b286b1caa43aba5e5fc4da6c",
".git/objects/1c/539df65fa73e78566d90db5e3e8186ae698fe8": "8e3a9c76da48c8607ee53a86cd9fbc24",
".git/objects/1e/5ad60aec61ab246533e00d289dabbb4d9defb6": "bcec8a9b7872d5765d57771eec4366f2",
".git/objects/1e/cc698beb60194b8e2a922c24bc49e381243f65": "75c1ab3e8a7345b39d57dfebc7996b91",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/6e603da150178df7a7608f1b9bc6eaea14eb58": "cce2a5d012970e9ed68d2516e0cab885",
".git/objects/25/08f9bbda49c4cac59c9f0b419859a77768b61d": "cc4d0dc653003264d417f5e1b4493aab",
".git/objects/26/5c12033f0e85ef0cdecf0cc1eadc82c7d11375": "671952a6fb344d842b7aa26f50807fa6",
".git/objects/28/4d32e61ae177ecdcec7f50e34b5f68eabeb2db": "0fdd6465d9efd299b4895364c03827e8",
".git/objects/28/ac6d2a7640140c56aaaf0b1560ea87a70d81b4": "6888660c7a5459e6d4e761209c81274e",
".git/objects/2a/720cb491c95c08eaaf94f5ad2e6b96c4ad5caa": "f86226dc9a67233a3cf381490b507275",
".git/objects/2a/7e1ab52f45cebf99c86d1e6474d232e861b480": "5ae163069e1422269efdcf5623e7f50d",
".git/objects/2c/f9d8e443db820c53656ab252d68c05dcc350f0": "600a8ee39b291258eeff1f4dce90b188",
".git/objects/30/03ee9e326389be2b4acc22a2d9d25e0634eac6": "77e53388fbdd922068bac7a4c2eee086",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/db81c603cd1b3ba154f7b45f4d4e950c6eb3b3": "bfc19840ac8e1bd69ad1c37eb9a10999",
".git/objects/35/448e0d0e657a06dc35ae4aa2e6655e7834d6a8": "5780c6db83da8b6dd39c651863fc6ef8",
".git/objects/35/8fcf27288d7d9d5e5cf861c73dbee013cbb7ca": "d6ad72a3fa96c4ff80ccfba71ae9705f",
".git/objects/36/04c6b350d483fbea66a365268c71c2e71825ce": "985f18fdb5338d2e9e904069a569d4e2",
".git/objects/37/ccb9f99a51fc3b796a6bf8e90befa43b5459e5": "a992a15906fda8896095b59122971f2e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/42/1a04ffb17a7cb585046256b0bd448da2d1d53a": "39fe2e91c01decc0d4158e32947b5f4f",
".git/objects/42/dc1e82677d35d2dcaecba2153d4cacb63fc0c2": "cc5050e78c5024a3c2ebb14c02f99dd5",
".git/objects/43/0cf7fb05d0077a7041111d2ca78fa1a2549c28": "2afd5ff0688467a1ef46d0b31debea19",
".git/objects/45/3a875212cdc019533927f907eec3e6861a393c": "5cb6e149796b78e2c0176aa7f20e11c3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f5a48471d7ea6dc01bcc8f7b73dddf9b350a21": "6ba8f46ac444918ca744b059127d553a",
".git/objects/47/b039a51c685b18af3a25dce36950f1b9eb55f8": "fe2d6ee818592f843a2981a38776c27e",
".git/objects/48/1b079caa68ab81a4e8d52c76994662abd16e4d": "005a57bee5fc2cc3e2af149752c06246",
".git/objects/4c/1e73d18bb204988aaa17bc7c1201d3e39f6254": "23d95676280944774ce4ccd748c44c03",
".git/objects/4d/747089f6087fa8b08b46fdde9e4d01875b4d42": "d592dfac4412c54a5a23e77ef090a9e0",
".git/objects/51/9616fe3e2b22ee579f88f9dbbcb63ab2e58bdc": "ac53eab75a43d917a39bf3ec2516da08",
".git/objects/51/f056b843b042ae092194652a53c146dbcbf98a": "06c7eaa92a0f9f3b601a3b2aec48d3bf",
".git/objects/54/88bd2f7299cf0efb55559e6737bec4bc6a4b6d": "b02863fc39bf69c62780c25af3a9b9e6",
".git/objects/56/3c9b7b50ce4a121a1c0b4a92333fcf168733d3": "6a3b246f8c58cf204db3054bfcabe5c2",
".git/objects/56/3ffc67d10190e0a0b39747f5ab17f569d12e6a": "9a31ffe6f05acbdf6bf51a551e8d39d6",
".git/objects/57/519b07c43b3aa1e9e3d634b0799f524b0d8e0b": "2625f419e63b514586c9e8612eb0e894",
".git/objects/58/2779ccc287c887cccb07b55f55378f759adefd": "433629e1725e20d9ffc98d18b51a92b4",
".git/objects/59/27bc9d3e1b9a5d5ee251f69b0fd31d1b93618c": "83743ee9a3ed8b9c98eed3343070da71",
".git/objects/5b/469b86ef02ededddea2f55ac2c7bc498635093": "1954f2e6b3a896ad88759978255dfbbe",
".git/objects/5e/19a2f75c7eecbf0f75a224bde7b845d9553546": "a72302d1771af36ee09d8a14d5ecae51",
".git/objects/5e/37d3e9cc8090b343099086f1c1cf770875a531": "75410fb884d794e8d34afb8f2c202b85",
".git/objects/5f/48dfccb4e69930bb8281428f90f333f1fac225": "0b01e3811cc4314e8bace1806847cdfa",
".git/objects/5f/eab2e51e24093609e209bde4394827bc5512e6": "e9cbb0ca8041944f46929ab52af2ca58",
".git/objects/63/d098b739b6c23d4b7c5afef47d0e6644bc0748": "3c4bfa220aa64a2d048b98ada149b434",
".git/objects/66/51654e69fcf78e8d44ec3ede47acd1ef97c131": "90d8fbc9eb0ed6cf43bb964f5ac50ae8",
".git/objects/66/a57803036eb513dd4cd56c083bbabd6d47321f": "6afa67824c586983e6c57d9ad35295e4",
".git/objects/68/bd55df028919bbb1b1d5545977a15277d625f4": "732e932bbb5c9944c967748ad602adaf",
".git/objects/6a/446cfb6fd5d88edbd31fd22b639f2ac39679dc": "44063ded7bf53a0eec14eb50982966fe",
".git/objects/6a/69463fa6b6f40df5323444e647351bb2b55049": "46b3951d9dab67721bf193848b49192c",
".git/objects/6a/70b912a39a70337daf8fa3ed66567cd0f67aec": "0c3883605c53b0ce3d7e0630676ab198",
".git/objects/6b/00cf5b7e328f06affac1525054f5c6d337b92c": "a5ec2c5a75df0abc0787e6f9ea6b7d4c",
".git/objects/6b/d10a047cc9dc2c6cf180a717900d9383339db3": "39d9977dc02b4c25ba1cd73c4be27574",
".git/objects/6e/9d30c98a7d80315f707692179c4aa860d0e140": "1d0c409af9664fbd7cd169538b032658",
".git/objects/6f/94ab25fd19aab6ed454a691251a5abe295a922": "4a18bb55040220c3fdbfd497ab8813f4",
".git/objects/70/847a02306a803a32a3acc6f87b5b33f666cd14": "5a39aedb212003e5b015ce0c7dff7543",
".git/objects/70/cd65853de969535f0ad625ae6cb1b1d363acb1": "636dd605c2cee30c18761ef90b501411",
".git/objects/74/82b13ad1793768773d8b73f8719020529043aa": "4639c1b5446e0276db5af2c3930c4a0b",
".git/objects/75/8a4e3ece2b2eec45101902276d3e42c685763e": "a8f8aacffecb5d133603958ae6374dc0",
".git/objects/76/f46d93f767b253b1f9d9ebb79ca9f4acae427a": "e6ee118a95db6b511288edff57e4df8f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7a/f1fad401745431fcf46e7220a913a49022c8a7": "c40a4ab88fad7adb221d3085d156290a",
".git/objects/7e/5f5728e7ba19fadfd1fa469b6d2690b0909f27": "04e40c9d99e9f22c8589a136f874cf84",
".git/objects/7f/849a703c2021937bef04fae129ce190089c5f3": "b73b5d7bbbed5b881edaf538627ee2df",
".git/objects/80/660ce16c65a34bf18a4ac00bbe60c9641edb1d": "b5b2f0faf887c7364b81074e57d08e8b",
".git/objects/81/da8c43347800222c073eabc607a9afa7a021a3": "3da39ba081175e05427db2b33e3a3514",
".git/objects/82/07c4f0271bac2c8350c0e53bae9d1d48ebf22b": "d300b4266a366d8a48ae7db1b45ace14",
".git/objects/83/094f2b53588b22de8b3e84c9f1e84f4dd1a38e": "3dab5da333543bb7bd15ba5350bab7cd",
".git/objects/84/3d07141ecf319eae1f57b61070d2f01b0c19b5": "98a2c3f33e33aa4e6c9aad7b9a735d2c",
".git/objects/84/fdb2015b904c276e6a74ad656eb11d0441f344": "6b6112bd335e27cc11058447dfb3b3a2",
".git/objects/85/15ea5ecce7706780b42970c298f21586617121": "f20f5c18eed65d9aa3341460bcebd54c",
".git/objects/85/55ee9f862b5773d51649e2e8424bedb3c196fd": "d330fe083b790069e3a9740c5fb543ba",
".git/objects/86/c6f72238991c7b5aacda63b9737e4e3b6c3029": "81a0522119030d3073818880cffbf95f",
".git/objects/87/aaa0e200c2f30dd7875a7aa6b02286bb7db12d": "24c99f870b9992df050c2313154fbc0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0494bbaecb174da60bf70ca641dc537282cb26": "5ff2cfbb1b91d8a139572ced18db8fda",
".git/objects/89/dbdd45313b2f9f87055bf96de2ea413b65e80e": "1576be2d5216fceecd05ec1553cd5e21",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a118d678f5c21f69c1809911fd7a4d46eed2de": "40a6c5971e6e0a5e3e8f6b7e4fecaa79",
".git/objects/8b/cd0b475347e5c0cdb0b72d2a95815dc3a1ab7a": "b02428e423240d7da147859903d664ce",
".git/objects/8b/dbffbaa665f91894fbeaa60a2bce37152b1f16": "cac0cf4fb19f1142dbf55d3e10b6f28c",
".git/objects/8c/4b415190352b9f7aa342158430dfd8858113c2": "59fd44ec865ddd466defee43326684cf",
".git/objects/8c/82ed2c3b19289c1d9fb422b43f3d7e5f295c6b": "74bb46752273d73b4e18c82abf4be5c6",
".git/objects/8d/f89b4548d0a2bec314a61846310d5223ec361f": "00386b2d1772bd4a96686fff3c6d519a",
".git/objects/90/24109da14828c90f2eaadfd6c02e38b30283cc": "f681c6692a58756caaa9bb740131edbe",
".git/objects/93/4aa484cf6d2edf8dd1a4f96a3e00e0ddc14bc1": "e330578de5f33bdc82cbc302bd7939fc",
".git/objects/95/3b6bc594df3f32531164e98125ed825069815c": "930e6d250507a727048d2aaef3436acb",
".git/objects/95/616014f2c88e67d724af433368445bb6cfc15d": "bb2b5008399b56c4109125bf4c1772b9",
".git/objects/9a/efdebf72e85f6e283a3ad6a345951004c49402": "44425b3039d3aa43f68adfa32ae60813",
".git/objects/9b/f67e78d04866f6b01fe598d428198217b578e1": "4a82a16d08d3414c62945e85aa9043b5",
".git/objects/9c/768a78d4b67e2fe21c8f0ec657a0e4910212b7": "b44841a038d3860c26215e27513187e9",
".git/objects/9d/383c8434194d817d94fdc572c6479b149b3640": "bcbe89d8fcf62c7f7ca92ea1a34a2130",
".git/objects/9e/7ba68300392a7127870610c719c1ab4969d777": "df00873c8bc1fae22b194d8006134495",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/701396d1f721e0ad82a289d9cd42ee3e4244f9": "2f77ad826c12bf156822e94dab403436",
".git/objects/a3/5ad2758c6f97ce1ed6ade9201803ed5973ef3e": "afc715847ee95b3208cdf99b8ee63215",
".git/objects/a6/d071daa145e80c47b7de1028922fd79c43955f": "d9f3fba9b5ae553dd34882cceee6fbaf",
".git/objects/a7/52abd15864d090ccd11c364016efdc140b04e0": "b74060baf38ff6792f5601d3b78b8f5e",
".git/objects/a7/52e9aecef00f4f610e031a928095c07e749a3a": "cbd7f9d2fd71207a1505277907c7828d",
".git/objects/a7/fb49c42c1162b56f6c6852a80edb23e668de84": "3183fa9fbcb0cde5124f6b8839678f81",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d70dc099296e263bb45f88b637ab7641289d25": "01160fece6a502a21f5684780e68820f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/1b861bf13f184146ed30a8b617535b2b3f7c7a": "046ba99d04f02f3bfcf948278bf4c797",
".git/objects/ab/81c7d16a6137fac3a5922c1c51ca955dc54748": "819b4276ad268b7ec84105f66a6ac923",
".git/objects/ac/7e1026f90d3c4fa881daa4fc7120a8ffc15867": "01b9bb84cc18f7f829500b84c67a90dc",
".git/objects/ae/2693254a0dc27297a78a849810d78a94c6e65f": "66304f4d8cd0d58c6437e3dd893e5dd4",
".git/objects/b4/f76dc00f94eff125521005ce3d0121e996a25b": "96224f3f961389ab6439a116d6172fbd",
".git/objects/b6/790336f75c6d14e3d9390f621907aa4ed71a63": "b9d00959b60a60a143cd46aba88b4587",
".git/objects/b6/f40add3c32ddeb08bc377232fc3e9545cd7b84": "0f150905d5a6be6aef124a420bb28721",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d1632619d08de4f836f18fb47de1473be4cef9": "2232dcca8fa2eefcfad52adae39ec24c",
".git/objects/b8/5862642a283b6e2c350feba14d4337cdf47fdc": "c3a5bbeee9d0d0ab3989c0301afa1663",
".git/objects/b8/85b0650c155623a29e02aef1e2f09a7d474105": "a6bae229d47011af9c0f9434196cb0b7",
".git/objects/b9/142709c93411f4a88382f02a5a2c7523464b46": "7f9fc450310448e623c0184c61f60266",
".git/objects/b9/27bc0a8f9bdc605e66a7f0efdae57f5ddc2606": "a481ad1dd6afd0443cfa07ab2369a7b9",
".git/objects/ba/656fed6a85d7ad1c71c972d3e1541520af9f6a": "09c01e0052a5973eda074ec01d1b4431",
".git/objects/bd/2ca1d6e5003a50f5d824dbca61371ad866f435": "1077946c56c7ed87096e68c0441affbb",
".git/objects/c0/bc0f06306289fc8bfe02d5a40f30c10c689b47": "49635b80b075fc19fdbec06630b6e6ab",
".git/objects/c0/be331c8a538f91c04c2a90d28f93b52867295f": "948c0ce339f4302946c26cf094a40251",
".git/objects/c2/41f52aace9bdc3eb90435f9649688a519f0ec0": "923962d9ab7e477ff3984ada5a3b44fb",
".git/objects/c3/aa8200f9c7eed3c8ff112be06b38a01e297c3c": "ae3d4181c23fd9f4f8f913a578c2a43e",
".git/objects/c4/20fab4199b26f85a9a515b0f7c3c44aa005cde": "c2c5caa9b0a0249c69cce3b33de013c3",
".git/objects/c4/e04a9367bc7e90ee6dc301d8fe780b6a0cbd85": "a7822a0cca91decd2b511dfa2885f3df",
".git/objects/c4/fc1e4e5046bcdf6f98f2a9285854d646fd6fb7": "bf2d48f3ec0a5f5eb97aab15920dfb30",
".git/objects/c6/132d6458a635ae9542bc3067ec1fa7e2895300": "7a26ec37e2c207b783834dd34996a35d",
".git/objects/ca/bb46d0b78959e52b812d70fe905c5bd8145c35": "e6a73707fc09ee57ddd43087200aad93",
".git/objects/ca/e86b6326ca0430f67b19f91ad9bf9dc70f2353": "bcccbc0aab3e8c9227233fc23ccac480",
".git/objects/cd/e8af7c7ef8b272bb223033ce7be4d91dca92dc": "7432030794e408b92aeb23704ef8382a",
".git/objects/ce/5f076c8bc7d560c2bbaea71009600a105cd6f4": "ae9fbaeec3582b7ef80132a8f6c8e2c5",
".git/objects/d3/032d0619c2b600dc9acfe4b3cad7d882b27ca7": "7f81557a58778c966df43545af4a46e8",
".git/objects/d3/4719511d534235b80187603df8c169c50e60bc": "22c32d6aef9b9a0c4757b526dfed4fce",
".git/objects/d3/d4d65a3d58207e68acc2a2a2fb69fea088d7e9": "bdc61bc4a765a2998f39293112c45734",
".git/objects/d6/486c7f66053da3cfa662c69cd52e51b49ae87f": "2415d5aa01e4e36ab1a21a720613827c",
".git/objects/d9/b105111cc7661b0725f2e55356a2a8763a068e": "f42c4e41cb414d9131e21cccaf125b16",
".git/objects/da/1848d67adb46a7ea9588c73f1f1603d7f5148e": "4519ed83a67ca7c3ad89115ba35997d0",
".git/objects/da/37af99c2df870dd14064a365140e7352317ae3": "8215d707c7ffc17df9445fd4e269fa74",
".git/objects/db/1ad3a9f5f8dbde657f3c986508444ae2e47f8b": "be485651c6e010dc3e7f4ab5d20c4bb9",
".git/objects/db/5d8d74642162bf20a64a75b42e459b797685dd": "db6c7080b3fbfd35babd4f510b7547a8",
".git/objects/dc/bfc55d6d1b34d0da93b794324cd13b4aa8012e": "30bf2acc619b407d48ae4fe8bf1747b2",
".git/objects/dd/38d97c1b4417e25791e858e66550c350a2ce4d": "f4890829c243bc781647a32b747963fa",
".git/objects/dd/8f9fbca3ea5f8fa1a1c98c48a036f49f16f141": "d0f1aacaba3b2a7abc931415e4ba1352",
".git/objects/df/24a4409f428c5d4bc5e22a159e55f657b48f81": "d3440a808270ecdfe2bc2b141ef33626",
".git/objects/e0/57e0c4500661a3b6b0e1ae6b0d66fced08b493": "1401393c9560f67a93ab893254aa712d",
".git/objects/e1/f5b5ee318d6dd60f185cd54d646850e9cf5185": "35bca9087e287683fe356ccd957c6a97",
".git/objects/e4/4912506c6c02a9ba898ebb9a38b65ccd7670e0": "7beccc6defca6e9333f8281a633eede9",
".git/objects/e4/f73346186b5ff4c89137e68bb21d4c8bf9f5bb": "75a46f6dfb108fbfc2046f457158b9f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/0c92d0e97e0a1debc1c5ff85e5879b8ed97317": "7826638756d474d9e146d7b9e0b009b0",
".git/objects/eb/e81f4f8cad1e0513cf4ec141d24b25cc164667": "248c1e24ee256e9aae79b8f3253703f1",
".git/objects/ec/1139eaf401bede9584eb73ddbb6528422a991f": "feaa239ae81742af703b4331e3dcce5a",
".git/objects/ec/f59e811fc9f238fb2dc027738f4349ee408303": "e8e738c748175d5b2c22413505a44566",
".git/objects/ed/9bda1e4b7c6d0492e60242932388b337299a49": "6cbfc84d97a845faadd9c9719c98c067",
".git/objects/ef/40df0a73533300c45a55a44c66ab20a6ebb0b5": "8471837b58e0f62f2a720249809daae4",
".git/objects/f2/95884f4e695063dd45dbd70483549988d6b88a": "f7811378cda31ed779f1167fabe98c13",
".git/objects/f4/d2b369386c35faf2c7852554c57135e9d17bf5": "ba36e54a55bbffe582f2abf8af64ef79",
".git/objects/f4/fb540b8d468268b66cd35b3d217fd936fa2a2f": "af22eeb849548e1593b427d744b2aa5b",
".git/objects/f7/27286baf8509723a0063c669f96251fe8fe152": "42fc2f103d40baabb1ac129da0d06f20",
".git/objects/f9/2053bd9c283c02f8e9b1e0416bb59498ae14ba": "909299386d663ab9bc00391f5993d05d",
".git/objects/fb/18fddb504200d1102f2bb5a1212327eb0018a1": "438349911e112b440a7d6ad1e469a682",
".git/objects/fc/5af5b79d34266fcac5994d4a60385812d4abc4": "3af6e2d551f799d6126163c61da87a65",
".git/objects/fc/bc568128a8dfa52d331b021ded11561ca739f1": "187a0595e04896e40e80245051d1904e",
".git/objects/fd/2b26002a8639c0ea6bcd6aab34119a05444786": "115c7009680e059209d922813891d840",
".git/objects/pack/pack-39e989f229136aafbf7eb928c9213ebc657a179d.idx": "9870ef854d899b68fcb90510c2dea5c2",
".git/objects/pack/pack-39e989f229136aafbf7eb928c9213ebc657a179d.pack": "20189a8ee79e21c42a9569fdfd635ac2",
".git/ORIG_HEAD": "928f3cb9c2a4d66f382442b5798f0b75",
".git/packed-refs": "e2d51643a1df0cd803d94baa290ba21d",
".git/refs/heads/main": "c082eeca0b19b25cd8fe1e6dd3ff09d8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c082eeca0b19b25cd8fe1e6dd3ff09d8",
".github/workflows/main.yml": "a4f1d4d1fdbcf46c32800f689ac17cf8",
"assets/AssetManifest.json": "8c4e8be867b15912ad593a8735bf9210",
"assets/assets/images/calculateur.jpg": "1cb3e2989c270cd3da78cc21dfaa05d5",
"assets/assets/images/carrousel1.jpg": "34dd9883e56fb3120c62882f99d6a613",
"assets/assets/images/carrousel2.jpg": "9d3494c99282ddf288f53433a5d4f80d",
"assets/assets/images/carrousel3.jpeg": "8ca4b0179a295354b078b2514dbe788d",
"assets/assets/images/demenagement.jpg": "a37a85c89561717da597e7ffa0917886",
"assets/assets/images/demenageurs-brossard.webp": "8541c6be2c32505eb7a6c12d43010d28",
"assets/assets/images/devis.jpg": "013e388f1f1a7ad19bfe107158328841",
"assets/assets/images/devis2.jpg": "abe915209c3b45c255f8188ece2c879f",
"assets/assets/images/devis3.png": "c794978400e7c7278aa85d123ec29009",
"assets/assets/images/import_export.jpg": "810169eac567851afff7bb290e459cef",
"assets/assets/images/logoTest.jpg": "a89dddca256af5bd5f7d17bb56c00098",
"assets/assets/images/logoTest.png": "a89dddca256af5bd5f7d17bb56c00098",
"assets/assets/images/maritime.jpg": "2a5013e8680859284461134d01324111",
"assets/assets/images/partenaire.jpg": "3f9060e01fcc49e679fd79c064f87c64",
"assets/assets/images/Prix_demenagement_897x505.jpg": "a5948ca1a4fcaf8c48ba29adbf1ecc3c",
"assets/assets/images/profil1.jpg": "299c7a58f60166129113b682a6fc0f8d",
"assets/assets/images/profil2.jpg": "10923dd824556c7ce40d71ff6c680cf0",
"assets/assets/images/routier.jpg": "a10bd14ee08e9ad4f5c9d4d7a8b26271",
"assets/assets/images/sectionpic.jpg": "d9753f3d2b3b149378fd6b852f2f7df1",
"assets/assets/images/sponsor1.png": "ee9e12f4604cdb095540837675161880",
"assets/assets/images/sponsor2.png": "1542b217b5e9ac24cafd802c9b91ef93",
"assets/assets/images/tracking.png": "978b6176e19d74f6c61fee349e6162f2",
"assets/assets/images/tracking2.png": "1facee8ee1f9747920a96a00c55efc73",
"assets/assets/meubles.json": "3ef16d4ad5017d38d23c8a36051c06dd",
"assets/assets/meubles_images/Salon/abat-jour.png": "ffdebb53a92c163c804578aa64bd2b4a",
"assets/assets/meubles_images/Salon/bibli-grande.png": "71c7854a97e3049dbe7c7b221b600232",
"assets/assets/meubles_images/Salon/bibli-petite.png": "4d28fe100ccb828ccf7783af56318397",
"assets/assets/meubles_images/Salon/bureau.png": "ef37944fbd93a895b9c80402c86fecf0",
"assets/assets/meubles_images/Salon/canape-2pl.png": "5a7db949422244dd89cdf240d80b7480",
"assets/assets/meubles_images/Salon/canape-3pl.png": "87e1603fa54b7c645dec5c90233314f7",
"assets/assets/meubles_images/Salon/canape-angle.png": "b68c52b9554c991c5db54244135a0432",
"assets/assets/meubles_images/Salon/carton-standard.png": "304cedb5f075289324595be44cea6814",
"assets/assets/meubles_images/Salon/chaise.png": "cb4b015d182cd18ee8a2e9f491b33516",
"assets/assets/meubles_images/Salon/divers.png": "9c201f6ed281747cd31962ec71f47178",
"assets/assets/meubles_images/Salon/etagere.png": "334554155d5324dbaeef4984043825c8",
"assets/assets/meubles_images/Salon/fauteuil.png": "1d2980b17cc3c67b12d27c1506f67d4c",
"assets/assets/meubles_images/Salon/gueridon.png": "27ef806d4ad6c21973be137a27a6a92c",
"assets/assets/meubles_images/Salon/halogene.png": "73eb39acd8f2b3d137482b78e5e3e263",
"assets/assets/meubles_images/Salon/hifi.png": "bb8449719e30ccf7ece9d31daf9bc027",
"assets/assets/meubles_images/Salon/imprimante.png": "53e8ecaea37aef1d2c90aa6ba57ee7e5",
"assets/assets/meubles_images/Salon/lustre.png": "70b9151553fda7978f19c25f3f36a2f4",
"assets/assets/meubles_images/Salon/meuble-living.png": "c9798c7f8e2728920a0996a455895a7e",
"assets/assets/meubles_images/Salon/meuble-tv.png": "8e87db4f3ec2105131243e39070457f1",
"assets/assets/meubles_images/Salon/ordi.png": "7827a2ad2df58041e5428b90f305f69d",
"assets/assets/meubles_images/Salon/petit-bureau.png": "97ce956bfe76f46c55b8f9460ab0fe56",
"assets/assets/meubles_images/Salon/petite-lampe.png": "6a63fae03e0f79a349337ae90c869f7f",
"assets/assets/meubles_images/Salon/piano-demi-queue.png": "1498d655304a6bd54711d1be7f3f44f2",
"assets/assets/meubles_images/Salon/piano-droit.png": "2aabfe9eef345b2e30ff51ed71f0b09c",
"assets/assets/meubles_images/Salon/piano-queue.png": "8054dcd6e594b2ef9eb0c04c48d046e0",
"assets/assets/meubles_images/Salon/placard.png": "74069d21b693a04d89cfb0440ae100a1",
"assets/assets/meubles_images/Salon/plante.png": "5a76360d6e2f71515e2b581a43817c89",
"assets/assets/meubles_images/Salon/table-basse.png": "a8e5e7bf38d7b99bc922d5098a53f4eb",
"assets/assets/meubles_images/Salon/table.png": "cf647f81d7343f0fc777ca3fa7266cc9",
"assets/assets/meubles_images/Salon/tableau.png": "a5da4a66c936ccec3f77d574ec950a94",
"assets/assets/meubles_images/Salon/television.png": "8fc33261ed28e078b188a6fc33edfbf2",
"assets/assets/svg/demenagement_02%2520-%2520Copie.svg": "ae66aa9aaa37a59877a6acfa6e2f6547",
"assets/assets/svg/demenagement_02.svg": "a5e1e473a31cf0782cc24106d3750dca",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7bd348bf29c69ad25f1d6ec21be9cf19",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "791a4d2023fc5dd544a1b0944a521a4d",
"/": "791a4d2023fc5dd544a1b0944a521a4d",
"main.dart.js": "a79cb74c69a4f536b15167b3b3f8015e",
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
