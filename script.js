const teamFlags = {
    "México": "mx.png",
    "Estados Unidos": "us.png",
    "Canadá": "ca.png",
    "Inglaterra": "gb-eng.png",
    "Francia": "fr.png",
    "Croacia": "hr.png",
    "Noruega": "no.png",
    "Portugal": "pt.png",
    "Alemania": "de.png",
    "Países Bajos": "nl.png",
    "Suiza": "ch.png",
    "Escocia": "gb-sct.png",
    "España": "es.png",
    "Austria": "at.png",
    "Bélgica": "be.png",
    "Bosnia y Herzegovina": "ba.png",
    "Suecia": "se.png",
    "República Checa": "cz.png",
    "Brasil": "br.png",
    "Argentina": "ar.png",
    "Colombia": "co.png",
    "Ecuador": "ec.png",
    "Paraguay": "py.png",
    "Uruguay": "uy.png",
    "Argelia": "dz.png",
    "Cabo Verde": "cv.png",
    "Costa de Marfil": "ci.png",
    "Egipto": "eg.png",
    "Ghana": "gh.png",
    "Marruecos": "ma.png",
    "Senegal": "sn.png",
    "Sudáfrica": "za.png",
    "Túnez": "tn.png",
    "Australia": "au.png",
    "Irán": "ir.png",
    "Japón": "jp.png",
    "Jordania": "jo.png",
    "Qatar": "qa.png",
    "Arabia Saudita": "sa.png",
    "Corea del Sur": "kr.png",
    "Uzbekistán": "uz.png",
    "Curazao": "cw.png",
    "Haití": "ht.png",
    "Panamá": "pa.png",
    "Nueva Zelanda": "nz.png",
    "Rep. Dem. del Congo": "cd.png",
    "Irak": "iq.png",
    "Turquía": "tr.png"
};

const teamEmojis = {
    "México": "🇲🇽",
    "Estados Unidos": "🇺🇸",
    "Canadá": "🇨🇦",
    "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "Francia": "🇫🇷",
    "Croacia": "🇭🇷",
    "Noruega": "🇳🇴",
    "Portugal": "🇵🇹",
    "Alemania": "🇩🇪",
    "Países Bajos": "🇳🇱",
    "Suiza": "🇨🇭",
    "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "España": "🇪🇸",
    "Austria": "🇦🇹",
    "Bélgica": "🇧🇪",
    "Bosnia y Herzegovina": "🇧🇦",
    "Suecia": "🇸🇪",
    "República Checa": "🇨🇿",
    "Brasil": "🇧🇷",
    "Argentina": "🇦🇷",
    "Colombia": "🇨🇴",
    "Ecuador": "🇪🇨",
    "Paraguay": "🇵🇾",
    "Uruguay": "🇺🇾",
    "Argelia": "🇩🇿",
    "Cabo Verde": "🇨🇻",
    "Costa de Marfil": "🇨🇮",
    "Egipto": "🇪🇬",
    "Ghana": "🇬🇭",
    "Marruecos": "🇲🇦",
    "Senegal": "🇸🇳",
    "Sudáfrica": "🇿🇦",
    "Túnez": "🇹🇳",
    "Australia": "🇦🇺",
    "Irán": "🇮🇷",
    "Japón": "🇯🇵",
    "Jordania": "🇯🇴",
    "Qatar": "🇶🇦",
    "Arabia Saudita": "🇸🇦",
    "Corea del Sur": "🇰🇷",
    "Uzbekistán": "🇺🇿",
    "Curazao": "🇨🇼",
    "Haití": "🇭🇹",
    "Panamá": "🇵🇦",
    "Nueva Zelanda": "🇳🇿",
    "Rep. Dem. del Congo": "🇨🇩",
    "Irak": "🇮🇶",
    "Turquía": "🇹🇷"
};

const teamCountryCodes = {
    "México": "mx",
    "Estados Unidos": "us",
    "Canadá": "ca",
    "Inglaterra": "gb-eng",
    "Francia": "fr",
    "Croacia": "hr",
    "Noruega": "no",
    "Portugal": "pt",
    "Alemania": "de",
    "Países Bajos": "nl",
    "Suiza": "ch",
    "Escocia": "gb-sct",
    "España": "es",
    "Austria": "at",
    "Bélgica": "be",
    "Bosnia y Herzegovina": "ba",
    "Suecia": "se",
    "República Checa": "cz",
    "Brasil": "br",
    "Argentina": "ar",
    "Colombia": "co",
    "Ecuador": "ec",
    "Paraguay": "py",
    "Uruguay": "uy",
    "Argelia": "dz",
    "Cabo Verde": "cv",
    "Costa de Marfil": "ci",
    "Egipto": "eg",
    "Ghana": "gh",
    "Marruecos": "ma",
    "Senegal": "sn",
    "Sudáfrica": "za",
    "Túnez": "tn",
    "Australia": "au",
    "Irán": "ir",
    "Japón": "jp",
    "Jordania": "jo",
    "Qatar": "qa",
    "Arabia Saudita": "sa",
    "Corea del Sur": "kr",
    "Uzbekistán": "uz",
    "Curazao": "cw",
    "Haití": "ht",
    "Panamá": "pa",
    "Nueva Zelanda": "nz",
    "Rep. Dem. del Congo": "cd",
    "Irak": "iq",
    "Turquía": "tr"
};

const venuesInfo = {
    "Estadio Azteca": {
        name: "Estadio Azteca", city: "Ciudad de México", country: "México",
        capacity: 87523, opened: 1966, teams: "Club América, Selección Nacional",
        surface: "Césped híbrido Kikuyu", address: "Calz. de Tlalpan 3465, Santa Ursula Coapa, Coyoacán",
        coordinates: "19.303056,-99.150556", type: "Techado parcial",
        roof: "Sí, fibra de vidrio", screen: "Dos pantallas gigantes",
        history: "Copa Mundo 1970 y 1986, JJOO 1968", worldCup: "5 partidos (inauguración + fase grupos)",
        temp: "18-25°C", altitude: "2,240m", cost: "260M MXN",
        facts: "El único estadio en hostar 3 Mundiales"
    },
    "Estadio Akron": {
        name: "Estadio Akron", city: "Guadalajara", country: "México",
        capacity: 46500, opened: 2010, teams: "CD Guadalajara",
        surface: "Césped natural", address: "Cto. J.V.C. 2800, Zapopan",
        coordinates: "20.681667,-103.462778", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "4 partidos",
        temp: "20-28°C", altitude: "1,560m", cost: "200M USD",
        facts: "Diseñado para parecer un volcán cubierto de pasto"
    },
    "Estadio BBVA": {
        name: "Estadio BBVA", city: "Monterrey", country: "México",
        capacity: 51000, opened: 2002, teams: "Rayados de Monterrey",
        surface: "Césped natural", address: "Av. Las Americas 1500, Guadalupe",
        coordinates: "25.609444,-100.234722", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "4 partidos",
        temp: "22-30°C", altitude: "540m", cost: "90M USD",
        facts: "Conocido como El Gigante de Acero"
    },
    "Mercedes-Benz Stadium": {
        name: "Mercedes-Benz Stadium", city: "Atlanta", country: "Estados Unidos",
        capacity: 71000, opened: 2017, teams: "Atlanta Falcons, Atlanta United",
        surface: "FieldTurf CORE / Césped híbrido", address: "1 AMB Dr NW, Atlanta, GA 30313",
        coordinates: "33.759222,-84.402000", type: "Techado retráctil",
        roof: "Sí, 8 paneles triangulares", screen: "Halo de 58 pies",
        history: "Super Bowl LIII, Copa América 2024", worldCup: "8 partidos (semifinal)",
        temp: "24-32°C", altitude: "320m", cost: "1.6B USD",
        facts: "Techo inspirado en el Panteón Romano"
    },
    "Gillette Stadium": {
        name: "Gillette Stadium", city: "Boston", country: "Estados Unidos",
        capacity: 68756, opened: 2002, teams: "New England Patriots, New England Revolution",
        surface: "FieldTurf", address: "1 Patriot Pl, Foxborough, MA 02035",
        coordinates: "42.090833,-71.265278", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "6 partidos",
        temp: "18-27°C", altitude: "45m", cost: "325M USD",
        facts: "Ubicado en Foxborough, Massachusetts"
    },
    "AT&T Stadium": {
        name: "AT&T Stadium", city: "Dallas", country: "Estados Unidos",
        capacity: 80000, opened: 2009, teams: "Dallas Cowboys",
        surface: "Césped híbrido", address: "1 AT&T Way, Arlington, TX 76011",
        coordinates: "32.748889,-97.092778", type: "Techado retráctil",
        roof: "Sí", screen: "Mayor pantalla HD del mundo",
        history: "Super Bowl XLV, Copa Mundo 2026", worldCup: "8 partidos",
        temp: "26-35°C", altitude: "180m", cost: "1.2B USD",
        facts: "Techo retráctil más grande del mundo"
    },
    "NRG Stadium": {
        name: "NRG Stadium", city: "Houston", country: "Estados Unidos",
        capacity: 72220, opened: 2002, teams: "Houston Texans",
        surface: "Césped natural", address: "1 NRG Pkwy, Houston, TX 77054",
        coordinates: "29.684167,-95.214444", type: "Techado retráctil",
        roof: "Sí", screen: "Sí",
        history: "Super Bowl LI, Copa Mundo 2026", worldCup: "8 partidos",
        temp: "26-33°C", altitude: "15m", cost: "415M USD",
        facts: "Tiene techo retráctil"
    },
    "Arrowhead Stadium": {
        name: "Arrowhead Stadium", city: "Kansas City", country: "Estados Unidos",
        capacity: 76416, opened: 1972, teams: "Kansas City Chiefs",
        surface: "Césped natural", address: "1 Arrowhead Dr, Kansas City, MO 64129",
        coordinates: "39.092778,-94.578333", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "6 partidos",
        temp: "22-30°C", altitude: "275m", cost: "43M USD",
        facts: "Famoso por su ruido por la estructura de acero"
    },
    "SoFi Stadium": {
        name: "SoFi Stadium", city: "Los Angeles", country: "Estados Unidos",
        capacity: 70000, opened: 2020, teams: "Rams, Chargers",
        surface: "Césped híbrido", address: "1001 Stadium Dr, Inglewood, CA 90301",
        coordinates: "33.953333,-118.329167", type: "Techado",
        roof: "Sí, techo dual de 70 pies", screen: "DuaBool",
        history: "Super Bowl LVI, Copa América 2024", worldCup: "8 partidos",
        temp: "18-28°C", altitude: "45m", cost: "5B USD",
        facts: "Techos duales más altos del mundo"
    },
    "Hard Rock Stadium": {
        name: "Hard Rock Stadium", city: "Miami", country: "Estados Unidos",
        capacity: 65326, opened: 1987, teams: "Miami Dolphins",
        surface: "Césped natural", address: "347 Don Shula Dr, Miami Gardens, FL 33056",
        coordinates: "25.957778,-80.240556", type: "Abierto",
        roof: "No", screen: "4 pantallas LED",
        history: "Super Bowl LIV, Copa Mundo 2026", worldCup: "6 partidos",
        temp: "26-32°C", altitude: "3m", cost: "15M USD (renovado)",
        facts: "Anteriormente Joe Robbie Stadium"
    },
    "MetLife Stadium": {
        name: "MetLife Stadium", city: "New York", country: "Estados Unidos",
        capacity: 82500, opened: 2010, teams: "Giants, Jets",
        surface: "FieldTurf", address: "1 MetLife Stadium Dr, East Rutherford, NJ 07073",
        coordinates: "40.812222,-74.073056", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "8 partidos",
        temp: "18-28°C", altitude: "3m", cost: "1.6B USD",
        facts: "Estadio compartido entre Giants y Jets"
    },
    "Lincoln Financial Field": {
        name: "Lincoln Financial Field", city: "Philadelphia", country: "Estados Unidos",
        capacity: 67594, opened: 2003, teams: "Philadelphia Eagles",
        surface: "Césped natural", address: "1020 Pattison Ave, Philadelphia, PA 19145",
        coordinates: "39.903333,-75.168056", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "6 partidos",
        temp: "20-29°C", altitude: "7m", cost: "512M USD",
        facts: "Nombre del sponsors oficial"
    },
    "Levi's Stadium": {
        name: "Levi's Stadium", city: "San Francisco", country: "Estados Unidos",
        capacity: 68500, opened: 2014, teams: "San Francisco 49ers",
        surface: "Césped natural", address: "4900 Marie P DeBartolo Way, Santa Clara, CA 95054",
        coordinates: "37.401944,-121.969444", type: "Techado parcial",
        roof: "Sí", screen: "Sí",
        history: "Super Bowl 50, Copa Mundo 2026", worldCup: "6 partidos",
        temp: "16-24°C", altitude: "6m", cost: "1.3B USD",
        facts: "Cerca de Silicon Valley"
    },
    "Lumen Field": {
        name: "Lumen Field", city: "Seattle", country: "Estados Unidos",
        capacity: 72000, opened: 2002, teams: "Seattle Seahawks",
        surface: "Césped híbrido", address: "800 Occidental Ave S, Seattle, WA 98134",
        coordinates: "47.592500,-122.326944", type: "Abierto",
        roof: "No", screen: "Sí",
        history: "Copa Mundo 2026", worldCup: "6 partidos",
        temp: "14-21°C", altitude: "3m", cost: "430M USD",
        facts: "Originalmente Qwest Field, ahora Lumen Field"
    },
    "BMO Field": {
        name: "BMO Field", city: "Toronto", country: "Canadá",
        capacity: 45000, opened: 2007, teams: "Toronto FC, Toronto Argonauts",
        surface: "Césped natural", address: "170 Princes Boulevard, Toronto, ON M6K 3C3",
        coordinates: "43.637500,-79.420278", type: "Techado parcial",
        roof: "Sí", screen: "4 LED boards",
        history: "Copa Mundo 2026", worldCup: "5 partidos",
        temp: "15-25°C", altitude: "76m", cost: "380M CAD (renovado)",
        facts: "El estadio más pequeño del torneo"
    },
    "BC Place": {
        name: "BC Place", city: "Vancouver", country: "Canadá",
        capacity: 54500, opened: 1983, teams: "BC Lions",
        surface: "Césped artificial/híbrido", address: "777 Pacific Blvd, Vancouver, BC V6B 4Y8",
        coordinates: "49.275833,-123.108333", type: "Techado retráctil",
        roof: "Sí (desde 2011)", screen: "Pantalla circular retráctil",
        history: "JJOO 2010, Copa Mujer 2015", worldCup: "5 partidos",
        temp: "14-21°C", altitude: "70m", cost: "574M CAD",
        facts: "Techo retráctil instalado en 2011"
    }
};

const venues = [
    { country: "México", city: "Ciudad de México", stadium: "Estadio Azteca", capacity: 83264, image: "venues/azteca.jpg" },
    { country: "México", city: "Guadalajara", stadium: "Estadio Akron", capacity: 46355, image: "venues/akron.jpg" },
    { country: "México", city: "Monterrey", stadium: "Estadio BBVA", capacity: 51000, image: "venues/bbva.jpg" },
    { country: "Estados Unidos", city: "Atlanta", stadium: "Mercedes-Benz Stadium", capacity: 71000, image: "venues/mercedes.jpg" },
    { country: "Estados Unidos", city: "Boston", stadium: "Gillette Stadium", capacity: 68756, image: "venues/gillette.jpg" },
    { country: "Estados Unidos", city: "Dallas", stadium: "AT&T Stadium", capacity: 80000, image: "venues/att.jpg" },
    { country: "Estados Unidos", city: "Houston", stadium: "NRG Stadium", capacity: 72220, image: "venues/nrg.jpg" },
    { country: "Estados Unidos", city: "Kansas City", stadium: "Arrowhead Stadium", capacity: 76416, image: "venues/arrowhead.jpg" },
    { country: "Estados Unidos", city: "Los Angeles", stadium: "SoFi Stadium", capacity: 70000, image: "venues/sofi.jpg" },
    { country: "Estados Unidos", city: "Miami", stadium: "Hard Rock Stadium", capacity: 65326, image: "venues/hard_rock.jpg" },
    { country: "Estados Unidos", city: "New York/New Jersey", stadium: "MetLife Stadium", capacity: 82500, image: "venues/metlife.jpg" },
    { country: "Estados Unidos", city: "Philadelphia", stadium: "Lincoln Financial Field", capacity: 67594, image: "venues/lincoln.jpg" },
    { country: "Estados Unidos", city: "San Francisco", stadium: "Levi's Stadium", capacity: 68500, image: "venues/levis.jpg" },
    { country: "Estados Unidos", city: "Seattle", stadium: "Lumen Field", capacity: 72000, image: "venues/lumen.jpg" },
    { country: "Canadá", city: "Toronto", stadium: "BMO Field", capacity: 30000, image: "venues/bmo.jpg" },
    { country: "Canadá", city: "Vancouver", stadium: "BC Place", capacity: 54500, image: "venues/bc_place.jpg" }
];

