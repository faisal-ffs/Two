import React from 'react'
import KeysConceptImage  from "../images/KeysConceptImage.jpeg"
import state  from "../images/state.jpeg"
import events  from "../images/events.jpeg"


const concepts = [
  // {
  //   title:"Components",
  //   image:componentsImage,
    // description:"Concept with yout ui  into independent ,reusible pieces and thinks about"
  // },
  // {
  //   title:"state",
  //   image:stateImage,
  //   description:"state is a data  that may change over time  as it changes the yi should be updated "
  // },
  // {
  //   title:"Events",
  //   image:eventsImage,
  //   description:"Events  handlers are added via props  to (built-in)components"
  // },
];

function App(){
  return (
    <div>
      <header>
        <img src={KeysConceptImage} alt='MetalBadge with a Star'/>
        <h1>key react concepts</h1>
        <p>Selected key react concepts you should know about</p>
      </header>
      <ul id='concepts'>
        <li className='concepts'>
          <img src={concepts[0]} />
          <h2>TODO:Title</h2>
          <p>TODo:description</p>
        </li>
        <li className='concepts'>
          <img src={concepts[1]} />
          <h2>TODO:Title</h2>
          <p>TODo:description</p>
        </li>
        <li className='concepts'>
          <img src={concepts[2]} />
          <h2>TODO:Title</h2>
          <p>TODo:description</p>
        </li>
      </ul>
    </div>
  )
}
export default App;