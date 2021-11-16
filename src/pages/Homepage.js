import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  const [isOpen, setIsopen] = useState(false)

  const toggle = () => {
    setIsopen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {console.log('Homepage: ', isOpen)}
      <Header toggle={toggle} isOpen={isOpen} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        fugit officiis necessitatibus hic? Inventore, accusamus quasi reiciendis
        harum, laudantium repellendus facilis expedita aliquid nam maxime odit
        hic eum optio? Asperiores! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Tempora non repellat earum culpa quia expedita dolorem
        placeat quae, rerum dignissimos harum rem temporibus dolore.
        Perspiciatis accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Animi tempora architecto, eligendi quae
        aliquid quas minus eos minima excepturi eum ab? Necessitatibus sapiente
        quam eveniet omnis perferendis officiis molestiae quibusdam!Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Reiciendis fugit officiis
        necessitatibus hic? Inventore, accusamus quasi reiciendis harum,
        laudantium repellendus facilis expedita aliquid nam maxime odit hic eum
        optio? Asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora non repellat earum culpa quia expedita dolorem placeat
        quae, rerum dignissimos harum rem temporibus dolore. Perspiciatis
        accusamus neque saepe nisi est? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Animi tempora architecto, eligendi quae aliquid quas
        minus eos minima excepturi eum ab? Necessitatibus sapiente quam eveniet
        omnis perferendis officiis molestiae quibusdam!
      </p>
    </>
  )
}

export default Homepage
