const hx = require("../hbxBridge.js")

function _init(connection) {
}

function getSpaceInfo(workspaceFolder) {
	console.log("workspaceFolder workspaceFolder:",workspaceFolder);
	// return hx.request("unicloud.getSpaceInfo", {
	// 	workspaceFolder:workspaceFolder
	// });
	let result = new Promise((resolve, reject) => {
		hx.request("unicloud.getSpaceInfo", {
			workspaceFolder:workspaceFolder
		}).then((data) => {
			console.log("getSpaceInfo data:",data);
			resolve(data);
		}, reject);
	});
	return result;
}

function getRelationWorkspaceFolder(workspaceFolder,provider) {
	let result = new Promise((resolve, reject) => {
		hx.request("unicloud.getRelationOrCoverRelationWorkspaceFolder", {
			workspaceFolder:workspaceFolder,
			provider:provider,
			isRelation:true
		}).then((data) => {
			resolve(data);
		}, reject);
	});
	return result;
}

function getCoverRelationWorkspaceFolder(workspaceFolder,provider) {
	let result = new Promise((resolve, reject) => {
		hx.request("unicloud.getRelationOrCoverRelationWorkspaceFolder", {
			workspaceFolder:workspaceFolder,
			provider:provider,
			isRelation:false
		}).then((data) => {
			resolve(data);
		}, reject);
	});
	return result;
}

module.exports = {
	init: _init,
	getSpaceInfo:getSpaceInfo,
	getRelationWorkspaceFolder:getRelationWorkspaceFolder,
	getCoverRelationWorkspaceFolder:getCoverRelationWorkspaceFolder
}