import React from "react";

const Notificationbox = (props) => {
  return (
    <div
      className={`m-2 cursor-pointer ${
        props.read ? "" : "bg-sky-100"
      } hover:bg-sky-50`}
      onClick={props.onClick}
    >
      <div className="main flex items-center break-words ">
        <div className="img p-4">
          <img className="sm:min-w-12 sm:max-w-12  min-w-8 max-w-8" src={props.image} alt="not found" />
        </div>
        <div className="flex flex-col sm:text-sm text-[0.6rem] ">
          <div className="details sm:px-6 items-center break-words max-w-screen">
            <span className="font-bold hover:text-cyan-900 min-w-max">
              {props.username}
            </span>
            <span className="pl-2 min-w-max">{props.content}</span>
            <span className="pl-2 font-bold hover:text-cyan-900 min-w-max">
              {props.otherusername}
            </span>
            {props.read === false && (
              <span className="dot w-2 h-2 bg-red-500 rounded-lg ml-1"></span>
              )}
          </div>
          <div className="details sm:px-6 flex">{props.time}</div>
        </div>
              {props.img && (
                <div className="details ">
                  <img className=" w-10  " src={props.img} alt="not found"></img>
                </div>
              )}
      </div>
      {props.msg && (
        <div className="details sm:pl-[6.5rem] pl-20 sm:pr-8 sm:py-4 sm:text-sm text-[0.5rem]">
          <p className="border-2 p-2 ">{props.msg}</p>
        </div>
      )}
    </div>
  );
};

export default Notificationbox;
