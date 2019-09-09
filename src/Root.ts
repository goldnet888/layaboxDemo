import {ui} from './ui/layaMaxUI';
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import myguiBinder from "./ui/mygui/myguiBinder"
import Room from './SelectRoom';


export default class Lobby extends ui.ogDemo.RootUI {
    private room : Room;
    constructor() {
        super();
        this.room = null;
    }
    
    onEnable(): void {
        console.log('onEnable')
        Laya.loader.load([
            {url: "res/mygui/mygui_atlas0.png", type: Loader.IMAGE},
            {url: "res/mygui/mygui.fui", type: Loader.BUFFER}
        ], Handler.create(this, this.onLoaded))
    }

    onLoaded(): void {
        console.log('onloaded')
        myguiBinder.bindAll()
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject)

        fairygui.UIPackage.addPackage("res/mygui/mygui")
        fairygui.UIConfig.defaultFont = "Microsoft YaHei"

        /**建立場景 */
        this.room = new Room()
        // fairygui.GLoader aLoader = new fairygui.GLoader()
        // console.log(aLoader)
    }
}