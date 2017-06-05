
function moveleft(anymove){
	for(var i=1;i<=4;i++)
		for(var j=2;j<=4;j++){
			if(board[i][j]!=0){
				for(var k=j-1;k>=1&&board[i][k]==0;k--);
				if(board[i][k]==board[i][j]){
					board[i][k]*=2;
					board[i][j]=0;
					score++;
					anymove++;
				}
				else if(k!=j-1){
					board[i][k+1]=board[i][j];
					board[i][j]=0;
					anymove++;
				}
			}
		}
	return anymove;
}
function moveright(anymove){
	for(var i=1;i<=4;i++)
		for(var j=3;j>=1;j--){
			if(board[i][j]!=0){
				for(var k=j+1;k<=4&&board[i][k]==0;k++);
				if(board[i][k]==board[i][j]){
					board[i][k]*=2;
					board[i][j]=0;
					score++;
					anymove++;
				}
				else if(k!=j+1){
					board[i][k-1]=board[i][j];
					board[i][j]=0;
					anymove++;
				}
			}
		}
	return anymove;
}
function movedown(anymove){
	for(var j=1;j<=4;j++)
		for(var i=3;i>=1;i--){
			if(board[i][j]!=0){
				for(var k=i+1;k<=4&&board[k][j]==0;k++);
				if(board[k][j]==board[i][j]){
					board[k][j]*=2;
					board[i][j]=0;
					score++;
					anymove++;
				}
				else if(k!=i+1){
					board[k-1][j]=board[i][j];
					board[i][j]=0;
					anymove++;
				}
			}
		}
	return anymove;
}
function moveup(anymove){
	for(var j=1;j<=4;j++)
		for(var i=2;i<=4;i++){
			if(board[i][j]!=0){
				for(var k=i-1;k>=1&&board[k][j]==0;k--);
				if(board[k][j]==board[i][j]){
					board[k][j]*=2;
					board[i][j]=0;
					score++;
					anymove++;
				}
				else if(k!=i-1){
					board[k+1][j]=board[i][j];
					board[i][j]=0;
					anymove++;
				}
			}
		}
	return anymove;
}