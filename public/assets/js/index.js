var create = document.querySelector('#createNew');
var listPending = document.querySelector('#listPending');
var account = document.querySelector('#account');
var content = document.querySelector('#content');

create.addEventListener('click', function(){
	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', 'datefield');
	content.appendChild(input);
	input.addEventListener('change', function(){
		console.log(input.value);
	})
});

listPending.addEventListener('click', function() {
	console.log('listPending');
});

account.addEventListener('click', function() {
	console.log('Account');
});