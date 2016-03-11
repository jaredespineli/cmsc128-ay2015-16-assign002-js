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
	
	// Get text field values and assign to str1 and str2.
	var str1 = document.getElementById("hammingDistance1").value;
	var str2 = document.getElementById("hammingDistance2").value;
	var hammingDistance = 0;

	if((str1.length != str2.length) || str1.length == 0 || str2.length == 0){ // Checks if string lengths are equal and both are greater than 0.
        document.getElementById("hammingDistanceResult").innerHTML = "Error! Strings are not equal! or String Length is 0";
        console.log("Error! Strings are not equal! or String Length is 0");
  	}
    	else{
           	var hammingDistance = 0; //variable for Hamming Distance
           		for(var i = 0; i < str1.length; i++){//iterates through the string 1
               		if(str1.charAt(i) != str2.charAt(i)){//if each character is not the same, increases hammingDistance by 1
                    	hammingDistance++;
           	}
        		}
           
           	document.getElementById("hammingDistanceResult").innerHTML = "The Hamming Distance of " + str1 + " and " + str2 + " is " + hammingDistance;
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
	document.getElementById("substrPatternResult").innerHTML = "Occurence of pattern " + pattern + " in input " + original + " is " + substrPatternCount;
	console.log("Substr Pattern Count: " + substrPatternCount);
}

function isValidString(){
/*******************************************************************************************************
	Given an alphabet string where are all letters are assumed to be unique, this function returns true 
	if the string is a valid string based on the letters of alphabet.
*******************************************************************************************************/
	var str = document.getElementById("validString1").value;
	var alphabet = document.getElementById("validString2").value;

	if(str.length == 0)//if string is empty
        document.getElementById("validStringResult").innerHTML = "Input " + str + " is not valid in alphabet " + alphabet + "-> " + false;
		console.log("String validity: " + false);
        
    for(var i = 0; i < str.length; i++)//iterates through the string
    {
        if(alphabet.search(str[i]) == -1)//if the current character is not in the alphabet
    //        return Boolean(false)//string is not valid
        		document.getElementById("validStringResult").innerHTML = "Input " + str + " is NOT VALID in alphabet " + alphabet;
				console.log("String validity: " + false);
    }
    //return Boolean(true);//string is valid
    	document.getElementById("validStringResult").innerHTML = "Input " + str + " is VALID in alphabet " + alphabet;
		console.log("String validity: " + true);
}