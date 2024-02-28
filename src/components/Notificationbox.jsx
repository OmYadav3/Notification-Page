import React from "react";

const Notificationbox = (props) => {
  return (
    <div
      className={`m-2 cursor-pointer ${
        props.read ? "" : "bg-sky-100"
      } hover:bg-sky-50`}
      onClick={props.onClick}
    >
      <div className="main flex items-center ">
        <div className="img p-4">
          <img className="w-12 " src={props.image} alt="not found" />
        </div>
        <div className="flex flex-col sm:text-sm text-xs ">
          <div className="details px-6 flex items-center">
            <span className="font-bold hover:text-cyan-900">
              {props.username}
            </span>
            <span className="pl-2">{props.content}</span>
            <span className="pl-2 font-bold hover:text-cyan-900">
              {props.otherusername}{" "}
            </span>
            {props.img && (
              <div className="details pl-[2rem]">
                <img className=" w-10  " src={props.img} alt="not found"></img>
              </div>
            )}
            {props.read === false && (
              <span className="dot w-2 h-2 bg-red-500 rounded-lg ml-1"></span>
            )}
          </div>
          <div className="details px-6 flex">{props.time}</div>
        </div>
      </div>
      {props.msg && (
        <div className="details pl-[6.5rem] pr-8 py-4 sm:text-sm text-xs">
          <p className="border-2 p-2 ">{props.msg}</p>
        </div>
      )}
    </div>
  );
};

export default Notificationbox;
