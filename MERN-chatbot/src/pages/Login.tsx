import { Box, Button, Typography } from '@mui/material'
import Customizedinput from '../components/shared/Customizedinput'
import { SlLogin } from "react-icons/sl";
import { UseAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const auth = UseAuth();
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      toast.loading("Signing in",{id:"login"});
      await auth?.login(email,password);
      toast.success("Signed in successfully",{id:"login"});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Signing in failed",{id:"login"});
    }
    // console.log("Email:", email, "Password:", password);

  }
 

  return (
    
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{md:"flex",sm:"none",xs:"none"}}>
    <img src="airobot.png" alt="Robot" style={{width:"360px"}}/>
      </Box>
      <Box display={"flex"} 
      flex={{xs:1 , md:0.5}} 
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      ml={"auto"}
      mt={16}
      >
        <form
        onSubmit={(handleSubmit)}
         style={{
          margin:"auto",
          padding:"30px",
          boxShadow: "10px 10px 20px #000",
          borderRadius:"10px",
          border: "none",


        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: " center",
            

            }}>
              <Typography variant='h4' 
              textAlign={"center"} 
              padding={2}
              fontWeight={600}>Login
                
              </Typography>

              <Customizedinput type='email' name='email' label='Email'/>
              <Customizedinput type='password' name='password' label='Password'/>
              <Button type='submit' 
              sx={{px:2,
              py:1,
              mt:2,
              width:"400px",
              borderRadius:2,
              bgcolor:"#002147",
               color:"white",
               ":hover":{
                bgcolor:"#2a52be",
                color:"white"
               }}}>Login <SlLogin style={{marginLeft:"10px"}}/></Button>
          </Box>
        </form>
        </Box>
    </Box>
  )
}

export default Login