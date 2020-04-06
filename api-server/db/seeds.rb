# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Aircraft.create([
  {
    model: 'Citation Longitude',
    category: 'Jet',
    manufacturer: 'Cesnna',
    image: 'somepath',
    speed: '465 kts - 861 km/h',
    range: '3500 nm - 6482 km',
    fuel: '1.84 nm/g - 0.783 km/l',
    price: 'US$ 26 million',
  },
  {
    model: 'G280',
    category: 'Jet',
    manufacturer: 'Gulfstream',
    image: 'somepath',
    speed: '528 kts - 978 km/h',
    range: '3400 nm - 6297 km',
    fuel: '1.79 nm/g - 0.763 km/l',
    price: 'US$ 24 million',
  },
  {
    model: '407GX',
    category: 'Helicopter',
    manufacturer: 'Bell',
    image: 'somepath',
    speed: '132 kts - 244 km/h',
    range: '323 nm - 598 km',
    fuel: '3.39 nm/g - 1.659 km/l',
    price: 'US$ 2.6 million',
  },
  {
    model: 'Caravan',
    category: 'Amphibian',
    manufacturer: 'Cessna',
    image: 'somepath',
    speed: '162 kts - 300 km/h',
    range: '790 nm - 1493 km',
    fuel: '2.36 nm/g - 1.155 km/l',
    price: 'US$ 1.8 million',
  },
])