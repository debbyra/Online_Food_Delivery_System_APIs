import React,{useState} from 'react'
import Dash from './Homepage/components/Dash';
import Amazon from './Homepage/components/Amazon';
import Cart from './Homepage/components/Cart';
import './Homepage/styles/amazon.css';


const FoodCart = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    console.log(cart)

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            console.log(product, 'prduct', item, 'item')
            if (item?.name === product?.name) {
                return isPresent = true;
            }
        })
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        setCart([...cart, item]);
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCart([...tempArr])
    }

  


    return (
        <React.Fragment>
            <Dash size={cart.length} setShow={setShow} />
            {
                show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
            {
                warning && <div className='warning'>Item is already added to your cart</div>
            }
            
        </React.Fragment>
    )
}

export default FoodCart