import { ui } from "../ui/layaMaxUI";
export default class fooui extends ui.fooUI{
    static instance:fooui;
	constructor(){
        super();
        fooui.instance = this;
	}  
}