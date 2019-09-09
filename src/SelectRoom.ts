import room from './ui/mygui/game_room';

export default class SelectRoom {
    private roomView: room;

    constructor() {
        console.log("selectRoom");
        this.roomView = room.createInstance()
        console.log("roomView", this.roomView)

        // this.roomView.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        // this.roomView.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);

        fairygui.GRoot.inst.addChild(this.roomView)
    }

    onEnable(): void{
        console.log('selectRoom onEnable')
    }


} 

// export class Test extends fairygui.GLoader {
//     constructor() {
//         super();
//         console.log('myTest')
//     }
// }