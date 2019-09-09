/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class game_main extends fairygui.GComponent {

	public m_msg:fairygui.GTextField;

	public static URL:string = "ui://gaqmoieg9u6y0";

	public static createInstance():game_main {
		return <game_main><any>(fairygui.UIPackage.createObject("mygui","game_main"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this.m_msg = <fairygui.GTextField><any>(this.getChild("msg"));
	}
}