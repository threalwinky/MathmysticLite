import React, { Component } from 'react'
import './Product.css'
class Product extends Component {
    render() {
        return (
            <div>
<h2>{this.props.match.params.id}</h2>
            </div>
        )
    }
}

export default Product
