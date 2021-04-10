const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8083 });

const axios = require("axios")

const ui = {
    components: [
        {
            name: "tasks",
            type: "table",
            props: {
                columns: [
                    { label: "Tarefa", name: "task" },
                    { label: "Tipo", name: "type" },
                    { label: "Origem", name: "origin" }
                ]
            },
            data: [
                { task: "Grid layout", type: "Na mão", origin: "Minha mente" },
                { task: "Table", type: "Na mão", origin: "Minha mente" },
                { task: "Form", type: "Na mão", origin: "Minha mente" },
            ]
        },
    ]
}

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        const { event, data } = JSON.parse(message)
        switch (event) {
            case "reload":
                this.setState({ ui: data.ui })
                break;
        }

    });

    ws.send(JSON.stringify({ event: "uiload", data: ui }));
});