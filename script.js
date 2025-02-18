const projects = [
    {
        name: "бактерии онлайн",
        img: "img/bk.png",
        screenshots: ["img/1.png", "img/1.png"],
        description: "Поедай другие организмы чтобы выжить.       В игре большое ранообразие скинов, механик. В игре не будет доната и реклам."
    },
    {
        name: "Scpgram",
        img: "img/scpgram.png",
        screenshots: ["img/1.png", "img/1.png"],        
        description: "это клон телеграма с бюджетом одного доширака) проект сделан по приколу"
    }
];

function openProject(index) {
    const project = projects[index];
    document.getElementById('project-img').src = project.img;
    document.getElementById('project-name').textContent = project.name;
    document.getElementById('project-description').textContent = project.description;
    
    const screenshotsContainer = document.getElementById('screenshots');
    screenshotsContainer.innerHTML = "";
    project.screenshots.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('screenshot');
        screenshotsContainer.appendChild(img);
    });
    
    document.getElementById('project-modal').style.display = 'block';
    document.getElementById('header').style.display = 'none';
    document.getElementById('content').style.display = 'none';
}

function closeProject() {
    document.getElementById('project-modal').style.display = 'none';
    document.getElementById('header').style.display = 'block';
    document.getElementById('content').style.display = 'block';
}
