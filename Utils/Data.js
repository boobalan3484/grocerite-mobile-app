import Rating from '../Components/Rating';
import Table from '../Components/Table';

export const fruits = [
  {
    name: "apple",
    pieces: 1,
    measurement: 'kg',
    price: 120.5,
    img: { uri: ("https://media.istockphoto.com/id/183422512/photo/fresh-red-apples-on-white-background.jpg?s=612x612&w=0&k=20&c=OmfmcQLh3mwp4pFVQn9Sr2U8VCyIgGtV6fuaDmd3Yrk=") },
  },
  {
    name: "banana",
    pieces: 1,
    measurement: 'nos',
    price: 17.55,
    img: { uri: ("https://images-eu.ssl-images-amazon.com/images/I/51ebZJ+DR4L.AC_SL240_.jpg") },
  },
  {
    name: "orange",
    pieces: 1,
    measurement: 'kg',
    price: 108.10,
    img: { uri: ("https://images-eu.ssl-images-amazon.com/images/I/41tRTl-dSjL.AC_SL240_.jpg") },
  },
  {
    name: "pine apple",
    pieces: 1,
    measurement: 'nos',
    price: 42.20,
    img: { uri: ("https://static.vecteezy.com/system/resources/previews/008/848/362/non_2x/fresh-pineapple-free-png.png") },
  },
  {
    name: "pomogranate",
    pieces: 1,
    measurement: 'kg',
    price: 155.50,
    img: { uri: ("https://images-eu.ssl-images-amazon.com/images/I/611a1wD9ZGL.AC_SL240_.jpg") },
  },
  {
    name: "black grapes",
    pieces: 1,
    measurement: 'kg',
    price: 156.60,
    img: { uri: ("https://m.media-amazon.com/images/I/61nHWMMpylL._SX522_.jpg") },
  },
];
export const vegetables = [
  {
    name: "coconut",
    pieces: 1,
    measurement: 'nos',
    price: 20.5,
    img: { uri: ("https://www.jiomart.com/images/product/original/590000086/big-coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202311291444.jpg?im=Resize=(420,420)") },
  },
  {
    name: "green Capsicum",
    pieces: 1,
    measurement: 'kg',
    price: 80,
    img: { uri: ("https://www.jiomart.com/images/product/original/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202203151617.jpg?im=Resize=(420,420)") },
  },
  {
    name: "cabbage",
    pieces: 1,
    measurement: 'nos',
    price: 30.5,
    img: { uri: ("https://www.jiomart.com/images/product/original/590003538/cabbage-per-pc-approx-600-g-1000-g-product-images-o590003538-p590003538-0-202203170436.jpg?im=Resize=(1000,1000)") },
  },
  {
    name: "brinjal",
    pieces: 1,
    measurement: 'kg',
    price: 42.20,
    img: { uri: ("https://www.jiomart.com/images/product/original/590004102/brinjal-purple-striped-500-g-product-images-o590004102-p590004102-0-202203150748.jpg?im=Resize=(420,420)") },
  },
  {
    name: "potato",
    pieces: 1,
    measurement: 'kg',
    price: 30,
    img: { uri: ("https://www.jiomart.com/images/product/original/590003516/potato-per-kg-product-images-o590003516-p590003516-0-202203170642.jpg?im=Resize=(420,420)") },
  },
  {
    name: "ladies finger",
    pieces: 1,
    measurement: 'kg',
    price: 80.5,
    img: { uri: ("https://www.jiomart.com/images/product/original/590003550/bhendi-okra-500-g-product-images-o590003550-p590003550-0-202203170339.jpg?im=Resize=(1000,1000)") },
  },
];

export const products1 = [
  {
    name: "black rice",
    pieces: 1,
    measurement: 'kg',
    price: 170.2,
    img: require('../assets/Product_images/black_rice.jpg'),
  },
  {
    name: "mappilai samba",
    pieces: 1,
    measurement: 'kg',
    price: 150,
    img: require('../assets/Product_images/mappilai_samba.jpg'),
  },
  {
    name: "red rice",
    pieces: 1,
    measurement: 'kg',
    price: 160.5,
    img: require('../assets/Product_images/red_rice.jpg'),
  },
  {
    name: "toor Dhal",
    pieces: 1,
    measurement: 'kg',
    price: 170.5,
    img: require('../assets/Product_images/toor_dal.jpg'),
  },
  {
    name: "little millets",
    pieces: 1,
    measurement: 'kg',
    price: 78.5,
    img: require('../assets/Product_images/little_millet.jpg'),
  },
];

export const products2 = [
  {
    name: "gingely oil",
    pieces: 1,
    measurement: 'lit',
    price: 94,
    img: require('../assets/Product_images/gingely_oil.jpg'),
  },
  {
    name: "groundnut oil",
    pieces: 1,
    measurement: 'lit',
    price: 102.5,
    img: require('../assets/Product_images/groundnut_oil.jpg'),
  },
  {
    name: "castor oil",
    pieces: 1,
    measurement: 'lit',
    price: 85,
    img: require('../assets/Product_images/castor_oil.jpg'),
  },
  {
    name: "jaggery",
    pieces: 1,
    measurement: 'kg',
    price: 102.5,
    img: require('../assets/Product_images/jaggery.jpg'),
  },
  {
    name: "raw honey",
    pieces: 1,
    measurement: 'lit',
    price: 120.5,
    img: require('../assets/Product_images/raw_honey.jpg'),
  },
]

export const Dropdown = [

  {
    title: 'Product Detail',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, facere ut. Non maiores enim deleniti dolore eius totam, minima, accusamus esse minus doloremque amet sed dolores cupiditate necessitatibus placeat cum.',
  },
  {
    title: 'Nutritions',
    description: `95 calories, 0 gram fat, 1 gram protein, 25 grams carbohydrate, 19 grams sugar (naturally occurring), 3 grams fiber.`,
  },
  {
    title: 'Review',
    description: <Rating value={`Nice Product`} />
  },
  {
    title: 'More Detail',
    description: <Table />
  },
]

export const caurosalImages = [
  { imageUrl: { uri: ('https://m.media-amazon.com/images/G/31/img18/Fresh/Christmas/Christmas-store_PC_1._SX1500_QL85_.jpg') } },
  { imageUrl: { uri: ('https://m.media-amazon.com/images/G/31/img18/Fresh/Dec23/season-special_PC_CB._SX1500_QL85_.jpg') } },
  { imageUrl: { uri: ('https://m.media-amazon.com/images/G/31/img18/Fresh/Dec23/BTF_PC_meat.jpg') } },
];
