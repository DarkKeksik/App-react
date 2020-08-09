import * as Yup from "yup";

export default Yup.object().shape({
    username: Yup.string()
        .min(1, 'Слишком короткий логин')
        .max(50, 'Логин не более 50 символов')
        .required('Логин обязателен')
        .matches(
            /^[\w.@+-]+$/,
            `
                Логин должен содержать буквы латинского алфавита, цифры, быть почтой
                пример: Jonny1990 или Jonny1990@gmail.com 
            `
        ),
    password: Yup.string()
        .min(1, 'Слишком короткий пароль')
        .max(128, 'Слишком длинный пароль')
        .matches(
            /^(?=.*[A-Z])(?=.*\d).{8,}$/,
            "Используйте буквы верхнего регистра и цифры, например niceDayJonny1"
        )
        .required('Пароль обязателен'),
    first_name: Yup.string()
        .min(2, 'Слишком короткое имя')
        .max(50, 'У вас отличное имя, но мы не можем его обработать'),
    last_name: Yup.string()
        .min(2, 'Слишком короткое имя')
        .max(150, 'У вас отличная фамилия, но мы не можем ее обработать'),
    last_login: Yup.string(),
    is_active: Yup.bool(),
    is_superuser: Yup.bool()
});