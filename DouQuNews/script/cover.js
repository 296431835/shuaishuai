var elCover = document.createElement('div');
var mode = $api.getStorage('mode');

elCover.className = 'cover';
document.body.appendChild(elCover);

function huyan() {
	$api.setStorage('mode', 'huyan');
	elCover.className = 'cover active';
}

function common() {
	$api.setStorage('mode', 'common');
	elCover.className = 'cover';
}

if (mode == 'huyan')
	huyan();
else if (mode == 'common')
	common();