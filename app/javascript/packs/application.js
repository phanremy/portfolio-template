import "bootstrap";

const selectorShow = () => {
  const achievements = document.getElementById('achievements-selector');
  const currentWorks = document.getElementById('current-works-selector');
  const achievementsContainer = document.getElementById('achievements');
  const currentWorksContainer = document.getElementById('current-works');
  if (achievements && currentWorks) {
    achievements.addEventListener('click', (event) => {
      achievements.classList.add('active');
      currentWorks.classList.remove('active');
      achievementsContainer.classList.remove('hidden');
      currentWorksContainer.classList.add('hidden');
    });
    currentWorks.addEventListener('click', (event) => {
      achievements.classList.remove('active');
      currentWorks.classList.add('active');
      achievementsContainer.classList.add('hidden');
      currentWorksContainer.classList.remove('hidden');
    });
  }
}

selectorShow();
