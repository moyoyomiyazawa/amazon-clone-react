import React from 'react'

export const Header = () => {
  return (
    <div className='h-8 flex bg-black'>
      <img className='' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='header-logo' />
      <form>
        <input className="align-middle m-1" type="search"/>
      </form>
    </div>
  );
}
