import React, { useContext, useEffect } from 'react';
import "./contact.scss"
import { cn } from '@bem-react/classname'
import contactAvatar from '../../images/contact-avatar.svg'
import { Iuser } from '../../store/store';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

interface ContactProps {
    user: Iuser;
}

const Contact: React.FC<ContactProps> = observer(({user}) => {
    const contactClass = cn('Contact');
    const { store } = useContext(Context);
    const lastMessage = user.messages[user.messages.length-1]
    const notReadedMessages = user.messages.reduce((counter, message)=>{
        return message.isReaded ? counter : counter+1;
    },0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const isOnline = Math.random() < 0.5;
            store.setUserOnline(user.id, isOnline)
          if (isOnline) {
            const isTyping = Math.random() < 0.5;
            setTimeout(()=>{
                store.setUserTyping(user.id, isTyping);
            }, 1000)
            setTimeout(()=>{
                if(isTyping){
                    store.setNewMessage(user.id, store.getRandomMessage())
                }
                store.setUserTyping(user.id, false);
            },2500)
           } else {
                store.setUserTyping(user.id, false);
            }
        }, 5000); 
        return () => clearInterval(intervalId);
      }, [store]);
      
      const handleClick = ()=>{
        store.setChatId(user.id)
      }

    return (
        <div onClick={handleClick} className={contactClass()}>
            <div className={contactClass('AvatarContainer')}>
                <img className={contactClass('Avatar')} alt='Аватар контакта' src={user.avatar}></img>
                {user.online && <div className={contactClass('Online')}></div>}
            </div>
            <div className={contactClass('Info')}>
                <h3 className={contactClass('Name')}>{user.name}</h3>
                <p className={contactClass('LastMsg')}>{user.isTyping ? 'Печатает...' : lastMessage.text}</p>
            </div>
            <div className={contactClass('TimeContainer')}>
                <p className={contactClass('TimeMsg')}>{lastMessage.time}</p>
                {notReadedMessages ? <div className={contactClass('MsgCounter')}>{notReadedMessages}</div> : ''}
            </div>
        </div>
    );
});

export default Contact;