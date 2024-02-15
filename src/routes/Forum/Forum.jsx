import React, { useEffect } from "react";
import db from '../../firebase'
import { onSnapshot, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import './Forum.css'
import { useState } from 'react';
import { Loading } from '../../containers'
import { Link, useParams } from "react-router-dom";
import Chat from './Chat'
const Forum = () => {
    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(0)
    const params = useParams();
    
    const fetchPost = async () => {

        await getDocs(collection(db, "chat"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setChats(newData);
                setLoading(1)
                const foundChat = (newData.find(x => x.id == params))
                console.log(foundChat)
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])
    // if (!(params.id == undefined)) 
    //     const paramCheck = 1
    // console.log(!(params.id == undefined))
    const paramCheck = !(params.id == undefined)
    return (
        <div className='App App-header'>
            {paramCheck < 1?
                <div>
                    {!loading ? <Loading /> : <div>

                        {
                            chats?.map((chat, id) => (
                                <p key={id}>
                                    <Link to={chat.id}><button>{chat.id}</button></Link>
                                    {

                                    }
                                </p>
                            ))
                        }
                    </div>
                    }
                </div> : 
                <div>
                    
                    <Chat chatId={params.id}></Chat>

                </div>}



        </div>
    )
}

export default Forum