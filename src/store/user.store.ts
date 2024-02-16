import { computed, makeAutoObservable } from 'mobx';
import Store from './store';

export interface Iuser {
    id: number;
    name: string;
    isTyping: boolean;
    online: boolean;
    avatar: string;
    unreadMessagesCount: number;
}

class UserStore {
    store;
    users: Iuser[] = [
        {
            id: 1,
            name: 'Иван Иванов',
            online: true,
            isTyping: false,
            avatar: 'ivanAvatar',
            unreadMessagesCount: 0,
        },
        {
            id: 2,
            name: 'Федор Прилипало',
            online: false,
            isTyping: false,
            avatar: 'fedorAvatar',
            unreadMessagesCount: 0,
        },
        {
            id: 3,
            name: 'Михаил Светлый',
            online: false,
            isTyping: false,
            unreadMessagesCount: 0,
            avatar: 'mikhailAvatar',
        },
        {
            id: 4,
            name: 'Дима Работа',
            online: false,
            isTyping: false,
            avatar: 'dmitriyAvatar',
            unreadMessagesCount: 0,
        },
        {
            id: 5,
            name: 'Вася Сантехник',
            online: false,
            isTyping: false,
            unreadMessagesCount: 0,
            avatar: 'vasiliyAvatar',
        },
        {
            id: 6,
            name: 'Надя Садик',
            online: false,
            isTyping: false,
            avatar: 'nadejdaAvatar',
            unreadMessagesCount: 0,
        },
        {
            id: 7,
            name: 'Марина Андреева',
            online: false,
            isTyping: false,
            unreadMessagesCount: 0,
            avatar: 'marinaAvatar',
        },
    ];

    constructor(store: Store) {
        makeAutoObservable(this);
        this.store = store;
    }

    getUser(id: number) {
        return this.users.find((user) => user.id === id);
    }

    setUserOnline(idUser: number, status: boolean) {
        this.users.forEach((user) => {
            if (user.id === idUser) {
                user.online = status;
            }
        });
    }

    setUserTyping(idUser: number, typing: boolean) {
        this.users.forEach((user) => {
            if (user.id === idUser) {
                user.isTyping = typing;
            }
        });
    }

    resetUnreadMessagesCount(id: number) {
        this.users.forEach((user) => {
            if (user.id === id) {
                user.unreadMessagesCount = 0;
            }
        });
    }

    @computed
    get unreadMessagesCount(): number {
        return this.users.reduce(
            (count, user) => count + user.unreadMessagesCount,
            0,
        );
    }
}

export default UserStore;
