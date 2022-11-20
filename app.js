const markAllAsReadBtn = document.querySelector('button');
const notificationCounter = document.getElementById('notification-count');
const notificationCards = document.querySelectorAll('.notification-card');

// when a user clicks the 'Mark all as read' button, this function changes all unread messages to read messages
markAllAsReadBtn.addEventListener('click', () => {
  for(let i = 0; i < 3; i++){
    notificationCards[i].classList.remove('unread');
  }
  notificationCounter.textContent = '0';
})