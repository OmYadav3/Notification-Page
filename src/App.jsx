import React from 'react'
import Notificationbox from './components/Notificationbox'
import image1 from '/image1.webp';
import image2 from '/image2.webp';
import image3 from '/image3.webp';
import image4 from '/image4.webp';
import image5 from '/image5.webp';
import image6 from '/image6.webp';
import image7 from '/image7.webp';
import image8 from '/image8.webp';

const App = () => {
  return (
    <div>
      <div className="main border-2 my-3 mx-96">
        <div className="heading flex justify-around gap-[18rem] py-4">
          <div className='flex gap-4 items-center'>
           <div className='font-bold md:text-3xl '>Notifications</div>
           <div>Number</div> 
          </div>
          <div>
            Mark all as read
          </div>

        </div>
      <Notificationbox
      image={image5}
      username={"Mark Webber"}
      content={"react to your recent post"}
      otherusername={"My first tournament today!"}
      time = {"1m ago"}
      />

      <Notificationbox
      image={image1}
      username={"Angela grey"}
      content={"followed you"}
      otherusername={""}
      time = {"5m ago"}
      />

      <Notificationbox
      image={image3}
      username={"Jacob Thompson"}
      content={"has joined your group"}
      otherusername={"Chess Club"}
      time = {"1 day ago"}
      />

      <Notificationbox
      image={image7}
      username={"Rizky Hasanuddin"}
      content={"sent you a private message"}
      otherusername={""}
      time = {"5 days ago"}
      msg ={"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."}
      />

      </div>
    </div>
  )
}

export default App

// Notifications 3

// Mark all as read

// Mark Webber reacted to your recent post My first tournament today!
// 1m ago

// Angela Gray followed you
// 5m ago

// Jacob Thompson has joined your group Chess Club
// 1 day ago

// Rizky Hasanuddin sent you a private message
// 5 days ago
// Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
// I'm already having lots of fun and improving my game.

// Kimberly Smith commented on your picture
// 1 week ago

// Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
// 2 weeks ago

// Anna Kim left the group Chess Club
// 2 weeks ago