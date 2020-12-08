const imgSite = document.querySelectorAll('.site-image');
const desc = document.querySelectorAll('.descrip-site');

[].forEach.call(imgSite, el => {
 el.addEventListener('mouseover', () => {
  let target = event.target;
  console.log(target.tagName)
  desc.forEach(function (e) {
    e.style.display = 'flex';
   })
 });
});

[].forEach.call(imgSite, el => {
 el.addEventListener('mouseout', () => {
  desc.forEach(function(e) {
   e.style.display = 'none';
  })
 });
});

