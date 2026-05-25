function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const messageText = input.value;

    if (messageText === "") {
        return;
    }

    // Mensaje usuario
    const userMessage = document.createElement("div");

    userMessage.classList.add("message");
    userMessage.classList.add("user");

    userMessage.textContent = messageText;

    chatBox.appendChild(userMessage);

    // Respuesta IA
    const botMessage = document.createElement("div");

    botMessage.classList.add("message");
    botMessage.classList.add("bot");

    botMessage.textContent = "🤖 Estoy aprendiendo a responder.";

    setTimeout(() => {
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}