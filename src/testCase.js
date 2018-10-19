"use strict";
"use moz";
class testCase {
	constructor(json) {
		this.json = json;
	}

	getJson(){
		return this.json;
	}

	getRequirement(){
		var obj = JSON.parse(this.json);
		if (undefined !== obj.requirement) {
			return obj.requirement;
		}
		return false;
	}

	// TODO but not like this : https://www.monkeyuser.com/2017/todo/
	getExecutions(){
		var obj = JSON.parse(this.json);

		if(obj.executions===undefined){
			return false;
		}else if(!(obj.executions instanceof Array)){
			return false;
		}else{
			return obj.executions;
		}
	}
}
module.exports = testCase;
