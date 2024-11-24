import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
interface props{
    checked:boolean,
    onChange:()=>void
}
const midLinks=[
    {title: 'catalog', path:'/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]
const rightLinks=[
    {title: 'login', path:'/catalog'},
    {title: 'register', path: '/about'},
]
export default function header({checked,onChange}:props){
    return<>
    <AppBar>
        <Toolbar sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography variant="h5">
                Aviral Dhara
            </Typography>
            <Switch
            checked={checked}
            onChange={onChange}
            />
            </Box>
            <Box>
            <List sx={{display:'flex'}}>
                {
                    midLinks.map(({title,path})=><ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={{color:'inherit',fontFamily:'sans-serif','&:hover':{
                        color: 'grey'
                    },'&.active':{
                        color: 'lightgreen'
                    }}}>
                        {title.toUpperCase()}
                    </ListItem>)
                }
            </List>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
            <IconButton sx={{color:'inherit'}}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart/>
                </Badge>
            </IconButton>
            <List sx={{display:'flex'}}>
                {
                    rightLinks.map(({title,path})=><ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={{color:'inherit',fontFamily:'sans-serif'}}>
                        {title.toUpperCase()}
                    </ListItem>)
                }
            </List>
            </Box>
        </Toolbar>
    </AppBar>
    </>
}