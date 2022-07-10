
// const arr =["green", "blue", "yellow", "pink", "red"]
// let i = document.getElementById("i")
// let bodyColor = document.body
// function changeColor(){
// 	//i.textContent = "hello"
// 	let randomNumber = randomColo()
// 	bodyColor.style.backgroundColor = arr[randomNumber]

// }

// function randomColo() {
// 	let randomColor = Math.floor(Math.random() * 4) 
// 	console.log(randomColor)
// 	return randomColor
// }

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// let hexColor= document.getElementById("hex-color")
// let bodyColor = document.body
// function changeColor() {
// 	//let randomNumber = randomColo()
// 	let r = "#"
// 	for( let i=0; i<6; i++){
// 		r += arr[randomColo()] 
// 	}
// 	console.log(r)
//  	bodyColor.style.backgroundColor = r
//  	hexColor.textContent= `Background Colour: ${r}` 
	
// }
// function randomColo() {
// 	let randomColor = Math.floor(Math.random() * arr.length) 
// 	console.log(randomColor)
// 	return randomColor
// }

/* code cleanup practice */

	const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
	let btnColor = document.getElementById("btn-color")
		btnColor.addEventListener("click", function(){
				let hash = "#"
				for ( let i=0; i<6; i++ ){
					hash += color[invokeColor()]

					}
				document.body.style.backgroundColor = hash
				const col = document.getElementById("hex-color")
				col.textContent = `Background color : ${hash}`
				document.getElementById("btn-color").style.color = hash 
	})


	function invokeColor() {
		return Math.floor(Math.random() * color.length )

	}