const groups = [
    { name: "A", teams: [
        { name: "México", flag: "🇲🇽" },
        { name: "Sudáfrica", flag: "🇿🇦" },
        { name: "Corea del Sur", flag: "🇰🇷" },
        { name: "República Checa", flag: "🇨🇿" }
    ]},
    { name: "B", teams: [
        { name: "Canadá", flag: "🇨🇦" },
        { name: "Bosnia y Herzegovina", flag: "🇧🇦" },
        { name: "Qatar", flag: "🇶🇦" },
        { name: "Suiza", flag: "🇨🇭" }
    ]},
    { name: "C", teams: [
        { name: "Brasil", flag: "🇧🇷" },
        { name: "Marruecos", flag: "🇲🇦" },
        { name: "Haití", flag: "🇭🇹" },
        { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }
    ]},
    { name: "D", teams: [
        { name: "Estados Unidos", flag: "🇺🇸" },
        { name: "Paraguay", flag: "🇵🇾" },
        { name: "Australia", flag: "🇦🇺" },
        { name: "Turquía", flag: "🇹🇷" }
    ]},
    { name: "E", teams: [
        { name: "Alemania", flag: "🇩🇪" },
        { name: "Curazao", flag: "🇨🇼" },
        { name: "Costa de Marfil", flag: "🇨🇮" },
        { name: "Ecuador", flag: "🇪🇨" }
    ]},
    { name: "F", teams: [
        { name: "Países Bajos", flag: "🇳🇱" },
        { name: "Japón", flag: "🇯🇵" },
        { name: "Suecia", flag: "🇸🇪" },
        { name: "Túnez", flag: "🇹🇳" }
    ]},
    { name: "G", teams: [
        { name: "Bélgica", flag: "🇧🇪" },
        { name: "Egipto", flag: "🇪🇬" },
        { name: "Irán", flag: "🇮🇷" },
        { name: "Nueva Zelanda", flag: "🇳🇿" }
    ]},
    { name: "H", teams: [
        { name: "España", flag: "🇪🇸" },
        { name: "Cabo Verde", flag: "🇨🇻" },
        { name: "Arabia Saudita", flag: "🇸🇦" },
        { name: "Uruguay", flag: "🇺🇾" }
    ]},
    { name: "I", teams: [
        { name: "Francia", flag: "🇫🇷" },
        { name: "Senegal", flag: "🇸🇳" },
        { name: "Irak", flag: "🇮🇶" },
        { name: "Noruega", flag: "🇳🇴" }
    ]},
    { name: "J", teams: [
        { name: "Argentina", flag: "🇦🇷" },
        { name: "Argelia", flag: "🇩🇿" },
        { name: "Austria", flag: "🇦🇹" },
        { name: "Jordania", flag: "🇯🇴" }
    ]},
    { name: "K", teams: [
        { name: "Portugal", flag: "🇵🇹" },
        { name: "Rep. Dem. del Congo", flag: "🇨🇩" },
        { name: "Uzbekistán", flag: "🇺🇿" },
        { name: "Colombia", flag: "🇨🇴" }
    ]},
    { name: "L", teams: [
        { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        { name: "Croacia", flag: "🇭🇷" },
        { name: "Ghana", flag: "🇬🇭" },
        { name: "Panamá", flag: "🇵🇦" }
    ]}
];

const venueByGroup = {
    "A": ["Estadio Azteca", "Estadio Akron"],
    "B": ["BMO Field", "BMO Field"],
    "C": ["Estadio Azteca", "Estadio Azteca"],
    "D": ["SoFi Stadium", "SoFi Stadium"],
    "E": ["Mercedes-Benz Stadium", "Mercedes-Benz Stadium"],
    "F": ["AT&T Stadium", "AT&T Stadium"],
    "G": ["NRG Stadium", "NRG Stadium"],
    "H": ["Hard Rock Stadium", "Hard Rock Stadium"],
    "I": ["Lumen Field", "Lumen Field"],
    "J": ["Lincoln Financial Field", "Lincoln Financial Field"],
    "K": ["Gillette Stadium", "Gillette Stadium"],
    "L": ["Arrowhead Stadium", "Arrowhead Stadium"]
};

const realSchedule = {
    "A": {
        1: [{ date: "2026-06-11", time: "14:00" }, { date: "2026-06-11", time: "21:00" }],
        2: [{ date: "2026-06-18", time: "11:00" }, { date: "2026-06-18", time: "11:00" }],
        3: [{ date: "2026-06-24", time: "20:00" }, { date: "2026-06-24", time: "20:00" }]
    },
    "B": {
        1: [{ date: "2026-06-12", time: "14:00" }, { date: "2026-06-13", time: "14:00" }],
        2: [{ date: "2026-06-18", time: "14:00" }, { date: "2026-06-18", time: "17:00" }],
        3: [{ date: "2026-06-24", time: "14:00" }, { date: "2026-06-24", time: "14:00" }]
    },
    "C": {
        1: [{ date: "2026-06-13", time: "17:00" }, { date: "2026-06-13", time: "20:00" }],
        2: [{ date: "2026-06-19", time: "17:00" }, { date: "2026-06-19", time: "19:30" }],
        3: [{ date: "2026-06-24", time: "17:00" }, { date: "2026-06-24", time: "17:00" }]
    },
    "D": {
        1: [{ date: "2026-06-12", time: "20:00" }, { date: "2026-06-13", time: "23:00" }],
        2: [{ date: "2026-06-19", time: "14:00" }, { date: "2026-06-19", time: "22:00" }],
        3: [{ date: "2026-06-25", time: "21:00" }, { date: "2026-06-25", time: "21:00" }]
    },
    "E": {
        1: [{ date: "2026-06-14", time: "12:00" }, { date: "2026-06-14", time: "18:00" }],
        2: [{ date: "2026-06-20", time: "12:00" }, { date: "2026-06-20", time: "19:00" }],
        3: [{ date: "2026-06-25", time: "15:00" }, { date: "2026-06-25", time: "15:00" }]
    },
    "F": {
        1: [{ date: "2026-06-14", time: "15:00" }, { date: "2026-06-14", time: "21:00" }],
        2: [{ date: "2026-06-20", time: "23:00" }, { date: "2026-06-20", time: "23:00" }],
        3: [{ date: "2026-06-25", time: "18:00" }, { date: "2026-06-25", time: "18:00" }]
    },
    "G": {
        1: [{ date: "2026-06-15", time: "14:00" }, { date: "2026-06-15", time: "20:00" }],
        2: [{ date: "2026-06-21", time: "14:00" }, { date: "2026-06-21", time: "20:00" }],
        3: [{ date: "2026-06-24", time: "22:00" }, { date: "2026-06-24", time: "22:00" }]
    },
    "H": {
        1: [{ date: "2026-06-15", time: "11:00" }, { date: "2026-06-15", time: "20:00" }],
        2: [{ date: "2026-06-21", time: "11:00" }, { date: "2026-06-21", time: "17:00" }],
        3: [{ date: "2026-06-26", time: "19:00" }, { date: "2026-06-26", time: "19:00" }]
    },
    "I": {
        1: [{ date: "2026-06-16", time: "14:00" }, { date: "2026-06-16", time: "17:00" }],
        2: [{ date: "2026-06-22", time: "16:00" }, { date: "2026-06-22", time: "19:00" }],
        3: [{ date: "2026-06-26", time: "14:00" }, { date: "2026-06-26", time: "14:00" }]
    },
    "J": {
        1: [{ date: "2026-06-16", time: "20:00" }, { date: "2026-06-16", time: "23:00" }],
        2: [{ date: "2026-06-22", time: "12:00" }, { date: "2026-06-22", time: "22:00" }],
        3: [{ date: "2026-06-25", time: "21:00" }, { date: "2026-06-25", time: "21:00" }]
    },
    "K": {
        1: [{ date: "2026-06-17", time: "12:00" }, { date: "2026-06-17", time: "21:00" }],
        2: [{ date: "2026-06-23", time: "12:00" }, { date: "2026-06-23", time: "21:00" }],
        3: [{ date: "2026-06-27", time: "18:30" }, { date: "2026-06-27", time: "18:30" }]
    },
    "L": {
        1: [{ date: "2026-06-17", time: "15:00" }, { date: "2026-06-17", time: "18:00" }],
        2: [{ date: "2026-06-23", time: "15:00" }, { date: "2026-06-23", time: "18:00" }],
        3: [{ date: "2026-06-27", time: "16:00" }, { date: "2026-06-27", time: "16:00" }]
    }
};

function generateMatches() {
    const allMatches = [];
    
    groups.forEach(g => {
        const teamNames = g.teams.map(t => t.name);
        
        const round1 = [
            { t1: teamNames[0], t2: teamNames[1] },
            { t1: teamNames[2], t2: teamNames[3] }
        ];
        const round2 = [
            { t1: teamNames[0], t2: teamNames[2] },
            { t1: teamNames[3], t2: teamNames[1] }
        ];
        const round3 = [
            { t1: teamNames[0], t2: teamNames[3] },
            { t1: teamNames[1], t2: teamNames[2] }
        ];
        
        [round1, round2, round3].forEach((round, roundIdx) => {
            const roundSchedule = realSchedule[g.name][roundIdx + 1];
            const venues = venueByGroup[g.name];
            
            round.forEach((match, matchIdx) => {
                allMatches.push({
                    date: roundSchedule[matchIdx].date,
                    time: roundSchedule[matchIdx].time,
                    group: g.name,
                    team1: match.t1,
                    team2: match.t2,
                    venue: venues[matchIdx % 2]
                });
            });
        });
    });
    
    return allMatches;
}

const matches = generateMatches();

const knockoutMatches = [
    { date: "2026-06-28", time: "14:00", group: "16avos", team1: "2° Grupo A", team2: "2° Grupo B", venue: "SoFi Stadium" },
    { date: "2026-06-29", time: "12:00", group: "16avos", team1: "1° Grupo C", team2: "2° Grupo F", venue: "NRG Stadium" },
    { date: "2026-06-29", time: "15:30", group: "16avos", team1: "1° Grupo E", team2: "3° Mejor 3°", venue: "Gillette Stadium" },
    { date: "2026-06-29", time: "20:00", group: "16avos", team1: "1° Grupo F", team2: "2° Grupo C", venue: "Estadio BBVA" },
    { date: "2026-06-30", time: "12:00", group: "16avos", team1: "2° Grupo E", team2: "2° Grupo I", venue: "AT&T Stadium" },
    { date: "2026-06-30", time: "16:00", group: "16avos", team1: "1° Grupo I", team2: "3° Mejor 3°", venue: "MetLife Stadium" },
    { date: "2026-06-30", time: "20:00", group: "16avos", team1: "1° Grupo A", team2: "3° Mejor 3°", venue: "Estadio Azteca" },
    { date: "2026-07-01", time: "11:00", group: "16avos", team1: "1° Grupo L", team2: "3° Mejor 3°", venue: "Mercedes-Benz Stadium" },
    { date: "2026-07-01", time: "15:00", group: "16avos", team1: "1° Grupo G", team2: "3° Mejor 3°", venue: "Lumen Field" },
    { date: "2026-07-01", time: "19:00", group: "16avos", team1: "1° Grupo D", team2: "3° Mejor 3°", venue: "Levi's Stadium" },
    { date: "2026-07-02", time: "14:00", group: "16avos", team1: "1° Grupo H", team2: "2° Grupo J", venue: "SoFi Stadium" },
    { date: "2026-07-02", time: "18:00", group: "16avos", team1: "2° Grupo K", team2: "2° Grupo L", venue: "BMO Field" },
    { date: "2026-07-02", time: "22:00", group: "16avos", team1: "1° Grupo B", team2: "3° Mejor 3°", venue: "BC Place" },
    { date: "2026-07-03", time: "13:00", group: "16avos", team1: "2° Grupo D", team2: "2° Grupo G", venue: "AT&T Stadium" },
    { date: "2026-07-03", time: "17:00", group: "16avos", team1: "1° Grupo J", team2: "2° Grupo H", venue: "Hard Rock Stadium" },
    { date: "2026-07-03", time: "20:30", group: "16avos", team1: "1° Grupo K", team2: "3° Mejor 3°", venue: "Arrowhead Stadium" },
    { date: "2026-07-04", time: "12:00", group: "Octavos", team1: "Ganador P73", team2: "Ganador P75", venue: "NRG Stadium" },
    { date: "2026-07-04", time: "16:00", group: "Octavos", team1: "Ganador P74", team2: "Ganador P77", venue: "Lincoln Financial Field" },
    { date: "2026-07-05", time: "15:00", group: "Octavos", team1: "Ganador P76", team2: "Ganador P78", venue: "MetLife Stadium" },
    { date: "2026-07-05", time: "19:00", group: "Octavos", team1: "Ganador P79", team2: "Ganador P80", venue: "Estadio Azteca" },
    { date: "2026-07-06", time: "14:00", group: "Octavos", team1: "Ganador P83", team2: "Ganador P84", venue: "AT&T Stadium" },
    { date: "2026-07-06", time: "19:00", group: "Octavos", team1: "Ganador P81", team2: "Ganador P82", venue: "Lumen Field" },
    { date: "2026-07-07", time: "11:00", group: "Octavos", team1: "Ganador P86", team2: "Ganador P88", venue: "Mercedes-Benz Stadium" },
    { date: "2026-07-07", time: "15:00", group: "Octavos", team1: "Ganador P85", team2: "Ganador P87", venue: "BC Place" },
    { date: "2026-07-09", time: "15:00", group: "Cuartos", team1: "Ganador 89", team2: "Ganador 90", venue: "Gillette Stadium" },
    { date: "2026-07-10", time: "14:00", group: "Cuartos", team1: "Ganador 93", team2: "Ganador 94", venue: "SoFi Stadium" },
    { date: "2026-07-11", time: "16:00", group: "Cuartos", team1: "Ganador 91", team2: "Ganador 92", venue: "Hard Rock Stadium" },
    { date: "2026-07-11", time: "20:00", group: "Cuartos", team1: "Ganador 95", team2: "Ganador 96", venue: "Arrowhead Stadium" },
    { date: "2026-07-14", time: "14:00", group: "Semifinal", team1: "Ganador Cuartos 1", team2: "Ganador Cuartos 2", venue: "AT&T Stadium" },
    { date: "2026-07-15", time: "14:00", group: "Semifinal", team1: "Ganador Cuartos 3", team2: "Ganador Cuartos 4", venue: "Mercedes-Benz Stadium" },
    { date: "2026-07-18", time: "16:00", group: "3° lugar", team1: "Perdedor Semifinal 1", team2: "Perdedor Semifinal 2", venue: "Hard Rock Stadium" },
    { date: "2026-07-19", time: "14:00", group: "Final", team1: "Campeón Semifinal 1", team2: "Campeón Semifinal 2", venue: "MetLife Stadium" }
];

matches.push(...knockoutMatches);

let quiniela = {};
let prediccionesData = [];
let resultadosPartidos = {};

const teamInfoData = {
    "México": { group: "A", firstWC: 1958, totalAppearances: 17, bestResult: "Campeón (1970, 1986)", titles: 2, starPlayer: "Santiago Giménez", coach: "Javier Aguirre", squad: ["Carlos Acevedo", "Raúl Rangel", "Guillermo Ochoa", "Mateo Chávez", "Jesús Gallardo", "César Montes", "Israel Reyes", "Jorge Sánchez", "Johan Vásquez", "Edson Álvarez", "Luis Chávez", "Álvaro Fidalgo", "Brian Gutiérrez", "César Huerta", "Erik Lira", "Gilberto Mora", "Orbelín Pineda", "Luis Romo", "Obed Vargas", "Roberto Alvarado", "Santiago Giménez", "Armando González", "Raúl Jiménez", "Guillermo Martínez", "Julián Quiñones", "Alexis Vega"] },
    "Sudáfrica": { group: "A", firstWC: 1998, totalAppearances: 3, bestResult: "Fase de grupos", titles: 0, starPlayer: "Percy Tau", coach: "Hugo Broos", squad: ["Sipho Chaine", "Ricardo Goss", "Ronwen Williams", "Bradley Cross", "Samukele Kabini", "Olwethu Makhanya", "Thabang Matuludi", "Mbekezeli Mbokazi", "Aubrey Modiba", "Khuliso Mudau", "Khulumani Ndamane", "Ime Okon", "Nkosinathi Sibisi", "Jayden Adams", "Thalente Mbatha", "Teboho Mokoena", "Kamogelo Sebelebele", "Sphephelo Sithole", "Oswin Appollis", "Lyle Foster", "Evidence Makgopa", "Thapelo Maseko", "Relebohile Mofokeng", "Tshepang Moremi", "Iqraam Rayners", "Themba Zwane"] },
    "Corea del Sur": { group: "A", firstWC: 1954, totalAppearances: 11, bestResult: "Cuarto lugar (2002)", titles: 0, starPlayer: "Son Heung-min", coach: "Hong Myung-bo", squad: ["Jo Hyeon-Woo", "Kim Seung-Gyu", "Song Bum-Keun", "Cho Yu-Min", "Jens Castrop", "Kim Min-Jae", "Kim Moon-Hwan", "Kim Tae-Hyeon", "Lee Han-Beom", "Lee Ki-Hyuk", "Lee Tae-Seok", "Park Jin-Seob", "Seol Young-Woo", "Bae Jun-Ho", "Eom Ji-Sung", "Hwang Hee-Chan", "Hwang In-Beom", "Kim Jin-Gyu", "Lee Dong-Gyeong", "Lee Jae-Sung", "Lee Kang-In", "Paik Seung-Ho", "Yang Hyun-Jun", "Cho Gue-Sung", "Oh Hyeon-Gyu", "Son Heung-Min"] },
    "República Checa": { group: "A", firstWC: 1934, totalAppearances: 9, bestResult: "Subcampeón (1934)", titles: 0, starPlayer: "Patrik Schick", coach: "Ivan Hašek", squad: ["Lukáš Horníček", "Matěj Kovář", "Jindřich Staněk", "Štěpán Chaloupek", "Vladimír Coufal", "David Douděra", "Tomáš Holeš", "Robin Hranáč", "David Jurásek", "Ladislav Krejčí", "Jaroslav Zelený", "David Zima", "Lukáš Červ", "Vladimír Darida", "Lukáš Provod", "Michal Sadílek", "Hugo Sochůrek", "Alexandr Sojka", "Tomáš Souček", "Pavel Šulc", "Denis Višinský", "Tomáš Chorý", "Mojmír Chytil", "Adam Hložek", "Jan Kuchta", "Patrik Schick"] },
    "Canadá": { group: "B", firstWC: 1986, totalAppearances: 2, bestResult: "Fase de grupos (1986)", titles: 0, starPlayer: "Alphonso Davies", coach: "Jesse Marsch", squad: ["Maxime Crépeau", "Owen Goodman", "Dayne St. Clair", "Moïse Bombito", "Derek Cornelius", "Alphonso Davies", "Luc de Fougerolles", "Alistair Johnston", "Alfie Jones", "Richie Laryea", "Niko Sigur", "Joel Waterman", "Ali Ahmed", "Tajon Buchanan", "Mathieu Choinière", "Stephen Eustáquio", "Marcelo Flores", "Ismaël Koné", "Liam Millar", "Jonathan Osorio", "Nathan Saliba", "Jacob Shaffelburg", "Jonathan David", "Promise David", "Cyle Larin", "Tani Oluwaseyi"] },
    "Bosnia y Herzegovina": { group: "B", firstWC: 2014, totalAppearances: 2, bestResult: "Fase de grupos (2014)", titles: 0, starPlayer: "Edin Džeko", coach: "Sergej Barbarez", squad: ["Osman Hadžikić", "Nikola Vasilj", "Martin Zlomislić", "Nidal Čelik", "Amar Dedić", "Dennis Hadžikadunić", "Nikola Katić", "Sead Kolašinac", "Tarik Muharemovic", "Nihad Mujakić", "Stjepan Radeljić", "Kerim Alajbegović", "Esmir Bajraktarević", "Ivan Bašić", "Dženis Burnić", "Armin Gigović", "Amir Hadžiahmetović", "Ermin Mahmić", "Amar Memić", "Benjamin Tahirović", "Ivan Šunjić", "Samed Baždar", "Ermedin Demirović", "Edin Džeko", "Jovo Lukić", "Haris Tabakovic"] },
    "Qatar": { group: "B", firstWC: 2022, totalAppearances: 2, bestResult: "Fase de grupos", titles: 0, starPlayer: "Almoez Ali", coach: "Tintín", squad: ["Mahmoud Abunada", "Meshaal Barsham", "Salah Zakaria", "Ayoub Alawi", "Homam Al-Amin", "Sultan Al-Brake", "Hashmi Hussein", "Boualem Khoukhi", "Issa Laaye", "Lucas Mendes", "Pedro Miguel", "Mohammed Al-Manai", "Karim Boudiaf", "Ahmed Fathi", "Abdulaziz Hatem", "Jassem Jaber", "Assim Madibo", "Youssef Abdulrazzaq", "Akram Afif", "Ahmed Alaa", "Hassan Al-Haydos", "Almoez Ali", "Ahmed Al-Janahi", "Edmilson Junior", "Tahseen Mohammed", "Mohammed Muntari"] },
    "Suiza": { group: "B", firstWC: 1934, totalAppearances: 12, bestResult: "Cuartos de Final (1934, 1938, 1954)", titles: 0, starPlayer: "Granit Xhaka", coach: "Murat Yakin", squad: ["Marvin Keller", "Gregor Kobel", "Yvon Mvogo", "Manuel Akanji", "Aurèle Amenda", "Eray Cömert", "Nico Elvedi", "Luca Jaquez", "Miro Muheim", "Ricardo Rodriguez", "Silvan Widmer", "Michel Aebischer", "Christian Fassnacht", "Remo Freuler", "Ardon Jashari", "Johan Manzambi", "Fabian Rieder", "Djibril Sow", "Granit Xhaka", "Denis Zakaria", "Zeki Amdouni", "Breel Embolo", "Noah Okafor", "Dan Ndoye", "Ruben Vargas", "Cedric Itten"] },
    "Brasil": { group: "C", firstWC: 1930, totalAppearances: 22, bestResult: "Campeón (1958, 1962, 1970, 1994, 2002)", titles: 5, starPlayer: "Vinicius Jr.", coach: "Dorival Jr.", squad: ["Alisson", "Ederson", "Weverton", "Marquinhos", "Gabriel Magalhães", "Bremer", "Ibáñez", "Léo Pereira", "Wesley", "Danilo", "Alex Sandro", "Douglas Santos", "Casemiro", "Bruno Guimarães", "Fabinho", "Danilo (Botafogo)", "Lucas Paquetá", "Vinicius Jr.", "Raphinha", "Matheus Cunha", "Luiz Henrique", "Igor Thiago", "Endrick", "Gabriel Martinelli", "Rayan", "Neymar Jr."] },
    "Marruecos": { group: "C", firstWC: 1970, totalAppearances: 6, bestResult: "Cuartos de Final (2022)", titles: 0, starPlayer: "Achraf Hakimi", coach: "Walid Regragui", squad: ["Yassine Bounou", "Munir Mohamedi", "El Mehdi Benabid", "Achraf Hakimi", "Noussair Mazraoui", "Nayef Aguerd", "Romain Saïss", "Chadi Riad", "Abdel Abqar", "Yahia Attiyat Allah", "Sofyan Amrabat", "Azzedine Ounahi", "Bilal El Khannouss", "Brahim Díaz", "Ismael Saibari", "Amir Richardson", "Oussama El Azzouzi", "Hakim Ziyech", "Amine Adli", "Soufiane Rahimi", "Youssef En-Nesyri", "Ayoub El Kaabi", "Iliah Akhomach", "Abde Ezzalzouli"] },
    "Haití": { group: "C", firstWC: 1974, totalAppearances: 3, bestResult: "Fase de grupos", titles: 0, starPlayer: "Alex Christian", coach: "Elsante", squad: ["Johny Placide", "Alexandre Pierre", "Garissone Innocent", "Carlens Arcus", "Ricardo Adé", "Jean-Kevin Duverne", "Garven Metusala", "Duke Lacroix", "Stephane Lambese", "Bryan Alceus", "Leverton Pierre", "Danley Jean Jacques", "Carl Fred Sainté", "Christopher Attys", "Louicious Deedson", "Ruben Providence", "Josué Casimir", "Derrick Etienne", "Wilson Isidor", "Duckens Nazon", "Frantzdy Pierrot", "Yassin Fortune", "Lenny Joseph"] },
    "Escocia": { group: "C", firstWC: 1954, totalAppearances: 3, bestResult: "Fase de grupos", titles: 0, starPlayer: "Andrew Robertson", coach: "Steve Clarke", squad: ["Craig Gordon", "Angus Gunn", "Zander Clark", "Andrew Robertson", "Kieran Tierney", "Jack Hendry", "Ryan Porteous", "Anthony Ralston", "Greg Taylor", "John Souttar", "Scott McKenna", "Scott McTominay", "John McGinn", "Callum McGregor", "Billy Gilmour", "Kenny McLean", "Ryan Christie", "Lewis Ferguson", "Stuart Armstrong", "Che Adams", "Lawrence Shankland", "Lyndon Dykes", "Tommy Conway", "Ben Doak"] },
    "Estados Unidos": { group: "D", firstWC: 1930, totalAppearances: 11, bestResult: "Tercer lugar (1930)", titles: 0, starPlayer: "Christian Pulisic", coach: "Por confirmar", squad: ["Matt Turner", "Patrick Schulte", "Ethan Horvath", "Chris Richards", "Antonee Robinson", "Miles Robinson", "Joe Scally", "Tim Ream", "Mark McKenzie", "Cameron Carter-Vickers", "Kristoffer Lund", "Weston McKennie", "Yunus Musah", "Tyler Adams", "Gio Reyna", "Johnny Cardoso", "Malik Tillman", "Luca de la Torre", "Christian Pulisic", "Folarin Balogun", "Timothy Weah", "Ricardo Pepi", "Brenden Aaronson", "Haji Wright", "Josh Sargent", "Brandon Vazquez"] },
    "Paraguay": { group: "D", firstWC: 1930, totalAppearances: 8, bestResult: "Cuartos de Final (2010)", titles: 0, starPlayer: "Miguel Almirón", coach: "Guillermo Barros Schelotto", squad: ["Carlos Coronel", "Gatito Fernández", "Rodrigo Morínigo", "Gustavo Gómez", "Júnior Alonso", "Fabian Balbuena", "Omar Alderete", "Santiago Arzamendia", "Juan Escobar", "Gustavo Velázquez", "Matías Espinoza", "Andrés Cubas", "Matías Rojas", "Diego Gómez", "Richard Sánchez", "Alejandro Romero Gamarra", "Damián Bobadilla", "Fabrizio Peralta", "Miguel Almirón", "Julio Enciso", "Antonio Sanabria", "Adam Bareiro", "Alex Arce", "Ramon Sosa", "Derlis González", "Ángel Romero"] },
    "Australia": { group: "D", firstWC: 1974, totalAppearances: 6, bestResult: "Octavos de Final (2006)", titles: 0, starPlayer: "Mathew Leckie", coach: "Tony Popovic", squad: ["Mathew Ryan", "Joe Gauci", "Paul Izzo", "Harry Souttar", "Kye Rowles", "Aziz Behich", "Gethin Jones", "Cameron Burgess", "Thomas Deng", "Lewis Miller", "Jordan Bos", "Jackson Irvine", "Connor Metcalfe", "Keanu Baccus", "Ajdin Hrustic", "Riley McGree", "Aiden O'Neill", "Cameron Devlin", "Mitchell Duke", "Nestory Irankunda", "Craig Goodwin", "Martin Boyle", "Kusini Yengi", "Brandon Borrello", "Adam Taggart", "Marco Tilio"] },
    "Turquía": { group: "D", firstWC: 1954, totalAppearances: 5, bestResult: "Tercer lugar (2002)", titles: 0, starPlayer: "Hakan Çalhanoğlu", coach: "Vincenzo Montella", squad: ["Mert Günok", "Uğurcan Çakır", "Altay Bayındır", "Merih Demiral", "Çağlar Söyüncü", "Abdülkerim Bardakcı", "Zeki Çelik", "Ferdi Kadıoğlu", "Mert Müldür", "Samet Akaydin", "Ahmetcan Kaplan", "Hakan Çalhanoğlu", "Okay Yokuşlu", "Kaan Ayhan", "Orkun Kökçü", "Salih Özcan", "Arda Güler", "İsmail Yüksek", "Kenan Yıldız", "Kerem Aktürkoğlu", "İrfan Can Kahveci", "Barış Alper Yılmaz", "Cenk Tosun", "Semih Kılıçsoy", "Enes Ünal", "Yusuf Yazıcı"] },
    "Alemania": { group: "E", firstWC: 1934, totalAppearances: 20, bestResult: "Campeón (1954, 1974, 1990, 2014)", titles: 4, starPlayer: "Jamal Musiala", coach: "Julian Nagelsmann", squad: ["Manuel Neuer", "Marc-André ter Stegen", "Oliver Baumann", "Antonio Rüdiger", "Jonathan Tah", "Joshua Kimmich", "David Raum", "Nico Schlotterbeck", "Waldemar Anton", "Benjamin Henrichs", "Maximilian Mittelstädt", "Toni Kroos", "İlkay Gündoğan", "Florian Wirtz", "Jamal Musiala", "Pascal Groß", "Robert Andrich", "Aleksandar Pavlović", "Chris Führich", "Kai Havertz", "Niclas Füllkrug", "Thomas Müller", "Leroy Sané", "Deniz Undav", "Maximilian Beier", "Serge Gnabry"] },
    "Curazao": { group: "E", firstWC: "Nunca", totalAppearances: 0, bestResult: "No ha participado", titles: 0, starPlayer: "Por confirmar", coach: "Patrick Kluivert", squad: ["Eloy Room", "Tyrick Bodak", "Trevor Doornbusch", "Cuco Martina", "Juriën Gaari", "Roshon van Eijma", "Sherel Floranus", "Justin Ogenia", "Bradley Martis", "Vurnon Anita", "Juninho Bacuna", "Leandro Bacuna", "Godfried Roemeratoe", "Kevin Felida", "Roly Bonevacia", "Kenji Gorré", "Rangelo Janga", "Brandley Kuwas", "Jearl Margaritha", "Jeremy Antonisse", "Anthony van den Hurk", "Gervane Kastaneer", "Jürgen Locadia", "Charlison Benschop"] },
    "Costa de Marfil": { group: "E", firstWC: 2006, totalAppearances: 3, bestResult: "Fase de grupos", titles: 0, starPlayer: "Sébastien Haller", coach: "Emerse Faé", squad: ["Yahia Fofana", "Badra Ali Sangaré", "Charles Folly", "Evan Ndicka", "Ousmane Diomande", "Odilon Kossounou", "Wilfried Singo", "Willy Boly", "Ghislain Konan", "Ismaël Diallo", "Franck Kessié", "Seko Fofana", "Ibrahim Sangaré", "Jérémie Boga", "Lázare Amani", "Jean Thierry Lazare", "Sébastien Haller", "Simon Adingra", "Karim Konaté", "Christian Kouamé", "Oumar Diakité", "Jean-Philippe Krasso", "Nicolas Pépé", "Jonathan Bamba"] },
    "Ecuador": { group: "E", firstWC: 2002, totalAppearances: 4, bestResult: "Octavos de Final (2006)", titles: 0, starPlayer: "Enner Valencia", coach: "Felipeca", squad: ["Alexander Domínguez", "Hernán Galíndez", "Moisés Ramírez", "Piero Hincapié", "Willian Pacho", "Félix Torres", "Angelo Preciado", "Pervis Estupiñán", "Joel Ordóñez", "Layan Loor", "Jackson Porozo", "Moisés Caicedo", "Alan Franco", "Carlos Gruezo", "Kendry Páez", "Jeremy Sarmiento", "John Yeboah", "Janner Corozo", "Ángel Mena", "Alan Minda", "Enner Valencia", "Kevin Rodríguez", "Jordy Caicedo", "Leonardo Campana", "Gonzalo Plata", "Nilson Angulo"] },
    "Países Bajos": { group: "F", firstWC: 1934, totalAppearances: 11, bestResult: "Finalista (1974, 1978, 1988)", titles: 0, starPlayer: "Virgil van Dijk", coach: "Ronald Koeman", squad: ["Bart Verbruggen", "Mark Flekken", "Justin Bijlow", "Virgil van Dijk", "Nathan Aké", "Denzel Dumfries", "Jeremie Frimpong", "Stefan de Vrij", "Micky van de Ven", "Matthijs de Ligt", "Daley Blind", "Frenkie de Jong", "Tijjani Reijnders", "Xavi Simons", "Jerdy Schouten", "Joey Veerman", "Georginio Wijnaldum", "Ryan Gravenberch", "Memphis Depay", "Cody Gakpo", "Donyell Malen", "Wout Weghorst", "Brian Brobbey", "Steven Bergwijn", "Joshua Zirkzee", "Justin Kluivert"] },
    "Japón": { group: "F", firstWC: 1998, totalAppearances: 7, bestResult: "Octavos de Final (2018, 2022)", titles: 0, starPlayer: "Take Kubo", coach: "Hajime Moriyasu", squad: ["Zion Suzuki", "Keisuke Osako", "Kosei Tani", "Ko Itakura", "Shogo Taniguchi", "Takehiro Tomiyasu", "Hiroki Ito", "Yukinari Sugawara", "Koki Machida", "Daiki Hashioka", "Yuto Nagatomo", "Wataru Endo", "Hidemasa Morita", "Ao Tanaka", "Daichi Kamada", "Takumi Minamino", "Ritsu Doan", "Takefusa Kubo", "Kaoru Mitoma", "Keito Nakamura", "Yuki Soma", "Ayase Ueda", "Koki Ogawa", "Takuma Asano", "Mao Hosoya", "Daizen Maeda"] },
    "Suecia": { group: "F", firstWC: 1950, totalAppearances: 12, bestResult: "Finalista (1958)", titles: 0, starPlayer: "Alexander Isak", coach: "Jon Dahl Tomasson", squad: ["Robin Olsen", "Viktor Johansson", "Kristoffer Nordfeldt", "Victor Lindelöf", "Isak Hien", "Ludwig Augustinsson", "Emil Krafth", "Carl Starfelt", "Gabriel Gudmundsson", "Linus Wahlqvist", "Dejan Kulusevski", "Mattias Svanberg", "Jens Cajuste", "Hugo Larsson", "Anton Salétros", "Emil Forsberg", "Samuel Gustafson", "Sebastian Nanasi", "Alexander Isak", "Viktor Gyökeres", "Anthony Elanga", "Gustaf Nilsson", "Jesper Karlsson", "Jacob Ondrejka"] },
    "Túnez": { group: "F", firstWC: 1978, totalAppearances: 6, bestResult: "Fase de grupos", titles: 0, starPlayer: "Youssef Msakni", coach: "FaouziMz", squad: ["Bechir Ben Saïd", "Mouez Hassen", "Aymen Dahmen", "Montassar Talbi", "Yassine Meriah", "Wajdi Kechrida", "Ali Abdi", "Dylan Bronn", "Alaa Ghram", "Yan Valery", "Ellyes Skhiri", "Aïssa Laïdouni", "Mohamed Ali Ben Romdhane", "Hamza Rafia", "Hannibal Mejbri", "Anis Ben Slimane", "Ferjani Sassi", "Elias Achouri", "Youssef Msakni", "Sayfallah Ltaief", "Seifeddine Jaziri", "Haythem Jouini", "Bassem Srarfi", "Ruan Cherni"] },
    "Bélgica": { group: "G", firstWC: 1930, totalAppearances: 14, bestResult: "Tercer lugar (2018)", titles: 0, starPlayer: "Kevin De Bruyne", coach: "Vince", squad: ["Koen Casteels", "Thomas Kaminski", "Matz Sels", "Jan Vertonghen", "Wout Faes", "Timothy Castagne", "Zeno Debast", "Thomas Meunier", "Arthur Theate", "Maxim De Cuyper", "Kevin De Bruyne", "Amadou Onana", "Orel Mangala", "Axel Witsel", "Youri Tielemans", "Arthur Vermeeren", "Aster Vranckx", "Romelu Lukaku", "Jérémy Doku", "Leandro Trossard", "Dodi Lukebakio", "Johan Bakayoko", "Charles De Ketelaere", "Loïs Openda", "Yannick Carrasco"] },
    "Egipto": { group: "G", firstWC: 1934, totalAppearances: 3, bestResult: "Fase de grupos", titles: 0, starPlayer: "Mohamed Salah", coach: "Hossam Hassan", squad: ["Mohamed El Shenawy", "Mostafa Shobeir", "Mohamed Awad", "Mohamed Abdelmonem", "Ahmed Hegazi", "Mohamed Hany", "Rami Rabia", "Mohamed Hamdy", "Ahmed Ramadan", "Marwan Attia", "Hamdi Fathi", "Mohamed Elneny", "Emam Ashour", "Ahmed Sayed Zizo", "Mahmoud Trézéguet", "Mostafa Fathi", "Mohamed Salah", "Mostafa Mohamed", "Omar Marmoush", "Mohamed Sherif", "Ahmed Hassan Kouka", "Obama"] },
    "Irán": { group: "G", firstWC: 1978, totalAppearances: 6, bestResult: "Fase de grupos", titles: 0, starPlayer: "Sardar Azmoun", coach: " Amir", squad: ["Alireza Beiranvand", "Hossein Hosseini", "Payam Niazmand", "Shojae Khalilzadeh", "Hossein Kanaanizadegan", "Milad Mohammadi", "Ramin Rezaeian", "Majid Hosseini", "Sadegh Moharrami", "Saman Ghoddos", "Saeid Ezatolahi", "Alireza Jahanbakhsh", "Mehdi Torabi", "Ali Gholizadeh", "Mohammad Mohebi", "Omid Noorafkan", "Sardar Azmoun", "Mehdi Taremi", "Karim Ansarifard", "Shahriyar Moghanlou"] },
    "Nueva Zelanda": { group: "G", firstWC: 2010, totalAppearances: 2, bestResult: "Fase de grupos", titles: 0, starPlayer: "Chris Wood", coach: "Darren Baz", squad: ["Stefan Marinovic", "Max Crocombe", "Alex Paulsen", "Michael Boxall", "Liberato Cacace", "Tommy Smith", "Nando Pijnaker", "Finn Surman", "Tim Payne", "Dane Ingham", "Joe Bell", "Marko Stamenic", "Matthew Garbett", "Sarpreet Singh", "Cam Howieson", "Clayton Lewis", "Chris Wood", "Kosta Barbarouses", "Ben Waine", "Elijah Just", "Callum McCowatt", "Max Mata", "Alex Greive"] },
    "España": { group: "H", firstWC: 1934, totalAppearances: 12, bestResult: "Campeón (2010)", titles: 1, starPlayer: "Pedri", coach: "Luis de la Fuente", squad: ["Unai Simón", "David Raya", "Álex Remiro", "Dani Carvajal", "Jesús Navas", "Aymeric Laporte", "Robin Le Normand", "Nacho Fernández", "Dani Vivian", "Alejandro Grimaldo", "Marc Cucurella", "Rodrigo Hernández", "Martin Zubimendi", "Fabián Ruiz", "Mikel Merino", "Pedri", "Fermín López", "Álex Baena", "Lamine Yamal", "Dani Olmo", "Nico Williams", "Álvaro Morata", "Joselu", "Mikel Oyarzabal", "Ferran Torres", "Ayoze Pérez"] },
    "Cabo Verde": { group: "H", firstWC: 2006, totalAppearances: 2, bestResult: "Fase de grupos", titles: 0, starPlayer: "Nuno Santos", coach: "Pedro", squad: ["Vozinha", "Dylan Silva", "Jojo", "Logan Costa", "Roberto Lopes", "Stopira", "Dylan Tavares", "Pico", "Steven Moreira", "Jovane Cabral", "Jamiro Monteiro", "Patrick Andrade", "Kenny Rocha", "Deroy Duarte", "Cuca", "Kevin Pina", "Ryan Mendes", "Garry Rodrigues", "Bebé", "Bryan Teixeira", "Willy Semedo", "Gilson Tavares", "Dailon Livramento", "Helio Varela"] },
    "Arabia Saudita": { group: "H", firstWC: 1994, totalAppearances: 6, bestResult: "Octavos de Final (1994)", titles: 0, starPlayer: "Sami Al Jaber", coach: "Roberto", squad: ["Mohammed Al-Owais", "Yasser Al-Mosailem", "Nawaf Al-Aqidi", "Ali Al-Bulaihi", "Yasser Al-Shahrani", "Saud Abdulhamid", "Sultan Al-Ghannam", "Hassan Tambakti", "Abdulelah Al-Amri", "Salman Al-Faraj", "Salem Al-Dawsari", "Mohamed Kanno", "Abdullah Otayf", "Sami Al-Najei", "Abdulrahman Ghareeb", "Ali Al-Hassan", "Firas Al-Buraikan", "Saleh Al-Shehri", "Abdullah Al-Hamdan", "Mohammed Maran"] },
    "Uruguay": { group: "H", firstWC: 1930, totalAppearances: 14, bestResult: "Campeón (1930, 1950)", titles: 2, starPlayer: "Federico Valverde", coach: "Marcelo Bielsa", squad: ["Sergio Rochet", "Santiago Mele", "Franco Israel", "Ronald Araújo", "José María Giménez", "Sebastian Cáceres", "Nicolás Marichal", "Mathías Olivera", "Lucas Olaza", "Matías Viña", "Guillermo Varela", "Nahitan Nández", "Federico Valverde", "Rodrigo Bentancur", "Manuel Ugarte", "Nicolás de la Cruz", "Giorgian de Arrascaeta", "Agustín Canobbio", "Brian Rodríguez", "Facundo Pellistri", "Maximiliano Araújo", "Cristian Olivera", "Facundo Torres", "Darwin Núñez", "Luis Suárez", "Luciano Rodríguez"] },
    "Francia": { group: "I", firstWC: 1930, totalAppearances: 16, bestResult: "Campeón (1998, 2018)", titles: 2, starPlayer: "Kylian Mbappé", coach: "Didier Deschamps", squad: ["Mike Maignan", "Brice Samba", "Alphonse Areola", "William Saliba", "Dayot Upamecano", "Ibrahima Konaté", "Jules Koundé", "Benjamin Pavard", "Theo Hernandez", "Ferland Mendy", "Jonathan Clauss", "N'Golo Kanté", "Aurélien Tchouaméni", "Eduardo Camavinga", "Adrien Rabiot", "Warren Zaïre-Emery", "Youssouf Fofana", "Kylian Mbappé", "Antoine Griezmann", "Ousmane Dembélé", "Marcus Thuram", "Olivier Giroud", "Randal Kolo Muani", "Kingsley Coman", "Bradley Barcola"] },
    "Senegal": { group: "I", firstWC: 2002, totalAppearances: 3, bestResult: "Finalista (2002)", titles: 0, starPlayer: "Sadio Mané", coach: "Aliou Cissé", squad: ["Édouard Mendy", "Mory Diaw", "Seny Dieng", "Kalidou Koulibaly", "Abdou Diallo", "Moussa Niakhaté", "Formose Mendy", "Ismail Jakobs", "Abdoulaye Seck", "Fodé Ballo-Touré", "Idrissa Gueye", "Cheikhou Kouyaté", "Lamine Camara", "Pape Matar Sarr", "Pape Gueye", "Nampalys Mendy", "Pathé Ciss", "Sadio Mané", "Ismaïla Sarr", "Nicolas Jackson", "Iliman Ndiaye", "Habib Diallo", "Boulaye Dia", "Famara Diédhiou"] },
    "Irak": { group: "I", firstWC: 1986, totalAppearances: 4, bestResult: "Fase de grupos", titles: 0, starPlayer: "Ahmad Falak", coach: "Jesus", squad: ["Jalal Hassan", "Ahmed Basil", "Fahad Talib", "Rebin Sulaka", "Saad Natiq", "Ali Adnan", "Frans Putros", "Merchas Doski", "Hussein Ali", "Mustafa Saadoun", "Amir Al-Ammari", "Osama Rashid", "Bashar Resan", "Ibrahim Bayesh", "Zidane Iqbal", "Youssef Amyn", "Montader Madjed", "Ali Jasim", "Aymen Hussein", "Mohanad Ali", "Pashang Abdulla"] },
    "Noruega": { group: "I", firstWC: 1938, totalAppearances: 4, bestResult: "Cuartos de Final (1938)", titles: 0, starPlayer: "Erling Haaland", coach: "Ståle Solbakken", squad: ["Ørjan Nyland", "Mathias Dyngeland", "Egil Selvik", "Leo Østigård", "Kristoffer Ajer", "Andreas Hanche-Olsen", "Marcus Holmgren Pedersen", "Julian Ryerson", "David Møller Wolfe", "Martin Ødegaard", "Sander Berge", "Patrick Berg", "Kristian Thorstvedt", "Hugo Vetlesen", "Aron Dønnum", "Antonio Nusa", "Erling Haaland", "Alexander Sørloth", "Jörgen Strand Larsen", "Osame Sahraoui"] },
    "Argentina": { group: "J", firstWC: 1930, totalAppearances: 18, bestResult: "Campeón (1978, 1986, 2022)", titles: 3, starPlayer: "Lionel Messi", coach: "Lionel Scaloni", squad: ["Emiliano Martínez", "Gerónimo Rulli", "Walter Benítez", "Nahuel Molina", "Gonzalo Montiel", "Cristian Romero", "Nicolás Otamendi", "Lisandro Martínez", "Germán Pezzella", "Nicolás Tagliafico", "Marcos Acuña", "Rodrigo De Paul", "Leandro Paredes", "Alexis Mac Allister", "Enzo Fernández", "Giovani Lo Celso", "Exequiel Palacios", "Guido Rodríguez", "Valentin Carboni", "Lionel Messi", "Ángel Di María", "Julián Álvarez", "Lautaro Martínez", "Nicolás González", "Alejandro Garnacho", "Thiago Almada"] },
    "Argelia": { group: "J", firstWC: 1982, totalAppearances: 4, bestResult: "Fase de grupos", titles: 0, starPlayer: "Riyad Mahrez", coach: "Vladimir Petkovic", squad: ["Anthony Mandrea", "Alexandre Oukidja", "Mustapha Zeghba", "Ramy Bensebaini", "Aïssa Mandi", "Rayan Aït-Nouri", "Youcef Atal", "Kevin Guitoun", "Mohamed Amine Tougai", "Ismaël Bennacer", "Ramiz Zerrouki", "Houssem Aouar", "Hicham Boudaoui", "Nabil Bentaleb", "Riyad Mahrez", "Said Benrahma", "Amine Gouiri", "Baghdad Bounedjah", "Mohamed Amoura", "Farès Chaïbi", "Yassine Benzia"] },
    "Austria": { group: "J", firstWC: 1934, totalAppearances: 8, bestResult: "Tercer lugar (1954)", titles: 0, starPlayer: "David Alaba", coach: "Ralf Rangnick", squad: ["Heinz Lindner", "Patrick Pentz", "Niklas Hedl", "Stefan Posch", "Kevin Danso", "Maximilian Wöber", "Philipp Lienhart", "Leopold Querfeld", "Phillipp Mwene", "Marcel Sabitzer", "Konrad Laimer", "Christoph Baumgartner", "Florian Grillitsch", "Nicolas Seiwald", "Romano Schmid", "Patrick Wimmer", "Michael Gregoritsch", "Marko Arnautović", "Andreas Weimann", "Maximilian Entrup"] },
    "Jordania": { group: "J", firstWC: "Nunca", totalAppearances: 0, bestResult: "No ha participado", titles: 0, starPlayer: "Musa Al-Taamari", coach: "Hassan", squad: ["Yazid Abu Layla", "Abdallah Al-Fakhouri", "Ahmad Juaidi", "Yazan Al-Arab", "Abdallah Nasib", "Salem Al-Ajalin", "Ihsan Haddad", "Mohammad Abu Hashish", "Feras Shelbaieh", "Nizar Al-Rashdan", "Noor Al-Rawabdeh", "Mahmoud Al-Mardi", "Raja'ei Ayed", "Saleh Rateb", "Mousa Al-Tamari", "Yazan Al-Naimat", "Ali Olwan", "Anas Al-Awarat", "Hamza Al-Dardour"] },
    "Portugal": { group: "K", firstWC: 1966, totalAppearances: 8, bestResult: "Tercer lugar (1966)", titles: 0, starPlayer: "Cristiano Ronaldo", coach: "Roberto Martínez", squad: ["Diogo Costa", "José Sá", "Rui Patrício", "João Cancelo", "Nélson Semedo", "Rúben Dias", "Pepe", "António Silva", "Gonçalo Inácio", "Danilo Pereira", "Nuno Mendes", "Diogo Dalot", "João Palhinha", "João Neves", "Rúben Neves", "Vitinha", "Otávio", "Bruno Fernandes", "Bernardo Silva", "Rafael Leão", "João Félix", "Pedro Neto", "Francisco Conceição", "Gonçalo Ramos", "Diogo Jota", "Cristiano Ronaldo"] },
    "Rep. Dem. del Congo": { group: "K", firstWC: 1974, totalAppearances: 2, bestResult: "Fase de grupos", titles: 0, starPlayer: "Chancel Mbemba", coach: "Mbungo", squad: ["Lionel Mpasi", "Dimitry Bertaud", "Baggis Siadi", "Chancel Mbemba", "Dylan Batubinsika", "Henoc Inonga", "Gédéon Kalulu", "Arthur Masuaku", "Joris Kayembe", "Samuel Moutoussamy", "Charles Pickel", "Aaron Tshibola", "Gaël Kakuta", "Theo Bongonda", "Meschack Elia", "Yoane Wissa", "Cédric Bakambu", "Simon Banza", "Fiston Mayele", "Silas Katompa"] },
    "Uzbekistán": { group: "K", firstWC: "Nunca", totalAppearances: 0, bestResult: "No ha participado", titles: 0, starPlayer: "Eldor Shomurodov", coach: " Timur", squad: ["Utkir Yusupov", "Abduvohid Nematov", "Botirali Ergashev", "Abdukodir Khusanov", "Rustam Ashurmatov", "Umar Eshmurodov", "Husniddin Aliqulov", "Farrukh Sayfiev", "Khojiakbar Alijonov", "Otabek Shukurov", "Odiljon Hamrobekov", "Jaloliddin Masharipov", "Oston Urunov", "Abbosbek Fayzullaev", "Jamshid Iskanderov", "Eldor Shomurodov", "Igor Sergeev", "Jasur Yakhshiboev"] },
    "Colombia": { group: "K", firstWC: 1962, totalAppearances: 6, bestResult: "Cuartos de Final (2014)", titles: 0, starPlayer: "James Rodriguez", coach: "Néstor Lorenzo", squad: ["Camilo Vargas", "Álvaro Montero", "Kevin Mier", "Daniel Muñoz", "Santiago Arias", "Davinson Sánchez", "Carlos Cuesta", "Jhon Lucumí", "Yerry Mina", "Johan Mojica", "Deiver Machado", "Jefferson Lerma", "Richard Ríos", "Jhon Arias", "Kevin Castaño", "Mateus Uribe", "Jorge Carrascal", "James Rodríguez", "Juan Fernando Quintero", "Luis Díaz", "Jhon Jáder Durán", "Jhon Córdoba", "Rafael Santos Borré", "Luis Sinisterra", "Yáser Asprilla", "Jhon Solís"] },
    "Inglaterra": { group: "L", firstWC: 1950, totalAppearances: 16, bestResult: "Campeón (1966)", titles: 1, starPlayer: "Jude Bellingham", coach: "Thomas Tuchel", squad: ["Jordan Pickford", "Aaron Ramsdale", "Dean Henderson", "Kyle Walker", "John Stones", "Harry Maguire", "Kieran Trippier", "Joe Gomez", "Lewis Dunk", "Ezri Konsa", "Declan Rice", "Jude Bellingham", "Conor Gallagher", "Trent Alexander-Arnold", "Kobbie Mainoo", "Adam Wharton", "Harry Kane", "Bukayo Saka", "Phil Foden", "Cole Palmer", "Ollie Watkins", "Jarrod Bowen", "Eberechi Eze", "Anthony Gordon", "Ivan Toney"] },
    "Croacia": { group: "L", firstWC: 1998, totalAppearances: 6, bestResult: "Finalista (2018)", titles: 0, starPlayer: "Luka Modric", coach: "Zlatko Dalic", squad: ["Dominik Livaković", "Ivica Ivušić", "Nediljko Labrović", "Joško Gvardiol", "Domagoj Vida", "Josip Šutalo", "Martin Erlić", "Borna Sosa", "Josip Stanišić", "Josip Juranović", "Luka Modrić", "Mateo Kovačić", "Marcelo Brozović", "Mario Pašalić", "Lovro Majer", "Luka Sučić", "Martin Baturina", "Ivan Perišić", "Andrej Kramarić", "Bruno Petković", "Ante Budimir", "Luka Ivanušec", "Marco Pašalić"] },
    "Ghana": { group: "L", firstWC: 2006, totalAppearances: 4, bestResult: "Cuartos de Final (2010)", titles: 0, starPlayer: "Mohamed Kudus", coach: "Chris Hughton", squad: ["Lawrence Ati-Zigi", "Joseph Wollacott", "Abdul Manaf Nurudeen", "Mohammed Salisu", "Alidu Seidu", "Alexander Djiku", "Tariq Lamptey", "Gideon Mensah", "Denis Odoi", "Abdul Fatawu Issahaku", "Thomas Partey", "Mohammed Kudus", "Salis Abdul Samed", "Elisha Owusu", "Majeed Ashimeru", "Jordan Ayew", "Inaki Williams", "Antoine Semenyo", "Ernest Nuamah", "Osman Bukari"] },
    "Panamá": { group: "L", firstWC: 2018, totalAppearances: 2, bestResult: "Fase de grupos", titles: 0, starPlayer: "Tomasolina", coach: "Dir. Tec", squad: ["Orlando Mosquera", "Luis Mejía", "César Samudio", "José Córdoba", "Fidel Escobar", "Andrés Andrade", "Michael Amir Murillo", "Eric Davis", "César Blackman", "Jovani Welch", "Adalberto Carrasquilla", "Cristian Martínez", "Aníbal Godoy", "Alberto Quintero", "Edgar Yoel Bárcenas", "José Luis Rodríguez", "Ismael Díaz", "Cecilio Waterman", "Eduardo Guerrero", "José Fajardo"] }
};

// ===== FIREBASE INIT =====
const firebaseConfig = {
    apiKey: "AIzaSyCT-3BZSpeOYbt_H7tiIYWLSMT65WKoUrU",
    authDomain: "mundial-2026-1846b.firebaseapp.com",
    projectId: "mundial-2026-1846b",
    storageBucket: "mundial-2026-1846b.firebasestorage.app",
    messagingSenderId: "836463033638",
    appId: "1:836463033638:web:1845f56014b2c2a6a5d5e7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db;

// ===== SISTEMA DE ROLES =====

function getUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
}

function saveUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function getCurrentUser() {
    const data = localStorage.getItem('usuarioActual');
    if (!data) return null;
    try {
        return JSON.parse(data);
    } catch(e) { return null; }
}

function getUserRole() {
    const user = getCurrentUser();
    if (!user) return null;
    return user.role || 'usuario';
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function isAdmin() {
    return getUserRole() === 'admin';
}

function hasAnyAdmin() {
    return getUsuarios().some(u => u.role === 'admin');
}

function autoPromoteFirstAdmin() {
    const usuarios = getUsuarios();
    if (usuarios.length > 0 && !hasAnyAdmin()) {
        usuarios[0].role = 'admin';
        saveUsuarios(usuarios);
        
        const currentUser = getCurrentUser();
        if (currentUser && currentUser.email === usuarios[0].email) {
            currentUser.role = 'admin';
            localStorage.setItem('usuarioActual', JSON.stringify(currentUser));
        }
        console.log('Auto-promoted first user to admin:', usuarios[0].email);
    }
}

function syncUserRole() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.email) return;
    
    const usuarios = getUsuarios();
    const userInDb = usuarios.find(u => u.email === currentUser.email);
    if (userInDb && userInDb.role && userInDb.role !== currentUser.role) {
        currentUser.role = userInDb.role;
        localStorage.setItem('usuarioActual', JSON.stringify(currentUser));
        console.log('Synced user role for:', currentUser.email, '->', userInDb.role);
    }
}

