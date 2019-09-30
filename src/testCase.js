"use strict";
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

		var file= JSON.parse(this.json);
		if (!file.hasOwnProperty("executions")){
			return false;
		}
		else if(!Array.isArray(file.executions)){
			return false;
		}
		else{
			return file.executions;
		}
	}
}

module.exports = testCase;

