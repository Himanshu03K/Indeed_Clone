import { AppBar, Toolbar, styled , Button} from "@mui/material";
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none',
        
        
    }
   
   
})


const Header = () => {
    const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";

    return (
        <StyledAppBar >
            <Toolbar  style={{

        width:"100vw",            
        position: "sticky",
        top: 0,
        display:'flex',
        justifyContent:'left',
        alignContent:'sp'
      }} >
                <Link to={routePath.home}>
                    <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />
                </Link>
                <Link to={routePath.create} > <div style={{width:'300%'}}>Post a job</div></Link>
                <Link to={routePath.posts}><div style={{width:'300%', margin:'120%'}}>Find jobs</div></Link>
                
                <Button variant="contained" style={{margin: '75%'}}>Login </Button>

            </Toolbar>

        </StyledAppBar>
    )
}

export default Header;