import React from 'react';
import { cn } from '@bem-react/classname'
import './message.scss'
import { Imessage } from '../../store/store';
interface MessageProps {
    message: Imessage;
}

const Message: React.FC<MessageProps> = ({message}) => {
    const messageClass = cn('Message');
    return (
        <div className={messageClass()}>
            <pre className={messageClass('Body')}>
            {message.text}
            </pre>
            <p className={messageClass('Time')}>{message.time}</p>
        </div>
    );
};

export default Message;