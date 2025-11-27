
function fakeSubmit(e){
  e.preventDefault();
  alert('Thanks! Your EcoBricks plan has been received.');
  return false;
}

document.addEventListener('click', function(e){
  const target = e.target.closest('[data-intent]');
  if(target){
    console.log('CTA click:', target.getAttribute('data-intent'));
  }
});
