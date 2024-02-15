import React, { useEffect } from "react";
import db from '../../firebase'
import { onSnapshot, collection, deleteDoc, doc, getDocs, Timestamp, addDoc, query } from 'firebase/firestore'
import './Forum.css'
import { useState } from 'react';
import { Loading } from '../../containers'
import { Link, useParams } from "react-router-dom";
import Chat from './Chat'
import { Form } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Forum = () => {
    if (localStorage.getItem('user') == undefined) window.location.href = '/'

    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(0)
    const [chatName, setChatName] = useState('')
    const [chatDescription, setChatDescription] = useState('')
    const [showNewPost, setShowNewPost] = useState(0)
    const [foundUser, setFoundUser] = useState([])
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

        getDocs(collection(db, "account"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
                setFoundUser(foundUser2)
                // setLoading(1)
            })

        fetchPost();

        fetchPost();
    }, [])

    const paramCheck = !(params.id == undefined)

    const addChat = () => {
        addDoc(collection(db, 'chat'), {
            name: chatName,
            description: chatDescription,
            content: 'hello',
            createdAt: Timestamp.now().seconds,
            createdUser: foundUser
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
                                <div className="mmt__forum-list-seach_box">
                                    <span>
                                        <IoSearch size={25} className="mmt__forum-list-seach_box-icon" title="search" />
                                        <input
                                            className="mmt__forum-list-seach_box-input"
                                            onChange={evt => { updateChat(evt.target.value) }}
                                            type="text"
                                            placeholder="Search a post"
                                        />
                                    </span>
                                    <button onClick={() => { setShowNewPost(!showNewPost) }} className="mmt__forum-list-seach_box-new_post_button">New Post</button>
                                </div>
                                {!showNewPost ? "" :
                                    <div className="mmt__forum-list-new_post_box">
                                        <input
                                            onChange={evt => { setChatDescription(evt.target.value); }}
                                            placeholder="Post Description"
                                            className="mmt__forum-list-new_post_box-top"
                                        />
                                        <div className="mmt__forum-list-new_post_box-bottom">
                                            <input
                                                onChange={evt => { setChatName(evt.target.value); }}
                                                placeholder="Post title"
                                            />
                                            <button onClick={addChat}>Add</button>
                                        </div>

                                    </div>
                                }
                                <div className="mmt__forum-list-list_box-container">
                                    {

                                        chats?.map((chat, id) => (
                                            <div>

                                                <div className="mmt__forum-list-list_box-box" key={id}>
                                                    <div className="mmt__forum-list-list_box-box-left">
                                                        asd
                                                    </div>
                                                    <div className="mmt__forum-list-list_box-box-right">
                                                        <div className="mmt__forum-list-list_box-box-right-askedby">
                                                            <img src={chat.createdUser.avatar} />
                                                            <p>{chat.createdUser.name}</p>

                                                        </div>
                                                        <Link to={chat.id}>
                                                            <div className="mmt__forum-list-list_box-box-right-content">
                                                                <h1>{chat.name}</h1>

                                                                <h5>{chat.description}</h5>


                                                            </div>
                                                        </Link>


                                                        {/* <BsThreeDotsVertical className="mmt__forum-list-list_box-box-right-menu_button" /> */}

                                                    </div>

                                                </div>

                                                {/* <button onClick={() => { deleteChat(chat.id) }}>Delete</button> */}
                                            </div>


                                        ))
                                    }
                                </div>

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