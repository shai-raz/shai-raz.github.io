import projects from "./projects.js"

// get slider container and its children 
const sliderContainerDiv = document.getElementsByClassName("sliderContainer")[0]
const sliderItems = sliderContainerDiv.children
const baseZIndex = 1000

/*const projectInfoModalDiv = document.getElementsByClassName("projects-info")[0]
const projectsInfoModalExitButton = document.getElementsByClassName("projects-info-exit-icon")[0].children[0]*/

let currentActiveIndex = Math.floor(sliderItems.length / 2)
let currentActive = sliderItems[currentActiveIndex]
let isCurrentActiveOpen = false


/* Functions */
const getProjectInfoHTML = (projectId) => {
    const project = projects[projectId]
    if (!project) {
        console.error(`Project with id ${projectId} does not exist`)
        return ""
    }

    const technologiesHTML = project.technologies
        .map(tech => `${tech} | `)
        .join("")
        .slice(0, -2)

    console.log(project.reflectionMargin)

    const reflectionClass = project.reflectionMargin ? "project-slider-item-pic-reflective" : ""

    return `
    <i class="fa-brands fa-github"
        onclick="window.open('${project.githubLink}','_blank');"></i>
    <div class="projects-slider-item-pic">
        <img src="${project.smallImage}" alt="${project.title}">
    </div>
    <div class="projects-slider-item-title">${project.title}</div>
    <div class="projects-slider-item-open-top" id="project-ricos-slider-item-open-image">
        <img src="${project.bigImage}" alt="${project.title}">
    </div>
    <div class="projects-slider-item-text ${reflectionClass}">
    <strong>${project.title}</strong> ${project.text}
    <p>${technologiesHTML}</p>
    </div>
    `
}

// sets all the information from projects.js into the corresponding divs (by id)
const initProjectsInfo = () => {
    for (let project of sliderItems) {
        if (!project.id)
            continue

        project.innerHTML = getProjectInfoHTML(project.id)
    }
}

const setActive = (element, index) => {
    // remove active class from current active element
    currentActive.classList.remove("sliderActive")
    currentActive.classList.remove("sliderActiveOpen")
    isCurrentActiveOpen = false

    // set current active element
    currentActive = element
    currentActiveIndex = index

    setInactiveStyles()
    element.style.zIndex = baseZIndex + sliderItems.length
    element.classList.add("sliderActive")

    // move slider to force active into center
    //get width of slider item
    let sliderItemWidth = element.offsetWidth
    let transform3dX = (currentActiveIndex - Math.floor(sliderItems.length / 2)) * -sliderItemWidth
    sliderContainerDiv.style.transform = `translate3d(${transform3dX}px,0,0)`
}

const setInactiveStyles = () => {
    // clear previous styles
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.transform = ""
        sliderItems[i].style.opacity = 1
    }

    const marginPercent = 12
    const rotationDeg = 60 / sliderItems.length
    //const opacity = 1

    for (let i = 0; i < sliderItems.length; i++) {
        let translateX = `translateX(calc(${marginPercent}%*${currentActiveIndex - i}))`
        let translate3d = `translate3d(0,0,${-1 * Math.abs(currentActiveIndex - i) * 200}px)`
        let rotateY = `rotateY(${(currentActiveIndex - i) * rotationDeg}deg)`
        let translation = `${translate3d} ${rotateY}`

        if (i < currentActiveIndex) {// left items
            sliderItems[i].style.transform = translation
            sliderItems[i].style.zIndex = baseZIndex + i
            //sliderItems[i].style.opacity = opacity
        } else if (i > currentActiveIndex) { // right items
            sliderItems[i].style.transform = translation
            sliderItems[i].style.zIndex = baseZIndex + sliderItems.length - i
            //sliderItems[i].style.opacity = opacity
        }
    }
}

const showProjectInfo = (element) => {
    element.classList.add("sliderActiveOpen")
    isCurrentActiveOpen = true
    let picDiv = element.getElementsByClassName("projects-slider-item-pic")[0]
    console.log(picDiv)
    //picDiv.style.transition = ""
}

const hideProjectInfo = (element) => {
    element.classList.remove("sliderActiveOpen")
    isCurrentActiveOpen = false
    let picDiv = element.getElementsByClassName("projects-slider-item-pic")[0]
    //picDiv.style.transition = "opacity .2s ease-in-out"
    //setTimeout(()=>{picDiv.style.transition = ".2s ease-in-out"},0)
}

const main = () => {
    initProjectsInfo()

    // set center element to be the first active element
    setActive(currentActive, currentActiveIndex)

    // set listener on children
    for (let i = 0; i < sliderItems.length; i++) {
        // disable parent clicking when clicking the github link
        let gitHubLink = sliderItems[i].getElementsByClassName("fa-github")[0]
        gitHubLink?.addEventListener("click", (e) => {
            e.stopPropagation()
        })

        sliderItems[i].addEventListener("click", function () {
            // if the clicked element is the active element
            if (i === currentActiveIndex)
                if (!isCurrentActiveOpen)
                    showProjectInfo(this)
                else
                    hideProjectInfo(this)
            else
                setActive(this, i)
        })
    }

    // set listener on projects info exit button
    /*projectsInfoModalExitButton.addEventListener("click", function () {
        projectInfoModalDiv.style.visibility = "hidden"
        projectInfoModalDiv.style.opacity = 0
    })*/
}

main()