const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });


const data = {
    ui: [
        {
            name: "tasks",
            props: {
                type: "table",
                columns: [
                    { label: "Jenkins", name: "title" },
                    { label: "Descrição", name: "body" }
                ],
                data: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "qui est esse",
                        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                    },
                ]
            }
        },
    ]
}

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        ws.send(`JK ${message}`);
    });

    ws.send(JSON.stringify(data));
});