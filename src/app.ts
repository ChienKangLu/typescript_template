import express from "express"
import session from "express-session";
import * as bodyParser from "body-parser";
import * as path from 'path';
import testRESTful from './route/testRESTful';

// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    public express: express.Application;
    
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.set();
        this.middleware();
        this.routes();
    }
  
    private set():void{
      // this.express.use('/public',express.static(path.resolve(__dirname+'/../public')));//typescript_template/public
      // this.express.use('/js',express.static(path.resolve(__dirname+'/client')));//typescript_template/dist/client
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({extended:false}));
      this.express.set('view engine','jade');
      
      //set session
      this.express.use(session({
        secret: "ts template",
        resave: false,
        saveUninitialized: true,
        // cookie: { maxAge: 3600000,secure: false, httpOnly: true }
      }))
    
    }
  
    // Configure Express middleware.
    private middleware(): void {
    }
  
    // Configure API endpoints.
    private routes(): void {
      // this.express.use('/', index);
      this.express.use('/testRESTful', testRESTful);
    }
  }
  export default new App().express;//用 export 可以指派 function, objects 或 變數 給外部檔案引用。