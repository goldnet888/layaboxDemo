/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class game_room extends fairygui.GComponent {

	public m_intro:fairygui.GTextField;

	public static URL:string = "ui://gaqmoiegpkfv1";

	public static createInstance():game_room {
		return <game_room><any>(fairygui.UIPackage.createObject("mygui","game_room"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this.m_intro = <fairygui.GTextField><any>(this.getChild("intro"));
	}
}