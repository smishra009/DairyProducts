import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
interface props{
    message: string
}
export default function ProgressComponent({message}:props){
    return <Backdrop open={true} invisible={true}>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <Typography variant="h6">{message}</Typography>
        <CircularProgress size={30} color="secondary"/>
    </Box>
    </Backdrop>
    
}