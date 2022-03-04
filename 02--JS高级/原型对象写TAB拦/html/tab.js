class Tab {
	constructor(id) {
	    // 获取元素
		this.main = document.querySelector(id);
		// li父元素
		this.ul = this.main.querySelector(".fisrstnav ul");
	    // section父亲
		this.fsection = this.main.querySelector(".tabscon");
		
		// 
		this.init();
	}
	
	// 初始化
	init() {
		console.log(this.main)
	}
}

new Tab("#tab")