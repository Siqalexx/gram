import { makeAutoObservable } from "mobx";

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
  users: Iuser[] = [
    {
      id: 1,
      name: "Иван Иванов",
      online: true,
      isTyping: false,
      avatar:
        "https://w-dog.ru/wallpapers/14/8/529116203217590/kapyushon-kofta-odezhda-siluet-chernyj-nekto.jpg",
      unreadMessagesCount: 0,
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Иван",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
    {
      id: 2,
      name: "Федор Прилипало",
      online: false,
      isTyping: false,
      avatar: "https://v1.popcornnews.ru/k2/news/1200/upload/wcTTcx.jpg",
      unreadMessagesCount: 0,
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Федор",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
    {
      id: 3,
      name: "Михаил Светлый",
      online: false,
      isTyping: false,
      unreadMessagesCount: 0,
      avatar:
        "https://cdnb.artstation.com/p/assets/images/images/006/332/253/large/ted-wu-sketch371.jpg?1497798883",
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Миша",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
    {
      id: 4,
      name: "Дима Работа",
      online: false,
      isTyping: false,
      avatar:
        "https://econet.ru/uploads/pictures/81114/original_1280x1024_924.jpg",
      unreadMessagesCount: 0,
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Дима",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
    {
      id: 5,
      name: "Вася Сантехник",
      online: false,
      isTyping: false,
      unreadMessagesCount: 0,
      avatar:
        "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65a6c919debca07a6b99d9e1_65a6c92bdebca07a6b99de02/scale_1200",
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Вася",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
    {
      id: 6,
      name: "Надя Садик",
      online: false,
      isTyping: false,
      avatar:
        "http://absolumentjolie.com/images/public/cannes2008/changelingphotocall-307.jpg",
      unreadMessagesCount: 0,
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Надя",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
    {
      id: 7,
      name: "Женя Мазда",
      online: false,
      isTyping: false,
      unreadMessagesCount: 0,
      avatar:
        "https://kartinkof.club/uploads/posts/2023-05/1683456126_kartinkof-club-p-void-spirit-kartinki-16.jpg",
      messages: [
        {
          id: 1,
          text: "Привет, это мое первое сообщение, Я Женя",
          time: "12:55",
          isReaded: true,
        },
      ],
    },
  ];

  chatId: number = 1;

  frontendMessages: string[] = [
    "Привет, как дела?",
    "Что нового в мире фронтенда?",
    "Какие библиотеки сейчас популярны?",
    "Расскажи о своем последнем проекте.",
    "Как ты относишься к новым возможностям React?",
    "Есть ли у тебя любимая фронтенд-библиотека?",
    "Какие технологии ты используешь в работе?",
    "Как ты обычно решаешь проблемы с производительностью в веб-приложениях?",
    "Что тебе больше всего нравится в разработке интерфейсов?",
    "Как ты относишься к тому, что происходит в мире CSS?",
    "Какие фреймворки ты использовал в последних проектах?",
    "Есть ли какие-то новые технологии, которые ты хочешь изучить?",
    "Как ты обычно тестируешь свой фронтенд-код?",
    "Как долго ты уже занимаешься фронтенд-разработкой?",
    "Что тебе нравится в работе фронтенд-разработчиком?",
    "Какие твои любимые инструменты для отладки кода?",
    "Как ты думаешь, какие тренды будут актуальны в следующем году в мире фронтенда?",
    "Какие аспекты фронтенд-разработки тебе кажутся наиболее сложными?",
    "Как ты выбираешь подходящие инструменты для своих проектов?",
    "Есть ли у тебя любимые онлайн-ресурсы для изучения новых технологий?",
    "Как ты обычно решаешь вопросы совместной работы в команде?",
    "Какие советы ты мог бы дать начинающим фронтенд-разработчикам?",
    "Как ты оцениваешь важность проектирования пользовательского интерфейса?",
    "Есть ли у тебя определенный стиль кодирования, которого ты придерживаешься?",
    "Что тебе больше всего нравится в современных возможностях JavaScript?",
    "Как ты относишься к идеи компонентной архитектуры в фронтенд-разработке?",
    "Какие проблемы ты чаще всего встречаешь при работе над фронтенд-проектами?",
    "Как ты оцениваешь важность адаптивного дизайна в веб-разработке?",
    "Какие аспекты тебе нравятся в работе с React?",
    "Есть ли у тебя определенные практики по оптимизации производительности в фронтенд-проектах?",
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
    const userIndex = this.users.findIndex((user) => user.id === idUser);

    if (userIndex !== -1) {
      this.users = [
        ...this.users.slice(0, userIndex),
        { ...this.users[userIndex], online: status },
        ...this.users.slice(userIndex + 1),
      ];
    }
  }
  setUserTyping(idUser: number, typing: boolean) {
    const userIndex = this.users.findIndex((user) => user.id === idUser);

    if (userIndex !== -1) {
      this.users = [
        ...this.users.slice(0, userIndex),
        { ...this.users[userIndex], isTyping: typing },
        ...this.users.slice(userIndex + 1),
      ];
    }
  }
  setNewMessage(idUser: number, text: string) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    this.users = this.users.map((user) => {
      if (user.id === idUser) {
        return {
          ...user,
          unreadMessagesCount:
            this.chatId === idUser
              ? user.unreadMessagesCount
              : user.unreadMessagesCount + 1,
          messages: [
            ...user.messages,
            {
              id: Math.random(),
              text,
              time: formattedTime,
              isReaded: this.chatId === idUser ? true : false,
            },
          ],
        };
      }
      return user;
    });
  }
  markAllMessagesAsRead(idUser: number | undefined) {
    this.users = this.users.map((user) => {
      if (user.id === idUser) {
        const updatedMessages = user.messages.map((message) => ({
          ...message,
          isReaded: true,
        }));

        return {
          ...user,
          unreadMessagesCount: 0,
          messages: updatedMessages,
        };
      }
      return user;
    });
  }
  getRandomMessage(): string {
    const randomIndex = Math.floor(
      Math.random() * this.frontendMessages.length
    );
    return this.frontendMessages[randomIndex];
  }
  getUnreadMessagesCount(): number {
    return this.users.reduce(
      (count, user) => count + user.unreadMessagesCount,
      0
    );
  }
}
