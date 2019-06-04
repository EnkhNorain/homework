const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const bot = [
    'До свидания!',
    'Не пиши сюда, дядя!',
    'Не шуми, мы чиллим'
];

const HH = new Date().getHours();
const mm = new Date().getMinutes();


chat.addEventListener('click', activeChat);
input.addEventListener("change", sendMessage);

function activeChat(event) {
    chat.classList.add('chat-widget_active');
}


function sendMessage(event) {

    messages.innerHTML += `
                          <div class="message message_client">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${event.target.value}
                            </div>
                          </div>
                        `;

    event.target.value = '';

    botSays(bot);
}

function botSays(answer) {

    const random = Math.floor(Math.random() * (answer.length))

    return messages.innerHTML += `
                          <div class="message">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${answer[random]}
                            </div>
                          </div>
                        `;

}