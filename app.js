var app = angular.module("guessme",[]);
app.controller("gameController",['$scope',function($scope){
	 var word =["rat","cat","mat","sat"];
	 $scope.incorrectLettersChosen=[];
	 $scope.correctLettersChosen=[];
	 $scope.guesses =6;
	 $scope.displayWord= "";
	 $scope.input ={
	 	letter: ''
	 }

var selectRandomWord = function(){
	 var word =["rat","cat","mat","sat"];
	 var index = Math.round(Math.random() * word.length);
	 return word[index];
}

var newGame = function(){
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	$scope.guesses =6;
	$scope.displayWord= "";

	selectedWord = selectRandomWord();
	console.log(selectedWord);
	var tempDisplay = '';
	for (var i = 0; i <selectedWord.length; i++) {
	tempDisplay += '*';
	}
	$scope.displayWord = tempDisplay;

} //newgame

$scope.letterChosen = function(){
	for (var i = 0; i < $scope.correctLettersChosen.length; i++) {
		if($scope.correctLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			
		$scope.input.letter="";
		return;
		}
	}


	for (var i = 0; i < $scope.incorrectLettersChosen.length; i++) {
		if($scope.incorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
		$scope.input.letter="";
		return;
		}
	}

	var correct = false;
	for (var i = 0; i < selectedWord.length; i++) {
		if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			$scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1)
			correct=true;
console.log(correct)
		}
	}
	if (correct){
		$scope.correctLettersChosen.push($scope.input.letter.toLowerCase());	
		console.log($scope.correctLettersChosen);
	}else {
		$scope.guesses--;
		$scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
		console.log($scope.incorrectLettersChosen);
	}

$scope.input.letter="";

		if($scope.guesses==0){
			alert("you lost the game");
			newGame();
		}
		if($scope.displayWord.indexOf("*")==-1){
			alert("you won the game");
			newGame();
		}

}//letterchosen	

	newGame();


}])