// ===== FIN SISTEMA DE ROLES =====

function init() {
    const usuarioData = localStorage.getItem('usuarioActual');
    if (usuarioData) {
        try {
            const usuario = JSON.parse(usuarioData);
            if (usuario && usuario.email) {
                mostrarMiCuenta(usuario.nombre, usuario.email);
            }
        } catch(e) {}
    }
    
    try { renderNav(); } catch(e) {}
    try { renderVenues(); } catch(e) {}
    try { renderGroups(); } catch(e) {}
    try { renderMatches(); } catch(e) {}
    try { renderCalendar(); } catch(e) {}
    try { renderQuiniela(); } catch(e) {}
    try { startCountdown(); } catch(e) {}
    try { setupEventListeners(); } catch(e) {}
    try { loadQuinielaFromStorage(); } catch(e) {}
    try { setupScrollSpy(); } catch(e) {}
    setTimeout(checkPaniniAccess, 500);
    try { cargarResultados(); } catch(e) {}
    
    // Firebase Auth state listener
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            const cached = getCurrentUser();
            if (!cached || cached.uid !== user.uid) {
                db.collection('perfiles').doc(user.uid).get()
                    .then(doc => {
                        if (doc.exists) {
                            const data = doc.data();
                            localStorage.setItem('usuarioActual', JSON.stringify({
                                uid: user.uid,
                                nombre: data.nombre,
                                email: data.email,
                                pais: data.pais || '',
                                role: data.role || 'usuario',
                                foto: data.foto || ''
                            }));
                            renderNav();
                            if (document.getElementById('profileName')) {
                                document.getElementById('profileName').textContent = data.nombre;
                            }
                        }
                    })
                    .catch(e => console.log('Error loading profile:', e));
            }
        } else {
            if (getCurrentUser() && !getCurrentUser()._localOnly) {
                localStorage.removeItem('usuarioActual');
                renderNav();
            }
        }
    });
}

function renderNav() {
    const usuarioData = localStorage.getItem('usuarioActual');
    let usuario = null;
    if (usuarioData) {
        try {
            usuario = JSON.parse(usuarioData);
        } catch(e) {}
    }
    
    const crearCuentaLink = document.querySelector('nav a[href="#crear-cuenta"]');
    const iniciarSesionLink = document.querySelector('nav a[href="#iniciar-sesion"]');
    const miCuentaLink = document.getElementById('navMiCuenta');
    const adminLink = document.getElementById('navAdmin');
    
    if (usuario && usuario.email) {
        if (crearCuentaLink) crearCuentaLink.style.display = 'none';
        if (iniciarSesionLink) iniciarSesionLink.style.display = 'none';
        if (miCuentaLink) miCuentaLink.style.display = 'inline';
        if (adminLink) adminLink.style.display = isAdmin() ? 'inline' : 'none';
    } else {
        if (crearCuentaLink) crearCuentaLink.style.display = 'inline';
        if (iniciarSesionLink) iniciarSesionLink.style.display = 'inline';
        if (miCuentaLink) miCuentaLink.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
    }
    
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            showSection(section);
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function showSection(sectionId) {
    if (sectionId === 'admin') {
        if (!isAdmin()) {
            alert('Acceso denegado. Solo administradores pueden acceder a esta sección.');
            showSection('inicio');
            return;
        }
        renderAdminPanel();
    }
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.querySelectorAll('header nav a').forEach(a => {
        a.style.color = '#666680';
        a.style.fontWeight = '600';
        a.style.borderBottom = 'none';
        if (a.getAttribute('href') === '#' + sectionId) {
            a.style.color = '#d4af37';
            a.style.fontWeight = '700';
            a.style.borderBottom = '2px solid #d4af37';
            a.style.paddingBottom = '4px';
        }
    });
}

function irAIniciarSesion() {
    showSection('iniciar-sesion');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.section === 'iniciar-sesion') {
            btn.classList.add('active');
        }
    });
}

function irACrearCuenta() {
    showSection('crear-cuenta');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.section === 'crear-cuenta') {
            btn.classList.add('active');
        }
    });
}

function renderVenues() {
    const countryCode = { "México": "mx", "Estados Unidos": "us", "Canadá": "ca" };
    const grid = document.getElementById('venuesGrid');
    grid.innerHTML = venues.map(v => {
        const flagCode = countryCode[v.country];
        const flagImg = flagCode ? `<img src="flags/${flagCode}.png" alt="${v.country}" class="venue-flag-img" style="height:36px" loading="lazy">` : `<span class="venue-flag-emoji">${teamEmojis[v.country]}</span>`;
        const info = venuesInfo[v.stadium];
        const stadiumImg = v.image ? `<div class="venue-image-wrapper"><img src="${v.image}" alt="${v.stadium}" style="width:100%;height:200px;object-fit:cover;" loading="lazy" onerror="this.style.display='none'"></div>` : '';
        const infoSection = info ? `
            <div class="venue-info-compact">
                <span>${info.opened}</span>
                <span>•</span>
                <span>${info.capacity.toLocaleString()}</span>
                <span>•</span>
                <span>${info.worldCup}</span>
            </div>
        ` : '';
        return `
        <div class="venue-card" onclick="showVenueInfo('${v.stadium}')" style="display:flex;flex-direction:column;border-radius:12px;overflow:hidden;cursor:pointer;">
            ${stadiumImg}
            <div class="venue-content">
                <div class="venue-header">
                    ${flagImg}
                    <div>
                        <div class="venue-country">${v.country}</div>
                        <div class="venue-city">${v.city}</div>
                    </div>
                </div>
                <div class="venue-stadium">${v.stadium}</div>
                <div class="venue-capacity">Capacidad: ${v.capacity.toLocaleString()}</div>
                ${infoSection}
            </div>
        </div>
    `}).join('');
}

function showVenueInfo(stadiumName) {
    const v = venuesInfo[stadiumName];
    if (!v) return;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${v.coordinates}`;
    const venueObj = venues.find(ven => ven.stadium === stadiumName);
    const stadiumImg = venueObj && venueObj.image ? venueObj.image : '';
    const modal = document.createElement('div');
    modal.className = 'venue-modal';
    modal.innerHTML = `
        <div class="venue-modal-content" onclick="event.stopPropagation()">
            ${stadiumImg ? `<div class="venue-modal-img-header"><img src="${stadiumImg}" alt="${v.name}" loading="lazy"><div class="venue-modal-img-overlay"></div><div class="venue-modal-img-title"><h2>${v.name}</h2><p class="venue-modal-location">${v.city}, ${v.country}</p></div><span class="venue-modal-close-img" onclick="closeVenueModal()">&times;</span></div>` : `
            <div class="venue-modal-header">
                <div>
                    <h2>${v.name}</h2>
                    <p class="venue-modal-location">${v.city}, ${v.country}</p>
                </div>
                <span class="venue-modal-close" onclick="closeVenueModal()">&times;</span>
            </div>`}
            <div class="venue-modal-body">
                <div class="venue-modal-section">
                    <h3><span class="section-icon">🏟️</span> Información Básica</h3>
                    <div class="venue-modal-grid">
                        <div class="venue-modal-item"><span class="label">Capacidad</span><span class="value">${v.capacity.toLocaleString()}</span></div>
                        <div class="venue-modal-item"><span class="label">Inauguración</span><span class="value">${v.opened}</span></div>
                        <div class="venue-modal-item"><span class="label">Equipo local</span><span class="value">${v.teams}</span></div>
                        <div class="venue-modal-item"><span class="label">Superficie</span><span class="value">${v.surface}</span></div>
                    </div>
                </div>
                <div class="venue-modal-section">
                    <h3><span class="section-icon">📍</span> Ubicación</h3>
                    <div class="venue-modal-item full"><span class="label">Dirección</span><span class="value">${v.address}</span></div>
                    <div class="venue-modal-item full"><span class="label">Coordenadas</span><span class="value">${v.coordinates}</span></div>
                    <a href="${mapsUrl}" target="_blank" rel="noopener" class="venue-modal-map-btn">📍 Ver en Google Maps</a>
                </div>
                <div class="venue-modal-section highlight-section">
                    <h3><span class="section-icon">⚽</span> Mundial 2026</h3>
                    <div class="venue-modal-item full"><span class="label">Partidos</span><span class="value highlight">${v.worldCup}</span></div>
                </div>
                <div class="venue-modal-section">
                    <h3><span class="section-icon">🏗️</span> Infraestructura</h3>
                    <div class="venue-modal-grid">
                        <div class="venue-modal-item"><span class="label">Tipo</span><span class="value">${v.type}</span></div>
                        <div class="venue-modal-item"><span class="label">Techo</span><span class="value">${v.roof}</span></div>
                        <div class="venue-modal-item"><span class="label">Pantallas</span><span class="value">${v.screen}</span></div>
                    </div>
                </div>
                <div class="venue-modal-section">
                    <h3><span class="section-icon">🌦️</span> Clima</h3>
                    <div class="venue-modal-grid">
                        <div class="venue-modal-item"><span class="label">Temperatura</span><span class="value">${v.temp}</span></div>
                        <div class="venue-modal-item"><span class="label">Altitud</span><span class="value">${v.altitude}</span></div>
                    </div>
                </div>
                <div class="venue-modal-section">
                    <h3><span class="section-icon">⭐</span> Curiosidades</h3>
                    <p class="venue-facts">${v.facts}</p>
                </div>
            </div>
            <button class="venue-modal-close-btn" onclick="closeVenueModal()">Cerrar</button>
        </div>
    `;
    modal.onclick = closeVenueModal;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
}

function closeVenueModal() {
    const modal = document.querySelector('.venue-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVenueModal();
        const modal = document.getElementById('modalEditarPerfil');
        if (modal && modal.style.display === 'flex') {
            cerrarModalPerfil();
        }
    }
});

function renderGroups() {
    const container = document.getElementById('groupsGrid');
    container.innerHTML = groups.map(g => `
        <div class="group-card">
            <div class="group-header">
                <span class="group-name">Grupo ${g.name}</span>
            </div>
            <div class="group-teams">
                ${g.teams.map(t => `
                    <div class="team-item" onClick="window.showTeamInfo('${t.name}')">
                        ${getTeamImage(t.name)}
                        <span class="team-name">${t.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function showTeamInfo(teamName) {
    const teamData = teamInfoData[teamName];
    if (!teamData) {
        alert("Información no disponible para " + teamName);
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'team-modal';
    modal.innerHTML = `
        <div class="team-modal-content" onclick="event.stopPropagation()">
            <div class="team-modal-header">
                <div class="team-modal-flag">${getTeamImage(teamName, "large")}</div>
                <div>
                    <h2>${teamName}</h2>
                    <p class="team-group-badge">Grupo ${teamData.group}</p>
                </div>
                <span class="team-modal-close" onclick="closeTeamModal()">&times;</span>
            </div>
            <div class="team-modal-body">
                <div class="team-modal-section">
                    <h3>📊 HISTORIAL EN MUNDIALES</h3>
                    <div class="team-modal-grid">
                        <div class="team-modal-item"><span>Primera vez</span><span>${teamData.firstWC}</span></div>
                        <div class="team-modal-item"><span>Participaciones</span><span>${teamData.totalAppearances}</span></div>
                        <div class="team-modal-item"><span>Mejor resultado</span><span>${teamData.bestResult}</span></div>
                        <div class="team-modal-item"><span>Títulos</span><span>${teamData.titles}</span></div>
                    </div>
                </div>
                ${teamData.squad && teamData.squad.length > 0 ? `
                <div class="team-modal-section">
                    <h3>📋 LISTA DE CONVOCADOS</h3>
                    <div class="team-squad-list">
                        ${teamData.squad.map(p => `<span class="squad-player">${p}</span>`).join('')}
                    </div>
                </div>
                ` : `
                <div class="team-modal-section">
                    <h3>📋 Convocatoria</h3>
                    <p class="team-squad-note">Lista de convocados por confirmar</p>
                </div>
                `}
                ${teamData.starPlayer && teamData.starPlayer !== "Por confirmar" ? `
                <div class="team-modal-section star-player">
                    <h3>⭐ ESTRELLA DEL EQUIPO</h3>
                    <p class="highlight-name">${teamData.starPlayer}</p>
                </div>
                <div class="team-modal-section">
                    <h3>👨‍🏫 DIRECTOR TÉCNICO</h3>
                    <p class="highlight-name">${teamData.coach}</p>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    modal.onclick = closeTeamModal;
    document.body.appendChild(modal);
}

function closeTeamModal() {
    const modal = document.querySelector('.team-modal');
    if (modal) modal.remove();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTeamModal();
});

function renderMatches() {
    const list = document.getElementById('matchList');
    const groupFilter = document.getElementById('groupFilter');
    
    const sortedMatches = [...matches].sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time));
    
    const uniqueGroups = [...new Set(matches.map(m => m.group))];
    const groupLabels = {
        "16avos": "Dieciseisavos de Final",
        "Octavos": "Octavos de Final",
        "Cuartos": "Cuartos de Final",
        "Semifinal": "Semifinales",
        "3° lugar": "Tercer Lugar",
        "Final": "Final"
    };
    groupFilter.innerHTML = '<option value="all">Todos los partidos</option>' + 
        uniqueGroups.map(g => `<option value="${g}">${groupLabels[g] || 'Grupo ' + g}</option>`).join('');
    
    groupFilter.addEventListener('change', () => {
        const filterMatches = groupFilter.value === 'all' 
            ? sortedMatches 
            : sortedMatches.filter(m => m.group === groupFilter.value);
        list.innerHTML = renderMatchCards(filterMatches);
    });
    
    list.innerHTML = renderMatchCards(sortedMatches);
}

function renderMatchCards(matchList) {
    const groupLabels = {
        "16avos": "16avos",
        "Octavos": "Octavos",
        "Cuartos": "Cuartos",
        "Semifinal": "Semifinal",
        "3° lugar": "3° lugar",
        "Final": "Final"
    };
    
    return matchList.map(m => {
        const isKnockout = ["16avos", "Octavos", "Cuartos", "Semifinal", "3° lugar", "Final"].includes(m.group);
        const labelText = groupLabels[m.group] || 'Grupo ' + m.group;
        
        const flag1 = isKnockout ? '<span style="font-size:1.5rem;">🏳️</span>' : getTeamImage(m.team1, "small");
        const flag2 = isKnockout ? '<span style="font-size:1.5rem;">🏳️</span>' : getTeamImage(m.team2, "small");
        
        const matchIndex = matches.findIndex(mm =>
            mm.date === m.date && mm.time === m.time &&
            mm.team1 === m.team1 && mm.team2 === m.team2 &&
            mm.group === m.group
        );
        const res = matchIndex >= 0 && resultadosPartidos ? resultadosPartidos[matchIndex] : null;
        const s1 = res !== null ? res.score1 : '-';
        const s2 = res !== null ? res.score2 : '-';
        
        return `
        <div class="match-card" data-match-key="${m.group}-${m.team1}-${m.team2}-${m.date}" style="display:flex;flex-direction:column;gap:10px;padding:20px;background:#0f172a;border-left:4px solid #f0c040;border-radius:8px;margin-bottom:15px;transition:0.2s;cursor:pointer;" onmouseover="this.style.background='#1e293b'" onmouseout="this.style.background='#0f172a'">
            <div class="match-info" style="display:flex;justify-content:space-between;align-items:center;">
                <span class="match-date" style="color:#94a3b8;font-size:0.9rem;">${formatDate(m.date, m.time)}</span>
                <span class="match-group" style="background:#f0c040;color:#0f172a;font-size:0.8rem;font-weight:700;padding:4px 12px;border-radius:12px;">${labelText}</span>
            </div>
            <div class="match-teams" style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:20px;">
                <div class="team-left" style="display:flex;flex-direction:row;align-items:center;gap:10px;text-align:right;flex:1;justify-content:flex-end;">
                    <span class="team-name" style="color:#ffffff;font-weight:700;font-size:1.1rem;white-space:nowrap;">${m.team1}</span>
                    ${flag1}
                </div>
                <div class="match-score" style="display:flex;align-items:center;gap:8px;background:#0a0f2c;padding:10px 20px;border-radius:8px;">
                    <span style="color:#f0c040;font-size:1.5rem;font-weight:700;">${s1}</span>
                    <span style="color:#f0c040;font-size:1.5rem;font-weight:700;">${s2}</span>
                </div>
                <div class="team-right" style="display:flex;flex-direction:row;align-items:center;gap:10px;text-align:left;flex:1;justify-content:flex-start;">
                    ${flag2}
                    <span class="team-name" style="color:#ffffff;font-weight:700;font-size:1.1rem;white-space:nowrap;">${m.team2}</span>
                </div>
            </div>
            <div class="match-venue" style="display:flex;justify-content:center;gap:20px;color:#64748b;font-size:0.85rem;">
                <span>${m.venue}</span>
                <span>•</span>
                <span>${m.time}</span>
            </div>
        </div>
    `}).join('');
}

function renderCalendar() {
    const container = document.getElementById('calendarGrid');
    
    const matchesByDate = {};
    matches.forEach(m => {
        if (!matchesByDate[m.date]) {
            matchesByDate[m.date] = [];
        }
        matchesByDate[m.date].push(m);
    });
    
    const allDates = Object.keys(matchesByDate).sort();
    const startDate = new Date(allDates[0] + 'T12:00:00');
    const endDate = new Date(allDates[allDates.length - 1] + 'T12:00:00');
    
    const startMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
    const endMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);
    
    let html = '';
    
    for (let month = startMonth; month <= endMonth; month.setMonth(month.getMonth() + 1)) {
        const currentMonth = new Date(month);
        const monthName = currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
        const year = currentMonth.getFullYear();
        const monthIndex = currentMonth.getMonth();
        
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        
        const monthStart = new Date(year, monthIndex, 1);
        const monthEnd = new Date(year, monthIndex + 1, 0);
        
        const monthMatches = allDates.filter(d => {
            const dObj = new Date(d + 'T12:00:00');
            return dObj >= monthStart && dObj <= monthEnd;
        });
        
        if (monthMatches.length === 0) continue;
        
        html += `
        <div class="calendar-month">
            <h3 class="calendar-month-title">${monthName}</h3>
            <div class="calendar-grid">
                <div class="calendar-weekday">Dom</div>
                <div class="calendar-weekday">Lun</div>
                <div class="calendar-weekday">Mar</div>
                <div class="calendar-weekday">Mié</div>
                <div class="calendar-weekday">Jue</div>
                <div class="calendar-weekday">Vie</div>
                <div class="calendar-weekday">Sáb</div>`;
        
        const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
        for (let i = 0; i < firstDayOfWeek; i++) {
            html += `<div class="calendar-day-cell empty"></div>`;
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayMatches = matchesByDate[dateStr] || [];
            
            if (dayMatches.length > 0) {
                const dayName = new Date(dateStr + 'T12:00:00').toLocaleDateString('es-ES', { weekday: 'short' });
                
                let matchesHtml = '';
                dayMatches.sort((a, b) => {
                    const timeA = a.time.replace(':', '');
                    const timeB = b.time.replace(':', '');
                    return parseInt(timeA) - parseInt(timeB);
                });
                
                dayMatches.forEach(m => {
                    const timeObj = new Date(`2026-01-01T${m.time}`);
                    const timeStr = timeObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
                    const isGroupStage = /^[A-L]$/.test(m.group);
                    const clickableClass = isGroupStage ? 'clickable-match' : '';
                    const clickAttr = isGroupStage ? ` onclick="redirectToMatch('${m.group}','${m.team1}','${m.team2}','${m.date}')"` : '';
                    matchesHtml += `
                    <div class="calendar-day-match${clickableClass}"${clickAttr}>
                        <div class="cal-match-header">
                            <span class="cal-match-time">${timeStr}</span>
                            <span class="cal-match-group-badge">${m.group}</span>
                        </div>
                        <div class="cal-match-teams">
                            <div class="cal-match-team">
                                ${getTeamImage(m.team1, "medium")}
                                <span class="cal-match-team-name">${m.team1}</span>
                            </div>
                            <span class="cal-match-vs">vs</span>
                            <div class="cal-match-team">
                                ${getTeamImage(m.team2, "medium")}
                                <span class="cal-match-team-name">${m.team2}</span>
                            </div>
                        </div>
                        <div class="cal-match-venue">
                            <span>📍</span> ${m.venue}
                        </div>
                    </div>`;
                });
                
                html += `
                <div class="calendar-day-cell has-matches">
                    <div class="calendar-day-number">${day}</div>
                    <div class="calendar-day-matches">${matchesHtml}</div>
                </div>`;
            } else {
                html += `<div class="calendar-day-cell"><div class="calendar-day-number">${day}</div></div>`;
            }
        }
        
        html += `</div></div>`;
    }
    
    container.innerHTML = html;
}

function redirectToMatch(group, team1, team2, date) {
    if (typeof navigateTo === 'function') {
        navigateTo('partidos');
    } else {
        showSection('partidos');
    }
    const filter = document.getElementById('groupFilter');
    if (filter) {
        filter.value = group;
        filter.dispatchEvent(new Event('change'));
    }
    setTimeout(() => {
        const key = `${group}-${team1}-${team2}-${date}`;
        const card = document.querySelector(`[data-match-key="${key}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.transition = 'box-shadow 0.3s ease';
            card.style.boxShadow = '0 0 0 3px #f0c040, 0 0 20px rgba(240, 192, 64, 0.3)';
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 2500);
        }
    }, 350);
}
window.redirectToMatch = redirectToMatch;

