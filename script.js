function load() {
document.getElementById('loaddiv').style.opacity = '0';
setTimeout(() => { document.getElementById('loaddiv').remove() }, 1500)
document.getElementById('audio').play()	
}
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement('a'),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }	
}
var saveContent
var formats = [];
var inits = {	
  selector: '#main',
  resize: false,    
  plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable charmap emoticons pagebreak',
  fullscreen_native: true,      
  toolbar:
    'undo redo | bold italic underline strikethrough fontselect fontsizeselect formatselect  alignleft aligncenter alignright alignjustify forecolor backcolor ltr rtl lineheight | subscript superscript | download upload impcur new | numlist bullist | outdent indent | preview print | casechange | operate mathjax | tts | spellcheck | version',    
  height: 580,
  skin_url: 'skin/skins/ui/linum',
  icons: 'svg-icons',    
  menubar: 'file insert edit formatpainter table',
  menu: {
      file: {title: 'File', items: 'm-save m-open m-impcur m-new'},
	  formatpainter: {title: 'Format Painter', items: 'copyformat pasteformat resetformat'},
	  insert: {title: 'Insert', items: 'insertdatetime template image link inserttable codesample charmap emoticons anchor hr nonbreaking toc pagebreak'},
  },	
  external_plugins: {'mathjax': 'mathjax.min.js'},
  mathjax: {
    lib: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', //required path to mathjax
    //symbols: {start: '\\(', end: '\\)'}, //optional: mathjax symbols
    //className: "math-tex", //optional: mathjax element class
    //configUrl: '/your-path-to-plugin/@dimakorotkov/tinymce-mathjax/config.js' //optional: mathjax config js
  },
  content_css: 'style.css, document, writer',
  content_style: 'body {font-family: Sora, Noto Sans, sans-serif;} .capitalize {text-transform: capitalize}',	
  fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt 38pt 40pt 42pt 44pt 46pt 48pt 50pt 52pt 54pt 56pt 58pt 60pt 62pt 64pt 66pt 68pt 70pt 72pt 74pt 76pt 78pt 80pt 82pt 84pt 86pt 88pt 90pt 92pt 94pt 96pt 98pt 100pt 102pt 104pt 106pt 108pt 110pt 112pt 114pt 116pt 118pt 120pt 122pt 124pt 126pt 128pt 130pt 9pt 11pt 13pt 15pt 17pt 19pt 21pt 23pt 25pt 27pt 29pt 31pt 33pt 35pt 37pt 39pt 41pt 43pt 45pt 47pt 49pt 51pt 53pt 55pt 57pt 59pt 61pt 63pt 65pt 67pt 69pt 71pt 73pt 75pt 77pt 79pt 81pt 83pt 85pt 87pt 89pt 91pt 93pt 95pt 97pt 99pt 101pt 103pt 105pt 107pt 109pt 111pt 113pt 115pt 117pt 119pt 121pt 123pt 125pt 127pt 129pt 131pt',
  branding: false,	
  font_formats:
   'Abril Fatface=Abril Fatface; Alegreya=Alegreya; Alegreya SC=Alegreya SC; Amatic SC=Amatic SC; Andada Pro=Andada Pro; Archivo=Archivo; Arvo=Arvo; Asar=Asar; Atiba=Atiba, sans-serif; Atkinson Hyperlegible=Atkinson Hyperlegible; B612=B612; Baloo 2=Baloo 2, Baloo Bhai 2, Baloo Bhaina 2, Baloo Chettan 2, Baloo Da 2, Baloo Paaji 2, Baloo Tamma 2, Baloo Tammudu 2, Baloo Thambi 2, sans-serif; BioRhyme=BioRhyme; Cardo=Cardo; Carnevalee Freakshow=Carnevalee Freakshow; Cairo=Cairo; Cobaissi=Cobaissi; Comfortaa=Comfortaa; Cormorant=Cormorant; Concert One=Concert One; Crimson Text=Crimson Text; DM Mono=DM Mono; DM Sans=DM Sans; DM Serif Display=DM Serif Display; DM Serif Text=DM Serif Text; Epilogue=Epilogue; Fjalla One=Fjalla One; Frank Ruhl Libre=Frank Ruhl Libre; Georama=Georama; Hahmlet=Hahmlet; Heebo=Heebo; Higher=HigherFont; Hind Siliguri=Hind Siliguri; IBM Plex Sans=IBM Plex Sans; IBM Plex Serif=IBM Plex Serif; IBM Plex Mono=IBM Plex Mono; Inconsolata=Inconsolata; Inter=Inter; Josefin Slab=Josefin Slab; Karla=Karla; Kompakt=Kompakt; Kumbh Sans=Kumbh Sans; Lato=Lato; Less Sans=Less Sans; Lexend=Lexend; Libre Franklin=Libre Franklin; Lobster=Lobster; Lora=Lora; Merriweather=Merriweather; Metropolis=Metropolis; Monsterrat=Montserrat; Muli=Muli; Mulish=Mulish; Neucha=Neucha; Noto Sans=Noto Sans; Nunito=Nunito; Nunito Sans=Nunito Sans; Old Standard TT=Old Standard TT; Open Sans=Open Sans; Oswald=Oswald; Pacifico=Pacifico; Patrick Hand=Patrick Hand; Permanent Marker=Permanent Marker; Playfair Display=Playfair Display; Poppins=Poppins; PT Serif=PT Serif; Qahiri=Qahiri; Quicksand=Quicksand; Rakkas=Rakkas; Raleway=Raleway; Recursive=Recursive; Red Hat=RedHat; Red Hat Display=Red Hat Display; Red Hat Mono=Red Hat Mono; Roboto=Roboto; Roboto Condensed=Roboto Condensed; Roboto Mono=Roboto Mono; Roboto Slab=Roboto Slab; Rhodium Libre=Rhodium Libre; Rubik=Rubik; Sans Serif=sans-serif; Sora=Sora; Source Code Pro=Source Code Pro; Source Sans Pro=Source Sans Pro; Space Grotesk=Space Grotesk; Space Mono=Space Mono; Spectral=Spectral; Staatliches=Staatliches; Style Script=Style Script; Titillium Web=Titillium Web; Ubuntu=Ubuntu; Ubuntu Condensed=Ubuntu Condensed; Ubuntu Mono=Ubuntu Mono; Varela=Varela; Verdana=verdana,geneva; Vibur=Vibur; Vollkorn=Vollkorn; Wanderlust=Wanderlust; Linum Round=LinumSans; Work Sans=Work Sans; Yomogi=Yomogi; Zen Loop=Zen Loop; CSS Debug=serif;',	
  width: '100vw',
  height: '100vh',	
  mobile: {
	  toolbar:
    'undo redo | bold italic underline strikethrough fontselect fontsizeselect formatselect subscript superscript alignleft aligncenter alignright alignjustify forecolor backcolor removeformat ltr rtl lineheight | download upload impcur new | numlist bullist | outdent indent | preview print | fullscreen | casechange | nsertdatetime template image link table codesample charmap emoticons anchor hr nonbreaking toc | searchreplace | pagebreak | copyformat pasteformat | tts  | version'
  },    
  templates: [
      {
          title: 'Lorem Ipsum',
		  description: 'Translations May Not Be 100% Accurate',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
	  {
		  title: 'Lorem Ipsum(Spanish)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor y vitalidad, de modo que el trabajo y el dolor, algunas cosas importantes que hacer eiusmod. A lo largo de los años, vendré, que no sacará alícuotas de ella la ventaja del ejercicio, de modo que los esfuerzos de estímulo si el distrito escolar y la longevidad. Querer ser un dolor en el cupidatat cillum ha sido criticado en el Duis et dolore magna huir no produce ningún placer resultante. Los negros excepteur cupidatat no son excepteur, es reconfortante para el alma, es decir, abandonaron los deberes generales de los que tienen la culpa de tus problemas.'
	  },
	  {
		  title: 'Lorem Ipsum(Russian)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: 'Lorem ipsum dolor sit amet, conctetur adipiscing elit, sed tempor и жизнеспособность, так что труд и горе, некоторые важные дела, которые нужно делать eiusmod. Через несколько лет я приду, кто будет nostrud аликвот из ее преимущества физических упражнений, чтобы стимулировать усилия, если школьный округ и долголетие. В Duis et dolore magna «желание быть болью в купидате» критиковалось. Бегство не приносит никакого удовольствия. Excepteur cupidatat черные не excepteur, успокаивают душу, то есть они бросили общие обязанности тех, кто виноват в ваших бедах.'
	  },
	  {
		  title: 'Lorem Ipsum(French)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor et vitality, de sorte que le travail et le chagrin, certaines choses importantes à faire eiusmod. Au fil des années, je viendrai, qui saura aliquier d'elle l'avantage de l'exercice, afin de stimuler les efforts si le district scolaire et la longévité. Vouloir être une douleur dans le cupidatat cillum a été critiqué dans la fuite Duis et dolore magna ne produit aucun plaisir résultant. Excepteur cupidatat les noirs ne sont pas excepteur, c'est apaisant pour l'âme, c'est-à-dire qu'ils ont déserté les devoirs généraux de ceux qui sont responsables de vos ennuis."
	  },
	  {
		  title: 'Lorem Ipsum(Greek)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor και ζωτικότητα, έτσι ώστε η εργασία και η θλίψη, μερικά σημαντικά πράγματα να κάνουμε eiusmod. Με την πάροδο των ετών, θα έρθω, ο οποίος θα ξεδιπλώσει από αυτήν το πλεονέκτημα της άσκησης, έτσι ώστε οι προσπάθειες τόνωσης της σχολικής περιφέρειας και η μακροζωία. Θέλουν να είναι ένας πόνος στο cupidatat cillum έχει επικριθεί στο Duis et dolore magna φυγή δεν παράγει καμία απόλαυση. Excepteur cupidatat μαύροι δεν είναι εξαιρετικοί, είναι καταπραϋντικοί στην ψυχή, δηλαδή εγκατέλειψαν τα γενικά καθήκοντα εκείνων που φταίνε για τα προβλήματά σας.'
	  },
	  {
		  title: 'Lorem Ipsum(Traditional Chinese)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '團隊就是不要讓另外一個人失敗，店不在於多，做小了，永遠要把對手想得非常強大，我覺得我們應該為結果付報酬，人一輩子走下去挑戰會更多，小企業有大的胸懷，記住，在今天的商場上已經沒有秘密了，地不怕，但也不是不可能，不管你擁有多少資源，裡面有無數細節，也許就會走向成功。'
	  },
	  {
		  title: 'Lorem Ipsum(Simplified Chinese)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '运完手区去意或高提家社，当起的身研5详人查得。 人传须毛联构品则那局深，期务及书最才近区局，号史露结一话千大。 难路即回决细更马置，然应不象花百写者，阶建极实才北私。 用专收天口快分回军连她建时选法据，矿感素米料经段录回杏里位个。 本酸该设取于金越，强在却织论厂名米，只详教针杠情。'
	  },
	  {
		  title: 'Lorem Ipsum(Italian)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor e vitalità, in modo che il lavoro e il dolore, alcune cose importanti da fare eiusmod. Nel corso degli anni, verrò io, che non alimenterà da lei il vantaggio dell'esercizio fisico, in modo che stimoli gli sforzi se il distretto scolastico e la longevità. Vuoi essere un dolore nel cupidatat cillum è stato criticato nel Duis et dolore magna fuggire non produce piacere risultante. Excepteur cupidatat i neri non sono eccezioni, è calmante per l'anima, cioè hanno disertato i doveri generali di coloro che sono responsabili dei tuoi problemi."
	  },
	  {
		  title: 'Lorem Ipsum(Korean)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '로렘 입숨 슬픔은 노동과 슬픔, 몇 가지 중요한 일들이 eiusmod 할 그래서, AMET consectetur adipiscing ELIT, 나오지도 tempor과 활력을 앉아있다. 수년에 걸쳐, 그래서, nostrud 그녀의 운동의 장점을 aliquip 누가 올 것이다 자극 노력 학군과 장수 경우. cupidatat의 cillum에 통증이 도망 음주 운전 등 dolore 마그나에서 비판을 받아왔다되고 싶어하는 것은 어떤 결과 기쁨을 생성하지 않습니다. 흑인하지 excepteur 있습니다 cupidatat Excepteur이다 영혼을 진정되고, 그들은 당신의 문제에 대한 책임이있는 사람들의 일반적인 의무를 버리고.'
	  },
	  {
		  title: 'Lorem Ipsum(Japanese)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: 'Lorem ipsum dolorは、eiusmodを実行するためのいくつかの重要なことである、労力と悲しみを実現するために、アメット、consectetur adipiscing elit、sed tempor andvitaryに座っています。 何年にもわたって、私は来て、彼女から運動の利点を奪い取って、学区と長寿の場合の刺激的な努力をします。 飲酒運転で批判されているキューピダット・シラムの痛みになりたいと思っているドロア・マグナの逃亡は、結果として生じる喜びを生み出しません。 例外的なキューピダタットの黒人は例外ではなく、魂を落ち着かせます。つまり、彼らはあなたの悩みのせいにする人々の一般的な義務を放棄しました。'
	  },
	  {
		  title: 'Lorem Ipsum(Hindi)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: 'लोरेम इप्सम डोलर सिट एमेट, कॉन्सेक्टेटूर एडिपिसिंग एलीट, सेड टेम्पोर एंड वाइटलिटी, ताकि श्रम और दुःख, कुछ महत्वपूर्ण चीजें ईयूसमॉड करें। इन वर्षों में, मैं आऊंगा, जो व्यायाम के लाभ से बाहर निकलेगा, ताकि स्कूल जिले और दीर्घायु होने पर प्रोत्साहन के प्रयास हो सकें। कामदेव में दर्द बनना चाहते हैं, ड्यूस एट डोलोरे मैग्ना फ्ली में आलोचना की गई है, कोई परिणामी आनंद नहीं है। अछूत कामदेव अश्वेत अपवाद नहीं हैं, आत्मा के लिए सुखदायक हैं, अर्थात, उन्होंने उन लोगों के सामान्य कर्तव्यों को त्याग दिया है जो आपकी परेशानियों के लिए जिम्मेदार हैं।'
	  },
	  {
		  title: 'Dummy Text(English)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>The spectacle before us was indeed sublime.</h1><span>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</span>'
	  },
	  {
		  title: 'Dummy Text(Spanish)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>El espectáculo que teníamos ante nosotros era realmente sublime.</h1><span>Aparentemente habíamos alcanzado una gran altura en la atmósfera, porque el cielo estaba de un negro intenso y las estrellas habían dejado de brillar. Por la misma ilusión que eleva el horizonte del mar hasta el nivel del espectador en una ladera, la nube de marta de abajo se desvaneció y el automóvil pareció flotar en medio de una inmensa esfera oscura, cuya mitad superior estaba sembrada de plata. Mirando hacia el oscuro golfo de abajo, pude ver una luz rojiza fluyendo a través de una grieta en las nubes.</span>'
	  },
	  {
		  title: 'Dummy Text(Russian)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>Зрелище перед нами действительно возвышенное.</h1><p>По-видимому, мы достигли большой высоты в атмосфере, потому что небо было мертвое черным, и звезды перестали мерцать. По той же иллюзии, которая поднимает морской горизонт до уровня зрителя на склоне холма, соболиное облако под ним расплылось, и машина, казалось, парила в центре огромной темной сферы, верхняя половина которой была усыпана серебро. Глядя вниз в темную пропасть ниже, я мог видеть румяный свет потокового через разлом в облаках.</p>'
	  },
	  {
		  title: 'Dummy Text(French)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: "<h1>Le spectacle qui s'offrait à nous était en effet sublime.</h1><p>Apparemment, nous avions atteint une grande hauteur dans l'atmosphère, car le ciel était noir mort, et les étoiles avaient cessé de scintiller. Par la même illusion qui élève l'horizon de la mer à la hauteur du spectateur à flanc de colline, le nuage de zibeline en dessous s'est bombé, et la voiture semblait flotter au milieu d'une immense sphère sombre, dont la moitié supérieure était parsemée de argent. En regardant dans le gouffre sombre en contrebas, je pouvais voir une lumière rougeâtre traverser une faille dans les nuages.</p>"
	  },
	  {
		  title: 'Dummy Text(Greek)',
		  description: 'Choose Teplate Above',
		  content: '<h1>Το θέαμα που είχαμε μπροστά μας ήταν πραγματικά υπέροχο.</h1><p>Προφανώς είχαμε φτάσει σε μεγάλο ύψος στην ατμόσφαιρα, για ο ουρανός ήταν ένας νεκρός μαύρο, και τα αστέρια είχαν πάψει να ακτινοβολούν. Με την ίδια ψευδαίσθηση που ανεβάζει τον ορίζοντα της θάλασσας στο επίπεδο του θεατή στην πλαγιά ενός λόφου, το νεφελώδες σύννεφο από κάτω διαλύθηκε και το αυτοκίνητο φαινόταν να επιπλέει στη μέση μιας τεράστιας σκοτεινής σφαίρας, του οποίου το πάνω μισό ήταν σπαρμένο με ασήμι. Κοιτάζοντας κάτω στον σκοτεινό κόλπο παρακάτω, μπορούσα να δω ένα κατακόκκινο φως να περνά μέσα από μια σχισμή στα σύννεφα.</p>'
	  },
	  {
		  title: 'Dummy Text(Tradititional Chinese)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>我們面前的景象確實是崇高的。</h1><p>顯然我們已經到達了大氣層的高度，因為天空是一片漆黑，星星也不再閃爍。 同樣的幻覺將海平面升高到山坡上的觀眾的水平，下面的紫貂雲被拋出，汽車似乎漂浮在一個巨大的黑暗球體的中間，其上半部分散落著 銀。 向下看到下面的黑暗深淵，我可以看到一個面色紅潤的光流通過雲層的裂痕。</p>'
	  },
	  {
		  title: 'Dummy Text(Simplified Chinese)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>摆在我们面前的景象的确是壮观的。</h1><p>显然我们已经到达了大气层的高度，因为天空是一片漆黑，星星也不再闪烁。 同样的幻觉将海平面升高到山坡上的观众的水平，下面的紫貂云被抛出，汽车似乎漂浮在一个巨大的黑暗球体的中间，其上半部分散落着 银。 低头望向下方黑暗的海湾，我可以看到一道红光从云层的裂缝中流过。</p>'
	  },
	  {
		  title: 'Dummy Text(Italian)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: "<h1>Lo spettacolo davanti a noi era davvero sublime.</h1><p>Apparentemente avevamo raggiunto una grande altezza nell'atmosfera, perché il cielo era di un nero morto e le stelle avevano smesso di brillare. Per la stessa illusione che eleva l'orizzonte del mare al livello dello spettatore sul fianco di una collina, la nuvola nera sottostante si dissolse, e l'auto parve galleggiare nel mezzo di un'immensa sfera oscura, la cui metà superiore era cosparsa di d'argento. Guardando giù nel golfo oscuro sottostante, potevo vedere una luce rossastra che scorreva attraverso una fessura tra le nuvole.</p>"
	  },
	  {
		  title: 'Dummy Text(Korean)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>우리 앞에 펼쳐진 광경은 참으로 숭고했습니다.</h1><p>분명히 우리는 하늘이 죽은 검은 색이었다 위해, 분위기에 큰 높이에 도달했다, 그리고 별이 반짝하는 것을 정지했다. 바다의 수평선을 산비탈에 있는 구경꾼의 높이로 끌어올리는 것과 같은 환상에 의해, 그 아래에 있는 담비구름이 흩날리며, 자동차는 거대한 검은 구체의 한가운데에 떠 있는 것처럼 보였다. 은. 어두운 만으로 아래를 내려다보니 구름 사이로 붉은 빛이 스며드는 것을 볼 수 있었습니다.</p>'
	  },
	  {
		  title: 'Dummy Text(Japanese)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>私たちの前の光景は確かに崇高でした。</h1><p>空は真っ黒で、星はきらめきを止めていたので、どうやら私たちは大気の中で非常に高いところに到達したようです。 海の地平線を丘の中腹の観客の高さまで持ち上げるのと同じ幻想によって、下のセーブルの雲が皿に盛られ、車は巨大な暗い球の真ん中に浮かんでいるように見えました。 銀。 下の暗い湾を見下ろすと、雲の裂け目を通って流れる血色の良い光を見ることができました。<p>'
	  },
	  {
		  title: 'Dummy Text(Hindi)',
		  description: 'Translations May Not Be 100% Accurate',
		  content: '<h1>हमारे सामने का तमाशा वास्तव में उदात्त था।</h1><p>जाहिरा तौर पर हम वातावरण में एक महान ऊंचाई पर पहुंच गए थे, क्योंकि आकाश एक मृत काला था, और तारे टिमटिमाना बंद कर चुके थे। उसी भ्रम से जो समुद्र के क्षितिज को एक पहाड़ी पर दर्शक के स्तर तक ले जाता है, नीचे सेबल बादल को हटा दिया गया था, और कार एक विशाल अंधेरे क्षेत्र के बीच में तैरती हुई प्रतीत होती थी, जिसका ऊपरी आधा भाग बिखरा हुआ था चांदी। नीचे अंधेरे खाड़ी में नीचे देखते हुए, मैं बादलों में दरार के माध्यम से एक लाल बत्ती स्ट्रीमिंग देख सकता था।</p>'
	  }
  ],
  textpattern_patterns: [
    {start: '#', format: 'h1'},
    {start: '##', format: 'h2'},
    {start: '###', format: 'h3'},
    {start: '####', format: 'h4'},
    {start: '#####', format: 'h5'},
    {start: '######', format: 'h6'},
    {start: '* ', cmd: 'InsertUnorderedList'},
    {start: '- ', cmd: 'InsertUnorderedList'},
    {start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
    {start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
    {start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
    {start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
    {start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }},
    {start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }}
  ],	
  contextmenu: false,
  draggable_modal: true,	
  emoticons_append: {
	  heart_on_fire: {
	  	keywords: ['heart on fire', 'burning heart'],
		char: '❤️‍🔥',
		 category: 'symbols'
  	 },
     smiling_face_with_tear: {
	  	keywords: ['smiling face with tear'],
		char: '🥲',
		 category: 'people' 
  	 },
	 disguised_face: {
		 keywords: ['disguised face', 'disguise'],
		 char: '🥸',
		 category: 'people'
	 },
	 pinched_fingers: {
		 keywords: ['pinch', 'finger', 'pinched fingers'],
		 char: '🤌',
		 category: 'people'
	 },
	 anatomical_heart: {
		 keywords: ['anatomy', 'heart', 'anatomical heart', 'human'],
		 char: '🫀',
		 category: 'symbols'
	 },
	 lungs: {
		 keywords: ['lungs', 'anatomy', 'human', 'lung'],
		 char: '🫁',
		 category: 'symbols'
	 },
	 ninja: {
		 keywords: ['ninja'],
		 char: '🥷',
		 category: 'people'
	 },
	 man_wearing_tuxedo: {
		 keywords: ['tuxedo man', 'man wearing tuxedo'],
		 char: '🤵‍♂️',
		 category: 'people'
	 }, 
	 woman_wearing_tuxedo: {
		 keywords: ['tuxedo woman', 'woman wearing tuxedo'],
		 char: '🤵‍♀️',
		 category: 'people'
	 },
	 man_with_veil: {
		 keywords: ['viel', 'man wearing veil', 'man with veil'],
		 char: '👰‍♂️',
		 category: 'people',
		 fitzapatrick_scale: '1'
	 },
	 woman_with_veil: {
		 keywords: ['viel', 'woman wearing veil', 'woman with veil'],
		 char: '👰‍♀️',
		 category: 'people'
	 },
	 woman_feeding_baby: {
		 keywords: ['woman', 'baby', 'woman feeding baby'],
		 char: '👩‍🍼',
		 category: 'people'
	 },
	 man_feeding_baby: {
		 keywords: ['man', 'baby', 'man feeding baby'],
		 char: '👨‍🍼',
		 category: 'people'
	 },	  
	 person_feeding_baby: {
		 keywords: ['person', 'baby', 'person feeding baby'],
		 char: '🧑‍🍼',
		 category: 'people'
	 },
	 mx_claus: {
		 keywords: ['santa', 'christmas', 'claus', 'mx claus', 'santa claus'],
		 char: '🧑‍🎄',
		 category: 'people'
	 },
	 hugging: {
		 keywords: ['hug', 'hugging'],
		 char: '🫂',
		 category: 'people'
	 },
	 black_Cat: {
		 keywords: ['cat', 'black', 'black cat'],
		 char: '🐈‍⬛',
		 category: 'Animals and Nature'
	 },
	 bison: {
		 keywords: ['bison'],
		 char: '🦬',
		 category: 'Animals and Nature'
	 },
	 mammoth: {
		 keywords: ['mammoth', 'mastodon'],
		 char: '🦣',
		 category: 'Animals and Nature'
	 }, 
	 beaver: {
		 keywords: ['beaver'],
		 char: '🦫',
		 category: 'Animals and Nature'
	 }, 
	 polar_bear: {
		 keywords: ['bear', 'snowy bear', 'polar bear'],
		 char: '🐻‍❄️',
		 category: 'Animals and Nature'
	 },
	 dodo: {
		 keywords: ['dodo'],
		 char: '🦤',
		 category: 'Animals and Nature'
	 },
	 Feather: {
		 keywords: ['feather'],
		 char: '🪶',
		 category: 'Animals and Nature'
	 },
	 seal: {
		 keywords: ['seal'],
		 char: '🦭',
		 category: 'Animals and Nature'
	 }, 
	 beetle: {
		 keywords: ['beetle'],
		 char: '🪲',
		 category: 'Animals and Nature'
	 },
	 cockroach: {
		 keywords: ['cockroach'],
		 char: '🪳',
		 category: 'Animals and Nature'
	 },
	 fly: {
		 keywords: ['fly'],
		 char: '🪰',
		 category: 'Animals and Nature'
	 },
	 worm: {
		 keywords: ['worm', 'earthworm'],
		 char: '🪱',
		 category: 'Animals and Nature'
	 },
	 potted_plant: {
		 keywords: ['plant', 'pot', 'potted plant'],
		 char: '🪴',
		 category: 'objects'
	 }, 
	 blueberries: {
		 keywords: ['berry', 'blueberries'],
		 char: '🫐',
		 category: 'Food and Drink'
	 }, 
	 olive: {
		 keywords: ['olive'],
		 char: '🫒',
		 category: 'Food and Drink'
	 },
	 bell_pepper: {
		 keywords: ['pepper', 'bell pepper'],
		 char: '🫑',
		 category: 'Food and Drink'
	 },
	 flatbread: {
		 keywords: ['flatbread', 'naan', 'arepa', 'gordita', 'pupusa', 'lavash', 'matzah', 'pita'],
		 char: '🫓',
		 category: 'Food and Drink'
	 },
	 tamale: {
		 keywords: ['tamale'],
		 char: '🫔',
		 category: 'Food and Drink'
	 }, 
	 fondue: {
		 keywords: ['fondue', 'cheese fondue'],
		 char: '🫕',
		 category: 'Food and Drink'
	 }, 
	 teapot: {
		 keywords: ['teapot'],
		 char: '🫖',
		 category: 'objects'
	 },
	 bubble_tea: {
		 keywords: ['bubble', 'tea', 'bubble tea'],
		 char: '🧋',
		 category: 'Food and Drink'
	 },
	 rock: {
		 keywords: ['rock', 'stone'],
		 char: '🪨',
		 category: 'Animals and Nature'
	 },
	 wood_log: {
		 keywords: ['wood', 'log'],
		 char: '🪵',
		 category: 'Animals and Nature'
	 }, 
	 hut: {
		 keywords: ['hut'],
		 char: '🛖',
		 category: 'Travel and Places'
	 }, 
	 pickup_truck: {
		 keywords: ['truck', 'pickup', 'pickup truck'],
		 char: '🛻',
		 category: 'Travel and Places'
	 },
	 roller_skates: {
		 keywords: ['skates', 'roller skates'],
		 char: '🛼',
		 category: 'activity'
	 },
	 magic_Wand: {
		 keywords: ['magic', 'wand', 'magic wand'],
		 char: '🪄',
		 category: 'objects'
	 },
	 piñata: {
		 keywords: ['pinata', 'piñata'],
		 char: '🪅',
		 category: 'objects'
	 }, 
	 nesting_dolls: {
		 keywords: ['doll', 'nesting', 'nesting dolls', 'russia'],
		 char: '🪆',
		 category: 'objects'
	 }, 
	 sewing_needle: {
		 keywords: ['needle', 'sew', 'sewing needle'],
		 char: '🪡',
		 category: 'objects'
	 },
	 knot: {
		 keywords: ['knot', 'loop'],
		 char: '🪢',
		 category: 'objects'
	 },
	 flip_flops: {
		 keywords: ['flip-flop', 'flip flop', 'thong sandal', 'flip-flop', 'flip flop', 'thong sandal'],
		 char: '🩴',
		 category: 'objects'
	 },
	 military_helmet: {
		 keywords: ['helmet', 'military helmet', 'army helmet'],
		 char: '🪖',
		 category: 'objects'
	 }, 
	 accordion: {
		 keywords: ['Accordion'],
		 char: '🪗',
		 category: 'objects'
	 }, 
	 long_drum: {
		 keywords: ['Long Drum'],
		 char: '🪘',
		 category: 'objects'
	 },
	 coin: {
		 keywords: ['Coin'],
		 char: '🪙',
		 category: 'objects'
	 },
	 boomerang: {
		 keywords: ['Boomerang'],
		 char: '🪃',
		 category: 'objects'
	 },
	 carpentry_saw: {
		 keywords: ['Saw', 'Carpentry Sae'],
		 char: '🪚',
		 category: 'objects'
	 }, 
	 screwdriver: {
		 keywords: ['Screwdriver'],
		 char: '🪛',
		 category: 'objects'
	 }, 
	 hook: {
		 keywords: ['Hook'],
		 char: '🪝',
		 category: 'objects'
	 }, 
	 ladder: {
		 keywords: ['Ladder'],
		 char: '🪜',
		 category: 'objects'
	 }, 
	 elevator: {
		 keywords: ['Elevator'],
		 char: '🛗',
		 category: 'objects'
	 },
	 mirror: {
		 keywords: ['Mirror'],
		 char: '🪞',
		 category: 'objects'
	 },
	 window: {
		 keywords: ['Window'],
		 char: '🪟',
		 category: 'objects'
	 },
	 plunger: {
		 keywords: ['Plunger'],
		 char: '🪠',
		 category: 'objects'
	 }, 
	 mouse_trap: {
		 keywords: ['Mouse Trap'],
		 char: '🪤',
		 category: 'objects'
	 }, 
	 bucket: {
		 keywords: ['Bucket'],
		 char: '🪣',
		 category: 'objects'
	 },
	 toothbrush: {
		 keywords: ['Toothbrush'],
		 char: '🪥',
		 category: 'objects'
	 },
	 headstone: {
		 keywords: ['Headstone'],
		 char: '🪦',
		 category: 'objects'
	 },
	 placard: {
		 keywords: ['Placard'],
		 char: '🪧',
		 category: 'objects'
	 }, 
	 transgender_symbol: {
		 keywords: ['Transgender Symbol'],
		 char: '⚧️',
		 category: 'symbols'
	 },
	 transgender: {
		 keywords: ['Transgender'],
		 char: '🏳️‍⚧️',
		 category: 'flags'
	 },	
	 face_in_clouds: {
		 keywords: ['face in clouds'],
		 char: 'a'
	 } 
},
  emoticons_database: 'emojiimages',
  setup: function(editor) {
	  //Shortcuts
	  editor.addShortcut(
      'meta+alt+s', 'Save File', function() {
      download(tinymce.get('main').getContent(), 'New Linum File.lnm', 'text/plain');
	  saveContent = tinymce.get('main').getContent({format: 'html'});	  
      });
	  editor.addShortcut('meta+o', 'Open File', function (_) {
          document.getElementById('up-1').click()
        document.getElementById('up-1').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-1').files[0])
            var res = reader.result;
            reader.onload = function(e) {
			var filename = document.getElementById('up-1').files[0].name.replace('.lnm', '') + ' - Linum'	
			document.getElementById('title').innerHTML = filename;	
            tinymce.get('main').setContent(reader.result)
            }
        })   
      })
	  editor.addShortcut('shift+alt+o', 'Import To Document', function (_) {
          document.getElementById('up-2').click()
        document.getElementById('up-2').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-2').files[0])
            var res = reader.result;
            reader.onload = function(e) {
            tinymce.get('main').setContent(tinymce.get('main').getContent() + reader.result)
            }
        })   
      })
	  editor.addShortcut('meta+alt+n', 'New Document', function(_) {
		  if(confirm('Are You Sure') === false) {
			  tinymce.get('main').resetContent()
		  }
		  })
	  editor.addShortcut('meta+alt+shift+c', 'Copy Formattting', 
		  function(_) {
			  formats[0] = tinymce.get('main').selection.getNode().style.color;
			  formats[1] = tinymce.get('main').selection.getNode().style.textAlign;
			  formats[2] = tinymce.get('main').selection.getNode().style.fontFamily;
			  formats[3] = tinymce.get('main').selection.getNode().style.fontSize;
			  console.log(formats)
		  })
	  editor.addShortcut('meta+alt+shift+v', 'Paste Formatting', function(_) {
		      tinymce.get('main').selection.setContent('<span><span style="color: ' + formats[0] + '; text-align: ' + formats[1] + '; font-family: ' + formats[2] + '; font-size:  ' + formats[3] + ';">' + tinymce.get('main').selection.getContent() + '</span></span>')
		  })
	  //Splitbuttons
      editor.ui.registry.addSplitButton('casechange', {
      icon: 'change-case',
      tooltip: 'Change Case',
      onAction: function () {
        tinymce.get('main').getBody().classList.toggle('capitalize')
      },
      onItemAction: function (api, value) {
        tinymce.get('main').getBody().style.textTransform = value
      },
      fetch: function (callback) {
      var items = [
            {
              type: 'choiceitem',
              text: 'lowercase',
              value: 'lowercase'
            },
            {
              type: 'choiceitem',
              text: 'UPPERCASE',
              value: 'uppercase'
            },
            {
              type: 'choiceitem',
              text: 'Each Word Capitalised',
              value: 'capitalize'
            },
            {
              type: 'choiceitem',
              text: 'Default',
              value: 'none'
            }
          ];
          callback(items);
        }
      });
	  // Version
      editor.ui.registry.addButton('version', {
          icon: 'help',
		  tooltip: 'help',
          onAction: function(_) {
              tinymce.activeEditor.windowManager.open({
  title: 'You Have Been Rickrolled', // The dialog's title - displayed in the dialog header
  body: {
    type: 'panel', // The root body type - a Panel or TabPanel
    items: [ // A list of panel components
      {
        type: 'htmlpanel', // A HTML panel component
        html: '<iframe id = "rick" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'
      }
    ]
  },
  buttons: [ // A list of footer buttons
    {
      type: 'submit',
      text: 'OK'
    }
  ]
});
          }
      })
	  //Important Buttons
	 editor.ui.registry.addButton('spellcheck', {
		 icon: 'spell-check',
		 tooltip: 'spellcheck',
		 onAction: function(_) {
			 tinymce.get('main').dom.toggleClass(tinymce.get('main').dom.select('*'), 'spell')
			 for(var i = 0; i < document.getElementsByClassName('spell').length; i++) {
				 document.getElementsByClassName('spell')[i].setAttribute('spellcheck', true)
			 }
		 }
	 }) 
	  
	 editor.ui.registry.addButton('operate', {
		 icon: 'plus',
		 tooltip: 'Perform Operations on Selected Text',
		 onAction: function() {
			 tinymce.get('main').selection.setContent(eval(tinymce.get('main').selection.getContent({format: 'text'})).toString())
		 }
	 }) 
	 editor.ui.registry.addButton('artwork', {
		 icon: 'quote',
		 tooltip: 'Invert Selected Text',
		 onAction: function(_) {
			 editor.execCommand(tinymce.get('main').selection.setContent('<p class="artwork">' + tinymce.get('main').selection.getContent() + '</p>'))
		 }
	 })
	  
	 editor.ui.registry.addButton('copyformat', {
		 text: 'Copy Formatting',
		 tooltip: 'Copy Formatting Of Selected Text',
		 onAction: function(_) {
			  formats[0] = tinymce.get('main').selection.getNode().style.color;
			  formats[1] = tinymce.get('main').selection.getNode().style.textAlign;
			  formats[2] = tinymce.get('main').selection.getNode().style.fontFamily;
			  formats[3] = tinymce.get('main').selection.getNode().style.fontSize;
			  console.log(formats)
		  }
	 })
	 editor.ui.registry.addButton('pasteformat', {
		 text: 'Paste Formatting',
		 tooltip: 'Paste Copied Formatting To Selected Text',
		 onAction: function(_) {
		      tinymce.get('main').selection.setContent('<span style="color: ' + formats[0] + '; text-align: ' + formats[1] + '; font-family: ' + formats[2] + '; font-size:  ' + formats[3] + ';">' + tinymce.get('main').selection.getContent() + '</span>')
		  }
	 }) 
	 editor.ui.registry.addButton('tts', {
		 icon: 'accessibility-check',
		 tooltip: 'Read The Current Document',
		 onAction: function(_) {
			 if(confirm('Read Aloud Currently Only Supports English. Are You Sure You Want To Continue') === true) {	 
			 var msg = new SpeechSynthesisUtterance();	
			 msg.text = editor.getContent({format: 'text'});
			 window.speechSynthesis.speak(msg);
			 }
		 }
	 })
      editor.ui.registry.addButton('download', {
      icon: 'save',
      tooltip: 'Save File',      
      onAction: function (_) {
        download(tinymce.get('main').getContent(), 'New Linum File.lnm')  
      }
    });  
    editor.ui.registry.addButton('upload', {
      icon: 'upload',
      tooltip: 'Open File',    
      onAction: function (_) {
          document.getElementById('up-1').click()
        document.getElementById('up-1').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-1').files[0])
            var res = reader.result;
            reader.onload = function(e) {
			var filename = document.getElementById('up-1').files[0].name.replace('.lnm', '') + ' - Linum'	
			document.getElementById('title').innerHTML = filename;	
            tinymce.get('main').setContent(reader.result)
            }
        })   
      }
    });
   editor.ui.registry.addButton('impcur',{
       icon: 'copy',
       tooltip: 'Import To Document',
       onAction: function (_) {
          document.getElementById('up-2').click()
        document.getElementById('up-2').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-2').files[0])
            var res = reader.result;
            reader.onload = function(e) {
            tinymce.get('main').setContent(tinymce.get('main').getContent() + reader.result)
            }
        })   
      }
   })
   editor.ui.registry.addButton('new', {
      tooltip: 'New Document',
      icon: 'new-document',
      onAction: function(_) {
		  if(confirm('Save Changes To Document') === false) {tinymce.get('main').resetContent()} else {
			  document.getElementById('up-1').click()
        document.getElementById('up-1').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-1').files[0])
            var res = reader.result;
            reader.onload = function(e) {
			var filename = document.getElementById('up-1').files[0].name.replace('.lnm', '') + ' - Linum'	
			document.getElementById('title').innerHTML = filename;	
            tinymce.get('main').setContent(reader.result)
            }
        })
		  }
      }  
   })
   //Menu Items
   	  editor.ui.registry.addMenuItem('copyformat', {
		  icon: 'format-painter',
		  shortcut: 'meta+shift+C',
		  text: 'Copy Formatting',
		  onAction: function(_) {
			  formats[0] = tinymce.get('main').selection.getNode().style.color;
			  formats[1] = tinymce.get('main').selection.getNode().style.textAlign;
			  formats[2] = tinymce.get('main').selection.getNode().style.fontFamily;
			  formats[3] = tinymce.get('main').selection.getNode().style.fontSize;
			  formats[4] = tinymce.get('main').selection.getNode().style.backgroundColor;
			  console.log(formats)
		  }
	  })
	  
	  editor.ui.registry.addMenuItem('pasteformat', {
		  icon: 'format-painter',
		  shortcut: 'meta+shift+V',
		  text: 'Paste Formatting',
		  onAction: function(_) {
			  editor.selection.setContent('<span style="color: ' + formats[0] + '; text-align: ' + formats[1] + '; font-family: ' + formats[2] + '; font-size:  ' + formats[3] + '; background-color: "' + formats[4] + ';>' + tinymce.get('main').selection.getContent() + '</span>')
			  console.log(formats)
		  }
	  })
   editor.ui.registry.addMenuItem('resetformat', {
	   text: 'Reset Formatting Data',
	   shortcut: 'meta+F+R',
	   icon: 'format-painter',
	   onAction: function(_) {
		   formats = []
		   console.log(formats)
	   }
   })
