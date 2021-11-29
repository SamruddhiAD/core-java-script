/** 
  * selectInfo :  data used to populate the select menus
  * displayVideo() : this function will display the video of the selected destination
  * @author Samruddhi Deshpande sd9335@rit.edu
*/

var selectInfo = {
    "choices" : [
        {
            "key": "India",
            "option_1": "State",
            "option_2": "Union Territory",
            "description": "Select between States and Union Territories",
            "depth":"1"
        },
        {
            "key": "State",
            "option_1": "North Zone",
            "option_2": "East Zone",
            "option_3": "West Zone",
            "option_4": "South Zone",
            "option_5": "Central Zone",
            "option_6": "North East Zone",
            "description": "Select a Region in India where you wish to travel",
            "depth":"2"
        },
        {
            "key": "Union Territory",
            "option_1": "Delhi",
            "option_2": "Jammu-and-Kashmir",
            "option_5": "Daman-and-Diu",
            "option_6": "Puducherry",
            "option_7": "Andaman-and-Nicobar",
            "description": "Select the union territory where you wish to travel",
            "depth":"2"
        },
          {
            "key": "North Zone",
            "option_1": "Himachal-Pradesh",
            "option_2": "Punjab",
            "option_3": "Uttarakhand",
            "option_4": "Uttar-Pradesh",
            "option_5": "Haryana",
            "description": "Select a state in North India",
            "depth":"3"
          },
          {
            "key": "East Zone",
            "option_1": "Bihar",
            "option_2": "Orissa",
            "option_3": "Jharkhand",
            "option_4": "West-Bengal",
            "description": "Select a state in East India",
            "depth":"3"
          },
          {
            "key": "West Zone",
            "option_1": "Rajasthan",
            "option_2": "Gujarat",
            "option_3": "Goa",
            "option_4": "Maharashtra",
            "description": "Select a state in West India",
            "depth":"3"
          },
          {
            "key": "Central Zone",
            "option_1": "Madhya-Pradesh",
            "option_2": "Chhattisgarh",
            "description": "Select a state in Central India",
            "depth":"3"
          },
          {
            "key": "South Zone",
            "option_1": "Andhra-Pradesh",
            "option_2": "Karnataka",
            "option_3": "Kerala",
            "option_4": "Tamil-Nadu",
            "description": "Select a state in Central India",
            "depth":"3"
          },
          {
            "key": "North East Zone",
            "option_1": "Assam",
            "option_2": "Arunachal-Pradesh",
            "option_3": "Tripura",
            "option_4": "Mizoram",
            "option_5": "Manipur",
            "option_6": "Meghalaya",
            "option_7": "Nagaland",
            "option_8": "Sikkim",
            "description": "Select a state in North Eastern India",
            "depth":"3"
          }
        ]
        
  }

/*
  Contains youTube links of the videos which are used to display after selection
  Display : iframe in select.html
*/
  function displayVideo(dataKey){
    document.getElementById('videoDIV').style.visibility="visible";
    if(dataKey==="Maharashtra")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/FtKW7OpZpDw?autoplay=1&mute=1");
    if(dataKey==="Gujarat")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/k3OolA45orE?start=9&autoplay=1&mute=1");
    if(dataKey==="Delhi")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/ySXPBZDqp4Y?start=9&autoplay=1&mute=1");
    if(dataKey==="Jammu-and-Kashmir")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/J6RFmeMmBDg?autoplay=1&mute=1");
    if(dataKey==="Daman-and-Diu")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/VfdS_DL0qZM?autoplay=1&mute=1");
    if(dataKey==="Puducherry")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/L-6xfX0PuVc?autoplay=1&mute=1");
    if(dataKey==="Andaman-and-Nicobar")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/fkfaOo76rtE?autoplay=1&mute=1");
    if(dataKey==="Himachal-Pradesh")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/fPqJZvaKeao?autoplay=1&mute=1");
    if(dataKey==="Punjab")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/m701WKQMeYQ?autoplay=1&mute=1");
    if(dataKey==="Uttarakhand")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/ABUfYrzhh4U?autoplay=1&mute=1");
    if(dataKey==="Uttar-Pradesh")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/UXzYKrpKWso?start=2&autoplay=1&mute=1");
    if(dataKey==="Haryana")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/GwSEuwOsSvg?autoplay=1&mute=1"); 
    if(dataKey==="Bihar")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/V13cxzTFZFQ?start=2&autoplay=1&mute=1"); 
    if(dataKey==="Orissa")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/1cDOjOU4B-c?autoplay=1&mute=1"); 
    if(dataKey==="Jharkhand")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/_VJ1dVOxsIY?autoplay=1&mute=1"); 
    if(dataKey==="West-Bengal")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/9giqL1H6yRs?start=54"); 
    if(dataKey==="Rajasthan")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/rdKpptxCCYw?autoplay=1&mute=1"); 
    if(dataKey==="Goa")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/82bPwndF-J0?autoplay=1&mute=1"); 
    if(dataKey==="Madhya-Pradesh")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/D6jJp3Ys5rI?autoplay=1&mute=1"); 
    if(dataKey==="Chhattisgarh")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/zxsjWSWjV4I?start=6&autoplay=1&mute=1"); 
    if(dataKey==="Andhra-Pradesh")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/__tOoiMU0_I?start=5&autoplay=1&mute=1"); 
    if(dataKey==="Karnataka")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/ea24PP4nuOE?autoplay=1&mute=1"); 
    if(dataKey==="Kerala")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/SI-JAsIO9ps?start=6&autoplay=1&mute=1"); 
    if(dataKey==="Tamil-Nadu")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/bj-5avypVoQ?autoplay=1&mute=1"); 
    if(dataKey==="Assam")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/Bla_guEy8Bg?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Arunachal-Pradesh")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/nEQ2ZkXawHg?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Tripura")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/pnyh2xhG6UI?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Mizoram")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/1oxskBznhHs?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Manipur")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/IibHQXd6xew?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Meghalaya")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/L6-GdcCUDNk?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Nagaland")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/jITLfh0Axx0?start=15&autoplay=1&mute=1"); 
    if(dataKey==="Sikkim")
        document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/gOpN_j9wQQA?start=15&autoplay=1&mute=1"); 
    
    
             
       
     
        
}