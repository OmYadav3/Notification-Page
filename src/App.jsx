import React, { useState } from "react";
import Notificationbox from "./components/Notificationbox";
import image1 from "/image1.webp";
import image2 from "/image2.webp";
import image3 from "/image3.webp";
import image4 from "/image4.webp";
import image5 from "/image5.webp";
import image6 from "/image6.webp";
import image7 from "/image7.webp";
import image8 from "/image8.webp";

const App = () => {
  const [notifications, setNotifications] = useState({
    readMeassages: [1, 2, 3, 4],
    unReadMeassages: [ 5, 6, 7]
  });

const handleMarkAllRead = () =>{

  setNotifications(prevState => ({
    ...prevState,
    readMeassages: [...prevState.readMeassages, ...prevState.unReadMeassages],
    unReadMeassages: []
  }));
}
const handleMarkAsRead = (index) =>{

  setNotifications(prevState => ({
    ...prevState,
    readMeassages: [...prevState.readMeassages, index],
    unReadMeassages: prevState.unReadMeassages.filter(item => item !== index)
  }));
}



  return (
    <div>
      <div className="main border-2 my-20 sm:mx-80 mx-4">
        <div className="heading flex sm:justify-around sm:gap-[24rem] gap-[17rem] py-4">
          <div className="flex gap-4 items-center">
            <div className="font-bold sm:text-3xl pl-2 ">Notifications</div>
            <div className="cursor-pointer bg-cyan-900 text-white px-[0.6rem] py-[0.1rem]">
              {notifications.unReadMeassages.length}
            </div>
          </div>
          <div className="cursor-pointer " onClick={handleMarkAllRead}>Mark all as read</div>
        </div>
        
        <Notificationbox 
        onClick={()=>{handleMarkAsRead(7)}}
          read={
            notifications.readMeassages.find((element) => element === 7)
              ? true
              : false
          }
          image={image5}
          username={"Mark Webber"}
          content={"react to your recent post"}
          otherusername={"My first tournament today!"}
          time={"1m ago"}
        />

        <Notificationbox
        onClick={()=>{handleMarkAsRead(6)}}
          read={
            notifications.readMeassages.find((element) => element === 6)
              ? true
              : false
            
          }
          image={image1}
          username={"Angela grey"}
          content={"followed you"}
          otherusername={""}
          time={"5m ago"}
        />

        <Notificationbox
        onClick={()=>{handleMarkAsRead(5)}}
          read={
            notifications.readMeassages.find((element) => element === 5)
              ? true
              : false
          }
          image={image3}
          username={"Jacob Thompson"}
          content={"has joined your group"}
          otherusername={"Chess Club"}
          time={"1 day ago"}
        />

        <Notificationbox
        onClick={()=>{handleMarkAsRead(4)}}
          read={
            notifications.readMeassages.find((element) => element === 4)
              ? true
              : false
          }
          image={image7}
          username={"Rizky Hasanuddin"}
          content={"sent you a private message"}
          otherusername={""}
          time={"5 days ago"}
          msg={
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
          }
        />

        <Notificationbox
        onClick={()=>{handleMarkAsRead(3)}}
          read={
            notifications.readMeassages.find((element) => element === 3)
              ? true
              : false
          }
          image={image4}
          username={"Kimberly Smith"}
          content={"commented on your picture"}
          otherusername={""}
          time={"1 week ago"}
          img={image8}
        />

        <Notificationbox
        onClick={()=>{handleMarkAsRead(2)}}
          read={
            notifications.readMeassages.find((element) => element === 2)
              ? true
              : false
          }
          image={image6}
          username={"Nathan Peterson"}
          content={"reacted to your recent post 5"}
          otherusername={"end-game strategies to increase your win rate"}
          time={"2 weeks ago"}
        />

        <Notificationbox
        onClick={()=>{handleMarkAsRead(1)}}
          read={
            notifications.readMeassages.find((element) => element === 1)
              ? true
              : false
          }
          image={image2}
          username={"Anna Kim"}
          content={"left the group"}
          otherusername={"Chess Club"}
          time={"2 weeks ago"}
        />
      </div>
    </div>
  );
};

export default App;
