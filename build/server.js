'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todo_1 = __importDefault(require("./routes/todo"));
var cors = require('cors');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.static(path_1.default.join(__dirname, 'frontend', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/frontend/build/index.html'));
});
app.use(todo_1.default);
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
