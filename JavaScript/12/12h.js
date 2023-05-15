let messages = 2;

setInterval(() => document.title = `(${messages}) New Messages` , 1000);

document.querySelector('.js-add-button').onclick = () => messages++;

document.querySelector('.js-remove-button').onclick = () => messages--;