const ajaxRequest = (data, method, action) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`${method}`, `${action}`);
    xhr.onload = () => { console.log(xhr.responseText); }
    xhr.onerror = () => { console.log(new Error(xhr.responseText)); }
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
}

const serializeForm = (form) => {
    const jsonObject = {};
    const formData = new FormData(form);
    formData.forEach((value, index) => { jsonObject[index] = value });
    return JSON.stringify(jsonObject);
}

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            const serializedForm = serializeForm(form);
            event.preventDefault();
            ajaxRequest(serializedForm, form.getAttribute('method'), form.getAttribute('action'));
        });
    });
});