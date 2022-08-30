import React from 'react';

type ProductObj = {item : {
    id: Number,
    name: String,
    price: Number,
    date: Number,
    amount: Number,
    description: String
}}

class Product extends React.Component<ProductObj, {}> {
    constructor(props: any) {
        super(props);
        this.state = {};
        console.log(this.props.item);
    }
    render() {
        return (
            <div>
                <h1> {this.props.item.name} </h1>
                <p> Description: {this.props.item.description}</p>
                <h1> Price: {this.props.item.price.toString()}</h1>
                <h1> Date: {this.props.item.date.toString()}</h1>
                <h1> Amount: {this.props.item.amount.toString()}</h1>
            </div>
        );
    }
}

export default Product;
