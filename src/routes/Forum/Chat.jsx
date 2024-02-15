import React, { useEffect } from "react";
import db from '../../firebase'
import { onSnapshot, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useState } from 'react';
import { Loading, NotFound } from '../../containers'
import { Link, useParams } from "react-router-dom";

const Chat = ({ chatId }) => {
    const [loading, setLoading] = useState(0)
    const [messages, setMessages] = useState([])
    const [chats, setChats] = useState([])
    const [findChat, setFindChat] = useState(0)

    const fetchPost = async () => {

        await getDocs(collection(db, "message"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setMessages(newData);
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
        fetchPost();
    }, [])

    return (
        <div>
            {findChat == undefined ? <NotFound /> :

                <div>
                    {!loading ? <Loading /> :
                        <div>
                            {
                                messages?.map((message, id) => (
                                    <p key={id}>
                                        {message.chatInclude == chatId ?
                                            <div>
                                                {message.content}
                                            </div> :
                                            ""
                                        }
                                    </p>
                                ))
                            }
                        </div>
                    }

                </div>

            }

        </div>
    )
}

export default Chat