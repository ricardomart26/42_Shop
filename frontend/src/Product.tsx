import React from 'react';

type ProductObj = {item : {
    id: Number,
    name: String,
    price: Number,
    date: String,
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
        const divStyle = {border: '2px solid green', width:'40%', listStyleType:'none'};
        const h1Style = {color : 'blue', fontSize:'23px'};
        return (
            <div style={divStyle}> 
                <h1> {this.props.item.name} </h1> 
                <p> Description: {this.props.item.description}</p>
                <h1 style={h1Style}> Price: {this.props.item.price.toString()}</h1>
                <h1 style={h1Style} > Date: {this.props.item.date.toString()}</h1>
                <h1 style={h1Style}> Amount: {this.props.item.amount.toString()}</h1>
            </div>
        );
    }
}

export default Product;
