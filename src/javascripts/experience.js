document.querySelectorAll('.expandable-content').forEach((item) => {
  console.log(item);
  const summary = item.querySelector('.summary');
  const details = item.querySelector('.details');
  summary.addEventListener('click', () => {
    console.log('click');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});
