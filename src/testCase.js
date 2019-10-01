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
		let obj = JSON.parse(this.json);
		if (obj.executions) {
			if (Array.isArray(obj.executions)) {
				return obj.executions;
			}
			return false;
		}
		return false;
	}
}

module.exports = testCase;
