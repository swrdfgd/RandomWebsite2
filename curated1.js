daftarCurated1 = [
"cyclingreview.net",
"parhopak.com",
"sanavit.de",
"rotaryclubdemallorca.org",
"bioyungetir.com",
"gratedexpectations.com",
"nabeehapp.com",
"zonaemergente.com",
"atv.pripolar.ru",
"gloria-jeans.ru",
"industrial.sherwin-williams.com",
"forum.rossetimr.ru",
"maxpiler.com",
"schadenetvenlo.nl",
"stonexpo.ru",
"scrabbleplayers.org",
"politicasiputere.ro",
"innhanhthuduc.com",
"extremeindian.com",
"allo-entreprise-couverture.fr",
"connessiallopera.it",
"naturawit.cz",
"en.bells.fi",
["https://en.bells.fi/product/"+Math.ceil(Math.random()*95),"en.bells.fi"],
"calhountech.com",
"archives.hungaricana.hu",
"store.youjitaiwan.com",
'giga.de',
'kasubahleading.com',
'alliance-maladies-rares.org',
'axperience.ch',
'en.utrace.me',
'hartmannsdorf.info',
];

function getRandomDate(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const randomTime = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    
    const year = randomTime.getFullYear();
    const month = ('0' + (randomTime.getMonth() + 1)).slice(-2); // Add leading zero and ensure month is 2 digits
    const day = ('0' + randomTime.getDate()).slice(-2); // Add leading zero and ensure day is 2 digits
    
    return `${year}${month}${day}`;
}

const startDate = '2003-01-21';
const endDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
const randomDate = getRandomDate(startDate, endDate);

daftarCurated1.push(['https://www.scrabbleplayers.org/cgi-bin/wotd.pl?date=' + randomDate,'NASPA Word of the Day']);

daftarSitus = daftarSitus.concat(daftarCurated1);
