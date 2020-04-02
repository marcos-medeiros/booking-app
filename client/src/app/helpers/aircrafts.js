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
    testFlights: [],
    manufacturer: 'Cesnna',
    imgSrc: cesnnaJet,
  },
  {
    model: 'G280',
    category: 'Jet',
    id: 2,
    testFlights: [],
    manufacturer: 'Gulfstream',
    imgSrc: gulfstream,
  },
  {
    model: 'Challenger',
    category: 'Jet',
    id: 3,
    testFlights: [],
    manufacturer: 'Bombardier',
    imgSrc: bombardier,
  },
  {
    model: 'AS 350 B3',
    category: 'Helicopter',
    id: 4,
    testFlights: [],
    manufacturer: 'Eurocopter',
    imgSrc: eurocopter,
  },
  {
    model: 'R-44',
    category: 'Helicopter',
    id: 5,
    testFlights: [],
    manufacturer: 'Robinson',
    imgSrc: robinson,
  },
  {
    model: '407GX',
    category: 'Helicopter',
    id: 6,
    testFlights: [],
    manufacturer: 'Bell',
    imgSrc: bell,
  },
  {
    model: 'Caravan',
    category: 'Amphibian',
    id: 7,
    testFlights: [],
    manufacturer: 'Cessna',
    imgSrc: cesnnaAmphibian,
  },
];

export default aircrafts;
