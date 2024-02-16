import React, { FC, useContext, useEffect } from 'react';
import './contact.scss';
import { cn } from '@bem-react/classname';
import { Iuser } from '../../store/store';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import avatars from '../../images/avatars/index';
import WriteAnimation from '../WriteAnimation/WriteAnimation';
interface ContactProps {
    user: Iuser;
}

const Contact: FC<ContactProps> = observer(({ user }) => {
    const contactClass = cn('Contact');
    const { store } = useContext(Context);
    const lastMessage = user.messages[user.messages.length - 1];
    const notReadedMessages = user.messages.reduce((counter, message) => {
        return message.isReaded ? counter : counter + 1;
    }, 0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const isOnline = Math.random() < 0.5;
            store.setUserOnline(user.id, isOnline);
            if (isOnline) {
                const isTyping = Math.random() < 0.5;
                setTimeout(() => {
                    store.setUserTyping(user.id, isTyping);
                }, 1000);
                setTimeout(() => {
                    if (isTyping) {
                        store.setNewMessage(user.id, store.getRandomMessage());
                    }
                    store.setUserTyping(user.id, false);
                }, 2500);
            } else {
                store.setUserTyping(user.id, false);
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [store, user.id]);

    const handleClick = (): void => {
        store.setChatId(user.id);
    };

    return (
        <div onClick={handleClick} className={contactClass()}>
            <div className={contactClass('AvatarContainer')}>
                <img
                    className={contactClass('Avatar')}
                    alt="Аватар контакта"
                    src={avatars[user.avatar]}
                ></img>
                {user.online && <div className={contactClass('Online')}></div>}
            </div>
            <div
                className={contactClass('Info', {
                    expanded: store.isMenuExpanded,
                })}
            >
                <h3 className={contactClass('Name')}>{user.name}</h3>
                {user.isTyping ? (
                    <WriteAnimation text="Печатает" />
                ) : (
                    <p className={contactClass('LastMsg')}>
                        {lastMessage.text}
                    </p>
                )}
            </div>
            <div className={contactClass('TimeContainer')}>
                <p className={contactClass('TimeMsg')}>{lastMessage.time}</p>
                {notReadedMessages ? (
                    <div className={contactClass('MsgCounter')}>
                        {notReadedMessages}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
});

export default Contact;
