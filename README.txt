Project 2 : Client Design Development 
Samruddhi Deshpande

=========General Flow==========

User starts from index.js (MainSection) where they will see the RIT logo and there is a Navigation Bar on the top of the screen for easy navigation and softscroll. 
If the user is on small screen then the NavBar is converted to side bar.

--------pages-------------
pages folder contains the pages on which user is redirected. 
The main page of the website is a scroll of multiple pages which helps user to have a overall look at first glance.

--------Components------------
Component folder is a collection of files and folders of different elements.

MainSection : As discussed MainSection contains of the landing page
	index.js : structure of the page
	mainElements.js : styling of the page

NavBar : 
	index.js : structure of the navigation bar and link to all the elements with soft-scroll
	NavBarElements.js : styling of the navbar

-------selection of data-------
First Dropdown is between states and union territories 
After the selection user will be able to select further.
Flow can be seen below: 

								India
								  |
				States(S)         						Union territories(UT)
				  |                 						     |
North	East 	West 	South 	NorthEast   		     UT1 UT2 UT3 UT4 UT5
  |		  |		  |		  |		  |
S1 S2	S3 S4	S5 S6	S7 S8	S9 S10


=========Extra Work============

------------SVG Image----------

Before populating select menus :
On SVG Image : hover over : Highlights the area and displays the name of destination
SVG Image is clickable and OnClick : displays YouTube Video giving information of the destination 

After populating all the select menus :
Added SVG Image which will highlight the selected destination.

Note : As the Union territories are very small the area highlighted can be hard to see. For best example : Jammu and Kashmir can be used as it’s visible.

---------YouTube Video---------

After successful selection YouTube Video will be displayed giving the highlights of the selected destination

--------Added Animation--------

On index.html page load : Added JavaScript animation which brings a Indian Flag on screen

-------------DHTML-------------

DHTML consists of 4 components : JS, CSS, HTML, DOM

Added all the data in choices.js 
A separate file for functional code
A separate CSS file for styling 
Integrated all in HTML as a result. Used DOM to make webpage animated and interactive.

--------Scalability Demo-------

For scalability demo :
choices2.js file has been added in the folder 

Uncommenting Line number : 12 and 22 
and Commenting out Line Number : 10 and 20 from select.html 

Shows that we can use this code for any of the data set. 
(Aesthetics needs to be changed as per the choices but the basic functionality works perfect!)