function renderQuiniela() {
    const container = document.getElementById('quinielaMatches');
    
    const groups = {};
    
    matches.forEach((m, i) => {
        if (!groups[m.group]) {
            groups[m.group] = [];
        }
        groups[m.group].push({ ...m, index: i });
    });
    
    const groupOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    
    let html = '';
    groupOrder.forEach(g => {
        if (!groups[g]) return;
        
        html += `<div class="quiniela-group" style="margin-bottom:30px;">
        <div class="quiniela-group-title">
            <span class="quiniela-group-icon">🏆</span>
            <h3>Grupo ${g}</h3>
        </div>`;
        
        const groupMatches = groups[g];
        for (let round = 0; round < 3; round++) {
            const startIdx = round * 2;
            const roundMatches = groupMatches.slice(startIdx, startIdx + 2);
            
            const firstMatch = roundMatches[0];
            if (firstMatch) {
                const dateObj = new Date(firstMatch.date + 'T12:00:00');
                const dateStr = dateObj.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
                html += `<div class="quiniela-date"><h4 class="date-title">📅 Fecha ${round + 1} - ${dateStr}</h4></div>`;
            }
            
            roundMatches.forEach(m => {
                const prediction = quiniela[m.index] || { team1: '', team2: '' };
                html += `
                <div class="quiniela-match">
                    <div class="q-team-left">
                        <span class="q-team-name">${m.team1}</span>
                        ${getTeamImage(m.team1, "small")}
                    </div>
                    <div class="q-score-input">
                        <input type="number" min="0" max="20" class="q-score" placeholder="0" value="${prediction.team1}" data-match="${m.index}" data-team="team1">
                        <span class="q-separator">-</span>
                        <input type="number" min="0" max="20" class="q-score" placeholder="0" value="${prediction.team2}" data-match="${m.index}" data-team="team2">
                    </div>
                    <div class="q-team-right">
                        ${getTeamImage(m.team2, "small")}
                        <span class="q-team-name">${m.team2}</span>
                    </div>
                </div>`;
            });
            
            html += `</div>`;
        }
        
        html += `</div>`;
    });
    
    container.innerHTML = html;
    
    document.querySelectorAll('.q-score').forEach(input => {
        input.addEventListener('input', function() {
            const idx = this.dataset.match;
            const team = this.dataset.team;
            if (!quiniela[idx]) quiniela[idx] = { team1: '', team2: '' };
            quiniela[idx][team] = this.value;
            updateQuinielaStats();
        });
        
        input.addEventListener('change', saveQuinielaToStorage);
    });
    
    updateQuinielaStats();
}

function updateQuinielaStats() {
    const predictions = Object.values(quiniela).filter(p => p && (p.team1 !== '' || p.team2 !== '')).length;
    
    document.getElementById('predictedWins').textContent = predictions;
    document.getElementById('predictedDraws').textContent = matches.length;
    document.getElementById('predictedLosses').textContent = predictions > 0 ? Math.round((predictions / matches.length) * 100) + '%' : '0%';
}

const FLAG_PATH = "flags";
const FLAG_CDN = "https://flagcdn.com";

function getPlayerName(fullName) {
    if (!fullName) return "Por confirmar";
    return fullName.replace(/\s*\([^)]*\)\s*/g, '').trim();
}

function getTeamImage(teamName, size = "small") {
    const countryCode = teamCountryCodes[teamName];
    if (countryCode) {
        let height, cdnSize;
        if (size === "large") { height = 48; cdnSize = "w160"; }
        else if (size === "medium") { height = 36; cdnSize = "w120"; }
        else { height = 28; cdnSize = "w80"; }
        const localPath = `${FLAG_PATH}/${countryCode}.png`;
        const cdnUrl = `${FLAG_CDN}/${cdnSize}/${countryCode}.png`;
        return `<img src="${localPath}" alt="${teamName}" class="team-flag-img" style="height:${height}px" onerror="this.onerror=null;this.src='${cdnUrl}'" loading="lazy">`;
    }
    const emoji = teamEmojis[teamName];
    if (emoji) {
        return `<span class="team-flag-emoji">${emoji}</span>`;
    }
    return '<span class="team-flag-emoji">⚽</span>';
}

function getTeamFlag(teamName) {
    return getTeamImage(teamName);
}

function formatDate(dateStr, timeStr = "12:00") {
    const date = new Date(`${dateStr}T${timeStr}:00`);
    return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
}

function startCountdown() {
    const targetDate = new Date('2026-06-11T15:00:00');
    
    function update() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            const daysEl = document.getElementById('countdownDays');
            const hoursEl = document.getElementById('countdownHours');
            const minsEl = document.getElementById('countdownMinutes');
            const secsEl = document.getElementById('countdownSeconds');
            if (daysEl) daysEl.textContent = '0';
            if (hoursEl) hoursEl.textContent = '0';
            if (minsEl) minsEl.textContent = '0';
            if (secsEl) secsEl.textContent = '0';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('countdownDays');
        const hoursEl = document.getElementById('countdownHours');
        const minsEl = document.getElementById('countdownMinutes');
        const secsEl = document.getElementById('countdownSeconds');
        
        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minsEl) minsEl.textContent = minutes;
        if (secsEl) secsEl.textContent = seconds;
    }
    
    try {
        update();
        setInterval(update, 1000);
    } catch(e) {
        console.log('Countdown error:', e);
    }
}

function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
    
    const saveBtn = document.getElementById('saveQuiniela');
    const clearBtn = document.getElementById('clearQuiniela');
    
    if (saveBtn) saveBtn.addEventListener('click', saveQuinielaToStorage);
    if (clearBtn) clearBtn.addEventListener('click', () => {
        quiniela = {};
        renderQuiniela();
    });
    
    const editarPerfilForm = document.getElementById('editarPerfilFormModal');
    if (editarPerfilForm) {
        editarPerfilForm.addEventListener('submit', function(e) {
            e.preventDefault();
            guardarCambiosPerfil();
        });
    }

    const modalEditarPerfil = document.getElementById('modalEditarPerfil');
    if (modalEditarPerfil) {
        modalEditarPerfil.addEventListener('click', function(e) {
            if (e.target === modalEditarPerfil) {
                cerrarModalPerfil();
            }
        });
    }
    
    const teamCountryMap = {};
    groups.forEach(g => {
        g.teams.forEach(t => {
            if (teamFlags[t.name]) {
                teamCountryMap[t.name] = teamFlags[t.name];
            }
        });
    });
    
    const uniqueCountries = Object.keys(teamCountryMap);
    let paisDropdownHtml = '';
    uniqueCountries.forEach(pais => {
        const flagFile = teamCountryMap[pais];
        paisDropdownHtml += `<div onclick="seleccionarPais('${pais}', 'flags/${flagFile}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;color:#ffffff;font-size:0.9rem;" onmouseover="this.style.background='#1e293b'" onmouseout="this.style.background='transparent'">
            <img src="flags/${flagFile}" style="width:24px;height:16px;border-radius:2px;object-fit:cover;">
            ${pais}
        </div>`;
    });
    
    const dropdownContainer = document.getElementById('paisDropdown');
    if (dropdownContainer) {
        dropdownContainer.innerHTML = paisDropdownHtml;
    }
    
    document.addEventListener('click', function(e) {
        const paisSelector = document.getElementById('paisSelector');
        const paisDropdown = document.getElementById('paisDropdown');
        if (paisSelector && paisDropdown && !paisSelector.contains(e.target) && !paisDropdown.contains(e.target)) {
            paisDropdown.style.display = 'none';
        }
    });
}

function saveQuinielaToStorage() {
    if (!isLoggedIn()) {
        if (confirm('Debes iniciar sesión para guardar tus predicciones. ¿Deseas ir al inicio de sesión?')) {
            showSection('iniciar-sesion');
        }
        return;
    }
    
    localStorage.setItem('predicciones', JSON.stringify(quiniela));
    
    const usuario = getCurrentUser();
    
    if (typeof window.db !== 'undefined' && usuario.email) {
        window.db.collection('predicciones').doc(usuario.email).set({
            uid: usuario.uid || '',
            email: usuario.email,
            predicciones: quiniela,
            fecha: new Date().toISOString()
        }).then(() => {
            console.log('Predicciones guardadas en Firebase');
            cargarPrediccionesMiCuenta();
        }).catch(e => {
            console.log('Firestore no disponible, guardado solo local:', e);
            cargarPrediccionesMiCuenta();
        });
    } else {
        cargarPrediccionesMiCuenta();
    }
}

function cargarPrediccionesMiCuenta() {
    const container = document.getElementById('misPredicciones');
    if (!container) return;
    
    prediccionesData = [];
    
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    
    if (document.getElementById('profileName')) {
        document.getElementById('profileName').textContent = usuario.nombre || 'Usuario';
    }
    if (document.getElementById('profileEmail')) {
        document.getElementById('profileEmail').textContent = usuario.email || '';
    }

    const roleBadge = document.getElementById('profileRoleBadge');
    const roleText = document.getElementById('profileRoleText');
    if (roleBadge && roleText) {
        const role = usuario.role || 'usuario';
        if (role === 'admin') {
            roleText.textContent = 'Admin';
            roleBadge.classList.add('is-admin');
            roleBadge.querySelector('.role-badge-icon').innerHTML = '<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>';
        } else {
            roleText.textContent = 'Usuario';
            roleBadge.classList.remove('is-admin');
            roleBadge.querySelector('.role-badge-icon').innerHTML = '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>';
        }
    }
    
    const profileAvatarImg = document.getElementById('profileAvatarImg');
    const defaultProfileAvatar = document.getElementById('defaultProfileAvatar');
    if (usuario.foto && profileAvatarImg && defaultProfileAvatar) {
        profileAvatarImg.src = usuario.foto;
        profileAvatarImg.style.display = 'block';
        defaultProfileAvatar.style.display = 'none';
    } else if (profileAvatarImg && defaultProfileAvatar) {
        profileAvatarImg.style.display = 'none';
        defaultProfileAvatar.style.display = 'block';
    }
    
    if (!usuario.email) {
        container.innerHTML = `
            <div class="predicciones-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <p>Inicia sesión para ver tus predicciones</p>
                <span>Accede a tu cuenta o crea una nueva</span>
            </div>`;
        if (document.getElementById('statPredicciones')) document.getElementById('statPredicciones').textContent = '0';
        if (document.getElementById('statPartidos')) document.getElementById('statPartidos').textContent = '0';
        return;
    }
    
    function mostrarPrediccionesLocales() {
        const predLocal = localStorage.getItem('predicciones');
        if (!predLocal) {
            container.innerHTML = `
                <div class="predicciones-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    <p>No tienes predicciones guardadas</p>
                    <span>Ve a la sección de Predicciones para comenzar</span>
                </div>`;
            if (document.getElementById('statPredicciones')) document.getElementById('statPredicciones').textContent = '0';
            if (document.getElementById('statPartidos')) document.getElementById('statPartidos').textContent = '0';
            return;
        }
        const pred = JSON.parse(predLocal);
        const count = Object.keys(pred).length;
        if (document.getElementById('statPredicciones')) document.getElementById('statPredicciones').textContent = '1';
        if (document.getElementById('statPartidos')) document.getElementById('statPartidos').textContent = count;

        let matchesHtml = '';
        Object.entries(pred).forEach(([key, value]) => {
            const matchIndex = parseInt(key);
            const match = matches[matchIndex];
            if (match) {
                matchesHtml += `
                <div class="prediccion-match-row">
                    <div class="prediccion-match-teams">
                        <span class="prediccion-team-name">${match.team1}</span>
                        <span class="prediccion-vs">vs</span>
                        <span class="prediccion-team-name">${match.team2}</span>
                    </div>
                    <div class="prediccion-score">
                        <span class="prediccion-score-value">${value.team1 || '-'}</span>
                        <span class="prediccion-score-separator">-</span>
                        <span class="prediccion-score-value">${value.team2 || '-'}</span>
                    </div>
                </div>`;
            }
        });

        container.innerHTML = `
            <div class="prediccion-card">
                <div class="prediccion-header">
                    <div class="prediccion-info">
                        <span class="prediccion-numero">Mis Predicciones</span>
                        <span class="prediccion-meta">${count} partidos • Guardado local</span>
                    </div>
                </div>
                <div class="prediccion-detalle" style="display:block;">
                    <div class="prediccion-detalle-title">Partidos Pronosticados</div>
                    ${matchesHtml}
                </div>
            </div>`;
    }

    if (typeof window.db !== 'undefined') {
        window.db.collection('predicciones').where('email', '==', usuario.email).get()
        .then((snapshot) => {
            let totalPartidos = 0;
            let index = 1;
            snapshot.forEach((doc) => {
                const data = doc.data();
                const pred = data.predicciones || {};
                totalPartidos += Object.keys(pred).length;
                prediccionesData.push({
                    id: doc.id,
                    index: snapshot.size - index + 1,
                    fecha: data.fecha,
                    predicciones: pred
                });
                index++;
            });
            
            if (document.getElementById('statPredicciones')) document.getElementById('statPredicciones').textContent = prediccionesData.length;
            if (document.getElementById('statPartidos')) document.getElementById('statPartidos').textContent = totalPartidos;
            
            if (prediccionesData.length === 0) {
                mostrarPrediccionesLocales();
                return;
            }
            
            let html = '';
            prediccionesData.forEach((pred, i) => {
                const fechaGuardado = pred.fecha ? new Date(pred.fecha) : new Date();
                const fechaFormateada = fechaGuardado.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
                const horaFormateada = fechaGuardado.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
                const numPartidos = Object.keys(pred.predicciones).length;
                
                let matchesHtml = '';
                Object.entries(pred.predicciones).forEach(([key, value]) => {
                    const matchIndex = parseInt(key);
                    const match = matches[matchIndex];
                    if (match) {
                    matchesHtml += `
                    <div class="prediccion-match-row">
                        <div class="prediccion-match-teams">
                            <span class="prediccion-team-name">${match.team1}</span>
                            <span class="prediccion-vs">vs</span>
                            <span class="prediccion-team-name">${match.team2}</span>
                        </div>
                        <div class="prediccion-score">
                            <span class="prediccion-score-value">${value.team1 || '-'}</span>
                            <span class="prediccion-score-separator">-</span>
                            <span class="prediccion-score-value">${value.team2 || '-'}</span>
                        </div>
                    </div>`;
                    }
                });
                
                html += `
                <div class="prediccion-card">
                    <div class="prediccion-header">
                        <div class="prediccion-info" onclick="togglePrediccionDetalle(${i})">
                            <span class="prediccion-numero">Predicción #${prediccionesData.length - i}</span>
                            <span class="prediccion-meta">${numPartidos} partido${numPartidos !== 1 ? 's' : ''} • ${fechaFormateada}</span>
                        </div>
                        <div class="prediccion-actions">
                            <svg id="flechaPred${i}" class="prediccion-toggle" onclick="togglePrediccionDetalle(${i})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            <button class="btn-prediccion-delete" onclick="eliminarPrediccion('${pred.id}', ${i})">Eliminar</button>
                        </div>
                    </div>
                    <div id="prediccionDetalle${i}" class="prediccion-detalle">
                        <div class="prediccion-detalle-title">Partidos Pronosticados</div>
                        ${matchesHtml}
                    </div>
                </div>`;
            });
            container.innerHTML = html;
        })
        .catch(e => {
            console.log('Error cargando desde Firestore, usando local:', e);
            mostrarPrediccionesLocales();
        });
    } else {
        const predLocal = localStorage.getItem('predicciones');
        if (predLocal) {
            const pred = JSON.parse(predLocal);
            const count = Object.keys(pred).length;
            if (document.getElementById('statPredicciones')) document.getElementById('statPredicciones').textContent = '1';
            if (document.getElementById('statPartidos')) document.getElementById('statPartidos').textContent = count;
            
            prediccionesData.push({
                index: 1,
                fecha: new Date().toISOString(),
                predicciones: pred
            });
            
            let matchesHtml = '';
            Object.entries(pred).forEach(([key, value]) => {
                const matchIndex = parseInt(key);
                const match = matches[matchIndex];
                if (match) {
                    matchesHtml += `
                    <div class="prediccion-match-row">
                        <div class="prediccion-match-teams">
                            <span class="prediccion-team-name">${match.team1}</span>
                            <span class="prediccion-vs">vs</span>
                            <span class="prediccion-team-name">${match.team2}</span>
                        </div>
                        <div class="prediccion-score">
                            <span class="prediccion-score-value">${value.team1 || '-'}</span>
                            <span class="prediccion-score-separator">-</span>
                            <span class="prediccion-score-value">${value.team2 || '-'}</span>
                        </div>
                    </div>`;
                }
            });
            
            container.innerHTML = `
            <div class="prediccion-card">
                <div class="prediccion-header">
                    <div class="prediccion-info" onclick="togglePrediccionDetalle(0)">
                        <span class="prediccion-numero">Predicción #1</span>
                        <span class="prediccion-meta">${count} partido${count !== 1 ? 's' : ''} • ${new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div class="prediccion-actions">
                        <svg id="flechaPred0" class="prediccion-toggle" onclick="togglePrediccionDetalle(0)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        <button class="btn-prediccion-delete" onclick="eliminarPrediccionLocal()">Eliminar</button>
                    </div>
                </div>
                <div id="prediccionDetalle0" class="prediccion-detalle">
                    <div class="prediccion-detalle-title">Partidos Pronosticados</div>
                    ${matchesHtml}
                </div>
            </div>`;
        } else {
            container.innerHTML = `
                <div class="predicciones-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    <p>No hay predicciones guardadas</p>
                    <span>Ve a la sección de Predicciones para comenzar</span>
                </div>`;
            if (document.getElementById('statPredicciones')) document.getElementById('statPredicciones').textContent = '0';
            if (document.getElementById('statPartidos')) document.getElementById('statPartidos').textContent = '0';
        }
    }
}

function borrarPredicciones() {
    if (!confirm('¿Estás seguro de que quieres borrar todas tus predicciones? Esta acción no se puede deshacer.')) {
        return;
    }
    
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    
    if (typeof window.db !== 'undefined' && usuario.email) {
        window.db.collection('predicciones').where('email', '==', usuario.email).get()
        .then((snapshot) => {
            const batch = window.db.batch();
            snapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            return batch.commit();
        })
        .then(() => {
            localStorage.removeItem('predicciones');
            localStorage.removeItem('prediccionesGuardadas');
            cargarPrediccionesMiCuenta();
            alert('Predicciones eliminadas correctamente');
        })
        .catch(e => {
            console.log('Error al borrar:', e);
            alert('Error al eliminar las predicciones');
        });
    } else {
        localStorage.removeItem('predicciones');
        localStorage.removeItem('prediccionesGuardadas');
        cargarPrediccionesMiCuenta();
        alert('Predicciones eliminadas correctamente');
    }
}

function loadQuinielaFromStorage() {
    const saved = localStorage.getItem('predicciones');
    if (saved) {
        try {
            quiniela = JSON.parse(saved);
        } catch(e) {
            quiniela = {};
        }
    }
    
    const registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombreEl = document.getElementById('nombre');
            const paisEl = document.getElementById('pais');
            const emailEl = document.getElementById('email');
            const passEl = document.getElementById('password');
            const confirmEl = document.getElementById('confirmarPassword');
            const messageEl = document.getElementById('cuentaMessage');
            
            if (!nombreEl || !paisEl || !emailEl || !passEl || !confirmEl || !messageEl) return;
            
            const nombre = nombreEl.value.trim();
            const pais = paisEl.value;
            const email = emailEl.value.trim().toLowerCase();
            const password = passEl.value;
            const confirmarPassword = confirmEl.value;

            if (!pais) {
                messageEl.className = 'cuenta-message error';
                messageEl.textContent = 'Por favor selecciona tu país';
                return;
            }
            
            if (password.length < 6) {
                messageEl.className = 'cuenta-message error';
                messageEl.textContent = 'La contraseña debe tener al menos 6 caracteres';
                return;
            }

            if (password !== confirmarPassword) {
                messageEl.className = 'cuenta-message error';
                messageEl.textContent = 'Las contraseñas no coinciden';
                return;
            }

            messageEl.className = 'cuenta-message';
            messageEl.textContent = 'Creando cuenta...';

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    let role = 'usuario';
                    const adminCheckbox = document.getElementById('registerAsAdmin');
                    if (adminCheckbox && adminCheckbox.checked) {
                        db.collection('perfiles').where('role', '==', 'admin').get()
                            .then(snapshot => {
                                if (snapshot.empty) role = 'admin';
                                saveProfileAndLogin(user, nombre, pais, email, role, messageEl);
                            })
                            .catch(() => saveProfileAndLogin(user, nombre, pais, email, role, messageEl));
                    } else {
                        saveProfileAndLogin(user, nombre, pais, email, role, messageEl);
                    }
                })
                .catch((error) => {
                    let msg = 'Error al crear cuenta';
                    if (error.code === 'auth/email-already-in-use') {
                        msg = 'Este correo ya está registrado';
                    } else if (error.code === 'auth/weak-password') {
                        msg = 'La contraseña debe tener al menos 6 caracteres';
                    } else if (error.code === 'auth/invalid-email') {
                        msg = 'El correo electrónico no es válido';
                    }
                    messageEl.className = 'cuenta-message error';
                    messageEl.textContent = msg;
                });
        });
    }
    
    const adminCheckbox = document.getElementById('registerAsAdmin');
    const adminRoleGroup = document.getElementById('adminRoleGroup');
    if (adminCheckbox && adminRoleGroup) {
        db.collection('perfiles').where('role', '==', 'admin').get()
            .then(snapshot => {
                adminRoleGroup.style.display = snapshot.empty ? 'block' : 'none';
            })
            .catch(() => {
                adminRoleGroup.style.display = 'none';
            });
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');
            const messageEl = document.getElementById('loginMessage');
            
            const email = emailInput.value.trim().toLowerCase();
            const password = passwordInput.value;
            
            messageEl.className = 'cuenta-message';
            messageEl.textContent = 'Iniciando sesión...';
            
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const fbUser = userCredential.user;
                    return db.collection('perfiles').doc(fbUser.uid).get()
                        .then(doc => ({ fbUser, doc }));
                })
                .then(({ fbUser, doc }) => {
                    if (doc.exists) {
                        const data = doc.data();
                        loginSuccess({
                            uid: fbUser.uid,
                            nombre: data.nombre,
                            email: data.email,
                            pais: data.pais || '',
                            role: data.role || 'usuario',
                            foto: data.foto || ''
                        }, messageEl);
                    } else {
                        loginSuccess({
                            uid: fbUser.uid,
                            nombre: email.split('@')[0],
                            email: email,
                            pais: '',
                            role: 'usuario',
                            foto: ''
                        }, messageEl);
                    }
                })
                .catch((error) => {
                    // Fallback: buscar en localStorage (usuarios previos)
                    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
                    const usuario = usuarios.find(u =>
                        (u.email || '').toLowerCase() === email && u.password === password
                    );
                    
                    if (usuario) {
                        // Intentar primero signIn (por si ya existe en Firebase Auth)
                        firebase.auth().signInWithEmailAndPassword(email, password)
                            .then((cred) => {
                                const fbUser = cred.user;
                                return db.collection('perfiles').doc(fbUser.uid).get()
                                    .then(doc => {
                                        if (doc.exists) {
                                            const data = doc.data();
                                            loginSuccess({
                                                uid: fbUser.uid,
                                                nombre: data.nombre,
                                                email: data.email,
                                                pais: data.pais || '',
                                                role: data.role || 'usuario'
                                            }, messageEl);
                                        } else {
                                            loginSuccess({
                                                uid: fbUser.uid,
                                                nombre: usuario.nombre,
                                                email: usuario.email,
                                                pais: usuario.pais || '',
                                                role: usuario.role || 'usuario'
                                            }, messageEl);
                                        }
                                    });
                            })
                            .catch(() => {
                                // Si signIn falla, migrar creando cuenta nueva
                                firebase.auth().createUserWithEmailAndPassword(email, password)
                                    .then((cred) => {
                                        return db.collection('perfiles').doc(cred.user.uid).set({
                                            nombre: usuario.nombre,
                                            pais: usuario.pais || '',
                                            email: usuario.email,
                                            role: usuario.role || 'usuario',
                                            fecha: new Date().toISOString()
                                        });
                                    })
                                    .then(() => {
                                        const currentUser = firebase.auth().currentUser;
                                        if (currentUser) {
                                            loginSuccess({
                                                uid: currentUser.uid,
                                                nombre: usuario.nombre,
                                                email: usuario.email,
                                                pais: usuario.pais || '',
                                                role: usuario.role || 'usuario'
                                            }, messageEl);
                                        }
                                    })
                                    .catch(() => {
                                        loginSuccess(Object.assign({}, usuario, { _localOnly: true }), messageEl);
                                    });
                            });
                    } else {
                        let msg = 'Email o contraseña incorrectos';
                        if (error.code === 'auth/user-not-found') msg = 'No existe cuenta con este correo';
                        else if (error.code === 'auth/wrong-password') msg = 'Contraseña incorrecta';
                        else if (error.code === 'auth/invalid-email') msg = 'Correo electrónico no válido';
                        else if (error.code === 'auth/too-many-requests') msg = 'Demasiados intentos. Intenta más tarde';
                        loginError(messageEl, emailInput, passwordInput, msg);
                    }
                });
        });
    }
}

function saveProfileAndLogin(user, nombre, pais, email, role, messageEl) {
    db.collection('perfiles').doc(user.uid).set({
        nombre: nombre,
        pais: pais,
        email: email,
        role: role,
        fecha: new Date().toISOString()
    })
    .then(() => {
        localStorage.setItem('usuarioActual', JSON.stringify({
            uid: user.uid, nombre, pais, email, role
        }));
        messageEl.className = 'cuenta-message success';
        messageEl.textContent = '¡Cuenta creada exitosamente!';
        renderNav();
        setTimeout(() => {
            showSection('mi-cuenta');
            cargarPrediccionesMiCuenta();
        }, 1500);
    })
    .catch(() => {
        localStorage.setItem('usuarioActual', JSON.stringify({
            uid: user.uid, nombre, pais, email, role
        }));
        messageEl.className = 'cuenta-message success';
        messageEl.textContent = '¡Cuenta creada!';
        renderNav();
        setTimeout(() => showSection('mi-cuenta'), 1500);
    });
}

function loginSuccess(usuario, messageEl) {
    localStorage.setItem('usuarioActual', JSON.stringify({ 
        uid: usuario.uid || '',
        nombre: usuario.nombre, 
        email: usuario.email,
        pais: usuario.pais || '',
        role: usuario.role || 'usuario',
        foto: usuario.foto || ''
    }));
    renderNav();
    mostrarMiCuenta(usuario.nombre, usuario.email);
    messageEl.className = 'cuenta-message success';
    messageEl.textContent = '¡Bienvenido!';
    setTimeout(() => {
        showSection('mi-cuenta');
    }, 1000);
}

function loginError(messageEl, emailInput, passwordInput, customMsg) {
    messageEl.className = 'cuenta-message error';
    messageEl.innerHTML = customMsg
        ? '<span style="font-size:1.2em;">⚠️</span> ' + customMsg
        : '<span style="font-size:1.2em;">⚠️</span> Email o contraseña incorrectos<br><span style="font-size:0.85em;opacity:0.8;">Intenta de nuevo o crea una cuenta</span>';
    
    if (emailInput) {
        emailInput.style.borderColor = '#ff4757';
        emailInput.style.boxShadow = '0 0 10px rgba(255, 71, 87, 0.5)';
        setTimeout(() => {
            emailInput.style.borderColor = '';
            emailInput.style.boxShadow = '';
        }, 2000);
    }
    if (passwordInput) {
        passwordInput.style.borderColor = '#ff4757';
        passwordInput.style.boxShadow = '0 0 10px rgba(255, 71, 87, 0.5)';
        setTimeout(() => {
            passwordInput.style.borderColor = '';
            passwordInput.style.boxShadow = '';
        }, 2000);
    }
}

function mostrarMiCuenta(nombre, email) {
    const navMiCuenta = document.getElementById('navMiCuenta');
    const crearCuentaLink = document.querySelector('nav a[href="#crear-cuenta"]');
    const iniciarSesionLink = document.querySelector('nav a[href="#iniciar-sesion"]');
    
    if (crearCuentaLink) crearCuentaLink.style.display = 'none';
    if (iniciarSesionLink) iniciarSesionLink.style.display = 'none';
    if (navMiCuenta) navMiCuenta.style.display = 'inline';
    
    cargarPrediccionesMiCuenta();
}

