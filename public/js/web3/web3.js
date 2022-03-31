const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
console.log("web3", web3);

var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_class",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_describe",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_price",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_image",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_starttime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_limittime",
				"type": "string"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "adduser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_useraddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "enum Supermarket.productStatus",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_getuser",
				"type": "address"
			}
		],
		"name": "getuser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_useraddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stores",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "class",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "describe",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "starttime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "limittime",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum Supermarket.productStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "upduser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usermap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "useraddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// var timestamp = Date.parse(new Date())
let User_Accous = [];
// console.log(timestamp);
web3.eth.getAccounts().then(function (accouts) {
	User_Accous = accouts;
	console.log(User_Accous);
});

var myContract = new web3.eth.Contract(abi, '0x846cc4e47da4B1863F452e86c02E9D633b27BD21');
//  添加用户（注册）
// var a = 12345
// console.log(a.length)
$("#loginBtn").click(function () {
	document.getElementById("address").value = User_Accous[0]
	console.log("注册凭证", document.getElementById("address").value)
	address = document.getElementById("iden").value
	username = document.getElementById("username").value
	password = document.getElementById("password").value
	console.log(typeof (password), password.length, User_Accous[0], address)
	if (password.length < 6 || address != User_Accous[0]) {
		return
	} else {
		myContract.methods.adduser(username, password).send({ from: User_Accous[0] }).then(
			function (receipte) {
				console.log("receipt", receipte);
			}
		)
	}
});
// 修改用户
$("#AlterUser").click(function () {
	document.getElementById("address").value = User_Accous[0]
	address = document.getElementById("iden").value
	username = document.getElementById("username").value
	password = document.getElementById("password").value
	console.log(address,User_Accous[0]);
	if (password.length < 6 || address != User_Accous[0]) {
		return
	} else {
		myContract.methods.upduser(address, username, password).send({ from: User_Accous[0] }).then(
			function (receipte) {
				console.log("receipt", receipte);
			}
		)
	}
})
// 添加商品
// block.timestamp
$(".btn").click(function () {
	// document.getElementById("address").value = User_Accous[0]
	category = document.getElementById("category").value
	console.log(category);
	productname = document.getElementById("productname").value
	information = document.getElementById("information").value
	price = document.getElementById("price").value
	start_time = document.getElementById("start_time").value
	end_time = document.getElementById("end_time").value
	inputfile = document.getElementById("inputfile").value
	console.log("category",category,productname,"end_time",typeof(end_time),end_time,"inputfile",inputfile);
	myContract.methods.addProduct(category, productname, information,price,inputfile,start_time,end_time).send({ from: User_Accous[0] }).then(
		function (receipte) {
			console.log("receipt", receipte);
		})
})
//商品信息
$(".stores").click(function () {
	myContract.methods.stores(User_Accous[0], 1).call().then(
		function (receipte) {
			console.log("receipt", receipte);
		}
	)
});
//交易记录
$(".productIndex").click(function () {
	myContract.methods.productIndex().call().then(
		function (receipte) {
			console.log("receipt", receipte);
		}
	)
});
