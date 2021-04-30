var Search = require('./Search.js');
var Tools = require('./Tools.js');

function sol(facelets, maxDepth, timeOut, useSeparator){
    let message = {solve: {facelets: facelets, maxDepth: maxDepth, timeOut: timeOut, useSeparator: useSeparator}};
    var solution = Search.solution(message.solve.facelets, message.solve.maxDepth, message.solve.timeOut, message.solve.useSeparator);
    console.log(solution)
}

sol("UUUUUURRRDRRDRRDRRFFFFFFFFFLLLDDDDDDLLULLULLUBBBBBBBBB", 30, 60, false);





// return;
// let twophase = require('./index');

// console.log(twophase);



// return;
// twophase.initialize(function () {
// 	console.log("Ready");

// 	// This just tests the solve, solution is F
// 	twophase.solve("UUUUUURRRDRRDRRDRRFFFFFFFFFLLLDDDDDDLLULLULLUBBBBBBBBB", 30, 60, false, function (err, solution) {
// 		if (err) console.error(err);

// 		twophase.randomCube(function (err, randomCube) {
// 			if (err) console.error(err);
// 			var cube = randomCube;
// 			//cube = "DUDLUDLFDRBRFRBLUUBUBLFRLDFFFUDDBRDRBFUBLUULDFRLRBLBRF";
// 			console.log(cube);

// 			twophase.solve(cube, 30, 60, false, function (err, solution) {
// 				if (err) console.error(err);
// 				console.log("Solution:", solution);
// 				twophase.close();
// 			});
// 		});
		
// 	});
// });