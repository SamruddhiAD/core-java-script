/** 
  * createSelectElement() :  this function will load the select elements and their options based on the choices.js file
  * reset() : called onClick of Reset Button on select.html 
  *           resets all the data and SVG image
  * @author Samruddhi Deshpande sd9335@rit.edu
  * @required choices.js
*/

const swup = new Swup()

//Heading : Hi Username!
var h3 = document.createElement('h3');
var storedName = localStorage.getItem("name");
var textNode = document.createTextNode("Hi "+storedName+" !");
h3.className = "UserName";
h3.appendChild(textNode);
selectDiv.appendChild(h3);

/*
    Extracting data from choices.js
    maxdepth for calculating the depth of given data
*/
  const choiceData = selectInfo.choices;
  const dataLength = Object.keys(choiceData).length;
  var maxdepth=0;
  var keyarr = [];
    for (var j = 0; j < dataLength; j++) {
        keyarr.push(choiceData[j].key);
        if(choiceData[j].depth>maxdepth)
            maxdepth=choiceData[j].depth;
    }
 
/*
    Function to create a new <select>
    parameters : selected key of previous select box
*/
  function createSelectElement(dataKey){

     // Creates a header to display final selection from select menu
      if(keyarr.includes(dataKey) === false){
        var final = document.getElementsByTagName('select');
        
        for( var l = 1; l<final.length; l++){
            var h3 = document.createElement('h3');
            var textNode = document.createTextNode("Selected Value : "+final[l].id);
            h3.className = "finalList";
            h3.appendChild(textNode);
            selectDiv.appendChild(h3);
        }
            h3 = document.createElement('h3');
            textNode = document.createTextNode(dataKey+" is highlighted in the Map of India");
            h3.className = "finalList";
            h3.appendChild(textNode);
            selectDiv.appendChild(h3);
    
        //console.log(dataKey);
        displayVideo(dataKey);
        document.querySelector('[title='+dataKey+']').setAttribute("fill","orange"); 
      }

      
      for (var i = 0; i < dataLength; i++) {

          // If choice does not match key, skip this data point
        if (choiceData[i].key != dataKey)
            continue;
    
        // Creates a header to label the specific select menu
        var h3 = document.createElement('h3');
        var textNode = document.createTextNode(choiceData[i].description);
        h3.className = choiceData[i].depth;
        h3.appendChild(textNode);
        selectDiv.appendChild(h3);

        // Creates the select list element
        var selectList = document.createElement('select');
        selectList.id = choiceData[i].key;
        selectList.name = choiceData[i].description;
        selectList.className = choiceData[i].depth;
        selectDiv.appendChild(selectList);

        // Creates null Select option
        var nullOption = document.createElement('option');
        nullOption.text = "Select an Option";
        nullOption.selected = this;
        nullOption.disabled = true;
        selectList.appendChild(nullOption); 
                        
        // Loop to populate the options
        const current = choiceData[i];
        for(var key of Object.keys(current)){
            if(key != 'key' && key != 'description' && key != 'depth'){
                var newOption1 = document.createElement('option');
                newOption1.value = current[key];
                newOption1.text = current[key];
                selectList.appendChild(newOption1);
            }
        }
        


        selectList.addEventListener("change", () => {

            //To reset the SVG img
            if(document.querySelector("[fill=orange]") != null )
                document.querySelector("[fill=orange]").setAttribute("fill","white");
            
                document.getElementById('videoDIV').style.visibility="hidden";

            // call a function to remove select lists 
            for(var k=1; k <= maxdepth; k++){
                if(selectList.className<k){
                    var countElements = document.getElementsByClassName(k);
                    while (countElements.length > 0) countElements[0].remove(); 
                }
            }
            var clearFinalList = document.getElementsByClassName("finalList");
            while (clearFinalList.length > 0) clearFinalList[0].remove(); 
            
            //document.getElementById(selectList.id).selectedIndex = 0;
            // call a function to add new select list
            createSelectElement(selectList.value);
        });


        
      }


  };

  
//a function to reset all the select menus 
function reset(key){
    var drop = document.getElementsByTagName('select')
    while (drop.length > 0) drop[0].remove();
    var head = document.getElementsByTagName('h3')
    while (head.length > 0) head[0].remove();
    if(document.querySelector("[fill=orange]") != null )
        document.querySelector("[fill=orange]").setAttribute("fill","white");     
    document.getElementById('videoDIV').style.visibility="hidden";
    console.log("Key:"+key);
    if(key==="all"){
        localStorage.clear();
        window.location="index.html";
    }
    else{
        createSelectElement("India");
        window.scrollTo(0, 0);
    }
}



