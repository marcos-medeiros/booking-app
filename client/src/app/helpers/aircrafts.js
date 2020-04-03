import bell from './img/bell.png';
import bombardier from './img/bombardier.png';
import cesnnaAmphibian from './img/cesnnaAmphibian.png';
import cesnnaJet from './img/cesnnaJet.png';
import eurocopter from './img/eurocopter.png';
import gulfstream from './img/gulfstream.png';
import robinson from './img/robinson.png';


const aircrafts = [
  {
    model: 'Citation Longitude',
    category: 'Jet',
    id: 1,
    manufacturer: 'Cesnna',
    imgSrc: cesnnaJet,
    speed: '465 kts - 861 km/h',
    range: '3500 nm - 6482 km',
    fuel: '1.84 nm/g - 0.783 km/l',
    price: 'US$ 26 million',
  },
  {
    model: 'G280',
    category: 'Jet',
    id: 2,
    manufacturer: 'Gulfstream',
    imgSrc: gulfstream,
    speed: '528 kts - 978 km/h',
    range: '3400 nm - 6297 km',
    fuel: '1.79 nm/g - 0.763 km/l',
    price: 'US$ 24 million',
  },
  {
    model: 'Challenger',
    category: 'Jet',
    id: 3,
    manufacturer: 'Bombardier',
    imgSrc: bombardier,
    speed: '470 kts - 870 km/h',
    range: '4045 nm - 7491 km',
    fuel: '1.36 nm/g - 0.665 km/l',
    price: 'US$ 27 million',
  },
  {
    model: 'AS 350 B3',
    category: 'Helicopter',
    id: 4,
    manufacturer: 'Eurocopter',
    imgSrc: eurocopter,
    speed: '140 kts - 259 km/h',
    range: '365 nm - 676 km',
    fuel: '2.87 nm/g - 1.404 km/l',
    price: 'US$ 1.95 million',
  },
  {
    model: 'R-44',
    category: 'Helicopter',
    id: 5,
    manufacturer: 'Robinson',
    imgSrc: robinson,
    speed: '110 kts - 204 km/h',
    range: '348 nm - 644 km',
    fuel: '7.12 nm/g - 3.483 km/l',
    price: 'US$ 0.45 million',
  },
  {
    model: '407GX',
    category: 'Helicopter',
    id: 6,
    manufacturer: 'Bell',
    imgSrc: bell,
    speed: '132 kts - 244 km/h',
    range: '323 nm - 598 km',
    fuel: '3.39 nm/g - 1.659 km/l',
    price: 'US$ 2.6 million',
  },
  {
    model: 'Caravan',
    category: 'Amphibian',
    id: 7,
    manufacturer: 'Cessna',
    imgSrc: cesnnaAmphibian,
    speed: '162 kts - 300 km/h',
    range: '790 nm - 1493 km',
    fuel: '2.36 nm/g - 1.155 km/l',
    price: 'US$ 1.8 million',
  },
];

export default aircrafts;