//Menu Items
   editor.ui.registry.addMenuItem('m-save', {
       text: 'Save File',
       icon: 'save',
	   shortcut: 'meta+alt+S',
       onAction: function (_) {
        download(tinymce.get('main').getContent(), 'New Linum File.lnm', 'text/html')  
      }
   })
   editor.ui.registry.addMenuItem('m-open', {
       text: 'Open File',
       icon: 'upload',
	   shortcut: 'meta+O',
       onAction: function (_) {
          document.getElementById('up-1').click()
        document.getElementById('up-1').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-1').files[0])
            var res = reader.result;
            reader.onload = function(e) {
			var filename = document.getElementById('up-1').files[0].name.replace('.lnm', '') + ' - Linum'	
			document.getElementById('title').innerHTML = filename;	
            tinymce.get('main').setContent(reader.result)
            }
        })   
      }
   })
  editor.ui.registry.addMenuItem('m-impcur', {
      text: 'Import To Document',
      icon: 'copy',
	  shortcut: 'shift+alt+O',
      onAction: function (_) {
          document.getElementById('up-2').click()
        document.getElementById('up-2').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-2').files[0])
            var res = reader.result;
            reader.onload = function(e) {
            tinymce.get('main').setContent(tinymce.get('main').getContent() + reader.result)
            }
        })   
      }
  })
  editor.ui.registry.addMenuItem('m-new', {
      text: 'New Document',
      icon: 'new-document',
	  shortcut: 'meta+N',
      onAction: function(_) {
		  if(confirm('Save Changes To Document') === false) {tinymce.get('main').resetContent()} else {
			  document.getElementById('up-1').click()
        document.getElementById('up-1').addEventListener('change', function() {
            var reader = new FileReader();
            reader.readAsText(document.getElementById('up-1').files[0])
            var res = reader.result;
            reader.onload = function(e) {
			var filename = document.getElementById('up-1').files[0].name.replace('.lnm', '') + ' - Linum'	
			document.getElementById('title').innerHTML = filename;	
            tinymce.get('main').setContent(reader.result)
            }
        })
		  }
      }
  })
