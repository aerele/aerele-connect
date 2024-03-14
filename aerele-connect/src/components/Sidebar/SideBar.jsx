import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './SideBar.css'

export const SideBar = () => {
return (
    <>
        <div>
        <nav id="sidebar" className="bg-dark vh-100 w-100 d-flex align-items-center justify-content-center border border-light-subtle border-bottom-0 border-top-0 border-start-0">
        <div className="sidebar-list list-group list-group-flush d-flex justify-content-center">
          <div className='d-flex align-items-center justify-content-center ps-2'>
            <HomeIcon  sx={{color:'white'}}/>
            <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Home</a>
          </div>
        <div className='d-flex align-items-center justify-content-center mt-3 ps-2'>
        <ExploreIcon sx={{ color: 'white'}}/>
          <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Explore</a>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 ps-2 '>
            <NotificationsIcon  sx={{ color: 'white'}}/>
          <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Notifications</a>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 ps-2'>
        <ForumIcon  sx={{ color: 'white'}}/>
          <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Messages</a>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 ps-2'>
        <Person2Icon sx={{ color: 'white'}}/>
          <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Profile</a>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 ps-2'>
        <SettingsIcon  sx={{ color: 'white'}}/>
          <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Settings</a>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 ps-2'>
        <LogoutIcon  sx={{ color: 'white'}}/>
          <a href="#" className="link-primary icon-link-hover list-group-item list-group-item-action bg-dark text-light border-0 fs-3">Logout</a>
        </div>
        </div>
      </nav>

        </div>
    </>
)
}