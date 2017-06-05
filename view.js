function boardinit(){
	for(var i=0;i<=5;i++){
		board[i]=new Array();
		for(var j=0;j<=5;j++){
			board[i][j]=1;
		}
	}
    score=0;
    getrandcell();
    getrandcell();
    drawboard();
}

function drawboard(){
	var str0,str1;
    document.getElementById("score").innerHTML=score;
	for(var i=1;i<=4;i++)
	{
		str0="cell"+i;
		for(var j=1;j<=4;j++){
			str1=str0+j;
			var blk=document.getElementById(str1);
			blk.style.backgroundColor=drawblock(board[i][j]);
			if(board[i][j]!=0)
				blk.innerHTML=board[i][j];
			else
				blk.innerHTML="";
            if(board[i][j]>=1024)
                blk.style.fontSize="35px";
            else if(board[i][j]>=128)
                blk.style.fontSize="45px";
            else if(board[i][j]<128)
                blk.style.fontSize="60px";
		}
	}
}
function drawblock(num){
	switch(num){
		case 2:
      	 	return "#eee4da";
  	     	break;
  		case 4:
        	return "#eee4da";
        	break;
    	case 8:
     		return "#f26179";
      	  	break;
    	case 16:
        	return "#f59563";
        	break;
    	case 32:
        	return "#f67c5f";
        	break;
    	case 64:
        	return "#f65e36";
        	break;
    	case 128:
        	return "#edcf72";
        	break;
    	case 256:
        	return "#edcc61";
        	break;
    	case 512:
    	    return "#9c0";
        	break;
    	case 1024:
        	return "#3365a5";
        	break;
    	case 2048:
       	 	return "#09c";
        	break;
    	case 4096:
        	return "#abc";
        	break;
    	case 8192:
        	return "#93c";
        	break;
    }
    return "#ccc";
}