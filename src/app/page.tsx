import { Box, Button, Typography } from "@mui/material";


export default function Page() { 
  // const router = useRouter()

  return (
  <Box>
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Typography variant='h2'>
        Welcome to Creevo 
      </Typography>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      {/* <Button
        onClick={() => {}} 
      >
        Join the Waitlist
      </Button> */}
    </Box>
  </Box>
  )
}