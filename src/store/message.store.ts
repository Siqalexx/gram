import { makeAutoObservable } from 'mobx';
import Store from './store';

export interface Imessage {
    id: number;
    ownerId: number;
    text: string;
    timestamp: Date;
    isReaded: boolean;
}

class MessageStore {
    store;
    messages: Imessage[] = [
        {
            id: 1,
            ownerId: 1,
            text: 'Привет, это мое первое сообщение, Я Иван',
            timestamp: new Date(),
            isReaded: true,
        },
        {
            id: 1,
            ownerId: 2,
            text: 'Привет, это мое первое сообщение, Я Федор',
            timestamp: new Date(),
            isReaded: true,
        },
        {
            id: 1,
            ownerId: 3,
            text: 'Привет, это мое первое сообщение, Я Миша',
            timestamp: new Date(),
            isReaded: true,
        },
        {
            id: 1,
            ownerId: 4,
            text: 'Привет, это мое первое сообщение, Я Дима',
            timestamp: new Date(),
            isReaded: true,
        },
        {
            id: 1,
            ownerId: 5,
            text: 'Привет, это мое первое сообщение, Я Вася',
            timestamp: new Date(),
            isReaded: true,
        },
        {
            id: 1,
            ownerId: 6,
            text: 'Привет, это мое первое сообщение, Я Надя',
            timestamp: new Date(),
            isReaded: true,
        },
        {
            id: 1,
            ownerId: 7,
            text: 'Привет, это мое первое сообщение, Я Марина',
            timestamp: new Date(),
            isReaded: true,
        },
    ];

    constructor(store: Store) {
        makeAutoObservable(this);
        this.store = store;
    }

    getUserMessages(ownerId: number): Imessage[] {
        return this.messages.filter((message) => message.ownerId === ownerId);
    }

    getUserLastMessage(ownerId: number): Imessage | undefined {
        const userMessages = this.messages.filter(
            (message) => message.ownerId === ownerId,
        );

        if (userMessages.length === 0) {
            return undefined; // если у пользователя нет сообщений, возвращаем undefined
        }

        return userMessages.reduce((latestMessage, currentMessage) => {
            // сравниваем время сообщений
            return latestMessage.timestamp > currentMessage.timestamp
                ? latestMessage
                : currentMessage;
        });
    }

    markAllMessagesAsRead(idUser: number) {
        this.messages.forEach((message) => {
            if (message.ownerId === idUser) {
                message.isReaded = true;
            }
        });
        this.store.userStore.resetUnreadMessagesCount(idUser);
    }

    setNewMessage(idUser: number, text: string) {
        //пушим новое сообщение в массив
        this.messages.push({
            id: Math.random(),
            ownerId: idUser,
            text,
            timestamp: new Date(),
            isReaded: this.store.chatId === idUser,
        });

        //меняем кол-во непрочитанных сообщений у юзера
        this.store.userStore.users.forEach((user) => {
            if (user.id === idUser) {
                user.unreadMessagesCount =
                    this.store.chatId === idUser
                        ? user.unreadMessagesCount
                        : user.unreadMessagesCount + 1;
            }
        });
    }
}

export default MessageStore;
