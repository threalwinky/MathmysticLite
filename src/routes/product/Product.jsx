import React, { Component } from 'react'
import './Product.css'
import { useParams } from "react-router-dom";
import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from '../../components';
import { PopUp, Loading, NotFound, Chatbot } from '../../containers'
import MainProduct from './MainProduct'
import Store1 from '../../assets/img/Store/Store1.webp'
import Store2 from '../../assets/img/Store/Store2.webp'
const Product = () => {

    const params = useParams();

    // console.log(params)

    const productList = [
        {
            "id": "bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi",
            "name" : "Bo dung cu hoc tap hinh hoc cho hoc sinh khiem thi",
            "imgUrl" : Store1,
            "price" : "0",
            "available" : "0"
        },
        {
            "id": "bo-dung-cu-hinh-hoc",
            "name" : "Bo dung cu hinh hoc",
            "imgUrl" : Store2,
            "price" : "249000",
            "available" : "1"
        },
        
    ]

    const productCheck = productList.find((productId) => {
        return productId.id == params.id
    }) != undefined

    const foundProduct = productList.find((productId) => {
        return productId.id == params.id
    })

    // console.log(productCheck)

    return (
        <div>
            {/* <h2>{params}</h2> */}
            {productCheck ?
                <div>

                    <div className='gradient__bg'>
                        <NavBar />
                    </div>
                    <MainProduct productInfo={foundProduct} />
                    <Chatbot />

                </div>
                : <NotFound />}
        </div>
    )

}

export default Product
