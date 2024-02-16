import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import './chat.scss';
import Message from '../Message/Message';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Iuser } from '../../store/store';
import WriteAnimation from '../WriteAnimation/WriteAnimation';

const Chat: FC = observer(() => {
    const chatClass = cn('Chat');
    const { store } = useContext(Context);
    const user: Iuser = store.getUser(store.chatId)!;
    useEffect(() => {
        // При заходе на чат пользователя отмечаем все его сообщения как прочитанные
        store.markAllMessagesAsRead(user?.id);
    }, [store, store.chatId, user?.id]);
    const getUserTypingStatus = (): ReactElement => {
        if (user.isTyping) {
            return <WriteAnimation text="Печатает" />;
        }
        return <p className={chatClass('UserStatus')}>Online</p>;
    };
    return (
        <div className={chatClass()}>
            <div className={chatClass('Header')}>
                <h3 className={chatClass('Name')}>{user?.name}</h3>
                {user.online ? (
                    getUserTypingStatus()
                ) : (
                    <p className={chatClass('UserStatus')}>Offline</p>
                )}
            </div>
            <div className={chatClass('Body')}>
                {user?.messages.map((msg) => {
                    return (
                        <Message
                            isMenuExpanded={store.isMenuExpanded}
                            key={msg.id}
                            message={msg}
                        />
                    );
                })}
            </div>
            <div>
                <div className={chatClass('InputWrapper')}>
                    <input
                        placeholder="Написать сообщение..."
                        className={chatClass('Input')}
                        type="text"
                    ></input>
                </div>
            </div>
        </div>
    );
});

export default Chat;
