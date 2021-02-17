document.addEventListener("DOMContentLoaded",function(){
	vals = "2020 0,2019 1,2018 1,2017 1,2016 1,2015 1,2014 1,2013 2,2012 1,2011 0,2010 1,2009 1,2008 0,2007 1,2006 1,2005 2,2004 2,2003 1,2002 1,2001 2,2000 1"
	vals_arr = vals.split(",").reverse()
	awards_rw = document.getElementById("awards-vals")
	awards_txts = document.getElementById("awards-yrs")

	gap_yrs = 4

	idx = 0

	for(val of vals_arr)
	{
		yr = parseInt(val.split(" ")[0])
		if(yr % (gap_yrs + 1) == 0)
		{
			txt = document.createElement("span")
			txt.innerHTML = yr.toString()
			if(idx % 2 == 0)
			{
				txt.classList.add('alt-txt')
			}
			idx++;
			awards_txts.appendChild(txt)
		}

		place = parseInt(val.split(" ")[1])

		node = document.createElement("div")
		
		if(place == 1) {node.classList.add("first")}
		else if(place == 2) {node.classList.add("second")}
		else { node.classList.add("no-place")}

		awards_rw.appendChild(node);
	}

});

// var menuitems = document.getElementsByClassName("menu-dropdown")[0]

// var menubtn = document.getElementById("menu-btn")

// var toggled = false

// menubtn.onclick = function () {
// 	if(toggled)
// 		menuitems.classList.toggle('fade')
// 	else
// 		menuitems.classList.toggle('nofade')

// 	toggled = !toggled
// }