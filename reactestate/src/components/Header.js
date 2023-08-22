import React from 'react'

export default function     () {
  return (
    <div>
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
             <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer"/>
        </div> 
        <div>
          <ul className="flex">
            <li>Home</li>
            <li>Offers</li>
            <li>SignIn</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
