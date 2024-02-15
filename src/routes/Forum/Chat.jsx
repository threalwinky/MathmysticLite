import React, { useEffect } from "react";
import db from '../../firebase'
import { onSnapshot, collection, deleteDoc, doc, getDocs, addDoc, Timestamp, query } from 'firebase/firestore'
import { useState } from 'react';
import { Loading, NotFound } from '../../containers'
import { Link, useParams } from "react-router-dom";
import './Chat.css'
import { FooterWoutMail } from "../../components";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";

const Chat = ({ chatId }) => {
    const [loading, setLoading] = useState(0)
    const [messages, setMessages] = useState([])
    const [chats, setChats] = useState([])
    const [foundChat, setFoundChat] = useState([])
    const [messageContent, setMessageContent] = useState('')
    const [foundUser, setFoundUser] = useState([])
    const fetchPost = async () => {

        await getDocs(collection(db, "message"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                const newData2 = []
                newData.forEach(element => {
                    if (element.chatInclude == chatId) newData2.push(element)
                });
                // console.log(newData2)
                setMessages(newData2.sort(function (b, a) { return b.createdAt - a.createdAt }));
                setLoading(1)
            })


    }
    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "message")), (doc) => {
            getDocs(collection(db, "message"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    const newData2 = []
                    newData.forEach(element => {
                        if (element.chatInclude == chatId) newData2.push(element)
                    });
                    setMessages(newData2.sort(function (b, a) { return b.createdAt - a.createdAt }))
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


        getDocs(collection(db, "chat"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setChats(newData);
                setLoading(1)
                const foundChat2 = (newData.find(x => x.id == chatId))
                setFoundChat(foundChat2)
                // console.log(foundChat)
            })

        fetchPost();

    }, [])

    const addMessage = () => {
        addDoc(collection(db, 'message'), {
            content: messageContent,
            createdAt: Timestamp.now().seconds,
            createdBy: foundUser,
            chatInclude: chatId
        })
    }

    const deleteMessage = (idDeleteMessage) => {
        deleteDoc(doc(db, 'message', idDeleteMessage))
    }

    return (
        <div>
            {foundChat == undefined ? <NotFound /> :

                <div>
                    {!loading ? <Loading /> :
                        <div className="mmt__chat-body">
                            <div className="mmt__chat-container">
                                {/* {messages.length}
                                {foundChat.description}
                                {foundChat.name}
                                {foundChat.createdUser.avatar}
                                {foundChat.createdUser.name} */}
                                <div className="mmt__chat-info">
                                    <div className="mmt__chat-info_content">
                                        <IoEyeSharp className="mmt__chat-info_content-icon" /><p>10</p></div>
                                    <div className="mmt__chat-info_content">
                                        <FaComment className="mmt__chat-info_content-icon" /><p>10</p></div>
                                    <div className="mmt__chat-info_content">
                                        <TiTickOutline className="mmt__chat-info_content-icon2" size={20} /><p>10</p></div>
                                </div>
                                <div className="mmt__chat-box">
                                    <div className="mmt__chat-vote">
                                        <TbTriangleFilled size={10} />
                                        0
                                        <TbTriangleInvertedFilled size={10} />

                                    </div>
                                    <div className="mmt__chat-ask">
                                        <div className="mmt__chat-ask_info">
                                            <img src={foundChat.createdUser.avatar} />
                                            <p>{foundChat.createdUser.name}</p>
                                        </div>
                                        <div className="mmt__chat-ask_content">
                                            <h1>{foundChat.name}</h1>
                                            <h5>{foundChat.description}</h5>
                                        </div>
                                    </div>
                                </div>

                                <div />
                                <div className="mmt__chat-ans_count">
                                    <h2><span>Co {messages.length} cau tra loi</span></h2>
                                </div>
                                <div className="mmt__chat-ans-container">
                                    {
                                        messages?.map((message, id) => (
                                            <p key={id}>

                                                <div className="mmt__chat-ans-box">
                                                    <div className="mmt__chat-vote">
                                                        <TbTriangleFilled size={10} />
                                                        0
                                                        <TbTriangleInvertedFilled size={10} />
                                                    </div>
                                                    <div className="mmt__chat-ans">
                                                        <div className="mmt__chat-ans_info">
                                                            <div className='mmt__chat-ask_info'>
                                                                <img src={message.createdBy.avatar} />
                                                                <p>{message.createdBy.name}</p>
                                                            </div>


                                                        </div>
                                                        {message.content}
                                                        {/* 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
                                                    </div>

                                                    <div className="mmt__chat-ask_menu">
                                                        {/* <button
                                                            onClick={() => { deleteMessage(message.id) }}
                                                            className="mmt__chat-ask_menu-button"
                                                        >Delete</button> */}
                                                        <BsThreeDotsVertical size={20} />

                                                    </div>




                                                </div>
                                                <div className="mmt__chat-ans_count2">
                                                    <h2></h2>
                                                </div>
                                            </p>
                                        ))
                                    }
                                </div>
                                <div>
                                    <input type="text" onChange={evt => { setMessageContent(evt.target.value); }} />
                                    <button onClick={addMessage}>Send</button>
                                </div>


                            </div>

                        </div>
                    }
                </div>

            }
            <FooterWoutMail />
        </div>
    )
}

export default Chat