import React from "react";

const Notificationbox = (props) => {
  return (
    <div className="border-2 m-2">
      <div className="main flex items-center ">
        <div className="img">
          <img  className = "w-20 "src={props.image} alt="not found" />
        </div>
        <div className="flex flex-col">
          <div className="details px-6 flex items-center">
            <span className="font-bold">{props.username}</span>
            <span className="pl-2">{props.content}</span>
            <span className="pl-2 font-bold">{props.otherusername} </span>
            <span className="dot w-2 h-2 bg-red-500 rounded-lg ml-1"></span>
          </div>
          <div className="details px-6 flex">{props.time}</div>
          {(props.msg) && (<div className="details px-6 py-4 ">
            <p className="border-2 p-2 ">
              {props.msg}
            </p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Notificationbox;
