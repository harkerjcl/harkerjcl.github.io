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

function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}
