/** 
  * selectInfo :  data used to populate the select menus
  * displayVideo() : this function will display the video of the selected destination
  * @author Samruddhi Deshpande sd9335@rit.edu
*/

var selectInfo = {
    "choices" : [
        {
            "key": "United-States",
            "option_1": "State",
            "option_2": "Only Zone",
            "description": "Select between States and Zones",
            "depth":"1"
        },
        {
            "key": "State",
            "option_1": "West Zone",
            "option_2": "Mid West Zone",
            "option_3": "South West Zone",
            "option_4": "South East Zone",
            "option_5": "North East Zone",
            "description": "Select a Region in India where you wish to travel",
            "depth":"2"
        },
        {
            "key": "Only Zone",
            "option_1": "West",
            "option_2": "Mid West",
            "option_3": "South West",
            "option_4": "South East",
            "option_5": "North East",
            "description": "Select the zone where you wish to travel",
            "depth":"2"
        },
          {
            "key": "North East Zone",
            "option_1": "Connecticut",
            "option_2": "Maine",
            "option_3": "Massachusetts",
            "option_4": "New Hampshire",
            "option_5": "Rhode Island",
            "option_6": "Vermont",
            "option_7": "New Jersey", 
            "option_8": "New York",
            "option_9": "Pennsylvania",
            "description": "Select a state in North East Zone",
            "depth":"3"
          },
          {
            "key": "Mid West Zone",
            "option_1": "Illinois",
            "option_2": "Indiana",
            "option_3": "Michigan",
            "option_4": "Ohio",
            "option_5": "Wisconsin",
            "option_6": "Iowa",
            "option_7": "Kansas", 
            "option_8": "Minnesota",
            "option_9": "Missouri",
            "option_10": "Nebraska", 
            "option_11": "North Dakota",
            "option_12": "South Dakota",
            "description": "Select a state in Mid West Zone",
            "depth":"3"
          },
          {
            "key": "South West Zone",
            "option_1": "RajasArkansas",
            "option_2": "Louisiana",
            "option_3": "Oklahoma",
            "option_4": "Texas",
            "description": "Select a state in South West Zone",
            "depth":"3"
          },
          {
            "key": "South East Zone",
            "option_1": "Alabama",
            "option_2": "Kentucky",
            "option_3": "Mississippi",
            "option_4": "Tennessee",
            "description": "Select a state in South East Zone",
            "depth":"3"
          },
          {
            "key": "West Zone",
            "option_1": "Arizona",
            "option_2": "Colorado",
            "option_3": "Idaho",
            "option_4": "Montana",
            "option_5": "Nevada",
            "option_6": "New Mexico",
            "option_7": "Utah",
            "option_8": "Wyoming",
            "description": "Select a state in West Zone",
            "depth":"3"
          }
        ]
        
  }

