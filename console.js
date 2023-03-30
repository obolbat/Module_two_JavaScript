
/**
 * Обработчик события отправки формы
 */
document.querySelectorAll('.js-form').forEach(form => {
    form.addEventListener('submit', sendForm);
});

/**
 * Обработчик получения фокуса у поля. Скрываем ошибку
 */
document.querySelectorAll('.autorization_entry-field input').forEach(input => {
    input.addEventListener('focus', inputFocus);
});

/**
 * Обработчик клика по чекбоксу. Скрываем ошибку
 */
document.querySelectorAll('.entry-checkbox input').forEach(input => {
    input.addEventListener('change', inputFocus);
});

/**
 * Валидация и отправка формы
 * @param event
 */
function sendForm(event) {
    const form = event.target;
    const arInputs = form.querySelectorAll('.entry-field_required input');
    let isValid = true;
    let formData = {};

    /** Предотвращаем выполнение стандартной логики отправки формы */
    event.preventDefault();

    /** В цикле обрабатываем все поля формы */
    for (let i = 0; i < arInputs.length; i++) {
        let input = arInputs[i];

        if (!inputValidation(input)) {
            isValid = false;
        }

        formData[input.name] = input.value;
    }

    /** Форма валидна, можно отправлять данные */
    if (isValid) {
        console.log(formData);
    }
}

/**
 * Валидация поля
 * @param input
 * @returns {boolean}
 */
function inputValidation(input) {
    const value = input.value;
    const parentNode = input.parentNode;
    let errMessage = '';

    if (!value) {
        errMessage = 'Поле обязательно для заполнения';
    }
    else if (input.type === 'checkbox' && !input.checked) {
        errMessage = 'Поле обязательно для заполнения';
    }
    else if (input.type === 'password' && value.length < 8) {
        errMessage = 'Пароль должен содержать как минимум 8 символов';
    }
    else if (input.type === 'email' && !validateEmail(value)) {
        errMessage = 'Email невалидный';
    }

    if (errMessage) {
        parentNode.classList.add('entry-field_error');
        parentNode.querySelector('.signature').innerText = errMessage;
    }

    return !errMessage;
}

/**
 * Обработка события фокуса элемента. Убираем класс ошибки
 * @param event
 */
function inputFocus(event) {
    event.target.parentNode.classList.remove('entry-field_error');
}

/**
 * Проверка корректности email
 * @param email
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}