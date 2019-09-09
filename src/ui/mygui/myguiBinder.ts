/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import game_main from "./game_main";
import game_room from "./game_room";

export default class myguiBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(game_main.URL, game_main);
		fairygui.UIObjectFactory.setPackageItemExtension(game_room.URL, game_room);
	}
}