var score=0;
var board=new Array();

function newgame(){
	boardinit();
}

document.onkeydown=function (e){
	var currkey=0,e=e||event;
	var anymove=0;
	currkey=e.keyCode||e.which||e.charCode;
	switch(currkey){
		case 37:
			anymove=moveleft(anymove);
			break;
		case 38:
			anymove=moveup(anymove);
			break;
		case 39:
			anymove=moveright(anymove);
			break;
		case 40:
			anymove=movedown(anymove);
			break;
	}
	if(anymove==0)
		return 0;
	getrandcell();
	if(anyspace()==0)
		if(!anyequal())
			gameover();
	drawboard();
}

function anyspace(){
	var count=0;
	for(var i=1;i<=4;i++)
		for(var j=1;j<=4;j++)
			if(board[i][j]==0)
				count++;
	return count;
}

function getrandcell(){
	var rem=anyspace();
	if(rem==0)
		return false;
	var rand=Math.floor(Math.random()*rem)+1;
	var randnum = Math.random()<0.5 ?2 : 4;

	for(var i=1;i<=4;i++)
		for(var j=1;j<=4;j++)
			if(board[i][j]==0)
			{
				rand--;
				if(rand==0)
				{
					board[i][j] = randnum;
					return true;
				}
			}

}

function anyequal(){
	for(var i=1;i<=4;i++)
		for(var j=1;j<=4;j++){
		//	if(board[i][j]!=0){
				if(board[i][j]==board[i-1][j])
					return true;
				if(board[i][j]==board[i+1][j])
					return true;
				if(board[i][j]==board[i][j-1])
					return true;
				if(board[i][j]==board[i][j+1])
					return true;
		//	}
		}
	return false;
}

function gameover(){
	alert("gameover");
}
