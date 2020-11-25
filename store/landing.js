export default {
    state: {
        users: [
            { id: 1, title: 'Барменов' },
            { id: 2, title: 'Официантов' },
            { id: 3, title: 'Музыкантов' },
            { id: 4, title: 'Барберов' },
            { id: 5, title: 'Курьеров' },
            { id: 6, title: 'Блогеров' },
        ],
        materials: [
            {
                id: 1,
                title: 'Визитки',
                desc: 'Воспользуйтесь нашим конструктором для создания своей униврсальной визитки',
                img: 'businessCard',
            },
            {
                id: 2,
                title: 'Наклейки',
                desc: 'Закажите наклейки для разных поверхностей для ваших заведений',
                img: 'stickers',
                reverse: true,
            },
            {
                id: 3,
                title: 'Тейбл-тенты',
                desc: 'Разместите QR-код на тейбл-тенте и поставьте его на стол',
                img: 'tableTent',
            },
            {
                id: 4,
                title: 'NFC',
                desc: 'Все материалы могут быть оснащены технологией NFC. Клиент просто прикладывает смартфон, а вы получаете чаевые',
                img: 'nfc',
                reverse: true,
            },
            {
                id: 5,
                title: 'Чеки и пречеки',
                desc: 'Бесплатно настраиваем интеграцию QR-кода в пречек. Работаем с Rkeeper, iiko, Poster, TillyPad и другими программами',
                img: 'check',
            },
        ],
    },
    getters: {
        getUsers: state => state.users,
        getMaterials: state => state.materials,
    },
}
