
function Cart(props){
return(
        <div className="cart">
                <img src={props.image}/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                
                <p>{`$ ${props.price}`}</p>
            </div>
);
}
export default Cart;