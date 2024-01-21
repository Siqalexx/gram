import React, { useContext, useEffect } from 'react';
import { cn } from '@bem-react/classname'
import "./chat.scss"
import Message from '../Message/Message';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Iuser } from '../../store/store';
interface ChatProps {
    
}

const Chat: React.FC<ChatProps> = observer(() => {
    const chatClass = cn('Chat')
    const { store } = useContext(Context);
    const user:Iuser | undefined = store.getUser(store.chatId);
    useEffect(() => {
        // При заходе на чат пользователя отмечаем все его сообщения как прочитанные
        store.markAllMessagesAsRead(user?.id);
      }, [store, store.chatId, user?.id]);
    return (
        <div className={chatClass()}>
            <div className={chatClass('Header')}>
                <h3 className={chatClass('Name')}>{user?.name}</h3>
                <p className={chatClass('UserStatus')}>{user?.online ? user.isTyping? 'Печатает...' : 'Online' : 'Offline'}</p>
            </div>
            <div className={chatClass('Body')}>
                {user?.messages.map(msg=>{
                    return <Message key={msg.id} message={msg}/>
                })}
            </div>
            <div>
            <div className={chatClass('InputWrapper')}>
                <input placeholder='Написать сообщение...' className={chatClass('Input')} type="text"></input>
            </div>
            </div>
        </div>
    );
});

export default Chat;