const regForm = document.getElementById('reg_form');
const authForm = document.getElementById('auth_form');

/**
 * Обработчик события отправки формы регистрации и записи в Local Storage
 */
if (regForm) {
    regForm.addEventListener('submit', event => {
        /** Предотвращаем выполнение стандартной логики отправки формы */
        event.preventDefault();

        if (validateForm(event.target)) {
            const inputUserName = document.getElementById('username');
            const inputPassword = document.getElementById('password');
            localStorage.setItem('username', inputUserName.value);
            localStorage.setItem('password', inputPassword.value);
        }
    });

}

/**
 * Обработчик события отправки формы авторизации, данные Local Storage сравниваем с введенными
 */
if (authForm) {
    document.getElementById('auth_form').addEventListener('submit', event => {
        const form = event.target;

        /** Предотвращаем выполнение стандартной логики отправки формы */
        event.preventDefault();

        if (validateForm(form)) {
            const inputUserName = document.getElementById('username');
            const inputPassword = document.getElementById('password');

            if (
                localStorage.getItem('username') === inputUserName.value &&
                localStorage.getItem('password') === inputPassword.value
            ) {
                location.replace("./application.html");
            }
            else {
                const errBlock = form.querySelector('.error_text');
                errBlock.innerText = 'Логин/Пароль не верные';
                errBlock.style.display = 'block';
            }
        }
    });
}

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
 * Валидация формы
 * @param event
 */
function validateForm(form) {
    const arInputs = form.querySelectorAll('.entry-field_required input');
    let isValid = true;
    let formData = {};

    /** В цикле обрабатываем все поля формы */
    for (let i = 0; i < arInputs.length; i++) {
        let input = arInputs[i];

        if (!inputValidation(input)) {
            isValid = false;
        }

        formData[input.name] = input.value;
    }

    return isValid;
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