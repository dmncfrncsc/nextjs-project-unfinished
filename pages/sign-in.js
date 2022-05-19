import { Box, Button , Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function SignIn() {
    const router = useRouter();
    const gotoRegister = ()=> {
        router.push("/register");
    }
    const style ={
        linkStyle:{
            cursor:"pointer",
            color: "#6134eb"
        }
    }
  return (
    <Box sx={{
        width:"100vw", 
        height: "100vh", 
        display:"flex",
        flexDirection:"column", 
        justifyContent:"Center", 
        alignItems:"Center"}}>
            
            <Box>
                <Typography variant="h5" > Please Sign In</Typography>
            </Box>
        <Paper elevation ={3} sx={{
            padding: "24px", 
            display:"flex", 
            flexDirection:"column",
            marginTop:"12px"}}>

            <TextField label="Email Address" 
            name="email" 
            type="email"/>

            <TextField label="Password" 
            type="password" 
            name="password" 
            sx={{marginTop:"12px"}}

            />
            <Button variant="contained" sx={{marginTop:"12px"}}>
            SIGN IN
            </Button>

            <Box sx={{
                display:"flex", 
                justifyContent:"right", 
                marginTop:"12px"
                }}>

                <Typography 
                    variant="subtitle2" 
                    onClick={gotoRegister} 
                    sx={style.linkStyle}>

                    Create new account
                </Typography>
            </Box>
            
        </Paper>
    </Box>
  )
}