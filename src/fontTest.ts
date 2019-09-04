
import Text = laya.display.Text;
import mainTestUI from "./runtime/runtime";

    
export default class test extends Laya.Script {
    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    public intType: number = 1000;
    /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
    public numType: number = 1000;
    /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
    public strType: string = "hello laya";
    /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
    public boolType: boolean = true;
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
        console.log('kk test font')
        Laya.loader.load("res/HanyiSentyVimalkirti.ttf", Laya.Handler.create(this, this.mycode));
        // var text:Text = new Text();
        // text.fontSize=64;
        // text.color="#FF00FF";
        // text.text="test foo ggjjjyyyppp 現在是在測試中";
        // text.font="HanyiSentyVimalkirti"
        // text.pos(600,400);
        // Laya.stage.addChild(text);

    }

    onDisable(): void {
    }
    onUpdate(): void {
        
    }
    mycode(): void {
        console.log('kk loaded')
        let list: number[] = [1, 2, 3];
        let list2: Array<number> = [];
        // let unused: void = 'test123'
        let someValue: any = 123549893;
        let strLength: number = (<string>someValue).length;
        let strLength2: number = (someValue as string).length;
        
        

        mainTestUI.instance.testLabel.font = "HanyiSentyVimalkirti";
        // mainTestUI.instance.testLabel.color = '#ff0000'
        mainTestUI.instance.testLabel.text = "Layabox是HTML5引擎技术jjppyy提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +                                            
                                            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
        // mainTestUI.instance.testLabel.leading = 20;
        // mainTestUI.instance.testLabel.overflow = Text.SCROLL;

        // Text.defaultFont = "HanyiSentyVimalkirti"
        // text.fontSize=64;
        // text.color="#FF00FF";
        // text.text="test foo ggjjjyyyppp 現在是在測試中";
        // text.font="HanyiSentyVimalkirti"
        // text.pos(600,400);
        // Laya.stage.addChild(text);
    }
    fail(): never {
        while (true) {
        }
    }
    error(message: string): never {
        throw new Error(message);
    }


}
