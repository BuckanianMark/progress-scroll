import Scrollbar from 'smooth-scrollbar';
import {Power1, gsap} from 'gsap';
import './App.scss'
import { myProjects } from './projects';
import {ModalPlugin} from './plugins/scroll-disable'


const constants = {
  SIZES:{
    MENU:{
      X:5,
      Y:40
    }
  }
}

function App() {

  let verticalScrollbar;
  
 
  window.addEventListener('load', () => {
    const content = document.querySelector('.content')
    const scrollbar = document.querySelector('.scroll-bar')
    const navContainer = [].slice.call(document.querySelectorAll(".nav > li"))
    const scrollMenu = document.querySelector('.scroll-menu')
    const side = document.querySelector('.side');

    Scrollbar.use(ModalPlugin);
     verticalScrollbar =  Scrollbar.init(content,{
      dumping:0.1,
      delegateTo:document
    });
    verticalScrollbar.setPosition(0,0);
    verticalScrollbar.track.yAxis.element.remove()
    verticalScrollbar.track.xAxis.element.remove()
    verticalScrollbar.updatePluginOptions("modal",{open:true})
    verticalScrollbar.addListener(({offset}) => {
        const {clientHeight,scrollHeight} = verticalScrollbar.containerEl;
        const progress = Number.parseInt(
          ((offset.y/ (scrollHeight-clientHeight)) * 360).toFixed(0)
        )
        const rotatePercentage = ((progress * (333 - 225))/ 360 + 225).toFixed(0)
        gsap.to(scrollbar,{
          transform:`rotate(${rotatePercentage}deg)`
        })
    })



    const initMenus =() => {
      const {X,Y} = constants.SIZES.MENU;
      gsap.to(scrollMenu,{
        delay:0.8,
        autoAlpha:1,
        ease:Power1.easeOut
      })
      navContainer.forEach((navItem,index) => {
        const tl = gsap.timeline();
        tl.to(navItem,{
          transform:`translate(-${X * index}px,${Y * index}px)`,
          duration:0
        })
        .to(navItem,{
          stagger:0.2,
          delay:0.8,
          autoAlpha:1,
          ease:Power1.easeOut
        })
        .then(() => verticalScrollbar.updatePluginOptions("modal",{open:false}));
        navItem.addEventListener("click",() => {
          const scrollContent = [].slice.call(
            document.querySelector('.scroll-content').querySelectorAll(".item")
          )
          const scrollItem = scrollContent.find(
            ({dataset}) => dataset.id === navItem.dataset.id
          )
          onMenuSelect(navItem);
          verticalScrollbar.scrollIntoView(scrollItem,{
            onlyScrollIfNeeded:true
          })
        })
      })
    }
    const onMenuSelect = (selectedItem) => {
        const {X,Y} = constants.SIZES.MENU;
        toggleActive(selectedItem)

        for(const [i,navItem] of navContainer.entries())
          {
            const id = Number.parseInt(selectedItem.dataset.id,10);
            const index = i + 1;

            const currentItemYPos = gsap.getProperty(navItem,"translateY")
            const seletedItemYPos = gsap.getProperty(selectedItem,"translateY")

            const translateSteps = seletedItemYPos / Y;
            const translateValue = translateSteps * Y;

            gsap.to(navItem,{
              transform : `translate(
              ${index < id ? -(X*(id - index)) : X +(id - index)}px
              ${currentItemYPos - translateValue}px
              )`,
              duration:0.8,
              ease:Power1.easeOut
            })
          }
          const selectedProject = myProjects.find(project => project.id === parseInt(selectedItem.dataset.id, 10));
          if (selectedProject) {
              updateSideContent(selectedProject);
          }
    }
    const updateSideContent = (project) => {
      const side = document.querySelector('.side');
      const title = side.querySelector('h1');
      const text = side.querySelector('.text p');
    
  
      title.textContent = project.mainTech;
      text.textContent = project.description;
  };
  
    const toggleActive = (item) => {
      navContainer.forEach((n) => {
        if(n.dataset.id === item.dataset.id){
          item.classList.add("active")
        }else
        {
          n.classList.remove("active")
        }
      })
   
    }
    const generateList = () => {
      const scrollContent = document.querySelector(".scroll-content");
      myProjects.forEach(item => scrollContent.appendChild(createItem(item)))
      scrollContent.classList.add(myProjects % 2 === 0 ? 'even':'odd');
      if(scrollContent.children.length === myProjects.length)
        {
          gsap.to(scrollContent,{
            autoAlpha:1,
            delay:1
          })
        }
    }
    const createItem = (item) => {
      const itemContainer = document.createElement('div')
      const heading = document.createElement('div')
      const projectId = document.createElement('p')
      const title = document.createElement('div')
      const smallDescription = document.createElement('div')
      const links = document.createElement('span')
      const picture = document.createElement('div')
      // const techStacks = document.createElement('div')
      // const tech = document.createElement('span')

      itemContainer.classList.add('item');
      smallDescription.classList.add('shortDescription')
      projectId.classList.add('projectId')
      heading.classList.add('heading');
      title.classList.add('title');
      links.classList.add('links');
      picture.classList.add('picture');

      if(item.image)
        {
          const img = document.createElement('img')
          img.src = item.image;
          picture.appendChild(img)
        }
        title.textContent = item.name;
        smallDescription.textContent = item. shortDescription;
        projectId.textContent = item.id;
        const linkAnchor = document.createElement('a');
        linkAnchor.href = item.web;
        const linkIcon = document.createElement('i');
        linkIcon.classList.add('fa-solid', 'fa-globe');

        linkAnchor.appendChild(linkIcon);
        links.appendChild(linkAnchor);
        title.appendChild(projectId)
        heading.appendChild(title)
        heading.appendChild(links)
        itemContainer.appendChild(heading)
        itemContainer.appendChild(picture)
        itemContainer.appendChild(smallDescription)
        // eslint-disable-next-line no-prototype-builtins
        if(item.hasOwnProperty('navId')){
          itemContainer.setAttribute('data-id',item.navId)
        }
        return itemContainer
    };
    const animateItems = () => {
      gsap.to(side.children,{
        stagger:0.15,
        delay:1,
        y:0,
        autoAlpha:1
      })
    }
    initMenus()
    generateList()
    animateItems()
    // let options = {
    //   root:verticalScrollbar.containerEl,
    //   rootMargin:'0px',
    //   threshhold:0.5
    // };
  //   let observer = new IntersectionObserverEntry((entries,) => {
  //     entries.forEach((entry) => {
  //       if(entry.isIntersecting){
  //         const selection = navContainer.find(
  //           ({dataset}) => dataset.id === entry.target.dataset.id
  //         )
  //         // eslint-disable-next-line no-extra-boolean-cast
  //         if(Boolean(selection)){
  //           onMenuSelect(selection)
  //         }
  //       }
      
  //     })
  //   },options)
  //   verticalScrollbar.containerEl.querySelectorAll(".item").forEach((item) => {
  //     observer.observe(item)
  //   })
  })

      //button functions
      function scrollUp() {
        const currentOffset = verticalScrollbar.offset.y;
        verticalScrollbar.scrollTo(0, currentOffset - 100, 500); 
      }
      
      function scrollDown() {
        const currentOffset = verticalScrollbar.offset.y;
        verticalScrollbar.scrollTo(0, currentOffset + 100, 500); 
      }
      
  return (
    <>
      <div className="main">
        <div className="scroll-menu">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-2-overlay"></div>
          <div className="scroll-bar"></div>
          <div className="overlay"></div>
        </div>
        <nav>
          <ul className="nav">    
            <li data-id='2'><a>React</a></li>   
            <li data-id='1'><a>Angular</a></li>
          </ul>
        </nav>
        <div className="side">
          <h1>React</h1>
          <div className="text">
            <div className="line"></div>
            <p>npm create vite@latest my-project, npx create-react-app my-project</p>
          </div>
        
        </div>
        <section className='content'> 
       
        </section>
        <button className="scroll-btn scroll-up" onClick={scrollUp}><i className='fa fa-chevron-up'></i></button>
        <button className="scroll-btn scroll-down" onClick={scrollDown}><i className='fa fa-chevron-down'></i></button>
      </div>
    </>
  )
}

export default App
