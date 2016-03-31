var $create = document.querySelector('#createNew');
var $listPending = document.querySelector('#listPending');
var $account = document.querySelector('#account');
var $content = document.querySelector('#content');
var $reset = document.querySelector('#resetMeetings')

function loadAndRenderItems () {
while ($content.hasChildNodes())
{
	$content.removeChild($content.lastChild);
}
  hoodie.store.findAll().then(render)
  if (hoodie.store.isConnected())
  {
  	hoodie.store.sync();
  }
}

loadAndRenderItems();

function render(items) {
	if (items.length == 0) {
		return;
	}
	items.forEach(function(item) {
		var element = document.createElement('p');
		element.innerHTML = item.text;
		$content.appendChild(element);
	});

}

$create.addEventListener('click', function(){
	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', 'datefield');
	$content.appendChild(input);
	input.addEventListener('change', function(){
		hoodie.store.add({'text': input.value});
		this.remove();
	});
});

$listPending.addEventListener('click', function() {
	console.log('listPending');
});

$account.addEventListener('click', function() {
	console.log('Account');
});

$reset.addEventListener('click', function() {
	hoodie.store.removeAll();
});

hoodie.store.on('change', loadAndRenderItems);
