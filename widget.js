let widget = {};

let load = () => {
	widget.el = document.getElementById('jm-widget');
	widget.steps = widget.el.querySelectorAll('.jm-step');
	widget.map = widget.el.querySelector('.jm-map');
	widget.window = widget.el.querySelector('.jm-window');
	widget.overlay = widget.el.querySelector('.jm-overlay');
};

let openStep = (step = null) => {
	document.startViewTransition(() => {
		widget.window.style.display = 'block';
		widget.overlay.style.display = 'block';
	});		
};

let closeStep = () => {
	document.startViewTransition(() => {
		widget.window.style.display = 'none';
		widget.overlay.style.display = 'none';
	});
};

let init = () => {
	load();

	widget.steps[0].scrollIntoView({
		behavior: 'smooth',
		block: 'center',
		container: 'nearest',
		inline: 'center',
	});

	if (widget.steps) {
		for (let i = 0; i < widget.steps.length; i++) {
			widget.steps[i].addEventListener('click', openStep);			
		}
	}
};

document.addEventListener('DOMContentLoaded', function () {
	init();
	
	document.querySelector('.jm-step--available').scrollIntoView({
		behavior: 'smooth',
		block: 'center',
		container: 'nearest',
		inline: 'center',
	});
});