import React, { useEffect } from "react";
import db from '../../firebase'
import { onSnapshot, collection, deleteDoc, doc, getDocs, addDoc, Timestamp, query } from 'firebase/firestore'
import { useState } from 'react';
import { Loading, NotFound } from '../../containers'
import { Link, useParams } from "react-router-dom";

const Chat = ({ chatId }) => {
    const [loading, setLoading] = useState(0)
    const [messages, setMessages] = useState([])
    const [chats, setChats] = useState([])
    const [findChat, setFindChat] = useState(0)
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

        await getDocs(collection(db, "chat"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setChats(newData);
                setLoading(1)
                const foundChat = (newData.find(x => x.id == chatId))
                setFindChat(foundChat)
                // console.log(foundChat)
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

        fetchPost();
    }, [])

    const addMessage = () => {
        addDoc(collection(db, 'message'), {
            content: messageContent,
            createdAt: Timestamp.now().seconds,
            createdBy: foundUser.name,
            chatInclude: chatId
        })
    }

    const deleteMessage = (idDeleteMessage) => {
        deleteDoc(doc(db, 'message', idDeleteMessage))
    }

    return (
        <div>
            {findChat == undefined ? <NotFound /> :

                <div>
                    {!loading ? <Loading /> :
                        <div>
                            {
                                messages?.map((message, id) => (
                                    <p key={id}>

                                        <div>
                                            {message.createdBy} :
                                            {message.content}
                                            <button onClick={() => { deleteMessage(message.id) }}>Delete</button>
                                        </div>

                                    </p>
                                ))
                            }

                            <input type="text" onChange={evt => { setMessageContent(evt.target.value); }} />
                            <button onClick={addMessage}>Send</button>
                        </div>
                    }

                </div>

            }

        </div>
    )
}

export default Chat