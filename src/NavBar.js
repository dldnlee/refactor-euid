import { Link, Outlet } from "react-router-dom";
import home from './assets/icons/home.svg';
import fullHome from './assets/icons/fullHome.svg';
import board from './assets/icons/file.svg';
import fullBoard from './assets/icons/fullFile.svg'; 
import location from './assets/icons/map.svg';
import fullLocation from './assets/icons/fullMap.svg';
import fullChat from './assets/icons/fullChat.svg';
import chat from './assets/icons/chat.svg';
import fullUser from './assets/icons/fullMy.svg';
import user from './assets/icons/my.svg';
import { useState } from "react";



export default function NavBar() {
  const [currPage, setCurrPage] = useState("홈");

  return (
    <>
      <nav className="fixed bottom-0 w-full bg-white flex items-center justify-center gap-12 list-none border-solid border-t-2 border-gray-100">
        <li>
          <Link to="/" className="flex flex-col items-center w-full" onClick={() => setCurrPage("홈")}>
            <img src={currPage === "홈" ? fullHome : home} alt="" />
            <p className="text-xs">홈</p>
          </Link>
        </li>
        <li>
          <Link to="/board" className="flex flex-col items-center w-full" onClick={() => setCurrPage("게시판")}>
            <img src={currPage === "게시판" ? fullBoard : board} alt="" />
            <p className="text-xs">게시판</p>
          </Link>
        </li>
        <li>
          <Link to="/map" className="flex flex-col items-center w-full" onClick={() => setCurrPage("내 근처")}>
            <img src={currPage === "내 근처" ? fullLocation : location} alt="" />  
            <p className="text-xs">내 근처</p>
          </Link>
        </li>
        <li>
          <Link to="/chat" className="flex flex-col items-center w-full" onClick={() => setCurrPage("채팅")}>
            <img src={currPage === "채팅" ? fullChat : chat} alt="" />
            <p className="text-xs">채팅</p>
          </Link>
        </li>
        <li>
          <Link to="/user" className="flex flex-col items-center w-full" onClick={() => setCurrPage("유저")}>
            <img src={currPage === "유저" ? fullUser : user} alt="" />
            <p className="text-xs">유저</p>
          </Link>
        </li>
      </nav>

      <Outlet />
    </>
    
  )
}