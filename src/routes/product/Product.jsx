import React, { Component } from 'react'
import './Product.css'
import { useParams } from "react-router-dom";
import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from '../../components';
import { PopUp, Loading, NotFound, Chatbot } from '../../containers'
import MainProduct from './MainProduct'
import Store1_1 from '../../assets/img/Store/Store1/Store1_1.webp'
import Store1_2 from '../../assets/img/Store/Store1/Store1_2.webp'
import Store1_3 from '../../assets/img/Store/Store1/Store1_3.png'
import Store2_1 from '../../assets/img/Store/Store2/Store2_1.webp'
import Store2_2 from '../../assets/img/Store/Store2/Store2_2.webp'
const Product = () => {

    const params = useParams();

    // console.log(params)

    const productList = [
        {
            "id": "bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi",
            "name" : "Bo dung cu hoc tap hinh hoc cho hoc sinh khiem thi",
            "imgUrl" : [Store1_1, Store1_2, Store1_3],
            "price" : "0",
            "available" : "0",
            "involve" : `1 Bảng lỗ gỗ 20*20cm
            2 cọng dây thun tròn
            6 cọng dây thun dài 2 lỗ
            4 cây ăng ten
            3 Khoen tròn 
            1 Flashcard hình học `
        },
        {
            "id": "bo-dung-cu-hinh-hoc",
            "name" : "Bo dung cu hinh hoc",
            "imgUrl" :  [Store2_1, Store2_2, Store1_3],
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
