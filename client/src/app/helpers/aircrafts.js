import bell from './img/bell.png';
import cesnnaAmphibian from './img/cesnnaAmphibian.png';
import cesnnaJet from './img/cesnnaJet.png';
import gulfstream from './img/gulfstream.png';


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
    model: '407GX',
    category: 'Helicopter',
    id: 3,
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
    id: 4,
    manufacturer: 'Cessna',
    imgSrc: cesnnaAmphibian,
    speed: '162 kts - 300 km/h',
    range: '790 nm - 1493 km',
    fuel: '2.36 nm/g - 1.155 km/l',
    price: 'US$ 1.8 million',
  },
];

export default aircrafts;
