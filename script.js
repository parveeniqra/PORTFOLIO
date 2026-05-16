console.log("Portfolio Loaded Successfully");

const skills = document.querySelectorAll('.skills span');

skills.forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.transition = '0.3s';
  });

  skill.addEventListener('mouseout', () => {
    skill.style.transform = 'scale(1)';
  });
});