function getPost() {
    const url =`https://reqres.in/api/users?per_page=12`;
    return fetch(url)
        .then(response => response.json())
}

getPost()
    .then(json => {
        console.log(json);
        let users = json.data || [];

        users.forEach(item => {
            console.log(item.last_name);
        });

        users.filter(item => {
            return item.last_name[0] === 'F';
        })
        .forEach(item => {
            console.log(item);
        });

        //в result храним полученный результат, смотрим, если есть ключ, значит элемент не последний, тогда добавляем запятую, если последний, то ничего не добавляем
        let text = users.reduce((result, item, $key) => {
            return result + ($key ? ',' : '') + ' ' + item.last_name + ' ' + item.first_name;
        }, 'Наша база содержит данные следующих пользователей:');
        console.log(text);

        // или вторым вариантом методом map  вывести те же данные фамилию и имя всех пользователей в массиве
        let newText = users.map(item => item.last_name + ' ' + item.first_name).join(', ');
        console.log(`Наша база содержит данные следующих пользователей: ${newText}`);

        let user = users[0];
        console.log(Object.keys(user));
    });