tinymce.IconManager.add('svg-icons', {
    icons: {
        'accessibility-check': '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.75 6.99c-.14-.55-.69-.87-1.24-.75-2.38.53-5.03.76-7.51.76s-5.13-.23-7.51-.76c-.55-.12-1.1.2-1.24.75-.14.56.2 1.13.75 1.26 1.61.36 3.35.61 5 .75v12c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V9c1.65-.14 3.39-.39 4.99-.75.56-.13.9-.7.76-1.26zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>',
        'action-next': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 24 24" width="24" fill="currentColor"><path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"></path></svg>',
        'action-prev': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" width="24" fill="currentColor"><path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"></path></svg>',
        'align-center': '<svg width="16" height="16"><path d="M4 3h8a1 1 0 010 2H4a1 1 0 110-2zm0 8h8a1 1 0 010 2H4a1 1 0 010-2zM2 7h12a1 1 0 010 2H2a1 1 0 110-2z" fill-rule="evenodd"/></svg>',
        'align-justify': '<svg width="16" height="16"><path d="M2 3h12a1 1 0 010 2H2a1 1 0 110-2zm0 8h12a1 1 0 010 2H2a1 1 0 010-2zm0-4h12a1 1 0 010 2H2a1 1 0 110-2z" fill-rule="evenodd"/></svg>',
        'align-left': '<svg width="16" height="16"><path d="M2 3h6a1 1 0 110 2H2a1 1 0 110-2zm0 8h8a1 1 0 010 2H2a1 1 0 010-2zm0-4h12a1 1 0 010 2H2a1 1 0 110-2z" fill-rule="evenodd"/></svg>',
        'align-none': '<svg width="16" height="16"><path d="M2 3h12a1 1 0 010 2H2a1 1 0 110-2zm-.4 8h6.8c.3 0 .6.4.6 1s-.3 1-.6 1H1.6c-.3 0-.6-.4-.6-1s.3-1 .6-1zM2 7h12a1 1 0 010 2H2a1 1 0 110-2zm11.7 5.2l.7.7a1 1 0 11-1.5 1.5l-.7-.7-.7.7a1 1 0 01-1.4-1.5l.7-.7-.7-.7a1 1 0 011.4-1.4l.7.7.7-.7a1 1 0 011.5 1.4l-.7.7z" fill-rule="evenodd"/></svg>',
        'align-right': '<svg width="16" height="16"><path d="M8 3h6a1 1 0 010 2H8a1 1 0 110-2zm-2 8h8a1 1 0 010 2H6a1 1 0 010-2zM2 7h12a1 1 0 010 2H2a1 1 0 110-2z" fill-rule="evenodd"/></svg>',
        'arrow-left': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 8l2-2a1 1 0 10-1.4-1.5L5.8 7.3a1 1 0 000 1.4l2.8 2.9a1 1 0 101.4-1.4L8 8z"/></svg>',
        'arrow-right': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 8L5.7 6a1 1 0 111.4-1.5L10 7.3c.4.4.4 1 0 1.4l-2.8 2.9a1 1 0 11-1.4-1.4L7.9 8z"/></svg>',
        'bold': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 8.5v2.7h1.5c.8 0 1.5-.6 1.5-1.4 0-.7-.7-1.3-1.5-1.3H7zm3.5-1.3c1 .6 1.5 1.5 1.5 2.6 0 1.8-1.6 3.2-3.5 3.2H5V4c0-.6.4-1 1-1h2c1.7 0 3 1.2 3 2.7 0 .6-.2 1-.5 1.5zM7 4.8v1.8h1c.6 0 1-.4 1-.9s-.4-.9-1-.9H7z"/></svg>',
        'bookmark': '<svg width="16" height="16"><path d="M5.1 1H11C12 1 13 2 13 3.1v10.5c0 .8-.6 1.4-1.4 1.4-.4 0-.7-.1-1-.4l-2.1-1.9a.7.7 0 00-1 0l-2.1 2c-.6.5-1.5.4-2-.2-.3-.2-.4-.6-.4-.9V3.1C3 1.9 4 1 5.1 1z"/></svg>',
        'border-width': '<svg width="16" height="16"><path fill-rule="nonzero" d="M2 3h12c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H2a1 1 0 01-1-1V4c0-.6.4-1 1-1zm0 5h12a1 1 0 010 2H2a1 1 0 110-2zm-.5 4h13a.5.5 0 110 1h-13a.5.5 0 110-1z"/></svg>',
        'brightness': '<svg width="16" height="16"><path fill-rule="nonzero" d="M2 7h1a1 1 0 110 2H2a1 1 0 110-2zm11 0h1a1 1 0 010 2h-1a1 1 0 010-2zM9 2v1a1 1 0 11-2 0V2a1 1 0 112 0zm0 11v1a1 1 0 01-2 0v-1a1 1 0 012 0zM4.5 3l.7.8a1 1 0 01-1.4 1.4L3 4.5A1 1 0 014.5 3zm7.7 7.8l.7.7a1 1 0 01-1.4 1.4l-.7-.7a1 1 0 011.4-1.4zm-9.1.7l.7-.7a1 1 0 111.4 1.4l-.7.7A1 1 0 113 11.5zm7.7-7.7l.7-.7A1 1 0 0113 4.5l-.7.7a1 1 0 01-1.4-1.4zM8 11a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'browse': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 6v6h10V6H3zm0-4h10a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm1 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'cancel': '<svg width="16" height="16"><g fill-rule="evenodd"><path d="M9.6 8l2 2a1.1 1.1 0 11-1.6 1.7l-2-2-2 2A1.1 1.1 0 114.3 10l2-2-2-2A1.1 1.1 0 116 4.3l2 2 2-2A1.1 1.1 0 1111.7 6l-2 2z"/><path fill-rule="nonzero" d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/></g></svg>',
        'change-case': '<svg width="16" height="16"><path fill-rule="nonzero" d="M6.2 10.8H3.9L3.3 13H1.6l2.6-9.2a1 1 0 011.8 0L8.6 13H6.8l-.6-2.2zm-2-1.5H6L5.3 7l-.2-1.5-.3 1.6-.5 2.2zm5-2.9l1-.4a6 6 0 011.5-.1c.8 0 1.4.2 1.7.6.3.4.4 1 .4 1.7a23.6 23.6 0 010 2.6v1.1c0 .4 0 .8.2 1.1h-1.4l-.3-.8-.6.6c-.3.2-.7.3-1 .3-.6 0-1-.2-1.4-.6-.3-.3-.4-.8-.4-1.4 0-.9.3-1.5.8-1.8.6-.4 1.5-.5 2.5-.5L12 7.7c-.1-.3-.4-.4-.8-.4a4 4 0 00-1.6.4l-.5-1.3zm2 5.3c.3 0 .5 0 .7-.2l.3-.4V9.9h-.6l-.5.1c-.2 0-.3.2-.4.3l-.1.5c0 .3 0 .5.2.6 0 .2.2.3.4.3z"/></svg>',
        'character-count': '<svg width="16" height="16"><path fill-rule="nonzero" d="M1.9 9H1V8h2v4H1.8V9zm7.7.6V11H5.4V10L7 8.3l.8-.9L8 7l-.1-.3h-.4-.3l-.1.5v.3H5.5v-.3c0-.6.3-1.1.7-1.5A2 2 0 017.6 5c.4 0 .7 0 1 .2l.7.7.2 1c0 .3-.2.7-.4 1a8 8 0 01-.9 1.4v.1l-.3.2h1.7zm5.1 0c.2.2.3.5.3.8 0 .5-.2.8-.5 1.2-.3.3-.8.4-1.3.4-.4 0-.8-.1-1.2-.4-.3-.3-.4-.7-.5-1.2V10h1.3v.2l.2.4h.6l.1-.3c0-.1 0-.2-.2-.3l-.5-.2h-.3v-.8h.3c.2 0 .4 0 .5-.2.2 0 .2-.1.2-.3l-.1-.2-.3-.1H13l-.2.4V9h-1.3v-.2c0-.5.2-1 .5-1.2.4-.3.8-.5 1.2-.5.5 0 1 .2 1.3.5.3.3.5.7.5 1.1a1.4 1.4 0 01-.3 1z"/></svg>',
        'checklist-rtl': '<svg width="16" height="16"><g fill-rule="evenodd"><path fill-rule="nonzero" d="M2 3h7a1 1 0 110 2H2a1 1 0 110-2zm0 4h7a1 1 0 110 2H2a1 1 0 110-2zm0 4h7a1 1 0 010 2H2a1 1 0 010-2z"/><path d="M11.5 2.3a.5.5 0 00-.8-.2c-.2.2-.3.5-.1.8l1.8 2.8c.2.3.6.4.8.1l1.1-1.2c.2-.2.3-.5 0-.7a.5.5 0 00-.7 0l-.7.7-1.4-2.3zM11.5 6.3a.5.5 0 00-.8-.2c-.2.2-.3.5-.1.8l1.8 2.8c.2.3.6.4.8.1l1.1-1.2c.2-.2.3-.5 0-.7a.5.5 0 00-.7 0l-.7.7-1.4-2.3zM11.5 10.3a.5.5 0 00-.8-.2c-.2.2-.3.5-.1.8l1.8 2.8c.2.3.6.4.8.1l1.1-1.2c.2-.2.3-.5 0-.7a.5.5 0 00-.7 0l-.7.7-1.4-2.3z"/></g></svg>',
        'checklist': '<svg width="16" height="16"><g fill-rule="evenodd"><path fill-rule="nonzero" d="M7 3h7a1 1 0 010 2H7a1 1 0 110-2zm0 4h7a1 1 0 010 2H7a1 1 0 110-2zm0 4h7a1 1 0 010 2H7a1 1 0 010-2z"/><path d="M4 2.3c.2-.3.5-.4.8-.2.2.2.3.5.1.8L3.1 5.7c-.2.3-.6.4-.8.1L1.2 4.6a.6.6 0 010-.7c.2-.3.5-.3.7 0l.7.7L4 2.3zM4 6.3c.2-.3.5-.4.8-.2.2.2.3.5.1.8L3.1 9.7c-.2.3-.6.4-.8.1L1.2 8.6a.6.6 0 010-.7c.2-.3.5-.3.7 0l.7.7L4 6.3zM4 10.3c.2-.3.5-.4.8-.2.2.2.3.5.1.8l-1.8 2.8c-.2.3-.6.4-.8.1l-1.1-1.2a.6.6 0 010-.7c.2-.3.5-.3.7 0l.7.7L4 10.3z"/></g></svg>',
        'checkmark': '<svg width="16" height="16"><path d="M6.5 13a1 1 0 01-.7-.3L1.3 8c-.4-.4-.4-1.1 0-1.6a1 1 0 011.5 0l3.7 4 6.7-7a1 1 0 011.5 0c.4.4.4 1 0 1.5l-7.4 7.8a1 1 0 01-.8.3z" fill-rule="evenodd"/></svg>',
        'chevron-down': '<svg width="16" height="16"><path fill-rule="nonzero" d="M4.9 6.9l2.8 2.7c.2.2.5.2.7 0L11.2 7a.5.5 0 00-.4-.9H5.2a.5.5 0 00-.3.9z"/></svg>',
        'chevron-left': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9.1 4.9L6.4 7.7c-.2.2-.2.5 0 .7L9 11.2a.5.5 0 00.9-.4V5.2a.5.5 0 00-.9-.3z"/></svg>',
        'chevron-right': '<svg width="16" height="16"><path fill-rule="nonzero" d="M6.9 11.1l2.7-2.8c.2-.2.2-.5 0-.7L7 4.8a.5.5 0 00-.9.4v5.6a.5.5 0 00.9.3z"/></svg>',
        'chevron-up': '<svg width="16" height="16"><path fill-rule="nonzero" d="M11.1 9.1L8.3 6.4a.5.5 0 00-.7 0L4.8 9a.5.5 0 00.4.9h5.6a.5.5 0 00.3-.9z"/></svg>',
        'close': '<svg width="16" height="16"><path d="M9.6 8l4 4a1.1 1.1 0 11-1.6 1.7l-4-4-4 4A1.1 1.1 0 112.3 12l4-4-4-4A1.1 1.1 0 114 2.3l4 4 4-4A1.1 1.1 0 1113.7 4l-4 4z" fill-rule="evenodd"/></svg>',
        'code-sample': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 8L2.7 6a1 1 0 111.4-1.5L7 7.3c.4.4.4 1 0 1.4l-2.8 2.9a1 1 0 11-1.4-1.4L4.9 8zM8.4 10h4a1 1 0 110 2h-4a1 1 0 010-2z"/></svg>',
        'color-levels': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 10a3 3 0 006 0c0-1-1-3-3-5.7C6 7 5 9 5 10zm3 5a5 5 0 01-5-5c0-1.8 1.7-4.8 5-9 3.3 4.2 5 7.2 5 9a5 5 0 01-5 5z"/></svg>',
        'color-picker': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7.7 9l1.5-1.5-.7-.7L6.3 9h1.4zm-1 1H5.4l-1.5 1.5-.4 1 1-.4L6.7 10zM12 7.5A1 1 0 0110.5 9l-5 5-3.1 1A1 1 0 011 13.7l1-3.3 5-5a1 1 0 011.4-1.3l2.4-2.4a2.4 2.4 0 013.4 3.4l-2.4 2.4zm-2-2l.6.7L13 3.8a.5.5 0 10-.7-.7L9.8 5.5z"/></svg>',
        'color-swatch': '<svg width="16" height="16"><rect width="14" height="14" x="1" y="1" fill-rule="nonzero" rx="2"/></svg>',
        'comment-add': '<svg width="16" height="16"><g fill-rule="nonzero"><path d="M8.7 10H12c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4a1 1 0 00-1 1v5c0 .6.4 1 1 1h2v2l2.7-2zm-3 4.8A1 1 0 014 14l-.1-2a3 3 0 01-3-3V4a3 3 0 013-3h8a3 3 0 013 3v5a3 3 0 01-3 3H9.3l-3.7 2.8z"/><path d="M9 6h1a1 1 0 010 2H9v1a1 1 0 11-2 0V8H6a1 1 0 110-2h1V5a1 1 0 112 0v1z"/></g></svg>',
        'comment': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8.7 10H12c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4a1 1 0 00-1 1v5c0 .6.4 1 1 1h2v2l2.7-2zm-3 4.8A1 1 0 014 14l-.1-2a3 3 0 01-3-3V4a3 3 0 013-3h8a3 3 0 013 3v5a3 3 0 01-3 3H9.3l-3.7 2.8z"/></svg>',
        'contrast': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 13V3a5 5 0 100 10zm0 2A7 7 0 118 1a7 7 0 010 14z"/></svg>',
        'copy-column': '<svg width="16" height="16"><path d="M11 4c.5 0 1 .4 1 .9V14c0 .5-.4 1-.9 1H7a1 1 0 01-1-.9V5c0-.5.4-1 .9-1H11zM9 1a1 1 0 01.1 2H5v10c0 .5-.4 1-.9 1H4a1 1 0 01-1-.9V2c0-.5.4-1 .9-1H9zm1 5H8v7h2V6z"/></svg>',
        'copy-row': '<svg width="16" height="16"><path d="M14 7c.5 0 1 .4 1 .9V12c0 .5-.4 1-.9 1H5a1 1 0 01-1-.9V8c0-.5.4-1 .9-1H14zm-1 2H6v2h7V9zm0-5a1 1 0 01.1 2H3v4c0 .5-.4 1-.9 1H2a1 1 0 01-1-.9V5c0-.5.4-1 .9-1H13z"/></svg>',
        'copy': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10 4h1.6c.2 0 .5.1.7.3l2.4 2.5c.2.1.3.4.3.7V14c0 .6-.4 1-1 1H7a1 1 0 01-1-1v-2H2a1 1 0 01-1-1V2c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2zM8 4V3H3v7h3V5c0-.6.4-1 1-1h1zm0 2v7h5V7.9L11.1 6H8z"/></svg>',
        'crop': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 3h5a3 3 0 013 3v5h1a1 1 0 010 2h-1v1a1 1 0 11-2 0v-1H6a3 3 0 01-3-3V5H2a1 1 0 110-2h1V2a1 1 0 112 0v1zm0 2v5c0 .6.4 1 1 1h5V6c0-.6-.4-1-1-1H5z"/></svg>',
        'cut-column': '<svg width="16" height="16"><path d="M6.1 1.9a3 3 0 01.6 3.4L8 6.6l5.2-5.2a1 1 0 111.4 1.4l-1.3 1.3.7-.1c.5 0 1 .4 1 .9V14c0 .5-.4 1-.9 1H10a1 1 0 01-1-.9v-3.7l-1-1-1.3 1.3a3 3 0 11-1.4-1.4L6.6 8 5.3 6.7A3 3 0 116 2zM11 6v7h2V6h-2zm-7.7 5.3a1 1 0 101.4 1.4 1 1 0 00-1.4-1.4zm0-8a1 1 0 101.4 1.4 1 1 0 00-1.4-1.4z"/></svg>',
        'cut-row': '<svg width="16" height="16"><path d="M14 1c.5 0 1 .4 1 .9V6c0 .5-.4 1-.9 1h-3.7l-1 1 1.3 1.3a3 3 0 11-1.4 1.4L8 9.4l-1.3 1.3a3 3 0 11-1.4-1.4L6.6 8 1.4 2.8a1 1 0 011.4-1.4l1.3 1.3L4 2c0-.5.4-1 .9-1H14zM3.3 11.3a1 1 0 101.4 1.4 1 1 0 00-1.4-1.4zm8 0a1 1 0 101.4 1.4 1 1 0 00-1.4-1.4zM13 3H6v2h7V3z"/></svg>',
        'cut': '<svg width="16" height="16"><path fill-rule="nonzero" d="M6.6 8L1.4 2.8a1 1 0 011.4-1.4L8 6.6l5.2-5.2a1 1 0 111.4 1.4L9.4 8l1.3 1.3a3 3 0 11-1.4 1.4L8 9.4l-1.3 1.3a3 3 0 11-1.4-1.4L6.6 8zm-3.3 4.7a1 1 0 101.4-1.4 1 1 0 00-1.4 1.4zm9.4 0a1 1 0 10-1.4-1.4 1 1 0 001.4 1.4z"/></svg>',
        'new-document': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 3v10h7V4.9L10 3H5zM4 1h6.3c.3 0 .5 0 .7.3l2.7 2.4c.2.2.3.5.3.7V14c0 .6-.4 1-1 1H4a1 1 0 01-1-1V2c0-.6.4-1 1-1z"/></svg>',
        'drag': '<svg width="16" height="16"><path fill-rule="nonzero" d="M4 5a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm4-8a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm4-8a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z"/></svg>',
        'duplicate': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 7v6h6V7H3zm11 4h-2V9h1V8a1 1 0 012 0v2c0 .6-.4 1-1 1zm1-9v2a1 1 0 01-2 0V3h-2a1 1 0 010-2h3c.6 0 1 .4 1 1zM6 3v1H4V2c0-.6.4-1 1-1h2a1 1 0 110 2H6zM2 5h8c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1z"/></svg>',
        'edit-block': '<svg width="16" height="16"><path fill-rule="nonzero" d="M14.5 1.8c1 1 1 2.5 0 3.5l-8.8 8.8-3 .7a1 1 0 01-1.2-1.2l.6-3L11 1.8c1-1 2.5-1 3.5 0zm-3.9 3.1L4 11.6l-.2.9.9-.2 6.6-6.6-.7-.8zm.7-.7l.7.7 1-1a.5.5 0 00-.6-.7l-1.1 1z"/></svg>',
        'edit-image': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13 9.2V4c0-.6-.4-1-1-1H4a1 1 0 00-1 1v8c0 .6.4 1 1 1h.5l1.6-2.4a5 5 0 016.7-1.5l.2.1zm0 2.4l-1.2-.8a3 3 0 00-4 1L6.8 13H12c.6 0 1-.4 1-1v-.4zM1 12h2V9H1V7h2V4H1a3 3 0 013-3v2h3V1h5a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3zm5-4a2 2 0 110-4 2 2 0 010 4zM4 3a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zM2 13a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm0-2a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2z"/></svg>',
        'embed-page': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3.1 12.5c.2.3.5.5.9.5h2.1c.2-1.4.5-2.8 1-4H4.5a10 10 0 00-1.5 3.5zM3 9.8L4 8V8a13 13 0 016-5H4a1 1 0 00-1 1v5.8zm10-5c-.4.8-.9 2-1.2 3.2H13V4.8zM13 9h-1.4c-.3 1.2-.4 2.6-.5 4h.9c.6 0 1-.4 1-1V9zm-3 4c.1-1.4.3-2.8.6-4H8a16 16 0 00-1 4h3zM4 1h8a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3zm6.8 7c.4-1.9 1-3.4 1.8-4.5a9.2 9.2 0 00-4 4.5h2.2zM7.4 8a12 12 0 012.8-4 12 12 0 00-5 4h2.2z"/></svg>',
        'embed': '<svg width="16" height="16"><path fill-rule="nonzero" d="M4 2h8a3 3 0 013 3v6a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 013-3zm0 2a1 1 0 00-1 1v6c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H4zm5.5 4.8l-2 1.3A1 1 0 016 9.2V6.7A1 1 0 017.5 6l2 1.2a1 1 0 010 1.7z"/></svg>',
        'emoji': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 15A7 7 0 118 1a7 7 0 010 14zm0-2A5 5 0 108 3a5 5 0 000 10zm2-7c.6 0 1 .4 1 1v2a1 1 0 01-2 0V7c0-.6.4-1 1-1zM6 6c.6 0 1 .4 1 1v2a1 1 0 11-2 0V7c0-.6.4-1 1-1z"/></svg>',
        'export': '<svg width="16" height="16"><g fill-rule="nonzero"><path d="M9 1c.5 0 1 .4 1 .9V3a1 1 0 01-2 .1V3H4v10h4a1 1 0 012 0v1c0 .5-.4 1-.9 1H3a1 1 0 01-1-.9V2c0-.5.4-1 .9-1H9z"/><path d="M11.6 9H6a1 1 0 110-2h5.6l-1.1-1a1 1 0 111.4-1.5l2.8 2.8c.4.4.4 1 0 1.4L12 11.6a1 1 0 01-1.4-1.5l1.1-1z"/></g></svg>',
        'fill': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 5.7l-3.5 2A1 1 0 003.2 9l1.5 2.6c.2.5.8.7 1.3.4l3.5-2L7 5.7zm.7-2.8l4.5 7.8-5.2 3a3 3 0 01-4-1L1.3 10a3 3 0 011.1-4l5.2-3zM14 12c.6 0 1 .4 1 1v1a1 1 0 01-2 0v-1c0-.6.4-1 1-1zM6 9a1 1 0 110-2h6a3 3 0 013 3 1 1 0 11-2 0c0-.5-.5-1-1-1H6z"/></svg>',
        'flip-horizontally': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 1c.6 0 1 .4 1 1v12a1 1 0 01-2 0V2c0-.6.4-1 1-1zm5.3 10.3l-2.6-2.6a1 1 0 010-1.4l2.6-2.6a1 1 0 011.7.7v5.2a1 1 0 01-1.7.7zM1 10.6V5.4a1 1 0 011.7-.7l2.6 2.6c.4.4.4 1 0 1.4l-2.6 2.6a1 1 0 01-1.7-.7z"/></svg>',
        'flip-vertically': '<svg width="16" height="16"><path fill-rule="nonzero" d="M15 8c0 .6-.5 1-1 1H2a1 1 0 010-2h12c.6 0 1 .5 1 1zM4.7 13.3l2.6-2.6a1 1 0 011.4 0l2.6 2.6a1 1 0 01-.7 1.7H5.4a1 1 0 01-.7-1.7zM5.4 1h5.2a1 1 0 01.7 1.7L8.7 5.3a1 1 0 01-1.4 0L4.7 2.7A1 1 0 015.4 1z"/></svg>',
        'format-painter': '<svg width="16" height="16"><path fill-rule="nonzero" d="M4 5.1l3.6-3.5a2 2 0 012.9 0l4.2 4.2c.8.8.8 2 0 2.9l-3.5 3.5.7.7-1.4 1.4a2 2 0 01-2.9 0L6.2 13 4.1 15a2 2 0 11-2.8-2.8l2-2.1L2 8.7a2 2 0 010-2.9l1.4-1.4.7.7zm1.5 1.4l4.2 4.3 3.6-3.5-.7-.8L11.2 8a1 1 0 11-1.5-1.5l1.5-1.4-2.2-2-3.5 3.4zM2 14.3A1 1 0 103.4 13 1 1 0 002 14.3z"/></svg>',
        'format': '<svg width="16" height="16"><path d="M5 5a1 1 0 01-.1-2H11a1 1 0 01.1 2H9v7a1 1 0 01-2 .1V5H5z"/></svg>',
        'fullscreen': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10 13h1.6L8 9.4 4.4 13H6a1 1 0 010 2H2a1 1 0 01-1-1v-4a1 1 0 112 0v1.6L6.6 8 3 4.4V6a1 1 0 11-2 0V2c0-.6.4-1 1-1h4a1 1 0 110 2H4.4L8 6.6 11.6 3H10a1 1 0 110-2h4c.6 0 1 .4 1 1v4a1 1 0 01-2 0V4.4L9.4 8l3.6 3.6V10a1 1 0 012 0v4c0 .6-.4 1-1 1h-4a1 1 0 010-2z"/></svg>',
        'gamma': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 1h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm0 2v10h10V3H3zm7 3H7v6H5V6H4V4h8v3h-2V6z"/></svg>',
        'help': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 15A7 7 0 118 1a7 7 0 010 14zm0-2A5 5 0 108 3a5 5 0 000 10zm.6-.9a.9.9 0 110-1.7.9.9 0 010 1.7zM9 9.4a.9.9 0 11-1-1.3l.3-.3a1.3 1.3 0 00-1.6-2l-.3.3a.9.9 0 11-1-1.4l.3-.2a3 3 0 013.7 4.7l-.4.2z"/></svg>',
        'highlight-bg-color': '<svg width="16" height="16"><g fill-rule="nonzero"><path d="M12.5 1.8c1 1 1 2.5 0 3.5l-6.8 6.8-3 .7a1 1 0 01-1.2-1.2l.6-3L9 1.8c1-1 2.5-1 3.5 0zM8.6 4.9L4 9.6l-.2.9.9-.2 4.6-4.6-.7-.8zm.7-.7l.7.7 1-1a.5.5 0 00-.6-.7l-1.1 1z"/><path id="tox-icon-highlight-bg-color__color" d="M2 13h12a1 1 0 010 2H2a1 1 0 010-2z"/></g></svg>',
        'home': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 13v-2.1a3 3 0 016 0V13h2V6L8 3 3 6v7h2zm4 2v-4.1a1 1 0 00-2 0V15H3a2 2 0 01-2-2V6a2 2 0 011-1.8l5-3a2 2 0 012 0l5 3c.6.4 1 1 1 1.7V13a2 2 0 01-2 2H9z"/></svg>',
        'horizontal-rule': '<svg width="16" height="16"><path fill-rule="nonzero" d="M1 7h14v2H1z"/></svg>',
        'image-options': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 10a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zM3 10a2 2 0 110-4 2 2 0 010 4z"/></svg>',
        'image': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13 9.2V4c0-.6-.4-1-1-1H4a1 1 0 00-1 1v8c0 .6.4 1 1 1h.5l1.6-2.4a5 5 0 016.7-1.5l.2.1zm0 2.4l-1.2-.8a3 3 0 00-4 1L6.8 13H12c.6 0 1-.4 1-1v-.4zM4 1h8a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3zm2 7a2 2 0 110-4 2 2 0 010 4z"/></svg>',
        'indent': '<svg width="16" height="16"><path d="M2 3h12a1 1 0 010 2H2a1 1 0 110-2zm0 8h12a1 1 0 010 2H2a1 1 0 010-2zm6-4h6a1 1 0 010 2H8a1 1 0 110-2zM4.5 8.9l-2 1.2A1 1 0 011 9.2V6.8a1 1 0 011.5-.9l2 1.2a1 1 0 010 1.8z" fill-rule="evenodd"/></svg>',
        'info': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 11c.6 0 1-.4 1-1V8a1 1 0 10-2 0v3c0 .6.4 1 1 1zm0-8a1 1 0 100 2 1 1 0 000-2z"/></svg>',
        'insert-character': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9 15v-2.1A5 5 0 0012.5 8c0-2.8-2-5-4.5-5-2.4 0-4.5 2.2-4.5 5A5 5 0 007 13V15H2a1 1 0 010-2h1.4c-1.2-1.3-1.9-3-1.9-5 0-3.8 3-7 6.5-7 3.6 0 6.5 3.2 6.5 7 0 2-.7 3.7-2 5H14a1 1 0 010 2H9z"/></svg>',
        'insert-time': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9 7.6l1.1 1.1a1 1 0 11-1.4 1.4L7.3 8.7A1 1 0 017 8V5a1 1 0 112 0v2.6zM8 15A7 7 0 118 1a7 7 0 010 14zm0-2A5 5 0 108 3a5 5 0 000 10z"/></svg>',
        'invert': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 13h4c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H8v10zM4 1h8a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3z"/></svg>',
        'italic': '<svg width="16" height="16"><path d="M6.3 11l2-6H7a1 1 0 110-2h5a1 1 0 010 2h-1.7l-2 6H10a1 1 0 010 2H5a1 1 0 010-2h1.3z" fill-rule="evenodd"/></svg>',
        'line-height': '<svg width="16" height="16"><path d="M14 3a1 1 0 01.1 2H10a1 1 0 01-.1-2H14zm0 4a1 1 0 01.1 2H10a1 1 0 01-.1-2H14zm0 4a1 1 0 01.1 2H10a1 1 0 01-.1-2H14zM5 1.2l3.1 2.5A1 1 0 017 5.4l-.1-.1-.9-.7v6.8l.9-.7a1 1 0 011.3 1.5L5 14.9l-3.1-2.5A1 1 0 013 10.6l.1.1.9.7V4.6l-.9.7a1 1 0 01-1.3 0V5a1 1 0 010-1.3L5 1.1z"/></svg>',
        'line': '<svg width="16" height="16"><path fill-rule="nonzero" d="M2 13h12a1 1 0 010 2H2a1 1 0 010-2zM12.5 1.8c1 1 1 2.5 0 3.5l-6.8 6.8-3 .7a1 1 0 01-1.2-1.2l.6-3L9 1.8c1-1 2.5-1 3.5 0zM8.6 4.9L4 9.6l-.2.9.9-.2 4.6-4.6-.7-.8zm.7-.7l.7.7 1-1a.5.5 0 00-.6-.7l-1.1 1z"/></svg>',
        'link': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8.2 9.2a3 3 0 01-.6 3.5L6.2 14a3 3 0 01-4.3-4.3l1.4-1.4a3 3 0 013.5-.6l1-1a3 3 0 01.6-3.5L9.8 2a3 3 0 014.3 4.3l-1.4 1.4a3 3 0 01-3.5.6l-1 1zm-1.7 1.6a1 1 0 01-1.3-1.3 1 1 0 00-.4.3l-1.5 1.4a1 1 0 101.5 1.5l1.4-1.5.3-.4zm4.3-4.3l.4-.3 1.5-1.4a1 1 0 10-1.5-1.5L9.8 4.8a1 1 0 00-.3.4 1 1 0 011.3 1.3z"/></svg>',
        'lock': '<svg width="16" height="16"><path fill-rule="nonzero" d="M11 10H5v3h6v-3zM5 8V4a3 3 0 116 0v4a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3c0-1.1.9-2 2-2zm4 0V4a1 1 0 10-2 0v4h2z"/></svg>',
        'ltr': '<svg width="16" height="16"><path d="M10 4v9a1 1 0 01-2 0V8H7a3 3 0 110-6h7a1 1 0 010 2h-1v9a1 1 0 01-2 0V4h-1zm-7.3 7l-1.4 1.4a1 1 0 000 1.3c.4.4 1 .4 1.4 0l2-2c.4-.4.4-1 0-1.4l-2-2a1 1 0 00-1.4 0 1 1 0 000 1.3L2.7 11zM8 4H7a1 1 0 100 2h1V4z" fill-rule="evenodd"/></svg>',
        'more-drawer': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 10a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zM3 10a2 2 0 110-4 2 2 0 010 4z"/></svg>',
        'new-tab': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 4v8h10V7H8V4H3zm0-2h10a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V4c0-1.1.9-2 2-2z"/></svg>',
        'non-breaking': '<svg width="16" height="16"><path fill-rule="nonzero" d="M1 10a1 1 0 112 0v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a1 1 0 012 0v1a3 3 0 01-3 3H4a3 3 0 01-3-3v-1zm8-5h2a1 1 0 010 2H9v2a1 1 0 11-2 0V7H5a1 1 0 110-2h2V3a1 1 0 112 0v2z"/></svg>',
        'notice': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 15A7 7 0 118 1a7 7 0 010 14zM8 3a1 1 0 00-1 1v5a1 1 0 102 0V4c0-.6-.4-1-1-1zm0 10a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'ordered-list': '<svg width="16" height="16"><path d="M5 3h9a1 1 0 010 2H5a1 1 0 110-2zm0 8h9a1 1 0 010 2H5a1 1 0 010-2zm0-4h9a1 1 0 010 2H5a1 1 0 110-2zM1.4 2.8h.8V5h-.5V3.3h-.5l.2-.5zm.1 4.8h-.4c0-.3 0-.5.2-.6.2-.2.3-.3.6-.3l.3.1.3.3v.8l-.4.5-.2.2h.7V9H1v-.2l.7-.7.3-.4v-.2-.2h-.2-.1l-.2.3zm1 4.4l.1.4c0 .2 0 .3-.2.5l-.6.2c-.2 0-.4 0-.5-.2-.2-.1-.2-.3-.2-.6h.4l.1.3H2l.1-.2v-.2l-.5-.2v-.4H2v-.1l.1-.1v-.1h-.2-.1l-.1.1H1l.2-.4c.2-.2.3-.3.5-.3l.5.2.2.5v.2l-.3.2c.1 0 .2 0 .3.2z" fill-rule="evenodd"/></svg>',
        'orientation': '<svg width="16" height="16"><g fill-rule="nonzero"><path d="M3 9v4h7V9H3zM2 7h9c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H2a1 1 0 01-1-1V8c0-.6.4-1 1-1z"/><path d="M13 13V3H9v3H7V2c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1h-1z"/></g></svg>',
        'outdent': '<svg width="16" height="16"><path d="M2 3h12a1 1 0 010 2H2a1 1 0 110-2zm0 8h12a1 1 0 010 2H2a1 1 0 010-2zm6-4h6a1 1 0 010 2H8a1 1 0 110-2zm-6.5.1l2-1.2a1 1 0 011.6.9v2.4a1 1 0 01-1.6.9l-2-1.2a1 1 0 010-1.8z" fill-rule="evenodd"/></svg>',
        'page-break': '<svg width="16" height="16"><path fill-rule="nonzero" d="M2 7h2a1 1 0 110 2H2a1 1 0 110-2zm10 0h2a1 1 0 010 2h-2a1 1 0 010-2zM7 7h2a1 1 0 110 2H7a1 1 0 110-2zM1 2a1 1 0 112 0v2h10V2a1 1 0 012 0v2a2 2 0 01-2 2H3a2 2 0 01-2-2V2zm0 12v-2c0-1.1.9-2 2-2h10a2 2 0 012 2v2a1 1 0 01-2 0v-2H3v2a1 1 0 01-2 0z"/></svg>',
        'paragraph': '<svg width="16" height="16"><path d="M12 3a1 1 0 01.1 2H12v7a1 1 0 01-2 .1V5H9v7a1 1 0 01-2 .1V9a3 3 0 01-.2-6H12zM7 5a1 1 0 00-.1 2H7V5z"/></svg>',
        'paste-column-after': '<svg width="16" height="16"><path d="M4 15a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h1a2 2 0 012 2v2c.5 0 1 .4 1 .9V15c0 .5-.4 1-.9 1H10a1 1 0 01-1-.9V15H4zm9-7h-2v6h2V8zM5 4H4v9h5V7c0-.5.4-1 .9-1H12V4h-1c0 .6-.4 1-1 1H6a1 1 0 01-1-1z"/></svg>',
        'paste-column-before': '<svg width="16" height="16"><path d="M7 15c0 .5-.4 1-.9 1H2a1 1 0 01-1-.9V7c0-.5.4-1 .9-1H2V4c0-1.1.9-2 2-2h1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h1a2 2 0 012 2v9a2 2 0 01-2 2H7zM5 8H3v6h2V8zm2 5h5V4h-1c0 .6-.4 1-1 1H6a1 1 0 01-1-1H4v2h2c.5 0 1 .4 1 .9V13z"/></svg>',
        'paste-row-after': '<svg width="16" height="16"><path d="M4 15a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h1a2 2 0 012 2v6h1c.5 0 1 .4 1 .9V15c0 .5-.4 1-.9 1H6a1 1 0 01-1-.9V15H4zm10-3H7v2h7v-2zm-2-8h-1c0 .6-.4 1-1 1H6a1 1 0 01-1-1H4v9h1v-2c0-.5.4-1 .9-1H12V4z"/></svg>',
        'paste-row-before': '<svg width="16" height="16"><path d="M14 13a2 2 0 01-2 2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h4c.5 0 1 .4 1 .9V7c0 .5-.4 1-.9 1H14v5zm0-9H7v2h7V4zM6 8a1 1 0 01-1-.9V4H4v9h8V8H6z"/></svg>',
        'paste-text': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 2c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h1a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1zm0 2H4v9h8V4h-1c0 .6-.4 1-1 1H6a1 1 0 01-1-1zm4 4v3a1 1 0 01-2 0V8H6a1 1 0 110-2h4a1 1 0 010 2H9z"/></svg>',
        'paste': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 2c0-.6.4-1 1-1h4c.6 0 1 .4 1 1h1a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1zm0 2H4v9h8V4h-1c0 .6-.4 1-1 1H6a1 1 0 01-1-1zm1 2h4a1 1 0 010 2H6a1 1 0 110-2zm0 3h4a1 1 0 010 2H6a1 1 0 010-2z"/></svg>',
        'permanent-pen': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5.5 12.5L4 14H1v-1l2.5-2.5a2 2 0 010-3L10 1l1 1-6.3 6.3a1 1 0 000 1.4l1.6 1.6c.4.4 1 .4 1.4 0L13 6l1 1-5.6 5.6a2 2 0 01-2.8 0v-.1z"/></svg>',
        'plus': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9 7h4a1 1 0 010 2H9v4a1 1 0 01-2 0V9H3a1 1 0 110-2h4V3a1 1 0 112 0v4z"/></svg>',
        'preferences': '<svg width="16" height="16"><path fill-rule="nonzero" d="M15 6.7a1.5 1.5 0 000 2.6l-.5 1.7a1.5 1.5 0 00-1.7 1.4l.1.7-1.4 1.1c-.3-.2-.6-.3-1-.3-.6 0-1.2.5-1.4 1.1H6.8a1.5 1.5 0 00-2.3-.8L3 13.1A1.5 1.5 0 001.5 11L1 9.3a1.5 1.5 0 000-2.6L1.5 5h.2A1.5 1.5 0 003 3l1.5-1.1c.2.2.6.3 1 .3.6 0 1.2-.5 1.3-1L9.1 1a1.5 1.5 0 002.4.8l1.4 1A1.5 1.5 0 0014.5 5l.5 1.7zm-4.2-2.6A3.5 3.5 0 018 3a3.5 3.5 0 01-2.8 1C5 5.3 4.4 6 3.4 6.7a3.5 3.5 0 010 2.8c1 .5 1.6 1.4 1.8 2.5A3.5 3.5 0 018 13a3.5 3.5 0 012.8-1c.2-1.2.8-2 1.7-2.6a3.5 3.5 0 010-2.8c-.9-.5-1.5-1.4-1.7-2.5zM8 11a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'preview': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 8c0-.6.2-1.2.5-1.7L4 7c-.7.4-1 .8-1 1.1 0 .3.3.7 1 1l1.5.7A3 3 0 015 8zm6 0a3 3 0 01-.5 1.7L12 9c.7-.4 1-.8 1-1.1 0-.3-.3-.7-1-1l-1.5-.7c.3.5.5 1 .5 1.7zm-3 4c-3.9 0-7-2-7-4s3.1-4 7-4 7 2 7 4-3.1 4-7 4zm0-3a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'print': '<svg width="16" height="16"><path fill-rule="nonzero" d="M12 11h1V5h-3V3H6v2H3v6h1V7h8v4zm-8 2H3a2 2 0 01-2-2V4.7C1 3.7 1.8 3 2.7 3H4V1h8v2h1a2 2 0 012 2v6a2 2 0 01-2 2h-1v2H4v-2zm2-4v4h4V9H6z"/></svg>',
        'quote': '<svg width="16" height="16"><path fill-rule="nonzero" d="M1 9V8a5 5 0 015-5 1 1 0 110 2 3 3 0 00-2.2 1H4a3 3 0 11-3 3zm3 1a1 1 0 100-2 1 1 0 000 2zm5-1V8a5 5 0 015-5 1 1 0 010 2 3 3 0 00-2.2 1h.2a3 3 0 11-3 3zm3 1a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'redo': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10.7 4.6H6c-2.2 0-4 1.7-4 3.8V13c0 .5.4.9 1 .9s1-.4 1-1V8.5c0-1 .9-1.9 2-1.9h4.6L9.5 7.7A1 1 0 0010.9 9l2.8-2.8c.4-.4.4-1 0-1.4L11 2a1 1 0 00-1.4 1.5l1.2 1.1z"/></svg>',
        'reload': '<svg width="16" height="16"><path fill-rule="nonzero" d="M1 6.8a6.5 6.5 0 0111.7-3.2l.3-1.5a1 1 0 012 .3l-.7 4a1 1 0 01-1.2.8l-4-.7a1 1 0 11.4-2l1.6.3A4.5 4.5 0 003 7H3a1 1 0 11-2-.2zm14 2.4a6.5 6.5 0 01-11.7 3.4L3 14a1 1 0 01-2-.3l.7-4c.1-.5.6-.9 1.2-.8l4 .7a1 1 0 11-.4 2l-1.6-.3a4.5 4.5 0 008-2.4h.1a1 1 0 112 .2z"/></svg>',
        'remove-formatting': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6.5 -6.5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M6.326 2L3.95 9.309a1 1 0 1 1-1.902-.618L4.223 2H1a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H6.326zm3.33 6.243l.708.707a1 1 0 1 1-1.414 1.414l-.707-.707-.707.707A1 1 0 0 1 6.12 8.95l.707-.707-.707-.707A1 1 0 0 1 7.536 6.12l.707.707.707-.707a1 1 0 1 1 1.414 1.415l-.707.707z"></path></svg>',
        'remove': '<svg width="16" height="16"><path fill-rule="nonzero" d="M12.8 6l-.7 8c0 .6-.5 1-1 1H4.9a1 1 0 01-1-1l-.7-8H3a1 1 0 01-1-1V2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-.2zM12 4V3H4v1h8zM5.2 6l.6 7h4.4l.6-7H5.2zM8 7c.6 0 1 .4 1 1v3a1 1 0 01-2 0V8c0-.6.4-1 1-1z"/></svg>',
        'resize-handle': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13.5 12a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/></svg>',
        'resize': '<svg width="16" height="16"><path fill-rule="nonzero" d="M6 3H4.4l8.6 8.6V10a1 1 0 012 0v4c0 .6-.4 1-1 1h-4a1 1 0 010-2h1.6L3 4.4V6a1 1 0 11-2 0V2c0-.6.4-1 1-1h4a1 1 0 110 2z"/></svg>',
        'restore-draft': '<svg width="16" height="16"><path fill-rule="nonzero" d="M4 5h1a1 1 0 110 2H2a1 1 0 01-1-1V2a1 1 0 112 0v1.1A7 7 0 0115 8 7 7 0 011.1 9.1a1 1 0 012 0A5 5 0 104 5zm4 5a2 2 0 110-4 2 2 0 010 4z"/></svg>',
        'rotate-left': '<svg width="16" height="16"><path fill-rule="nonzero" d="M4.9 5.8l1.6-.3a1 1 0 11.3 2l-4 .7a1 1 0 01-1-.8l-.8-4a1 1 0 012-.3l.3 1.5A6.5 6.5 0 118.5 15a1 1 0 110-2 4.5 4.5 0 10-3.6-7.2z"/></svg>',
        'rotate-right': '<svg width="16" height="16"><path fill-rule="nonzero" d="M11.1 5.8A4.5 4.5 0 107.5 13a1 1 0 110 2 6.5 6.5 0 115.2-10.4l.3-1.5a1 1 0 012 .3l-.7 4a1 1 0 01-1.2.8l-4-.7a1 1 0 11.4-2l1.6.3z"/></svg>',
        'rtl': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 4v9a1 1 0 01-2 0V8H4a3 3 0 110-6h7a1 1 0 010 2h-1v9a1 1 0 01-2 0V4H7zm6.3 6.9l1.4 1.4a1 1 0 11-1.4 1.4l-2.1-2.1a1 1 0 010-1.4l2-2.2a1 1 0 011.5 1.5l-1.4 1.4zM5 4H4a1 1 0 100 2h1V4z"/></svg>',
        'save': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M2 0h11.22a2 2 0 0 1 1.345.52l2.78 2.527A2 2 0 0 1 18 4.527V16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v14h14V4.527L13.22 2H2zm4 8h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h6v-4H6zm7-9a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM5 3h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 3h3V5H6v1z"></path></svg>',
        'search': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10.4 11.8a6 6 0 111.4-1.4l3 2.9a1 1 0 01-1.5 1.4l-2.9-2.9zm-.6-2a4 4 0 10-5.6-5.6 4 4 0 005.6 5.6z"/></svg>',
        'select-all': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 14c0 .6-.4 1-1 1H2a1 1 0 01-1-1v-2c0-.6.4-1 1-1V5a1 1 0 01-1-1V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1h6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1v6c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-2a1 1 0 01-1-1H5zm0-2h6c0-.6.4-1 1-1V5a1 1 0 01-1-1H5c0 .6-.4 1-1 1v6c.6 0 1 .4 1 1z"/></svg>',
        'selected': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 15A7 7 0 118 1a7 7 0 010 14zm0-2A5 5 0 108 3a5 5 0 000 10zM4.5 8.7a1 1 0 011.4-1.4l1.4 1.4L10 5.8a1 1 0 111.4 1.5L8.7 10c-.4.4-.9 1-1.4.9-.5 0-1-.5-1.4-1L4.5 8.8z"/></svg>',
        'settings': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9 11a1 1 0 010 2v1a1 1 0 01-2 0v-1a1 1 0 010-2V2a1 1 0 112 0v9zm5-8a1 1 0 010 2v9a1 1 0 01-2 0V5a1 1 0 010-2V2a1 1 0 012 0v1zM4 7a1 1 0 110 2v5a1 1 0 01-2 0V9a1 1 0 110-2V2a1 1 0 112 0v5z"/></svg>',
        'sharpen': '<svg width="16" height="16"><path fill-rule="nonzero" d="M6 11l-1 1.5 1.3-.1.6-.9-.8-.5zm1.2-1.7l.8.6 4.3-6.1a.5.5 0 10-.8-.6L7.2 9.3zm6.2-7.9c1.1.8 1.4 2.4.6 3.5l-5.5 7.8-1.1 1.6-6.4.4L9.9 2a2.5 2.5 0 013.5-.6z"/></svg>',
        'sourcecode': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3.5 8l2.2 2.2c.4.4.4 1 0 1.5a1 1 0 01-1.5 0l-2.9-3a1 1 0 010-1.4l3-3a1 1 0 011.4 0c.4.4.4 1 0 1.5L3.5 8zM9 2c.6.2 1 .7.9 1.2L8 13.1a1 1 0 11-2-.3L8 2.9c0-.5.6-.9 1.1-.8zm3.5 6l-2.2-2.2a1 1 0 010-1.5 1 1 0 011.5 0l2.9 3c.4.4.4 1 0 1.4l-3 3a1 1 0 01-1.4 0 1 1 0 010-1.5L12.5 8z"/></svg>',
        'spell-check': '<svg width="16" height="16"><g fill-rule="evenodd"><path d="M6.5 7h-3L3 8.4c-.2.5-.8.7-1.3.6-.5-.2-.8-.7-.7-1.2l2.1-5.6c.3-.9 1.5-1.4 2.5-1.1.6.2 1.1.6 1.3 1.1l2 5.6c.2.5 0 1-.6 1.2-.5.1-1-.1-1.3-.6L6.5 7zm-.7-2L5 2.8 4.2 5h1.6z"/><path fill-rule="nonzero" d="M8.3 12.6l5-5A1 1 0 0114.7 9l-5.6 5.7a1 1 0 01-1.5 0l-2.8-2.8a1 1 0 011.4-1.4l2.1 2z"/></g></svg>',
        'strike-through': '<svg width="16" height="16"><path fill-rule="nonzero" d="M6.7 7H4.2A3 3 0 014 6v-.5C4 3.5 5.6 2 7.5 2H9a3 3 0 013 3 1 1 0 01-2 0c0-.6-.4-1-1-1H7.5C6.7 4 6 4.7 6 5.5V6c0 .4.3.8.7 1zm5.1 2l.2 1v.5c0 2-1.6 3.6-3.5 3.6H7a3 3 0 01-3-3V11a1 1 0 012 0c0 .6.4 1 1 1h1.5c.8 0 1.5-.6 1.5-1.5V10a1 1 0 00-.7-1h2.5zM3.5 7.5h9a.5.5 0 110 1h-9a.5.5 0 110-1z"/></svg>',
        'subscript': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 5.5l2.8 2.8c.4.4.4 1 0 1.4a1 1 0 01-1.4 0L5.5 7 2.7 9.7a1 1 0 01-1.4 0 1 1 0 010-1.4L4 5.5 1.3 2.7a1 1 0 010-1.4 1 1 0 011.4 0L5.5 4l2.9-2.8a1 1 0 011.4 0c.4.4.4 1 0 1.4L7 5.5zm8 7.9V15h-5v-1l.2-.3 1.8-1.9 1-1v-.6-.3l-.4-.1-.3.1c-.2.2-.2.3-.2.6v.3h-1.9v-.4c0-.7.3-1.3.8-1.7.4-.5 1-.7 1.7-.7.4 0 .8 0 1.1.3.4.2.6.4.8.8.2.3.4.7.4 1 0 .5-.3.9-.5 1.3-.2.5-.5 1-1 1.6l-.2.1-.3.3h2z"/></svg>',
        'superscript': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10 7l.1-.3 1.8-1.9 1-1v-.6V3l-.4-.1-.3.1-.2.6v.3H10v-.4c.1-.7.3-1.3.8-1.7.4-.5 1-.7 1.7-.7.4 0 .8 0 1.1.3.4.2.6.4.8.8.2.3.3.7.3 1 0 .5-.2.9-.4 1.3l-1 1.6-.2.1-.3.3h2V8H10V7c0 .2-.1.5-.3.7L7 10.5l2.8 2.8a1 1 0 01-1.4 1.4L5.5 12l-2.8 2.8a1 1 0 11-1.4-1.4L4 10.5 1.3 7.7a1 1 0 111.4-1.4L5.5 9l2.8-2.8A1 1 0 0110 7z"/></svg>',
        'table-cell-properties': '<svg width="16" height="16"><g fill-rule="nonzero"><path d="M9 11H7v2h2v-2zm2 0v2h2v-2h-2zM7 1v8h8v4a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h4zM5 3H3v2h2V3zM3 7v2h2V7H3zm0 4v2h2v-2H3z"/><path d="M10.5 8a3 3 0 01-1-.4V7h-.8a3 3 0 01-.5-.8l.4-.6L8 5c0-.3 0-.7.2-1l.7-.2-.2-.7.8-.7.7.3.3-.7a3 3 0 011 0l.3.7.7-.3.8.7-.2.7.7.2.2 1-.6.5.4.6a3 3 0 01-.5.9h-.7l-.1.6a3 3 0 01-1 .4l-.5-.5-.5.5zm.5-2a1 1 0 100-2 1 1 0 000 2z"/></g></svg>',
        'table-cell-select-all': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 7h4V3H3v4zm0 2v4h4V9H3zm10-2V3H9v4h4zm0 2H9v4h4V9zM3 1h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2z"/></svg>',
        'table-cell-select-inner': '<svg width="16" height="16"><g fill-rule="nonzero"><path fill-opacity=".3" d="M3 1h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm0 2v10h10V3H3z"/><path d="M9 7h4v2H9v4H7V9H3V7h4V3h2z"/></g></svg>',
        'table-delete-column': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 2c.6 0 1 .4 1 1v10a1 1 0 01-2 0V3c0-.6.4-1 1-1zm10 0c.6 0 1 .4 1 1v10a1 1 0 01-2 0V3c0-.6.4-1 1-1zM9.4 8l1.4 1.4a1 1 0 11-1.4 1.4L8 9.4l-1.4 1.4a1 1 0 11-1.4-1.4L6.6 8 5.2 6.6a1 1 0 111.4-1.4L8 6.6l1.4-1.4a1 1 0 111.4 1.4L9.4 8z"/></svg>',
        'table-delete-row': '<svg width="16" height="16"><path fill-rule="nonzero" d="M14 3c0 .6-.4 1-1 1H3a1 1 0 110-2h10c.6 0 1 .4 1 1zm0 10c0 .6-.4 1-1 1H3a1 1 0 010-2h10c.6 0 1 .4 1 1zM8 9.4l-1.4 1.4a1 1 0 11-1.4-1.4L6.6 8 5.2 6.6a1 1 0 111.4-1.4L8 6.6l1.4-1.4a1 1 0 111.4 1.4L9.4 8l1.4 1.4a1 1 0 11-1.4 1.4L8 9.4z"/></svg>',
        'table-delete-table': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 1h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm0 4v8h10V5H3zm5 5.4l-1.4 1.4a1 1 0 01-1.4-1.4L6.6 9 5.2 7.6a1 1 0 111.4-1.4L8 7.6l1.4-1.4a1 1 0 111.4 1.4L9.4 9l1.4 1.4a1 1 0 11-1.4 1.4L8 10.4z"/></svg>',
        'table-insert-column-after': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 13h6v-1a1 1 0 012 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h10a2 2 0 012 2v1a1 1 0 01-2 0V3H7v10zm-2 0v-2H3v2h2zM3 9h2V7H3v2zm0-4h2V3H3v2zm9 2h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V9H9a1 1 0 110-2h1V6a1 1 0 012 0v1z"/></svg>',
        'table-insert-column-before': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9 13V3H3v1a1 1 0 11-2 0V3c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a1 1 0 012 0v1h6zm2 0h2v-2h-2v2zm2-4V7h-2v2h2zm0-4V3h-2v2h2zM4 7V6a1 1 0 112 0v1h1a1 1 0 110 2H6v1a1 1 0 01-2 0V9H3a1 1 0 110-2h1z"/></svg>',
        'table-insert-row-above': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13 9V3h-1a1 1 0 010-2h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h1a1 1 0 110 2H3v6h10zm0 2h-2v2h2v-2zm-4 2v-2H7v2h2zm-4 0v-2H3v2h2zm2-9V3a1 1 0 112 0v1h1a1 1 0 010 2H9v1a1 1 0 11-2 0V6H6a1 1 0 110-2h1z"/></svg>',
        'table-insert-row-after': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 7v6h1a1 1 0 010 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-1a1 1 0 010-2h1V7H3zm0-2h2V3H3v2zm4-2v2h2V3H7zm4 0v2h2V3h-2zm-2 9v1a1 1 0 01-2 0v-1H6a1 1 0 010-2h1V9a1 1 0 112 0v1h1a1 1 0 010 2H9z"/></svg>',
        'table-left-header': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 3v10h8V3H5zM3 1h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2z"/></svg>',
        'table-merge-cells': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5 3H3v2h2V3zm2 0v2h2V3h2v2h2V3H7zm6 4H7v6h6V7zm-8 6v-2H3v2h2zM3 9h2V7H3v2zm0-8h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2z"/></svg>',
        'table-row-properties': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13 10h-1V8h1V5H3v3h1v2H3v3h10v-3zM3 1h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm4.4 11a3 3 0 01-1-.3v-.8h-.8l-.5-.8.4-.7-.6-.4c0-.4 0-.7.2-1l.7-.3-.2-.7.8-.7.7.3.4-.7a3.1 3.1 0 011 0l.4.7.7-.3.8.7-.2.7.7.2.2 1-.6.5.4.7-.5.9h-.8v.7a3 3 0 01-1 .4l-.6-.6-.6.6zm.6-2a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'table-split-cells': '<svg width="16" height="16"><path fill-rule="nonzero" d="M15 7H7v8H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h10a2 2 0 012 2v4zM5 3H3v2h2V3zm2 0v2h2V3h2v2h2V3H7zM5 13v-2H3v2h2zM3 9h2V7H3v2zm9.5 2.1l1.4 1.4a1 1 0 01-1.4 1.4l-1.4-1.4L9.7 14a1 1 0 11-1.4-1.4l1.4-1.4-1.4-1.4a1 1 0 011.4-1.4l1.4 1.4 1.4-1.4A1 1 0 0114 9.7l-1.4 1.4z"/></svg>',
        'table-top-header': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13 5H3v8h10V5zm2-2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h10a2 2 0 012 2z"/></svg>',
        'table': '<svg width="16" height="16"><path fill-rule="nonzero" d="M3 5v8h10V5H3zm0-4h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2z"/></svg>',
        'template': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 13h5c.6 0 1-.4 1-1V7H7v6zm-2 0V7H3v5c0 .6.4 1 1 1h1zm8-8V4c0-.6-.4-1-1-1H4a1 1 0 00-1 1v1h10zM4 1h8a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3z"/></svg>',
        'temporary-placeholder': '<svg width="16" height="16"><path fill-rule="nonzero" d="M11.9 7A4 4 0 004 7H12zM9 9v3a1 1 0 002 0 1 1 0 012 0 3 3 0 01-6 0V9H2V8a6 6 0 015-6 1 1 0 112 0 6 6 0 015 7H9z"/></svg>',
        'text-color': '<svg width="16" height="16"><g fill-rule="evenodd"><path d="M9.5 9l.5 1.4c.2.5.8.7 1.3.6.5-.2.8-.7.7-1.2L9.9 4.2c-.2-.5-.7-1-1.3-1.1-1-.3-2.2.2-2.5 1.1l-2 5.6c-.2.5 0 1 .6 1.2.5.1 1-.1 1.3-.6L6.5 9h3zm-.7-2H7.2L8 4.8 8.8 7z"/><path id="tox-icon-text-color__color" fill-rule="nonzero" d="M2 13h12a1 1 0 010 2H2a1 1 0 010-2z"/></g></svg>',
        'toc': '<svg width="16" height="16"><path d="M5 3h9a1 1 0 010 2H5a1 1 0 110-2zm0 8h9a1 1 0 010 2H5a1 1 0 010-2zm3-4h6a1 1 0 010 2H8a1 1 0 110-2zM2 3a1 1 0 110 2 1 1 0 010-2zm0 8a1 1 0 110 2 1 1 0 010-2zm3-4a1 1 0 110 2 1 1 0 010-2z" fill-rule="evenodd"/></svg>',
        'translate': '<svg width="16" height="16"><path d="M12.5 13h-3L9 14.4c-.2.5-.8.7-1.3.6-.5-.2-.8-.7-.7-1.2l2.1-5.6c.3-.9 1.5-1.4 2.5-1.1.6.2 1.1.6 1.3 1.1l2 5.6c.2.5 0 1-.6 1.2-.5.1-1-.1-1.3-.6l-.5-1.4zm-.7-2L11 8.8l-.8 2.2h1.6zM2 1h5a1 1 0 110 2H2a1 1 0 110-2zm0 5a1 1 0 110-2h5c.2 0 .5 0 .8.4L8 5a5 5 0 01-5 5H2a1 1 0 110-2h1a3 3 0 002.8-2H2z" fill-rule="evenodd"/></svg>',
        'underline': '<svg width="16" height="16"><path d="M4.5 13h7a.5.5 0 110 1h-7a.5.5 0 110-1zM10 5a1 1 0 110-2h2a1 1 0 010 2v3a4 4 0 11-8 0V5a1 1 0 110-2h2a1 1 0 110 2v3a2 2 0 104 0V5z" fill-rule="evenodd"/></svg>',
        'undo': '<svg width="16" height="16"><path fill-rule="nonzero" d="M5.3 4.6H10c2.2 0 4 1.7 4 3.8V13c0 .5-.4.9-1 .9s-1-.4-1-1V8.5c0-1-.9-1.9-2-1.9H5.4l1.1 1.2A1 1 0 015.1 9L2.3 6.3a1 1 0 010-1.4L5 2a1 1 0 011.4 1.5L5.3 4.6z"/></svg>',
        'unlink': '<svg width="16" height="16"><path fill-rule="nonzero" d="M7 7.8l1.5 1.4-.1.1a3 3 0 01-.6 3.4l-1.4 1.4A3 3 0 012 10l1.4-1.4A3 3 0 017 7.9l.2-.1zm.8-.7l.1-.1a3 3 0 01.6-3.5l1.4-1.4a3 3 0 014.2 4.3l-1.4 1.4a3 3 0 01-3.4.6h-.1L7.8 7.2zm-1.2 3.8a1 1 0 01-1.2-1.3 1 1 0 00-.5.3l-1.4 1.4A1 1 0 005 12.7l1.5-1.4.2-.4zM11 6.6l.4-.2L12.7 5a1 1 0 10-1.4-1.5L10 5a1 1 0 00-.3.4A1 1 0 0111 6.6z"/></svg>',
        'unlock': '<svg width="16" height="16"><path fill-rule="nonzero" d="M11 10H5v3h6v-3zM7 4a1 1 0 11-2 0 3 3 0 116 0v4a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3c0-1.1.9-2 2-2h2V4zm2 4V4a1 1 0 10-2 0v4h2z"/></svg>',
        'unordered-list': '<svg width="16" height="16"><path d="M5 3h9a1 1 0 010 2H5a1 1 0 110-2zm0 8h9a1 1 0 010 2H5a1 1 0 010-2zm0-4h9a1 1 0 010 2H5a1 1 0 110-2zM2 3a1 1 0 110 2 1 1 0 010-2zm0 8a1 1 0 110 2 1 1 0 010-2zm0-4a1 1 0 110 2 1 1 0 010-2z" fill-rule="evenodd"/></svg>',
        'unselected': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 13A5 5 0 108 3a5 5 0 000 10zm0 2A7 7 0 118 1a7 7 0 010 14z"/></svg>',
        'upload': '<svg width="16" height="16"><path fill-rule="nonzero" d="M9 4.4v5.7a1 1 0 01-2 0V4.4L5.9 5.5a1 1 0 01-1.4-1.4l2.8-2.8a1 1 0 011.4 0L11.5 4a1 1 0 11-1.4 1.4L9 4.5zM2 13h12a1 1 0 010 2H2a1 1 0 010-2z"/></svg>',
        'user': '<svg width="16" height="16"><path fill-rule="nonzero" d="M8 1a4 4 0 014 4v2a4 4 0 11-8 0V5a4 4 0 014-4zm0 2a2 2 0 00-2 2v2a2 2 0 104 0V5a2 2 0 00-2-2zM4 14a1 1 0 01-2 0 3 3 0 013-3 1 1 0 010 2 1 1 0 00-1 1zm8 0c0-.6-.4-1-1-1a1 1 0 010-2 3 3 0 013 3 1 1 0 01-2 0z"/></svg>',
        'visualblocks': '<svg width="16" height="16"><path fill-rule="nonzero" d="M15 14.3a.7.7 0 110 1.4h-1a.7.7 0 110-1.4h1zm-3.5 0a.7.7 0 110 1.4h-1a.7.7 0 110-1.4h1zm-3.5 0a.7.7 0 110 1.4H7a.7.7 0 110-1.4h1zm-3.5 0a.7.7 0 110 1.4h-1a.7.7 0 110-1.4h1zm-3.5-1c.4 0 .8.3.8.7v1a.7.7 0 11-1.6 0v-1c0-.4.4-.8.8-.8zm14-2.6c.4 0 .8.4.8.8v1a.7.7 0 11-1.6 0v-1c0-.4.4-.8.8-.8zM11 3a1 1 0 01.1 2H11v7a1 1 0 01-2 .1V5H8v7a1 1 0 01-2 .1V9a3 3 0 01-.2-6H11zM1 9.8c.4 0 .8.3.8.7v1a.7.7 0 11-1.6 0v-1c0-.4.4-.8.8-.8zm14-2.6c.4 0 .8.4.8.8v1a.7.7 0 11-1.6 0V8c0-.4.4-.8.8-.8zm-14-1c.4 0 .8.4.8.8v1A.8.8 0 01.1 8V7c0-.4.4-.8.8-.8zM6 5a1 1 0 00-.1 2H6V5zm9-1.3c.4 0 .8.4.8.8v1a.7.7 0 11-1.6 0v-1c0-.4.4-.8.8-.8zm-14-1c.4 0 .8.4.8.8v1a.8.8 0 01-1.6 0v-1c0-.4.4-.8.8-.8zM15 .3c.4 0 .8.4.8.8v1a.7.7 0 11-1.6 0V1c0-.4.4-.8.8-.8zM2 .3a.8.8 0 010 1.6H1A.8.8 0 011 .1h1zm3.5 0a.8.8 0 010 1.6h-1a.8.8 0 010-1.6h1zM9 .3a.8.8 0 010 1.6H8A.8.8 0 018 .1h1zm3.5 0a.7.7 0 110 1.6h-1a.7.7 0 110-1.6h1z"/></svg>',
        'visualchars': '<svg width="16" height="16"><path fill-rule="nonzero" d="M13 3v11a1 1 0 01-2 0V3H9v11a1 1 0 01-2 0V9H5a4 4 0 110-8h9a1 1 0 010 2h-1zM7 7V3H5a2 2 0 100 4h2z"/></svg>',
        'warning': '<svg width="16" height="16"><path fill-rule="nonzero" d="M1.3 11l4-7.5a3.1 3.1 0 015.4 0l4 7.4c.7 1.4.1 3.1-1.3 3.8L12 15H4c-1.6 0-3-1.3-3-2.8 0-.4.1-.9.3-1.2zM8 4a1 1 0 00-1 1v4a1 1 0 102 0V5c0-.6-.4-1-1-1zm0 9a1 1 0 100-2 1 1 0 000 2z"/></svg>',
        'zoom-in': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10.4 11.8a6 6 0 111.4-1.4l3 2.9a1 1 0 01-1.5 1.4l-2.9-2.9zm-.6-2a4 4 0 10-5.6-5.6 4 4 0 005.6 5.6zM8 6h1a1 1 0 110 2H8v1a1 1 0 11-2 0V8H5a1 1 0 110-2h1V5a1 1 0 012 0v1z"/></svg>',
        'zoom-out': '<svg width="16" height="16"><path fill-rule="nonzero" d="M10.4 11.8a6 6 0 111.4-1.4l3 2.9a1 1 0 01-1.5 1.4l-2.9-2.9zm-.6-2a4 4 0 10-5.6-5.6 4 4 0 005.6 5.6zM5 6h4a1 1 0 110 2H5a1 1 0 110-2z"/></svg>',
    }
})	  
  }
}
tinymce.init(inits);

//Name Changed From Wordy To WordKit on 8-8-2021(8 Aug 2021) - 8/8/2021     --13:29
//Timing Before Speech Competition - 2:24:99 --- M:S:MS. I told the one By Swami Vivekananda