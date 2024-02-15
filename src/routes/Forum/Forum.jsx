import React, { useEffect } from "react";
import db from '../../firebase'
import { onSnapshot, collection, deleteDoc, doc, getDocs, Timestamp, addDoc, query } from 'firebase/firestore'
import './Forum.css'
import { useState } from 'react';
import { Loading } from '../../containers'
import { Link, useParams } from "react-router-dom";
import Chat from './Chat'
const Forum = () => {
    if (localStorage.getItem('user') == undefined) window.location.href = '/'

    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(0)
    const [chatName, setChatName] = useState('')
    const [chatDescription, setChatDescription] = useState('')
    const params = useParams();

    const fetchPost = async () => {

        await getDocs(collection(db, "chat"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setChats(newData);
                setLoading(1)
                const foundChat = (newData.find(x => x.id == params))
                // console.log(foundChat)
            })
    }

    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "chat")), (doc) => {
            getDocs(collection(db, "chat"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setChats(newData.sort(function (a, b) { return b.createdAt - a.createdAt }))
                    // console.log(newData.sort(function (b, a) { return b.createdAt - a.createdAt }))
                    setLoading(1)
                })
        });

        fetchPost();
    }, [])

    const paramCheck = !(params.id == undefined)

    const addChat = () => {
        addDoc(collection(db, 'chat'), {
            name: chatName,
            description: chatDescription,
            content: 'hello',
            createdAt: Timestamp.now().seconds,
            createdUser: 'Vu'
        })
    }

    const deleteChat = (idDeleteChat) => {
        deleteDoc(doc(db, 'chat', idDeleteChat))
    }

    const updateChat = (idUpdateChat) => {
        getDocs(collection(db, "chat"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                // setChats(newData);
                const newData2 = []
                newData.forEach(element => {
                    if (element.name.includes(idUpdateChat)) newData2.push(element)
                });
                setChats(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }))
                setLoading(1)
                // const foundChat = (newData.find(x => x.id == params))
                // console.log(foundChat)
            })
    }

    return (
        <div className='App App-header'>
            {paramCheck < 1 ?
                <div>
                    {!loading ? <Loading /> :
                        <div className="mmt__forum">
                            <div className="mmt__forum-list">
                                <input onChange={evt => { updateChat(evt.target.value) }} type="text" placeholder="Search" />
                                <input onChange={evt => { setChatDescription(evt.target.value); }} placeholder="Chat Description" />
                                <input onChange={evt => { setChatName(evt.target.value); }} placeholder="Chat title" />
                                <button onClick={addChat}>Add</button>
                                {
                                    chats?.map((chat, id) => (
                                        <p key={id}>
                                            <Link to={chat.id}><button>{chat.name}</button></Link>
                                            {chat.description}
                                            <button onClick={() => { deleteChat(chat.id) }}>Delete</button>
                                        </p>
                                    ))
                                }
                            </div>

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