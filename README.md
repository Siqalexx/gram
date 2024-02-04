# Задание

## 1. React с TypeScript

С использованием React и TypeScript реализовать экраны, представленные в [дизайне](https://www.figma.com/file/Shvpe6xPNvHD0FBqDMnWp6/Chat_test_krtech?type=design&node-id=115%3A335&mode=dev). Результат должен корректно отображаться на разных экранах (от 800px) и в разных браузерах (в приоритете chrome, firefox).

## 2. Визуальное взаимодействие

Все элементы должны иметь визуальное отображение взаимодействия (наведение и клик для пунктов меню, кнопок). Эффекты, отсутствующие в дизайне, можно реализовывать на ваше усмотрение. Меню должно разворачиваться и сворачиваться по нажатию нижней кнопки.

## 3. Поиск пользователей

Реализовать поиск пользователей через строку поиска на панели контактов.

## 4. Видимость активности пользователей в чатах

"Пользователи" в списке случайным образом уходят в оффлайн, появляются онлайн, начинают писать сообщение. После этого увеличивается счетчик непрочитанных сообщений на элементе контакта и возле иконки списка чатов. При нажатии на контакт открывается чат с этим контактом и счетчик непрочитанных сообщений обнуляется. Счётчик возле списка сообщений уменьшается на количество "просмотренных" сообщений. Для стора использовать MobX.

## 5. GitHub

Выложить готовый вариант на [GitHub](https://github.com/siqalexx/gram), создать билд на [GitHub Pages](https://siqalexx.github.io/gram/).

## Требования к верстке

-   Используем SCSS.
-   Классы в SCSS именуем в соответствии с БЭМ-методологией, используя [@bem-react/classname](https://www.npmjs.com/package/@bem-react/classname).
-   Все блоки и элементы с большой буквы, модификаторы и их значения с маленькой (смотреть пример по ссылке).
-   Все элементы должны быть в дереве, возможны исключения при необходимости.
-   В верстке использовать flex или grid.

## Ограничения

При прохождении данного задания не нужно делать следующий функционал:

-   Изменение сообщений при переключении чата (везде можно использовать один и тот же список сообщений).
-   Возможность "отправлять" сообщения, чтобы они появлялись в списке сообщений.
