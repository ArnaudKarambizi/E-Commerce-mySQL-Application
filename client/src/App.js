import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage/ContactPage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
    // APP STATE

    state = {
        selectValue: "default"
    };

    // mounted() {
    //     fetch("localhost:5000/employees").then(response => {
    //         return console.log(response);
    //     });
    // }
    componentDidMount() {
        fetch(`http://localhost:5000/api/products`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("data", data);
            });
    }

    // UPDATING STATE

    selectFilter = e => {
        this.setState({
            selectValue: e.target.value
        });
    };

    render() {
        return (
            <Router>
                <Header />
                <main className="main">
                    <Route path="/" exact component={Homepage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route
                        path="/products"
                        component={() => (
                            <ProductPage
                                // ******* passing state in  productPage component as props ***

                                selectValue={this.state.selectValue}
                                selectFilter={this.selectFilter}
                            />
                        )}
                    />
                </main>
                <Footer />
            </Router>
        );
    }
}
