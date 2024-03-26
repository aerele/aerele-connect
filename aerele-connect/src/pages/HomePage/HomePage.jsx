import { Header } from "../../components/Header/Header";
import { MainBar } from "../../components/MainBar/MainBar";
import { RightBar } from "../../components/RightBar/RightBar";
import { SideBar } from "../../components/Sidebar/SideBar";
import { SideBar1 } from "../../components/Sidebar/SideBar1";
// import './HomePage.css'

export const HomePage = () => {
  return (
    <>
      <div className="home-page-main vw-100 vh-100 bg-dark">
        <div>
          <Header />
        </div>
        <div className="content d-flex flex-row">
          <div className="sidebar-box col-3 vh-100 position-sticky start-0 top-0 d-sm-block d-md-block d-none">
          {/* <SideBar1/> */}
            <SideBar />
          </div>
          <div className="mainbar-box col-lg-6 col-sm-9 col-md-9">
            <MainBar />
          </div>
          {/* <div className="rightbar-box col-3 vh-100 position-sticky end-0 top-0">
            <RightBar />
          </div> */}
        </div>
      </div>
    </>
  );
};
