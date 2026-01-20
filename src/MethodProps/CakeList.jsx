import Cart from './Cart'


function CakeList(){
    const cakes = [
  {
    name: "Tropical Fruit & Almond Cake",
    price: "₹699",
    image: "https://bkmedia.bakingo.com/fresh-fruit-cake0014frui-AAAA.jpg?tr=w-400,dpr-1.5",
    badge: "Best Seller",
    description: "Delicious tropical fruit and almond delight.",id:'1'
  },
  {
    name: "Choco Ferrero Drip Cake",
    price: "₹1,649",
    image: "https://bkmedia.bakingo.com/choco-ferrero-cake-cake4741ferr-A.jpg?tr=w-400,dpr-1.5",
    badge: null,
    description: "Rich chocolate cake with Ferrero Rocher topping.",id:'2'
  },
  {
    name: "Chocolicious Marble Cake",
    price: "₹799",
    image: "https://bkmedia.bakingo.com/chocolicious-marble-cake-cake2615choc-AA.jpg?tr=w-400,dpr-1.5",
    badge: null,
    description: "Perfectly baked marble cake with rich chocolate taste.",id:'3'
  },
  {
    name: "Rosette Love Red Velvet Cake",
    price: "₹899",
    image: "https://bkmedia.bakingo.com/rosette-love-red-velvet-cake-cake4915redv-A.jpg?tr=w-400,dpr-1.5",
    badge: null,
    description: "Classic red velvet cake decorated with rosettes.",id:'4'
  },
  {
    name: "Choco Vanilla Swirl Cake",
    price: "₹749",
    image: "https://bkmedia.bakingo.com/choco-vanilla-cake0006chva-CCC.jpg?tr=w-400,dpr-1.5",
    badge: null,
    description: "Perfect combination of choco and vanilla flavours.",id:'5'
  },
  {
    name: "Classic Red Velvet Cream Cake",
    price: "₹949",
    image: "https://bkmedia.bakingo.com/classic-red-velvet-cream-cake-cake4914redv-A_1.jpg?tr=w-400,dpr-1.5",
    badge: null,
    description: "Soft and creamy red velvet cake for every occasion.",id:'6'
  },
  {
    id:'7',
    name: "Hearts-Aflutter Valentine Cake",
    price: "₹1,299",
    image: "https://bkmedia.bakingo.com/hearts-aflutter-valentine-cake-them4530flav-A.jpg?tr=w-997.5,h-997.5,q-70,dpr-1.5",
    badge: "Latest",
    description: "Special Valentine cake to celebrate love."
  },
  {
    id:'8',
    name: "Hearty Red Velvet Cake",
    price: "₹949",
    image: "https://bkmedia.bakingo.com/hearty-red-velvet-cake-cake-A.jpg?tr=w-997.5,h-997.5,q-70,dpr-1.5",
    badge: null,
    description: "Heart-shaped red velvet cake for special occasions."
  },
  {
    id:'9',
    name: "Black & White Forest Anniversary Cake",
    price: "₹1,599",
    image: "https://bkmedia.bakingo.com/hearty-black-n-white-forest-anniversary-cake-cake3583blac-AAA.jpg?tr=w-400,dpr-1.5",
    badge: "Premium",
    description: "Black & white forest cake designed for anniversaries."
  },
  {
  id: "10",
  name: "Blueberry Bliss Cake",
  price: "₹899",
  image: "https://images.unsplash.com/photo-1605478371350-0c1c757244c3",
  badge: null,
  description: "Fresh blueberry topping with soft vanilla sponge."
},
{
  id: "11",
  name: "Hazelnut Crunch Chocolate Cake",
  price: "₹1,199",
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  badge: "Trending",
  description: "Crunchy hazelnuts blended with rich chocolate cream."
},
{
  id: "12",
  name: "Butterscotch Caramel Cake",
  price: "₹749",
  image: "https://images.unsplash.com/photo-1618213837799-9134c7f8a3b0",
  badge: null,
  description: "Classic butterscotch cake loaded with caramel cream."
},
{
  id: "13",
  name: "Pineapple Cream Delight Cake",
  price: "₹699",
  image: "https://images.unsplash.com/photo-1587668178277-2957f1c0b7a3",
  badge: null,
  description: "Soft cream cake infused with fresh pineapple flavor."
},
{
  id: "14",
  name: "Strawberry Swirl Cake",
  price: "₹799",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqstoLCq2kDo7c1CoDdLGTubRI163dcDcdsw&s",
  badge: "Fresh",
  description: "Creamy strawberry swirl layered with soft sponge."
},
{
  id: "15",
  name: "Chocolate Truffle Supreme",
  price: "₹999",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4siHXH7W3RX8k0Az9iDinrdAGMXjHEazwQ&s",
  badge: "Best Seller",
  description: "Dense chocolate truffle cake topped with rich ganache."
},
{
  id: "16",
  name: "Oreo Overload Cake",
  price: "₹899",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSineYb6FRYliWcT8ff4MngGrgQVuu4xj14iw&s",
  badge: null,
  description: "Loaded with Oreo biscuits and creamy frosting."
},
{
  id: "17",
  name: "Mango Tropical Cake",
  price: "₹849",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirK0p_wkH6kVvDgMOZdyYl0VHleNu-QRk9Q&s",
  badge: "Seasonal",
  description: "Refreshing mango-flavored cake perfect for summers."
},
{
  id: "18",
  name: "KitKat Crunchy Cake",
  price: "₹1,049",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzx707zDmyNt1bRbK4vt7VM2nIO5I3gfj0A&s",
  badge: null,
  description: "Chocolate cake layered with KitKat bars and crispy wafers."
},
{
  id: "19",
  name: "Coffee Mocha Cake",
  price: "₹899",
  image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  badge: "Premium",
  description: "Rich mocha-flavored cake with soft coffee cream frosting."
}

];
const cartList=cakes.map((i)=>
            <Cart key={i.id}
            name={i.name} 
            description={i.description} 
            image={i.image} 
            price={i.price} />
        )
    return(
        <>
            {cartList}
        </>
        
    );
}
export default CakeList;