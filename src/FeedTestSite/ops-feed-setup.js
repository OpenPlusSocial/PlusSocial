

    var links = document.querySelectorAll('link[rel=import]');
    
    for (i = 0; i < links.length; i++) { 
    var heart = links[i].import;
    var templates = heart.querySelectorAll('template');

		for (j = 0; j < templates.length; j++) { 
		   var templateClass = templates[j].className;

		   var hosts = document.querySelectorAll(templateClass);
			for (k = 0; k < hosts.length; k++) { 
				var root = hosts[k].createShadowRoot();
				root.appendChild(document.importNode(templates[j].content, true));
			}

		}
 
	}
   
 