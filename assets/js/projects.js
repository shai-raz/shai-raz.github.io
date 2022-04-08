/* Project information */

const imagesPath = "./assets/images/"
const githubBaseURL = "https://github.com/shai-raz/"

const projects = {
    "Ricos": {
        "smallImage": imagesPath + "ricosCombinedNoReflection.png",
        "bigImage": imagesPath + "ricosCombined.png",
        "reflectionMargin": true,
        "githubLink": githubBaseURL + "Ricos",
        "title": "Ricos",
        "text": `is a web application,
        which is much like instagram, but for recipes.
        It allows users to upload new recipes,
        follow other users and read their recipes,
        like recipes, comment on recipes, and more.`,
        "technologies": ["React.js", "Node.js", "MySQL"]
    },
    "PathfindingGUI": {
        "smallImage": imagesPath + "PathfindingGUINoReflection.png",
        "bigImage": imagesPath + "AstarGUIRun.webp",
        "reflectionMargin": false,
        "githubLink": githubBaseURL + "AStar-GreedyBestFirstSearch-Pathfinder-with-GUI",
        "title": "Pathfinding",
        "text": `is a GUI application, which implements the A* and GreedyBestFirst Search algorithms. It allows the user to draw a map on a grid, specifying the start and end points, as well as obstacles and roads that take longer to travel through. It shows the algorithm search in real-time, and finally the found path.`,
        "technologies": ["Python", "PyQT5"]
    },
    "WebPortfolio": {
        "smallImage": imagesPath + "WebPortfolioCombinedNoReflection.png",
        "bigImage": imagesPath + "WebPortfolioCombined2.png",
        "reflectionMargin": true,
        "githubLink": githubBaseURL + "shai-raz.github.io",
        "title": "Web Portfolio",
        "text": `is the website you're in right now!
        Created with pure JavaScript, almost everything is made from scratch, even this very slider!
        It's a responsive website, and I'd like to think it's pretty esthetic.`,
        "technologies": ["JavaScript", "HTML", "CSS"]
    }
}

export default projects