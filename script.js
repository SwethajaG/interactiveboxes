const expansionPanels = document.querySelectorAll('.panel');

expansionPanels.forEach(panel => {
  	const header = panel.querySelector('.panel-header');
  	const content = panel.querySelector('.panel-content');
	panel.addEventListener('mouseenter', () => {
    		header.classList.add('active');
    		content.classList.add('active');
		panel.style.borderColor = "#e67387";
		panel.style.borderWidth  = "2px";
 	});
  	panel.addEventListener('mouseleave', () => {
    		header.classList.remove('active');
    		content.classList.remove('active');
		panel.style.borderColor = "#b3a7a7";
		panel.style.borderWidth  = "1px";	
  	});
});
