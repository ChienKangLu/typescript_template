"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const bodyParser = __importStar(require("body-parser"));
const path = __importStar(require("path"));
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express_1.default();
        this.set();
        this.middleware();
        this.routes();
    }
    set() {
        this.express.use('/public', express_1.default.static(path.resolve(__dirname + '/../public'))); //express3-3/public
        this.express.use('/js', express_1.default.static(path.resolve(__dirname + '/client'))); //express3-3/dist/client
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.set('view engine', 'jade');
        //set session
        this.express.use(express_session_1.default({
            secret: "ts template",
            resave: false,
            saveUninitialized: true,
        }));
    }
    // Configure Express middleware.
    middleware() {
    }
    // Configure API endpoints.
    routes() {
        // this.express.use('/', index);
    }
}
exports.default = new App().express; //用 export 可以指派 function, objects 或 變數 給外部檔案引用。