function cerrarSesion() {
    if (!confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        return;
    }
    firebase.auth().signOut().catch(e => console.log('Error:', e));
    localStorage.removeItem('usuarioActual');
    const navMiCuenta = document.getElementById('navMiCuenta');
    const navAdmin = document.getElementById('navAdmin');
    const crearCuentaLink = document.querySelector('nav a[href="#crear-cuenta"]');
    const iniciarSesionLink = document.querySelector('nav a[href="#iniciar-sesion"]');
    
    if (navMiCuenta) navMiCuenta.style.display = 'none';
    if (navAdmin) navAdmin.style.display = 'none';
    if (crearCuentaLink) crearCuentaLink.style.display = 'inline';
    if (iniciarSesionLink) iniciarSesionLink.style.display = 'inline';
    
    document.getElementById('mi-cuenta').classList.remove('active');
    document.getElementById('inicio').classList.add('active');
    document.querySelectorAll('header nav a').forEach(a => {
        a.style.color = '#666680';
        a.style.fontWeight = '600';
        a.style.borderBottom = 'none';
        if (a.getAttribute('href') === '#inicio') {
            a.style.color = '#d4af37';
            a.style.fontWeight = '700';
            a.style.borderBottom = '2px solid #d4af37';
            a.style.paddingBottom = '4px';
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

function initPaisDropdownGlobal() {
    try {
        const map = {};
        groups.forEach(g => {
            g.teams.forEach(t => {
                if (teamFlags[t.name]) map[t.name] = teamFlags[t.name];
            });
        });
        const countries = Object.keys(map);
        let html = '';
        countries.forEach(pais => {
            html += `<div onclick="seleccionarPais('${pais}', 'flags/${map[pais]}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;color:#ffffff;font-size:0.9rem;" onmouseover="this.style.background='#1e293b'" onmouseout="this.style.background='transparent'">
                <img src="flags/${map[pais]}" style="width:24px;height:16px;border-radius:2px;object-fit:cover;">
                ${pais}
            </div>`;
        });
        const container = document.getElementById('paisDropdown');
        if (container) container.innerHTML = html;
    } catch(e) {}
}
window.initPaisDropdownGlobal = initPaisDropdownGlobal;

function toggleTimelineItem(content) {
    const timelineItem = content.closest('.timeline-item');
    const isActive = content.classList.contains('active');
    
    document.querySelectorAll('.timeline-content.active').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.timeline-image-container').style.maxHeight = '0';
    });
    
    if (!isActive) {
        content.classList.add('active');
        content.querySelector('.timeline-image-container').style.maxHeight = '500px';
    }
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('section.section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

function togglePrediccionDetalle(index) {
    const detalle = document.getElementById('prediccionDetalle' + index);
    const flecha = document.getElementById('flechaPred' + index);
    if (detalle) {
        if (detalle.style.display === 'none') {
            detalle.style.display = 'block';
            if (flecha) flecha.style.transform = 'rotate(180deg)';
        } else {
            detalle.style.display = 'none';
            if (flecha) flecha.style.transform = 'rotate(0deg)';
        }
    }
}

function eliminarPrediccion(docId, index) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta predicción?')) return;
    
    if (typeof window.db !== 'undefined') {
        window.db.collection('predicciones').doc(docId).delete()
            .then(() => {
                cargarPrediccionesMiCuenta();
                alert('Predicción eliminada correctamente');
            })
            .catch(e => {
                console.log('Error:', e);
                alert('Error al eliminar la predicción');
});
    }
}

function eliminarPrediccionLocal() {
    if (!confirm('¿Estás seguro de que quieres eliminar esta predicción?')) return;
    
    localStorage.removeItem('predicciones');
    cargarPrediccionesMiCuenta();
    alert('Predicción eliminada correctamente');
}

function abrirModalPerfil() {
    const modal = document.getElementById('modalEditarPerfil');
    if (modal) {
        cargarDatosPerfil();
        modal.style.display = 'flex';
        modal.offsetHeight;
        document.getElementById('editarPerfilMessage').className = '';
        document.getElementById('editarPerfilMessage').textContent = '';
        requestAnimationFrame(() => {
            modal.classList.add('modal-visible');
        });
    }
}

function cerrarModalPerfil() {
    const modal = document.getElementById('modalEditarPerfil');
    if (modal) {
        modal.classList.remove('modal-visible');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function cargarDatosPerfil() {
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    if (!usuario.email) {
        cerrarModalPerfil();
        showSection('iniciar-sesion');
        return;
    }
    
    document.getElementById('editarNombre').value = usuario.nombre || '';
    document.getElementById('editarEmail').value = usuario.email || '';
    
    if (usuario.foto) {
        document.getElementById('previewAvatar').src = usuario.foto;
        document.getElementById('previewAvatar').style.display = 'block';
        document.getElementById('defaultAvatarIcon').style.display = 'none';
    } else {
        document.getElementById('previewAvatar').style.display = 'none';
        document.getElementById('defaultAvatarIcon').style.display = 'block';
    }
}

function previewFotoPerfil(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewAvatar').src = e.target.result;
            document.getElementById('previewAvatar').style.display = 'block';
            document.getElementById('defaultAvatarIcon').style.display = 'none';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function cambiarFotoPerfil(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fotoData = e.target.result;
            const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
            usuario.foto = fotoData;
            localStorage.setItem('usuarioActual', JSON.stringify(usuario));
            
            const profileAvatarImg = document.getElementById('profileAvatarImg');
            const defaultProfileAvatar = document.getElementById('defaultProfileAvatar');
            if (profileAvatarImg && defaultProfileAvatar) {
                profileAvatarImg.src = fotoData;
                profileAvatarImg.style.display = 'block';
                defaultProfileAvatar.style.display = 'none';
            }
            
            if (document.getElementById('previewAvatar')) {
                document.getElementById('previewAvatar').src = fotoData;
                document.getElementById('previewAvatar').style.display = 'block';
                document.getElementById('defaultAvatarIcon').style.display = 'none';
            }
            
            if (typeof db !== 'undefined' && usuario.uid) {
                db.collection('perfiles').doc(usuario.uid).update({ foto: fotoData })
                    .catch(e => console.log('Error guardando foto:', e));
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function guardarCambiosPerfil() {
    const nombre = document.getElementById('editarNombre').value.trim();
    const nuevaPassword = document.getElementById('editarPassword').value;
    const confirmarPassword = document.getElementById('confirmarEditarPassword').value;
    const mensaje = document.getElementById('editarPerfilMessage');
    const fotoPerfil = document.getElementById('previewAvatar').src;
    
    if (!nombre) {
        mensaje.className = 'cuenta-message error';
        mensaje.textContent = 'El nombre es obligatorio';
        return;
    }
    
    if (nuevaPassword && nuevaPassword !== confirmarPassword) {
        mensaje.className = 'cuenta-message error';
        mensaje.textContent = 'Las contraseñas no coinciden';
        return;
    }
    
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    
    usuario.nombre = nombre;
    if (fotoPerfil && fotoPerfil !== '') {
        usuario.foto = fotoPerfil;
    }
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    
    const user = firebase.auth().currentUser;
    if (!user) {
        mensaje.className = 'cuenta-message error';
        mensaje.textContent = 'Debes iniciar sesión para editar tu perfil';
        return;
    }
    
    const updates = { nombre: nombre };
    if (fotoPerfil && fotoPerfil !== '') {
        updates.foto = fotoPerfil;
    }
    
    let passwordPromise = Promise.resolve();
    if (nuevaPassword) {
        passwordPromise = user.updatePassword(nuevaPassword);
    }
    
    passwordPromise
        .then(() => db.collection('perfiles').doc(user.uid).update(updates))
        .then(() => {
            mensaje.className = 'cuenta-message success';
            mensaje.textContent = 'Perfil actualizado correctamente';
            if (document.getElementById('profileName')) {
                document.getElementById('profileName').textContent = nombre;
            }
            document.getElementById('editarPassword').value = '';
            document.getElementById('confirmarEditarPassword').value = '';
            setTimeout(() => cerrarModalPerfil(), 1500);
        })
        .catch(e => {
            console.log('Error:', e);
            mensaje.className = 'cuenta-message error';
            mensaje.textContent = e.code === 'auth/requires-recent-login'
                ? 'Por seguridad, vuelve a iniciar sesión antes de cambiar tu contraseña'
                : 'Error al guardar. Intenta de nuevo.';
        });
}

function togglePaisDropdown() {
    const dropdown = document.getElementById('paisDropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

function seleccionarPais(pais, flagFile) {
    document.getElementById('pais').value = pais;
    document.getElementById('paisSeleccionado').innerHTML = `<img src="${flagFile}" style="width:24px;height:16px;border-radius:2px;object-fit:cover;"><span style="margin-left:10px;">${pais}</span>`;
    document.getElementById('paisDropdown').style.display = 'none';
}

/* ========== PANINI ALBUM ========== */

// Mapeo de países a códigos de 3 letras (usado para IDs de láminas)
const paniniCountryCodes = {
    "México": "MEX", "Canadá": "CAN", "Estados Unidos": "USA", "Inglaterra": "ENG",
    "Francia": "FRA", "Croacia": "CRO", "Noruega": "NOR", "Portugal": "POR",
    "Alemania": "GER", "Países Bajos": "NED", "Suiza": "SUI", "Escocia": "SCO",
    "España": "ESP", "Austria": "AUT", "Bélgica": "BEL", "Bosnia y Herzegovina": "BIH",
    "Suecia": "SWE", "República Checa": "CZE", "Brasil": "BRA",
    "Argentina": "ARG", "Colombia": "COL", "Ecuador": "ECU", "Paraguay": "PAR",
    "Uruguay": "URU", "Argelia": "ALG", "Cabo Verde": "CPV", "Costa de Marfil": "CIV",
    "Egipto": "EGY", "Ghana": "GHA", "Marruecos": "MAR", "Senegal": "SEN",
    "Túnez": "TUN", "Australia": "AUS", "Irán": "IRN", "Japón": "JPN",
    "Jordania": "JOR", "Qatar": "QAT", "Arabia Saudita": "KSA", "Corea del Sur": "KOR",
    "Uzbekistán": "UZB", "Curazao": "CUW", "Haití": "HAI", "Panamá": "PAN",
    "Nueva Zelanda": "NZL", "Rep. Dem. del Congo": "COD", "Irak": "IRQ"
};

// Mapeo de países a archivos de bandera (flags/)
const paniniFlagFiles = {
    "México": "mx.png", "Canadá": "ca.png", "Estados Unidos": "us.png", "Inglaterra": "gb-eng.png",
    "Francia": "fr.png", "Croacia": "hr.png", "Noruega": "no.png", "Portugal": "pt.png",
    "Alemania": "de.png", "Países Bajos": "nl.png", "Suiza": "ch.png", "Escocia": "gb-sct.png",
    "España": "es.png", "Austria": "at.png", "Bélgica": "be.png", "Bosnia y Herzegovina": "ba.png",
    "Suecia": "se.png", "República Checa": "cz.png", "Brasil": "br.png",
    "Argentina": "ar.png", "Colombia": "co.png", "Ecuador": "ec.png", "Paraguay": "py.png",
    "Uruguay": "uy.png", "Argelia": "dz.png", "Cabo Verde": "cv.png", "Costa de Marfil": "ci.png",
    "Egipto": "eg.png", "Ghana": "gh.png", "Marruecos": "ma.png", "Senegal": "sn.png",
    "Túnez": "tn.png", "Australia": "au.png", "Irán": "ir.png", "Japón": "jp.png",
    "Jordania": "jo.png", "Qatar": "qa.png", "Arabia Saudita": "sa.png", "Corea del Sur": "kr.png",
    "Uzbekistán": "uz.png", "Curazao": "cw.png", "Haití": "ht.png", "Panamá": "pa.png",
    "Nueva Zelanda": "nz.png", "Rep. Dem. del Congo": "cd.png", "Irak": "iq.png", "Turquía": "tr.png"
};

// Función eliminada: generateTeamStickers (ya no se usa, datos reales en generatePaniniStructure)

function generatePaniniStructure() {
    const structure = { version: 10 }; // version 10: force coca-cola logo reload
    
    // INTRODUCCIÓN
    structure['00'] = {
        name: 'Introducción',
        flag: '🌍',
        grupo: 'INTRO',
        stickers: [
            { id: '00', type: 'intro', name: 'Logo Panini', obtained: false },
            { id: 'FWC1', type: 'intro', name: 'Emblema Oficial', obtained: false },
            { id: 'FWC2', type: 'intro', name: 'Emblema Oficial', obtained: false },
            { id: 'FWC3', type: 'intro', name: 'Mascotas Oficiales', obtained: false },
            { id: 'FWC4', type: 'intro', name: 'Slogan Oficial', obtained: false },
            { id: 'FWC5', type: 'intro', name: 'Balón Oficial', obtained: false },
            { id: 'FWC6', type: 'intro', name: 'Canadá – Países y Ciudades Sede', obtained: false },
            { id: 'FWC7', type: 'intro', name: 'México – Países y Ciudades Sede', obtained: false },
            { id: 'FWC8', type: 'intro', name: 'USA – Países y Ciudades Sede', obtained: false }
        ]
    };
    
    // GRUPO A
    structure['MEX'] = {
        name: 'México',
        flag: '🇲🇽',
        flagFile: 'flags/mx.png',
        grupo: 'A',
        stickers: [
            { id: 'MEX1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'MEX2', type: 'player', name: 'Luis Malagón', obtained: false },
            { id: 'MEX3', type: 'player', name: 'Johan Vásquez', obtained: false },
            { id: 'MEX4', type: 'player', name: 'Jorge Sánchez', obtained: false },
            { id: 'MEX5', type: 'player', name: 'César Montes', obtained: false },
            { id: 'MEX6', type: 'player', name: 'Jesús Gallardo', obtained: false },
            { id: 'MEX7', type: 'player', name: 'Israel Reyes', obtained: false },
            { id: 'MEX8', type: 'player', name: 'Diego Lainez', obtained: false },
            { id: 'MEX9', type: 'player', name: 'Carlos Rodríguez', obtained: false },
            { id: 'MEX10', type: 'player', name: 'Edson Álvarez', obtained: false },
            { id: 'MEX11', type: 'player', name: 'Orbelin Pineda', obtained: false },
            { id: 'MEX12', type: 'player', name: 'Marcel Ruiz', obtained: false },
            { id: 'MEX13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'MEX14', type: 'player', name: 'Érick Sánchez', obtained: false },
            { id: 'MEX15', type: 'player', name: 'Hirving Lozano', obtained: false },
            { id: 'MEX16', type: 'player', name: 'Santiago Giménez', obtained: false },
            { id: 'MEX17', type: 'player', name: 'Raúl Jiménez', obtained: false },
            { id: 'MEX18', type: 'player', name: 'Alexis Vega', obtained: false },
            { id: 'MEX19', type: 'player', name: 'Roberto Alvarado', obtained: false },
            { id: 'MEX20', type: 'player', name: 'César Huerta', obtained: false }
        ]
    };
    
    structure['RSA'] = {
        name: 'Sudáfrica',
        flag: '🇿🇦',
        flagFile: 'flags/za.png',
        grupo: 'A',
        stickers: [
            { id: 'RSA1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'RSA2', type: 'player', name: 'Ronwen Williams', obtained: false },
            { id: 'RSA3', type: 'player', name: 'Sipho Chaine', obtained: false },
            { id: 'RSA4', type: 'player', name: 'Aubrey Modiba', obtained: false },
            { id: 'RSA5', type: 'player', name: 'Samukele Kabini', obtained: false },
            { id: 'RSA6', type: 'player', name: 'Mbekezeli Mbokazi', obtained: false },
            { id: 'RSA7', type: 'player', name: 'Khulumani Ndamane', obtained: false },
            { id: 'RSA8', type: 'player', name: 'Siyabonga Ngezana', obtained: false },
            { id: 'RSA9', type: 'player', name: 'Khuliso Mudau', obtained: false },
            { id: 'RSA10', type: 'player', name: 'Nkosinathi Sibisi', obtained: false },
            { id: 'RSA11', type: 'player', name: 'Teboho Mokoena', obtained: false },
            { id: 'RSA12', type: 'player', name: 'Thalente Mbatha', obtained: false },
            { id: 'RSA13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'RSA14', type: 'player', name: 'Bathasi Aubaas', obtained: false },
            { id: 'RSA15', type: 'player', name: 'Yaya Sithole', obtained: false },
            { id: 'RSA16', type: 'player', name: 'Sipho Mbule', obtained: false },
            { id: 'RSA17', type: 'player', name: 'Lyle Foster', obtained: false },
            { id: 'RSA18', type: 'player', name: 'Iqraam Rayners', obtained: false },
            { id: 'RSA19', type: 'player', name: 'Mohau Nkota', obtained: false },
            { id: 'RSA20', type: 'player', name: 'Oswin Appollis', obtained: false }
        ]
    };
    
    structure['KOR'] = {
        name: 'Corea del Sur',
        flag: '🇰🇷',
        flagFile: 'flags/kr.png',
        grupo: 'A',
        stickers: [
            { id: 'KOR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'KOR2', type: 'player', name: 'Hyeon-woo Jo', obtained: false },
            { id: 'KOR3', type: 'player', name: 'Seung-Gyu Kim', obtained: false },
            { id: 'KOR4', type: 'player', name: 'Min-jae Kim', obtained: false },
            { id: 'KOR5', type: 'player', name: 'Yu-min Cho', obtained: false },
            { id: 'KOR6', type: 'player', name: 'Young-woo Seol', obtained: false },
            { id: 'KOR7', type: 'player', name: 'Han-beom Lee', obtained: false },
            { id: 'KOR8', type: 'player', name: 'Tae-seok Lee', obtained: false },
            { id: 'KOR9', type: 'player', name: 'Myung-jae Lee', obtained: false },
            { id: 'KOR10', type: 'player', name: 'Jae-sung Lee', obtained: false },
            { id: 'KOR11', type: 'player', name: 'In-beom Hwang', obtained: false },
            { id: 'KOR12', type: 'player', name: 'Kang-in Lee', obtained: false },
            { id: 'KOR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'KOR14', type: 'player', name: 'Seung-ho Paik', obtained: false },
            { id: 'KOR15', type: 'player', name: 'Jens Castrop', obtained: false },
            { id: 'KOR16', type: 'player', name: 'Dong-yeong Lee', obtained: false },
            { id: 'KOR17', type: 'player', name: 'Gue-sung Cho', obtained: false },
            { id: 'KOR18', type: 'player', name: 'Heung-min Son', obtained: false },
            { id: 'KOR19', type: 'player', name: 'Hee-chan Hwang', obtained: false },
            { id: 'KOR20', type: 'player', name: 'Hyeon-Gyu Oh', obtained: false }
        ]
    };
    
    structure['CZE'] = {
        name: 'República Checa',
        flag: '🇨🇿',
        flagFile: 'flags/cz.png',
        grupo: 'A',
        stickers: [
            { id: 'CZE1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'CZE2', type: 'player', name: 'Matej Kovar', obtained: false },
            { id: 'CZE3', type: 'player', name: 'Jindrich Stanek', obtained: false },
            { id: 'CZE4', type: 'player', name: 'Ladislav Krejci', obtained: false },
            { id: 'CZE5', type: 'player', name: 'Vladimir Coufal', obtained: false },
            { id: 'CZE6', type: 'player', name: 'Jaroslav Zeleny', obtained: false },
            { id: 'CZE7', type: 'player', name: 'Tomas Holes', obtained: false },
            { id: 'CZE8', type: 'player', name: 'David Zima', obtained: false },
            { id: 'CZE9', type: 'player', name: 'Michal Sadilek', obtained: false },
            { id: 'CZE10', type: 'player', name: 'Lukas Provod', obtained: false },
            { id: 'CZE11', type: 'player', name: 'Lukas Cerv', obtained: false },
            { id: 'CZE12', type: 'player', name: 'Tomas Soucek', obtained: false },
            { id: 'CZE13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'CZE14', type: 'player', name: 'Pavel Sulc', obtained: false },
            { id: 'CZE15', type: 'player', name: 'Matej Vydra', obtained: false },
            { id: 'CZE16', type: 'player', name: 'Vasil Kusej', obtained: false },
            { id: 'CZE17', type: 'player', name: 'Tomas Chory', obtained: false },
            { id: 'CZE18', type: 'player', name: 'Vaclav Cerny', obtained: false },
            { id: 'CZE19', type: 'player', name: 'Adam Hlozek', obtained: false },
            { id: 'CZE20', type: 'player', name: 'Patrik Schick', obtained: false }
        ]
    };
    
    // GRUPO B
    structure['CAN'] = {
        name: 'Canadá',
        flag: '🇨🇦',
        flagFile: 'flags/ca.png',
        grupo: 'B',
        stickers: [
            { id: 'CAN1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'CAN2', type: 'player', name: 'Dayne St. Clair', obtained: false },
            { id: 'CAN3', type: 'player', name: 'Alphonso Davies', obtained: false },
            { id: 'CAN4', type: 'player', name: 'Alistair Johnston', obtained: false },
            { id: 'CAN5', type: 'player', name: 'Samuel Adekugbe', obtained: false },
            { id: 'CAN6', type: 'player', name: 'Richie Laryea', obtained: false },
            { id: 'CAN7', type: 'player', name: 'Derek Cornelius', obtained: false },
            { id: 'CAN8', type: 'player', name: 'Moïse Bombito', obtained: false },
            { id: 'CAN9', type: 'player', name: 'Kamal Miller', obtained: false },
            { id: 'CAN10', type: 'player', name: 'Stephen Eustáquio', obtained: false },
            { id: 'CAN11', type: 'player', name: 'Ismaël Koné', obtained: false },
            { id: 'CAN12', type: 'player', name: 'Jonathan Osorio', obtained: false },
            { id: 'CAN13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'CAN14', type: 'player', name: 'Jacob Shaffelburg', obtained: false },
            { id: 'CAN15', type: 'player', name: 'Mathieu Choinière', obtained: false },
            { id: 'CAN16', type: 'player', name: 'Niko Sigur', obtained: false },
            { id: 'CAN17', type: 'player', name: 'Tajon Buchanan', obtained: false },
            { id: 'CAN18', type: 'player', name: 'Liam Millar', obtained: false },
            { id: 'CAN19', type: 'player', name: 'Cyle Larin', obtained: false },
            { id: 'CAN20', type: 'player', name: 'Jonathan David', obtained: false }
        ]
    };
    
    structure['BIH'] = {
        name: 'Bosnia y Herzegovina',
        flag: '🇧🇦',
        flagFile: 'flags/ba.png',
        grupo: 'B',
        stickers: [
            { id: 'BIH1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'BIH2', type: 'player', name: 'Nikola Vasilj', obtained: false },
            { id: 'BIH3', type: 'player', name: 'Amer Dedic', obtained: false },
            { id: 'BIH4', type: 'player', name: 'Sead Kolasinac', obtained: false },
            { id: 'BIH5', type: 'player', name: 'Tarik Muharemovic', obtained: false },
            { id: 'BIH6', type: 'player', name: 'Nihad Mujakic', obtained: false },
            { id: 'BIH7', type: 'player', name: 'Nikola Katic', obtained: false },
            { id: 'BIH8', type: 'player', name: 'Amir Hadziahmetovic', obtained: false },
            { id: 'BIH9', type: 'player', name: 'Benjamin Tahirovic', obtained: false },
            { id: 'BIH10', type: 'player', name: 'Armin Gigovic', obtained: false },
            { id: 'BIH11', type: 'player', name: 'Ivan Sunjic', obtained: false },
            { id: 'BIH12', type: 'player', name: 'Ivan Basic', obtained: false },
            { id: 'BIH13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'BIH14', type: 'player', name: 'Dzenis Burnic', obtained: false },
            { id: 'BIH15', type: 'player', name: 'Esmir Bajraktarevic', obtained: false },
            { id: 'BIH16', type: 'player', name: 'Amar Memic', obtained: false },
            { id: 'BIH17', type: 'player', name: 'Ermedin Demirovic', obtained: false },
            { id: 'BIH18', type: 'player', name: 'Edin Dzeko', obtained: false },
            { id: 'BIH19', type: 'player', name: 'Samed Bazdar', obtained: false },
            { id: 'BIH20', type: 'player', name: 'Haris Tabakovic', obtained: false }
        ]
    };
    
    structure['QAT'] = {
        name: 'Qatar',
        flag: '🇶🇦',
        flagFile: 'flags/qa.png',
        grupo: 'B',
        stickers: [
            { id: 'QAT1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'QAT2', type: 'player', name: 'Meshaal Barsham', obtained: false },
            { id: 'QAT3', type: 'player', name: 'Sultan Albrake', obtained: false },
            { id: 'QAT4', type: 'player', name: 'Lucas Mendes', obtained: false },
            { id: 'QAT5', type: 'player', name: 'Homam Ahmed', obtained: false },
            { id: 'QAT6', type: 'player', name: 'Boualem Khoukhi', obtained: false },
            { id: 'QAT7', type: 'player', name: 'Pedro Miguel', obtained: false },
            { id: 'QAT8', type: 'player', name: 'Tarek Salman', obtained: false },
            { id: 'QAT9', type: 'player', name: 'Mohamed Al-Mannai', obtained: false },
            { id: 'QAT10', type: 'player', name: 'Karim Boudiaf', obtained: false },
            { id: 'QAT11', type: 'player', name: 'Assim Madibo', obtained: false },
            { id: 'QAT12', type: 'player', name: 'Ahmed Fatehi', obtained: false },
            { id: 'QAT13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'QAT14', type: 'player', name: 'Mohammed Waad', obtained: false },
            { id: 'QAT15', type: 'player', name: 'Abdulaziz Hatem', obtained: false },
            { id: 'QAT16', type: 'player', name: 'Hassan Al-Haydos', obtained: false },
            { id: 'QAT17', type: 'player', name: 'Edmilson Junior', obtained: false },
            { id: 'QAT18', type: 'player', name: 'Akram Hassan Afif', obtained: false },
            { id: 'QAT19', type: 'player', name: 'Ahmed Al Ganehi', obtained: false },
            { id: 'QAT20', type: 'player', name: 'Almoez Ali', obtained: false }
        ]
    };
    
    structure['SUI'] = {
        name: 'Suiza',
        flag: '🇨🇭',
        flagFile: 'flags/ch.png',
        grupo: 'B',
        stickers: [
            { id: 'SUI1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'SUI2', type: 'player', name: 'Gregor Kobel', obtained: false },
            { id: 'SUI3', type: 'player', name: 'Yvon Mvogo', obtained: false },
            { id: 'SUI4', type: 'player', name: 'Manuel Akanji', obtained: false },
            { id: 'SUI5', type: 'player', name: 'Ricardo Rodríguez', obtained: false },
            { id: 'SUI6', type: 'player', name: 'Nico Elvedi', obtained: false },
            { id: 'SUI7', type: 'player', name: 'Aurèle Amenda', obtained: false },
            { id: 'SUI8', type: 'player', name: 'Silvan Widmer', obtained: false },
            { id: 'SUI9', type: 'player', name: 'Granit Xhaka', obtained: false },
            { id: 'SUI10', type: 'player', name: 'Denis Zakaria', obtained: false },
            { id: 'SUI11', type: 'player', name: 'Remo Freuler', obtained: false },
            { id: 'SUI12', type: 'player', name: 'Fabian Rieder', obtained: false },
            { id: 'SUI13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'SUI14', type: 'player', name: 'Ardon Jashari', obtained: false },
            { id: 'SUI15', type: 'player', name: 'Johan Manzambi', obtained: false },
            { id: 'SUI16', type: 'player', name: 'Michel Aebischer', obtained: false },
            { id: 'SUI17', type: 'player', name: 'Breel Embolo', obtained: false },
            { id: 'SUI18', type: 'player', name: 'Ruben Vargas', obtained: false },
            { id: 'SUI19', type: 'player', name: 'Dan Ndoye', obtained: false },
            { id: 'SUI20', type: 'player', name: 'Zeki Amdouni', obtained: false }
        ]
    };
    
    // GRUPO C
    structure['BRA'] = {
        name: 'Brasil',
        flag: '🇧🇷',
        flagFile: 'flags/br.png',
        grupo: 'C',
        stickers: [
            { id: 'BRA1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'BRA2', type: 'player', name: 'Alisson', obtained: false },
            { id: 'BRA3', type: 'player', name: 'Bento', obtained: false },
            { id: 'BRA4', type: 'player', name: 'Marquinhos', obtained: false },
            { id: 'BRA5', type: 'player', name: 'Éder Militão', obtained: false },
            { id: 'BRA6', type: 'player', name: 'Gabriel Magalhães', obtained: false },
            { id: 'BRA7', type: 'player', name: 'Danilo', obtained: false },
            { id: 'BRA8', type: 'player', name: 'Wesley', obtained: false },
            { id: 'BRA9', type: 'player', name: 'Lucas Paquetá', obtained: false },
            { id: 'BRA10', type: 'player', name: 'Casemiro', obtained: false },
            { id: 'BRA11', type: 'player', name: 'Bruno Guimarães', obtained: false },
            { id: 'BRA12', type: 'player', name: 'Luiz Henrique', obtained: false },
            { id: 'BRA13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'BRA14', type: 'player', name: 'Vinicius Júnior', obtained: false },
            { id: 'BRA15', type: 'player', name: 'Rodrygo', obtained: false },
            { id: 'BRA16', type: 'player', name: 'João Pedro', obtained: false },
            { id: 'BRA17', type: 'player', name: 'Matheus Cunha', obtained: false },
            { id: 'BRA18', type: 'player', name: 'Gabriel Martinelli', obtained: false },
            { id: 'BRA19', type: 'player', name: 'Raphinha', obtained: false },
            { id: 'BRA20', type: 'player', name: 'Estévão', obtained: false }
        ]
    };
    
    structure['MAR'] = {
        name: 'Marruecos',
        flag: '🇲🇦',
        flagFile: 'flags/ma.png',
        grupo: 'C',
        stickers: [
            { id: 'MAR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'MAR2', type: 'player', name: 'Yassine Bounou', obtained: false },
            { id: 'MAR3', type: 'player', name: 'Munir El Kajoui', obtained: false },
            { id: 'MAR4', type: 'player', name: 'Achraf Hakimi', obtained: false },
            { id: 'MAR5', type: 'player', name: 'Noussair Mazraoui', obtained: false },
            { id: 'MAR6', type: 'player', name: 'Nayef Aguerd', obtained: false },
            { id: 'MAR7', type: 'player', name: 'Roman Saiss', obtained: false },
            { id: 'MAR8', type: 'player', name: 'Jawad El Yamiq', obtained: false },
            { id: 'MAR9', type: 'player', name: 'Adam Masina', obtained: false },
            { id: 'MAR10', type: 'player', name: 'Sofyan Amrabat', obtained: false },
            { id: 'MAR11', type: 'player', name: 'Azzedine Ounahi', obtained: false },
            { id: 'MAR12', type: 'player', name: 'Eliesse Ben Seghir', obtained: false },
            { id: 'MAR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'MAR14', type: 'player', name: 'Bilal El Khannouss', obtained: false },
            { id: 'MAR15', type: 'player', name: 'Ismael Saibari', obtained: false },
            { id: 'MAR16', type: 'player', name: 'Youssef En-Nesyri', obtained: false },
            { id: 'MAR17', type: 'player', name: 'Abde Ezzalzouli', obtained: false },
            { id: 'MAR18', type: 'player', name: 'Soufiane Rahimi', obtained: false },
            { id: 'MAR19', type: 'player', name: 'Brahim Díaz', obtained: false },
            { id: 'MAR20', type: 'player', name: 'Ayoub El Kaabi', obtained: false }
        ]
    };
    
    structure['HAI'] = {
        name: 'Haití',
        flag: '🇭🇹',
        flagFile: 'flags/ht.png',
        grupo: 'C',
        stickers: [
            { id: 'HAI1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'HAI2', type: 'player', name: 'Johny Placide', obtained: false },
            { id: 'HAI3', type: 'player', name: 'Carlens Arcus', obtained: false },
            { id: 'HAI4', type: 'player', name: 'Martin Expérience', obtained: false },
            { id: 'HAI5', type: 'player', name: 'Jean-Kevin Duverne', obtained: false },
            { id: 'HAI6', type: 'player', name: 'Ricardo Adé', obtained: false },
            { id: 'HAI7', type: 'player', name: 'Duke Lacroix', obtained: false },
            { id: 'HAI8', type: 'player', name: 'Garven Metusala', obtained: false },
            { id: 'HAI9', type: 'player', name: 'Hannes Delcroix', obtained: false },
            { id: 'HAI10', type: 'player', name: 'Leverton Pierre', obtained: false },
            { id: 'HAI11', type: 'player', name: 'Danley Jean Jacques', obtained: false },
            { id: 'HAI12', type: 'player', name: 'Jean-Ricner Bellegarde', obtained: false },
            { id: 'HAI13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'HAI14', type: 'player', name: 'Christopher Attys', obtained: false },
            { id: 'HAI15', type: 'player', name: 'Derrick Etienne Jr.', obtained: false },
            { id: 'HAI16', type: 'player', name: 'Josue Casimir', obtained: false },
            { id: 'HAI17', type: 'player', name: 'Ruben Providence', obtained: false },
            { id: 'HAI18', type: 'player', name: 'Duckens Nazon', obtained: false },
            { id: 'HAI19', type: 'player', name: 'Louicius Deedson', obtained: false },
            { id: 'HAI20', type: 'player', name: 'Frantzdy Pierrot', obtained: false }
        ]
    };
    
    structure['SCO'] = {
        name: 'Escocia',
        flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        grupo: 'C',
        stickers: [
            { id: 'SCO1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'SCO2', type: 'player', name: 'Angus Gunn', obtained: false },
            { id: 'SCO3', type: 'player', name: 'Jack Hendry', obtained: false },
            { id: 'SCO4', type: 'player', name: 'Kieran Tierney', obtained: false },
            { id: 'SCO5', type: 'player', name: 'Aaron Hickey', obtained: false },
            { id: 'SCO6', type: 'player', name: 'Andrew Robertson', obtained: false },
            { id: 'SCO7', type: 'player', name: 'Scott McKenna', obtained: false },
            { id: 'SCO8', type: 'player', name: 'John Souttar', obtained: false },
            { id: 'SCO9', type: 'player', name: 'Anthony Ralston', obtained: false },
            { id: 'SCO10', type: 'player', name: 'Grant Hanley', obtained: false },
            { id: 'SCO11', type: 'player', name: 'Scott McTominay', obtained: false },
            { id: 'SCO12', type: 'player', name: 'Billy Gilmour', obtained: false },
            { id: 'SCO13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'SCO14', type: 'player', name: 'Lewis Ferguson', obtained: false },
            { id: 'SCO15', type: 'player', name: 'Ryan Christie', obtained: false },
            { id: 'SCO16', type: 'player', name: 'Kenny McLean', obtained: false },
            { id: 'SCO17', type: 'player', name: 'John McGinn', obtained: false },
            { id: 'SCO18', type: 'player', name: 'Lyndon Dykes', obtained: false },
            { id: 'SCO19', type: 'player', name: 'Che Adams', obtained: false },
            { id: 'SCO20', type: 'player', name: 'Ben Doak', obtained: false }
        ]
    };
    
    // GRUPO D
    structure['USA'] = {
        name: 'Estados Unidos',
        flag: '🇺🇸',
        flagFile: 'flags/us.png',
        grupo: 'D',
        stickers: [
            { id: 'USA1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'USA2', type: 'player', name: 'Matt Freese', obtained: false },
            { id: 'USA3', type: 'player', name: 'Chris Richards', obtained: false },
            { id: 'USA4', type: 'player', name: 'Tim Ream', obtained: false },
            { id: 'USA5', type: 'player', name: 'Mark McKenzie', obtained: false },
            { id: 'USA6', type: 'player', name: 'Alex Freeman', obtained: false },
            { id: 'USA7', type: 'player', name: 'Antonee Robinson', obtained: false },
            { id: 'USA8', type: 'player', name: 'Tyler Adams', obtained: false },
            { id: 'USA9', type: 'player', name: 'Tanner Tessmann', obtained: false },
            { id: 'USA10', type: 'player', name: 'Weston McKennie', obtained: false },
            { id: 'USA11', type: 'player', name: 'Christian Roldan', obtained: false },
            { id: 'USA12', type: 'player', name: 'Timothy Weah', obtained: false },
            { id: 'USA13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'USA14', type: 'player', name: 'Diego Luna', obtained: false },
            { id: 'USA15', type: 'player', name: 'Malik Tillman', obtained: false },
            { id: 'USA16', type: 'player', name: 'Christian Pulisic', obtained: false },
            { id: 'USA17', type: 'player', name: 'Brenden Aaronson', obtained: false },
            { id: 'USA18', type: 'player', name: 'Ricardo Pepi', obtained: false },
            { id: 'USA19', type: 'player', name: 'Haji Wright', obtained: false },
            { id: 'USA20', type: 'player', name: 'Folarin Balogun', obtained: false }
        ]
    };
    
    structure['PAR'] = {
        name: 'Paraguay',
        flag: '🇵🇾',
        flagFile: 'flags/py.png',
        grupo: 'D',
        stickers: [
            { id: 'PAR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'PAR2', type: 'player', name: 'Roberto Fernández', obtained: false },
            { id: 'PAR3', type: 'player', name: 'Orlando Gill', obtained: false },
            { id: 'PAR4', type: 'player', name: 'Gustavo Gómez', obtained: false },
            { id: 'PAR5', type: 'player', name: 'Fabián Balbuena', obtained: false },
            { id: 'PAR6', type: 'player', name: 'Juan José Cáceres', obtained: false },
            { id: 'PAR7', type: 'player', name: 'Omar Alderete', obtained: false },
            { id: 'PAR8', type: 'player', name: 'Junior Alonso', obtained: false },
            { id: 'PAR9', type: 'player', name: 'Mathías Villasanti', obtained: false },
            { id: 'PAR10', type: 'player', name: 'Diego Gómez', obtained: false },
            { id: 'PAR11', type: 'player', name: 'Damián Bobadilla', obtained: false },
            { id: 'PAR12', type: 'player', name: 'Andrés Cubas', obtained: false },
            { id: 'PAR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'PAR14', type: 'player', name: 'Matías Galarza Fonda', obtained: false },
            { id: 'PAR15', type: 'player', name: 'Julio Enciso', obtained: false },
            { id: 'PAR16', type: 'player', name: 'Alejandro Romero Gamarra', obtained: false },
            { id: 'PAR17', type: 'player', name: 'Miguel Almirón', obtained: false },
            { id: 'PAR18', type: 'player', name: 'Ramón Sosa', obtained: false },
            { id: 'PAR19', type: 'player', name: 'Ángel Romero', obtained: false },
            { id: 'PAR20', type: 'player', name: 'Antonio Sanabria', obtained: false }
        ]
    };
    
    structure['AUS'] = {
        name: 'Australia',
        flag: '🇦🇺',
        flagFile: 'flags/au.png',
        grupo: 'D',
        stickers: [
            { id: 'AUS1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'AUS2', type: 'player', name: 'Mathew Ryan', obtained: false },
            { id: 'AUS3', type: 'player', name: 'Joe Gauci', obtained: false },
            { id: 'AUS4', type: 'player', name: 'Harry Souttar', obtained: false },
            { id: 'AUS5', type: 'player', name: 'Alessandro Circati', obtained: false },
            { id: 'AUS6', type: 'player', name: 'Jordan Bos', obtained: false },
            { id: 'AUS7', type: 'player', name: 'Aziz Behich', obtained: false },
            { id: 'AUS8', type: 'player', name: 'Cameron Burgess', obtained: false },
            { id: 'AUS9', type: 'player', name: 'Lewis Miller', obtained: false },
            { id: 'AUS10', type: 'player', name: 'Milos Degenek', obtained: false },
            { id: 'AUS11', type: 'player', name: 'Jackson Irvine', obtained: false },
            { id: 'AUS12', type: 'player', name: 'Riley McGree', obtained: false },
            { id: 'AUS13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'AUS14', type: 'player', name: 'Aiden O\'Neill', obtained: false },
            { id: 'AUS15', type: 'player', name: 'Connor Metcalfe', obtained: false },
            { id: 'AUS16', type: 'player', name: 'Patrick Yazbek', obtained: false },
            { id: 'AUS17', type: 'player', name: 'Craig Goodwin', obtained: false },
            { id: 'AUS18', type: 'player', name: 'Kusini Yengi', obtained: false },
            { id: 'AUS19', type: 'player', name: 'Nestory Irankunda', obtained: false },
            { id: 'AUS20', type: 'player', name: 'Mohamed Touré', obtained: false }
        ]
    };
    
    structure['TUR'] = {
        name: 'Turquía',
        flag: '🇹🇷',
        flagFile: 'flags/tr.png',
        grupo: 'D',
        stickers: [
            { id: 'TUR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'TUR2', type: 'player', name: 'Uğurcan Çakır', obtained: false },
            { id: 'TUR3', type: 'player', name: 'Mert Müldür', obtained: false },
            { id: 'TUR4', type: 'player', name: 'Zeki Çelik', obtained: false },
            { id: 'TUR5', type: 'player', name: 'Abdülkerim Bardakcı', obtained: false },
            { id: 'TUR6', type: 'player', name: 'Çağlar Söyüncü', obtained: false },
            { id: 'TUR7', type: 'player', name: 'Merih Demiral', obtained: false },
            { id: 'TUR8', type: 'player', name: 'Ferdi Kadıoğlu', obtained: false },
            { id: 'TUR9', type: 'player', name: 'Kaan Ayhan', obtained: false },
            { id: 'TUR10', type: 'player', name: 'İsmail Yüksek', obtained: false },
            { id: 'TUR11', type: 'player', name: 'Hakan Çalhanoğlu', obtained: false },
            { id: 'TUR12', type: 'player', name: 'Orkun Kökçü', obtained: false },
            { id: 'TUR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'TUR14', type: 'player', name: 'Arda Güler', obtained: false },
            { id: 'TUR15', type: 'player', name: 'İrfan Can Kahveci', obtained: false },
            { id: 'TUR16', type: 'player', name: 'Yunus Akgün', obtained: false },
            { id: 'TUR17', type: 'player', name: 'Can Uzun', obtained: false },
            { id: 'TUR18', type: 'player', name: 'Barış Alper Yılmaz', obtained: false },
            { id: 'TUR19', type: 'player', name: 'Kerem Aktürkoğlu', obtained: false },
            { id: 'TUR20', type: 'player', name: 'Kenan Yıldız', obtained: false }
        ]
    };
    
    // GRUPO E
    structure['GER'] = {
        name: 'Alemania',
        flag: '🇩🇪',
        grupo: 'E',
        stickers: [
            { id: 'GER1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'GER2', type: 'player', name: 'Marc-André ter Stegen', obtained: false },
            { id: 'GER3', type: 'player', name: 'Jonathan Tah', obtained: false },
            { id: 'GER4', type: 'player', name: 'David Raum', obtained: false },
            { id: 'GER5', type: 'player', name: 'Nico Schlotterbeck', obtained: false },
            { id: 'GER6', type: 'player', name: 'Antonio Rüdiger', obtained: false },
            { id: 'GER7', type: 'player', name: 'Waldemar Anton', obtained: false },
            { id: 'GER8', type: 'player', name: 'Ridle Baku', obtained: false },
            { id: 'GER9', type: 'player', name: 'Maximilian Mittelstädt', obtained: false },
            { id: 'GER10', type: 'player', name: 'Joshua Kimmich', obtained: false },
            { id: 'GER11', type: 'player', name: 'Florian Wirtz', obtained: false },
            { id: 'GER12', type: 'player', name: 'Felix Nmecha', obtained: false },
            { id: 'GER13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'GER14', type: 'player', name: 'Leon Goretzka', obtained: false },
            { id: 'GER15', type: 'player', name: 'Jamal Musiala', obtained: false },
            { id: 'GER16', type: 'player', name: 'Serge Gnabry', obtained: false },
            { id: 'GER17', type: 'player', name: 'Kai Havertz', obtained: false },
            { id: 'GER18', type: 'player', name: 'Leroy Sané', obtained: false },
            { id: 'GER19', type: 'player', name: 'Karim Adeyemi', obtained: false },
            { id: 'GER20', type: 'player', name: 'Nick Woltemade', obtained: false }
        ]
    };
    
    structure['CUW'] = {
        name: 'Curazao',
        flag: '🇨🇼',
        grupo: 'E',
        stickers: [
            { id: 'CUW1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'CUW2', type: 'player', name: 'Eloy Room', obtained: false },
            { id: 'CUW3', type: 'player', name: 'Armando Obispo', obtained: false },
            { id: 'CUW4', type: 'player', name: 'Sherel Floranus', obtained: false },
            { id: 'CUW5', type: 'player', name: 'Jurien Gaari', obtained: false },
            { id: 'CUW6', type: 'player', name: 'Joshua Brenet', obtained: false },
            { id: 'CUW7', type: 'player', name: 'Roshon Van Eijma', obtained: false },
            { id: 'CUW8', type: 'player', name: 'Shurandy Sambo', obtained: false },
            { id: 'CUW9', type: 'player', name: 'Livano Comenencia', obtained: false },
            { id: 'CUW10', type: 'player', name: 'Godfried Roemeratoe', obtained: false },
            { id: 'CUW11', type: 'player', name: 'Juninho Bacuna', obtained: false },
            { id: 'CUW12', type: 'player', name: 'Leandro Bacuna', obtained: false },
            { id: 'CUW13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'CUW14', type: 'player', name: 'Tahith Chong', obtained: false },
            { id: 'CUW15', type: 'player', name: 'Kenji Gorre', obtained: false },
            { id: 'CUW16', type: 'player', name: 'Jearl Margaritha', obtained: false },
            { id: 'CUW17', type: 'player', name: 'Jurgen Locadia', obtained: false },
            { id: 'CUW18', type: 'player', name: 'Jeremy Antonisse', obtained: false },
            { id: 'CUW19', type: 'player', name: 'Gervane Kastaneer', obtained: false },
            { id: 'CUW20', type: 'player', name: 'Sontje Hansen', obtained: false }
        ]
    };
    
    structure['CIV'] = {
        name: 'Costa de Marfil',
        flag: '🇨🇮',
        grupo: 'E',
        stickers: [
            { id: 'CIV1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'CIV2', type: 'player', name: 'Yahia Fofana', obtained: false },
            { id: 'CIV3', type: 'player', name: 'Ghislain Konan', obtained: false },
            { id: 'CIV4', type: 'player', name: 'Wilfried Singo', obtained: false },
            { id: 'CIV5', type: 'player', name: 'Odilon Kossounou', obtained: false },
            { id: 'CIV6', type: 'player', name: 'Evan N\'Dicka', obtained: false },
            { id: 'CIV7', type: 'player', name: 'Willy Boly', obtained: false },
            { id: 'CIV8', type: 'player', name: 'Emmanuel Agbadou', obtained: false },
            { id: 'CIV9', type: 'player', name: 'Ousmane Diomandé', obtained: false },
            { id: 'CIV10', type: 'player', name: 'Franck Kessié', obtained: false },
            { id: 'CIV11', type: 'player', name: 'Seko Fofana', obtained: false },
            { id: 'CIV12', type: 'player', name: 'Ibrahim Sangaré', obtained: false },
            { id: 'CIV13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'CIV14', type: 'player', name: 'Jean-Philippe Gbamin', obtained: false },
            { id: 'CIV15', type: 'player', name: 'Amad Diallo', obtained: false },
            { id: 'CIV16', type: 'player', name: 'Sébastien Haller', obtained: false },
            { id: 'CIV17', type: 'player', name: 'Simon Adingra', obtained: false },
            { id: 'CIV18', type: 'player', name: 'Yan Diomandé', obtained: false },
            { id: 'CIV19', type: 'player', name: 'Evann Guessand', obtained: false },
            { id: 'CIV20', type: 'player', name: 'Oumar Diakité', obtained: false }
        ]
    };
    
    structure['ECU'] = {
        name: 'Ecuador',
        flag: '🇪🇨',
        grupo: 'E',
        stickers: [
            { id: 'ECU1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'ECU2', type: 'player', name: 'Hernán Galíndez', obtained: false },
            { id: 'ECU3', type: 'player', name: 'Gonzalo Valle', obtained: false },
            { id: 'ECU4', type: 'player', name: 'Piero Hincapié', obtained: false },
            { id: 'ECU5', type: 'player', name: 'Pervis Estupiñán', obtained: false },
            { id: 'ECU6', type: 'player', name: 'Willian Pacho', obtained: false },
            { id: 'ECU7', type: 'player', name: 'Ángelo Preciado', obtained: false },
            { id: 'ECU8', type: 'player', name: 'Joel Ordóñez', obtained: false },
            { id: 'ECU9', type: 'player', name: 'Moisés Caicedo', obtained: false },
            { id: 'ECU10', type: 'player', name: 'Alan Franco', obtained: false },
            { id: 'ECU11', type: 'player', name: 'Kendry Páez', obtained: false },
            { id: 'ECU12', type: 'player', name: 'Pedro Vite', obtained: false },
            { id: 'ECU13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'ECU14', type: 'player', name: 'John Yeboah', obtained: false },
            { id: 'ECU15', type: 'player', name: 'Leonardo Campana', obtained: false },
            { id: 'ECU16', type: 'player', name: 'Gonzalo Plata', obtained: false },
            { id: 'ECU17', type: 'player', name: 'Nilson Angulo', obtained: false },
            { id: 'ECU18', type: 'player', name: 'Alan Minda', obtained: false },
            { id: 'ECU19', type: 'player', name: 'Kevin Rodríguez', obtained: false },
            { id: 'ECU20', type: 'player', name: 'Enner Valencia', obtained: false }
        ]
    };
    
    // GRUPO F
    structure['NED'] = {
        name: 'Países Bajos',
        flag: '🇳🇱',
        grupo: 'F',
        stickers: [
            { id: 'NED1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'NED2', type: 'player', name: 'Bart Verbruggen', obtained: false },
            { id: 'NED3', type: 'player', name: 'Virgil van Dijk', obtained: false },
            { id: 'NED4', type: 'player', name: 'Micky van de Ven', obtained: false },
            { id: 'NED5', type: 'player', name: 'Jurrien Timber', obtained: false },
            { id: 'NED6', type: 'player', name: 'Denzel Dumfries', obtained: false },
            { id: 'NED7', type: 'player', name: 'Nathan Aké', obtained: false },
            { id: 'NED8', type: 'player', name: 'Jeremie Frimpong', obtained: false },
            { id: 'NED9', type: 'player', name: 'Jan Paul van Hecke', obtained: false },
            { id: 'NED10', type: 'player', name: 'Tijjani Reijnders', obtained: false },
            { id: 'NED11', type: 'player', name: 'Ryan Gravenberch', obtained: false },
            { id: 'NED12', type: 'player', name: 'Teun Koopmeiners', obtained: false },
            { id: 'NED13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'NED14', type: 'player', name: 'Frenkie de Jong', obtained: false },
            { id: 'NED15', type: 'player', name: 'Xavi Simons', obtained: false },
            { id: 'NED16', type: 'player', name: 'Justin Kluivert', obtained: false },
            { id: 'NED17', type: 'player', name: 'Memphis Depay', obtained: false },
            { id: 'NED18', type: 'player', name: 'Donyell Malen', obtained: false },
            { id: 'NED19', type: 'player', name: 'Wout Weghorst', obtained: false },
            { id: 'NED20', type: 'player', name: 'Cody Gakpo', obtained: false }
        ]
    };
    
    structure['JPN'] = {
        name: 'Japón',
        flag: '🇯🇵',
        grupo: 'F',
        stickers: [
            { id: 'JPN1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'JPN2', type: 'player', name: 'Zion Suzuki', obtained: false },
            { id: 'JPN3', type: 'player', name: 'Henry Hiroki Mochizuki', obtained: false },
            { id: 'JPN4', type: 'player', name: 'Ayumu Seko', obtained: false },
            { id: 'JPN5', type: 'player', name: 'Junnosuke Suzuki', obtained: false },
            { id: 'JPN6', type: 'player', name: 'Shogo Taniguchi', obtained: false },
            { id: 'JPN7', type: 'player', name: 'Tsuyoshi Watanabe', obtained: false },
            { id: 'JPN8', type: 'player', name: 'Kaishu Sano', obtained: false },
            { id: 'JPN9', type: 'player', name: 'Yuki Soma', obtained: false },
            { id: 'JPN10', type: 'player', name: 'Ao Tanaka', obtained: false },
            { id: 'JPN11', type: 'player', name: 'Daichi Kamada', obtained: false },
            { id: 'JPN12', type: 'player', name: 'Takefusa Kubo', obtained: false },
            { id: 'JPN13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'JPN14', type: 'player', name: 'Ritsu Doan', obtained: false },
            { id: 'JPN15', type: 'player', name: 'Keito Nakamura', obtained: false },
            { id: 'JPN16', type: 'player', name: 'Takumi Minamino', obtained: false },
            { id: 'JPN17', type: 'player', name: 'Shuto Machino', obtained: false },
            { id: 'JPN18', type: 'player', name: 'Junya Ito', obtained: false },
            { id: 'JPN19', type: 'player', name: 'Koki Ogawa', obtained: false },
            { id: 'JPN20', type: 'player', name: 'Ayase Ueda', obtained: false }
        ]
    };
    
    structure['SWE'] = {
        name: 'Suecia',
        flag: '🇸🇪',
        grupo: 'F',
        stickers: [
            { id: 'SWE1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'SWE2', type: 'player', name: 'Victor Johansson', obtained: false },
            { id: 'SWE3', type: 'player', name: 'Isak Hien', obtained: false },
            { id: 'SWE4', type: 'player', name: 'Gabriel Gudmundsson', obtained: false },
            { id: 'SWE5', type: 'player', name: 'Emil Holm', obtained: false },
            { id: 'SWE6', type: 'player', name: 'Victor Nilsson Lindelöf', obtained: false },
            { id: 'SWE7', type: 'player', name: 'Gustaf Lagerbielke', obtained: false },
            { id: 'SWE8', type: 'player', name: 'Lucas Bergvall', obtained: false },
            { id: 'SWE9', type: 'player', name: 'Hugo Larsson', obtained: false },
            { id: 'SWE10', type: 'player', name: 'Jesper Karlström', obtained: false },
            { id: 'SWE11', type: 'player', name: 'Yasin Ayari', obtained: false },
            { id: 'SWE12', type: 'player', name: 'Mattias Svanberg', obtained: false },
            { id: 'SWE13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'SWE14', type: 'player', name: 'Daniel Svensson', obtained: false },
            { id: 'SWE15', type: 'player', name: 'Ken Sema', obtained: false },
            { id: 'SWE16', type: 'player', name: 'Roony Bardghji', obtained: false },
            { id: 'SWE17', type: 'player', name: 'Dejan Kulusevski', obtained: false },
            { id: 'SWE18', type: 'player', name: 'Anthony Elanga', obtained: false },
            { id: 'SWE19', type: 'player', name: 'Alexander Isak', obtained: false },
            { id: 'SWE20', type: 'player', name: 'Viktor Gyökeres', obtained: false }
        ]
    };
    
    structure['TUN'] = {
        name: 'Túnez',
        flag: '🇹🇳',
        grupo: 'F',
        stickers: [
            { id: 'TUN1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'TUN2', type: 'player', name: 'Bechir Ben Said', obtained: false },
            { id: 'TUN3', type: 'player', name: 'Aymen Dahmen', obtained: false },
            { id: 'TUN4', type: 'player', name: 'Yan Valery', obtained: false },
            { id: 'TUN5', type: 'player', name: 'Montassar Talbi', obtained: false },
            { id: 'TUN6', type: 'player', name: 'Yassine Meriah', obtained: false },
            { id: 'TUN7', type: 'player', name: 'Ali Abdi', obtained: false },
            { id: 'TUN8', type: 'player', name: 'Dylan Bronn', obtained: false },
            { id: 'TUN9', type: 'player', name: 'Ellyes Skhiri', obtained: false },
            { id: 'TUN10', type: 'player', name: 'Aissa Laidouni', obtained: false },
            { id: 'TUN11', type: 'player', name: 'Ferjani Sassi', obtained: false },
            { id: 'TUN12', type: 'player', name: 'Mohamed Ali Ben Romdhane', obtained: false },
            { id: 'TUN13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'TUN14', type: 'player', name: 'Hannibal Mejbri', obtained: false },
            { id: 'TUN15', type: 'player', name: 'Elias Achouri', obtained: false },
            { id: 'TUN16', type: 'player', name: 'Elias Saad', obtained: false },
            { id: 'TUN17', type: 'player', name: 'Hazem Mastouri', obtained: false },
            { id: 'TUN18', type: 'player', name: 'Ismael Gharbi', obtained: false },
            { id: 'TUN19', type: 'player', name: 'Sayfallah Ltaief', obtained: false },
            { id: 'TUN20', type: 'player', name: 'Naim Sliti', obtained: false }
        ]
    };
    
    // GRUPO G
    structure['BEL'] = {
        name: 'Bélgica',
        flag: '🇧🇪',
        grupo: 'G',
        stickers: [
            { id: 'BEL1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'BEL2', type: 'player', name: 'Thibaut Courtois', obtained: false },
            { id: 'BEL3', type: 'player', name: 'Arthur Theate', obtained: false },
            { id: 'BEL4', type: 'player', name: 'Timothy Castagne', obtained: false },
            { id: 'BEL5', type: 'player', name: 'Zeno Debast', obtained: false },
            { id: 'BEL6', type: 'player', name: 'Brandon Mechele', obtained: false },
            { id: 'BEL7', type: 'player', name: 'Maxim De Cuyper', obtained: false },
            { id: 'BEL8', type: 'player', name: 'Thomas Meunier', obtained: false },
            { id: 'BEL9', type: 'player', name: 'Youri Tielemans', obtained: false },
            { id: 'BEL10', type: 'player', name: 'Amadou Onana', obtained: false },
            { id: 'BEL11', type: 'player', name: 'Nicolas Raskin', obtained: false },
            { id: 'BEL12', type: 'player', name: 'Alexis Saelemaekers', obtained: false },
            { id: 'BEL13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'BEL14', type: 'player', name: 'Hans Vanaken', obtained: false },
            { id: 'BEL15', type: 'player', name: 'Kevin De Bruyne', obtained: false },
            { id: 'BEL16', type: 'player', name: 'Jérémy Doku', obtained: false },
            { id: 'BEL17', type: 'player', name: 'Charles De Ketelaere', obtained: false },
            { id: 'BEL18', type: 'player', name: 'Leandro Trossard', obtained: false },
            { id: 'BEL19', type: 'player', name: 'Loïs Openda', obtained: false },
            { id: 'BEL20', type: 'player', name: 'Romelu Lukaku', obtained: false }
        ]
    };
    
    structure['EGY'] = {
        name: 'Egipto',
        flag: '🇪🇬',
        grupo: 'G',
        stickers: [
            { id: 'EGY1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'EGY2', type: 'player', name: 'Mohamed El Shenawy', obtained: false },
            { id: 'EGY3', type: 'player', name: 'Mohamed Hany', obtained: false },
            { id: 'EGY4', type: 'player', name: 'Mohamed Hamdy', obtained: false },
            { id: 'EGY5', type: 'player', name: 'Yasser Ibrahim', obtained: false },
            { id: 'EGY6', type: 'player', name: 'Khaled Sobhi', obtained: false },
            { id: 'EGY7', type: 'player', name: 'Ramy Rabia', obtained: false },
            { id: 'EGY8', type: 'player', name: 'Hossam Abdelmaguid', obtained: false },
            { id: 'EGY9', type: 'player', name: 'Ahmed Fatouh', obtained: false },
            { id: 'EGY10', type: 'player', name: 'Marwan Attia', obtained: false },
            { id: 'EGY11', type: 'player', name: 'Zizo', obtained: false },
            { id: 'EGY12', type: 'player', name: 'Hamdy Fathy', obtained: false },
            { id: 'EGY13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'EGY14', type: 'player', name: 'Mohamed Lasheen', obtained: false },
            { id: 'EGY15', type: 'player', name: 'Emam Ashour', obtained: false },
            { id: 'EGY16', type: 'player', name: 'Osama Faisal', obtained: false },
            { id: 'EGY17', type: 'player', name: 'Mohamed Salah', obtained: false },
            { id: 'EGY18', type: 'player', name: 'Mostafa Mohamed', obtained: false },
            { id: 'EGY19', type: 'player', name: 'Trezeguet', obtained: false },
            { id: 'EGY20', type: 'player', name: 'Omar Marmoush', obtained: false }
        ]
    };
    
    structure['IRN'] = {
        name: 'Irán',
        flag: '🇮🇷',
        grupo: 'G',
        stickers: [
            { id: 'IRN1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'IRN2', type: 'player', name: 'Alireza Beiranvand', obtained: false },
            { id: 'IRN3', type: 'player', name: 'Morteza Pouraliganji', obtained: false },
            { id: 'IRN4', type: 'player', name: 'Ehsan Hajsafi', obtained: false },
            { id: 'IRN5', type: 'player', name: 'Milad Mohammadi', obtained: false },
            { id: 'IRN6', type: 'player', name: 'Shojae Khalilzadeh', obtained: false },
            { id: 'IRN7', type: 'player', name: 'Ramin Rezaeian', obtained: false },
            { id: 'IRN8', type: 'player', name: 'Hossein Kanaani', obtained: false },
            { id: 'IRN9', type: 'player', name: 'Sadegh Moharrami', obtained: false },
            { id: 'IRN10', type: 'player', name: 'Saleh Hardani', obtained: false },
            { id: 'IRN11', type: 'player', name: 'Saeed Ezatolahi', obtained: false },
            { id: 'IRN12', type: 'player', name: 'Saman Ghoddos', obtained: false },
            { id: 'IRN13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'IRN14', type: 'player', name: 'Omid Noorafkan', obtained: false },
            { id: 'IRN15', type: 'player', name: 'Roozbeh Cheshmi', obtained: false },
            { id: 'IRN16', type: 'player', name: 'Mohammad Mohebi', obtained: false },
            { id: 'IRN17', type: 'player', name: 'Sardar Azmoun', obtained: false },
            { id: 'IRN18', type: 'player', name: 'Mehdi Taremi', obtained: false },
            { id: 'IRN19', type: 'player', name: 'Alireza Jahanbakhsh', obtained: false },
            { id: 'IRN20', type: 'player', name: 'Ali Gholizadeh', obtained: false }
        ]
    };
    
    structure['NZL'] = {
        name: 'Nueva Zelanda',
        flag: '🇳🇿',
        grupo: 'G',
        stickers: [
            { id: 'NZL1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'NZL2', type: 'player', name: 'Max Crocombe', obtained: false },
            { id: 'NZL3', type: 'player', name: 'Alex Paulsen', obtained: false },
            { id: 'NZL4', type: 'player', name: 'Michael Boxall', obtained: false },
            { id: 'NZL5', type: 'player', name: 'Liberato Cacace', obtained: false },
            { id: 'NZL6', type: 'player', name: 'Tim Payne', obtained: false },
            { id: 'NZL7', type: 'player', name: 'Tyler Bindon', obtained: false },
            { id: 'NZL8', type: 'player', name: 'Francis de Vries', obtained: false },
            { id: 'NZL9', type: 'player', name: 'Finn Surman', obtained: false },
            { id: 'NZL10', type: 'player', name: 'Joe Bell', obtained: false },
            { id: 'NZL11', type: 'player', name: 'Sarpreet Singh', obtained: false },
            { id: 'NZL12', type: 'player', name: 'Ryan Thomas', obtained: false },
            { id: 'NZL13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'NZL14', type: 'player', name: 'Matthew Garbett', obtained: false },
            { id: 'NZL15', type: 'player', name: 'Marko Stamenić', obtained: false },
            { id: 'NZL16', type: 'player', name: 'Ben Old', obtained: false },
            { id: 'NZL17', type: 'player', name: 'Chris Wood', obtained: false },
            { id: 'NZL18', type: 'player', name: 'Elijah Just', obtained: false },
            { id: 'NZL19', type: 'player', name: 'Callum McCowatt', obtained: false },
            { id: 'NZL20', type: 'player', name: 'Kosta Barbarouses', obtained: false }
        ]
    };
    
    // GRUPO H
    structure['ESP'] = {
        name: 'España',
        flag: '🇪🇸',
        grupo: 'H',
        stickers: [
            { id: 'ESP1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'ESP2', type: 'player', name: 'Unai Simón', obtained: false },
            { id: 'ESP3', type: 'player', name: 'Robin Le Normand', obtained: false },
            { id: 'ESP4', type: 'player', name: 'Aymeric Laporte', obtained: false },
            { id: 'ESP5', type: 'player', name: 'Dean Huijsen', obtained: false },
            { id: 'ESP6', type: 'player', name: 'Pedro Porro', obtained: false },
            { id: 'ESP7', type: 'player', name: 'Dani Carvajal', obtained: false },
            { id: 'ESP8', type: 'player', name: 'Marc Cucurella', obtained: false },
            { id: 'ESP9', type: 'player', name: 'Martín Zubimendi', obtained: false },
            { id: 'ESP10', type: 'player', name: 'Rodri', obtained: false },
            { id: 'ESP11', type: 'player', name: 'Pedri', obtained: false },
            { id: 'ESP12', type: 'player', name: 'Fabián Ruiz', obtained: false },
            { id: 'ESP13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'ESP14', type: 'player', name: 'Mikel Merino', obtained: false },
            { id: 'ESP15', type: 'player', name: 'Lamine Yamal', obtained: false },
            { id: 'ESP16', type: 'player', name: 'Dani Olmo', obtained: false },
            { id: 'ESP17', type: 'player', name: 'Nico Williams', obtained: false },
            { id: 'ESP18', type: 'player', name: 'Ferran Torres', obtained: false },
            { id: 'ESP19', type: 'player', name: 'Álvaro Morata', obtained: false },
            { id: 'ESP20', type: 'player', name: 'Mikel Oyarzabal', obtained: false }
        ]
    };
    
    structure['CPV'] = {
        name: 'Cabo Verde',
        flag: '🇨🇻',
        grupo: 'H',
        stickers: [
            { id: 'CPV1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'CPV2', type: 'player', name: 'Vozinha', obtained: false },
            { id: 'CPV3', type: 'player', name: 'Logan Costa', obtained: false },
            { id: 'CPV4', type: 'player', name: 'Pico', obtained: false },
            { id: 'CPV5', type: 'player', name: 'Diney', obtained: false },
            { id: 'CPV6', type: 'player', name: 'Steven Moreira', obtained: false },
            { id: 'CPV7', type: 'player', name: 'Wagner Pina', obtained: false },
            { id: 'CPV8', type: 'player', name: 'João Paulo', obtained: false },
            { id: 'CPV9', type: 'player', name: 'Yannick Semedo', obtained: false },
            { id: 'CPV10', type: 'player', name: 'Kevin Pina', obtained: false },
            { id: 'CPV11', type: 'player', name: 'Patrick Andrade', obtained: false },
            { id: 'CPV12', type: 'player', name: 'Jamiro Monteiro', obtained: false },
            { id: 'CPV13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'CPV14', type: 'player', name: 'Deroy Duarte', obtained: false },
            { id: 'CPV15', type: 'player', name: 'Garry Rodrigues', obtained: false },
            { id: 'CPV16', type: 'player', name: 'Jovane Cabral', obtained: false },
            { id: 'CPV17', type: 'player', name: 'Ryan Mendes', obtained: false },
            { id: 'CPV18', type: 'player', name: 'Dailon Livramento', obtained: false },
            { id: 'CPV19', type: 'player', name: 'Willy Semedo', obtained: false },
            { id: 'CPV20', type: 'player', name: 'Bebé', obtained: false }
        ]
    };
    
    structure['KSA'] = {
        name: 'Arabia Saudita',
        flag: '🇸🇦',
        grupo: 'H',
        stickers: [
            { id: 'KSA1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'KSA2', type: 'player', name: 'Nawaf Al-Aqidi', obtained: false },
            { id: 'KSA3', type: 'player', name: 'Abdulrahman Al-Sanbi', obtained: false },
            { id: 'KSA4', type: 'player', name: 'Saud Abdulhamid', obtained: false },
            { id: 'KSA5', type: 'player', name: 'Nawaf Boushal', obtained: false },
            { id: 'KSA6', type: 'player', name: 'Jihad Thakri', obtained: false },
            { id: 'KSA7', type: 'player', name: 'Moteb Al-Harbi', obtained: false },
            { id: 'KSA8', type: 'player', name: 'Hassan Al-Tambakti', obtained: false },
            { id: 'KSA9', type: 'player', name: 'Musab Al-Juwair', obtained: false },
            { id: 'KSA10', type: 'player', name: 'Ziyad Al-Johani', obtained: false },
            { id: 'KSA11', type: 'player', name: 'Abdullah Al-Khaibari', obtained: false },
            { id: 'KSA12', type: 'player', name: 'Nasser Al-Dawsari', obtained: false },
            { id: 'KSA13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'KSA14', type: 'player', name: 'Saleh Abu Alshamat', obtained: false },
            { id: 'KSA15', type: 'player', name: 'Marwan Al-Sahafi', obtained: false },
            { id: 'KSA16', type: 'player', name: 'Salem Al-Dawsari', obtained: false },
            { id: 'KSA17', type: 'player', name: 'Abdulrahman Al-Aboud', obtained: false },
            { id: 'KSA18', type: 'player', name: 'Feras Akbrikan', obtained: false },
            { id: 'KSA19', type: 'player', name: 'Saleh Al-Shehri', obtained: false },
            { id: 'KSA20', type: 'player', name: 'Abdullah Al-Hamdan', obtained: false }
        ]
    };
    
    structure['URU'] = {
        name: 'Uruguay',
        flag: '🇺🇾',
        grupo: 'H',
        stickers: [
            { id: 'URU1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'URU2', type: 'player', name: 'Sergio Rochet', obtained: false },
            { id: 'URU3', type: 'player', name: 'Santiago Mele', obtained: false },
            { id: 'URU4', type: 'player', name: 'Ronald Araújo', obtained: false },
            { id: 'URU5', type: 'player', name: 'José María Giménez', obtained: false },
            { id: 'URU6', type: 'player', name: 'Sebastián Cáceres', obtained: false },
            { id: 'URU7', type: 'player', name: 'Mathías Olivera', obtained: false },
            { id: 'URU8', type: 'player', name: 'Guillermo Varela', obtained: false },
            { id: 'URU9', type: 'player', name: 'Nahitan Nández', obtained: false },
            { id: 'URU10', type: 'player', name: 'Federico Valverde', obtained: false },
            { id: 'URU11', type: 'player', name: 'Giorgian De Arrascaeta', obtained: false },
            { id: 'URU12', type: 'player', name: 'Rodrigo Bentancur', obtained: false },
            { id: 'URU13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'URU14', type: 'player', name: 'Manuel Ugarte', obtained: false },
            { id: 'URU15', type: 'player', name: 'Nicolás de la Cruz', obtained: false },
            { id: 'URU16', type: 'player', name: 'Maxi Araújo', obtained: false },
            { id: 'URU17', type: 'player', name: 'Darwin Núñez', obtained: false },
            { id: 'URU18', type: 'player', name: 'Federico Viñas', obtained: false },
            { id: 'URU19', type: 'player', name: 'Rodrigo Aguirre', obtained: false },
            { id: 'URU20', type: 'player', name: 'Facundo Pellistri', obtained: false }
        ]
    };
    
    // GRUPO I
    structure['FRA'] = {
        name: 'Francia',
        flag: '🇫🇷',
        grupo: 'I',
        stickers: [
            { id: 'FRA1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'FRA2', type: 'player', name: 'Mike Maignan', obtained: false },
            { id: 'FRA3', type: 'player', name: 'Theo Hernández', obtained: false },
            { id: 'FRA4', type: 'player', name: 'William Saliba', obtained: false },
            { id: 'FRA5', type: 'player', name: 'Jules Koundé', obtained: false },
            { id: 'FRA6', type: 'player', name: 'Ibrahima Konaté', obtained: false },
            { id: 'FRA7', type: 'player', name: 'Dayot Upamecano', obtained: false },
            { id: 'FRA8', type: 'player', name: 'Lucas Digne', obtained: false },
            { id: 'FRA9', type: 'player', name: 'Aurélien Tchouaméni', obtained: false },
            { id: 'FRA10', type: 'player', name: 'Eduardo Camavinga', obtained: false },
            { id: 'FRA11', type: 'player', name: 'Manu Koné', obtained: false },
            { id: 'FRA12', type: 'player', name: 'Adrien Rabiot', obtained: false },
            { id: 'FRA13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'FRA14', type: 'player', name: 'Michael Olise', obtained: false },
            { id: 'FRA15', type: 'player', name: 'Ousmane Dembélé', obtained: false },
            { id: 'FRA16', type: 'player', name: 'Bradley Barcola', obtained: false },
            { id: 'FRA17', type: 'player', name: 'Désiré Doué', obtained: false },
            { id: 'FRA18', type: 'player', name: 'Kingsley Coman', obtained: false },
            { id: 'FRA19', type: 'player', name: 'Hugo Ekitike', obtained: false },
            { id: 'FRA20', type: 'player', name: 'Kylian Mbappé', obtained: false }
        ]
    };
    
    structure['SEN'] = {
        name: 'Senegal',
        flag: '🇸🇳',
        grupo: 'I',
        stickers: [
            { id: 'SEN1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'SEN2', type: 'player', name: 'Édouard Mendy', obtained: false },
            { id: 'SEN3', type: 'player', name: 'Yehvann Diouf', obtained: false },
            { id: 'SEN4', type: 'player', name: 'Moussa Niakhaté', obtained: false },
            { id: 'SEN5', type: 'player', name: 'Abdoulaye Seck', obtained: false },
            { id: 'SEN6', type: 'player', name: 'Ismail Jakobs', obtained: false },
            { id: 'SEN7', type: 'player', name: 'El Hadji Malick Diouf', obtained: false },
            { id: 'SEN8', type: 'player', name: 'Kalidou Koulibaly', obtained: false },
            { id: 'SEN9', type: 'player', name: 'Idrissa Gana Gueye', obtained: false },
            { id: 'SEN10', type: 'player', name: 'Pape Matar Sarr', obtained: false },
            { id: 'SEN11', type: 'player', name: 'Pape Gueye', obtained: false },
            { id: 'SEN12', type: 'player', name: 'Habib Diarra', obtained: false },
            { id: 'SEN13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'SEN14', type: 'player', name: 'Lamine Camara', obtained: false },
            { id: 'SEN15', type: 'player', name: 'Sadio Mané', obtained: false },
            { id: 'SEN16', type: 'player', name: 'Ismaïla Sarr', obtained: false },
            { id: 'SEN17', type: 'player', name: 'Boulaye Dia', obtained: false },
            { id: 'SEN18', type: 'player', name: 'Iliman Ndiaye', obtained: false },
            { id: 'SEN19', type: 'player', name: 'Nicolas Jackson', obtained: false },
            { id: 'SEN20', type: 'player', name: 'Krepin Diatta', obtained: false }
        ]
    };
    
    structure['IRQ'] = {
        name: 'Irak',
        flag: '🇮🇶',
        flagFile: 'flags/iq.png',
        grupo: 'I',
        stickers: [
            { id: 'IRQ1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'IRQ2', type: 'player', name: 'Jalal Hassan', obtained: false },
            { id: 'IRQ3', type: 'player', name: 'Rebin Sulaka', obtained: false },
            { id: 'IRQ4', type: 'player', name: 'Hussein Ali', obtained: false },
            { id: 'IRQ5', type: 'player', name: 'Akam Hashem', obtained: false },
            { id: 'IRQ6', type: 'player', name: 'Merchas Doski', obtained: false },
            { id: 'IRQ7', type: 'player', name: 'Zaid Tahseen', obtained: false },
            { id: 'IRQ8', type: 'player', name: 'Manaf Younis', obtained: false },
            { id: 'IRQ9', type: 'player', name: 'Zidane Iqbal', obtained: false },
            { id: 'IRQ10', type: 'player', name: 'Amir Al-Ammari', obtained: false },
            { id: 'IRQ11', type: 'player', name: 'Ibrahim Bavesh', obtained: false },
            { id: 'IRQ12', type: 'player', name: 'Ali Jasim', obtained: false },
            { id: 'IRQ13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'IRQ14', type: 'player', name: 'Youssef Amyn', obtained: false },
            { id: 'IRQ15', type: 'player', name: 'Aimar Sher', obtained: false },
            { id: 'IRQ16', type: 'player', name: 'Marko Farji', obtained: false },
            { id: 'IRQ17', type: 'player', name: 'Osama Rashid', obtained: false },
            { id: 'IRQ18', type: 'player', name: 'Ali Al-Hamadi', obtained: false },
            { id: 'IRQ19', type: 'player', name: 'Aymen Hussein', obtained: false },
            { id: 'IRQ20', type: 'player', name: 'Mohanad Ali', obtained: false }
        ]
    };
    
    structure['NOR'] = {
        name: 'Noruega',
        flag: '🇳🇴',
        grupo: 'I',
        stickers: [
            { id: 'NOR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'NOR2', type: 'player', name: 'Ørjan Nyland', obtained: false },
            { id: 'NOR3', type: 'player', name: 'Julian Ryerson', obtained: false },
            { id: 'NOR4', type: 'player', name: 'Leo Østigård', obtained: false },
            { id: 'NOR5', type: 'player', name: 'Kristoffer Ajer', obtained: false },
            { id: 'NOR6', type: 'player', name: 'Marcus Holmgren Pedersen', obtained: false },
            { id: 'NOR7', type: 'player', name: 'David Møller Wolfe', obtained: false },
            { id: 'NOR8', type: 'player', name: 'Torbjørn Heggem', obtained: false },
            { id: 'NOR9', type: 'player', name: 'Morten Thorsby', obtained: false },
            { id: 'NOR10', type: 'player', name: 'Martin Ødegaard', obtained: false },
            { id: 'NOR11', type: 'player', name: 'Sander Berge', obtained: false },
            { id: 'NOR12', type: 'player', name: 'Andreas Schjelderup', obtained: false },
            { id: 'NOR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'NOR14', type: 'player', name: 'Patrick Berg', obtained: false },
            { id: 'NOR15', type: 'player', name: 'Erling Haaland', obtained: false },
            { id: 'NOR16', type: 'player', name: 'Alexander Sørloth', obtained: false },
            { id: 'NOR17', type: 'player', name: 'Aron Dønnum', obtained: false },
            { id: 'NOR18', type: 'player', name: 'Jørgen Strand Larsen', obtained: false },
            { id: 'NOR19', type: 'player', name: 'Antonio Nusa', obtained: false },
            { id: 'NOR20', type: 'player', name: 'Oscar Bobb', obtained: false }
        ]
    };
    
    // GRUPO J
    structure['ARG'] = {
        name: 'Argentina',
        flag: '🇦🇷',
        grupo: 'J',
        stickers: [
            { id: 'ARG1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'ARG2', type: 'player', name: 'Emiliano Martínez', obtained: false },
            { id: 'ARG3', type: 'player', name: 'Nahuel Molina', obtained: false },
            { id: 'ARG4', type: 'player', name: 'Cristian Romero', obtained: false },
            { id: 'ARG5', type: 'player', name: 'Nicolás Otamendi', obtained: false },
            { id: 'ARG6', type: 'player', name: 'Nicolás Tagliafico', obtained: false },
            { id: 'ARG7', type: 'player', name: 'Leonardo Balerdi', obtained: false },
            { id: 'ARG8', type: 'player', name: 'Enzo Fernández', obtained: false },
            { id: 'ARG9', type: 'player', name: 'Alexis Mac Allister', obtained: false },
            { id: 'ARG10', type: 'player', name: 'Rodrigo De Paul', obtained: false },
            { id: 'ARG11', type: 'player', name: 'Exequiel Palacios', obtained: false },
            { id: 'ARG12', type: 'player', name: 'Leandro Paredes', obtained: false },
            { id: 'ARG13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'ARG14', type: 'player', name: 'Nico Paz', obtained: false },
            { id: 'ARG15', type: 'player', name: 'Franco Mastantuono', obtained: false },
            { id: 'ARG16', type: 'player', name: 'Nico González', obtained: false },
            { id: 'ARG17', type: 'player', name: 'Lionel Messi', obtained: false },
            { id: 'ARG18', type: 'player', name: 'Lautaro Martínez', obtained: false },
            { id: 'ARG19', type: 'player', name: 'Julián Álvarez', obtained: false },
            { id: 'ARG20', type: 'player', name: 'Giuliano Simeone', obtained: false }
        ]
    };
    
    structure['ALG'] = {
        name: 'Argelia',
        flag: '🇩🇿',
        grupo: 'J',
        stickers: [
            { id: 'ALG1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'ALG2', type: 'player', name: 'Alexis Guendouz', obtained: false },
            { id: 'ALG3', type: 'player', name: 'Ramy Bensebaini', obtained: false },
            { id: 'ALG4', type: 'player', name: 'Youcef Atal', obtained: false },
            { id: 'ALG5', type: 'player', name: 'Rayan Aït-Nouri', obtained: false },
            { id: 'ALG6', type: 'player', name: 'Mohamed Amine Tougai', obtained: false },
            { id: 'ALG7', type: 'player', name: 'Aïssa Mandi', obtained: false },
            { id: 'ALG8', type: 'player', name: 'Ismaël Bennacer', obtained: false },
            { id: 'ALG9', type: 'player', name: 'Houssem Aouar', obtained: false },
            { id: 'ALG10', type: 'player', name: 'Hicham Boudaoui', obtained: false },
            { id: 'ALG11', type: 'player', name: 'Ramiz Zerrouki', obtained: false },
            { id: 'ALG12', type: 'player', name: 'Nabil Bentaleb', obtained: false },
            { id: 'ALG13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'ALG14', type: 'player', name: 'Farés Chaibi', obtained: false },
            { id: 'ALG15', type: 'player', name: 'Riyad Mahrez', obtained: false },
            { id: 'ALG16', type: 'player', name: 'Saïd Benrahma', obtained: false },
            { id: 'ALG17', type: 'player', name: 'Anis Hadj Moussa', obtained: false },
            { id: 'ALG18', type: 'player', name: 'Amine Gouiri', obtained: false },
            { id: 'ALG19', type: 'player', name: 'Baghdad Bounedjah', obtained: false },
            { id: 'ALG20', type: 'player', name: 'Mohammed Amoura', obtained: false }
        ]
    };
    
    structure['AUT'] = {
        name: 'Austria',
        flag: '🇦🇹',
        grupo: 'J',
        stickers: [
            { id: 'AUT1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'AUT2', type: 'player', name: 'Alexander Schlager', obtained: false },
            { id: 'AUT3', type: 'player', name: 'Patrick Pentz', obtained: false },
            { id: 'AUT4', type: 'player', name: 'David Alaba', obtained: false },
            { id: 'AUT5', type: 'player', name: 'Kevin Danso', obtained: false },
            { id: 'AUT6', type: 'player', name: 'Philipp Lienhart', obtained: false },
            { id: 'AUT7', type: 'player', name: 'Stefan Posch', obtained: false },
            { id: 'AUT8', type: 'player', name: 'Phillipp Mwene', obtained: false },
            { id: 'AUT9', type: 'player', name: 'Alexander Prass', obtained: false },
            { id: 'AUT10', type: 'player', name: 'Xaver Schlager', obtained: false },
            { id: 'AUT11', type: 'player', name: 'Marcel Sabitzer', obtained: false },
            { id: 'AUT12', type: 'player', name: 'Konrad Laimer', obtained: false },
            { id: 'AUT13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'AUT14', type: 'player', name: 'Florian Grillitsch', obtained: false },
            { id: 'AUT15', type: 'player', name: 'Nicolas Seiwald', obtained: false },
            { id: 'AUT16', type: 'player', name: 'Romano Schmid', obtained: false },
            { id: 'AUT17', type: 'player', name: 'Patrick Wimmer', obtained: false },
            { id: 'AUT18', type: 'player', name: 'Christoph Baumgartner', obtained: false },
            { id: 'AUT19', type: 'player', name: 'Michael Gregoritsch', obtained: false },
            { id: 'AUT20', type: 'player', name: 'Marko Arnautović', obtained: false }
        ]
    };
    
    structure['JOR'] = {
        name: 'Jordania',
        flag: '🇯🇴',
        grupo: 'J',
        stickers: [
            { id: 'JOR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'JOR2', type: 'player', name: 'Yazeed Abulaila', obtained: false },
            { id: 'JOR3', type: 'player', name: 'Ihsan Haddad', obtained: false },
            { id: 'JOR4', type: 'player', name: 'Mohammad Abu Hashish', obtained: false },
            { id: 'JOR5', type: 'player', name: 'Yazan Al-Arab', obtained: false },
            { id: 'JOR6', type: 'player', name: 'Abdallah Nasib', obtained: false },
            { id: 'JOR7', type: 'player', name: 'Saleem Obaid', obtained: false },
            { id: 'JOR8', type: 'player', name: 'Mohammad Abualnadi', obtained: false },
            { id: 'JOR9', type: 'player', name: 'Ibrahim Saadeh', obtained: false },
            { id: 'JOR10', type: 'player', name: 'Nizar Al-Rashdan', obtained: false },
            { id: 'JOR11', type: 'player', name: 'Noor Al-Rawabdeh', obtained: false },
            { id: 'JOR12', type: 'player', name: 'Mohannad Abu Taha', obtained: false },
            { id: 'JOR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'JOR14', type: 'player', name: 'Amer Jamous', obtained: false },
            { id: 'JOR15', type: 'player', name: 'Musa Al-Taamari', obtained: false },
            { id: 'JOR16', type: 'player', name: 'Yazan Al-Naimat', obtained: false },
            { id: 'JOR17', type: 'player', name: 'Mahmoud Al-Mardi', obtained: false },
            { id: 'JOR18', type: 'player', name: 'Ali Olwan', obtained: false },
            { id: 'JOR19', type: 'player', name: 'Mohammad Abu Zrayq', obtained: false },
            { id: 'JOR20', type: 'player', name: 'Ibrahim Sabra', obtained: false }
        ]
    };
    
    // GRUPO K
    structure['POR'] = {
        name: 'Portugal',
        flag: '🇵🇹',
        grupo: 'K',
        stickers: [
            { id: 'POR1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'POR2', type: 'player', name: 'Diogo Costa', obtained: false },
            { id: 'POR3', type: 'player', name: 'José Sá', obtained: false },
            { id: 'POR4', type: 'player', name: 'Rúben Dias', obtained: false },
            { id: 'POR5', type: 'player', name: 'João Cancelo', obtained: false },
            { id: 'POR6', type: 'player', name: 'Diogo Dalot', obtained: false },
            { id: 'POR7', type: 'player', name: 'Nuno Mendes', obtained: false },
            { id: 'POR8', type: 'player', name: 'Gonçalo Inácio', obtained: false },
            { id: 'POR9', type: 'player', name: 'Bernardo Silva', obtained: false },
            { id: 'POR10', type: 'player', name: 'Bruno Fernandes', obtained: false },
            { id: 'POR11', type: 'player', name: 'Rúben Neves', obtained: false },
            { id: 'POR12', type: 'player', name: 'Vitinha', obtained: false },
            { id: 'POR13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'POR14', type: 'player', name: 'João Neves', obtained: false },
            { id: 'POR15', type: 'player', name: 'Cristiano Ronaldo', obtained: false },
            { id: 'POR16', type: 'player', name: 'Francisco Trincão', obtained: false },
            { id: 'POR17', type: 'player', name: 'João Félix', obtained: false },
            { id: 'POR18', type: 'player', name: 'Gonçalo Ramos', obtained: false },
            { id: 'POR19', type: 'player', name: 'Pedro Neto', obtained: false },
            { id: 'POR20', type: 'player', name: 'Rafael Leão', obtained: false }
        ]
    };
    
    structure['COD'] = {
        name: 'Rep. Dem. del Congo',
        flag: '🇨🇩',
        grupo: 'K',
        stickers: [
            { id: 'COD1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'COD2', type: 'player', name: 'Lionel Mpasi', obtained: false },
            { id: 'COD3', type: 'player', name: 'Aaron Wan-Bissaka', obtained: false },
            { id: 'COD4', type: 'player', name: 'Axel Tuanzebe', obtained: false },
            { id: 'COD5', type: 'player', name: 'Arthur Masuaku', obtained: false },
            { id: 'COD6', type: 'player', name: 'Chancel Mbemba', obtained: false },
            { id: 'COD7', type: 'player', name: 'Joris Kayembe', obtained: false },
            { id: 'COD8', type: 'player', name: 'Charles Pickel', obtained: false },
            { id: 'COD9', type: 'player', name: 'Ngal\'ayel Mukau', obtained: false },
            { id: 'COD10', type: 'player', name: 'Edo Kayembe', obtained: false },
            { id: 'COD11', type: 'player', name: 'Samuel Moutoussamy', obtained: false },
            { id: 'COD12', type: 'player', name: 'Noah Sadiki', obtained: false },
            { id: 'COD13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'COD14', type: 'player', name: 'Théo Bongonda', obtained: false },
            { id: 'COD15', type: 'player', name: 'Meschack Elia', obtained: false },
            { id: 'COD16', type: 'player', name: 'Yoane Wissa', obtained: false },
            { id: 'COD17', type: 'player', name: 'Brian Cipenga', obtained: false },
            { id: 'COD18', type: 'player', name: 'Fiston Mayele', obtained: false },
            { id: 'COD19', type: 'player', name: 'Cédric Bakambu', obtained: false },
            { id: 'COD20', type: 'player', name: 'Nathanaël Mbuku', obtained: false }
        ]
    };
    
    structure['UZB'] = {
        name: 'Uzbekistán',
        flag: '🇺🇿',
        grupo: 'K',
        stickers: [
            { id: 'UZB1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'UZB2', type: 'player', name: 'Utkir Yusupov', obtained: false },
            { id: 'UZB3', type: 'player', name: 'Farrukh Sayfiev', obtained: false },
            { id: 'UZB4', type: 'player', name: 'Sherzod Nasrullaev', obtained: false },
            { id: 'UZB5', type: 'player', name: 'Umar Eshmurodov', obtained: false },
            { id: 'UZB6', type: 'player', name: 'Husniddin Aliqulov', obtained: false },
            { id: 'UZB7', type: 'player', name: 'Rustamjon Ashurmatov', obtained: false },
            { id: 'UZB8', type: 'player', name: 'Khojiakbar Alijonov', obtained: false },
            { id: 'UZB9', type: 'player', name: 'Abdukodir Khusanov', obtained: false },
            { id: 'UZB10', type: 'player', name: 'Odiljon Hamrobekov', obtained: false },
            { id: 'UZB11', type: 'player', name: 'Otabek Shukurov', obtained: false },
            { id: 'UZB12', type: 'player', name: 'Jamshid Iskanderov', obtained: false },
            { id: 'UZB13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'UZB14', type: 'player', name: 'Azizbek Turgunboev', obtained: false },
            { id: 'UZB15', type: 'player', name: 'Khojimat Erkinov', obtained: false },
            { id: 'UZB16', type: 'player', name: 'Eldor Shomurodov', obtained: false },
            { id: 'UZB17', type: 'player', name: 'Oston Urunov', obtained: false },
            { id: 'UZB18', type: 'player', name: 'Jaloliddin Masharipov', obtained: false },
            { id: 'UZB19', type: 'player', name: 'Igor Sergeev', obtained: false },
            { id: 'UZB20', type: 'player', name: 'Abbosbek Fayzullaev', obtained: false }
        ]
    };
    
    structure['COL'] = {
        name: 'Colombia',
        flag: '🇨🇴',
        grupo: 'K',
        stickers: [
            { id: 'COL1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'COL2', type: 'player', name: 'Camilo Vargas', obtained: false },
            { id: 'COL3', type: 'player', name: 'David Ospina', obtained: false },
            { id: 'COL4', type: 'player', name: 'Dávinson Sánchez', obtained: false },
            { id: 'COL5', type: 'player', name: 'Yerry Mina', obtained: false },
            { id: 'COL6', type: 'player', name: 'Daniel Muñoz', obtained: false },
            { id: 'COL7', type: 'player', name: 'Johan Mojica', obtained: false },
            { id: 'COL8', type: 'player', name: 'Jhon Lucumí', obtained: false },
            { id: 'COL9', type: 'player', name: 'Santiago Arias', obtained: false },
            { id: 'COL10', type: 'player', name: 'Jefferson Lerma', obtained: false },
            { id: 'COL11', type: 'player', name: 'Kevin Castaño', obtained: false },
            { id: 'COL12', type: 'player', name: 'Richard Ríos', obtained: false },
            { id: 'COL13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'COL14', type: 'player', name: 'James Rodríguez', obtained: false },
            { id: 'COL15', type: 'player', name: 'Juan Fernando Quintero', obtained: false },
            { id: 'COL16', type: 'player', name: 'Jorge Carrascal', obtained: false },
            { id: 'COL17', type: 'player', name: 'Jhon Arias', obtained: false },
            { id: 'COL18', type: 'player', name: 'Jhon Córdoba', obtained: false },
            { id: 'COL19', type: 'player', name: 'Luis Javier Suárez', obtained: false },
            { id: 'COL20', type: 'player', name: 'Luis Díaz', obtained: false }
        ]
    };
    
    // GRUPO L
    structure['ENG'] = {
        name: 'Inglaterra',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        grupo: 'L',
        stickers: [
            { id: 'ENG1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'ENG2', type: 'player', name: 'Jordan Pickford', obtained: false },
            { id: 'ENG3', type: 'player', name: 'John Stones', obtained: false },
            { id: 'ENG4', type: 'player', name: 'Marc Guéhi', obtained: false },
            { id: 'ENG5', type: 'player', name: 'Ezri Konsa', obtained: false },
            { id: 'ENG6', type: 'player', name: 'Trent Alexander-Arnold', obtained: false },
            { id: 'ENG7', type: 'player', name: 'Reece James', obtained: false },
            { id: 'ENG8', type: 'player', name: 'Dan Burn', obtained: false },
            { id: 'ENG9', type: 'player', name: 'Jordan Henderson', obtained: false },
            { id: 'ENG10', type: 'player', name: 'Declan Rice', obtained: false },
            { id: 'ENG11', type: 'player', name: 'Jude Bellingham', obtained: false },
            { id: 'ENG12', type: 'player', name: 'Cole Palmer', obtained: false },
            { id: 'ENG13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'ENG14', type: 'player', name: 'Morgan Rogers', obtained: false },
            { id: 'ENG15', type: 'player', name: 'Anthony Gordon', obtained: false },
            { id: 'ENG16', type: 'player', name: 'Phil Foden', obtained: false },
            { id: 'ENG17', type: 'player', name: 'Bukayo Saka', obtained: false },
            { id: 'ENG18', type: 'player', name: 'Harry Kane', obtained: false },
            { id: 'ENG19', type: 'player', name: 'Marcus Rashford', obtained: false },
            { id: 'ENG20', type: 'player', name: 'Ollie Watkins', obtained: false }
        ]
    };
    
    structure['CRO'] = {
        name: 'Croacia',
        flag: '🇭🇷',
        grupo: 'L',
        stickers: [
            { id: 'CRO1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'CRO2', type: 'player', name: 'Dominik Livaković', obtained: false },
            { id: 'CRO3', type: 'player', name: 'Duje Ćaleta-Car', obtained: false },
            { id: 'CRO4', type: 'player', name: 'Joško Gvardiol', obtained: false },
            { id: 'CRO5', type: 'player', name: 'Josip Stanišić', obtained: false },
            { id: 'CRO6', type: 'player', name: 'Luka Vušković', obtained: false },
            { id: 'CRO7', type: 'player', name: 'Josip Šutalo', obtained: false },
            { id: 'CRO8', type: 'player', name: 'Kristijan Jakić', obtained: false },
            { id: 'CRO9', type: 'player', name: 'Luka Modrić', obtained: false },
            { id: 'CRO10', type: 'player', name: 'Mateo Kovačić', obtained: false },
            { id: 'CRO11', type: 'player', name: 'Martin Baturina', obtained: false },
            { id: 'CRO12', type: 'player', name: 'Lovro Majer', obtained: false },
            { id: 'CRO13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'CRO14', type: 'player', name: 'Mario Pašalić', obtained: false },
            { id: 'CRO15', type: 'player', name: 'Petar Sučić', obtained: false },
            { id: 'CRO16', type: 'player', name: 'Ivan Perišić', obtained: false },
            { id: 'CRO17', type: 'player', name: 'Marco Pašalić', obtained: false },
            { id: 'CRO18', type: 'player', name: 'Ante Budimir', obtained: false },
            { id: 'CRO19', type: 'player', name: 'Andrej Kramarić', obtained: false },
            { id: 'CRO20', type: 'player', name: 'Franjo Ivanović', obtained: false }
        ]
    };
    
    structure['GHA'] = {
        name: 'Ghana',
        flag: '🇬🇭',
        grupo: 'L',
        stickers: [
            { id: 'GHA1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'GHA2', type: 'player', name: 'Lawrence Ati-Zigi', obtained: false },
            { id: 'GHA3', type: 'player', name: 'Tariq Lamptey', obtained: false },
            { id: 'GHA4', type: 'player', name: 'Mohammed Salisu', obtained: false },
            { id: 'GHA5', type: 'player', name: 'Alidu Seidu', obtained: false },
            { id: 'GHA6', type: 'player', name: 'Alexander Djiku', obtained: false },
            { id: 'GHA7', type: 'player', name: 'Gideon Mensah', obtained: false },
            { id: 'GHA8', type: 'player', name: 'Caleb Yirenkyi', obtained: false },
            { id: 'GHA9', type: 'player', name: 'Abdul Fatawu Issahaku', obtained: false },
            { id: 'GHA10', type: 'player', name: 'Thomas Partey', obtained: false },
            { id: 'GHA11', type: 'player', name: 'Salis Abdul Samed', obtained: false },
            { id: 'GHA12', type: 'player', name: 'Kamaldeen Sulemana', obtained: false },
            { id: 'GHA13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'GHA14', type: 'player', name: 'Mohammed Kudus', obtained: false },
            { id: 'GHA15', type: 'player', name: 'Iñaki Williams', obtained: false },
            { id: 'GHA16', type: 'player', name: 'Jordan Ayew', obtained: false },
            { id: 'GHA17', type: 'player', name: 'Andre Ayew', obtained: false },
            { id: 'GHA18', type: 'player', name: 'Joseph Paintsil', obtained: false },
            { id: 'GHA19', type: 'player', name: 'Osman Bukari', obtained: false },
            { id: 'GHA20', type: 'player', name: 'Antoine Semenyo', obtained: false }
        ]
    };
    
    structure['PAN'] = {
        name: 'Panamá',
        flag: '🇵🇦',
        grupo: 'L',
        stickers: [
            { id: 'PAN1', type: 'emblem', name: 'Logo del equipo', obtained: false },
            { id: 'PAN2', type: 'player', name: 'Orlando Mosquera', obtained: false },
            { id: 'PAN3', type: 'player', name: 'Luis Mejía', obtained: false },
            { id: 'PAN4', type: 'player', name: 'Fidel Escobar', obtained: false },
            { id: 'PAN5', type: 'player', name: 'Andrés Andrade', obtained: false },
            { id: 'PAN6', type: 'player', name: 'Michael Amir Murillo', obtained: false },
            { id: 'PAN7', type: 'player', name: 'Eric Davis', obtained: false },
            { id: 'PAN8', type: 'player', name: 'José Córdoba', obtained: false },
            { id: 'PAN9', type: 'player', name: 'César Blackman', obtained: false },
            { id: 'PAN10', type: 'player', name: 'Cristian Martínez', obtained: false },
            { id: 'PAN11', type: 'player', name: 'Aníbal Godoy', obtained: false },
            { id: 'PAN12', type: 'player', name: 'Adalberto Carrasquilla', obtained: false },
            { id: 'PAN13', type: 'photo', name: 'Foto Grupal', obtained: false },
            { id: 'PAN14', type: 'player', name: 'Édgar Bárcenas', obtained: false },
            { id: 'PAN15', type: 'player', name: 'Carlos Harvey', obtained: false },
            { id: 'PAN16', type: 'player', name: 'Ismael Díaz', obtained: false },
            { id: 'PAN17', type: 'player', name: 'José Fajardo', obtained: false },
            { id: 'PAN18', type: 'player', name: 'Cecilio Waterman', obtained: false },
            { id: 'PAN19', type: 'player', name: 'José Luis Rodríguez', obtained: false },
            { id: 'PAN20', type: 'player', name: 'Alberto Quintero', obtained: false }
        ]
    };
    
    // MUSEO FIFA — CAMPEONES DEL MUNDO
    structure['FWC9'] = {
        name: 'Museo FIFA',
        flag: '🏆',
        grupo: 'MUSEO',
        stickers: [
            { id: 'FWC9', type: 'museum', name: 'Italia 1934', obtained: false },
            { id: 'FWC10', type: 'museum', name: 'Uruguay 1950', obtained: false },
            { id: 'FWC11', type: 'museum', name: 'Alemania Occidental 1954', obtained: false },
            { id: 'FWC12', type: 'museum', name: 'Brasil 1962', obtained: false },
            { id: 'FWC13', type: 'museum', name: 'Alemania Occidental 1974', obtained: false },
            { id: 'FWC14', type: 'museum', name: 'Argentina 1986', obtained: false },
            { id: 'FWC15', type: 'museum', name: 'Brasil 1994', obtained: false },
            { id: 'FWC16', type: 'museum', name: 'Brasil 2002', obtained: false },
            { id: 'FWC17', type: 'museum', name: 'Italia 2006', obtained: false },
            { id: 'FWC18', type: 'museum', name: 'Alemania 2014', obtained: false },
            { id: 'FWC19', type: 'museum', name: 'Argentina 2022', obtained: false }
        ]
    };
    
    // Coca-Cola section
    structure['CC'] = {
        name: 'Coca-Cola',
        flag: '',
        flagFile: 'assets/coca-cola.png',
        grupo: 'CC',
        description: 'Estas láminas se consiguen exclusivamente dentro de las etiquetas de las botellas de Coca-Cola.',
        stickers: [
            { id: 'CC1', type: 'special', name: 'Lamine Yamal', obtained: false },
            { id: 'CC2', type: 'special', name: 'Joshua Kimmich', obtained: false },
            { id: 'CC3', type: 'special', name: 'Harry Kane', obtained: false },
            { id: 'CC4', type: 'special', name: 'Santiago Giménez', obtained: false },
            { id: 'CC5', type: 'special', name: 'Josko Gvardiol', obtained: false },
            { id: 'CC6', type: 'special', name: 'Federico Valverde', obtained: false },
            { id: 'CC7', type: 'special', name: 'Jefferson Lerma', obtained: false },
            { id: 'CC8', type: 'special', name: 'Enner Valencia', obtained: false },
            { id: 'CC9', type: 'special', name: 'Gabriel Magalhaes', obtained: false },
            { id: 'CC10', type: 'special', name: 'Virgil Van Dijk', obtained: false },
            { id: 'CC11', type: 'special', name: 'Alphonso Davies', obtained: false },
            { id: 'CC12', type: 'special', name: 'Emiliano Martínez', obtained: false },
            { id: 'CC13', type: 'special', name: 'Raúl Jiménez', obtained: false },
            { id: 'CC14', type: 'special', name: 'Lautaro Martínez', obtained: false }
        ]
    };
    
    // Assign flagFile to all team entries
    Object.keys(structure).forEach(code => {
        if (code === 'version') return;
        const team = structure[code];
        if (team.name && paniniFlagFiles[team.name]) {
            team.flagFile = 'flags/' + paniniFlagFiles[team.name];
        }
    });
    
    return structure;
}
    // Verificar acceso y mostrar/ocultar álbum
function checkPaniniAccess() {
    const usuario = getCurrentUser();
    const loginMsg = document.getElementById('paniniLoginMsg');
    const album = document.getElementById('paniniAlbum');
    
    if (usuario && usuario.email) {
        if (loginMsg) loginMsg.style.display = 'none';
        if (album) album.style.display = 'block';
        loadPaniniAlbum(usuario.email);
        populatePaniniGroupFilter();
    } else {
        if (loginMsg) loginMsg.style.display = 'block';
        if (album) album.style.display = 'none';
    }
}

// Poblar el select de filtro de grupos
function populatePaniniGroupFilter() {
    const select = document.getElementById('paniniGroupFilter');
    if (!select) return;
    // Limpiar opciones excepto la primera
    while (select.options.length > 1) {
        select.remove(1);
    }
    // Agregar opciones especiales
    const introOpt = document.createElement('option');
    introOpt.value = 'INTRO';
    introOpt.textContent = 'Introducción';
    select.appendChild(introOpt);
    
    const museoOpt = document.createElement('option');
    museoOpt.value = 'MUSEO';
    museoOpt.textContent = 'Museo FIFA';
    select.appendChild(museoOpt);
    
    const ccOpt = document.createElement('option');
    ccOpt.value = 'CC';
    ccOpt.textContent = 'Coca-Cola';
    select.appendChild(ccOpt);
    
    // Agregar grupos A-L
    for (let i = 65; i <= 76; i++) { // A to L
        const grupo = String.fromCharCode(i);
        const opt = document.createElement('option');
        opt.value = grupo;
        opt.textContent = 'Grupo ' + grupo;
        select.appendChild(opt);
    }
}

// Cargar álbum y progreso del usuario
function loadPaniniAlbum(userEmail) {
    let paniniData = JSON.parse(localStorage.getItem('panini_' + userEmail) || 'null');
    
    // Regenerate if no data or old version (version 10 = force coca-cola logo reload)
    if (!paniniData || paniniData.version !== 10) {
        console.log('Regenerating Panini structure (v5: real album 980 stickers)');
        paniniData = generatePaniniStructure();
        localStorage.setItem('panini_' + userEmail, JSON.stringify(paniniData));
    }
    
    // Intentar cargar desde Firebase
    if (typeof window.db !== 'undefined') {
        window.db.collection('panini').where('email', '==', userEmail).get()
            .then(snapshot => {
                if (!snapshot.empty) {
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        if (data.stickers) {
                            paniniData = data.stickers;
                            localStorage.setItem('panini_' + userEmail, JSON.stringify(paniniData));
                        }
                    });
                }
                renderPaniniAlbum(paniniData);
            })
            .catch(e => {
                console.log('Error cargando Panini desde Firebase:', e);
                renderPaniniAlbum(paniniData);
            });
    } else {
        renderPaniniAlbum(paniniData);
    }
}

// Renderizar álbum completo
function renderPaniniAlbum(data, filter = 'all', groupFilter = 'all') {
    const grid = document.getElementById('paniniTeamsGrid');
    if (!grid) return;
    
    let totalStickers = 0;
    let obtainedStickers = 0;
    let html = '';
    
    // Filtrar: excluir 'version', filtrar por grupo si es necesario
    const codes = Object.keys(data).filter(code => {
        if (code === 'version') return false;
        if (groupFilter !== 'all' && data[code].grupo !== groupFilter) return false;
        return true;
    });
    
    // Función para acortar nombres largos
    function formatName(name) {
        if (!name) return name;
        const words = name.split(' ');
        if (words.length <= 2) return name;
        // Si es muy largo, abreviar palabras intermedias
        if (name.length > 12) {
            return words.map((word, i) => {
                if (i === 0 || i === words.length - 1) return word;
                return word.charAt(0) + '.';
            }).join(' ');
        }
        return name;
    }
    
    codes.forEach(code => {
        const team = data[code];
        let teamObtained = 0;
        
        const stickersHtml = team.stickers.map(s => {
            totalStickers++;
            if (s.obtained) {
                obtainedStickers++;
                teamObtained++;
            }
            
            if (filter === 'obtained' && !s.obtained) return '';
            if (filter === 'missing' && s.obtained) return '';
            
            return `
                <div class="panini-sticker ${s.obtained ? 'obtained' : ''} ${s.type === 'emblem' || s.type === 'intro' || s.type === 'museum' ? 'emblem' : ''}" 
                     onclick="toggleSticker('${code}', '${s.id}')" title="${s.name}">
                    <div class="panini-sticker-id">${s.id}</div>
                    <div class="panini-sticker-name">${formatName(s.name)}</div>
                </div>
            `;
        }).join('');
        
        let flagHtml = '';
        if (team.flagFile) {
            flagHtml = '<img src="' + team.flagFile + '" alt="' + team.name + '" class="panini-team-flag-img" onerror="this.onerror=null;this.style.display=\'none\';">';
        }
        if (!team.flagFile || team.flag === '') {
            flagHtml += '<span class="panini-team-flag">' + (team.flag || '') + '</span>';
        }
        
        html += `
            <div class="panini-team-card">
                <div class="panini-team-header">
                    ${flagHtml}
                    <span class="panini-team-name">${team.name}</span>
                    <span class="panini-team-group">${team.grupo !== 'INTRO' && team.grupo !== 'MUSEO' && team.grupo !== 'CC' ? 'Grupo ' : ''}${team.grupo}</span>
                </div>
                ${team.description ? `<div style="text-align:center; color:var(--text-muted); font-size:0.85rem; margin: 0.5rem 1rem; font-style:italic;">${team.description}</div>` : ''}
                <div class="panini-stickers-grid">
                    ${stickersHtml}
                </div>
                <div style="text-align:center; margin-top:0.75rem; color:var(--text-muted); font-size:0.85rem;">
                    ${teamObtained}/${team.stickers.length} obtenidos
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
    updatePaniniProgress(obtainedStickers, totalStickers);
}

// Actualizar barra de progreso
function updatePaniniProgress(obtained, total) {
    const percent = total > 0 ? Math.round((obtained / total) * 100) : 0;
    const fill = document.getElementById('paniniProgressFill');
    const count = document.getElementById('paniniCount');
    const totalEl = document.getElementById('paniniTotal');
    const percentEl = document.getElementById('paniniPercent');
    
    if (fill) fill.style.width = percent + '%';
    if (count) count.textContent = obtained;
    if (totalEl) totalEl.textContent = total;
    if (percentEl) percentEl.textContent = percent + '%';
}

// Toggle (marcar/desmarcar) una lámina
function toggleSticker(teamCode, stickerId) {
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    if (!usuario.email) return;
    
    const data = JSON.parse(localStorage.getItem('panini_' + usuario.email) || '{}');
    const team = data[teamCode];
    if (!team) return;
    
    const sticker = team.stickers.find(s => s.id === stickerId);
    if (sticker) {
        sticker.obtained = !sticker.obtained;
        
        // Guardar en localStorage
        localStorage.setItem('panini_' + usuario.email, JSON.stringify(data));
        
        // Guardar en Firebase
        savePaniniToFirebase(usuario.email, data);
        
        // Re-renderizar
        const filter = document.querySelector('.panini-filter.active')?.dataset.filter || 'all';
        const groupFilter = document.getElementById('paniniGroupFilter')?.value || 'all';
        renderPaniniAlbum(data, filter, groupFilter);
    }
}

// Guardar en Firebase
function savePaniniToFirebase(email, data) {
    if (typeof window.db === 'undefined') return;
    
    window.db.collection('panini').where('email', '==', email).get()
        .then(snapshot => {
            if (snapshot.empty) {
                window.db.collection('panini').add({
                    email: email,
                    stickers: data,
                    fecha: new Date().toISOString()
                });
            } else {
                snapshot.forEach(doc => {
                    doc.ref.update({ stickers: data, fecha: new Date().toISOString() });
                });
            }
        })
        .catch(e => console.log('Error guardando Panini:', e));
}

// Filtrar por estado (Todos/Obtenidos/Faltantes)
function filterPanini(btn, filter) {
    document.querySelectorAll('.panini-filter').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    if (!usuario.email) return;
    
    const data = JSON.parse(localStorage.getItem('panini_' + usuario.email) || '{}');
    const groupFilter = document.getElementById('paniniGroupFilter')?.value || 'all';
    renderPaniniAlbum(data, filter, groupFilter);
}

// Filtrar por grupo
function filterPaniniByGroup(group) {
    const usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
    if (!usuario.email) return;
    
    const data = JSON.parse(localStorage.getItem('panini_' + usuario.email) || '{}');
    const filter = document.querySelector('.panini-filter.active')?.dataset.filter || 'all';
    renderPaniniAlbum(data, filter, group);
}

// Detectar cuando se entra a la sección Mi Panini
document.addEventListener('DOMContentLoaded', function() {
    const paniniLink = document.querySelector('a[href="#mi-panini"]');
    if (paniniLink) {
        paniniLink.addEventListener('click', function() {
            setTimeout(checkPaniniAccess, 100);
        });
    }
});

// ===== PANEL DE ADMINISTRACIÓN =====

function renderAdminPanel() {
    renderAdminUsuarios();
    renderAdminPartidos();
    renderAdminPredicciones();
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    
    const tabMap = { usuarios: 0, partidos: 1, predicciones: 2 };
    const tabs = document.querySelectorAll('.admin-tab');
    if (tabs[tabMap[tab]]) tabs[tabMap[tab]].classList.add('active');
    
    const panelId = 'admin' + tab.charAt(0).toUpperCase() + tab.slice(1);
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
    
    if (tab === 'usuarios') renderAdminUsuarios();
    else if (tab === 'partidos') renderAdminPartidos();
    else if (tab === 'predicciones') renderAdminPredicciones();
}

function renderAdminUsuarios() {
    const tbody = document.querySelector('#adminUsuariosTable tbody');
    if (!tbody) return;
    
    const currentUser = getCurrentUser();
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:20px;color:#64748b;">Cargando usuarios...</td></tr>';
    
    db.collection('perfiles').get()
        .then(snapshot => {
            const usuarios = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                usuarios.push({ uid: doc.id, ...data });
            });
            
            tbody.innerHTML = usuarios.map(u => `
                <tr>
                    <td>${u.nombre || 'Sin nombre'}</td>
                    <td>${u.email}</td>
                    <td>${u.pais || '-'}</td>
                    <td><span class="role-badge ${u.role || 'usuario'}">${u.role === 'admin' ? '👑 Admin' : '👤 Usuario'}</span></td>
                    <td>${u.fecha ? new Date(u.fecha).toLocaleDateString('es-MX') : '-'}</td>
                    <td class="admin-actions-cell">
                        ${u.email !== currentUser.email ? `
                            ${u.role === 'admin' 
                                ? `<button class="btn-admin-action degrade" onclick="cambiarRol('${u.uid}','${u.email}', 'usuario')">Degradar</button>`
                                : `<button class="btn-admin-action promote" onclick="cambiarRol('${u.uid}','${u.email}', 'admin')">Promover</button>`
                            }
                            <button class="btn-admin-action delete" onclick="eliminarUsuario('${u.uid}','${u.email}')">Eliminar</button>
                        ` : '<span class="current-user-badge">Tú</span>'}
                    </td>
                </tr>
            `).join('');
        })
        .catch(e => {
            console.log('Error cargando usuarios:', e);
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:20px;color:#ff4757;">Error al cargar usuarios</td></tr>';
        });
}

function cambiarRol(uid, email, nuevoRol) {
    if (!confirm(`¿Cambiar el rol de este usuario a ${nuevoRol === 'admin' ? 'Administrador' : 'Usuario'}?`)) return;
    
    db.collection('perfiles').doc(uid).update({ role: nuevoRol })
        .then(() => {
            const usuarios = getUsuarios();
            const localUser = usuarios.find(u => u.email === email);
            if (localUser) {
                localUser.role = nuevoRol;
                saveUsuarios(usuarios);
            }
            renderAdminUsuarios();
        })
        .catch(e => {
            console.log('Error cambiando rol:', e);
            alert('Error al cambiar el rol. Intenta de nuevo.');
        });
}

function eliminarUsuario(uid, email) {
    if (!confirm('¿Eliminar este usuario? Esta acción no se puede deshacer.')) return;
    
    // Limpiar datos en Firestore
    Promise.all([
        db.collection('perfiles').doc(uid).delete(),
        db.collection('predicciones').where('email', '==', email).get()
            .then(snapshot => {
                const batch = db.batch();
                snapshot.forEach(doc => batch.delete(doc.ref));
                return batch.commit();
            }),
        db.collection('panini').where('email', '==', email).get()
            .then(snapshot => {
                const batch = db.batch();
                snapshot.forEach(doc => batch.delete(doc.ref));
                return batch.commit();
            })
    ])
    .then(() => {
        let usuarios = getUsuarios();
        usuarios = usuarios.filter(u => (u.email || '').toLowerCase() !== email.toLowerCase());
        saveUsuarios(usuarios);
        localStorage.removeItem('panini_' + email);
        renderAdminUsuarios();
        alert('Usuario eliminado correctamente. La cuenta de Firebase Auth debe eliminarse desde la consola de Firebase (Authentication > Users).');
    })
    .catch(e => {
        console.log('Error eliminando usuario:', e);
        alert('Error al eliminar usuario. Intenta de nuevo.');
    });
}

function renderAdminPartidos() {
    const container = document.getElementById('adminPartidosList');
    if (!container) return;
    
    const allGroups = ['A','B','C','D','E','F','G','H','I','J','K','L','16avos','Octavos','Cuartos','Semifinal','3° lugar','Final'];
    const groupLabels = {
        "16avos": "Dieciseisavos de Final",
        "Octavos": "Octavos de Final",
        "Cuartos": "Cuartos de Final",
        "Semifinal": "Semifinales",
        "3° lugar": "Tercer Lugar",
        "Final": "Final"
    };
    
    const groups = {};
    matches.forEach((m, i) => {
        if (!groups[m.group]) groups[m.group] = [];
        groups[m.group].push({ ...m, index: i });
    });
    
    let html = '';
    allGroups.forEach(g => {
        if (!groups[g] || groups[g].length === 0) return;
        const label = groupLabels[g] || 'Grupo ' + g;
        html += `<div class="admin-match-group"><h4>${label}</h4>`;
        groups[g].forEach(m => {
            const res = resultadosPartidos[m.index] || {};
            html += `
            <div class="admin-match-item" style="flex-direction:column;align-items:stretch;gap:6px;">
                <div class="admin-match-info">
                    <span class="admin-match-teams">${m.team1} vs ${m.team2}</span>
                    <span class="admin-match-details">${m.date} • ${m.time} • ${m.venue}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <input type="number" id="score1_${m.index}" value="${res.score1 !== undefined ? res.score1 : ''}" min="0" max="99" style="width:55px;padding:6px;text-align:center;background:#0f172a;color:#fff;border:1px solid #f0c040;border-radius:4px;font-size:0.95rem;">
                    <span style="color:#f0c040;font-weight:700;font-size:1.2rem;">-</span>
                    <input type="number" id="score2_${m.index}" value="${res.score2 !== undefined ? res.score2 : ''}" min="0" max="99" style="width:55px;padding:6px;text-align:center;background:#0f172a;color:#fff;border:1px solid #f0c040;border-radius:4px;font-size:0.95rem;">
                    <button class="btn-admin-action edit" onclick="guardarResultado(${m.index})" style="margin-left:auto;">Guardar</button>
                </div>
            </div>`;
        });
        html += `</div>`;
    });
    
    container.innerHTML = html;
}

function guardarResultado(index) {
    const input1 = document.getElementById('score1_' + index);
    const input2 = document.getElementById('score2_' + index);
    if (!input1 || !input2) return;
    
    const score1 = parseInt(input1.value);
    const score2 = parseInt(input2.value);
    
    if (isNaN(score1) || isNaN(score2)) {
        alert('Ingresa ambos marcadores');
        return;
    }
    
    const data = { score1, score2, updatedAt: new Date().toISOString() };
    
    if (typeof window.db !== 'undefined') {
        window.db.collection('resultados').doc(index.toString()).set(data)
            .then(() => {
                console.log('Resultado guardado en Firebase');
                resultadosPartidos[index] = { score1, score2 };
                renderAdminPartidos();
                renderMatches();
            })
            .catch(e => {
                console.log('Error guardando en Firestore, guardado local:', e);
                resultadosPartidos[index] = { score1, score2 };
                renderAdminPartidos();
                renderMatches();
            });
    } else {
        resultadosPartidos[index] = { score1, score2 };
        renderAdminPartidos();
        renderMatches();
    }
}

function cargarResultados() {
    if (typeof window.db === 'undefined') return;
    window.db.collection('resultados').get().then(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            resultadosPartidos[parseInt(doc.id)] = { score1: data.score1, score2: data.score2 };
        });
        renderMatches();
    }).catch(e => console.log('Error cargando resultados:', e));
}

function renderAdminPredicciones() {
    const container = document.getElementById('adminPrediccionesList');
    if (!container) return;
    
    const predicciones = JSON.parse(localStorage.getItem('predicciones') || '{}');
    const keys = Object.keys(predicciones);
    
    if (keys.length === 0) {
        container.innerHTML = '<p class="admin-empty">No hay predicciones guardadas localmente</p>';
        return;
    }
    
    let html = `<div class="admin-pred-summary"><span>${keys.length} predicciones guardadas</span>`;
    html += `<button class="btn-admin-action delete" onclick="borrarTodasPredicciones()">Borrar todas</button></div>`;
    
    container.innerHTML = html;
}

function borrarTodasPredicciones() {
    if (!confirm('¿Eliminar TODAS las predicciones? Esta acción no se puede deshacer.')) return;
    
    localStorage.removeItem('predicciones');
    quiniela = {};
    
    if (typeof window.db !== 'undefined') {
        const usuario = getCurrentUser();
        if (usuario && usuario.email) {
            window.db.collection('predicciones').where('email', '==', usuario.email).get().then(snapshot => {
                const batch = window.db.batch();
                snapshot.forEach(doc => batch.delete(doc.ref));
                batch.commit();
            });
        }
    }
    
    renderAdminPredicciones();
    renderQuiniela();
    alert('Predicciones eliminadas');
}

// ===== FIN PANEL DE ADMINISTRACIÓN =====

// Función de emergencia para restaurar acceso admin
function restoreAdmin(email) {
    const user = firebase.auth().currentUser;
    if (user && !email) {
        promocionarPorUid(user.uid);
        return;
    }
    const buscarEmail = email || (getCurrentUser() || {}).email;
    if (!buscarEmail) {
        alert('No se encontró tu sesión. Escribe restoreAdmin("tu@email.com") en la consola.');
        return;
    }
    db.collection('perfiles').where('email', '==', buscarEmail).get()
        .then(snapshot => {
            if (snapshot.empty) {
                alert('No se encontró tu perfil en la base de datos.');
                return;
            }
            snapshot.forEach(doc => promocionarPorUid(doc.id));
        })
        .catch(e => alert('Error: ' + e.message));
}

function promocionarPorUid(uid) {
    db.collection('perfiles').doc(uid).update({ role: 'admin' })
        .then(() => {
            const usuario = getCurrentUser();
            if (usuario) {
                usuario.role = 'admin';
                localStorage.setItem('usuarioActual', JSON.stringify(usuario));
            }
            renderNav();
            alert('¡Cuenta promovida a admin! Recarga la página.');
        })
        .catch(e => alert('Error: ' + e.message));
}

// Exponer funciones globalmente para onclick handlers
window.checkPaniniAccess = checkPaniniAccess;
window.toggleSticker = toggleSticker;
window.filterPanini = filterPanini;
window.filterPaniniByGroup = filterPaniniByGroup;
window.showAdminTab = showAdminTab;
window.cambiarRol = cambiarRol;
window.eliminarUsuario = eliminarUsuario;
window.guardarResultado = guardarResultado;
window.borrarTodasPredicciones = borrarTodasPredicciones;
window.abrirModalPerfil = abrirModalPerfil;
window.cerrarModalPerfil = cerrarModalPerfil;
window.cerrarSesion = cerrarSesion;
window.restoreAdmin = restoreAdmin;


function recuperarContrasena() {
    const email = prompt('Ingresa tu correo electrónico para recuperar tu contraseña:');
    if (!email) return;
    
    firebase.auth().sendPasswordResetEmail(email.trim())
        .then(() => {
            alert('Se ha enviado un correo de recuperación a ' + email.trim() + '. Revisa tu bandeja de entrada.');
        })
        .catch((error) => {
            let msg = 'Error al enviar el correo de recuperación';
            if (error.code === 'auth/user-not-found') msg = 'No existe una cuenta con este correo';
            else if (error.code === 'auth/invalid-email') msg = 'Correo electrónico no válido';
            alert(msg);
        });
}