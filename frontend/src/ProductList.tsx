import React from "react";
import Product from "./Product";
// import axios from 'axios';

type ProductObj = {
    products:
    Array<
        {
            id: Number,
            name: String,
            price: Number,
            date: String,
            amount: Number,
            description: String,
        }
    >
    // error_msg: String
}

class ProductList extends React.Component<{}, ProductObj>{
    constructor(props: any) {
        super(props);
        const currentDate = new Date();

        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();

        const _date = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
        this.state = {
            // products: [],
            // error_msg: '',
            products: [
                {id: 0, name: "Jacket", price: 20.00, date: _date, amount: 5, description: "Wonderfull jacket from 42"},
                {id: 1, name: "Towel", price: 5.00, date: _date, amount: 3, description: "Wonderfull towel from 42"},
                {id: 2, name: "Cup", price: 10.00, date: _date, amount: 10, description: "Wonderfull Cup from 42"},
            ]
            };
        console.log(this.state.products);
    };


    // https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/
    // https://jasonwatmore.com/post/2020/07/17/react-axios-http-get-request-examples
    // componentDidMount() {
    //     axios.get('http://localhost:3333/products')
    //     .then(response => this.setState({products: response.data}))
    //     .catch(error => {
    //         this.setState({error_msg: error.message});
    //         console.error('There was an error', error);
    //     });
    // }

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
