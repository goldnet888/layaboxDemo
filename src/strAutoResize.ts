export default class strAutoResize extends Laya.Script {
    
    /** @prop {name:displayWidth, tips:"請輸入顯示width範圍", type:Number, default:"200"}*/
    public displayWidth: number;
    /** @prop {name:displayHeight, tips:"請輸入顯示height範圍", type:Number, default:"200"}*/
    public displayHeight: number;
    private ownerNode: any;
    
    constructor() { 
        super(); 
    }

    changeEvent(): void{

        if( this.ownerNode.width >= this.displayWidth ) {           
            this.ownerNode.scale(this.displayWidth / this.ownerNode.width, this.displayWidth / this.ownerNode.width);
            this.ownerNode.y = (this.displayHeight / 2) - (this.displayWidth / this.ownerNode.width) * (this.ownerNode.height / 2);
        } else {
            this.ownerNode.scale(1, 1);
            this.ownerNode.y = 0;
        }
        
    }
    onEnable(): void { 
        
        if (this.owner instanceof Laya.Text) this.ownerNode = this.owner as Laya.Text;
        if (this.owner instanceof Laya.Label) this.ownerNode = this.owner as Laya.Label;
        this.ownerNode.width = 0;
        
        this.ownerNode.on(laya.events.Event.CHANGE, this, this.changeEvent);

        this.changeEvent();
        
    }
    onDisable(): void {
        this.ownerNode.off(laya.events.Event.CHANGE, this, this.changeEvent);
    }
    onUpdate(): void {
    }
}