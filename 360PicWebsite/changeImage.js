function changePic(picSrc) {
	var newPicSrc;
	if(picSrc == 0)
	{
		document.getElementById("tempPic").src = "vrtour/entrance.jpg";
	}
	else if(picSrc == 19)
	{
		document.getElementById("tempPic").src = "vrtour/sl251.jpg";
	}
	else if (picSrc >= 1 && picSrc <= 9)
	{		
		newPicSrc="vrtour/0" + picSrc + ".jpg";
		document.getElementById("tempPic").src = newPicSrc;
	}
	else
	{
		newPicSrc="vrtour/" + picSrc + ".jpg";
		document.getElementById("tempPic").src = newPicSrc;
	}
}