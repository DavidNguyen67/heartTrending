const config = {
  name: 'Nguyễn Thị Thu',
  icon: '💓',
};

const icon = document.querySelector('#icon');
const nameLove = document.querySelector('#name');

if (icon) {
  icon.innerText = config.icon;
}
if (nameLove) {
  nameLove.innerText = config.name;
}
