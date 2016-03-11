/*
	Author: Espineli, Jared A.
	CMSC 128 AB-2L
	Programming Assignment 002: Programming a Simple Bionformatics Library
*/

function getHammingDistance(){
/******************************************************************************************************
	Given two strings str1 and str2 of same length (length must never be 0	or negative!), the Hamming 
	Distance of those two strings are the number of inversions per character needed to transform str1 
	and str2 or vise-versa. Simply put, the Hamming Distance of two strings is the number of 
	characters that differ in the ith position 1 to strlen(str1);
******************************************************************************************************/
//get text field values assigned	
	var str1 = document.getElementById("hammingDistance1").value;
	var str2 = document.getElementById("hammingDistance2").value;
	var hammingDistance = 0;

	if((str1.length != str2.length) || str1.length == 0 || str2.length == 0){ // compares length of the two strings
        document.getElementById("hammingDistanceResult").innerHTML = "Error! Strings are not equal! or String Length is 0";
        console.log("Error! Strings are not equal! or String Length is 0");
  	}
    	else{ //enters this loop if str1 and str2 are equal
           	var hammingDistance = 0; //variable for Hamming Distance
           		for(var i = 0; i < str1.length; i++){
               		if(str1.charAt(i) != str2.charAt(i)){//compares letter of each string
                    	hammingDistance++;
           	}
        		}
           
           	document.getElementById("hammingDistanceResult").innerHTML = "Hamming Distance: " + hammingDistance;
			console.log("Hamming Distance " + hammingDistance);
        }	
}

function countSubstrPattern(){
/********************************************************************************
	Given a string original and pattern, we will count the number of occurrence 
	of pattern in original.
********************************************************************************/
	var original = document.getElementById("substrPattern1").value;
	var pattern = document.getElementById("substrPattern2").value;
	var substrPatternCount = 0;

	if(pattern.length > original.length){ //if length of pattern is greater than the original length return 0
		document.getElementById("substrPatternResult").innerHTML = "Patern length is greater than the orginal length";
		console.log("substrPatternCount: " + substrPatternCount);
		substrPatternCount = 0;
	} else {//pattern is equal to the substring of original from ith index up to pattern.length-characters. 
		for(var i=0; i<original.length; i++){
			if(pattern == original.substr(i, pattern.length)){
				substrPatternCount++; //increment substring pattern count since equal
			}
		}
	}
	document.getElementById("substrPatternResult").innerHTML = "Substring Pattern Count: " + substrPatternCount;
	console.log("Substr Pattern Count: " + substrPatternCount);
}

function isValidString(){
/*******************************************************************************************************
	Given an alphabet string where are all letters are assumed to be unique, this function returns true 
	if the string is a valid string based on the letters of alphabet.
*******************************************************************************************************/
//get text field values assigned	
	var str = document.getElementById("validString1").value;
	var alphabet = document.getElementById("validString2").value;

	if(str.length == 0)//checks if the input string is valid
        document.getElementById("validStringResult").innerHTML = "Input: NOT VALID";
		console.log("String validity: " + false);
        
    for(var i = 0; i < str.length; i++)//iterates through the string
    {
        if(alphabet.search(str[i]) == -1)//if the current character is not in the alphabet
            		document.getElementById("validStringResult").innerHTML = "Input: NOT VALID";
				console.log("String validity: " + false);
    }
       	document.getElementById("validStringResult").innerHTML = "Input: VALID";
		console.log("String validity: " + true);
}

function getSkew(){
/*******************************************************************************************************
	Given a genome str of some length q (where q>0), it returns the number of Gs minus the number of Cs
	in the first nucleotides (q>=n). The value can be zero, negative or positive. The first position is 
	one (1) not zero (0) as we typically associate with string implementations.
*******************************************************************************************************/
	var str = document.getElementById("getSkew1").value;
	var n = document.getElementById("getSkew2").value;
	// Initialize gCount and cCount to 0.
	var gCount = 0;
	var cCount = 0;

	if(n>str.length || n < 1){//checks if the inputs are valid
		document.getElementById("getSkewResult").innerHTML = "Error! Invalid value of N";
		console.log("Error! Invalid value of N");
		//return null;
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){//count the number of G
				gCount+=1;
			}
			else if(str[i].toUpperCase()=='C'){//count the number of G
				cCount+=1;
			}
		}
		skew = gCount - cCount;
		document.getElementById("getSkewResult").innerHTML = "Skew: " + skew;
		console.log("Skew: " + skew);
	}
}

function getMaxSkewN(){
/*****************************************************************************************************
	Given a genome str of some length q (where q>0), it returns the maximum	number of Gs minus
	the number of Cs in the first nucleotides (q>=n). The value can be zero, negative or positive.
	The first position is one (1) not zero (0) as we typically associate with string implementations.
******************************************************************************************************/
	var str = document.getElementById("getMaxSkew1").value;
	var n = document.getElementById("getMaxSkew2").value;
	// Initialize gCount, cCount and maxSkew to 0.
	var gCount = 0;
	var cCount = 0;
	var maxSkew = 0;

	if(n>str.length || n < 1){//checks if the inputs are valid
		document.getElementById("getSkewResult").innerHTML = "Error! Invalid value of N";
		console.log("Error! Invalid value of N");
	}
	else{
		for(var i=0;i<=n-1;i++){
			if(str[i].toUpperCase()=='G'){//count the number of G
				gCount+=1;
			}
			else if(str[i].toUpperCase()=='C'){//count the number of C
				cCount+=1;
			}
			if((gCount-cCount) > maxSkew){
				maxSkew = gCount - cCount;
			}
		}
		document.getElementById("getMaxSkewResult").innerHTML = "Maximum Skew: " + maxSkew;
		console.log("Maximum Skew: " + maxSkew);
	}
}

function getMinSkewN(){
/*******************************************************************************************
	Given a genome str of some length q (where q>0), it returns the minimum number of Gs
	minus the number of Cs in the first nucleotides (q>=n). The value can be zero, negative
	or positive. The first position is one (1) not zero (0) as we typically associate with 
	string implementations.
********************************************************************************************/
	var str = document.getElementById("getMinSkew1").value;
	var n = document.getElementById("getMinSkew2").value;
	// Initialize gCount, cCount and skew to 0.
	var gCount = 0;
	var cCount = 0;
	var minSkew = 0;

	if(n>str.length || n < 1){//checks if the inputs are valid
		document.getElementById("getSkewResult").innerHTML = "Error! Invalid value of N";
		console.log("Error! Invalid value of N");
		//return null;
	} else {
		// Starting from index 1(0) up to index n, count the number Gs and Cs, and subtract cCount from gCount to get the skew.
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == "G" || str.charAt(i-1) == "g"){
				gCount++;
			} else if(str.charAt(i-1) == "C" || str.charAt(i-1) == "c"){
				cCount++;
			}
			if(i==1){
				minSkew = gCount - cCount;
			}
			if((gCount-cCount) < minSkew){
				// compare if current check is less than previous minSkew, update if so.
				minSkew = gCount - cCount;
			}
		}
		document.getElementById("getMinSkewResult").innerHTML = "Minimum Skew: " + minSkew;
		console.log("Minimum Skew: " + minSkew);
	}	
}	