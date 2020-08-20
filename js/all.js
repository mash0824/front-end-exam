var inputText = document.getElementById('city-zip');
var catBtn = document.getElementById('cat-list');
var categories = document.getElementById('categories');
var categoryList = document.getElementById('category-list');
var catvalue = document.getElementById('catvalue');
var step3 = document.getElementById('step3');
var otherCatBtn = document.getElementById('other-cat');
var lawyers = {"lawyer1":{"name":"Mitchell M.","img":"lawyer-1.png","specialization":"Family Law","hometown":"Cheryll Hill, NJ","users":"10","Rating":"<span class=\"fa fa-star\" data-rating=\"1\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"2\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"3\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"4\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star-o\" data-rating=\"5\"><\/span>"},"lawyer2":{"name":"Joel C.","img":"lawyer-2.png","specialization":"Job & Employment Law","hometown":"Little Rock, AK","users":"20","Rating":"<span class=\"fa fa-star\" data-rating=\"1\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"2\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"3\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"4\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"5\"><\/span>"},"lawyer3":{"name":"Brigida R.","img":"lawyer-3.png","specialization":"Family Law","hometown":"Dallas, TX","users":"30","Rating":"<span class=\"fa fa-star\" data-rating=\"1\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"2\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"3\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"4\"><\/span>\n    \t\t\t\t\t\t\t\t\t<span class=\"fa fa-star\" data-rating=\"5\"><\/span>"}};
var reviews = document.getElementsByClassName("review-link");
var otherlists = document.getElementsByClassName("otherlists");
var modal = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var closex = document.getElementById("close-x");

var zip = ["00000"];
var cityState = ["New York, NY 00000"];
var span = document.getElementsByClassName("close");

otherCatBtn.onclick = function () {
	modal2.classList.remove('hidden');
}
closex.onclick = function () {
	modal3.classList.add('hidden');
}

for (i=0;i<otherlists.length; i++) {
	otherlists[i].addEventListener('click', function() {
		catvalue.value = this.innerHTML;
    	step3.innerHTML = catvalue.value;
    	modal.classList.remove('hidden');
    	modal2.classList.add('hidden');
	  });
}

for (i=0;i<reviews.length; i++) {
	reviews[i].addEventListener('click', function() {
		if (modal3.classList.contains('hidden')) {
			var data = lawyers["lawyer"+this.getAttribute('data-num')];
			document.getElementById("modal-img").src = "./images/"+data.img;
			document.getElementById("lawyer-name").innerHTML = data.name;
			document.getElementById("lawyer-location").innerHTML = data.hometown;
			document.getElementById("specialty").innerHTML = data.specialization;
			document.getElementById("usernum").innerHTML = data.users;
			document.getElementById("law-rating").innerHTML = data.Rating;
			modal3.classList.remove('hidden');
		} else {
			modal3.classList.add('hidden');
		}
	});
}

for (i=0;i<span.length; i++) {
	span[i].addEventListener('click', function() {
		// When the user clicks on <span> (x), close the modal
		var modals = document.getElementById(this.getAttribute('data-value'));
		modals.classList.add('hidden');
	});
}

catBtn.onclick = function () {
	if(inputText.value != "") {
		if (categories.classList.contains('hidden')) {
			categories.classList.remove('hidden');
		} else {
			categories.classList.add('hidden');
		}
	}
	else {
		categories.classList.add('hidden');
		alert('Please input your zip or city.');
		inputText.focus();
	} 
}

categoryList.addEventListener('click', function (e) {
    var target = e.target; // Clicked element
    while (target && target.parentNode !== categoryList) {
        target = target.parentNode; // If the clicked element isn't a direct child
        if(!target) { return; } // If element doesn't exist
    }
    if (target.tagName === 'LI'){
    	catvalue.value = target.innerHTML;
    	catBtn.click();
    	step3.innerHTML = catvalue.value;
    	modal.classList.remove('hidden');
    }
});
//console.log(zip);




//add autocomplete for zip test
function autocomplete(inp, arr,csval) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, csz,csr, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      
      if (!isNaN(val.charAt(0))) {
    	  csz = arr;
    	  csr = csval;
      }
      else {
    	  csz = csval;
    	  csr = csval;
      }
      
      /*for each item in the array...*/
      for (i = 0; i < csz.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (csz[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + csr[i] + "</strong>";
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + csr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
autocomplete(inputText, zip,cityState);
//otherCat.onclick = function () {console.log("other cat is clicked");}
// add click event for the read review link
for (i=0;i<reviews.length; i++) {
	reviews[i].addEventListener('click', function() {
		//this.getAttribute('data-num')
	    console.clear();
	    console.log("You clicked:", this.getAttribute('data-num'));
	  });
}


//console.log(lawyers.lawyer1.name);
//console.log(lawyers.lawyer2.name);
//console.log(lawyers.lawyer3.name);