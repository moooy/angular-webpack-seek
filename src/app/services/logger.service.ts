
import {Injectable} from "angular2/core";
@Injectable()
export class LoggerService{

    private DEBUG:string="[DEBUG]";
    private INFO:string="[INFO]";
    private WARN:string="[WARN]";
    private ERROR:string="[ERROR]";



    private generateMessage(message:string,levelInfo:string):string{
        let messages=[];
        messages.push(levelInfo);
        messages.push(message);
        return messages.join(" ");
    }
    debug(message?: string, ...optionalParams: any[]){
        console.debug(this.generateMessage(message,this.DEBUG),optionalParams);
    }

    info(message?: string, ...optionalParams: any[]){
        console.info(this.generateMessage(message,this.INFO),optionalParams);
    }
    warn(message?: string, ...optionalParams: any[]){
        console.warn(this.generateMessage(message,this.WARN),optionalParams);
    }
    error(message?: string, ...optionalParams: any[]){
        console.error(this.generateMessage(message,this.ERROR),optionalParams);
    }


}