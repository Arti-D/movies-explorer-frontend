import React from "react";

export function validateName(name) {
    if (name.length < 3) {
        return "длина имени должна быть более 2 знаков"
    } else if (name.length > 30) {
        return "длина имени не должна превышать 30 знаков"
    } else if (name.length === 0) {
        return "это поле обязательно"
    } else {
        return ""
    }
}

export function validateEmail(email) {
    const pattern = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i
    if (email.length === 0) {
        return "Это поле обязательно"
    } else if (email.length < 2) {
        return "Длина имени должна быть более 2 знаков"
    } else if (!pattern.test(email)) {
        return "Неправильный формат данных"
    } else {
        return ""
    }
}

export function validatePassword(password) {
    if (password.length < 8) {
        return "Пароль должен содержать более 8 знаков"
    } else if (password.length === 0) {
        return "Это поле обязательно"
    } else {
        return ""
    }
}