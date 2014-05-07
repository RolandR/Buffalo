var Sim = new function(){

	var canvas = document.getElementById("world");
	var bgcanvas = document.getElementById("worldBackground");
	var context = canvas.getContext("2d");
	var bgcontext = bgcanvas.getContext("2d");
	
	var tilesCount = 70; // World tiles per side, total amount is tiles^2
	
	var logger = new Logger();
	var graphics = new Graphics();
	var mechanics = new Mechanics();
	
	function Graphics(){
		function fitCanvas(){
			var shortestSide = (window.innerWidth && window.innerHeight);
			canvas.width = shortestSide;
			canvas.height = shortestSide;
			bgcanvas.width = shortestSide;
			bgcanvas.height = shortestSide;
			
			drawBackground(shortestSide);
		}
		
		function drawBackground(size){
			var tileSize = (size - 1) / tilesCount;
			
			var i = tilesCount + 1;
			
			bgcontext.beginPath();
			bgcontext.strokeStyle = "rgb(200, 200, 200)";
			while(i--){
				bgcontext.moveTo(0, ~~(i * tileSize) + 0.5);
				bgcontext.lineTo(size, ~~(i * tileSize) + 0.5);
				
				bgcontext.moveTo(~~(i * tileSize) + 0.5, 0);
				bgcontext.lineTo(~~(i * tileSize) + 0.5, size);
			}
			
			bgcontext.stroke();
		}
		
		fitCanvas();
		window.onresize = fitCanvas;
	}
	
	function Mechanics(){
		
		function initialRandom(){
			return (Math.random() * 4 - 2);
		}
		
		function Buffalo(){
			var weights = [];
			function NeuralNetwork(inputCount, layerSizes){
				var layers = [];
				var previousOutputs = inputCount;
				for(var i = 0; i < layerSizes.length; i++){
					
				}
				function NeuronLayer(inputCount, neuronCount){
					function Neuron(inputCount){
						
					}
				}
				
				function getWeightsCount(){
					
				}
			}
			
		}
		var world = [];
		
		for(var y = 0; y < tilesCount; y++){
			world[y] = [];
			for(var x = 0; x < tilesCount; x++){
				world[y][x] = [];
			}
		}
		
		console.log(world);
	}
	
	function Logger(){
		var container = document.getElementById("log");
		var logLevel = 3;
		
		function log(text, importance){
			if(importance < logLevel){
				container.innerHTML += "<p>"+text+"</p>";
				container.scrollTop = container.scrollHeight;
			}
		}
		
		function setLogLevel(newLevel){
			logLevel = newLevel;
		}
		
		return {
			 log: log
			,setLogLevel: setLogLevel
		};
	}
}
