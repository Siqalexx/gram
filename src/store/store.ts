import { computed, makeAutoObservable } from 'mobx';

export interface Imessage {
    id: number;
    text: string;
    time: string; // 8:30
    isReaded: boolean;
}

export interface Iuser {
    id: number;
    name: string;
    isTyping: boolean;
    online: boolean;
    avatar: string;
    unreadMessagesCount: number;
    messages: Imessage[];
}

export default class Store {
    isMenuExpanded: boolean = false;

    users: Iuser[] = [
        {
            id: 1,
            name: 'Иван Иванов',
            online: true,
            isTyping: false,
            avatar: 'ivanAvatar',
            unreadMessagesCount: 0,
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Иван',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
        {
            id: 2,
            name: 'Федор Прилипало',
            online: false,
            isTyping: false,
            avatar: 'fedorAvatar',
            unreadMessagesCount: 0,
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Федор',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
        {
            id: 3,
            name: 'Михаил Светлый',
            online: false,
            isTyping: false,
            unreadMessagesCount: 0,
            avatar: 'mikhailAvatar',
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Миша',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
        {
            id: 4,
            name: 'Дима Работа',
            online: false,
            isTyping: false,
            avatar: 'dmitriyAvatar',
            unreadMessagesCount: 0,
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Дима',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
        {
            id: 5,
            name: 'Вася Сантехник',
            online: false,
            isTyping: false,
            unreadMessagesCount: 0,
            avatar: 'vasiliyAvatar',
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Вася',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
        {
            id: 6,
            name: 'Надя Садик',
            online: false,
            isTyping: false,
            avatar: 'nadejdaAvatar',
            unreadMessagesCount: 0,
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Надя',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
        {
            id: 7,
            name: 'Марина Андреева',
            online: false,
            isTyping: false,
            unreadMessagesCount: 0,
            avatar: 'marinaAvatar',
            messages: [
                {
                    id: 1,
                    text: 'Привет, это мое первое сообщение, Я Марина',
                    time: '12:55',
                    isReaded: true,
                },
            ],
        },
    ];

    chatId: number = 1;

    frontendMessages: string[] = [
        'Привет, как дела?',
        'Что нового в мире фронтенда?',
        'Какие библиотеки сейчас популярны?',
        'Расскажи о своем последнем проекте.',
        'Как ты относишься к новым возможностям React?',
        'Есть ли у тебя любимая фронтенд-библиотека?',
        'Какие технологии ты используешь в работе?',
        'Как ты обычно решаешь проблемы с производительностью в веб-приложениях?',
        'Что тебе больше всего нравится в разработке интерфейсов?',
        'Как ты относишься к тому, что происходит в мире CSS?',
        'Какие фреймворки ты использовал в последних проектах?',
        'Есть ли какие-то новые технологии, которые ты хочешь изучить?',
        'Как ты обычно тестируешь свой фронтенд-код?',
        'Как долго ты уже занимаешься фронтенд-разработкой?',
        'Что тебе нравится в работе фронтенд-разработчиком?',
        'Какие твои любимые инструменты для отладки кода?',
        'Как ты думаешь, какие тренды будут актуальны в следующем году в мире фронтенда?',
        'Какие аспекты фронтенд-разработки тебе кажутся наиболее сложными?',
        'Как ты выбираешь подходящие инструменты для своих проектов?',
        'Есть ли у тебя любимые онлайн-ресурсы для изучения новых технологий?',
        'Как ты обычно решаешь вопросы совместной работы в команде?',
        'Какие советы ты мог бы дать начинающим фронтенд-разработчикам?',
        'Как ты оцениваешь важность проектирования пользовательского интерфейса?',
        'Есть ли у тебя определенный стиль кодирования, которого ты придерживаешься?',
        'Что тебе больше всего нравится в современных возможностях JavaScript?',
        'Как ты относишься к идеи компонентной архитектуры в фронтенд-разработке?',
        'Какие проблемы ты чаще всего встречаешь при работе над фронтенд-проектами?',
        'Как ты оцениваешь важность адаптивного дизайна в веб-разработке?',
        'Какие аспекты тебе нравятся в работе с React?',
        'Есть ли у тебя определенные практики по оптимизации производительности в фронтенд-проектах?',
    ];
    constructor() {
        makeAutoObservable(this);
    }
    setChatId(id: number) {
        this.chatId = id;
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
    changeMenuExpanded() {
        this.isMenuExpanded = !this.isMenuExpanded;
    }
    setUserTyping(idUser: number, typing: boolean) {
        this.users.forEach((user) => {
            if (user.id === idUser) {
                user.isTyping = typing;
            }
        });
    }

    setNewMessage(idUser: number, text: string) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

        this.users.forEach((user) => {
            if (user.id === idUser) {
                user.unreadMessagesCount =
                    this.chatId === idUser
                        ? user.unreadMessagesCount
                        : user.unreadMessagesCount + 1;

                user.messages.push({
                    id: Math.random(),
                    text,
                    time: formattedTime,
                    isReaded: this.chatId === idUser,
                });
            }
        });
    }

    markAllMessagesAsRead(idUser: number | undefined) {
        this.users.forEach((user) => {
            if (user.id === idUser) {
                user.unreadMessagesCount = 0;

                user.messages.forEach((message) => {
                    message.isReaded = true;
                });
            }
        });
    }

    getRandomMessage(): string {
        const randomIndex = Math.floor(
            Math.random() * this.frontendMessages.length,
        );
        return this.frontendMessages[randomIndex];
    }
    @computed
    get unreadMessagesCount(): number {
        return this.users.reduce(
            (count, user) => count + user.unreadMessagesCount,
            0,
        );
    }
}
