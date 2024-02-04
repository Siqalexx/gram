import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import './message.scss';
import { Imessage } from '../../store/store';

interface MessageProps {
    isMenuExpanded: boolean;
    message: Imessage;
}

const Message: FC<MessageProps> = ({ isMenuExpanded, message }) => {
    const messageClass = cn('Message');
    return (
        <div
            className={messageClass({
                expanded: isMenuExpanded,
            })}
        >
            <pre className={messageClass('Body')}>{message.text}</pre>
            <p className={messageClass('Time')}>{message.time}</p>
        </div>
    );
};

export default Message;
