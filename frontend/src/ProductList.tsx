import React from "react";
import Product from "./Product";
import axios from 'axios';

class ProductList extends React.Component<{}, {products: Array<{id: Number, name: String, price: Number, date: Number, amount: Number, description: String}>}>{
    constructor(props: any) {
        super(props);
        const _date =  Date.now();
        this.state = 
           {
            products: [
                {id: 0, name: "Jacket", price: 20.00, date: _date, amount: 5, description: "Wonderfull jacket from 42"},
                {id: 1, name: "Towel", price: 5.00, date: _date, amount: 3, description: "Wonderfull towel from 42"},
                {id: 2, name: "Cup", price: 10.00, date: _date, amount: 10, description: "Wonderfull Cup from 42"},
            ]};
        console.log(this.state.products);
    };

    ComponentDidMount() {
        axios.get()
    }

    render(): JSX.Element[] {
        const itemList = this.state.products;

        return (
            itemList.map((item) => {
                return (
                    <Product key={item.id.toString()} item={item} />
                );
            })
        );

    };
};

export default ProductList;
