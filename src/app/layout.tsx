import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { AppProps } from "next/dist/pages/_app"
import MenuIcon from '@mui/icons-material/Menu';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Creevo.app
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}