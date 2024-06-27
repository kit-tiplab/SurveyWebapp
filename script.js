const GOOGLE_APPS_SCRIPT_WEBAPP_URL = 'YOUR URL HERE';
let sentences = [
  {
    "success": true,
    "index": 4762,
    "kana": "Ｖ イパンコッ トット",
    "human": "V ip an=kor totto",
    "model": "V i=pankor totto",
    "modelIndex": 2,
    "contextKana": [
      "エアシㇼ オリパㇰ カムイ カムイ ミッポホ エネ ルウェ ネ ワ",
      "アエエオリパㇰ エアシㇼ キ ㇷ゚ ネ ルウェ ネ ナ。",
      "アイェ ワ アエヌレ ハウェ ネ ナ。",
      "セコㇿ カネ シノ ニㇱパ ハウェアン セコㇿ",
      "Ｖ イレス アイネ（？）[1]",
      "Ｖ イパンコッ トット",
      "Ｖ オカアン ヒケ",
      "Ｖ アイアㇻパレ クㇱ",
      "Ｖ ウ ハンケハンケ",
      "Ｖ ウ タンペ クス",
      "Ｖ サケカラン コㇿ"
    ],
    "contextLatn": [
      "easir oripak kamuy kamuy mitpoho e=ne ruwe ne wa",
      "a=e=eoripak easir ki p ne ruwe ne na.",
      "a=ye wa a=e=nure hawe ne na.",
      "sekor kane sino nispa hawean sekor",
      "V i=resu ayne(?)",
      "V ip an=kor totto",
      "V oka=an hike",
      "V a=i=arpare kus",
      "V u hankehanke",
      "V u tampe kusu",
      "V sakekar=an kor"
    ],
    "contextJapn": [
      "天然痘のカムイの孫がお前なのだ。",
      "お前は畏れ多く思われるものなのだよ。",
      "私はそう言ってお前に聞かせるのだよ。",
      "と本当のニㇱパが話した。",
      "私は育てられて",
      "私の母[2]は",
      "暮らして",
      "私を行かせるため（の時が（？））",
      "近づいてくる",
      "このために",
      "酒をつくりながら"
    ]
  },
  {
    "success": true,
    "index": 2323,
    "kana": "シネアンタ シノッ アン ...",
    "human": "sineanta sinot=an ...",
    "model": "sineanta sinot=an...",
    "modelIndex": 2,
    "contextKana": [
      "セコﾛ シノ ニｼパ ハウェアン セコﾛ.",
      "ア サ アン ヒネ オカ アン イケ(オカアニケ),",
      "ア サ イ オマﾌﾟ ア イ オマﾌﾟ ア コﾛ,",
      "ネ エネ イキ ワ オカイ ペ ア ネ イ カ ア エランペウテｸ ノ,",
      "トゥン ア ネ オカ アン ペ ネ ア ﾌﾟ,",
      "シネアンタ シノッ アン ...",
      "シ ポロ ナイ アン ワ ナイ サﾑ タ ア サハ トゥラノ オカ アン ワ,",
      "ア サハ ラウォマﾌﾟ カﾗ ワ,",
      "チェッポ コイキ チェﾌﾟ コイキ ワ,",
      "ネ ワ オカイ ペ アン... サッサトゥ ワ マタ カ サｸ カ ア エ.",
      "キナ ラタｼケﾌﾟ ムン ラタｼケﾌﾟ ア サハ カﾗ ワ トゥラノ キ コﾛ オカ アン ペ ネ ア ﾌﾟ,"
    ],
    "contextLatn": [
      "sekor sino nispa hawean sekor.",
      "a=sa an hine oka=an hike,",
      "a=sa i=omap a i=omap a kor,",
      "ne ene iki wa okay pe a=ne hi ka a=erampewtek no,",
      "tun a=ne oka=an pe ne a p,",
      "sineanta sinot=an ...",
      "si poro nay an wa nay sam ta a=saha turano oka=an wa,",
      "a=saha rawomap kar wa,",
      "ceppo koyki cep koyki wa,",
      "ne wa okay pe an... satsatu wa mata ka sak ka a=e.",
      "kina rataskep mun rataskep a=saha kar wa turano ki kor oka=an pe ne a p,"
    ],
    "contextJapn": [
      "と、立派な長者が語った、と。",
      "姉さんと一緒に暮らしていました。",
      "姉さんは私をとてもかわいがってくれ、",
      "どういう事情かはわかりませんが、",
      "ふたりきりで暮らしていました。",
      "ある日、遊んでいると…",
      "とても大きな川があって、その川のほとりに姉さんと一緒に暮らしていました。",
      "姉さんはうけ（魚を捕る仕掛け）を作って、",
      "小魚を捕り、魚を捕っては、",
      "それを干して冬も夏も食べました。",
      "山菜の混ぜ煮、雑草の混ぜ煮を姉さんと一緒に作って、暮らしていました。"
    ]
  },
  {
    "success": true,
    "index": 1828,
    "kana": "V ランマ カネ カッコﾛ カネ",
    "human": "V ramma kane katkor kane",
    "model": "V ranma kane katkor kane",
    "modelIndex": 0,
    "contextKana": [
      "セコﾛ フレナイ ウン ニｼパ",
      "V マタパ サｸ クﾙ",
      "V ペラッネ キナ",
      "V アピラピラ ワ",
      "V カシ タ ロカン。",
      "V ランマ カネ カッコﾛ カネ",
      "V オカアン ヒケ",
      "V シネアントタ",
      "V プヤﾗ オﾛ ネスン",
      "V クルン クルン。",
      "V インカラナクス"
    ],
    "contextLatn": [
      "sekor Hurenay un nispa",
      "V matapa sak kur",
      "V peratne kina",
      "V a=pirapira wa",
      "V kasi ta rok=an.",
      "V ramma kane katkor kane",
      "V oka=an hike",
      "V sineantota",
      "V puyar or nesun",
      "V kurun kurun.",
      "V inkar=an akusu"
    ],
    "contextJapn": [
      "とフレナイの旦那さんが",
      "女手のないもの",
      "バラバラの草を",
      "ばらまいて",
      "その上に座っていました。",
      "いつも変わらず同じように",
      "私はいたところ",
      "ある日",
      "窓のところで",
      "影がちらちらしました。",
      "私が目を遣ると"
    ]
  },
  {
    "success": true,
    "index": 1460,
    "kana": "レナネ アエ カｼマ パｸノ",
    "human": "ren @a=ne a=e kasma pakno",
    "model": "ren a=ne a=e kasma pakno",
    "modelIndex": 2,
    "contextKana": [
      "セコﾛ ウカットゥイマノ アウヌフ",
      "アオナハ エウン ハウェアン ランケ コﾛ",
      "タネ メノコ シﾘポ アウォｼマレ ヒ オラノ",
      "アウヌフ アエランポキウェン クス",
      "「アウヌフ アナｸ シニ ワ アン ヤッカ ピﾘカ。",
      "レナネ アエ カｼマ パｸノ",
      "アリキキアン クス ネ ナ」",
      "セコﾛ ハワナン コﾛ トイタ ウシ アン コﾛ",
      "オラノ トイタコアリキキアン ワ",
      "アマﾑ ポロンノ アエトイタ",
      "アウヌフ ポンノ ポンノ イカスイ コﾛ キ。"
    ],
    "contextLatn": [
      "sekor ukattuymano a=unuhu",
      "a=onaha eun hawean ranke kor",
      "tane menoko sirpo awosmare hi orano",
      "a=unuhu a=erampokiwen kusu",
      "\"a=unuhu anak sini wa an yakka pirka.",
      "ren @a=ne a=e kasma pakno",
      "arikiki=an kusu ne na\"",
      "sekor hawan=an kor toyta usi an kor",
      "orano toytakoarikiki=an wa",
      "amam poronno a=etoyta",
      "a=unuhu ponno ponno ikasuy kor ki."
    ],
    "contextJapn": [
      "と時には母が",
      "父に何度も言って",
      "もう一人前の女性になってからは",
      "母が気の毒なので",
      "「母さんは休んでいていいよ。",
      "３人で食べきれないくらいに",
      "頑張るから」",
      "と言って畑の時期になると",
      "畑仕事に精を出して",
      "穀物をたくさん植えました。",
      "母は少しずつ私を手伝っていました。"
    ]
  },
  {
    "success": true,
    "index": 5437,
    "kana": "Ｖ アリテㇰ サッカ",
    "human": "V ar itek sakka",
    "model": "V aritek sakka",
    "modelIndex": 1,
    "contextKana": [
      "Ｖ ネ ルウェ ネ",
      "Ｖ シネ マッネポ",
      "Ｖ コラㇷ゚",
      "ネア シネ マッネポ",
      "Ｖ イナン カ サッカ",
      "Ｖ アリテㇰ サッカ",
      "Ｖ ピㇼカ メノコ",
      "Ｖ アン ルウェ ネ",
      "Ｖ ミントゥチ カムイ",
      "Ｖ カムイ オッ タ",
      "Ｖ ヤイコトㇺカ ㇷ゚"
    ],
    "contextLatn": [
      "V ne ruwe ne",
      "V sine matnepo",
      "V kor a p",
      "nea sine matnepo",
      "V inan ka sakka",
      "V ar itek sakka",
      "V pirka menoko",
      "V an ruwe ne",
      "V mintuci kamuy",
      "V kamuy or ta",
      "V yaykotomka p"
    ],
    "contextJapn": [
      "であるのだ。",
      "一人の娘を",
      "持っていたのだが",
      "その一人娘が",
      "比ぶ者のない美貌",
      "比ぶ者のない手練",
      "美しい女性が",
      "いるのだ。",
      "河童が",
      "神のところで",
      "ふさわしい人（結婚相手）を"
    ]
  },
  {
    "success": true,
    "index": 4513,
    "kana": "スㇽクトノマッ トモイタㇰ エウㇱ(？) パ ワ オラノ カムイオロイタㇰ",
    "human": "surkutonomat tomoytak eus(?) pa wa orano kamuy'oroytak",
    "model": "surkutonomat tomoytak eus(?) pa wa orano kamuy'oroitak",
    "modelIndex": 2,
    "contextKana": [
      "アン ペ アナㇰネ ネア…… ネウン ポカ シㇰヌ ㇷ゚ ネ クス",
      "ウレチャヤヤ アコㇿ オッカイポ キ ワ アン クㇱ",
      "ネウン ポカ アカㇻ ヤㇰネ シㇰヌ ルウェ ネ。」",
      "ㇱコㇿ オンネ ウタㇻ ハウォカ コㇿ オラノ",
      "スㇽクトノマッ ネ ヤ オラウン…… ア……",
      "スㇽクトノマッ トモイタㇰ エウㇱ(？) パ ワ オラノ カムイオロイタㇰ",
      "ス ワ…… ソイ ワ ロㇱキ、アウ ワ ロㇱキ パ ヒネ カムイオロイタㇰ",
      "アイネ アアキヒ ヘセ トゥリリ(？) [9] ルウェ ネ ヒネ オラ ウン……",
      "ラン(？) [10] ウセイ ポ アカㇻ イネ パロ アオッテ クㇱ",
      "オ(?) ケㇱト イキ ルウェ ネ クㇱ オラ コント アㇻパアン イネ",
      "ネア オンネ ウタㇻ カ ソレクス ケイキリチ……"
    ],
    "contextLatn": [
      "an pe anakne nea... neun poka siknu p ne kusu",
      "urecayaya a=kor okkaypo ki wa an kus",
      "neun poka a=kar yakne siknu ruwe ne.\"",
      "sekor onne utar hawoka kor orano",
      "surkutonomat ne ya oraun... a...",
      "surkutonomat tomoytak eus(?) pa wa orano kamuy'oroytak",
      "su wa... soy wa roski, aw wa roski pa hine kamuy'oroytak",
      "ayne a=akihi hese turiri(?) ruwe ne hine ora un...",
      "ran(?) usey po a=kar hine paro a=otte kus",
      "o(?) kesto iki ruwe ne kus ora konto arpa=an hine",
      "nea onne utar ka sorekusu keykirici..."
    ],
    "contextJapn": [
      "者は何とか助かるものだ。",
      "それでこの若者は指が開いているから、",
      "どうにか看病すれば助かるぞ。」",
      "と年寄りたちが話しています。それから、老人たちは",
      "毒（トリカブト）の女神なんかも、そうして……",
      "毒（トリカブト）の女神をなだめる言葉もそえ、そして神々に対する言葉を",
      "外で上げ、家の中でも上げて祈りました。年寄りたちが神々に対する言葉を述べ",
      "そうすると弟が息を吹き返し",
      "年寄りたちは湯冷ましをつくって弟に飲ませるのに",
      "毎日来ていたので私が行って",
      "その年寄りたち（村長一家）も脚の裏の腱を……"
    ]
  },
  {
    "success": true,
    "index": 4629,
    "kana": "Ｖ１ チタタタタ",
    "human": "V1 ci=tata tata",
    "model": "V1 ci=tatatata",
    "modelIndex": 0,
    "contextKana": [
      "アシトマ ㇷ゚ カ アヌカㇻ ルウェ ネ ア コㇿカ",
      "ニㇱパ ネ アン マ オカアン ルウェ ネ セコㇿ",
      "シネ オッカイポ ハウェアン セコㇿ アン ウエペケㇾ",
      "クヌ ㇷ゚ ネ",
      "Ｖ１ シネ アマㇺプㇱ",
      "Ｖ１ チタタタタ",
      "Ｖ１ サケヘ チカㇻ",
      "Ｖ１ イワイ シントコ",
      "Ｖ１ ロッ チョライェ",
      "Ｖ１ ウトゥッ チョライェ",
      "Ｖ１ カムイ オピッタ"
    ],
    "contextLatn": [
      "a=sitoma p ka a=nukar ruwe ne a korka",
      "nispa ne an wa oka=an ruwe ne sekor",
      "sine okkaypo hawean sekor an uepeker",
      "ku=nu p ne",
      "V1 sine amampus",
      "V1 ci=tata tata",
      "V1 sakehe ci=kar",
      "V1 iwan sintoko",
      "V1 ror c=oraye",
      "V1 utur c=oraye",
      "V1 kamuy opitta"
    ],
    "contextJapn": [
      "恐ろしいことも見たけれども",
      "私たちは長者になって暮らしているのだ、と",
      "1 人の若者が語ったという昔話",
      "を私は聞きました",
      "ひとつの穀物の穂を",
      "刻んだ。",
      "それで酒を作った",
      "六つの行器を",
      "上座の方に寄せる",
      "下座に寄せる",
      "私は神々を"
    ]
  },
  {
    "success": true,
    "index": 1067,
    "kana": "「マカン クス ソモ エイトゥラ",
    "human": "\"mak an kusu somo e=itura",
    "model": "\"mak an kusu somo e=i=tura",
    "modelIndex": 2,
    "contextKana": [
      "アプンノ チﾌﾟサンケアニネ",
      "アコﾛ ペタル オッ タ アシﾘコテ",
      "ニサッタ アナｸ",
      "スイ アコタヌン ウタﾗ",
      "ウイマﾑ エパイェパ クナｸ イェパ コﾛ",
      "「マカン クス ソモ エイトゥラ",
      "エオナハ エココパン カｼパ ハウェ アン ペ",
      "アエシレン ワ オラ",
      "ネﾌﾟ カ アン チキ ウェン ワクス",
      "タネ パｸノ モｼマノ オカアン ルウェ ネ",
      "コﾛカ エイタサ エイコイトゥパ カｼパ シリ"
    ],
    "contextLatn": [
      "apunno cipsanke=an hine",
      "a=kor petaru or ta a=sirkote",
      "nisatta an yak",
      "suy a=kotanu un utar",
      "uymam epayepa kunak yepa kor",
      "\"mak an kusu somo e=itura",
      "e=onaha e=kokopan kaspa hawe an pe",
      "a=e=siren wa ora",
      "nep ka an ciki wen wakusu",
      "tane pakno mosmano oka=an ruwe ne",
      "korka eytasa eykoytupa kaspa siri"
    ],
    "contextJapn": [
      "静かに舟を出して",
      "私の船着き場にくくりつけておきました。",
      "翌日になったら",
      "また村の人達が",
      "交易に行くと言って",
      "「なぜかおまえを連れて行くのを",
      "おまえの父にきつく駄目だと言われているものを",
      "連れて行って",
      "何かあったら悪いので",
      "今までかまわずにいた",
      "のだがあまりにも憧れが強い様子が"
    ]
  },
  {
    "success": true,
    "index": 4757,
    "kana": "オロワノ アナㇰ アシヌマ アナㇰ エキㇺネ カ ソモ アン。",
    "human": "orowano anak asinuma anak ekimne ka somo=an.",
    "model": "orowano anak asinuma anak ekimne ka somo an.",
    "modelIndex": 0,
    "contextKana": [
      "アリキキ エアシㇼ カ アエピㇼカ",
      "ネㇷ゚ ア…… アテケ ケレ カ ソモ キ。",
      "ネア マッカチ カ ポロ ヒ ワノ ネㇷ゚ アマチヒ テケ ケレ シリ カ イサㇺノ",
      "エアシㇼ カ アリキキ ㇷ゚ ネ クス エアシㇼ アエウコヤイプンテㇰ コㇿ",
      "イピㇼカレㇱパ コㇿ オカアン",
      "オロワノ アナㇰ アシヌマ アナㇰ エキㇺネ カ ソモ アン。",
      "アポホ パテㇰ エキㇺネ ヤッカ",
      "ヌウェコアン ペ カムイ ネ チキ ユㇰ ネ チキ ネㇷ゚ ネ クス",
      "アコタヌ ウン ウタㇻ カ マカン ネ コㇿ エイメッカㇻ。",
      "トゥㇷ゚ カ レㇷ゚ カ スマウェ コㇿ コㇿ アコタヌ ウン ウタㇻ カ",
      "コタン エピッタ エイメッカㇻ コㇿ"
    ],
    "contextLatn": [
      "arikiki easir ka a=epirka",
      "nep a… a=teke kere ka somo ki.",
      "nea matkaci ka poro hi wano nep a=macihi teke kere siri ka isamno",
      "easir ka arikiki p ne kusu easir a=eukoyaypuntek kor",
      "i=pirkarespa kor oka=an",
      "orowano anak asinuma anak ekimne ka somo=an.",
      "a=poho patek ekimne yakka",
      "nuwekoan pe kamuy ne ciki yuk ne ciki nep ne kusu",
      "a=kotanu un utar ka makan ne kor eymekkar.",
      "tup ka rep ka sumawe kor kor a=kotanu un utar ka",
      "kotan epitta eymekkar kor"
    ],
    "contextJapn": [
      "息子は頑張っていっそう私たちは豊かになった。",
      "何も私の手を煩わせなかった。",
      "その女の子も大きくなってからは、私の妻の手を煩わせることなく",
      "よく働くので、私たちは互いに喜びながら",
      "大事にされながら暮らしていた。",
      "それからは私は山に行かなかった。",
      "息子だけが山に行っても",
      "獲物に恵まれるのでクマでもシカでもなんでも",
      "村の人にしばしばおすそ分けしていた。",
      "二頭、三頭と獲物を獲ると、村の人々",
      "全員におすそ分けし"
    ]
  },
  {
    "success": true,
    "index": 2238,
    "kana": "ホㇱキ! ホㇱキ! ホㇱキノ ク=オマン.",
    "human": "Hoski! Hoski! Hoskino ku=oman.",
    "model": "hoski! hoski! hoskino ku=oman.",
    "modelIndex": 1,
    "contextKana": [
      "タネ ソモ ク=テレ ナ.",
      "エチ=テレ ワ カン（ㇰ=アン） クㇱネ ナ, トゥナㇱノ エㇰ.",
      "アイヌ オピッタ エチ=テレ ワ アン.",
      "シㇰラㇷ゚",
      "ホㇱキ",
      "ホㇱキ! ホㇱキ! ホㇱキノ ク=オマン.",
      "ピラトゥリ パㇰノ シネ イチリ アン.",
      "プヤㇻ",
      "プヤㇻ マッカ ワ アン.",
      "ポンノ ヌカㇻ ヤン. アトゥイ ア=ヌカㇻ.",
      "エユカㇻ"
    ],
    "contextLatn": [
      "tane somo ku=tere na.",
      "eci=tere wa k=an kusne na, tunasno ek.",
      "aynu opitta eci=tere wa an.",
      "sikrap",
      "hoski",
      "Hoski! Hoski! Hoskino ku=oman.",
      "Piraturi pakno sine iciri an.",
      "puyar",
      "puyar makka wa an.",
      "ponno nukar yan. atuy a=nukar.",
      "eyukar"
    ],
    "contextJapn": [
      "もう待ちませんよ。",
      "待っているよ。早く来い。",
      "みんな待っています。",
      "まつげ",
      "先に、ちょっと待て",
      "待て待て、私が先に行く。",
      "平取まで一里あります。",
      "窓",
      "窓を開けている。",
      "ちょっと見なさい。海が見えます。",
      "まねる"
    ]
  }
];
displaySentencePair();

