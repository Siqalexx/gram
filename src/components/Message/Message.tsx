import React, { FC, useContext } from 'react';
import { cn } from '@bem-react/classname';
import './message.scss';
import { Imessage } from '../../store/message.store';
import { Context } from '../..';

interface MessageProps {
    message: Imessage;
}

const Message: FC<MessageProps> = (props) => {
    const messageClass = cn('Message');
    const { store } = useContext(Context);
    function formatTime(timestamp: Date): string {
        const hours = timestamp.getHours();
        const minutes = timestamp.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }
    return (
        <div
            className={messageClass({
                expanded: store.isMenuExpanded,
            })}
        >
            <pre className={messageClass('Body')}>{props.message.text}</pre>
            <p className={messageClass('Time')}>
                {formatTime(props.message.timestamp)}
            </p>
        </div>
    );
};

export default Message;
