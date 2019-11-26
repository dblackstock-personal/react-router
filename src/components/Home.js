import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h3>Welcome Home</h3>
            <p>Lorem ipsum dolor sit amet: £{props.price}</p>
            <button className="purchase-button" onClick={props.toBasket}>Add it to the basket</button>
        </div>
    )
}

export default Home;