function setContext(data) {
    document.getElementById('context-before-kana').innerHTML = '';
    document.getElementById('context-before-latn').innerHTML = '';
    document.getElementById('context-before-japn').innerHTML = '';
    document.getElementById('context-after-kana').innerHTML = '';
    document.getElementById('context-after-latn').innerHTML = '';
    document.getElementById('context-after-japn').innerHTML = '';
    
    document.getElementById('car-context-before-kana').innerHTML = '';
    document.getElementById('car-context-before-latn').innerHTML = '';
    document.getElementById('car-context-before-japn').innerHTML = '';
    document.getElementById('car-context-after-kana').innerHTML = '';
    document.getElementById('car-context-after-latn').innerHTML = '';
    document.getElementById('car-context-after-japn').innerHTML = '';
    
    for(let ii = 0; ii < data.contextKana.length; ii++) {
        if(ii < Math.floor(data.contextKana.length / 2)) {
            document.getElementById('context-before-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('context-before-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('context-before-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
            document.getElementById('car-context-before-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('car-context-before-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('car-context-before-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
        } else if(ii === Math.floor(data.contextKana.length / 2)) {
            document.getElementById('context-before-kana').innerHTML += '<span class="prompt">' + data.contextKana[ii] + '</span><br>\n';
            document.getElementById('context-before-japn').innerHTML += '<span class="prompt">' + data.contextJapn[ii] + '</span><br>\n';
            document.getElementById('car-context-before-kana').innerHTML += '<span class="prompt">' + data.contextKana[ii] + '</span><br>\n';
            document.getElementById('car-context-before-japn').innerHTML += '<span class="prompt">' + data.contextJapn[ii] + '</span><br>\n';
        } else {
            document.getElementById('context-after-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('context-after-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('context-after-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
            document.getElementById('car-context-after-kana').innerHTML += data.contextKana[ii] + '<br>\n';
            document.getElementById('car-context-after-latn').innerHTML += data.contextLatn[ii] + '<br>\n';
            document.getElementById('car-context-after-japn').innerHTML += data.contextJapn[ii] + '<br>\n';
        }
    }

    normalizeSlideHeights();
}

function displaySentencePair() {
    let displayAfterFetch = sentences.length === 0;
    document.getElementById('comment').value = '';
    
    if(sentences.length > 0) {
        displayNext();
    }
    if(sentences.length < 10) {
        fetchNewSentences(displayAfterFetch);
    }
}

function displayNext() {
    const data = sentences.pop();
    const diff = calculateDiff(data.human, data.model);
    const humanIndex = Math.floor(Math.random() * 2) + 1;
    const humanSentence = 'sentence' + humanIndex;
    const modelSentence = 'sentence' + (humanIndex === 1 ? 2 : 1);
    
    setContext(data);
    normalizeSlideHeights();
    
    document.getElementById(humanSentence).innerHTML = diff.sentence1;
    document.getElementById(modelSentence).innerHTML = diff.sentence2;
    
    document.getElementById(humanSentence).onclick = () => {
        sendDecision(true, false, document.getElementById('comment').value, data);
    };
    document.getElementById(modelSentence).onclick = () => {
        sendDecision(false, true, document.getElementById('comment').value, data);
    };
    document.getElementById('both').onclick = () => {
        sendDecision(true, true, document.getElementById('comment').value, data);
    };
    document.getElementById('neither').onclick = () => {
        sendDecision(false, false, document.getElementById('comment').value, data);
    };
}

function fetchNewSentences(displayOnFinish) {
    fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            sentences = sentences.concat(data.sentences);
            if(displayOnFinish) {
                displayNext();
            }
        } else {
            console.log("Error");
        }
    })
    .catch(error => {
        data = {success: false};
        console.error('Error:', error);
    });
}

function calculateDiff(sentence1, sentence2) {
    const dmp = new diff_match_patch();
    const diffs = dmp.diff_main(sentence1, sentence2);
    dmp.diff_cleanupSemantic(diffs);

    let highlightedSentence1 = '';
    let highlightedSentence2 = '';

    diffs.forEach(diff => {
        type = diff[0];
        text = diff[1];
        if (type === 0) {
            highlightedSentence1 += text;
            highlightedSentence2 += text;
        } else if (type === -1) {
            highlightedSentence1 += `<span class="highlight">${text}</span>`;
        } else if (type === 1) {
            highlightedSentence2 += `<span class="highlight">${text}</span>`;
        }
    });

    return { sentence1: highlightedSentence1, sentence2: highlightedSentence2 };
}

function sendDecision(humanOK, modelOK, comment, sentence) {
    displaySentencePair();
    
    const data = {
        humanOK: humanOK,
        modelOK: modelOK,
        index: sentence.index,
        modelIndex: sentence.modelIndex,
        comment: comment,
    };
    
    fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then(response => response.json())
    .then(respObj => {
        console.log(respObj);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function normalizeSlideHeights() {
    document.querySelectorAll('.carousel').forEach(function(carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        // reset the height
        items.forEach(function(item) {
            item.style.minHeight = '0';
        });

        // set the height
        const maxHeight = Array.from(items).reduce(function(max, item) {
            const wasActive = item.classList.contains('active');
            if (!wasActive) {
                item.classList.add('active');
            }

            const height = item.offsetHeight;

            if (!wasActive) {
                item.classList.remove('active');
            }

            return Math.max(max, height);
        }, 0);

        items.forEach(function(item) {
            item.style.minHeight = maxHeight + 'px';
        });
    });
}

(() => {
    const initCarousel = function(id) {
        return new bootstrap.Carousel(document.querySelector(`#${id}`), {
            interval: 50,
            touch: false,
        });
    };

    const linkFunctions = function(f1, f2) {
        return () => {
            setTimeout(f1, 0);
            f2();
        };
    };

    const carouselBefore = initCarousel('carousel-before');
    const carouselAfter  = initCarousel('carousel-after');

    carouselBefore.next = carouselBefore.next = linkFunctions(carouselBefore.next.bind(carouselBefore), carouselAfter.next.bind(carouselAfter));
    carouselBefore.prev = carouselBefore.prev = linkFunctions(carouselBefore.prev.bind(carouselBefore), carouselAfter.prev.bind(carouselAfter));
    carouselBefore.to = carouselBefore.to = linkFunctions(carouselBefore.to.bind(carouselBefore), carouselAfter.to.bind(carouselAfter));
})();

window.addEventListener('load', normalizeSlideHeights);
window.addEventListener('resize', normalizeSlideHeights);
window.addEventListener('orientationchange', normalizeSlideHeights);
