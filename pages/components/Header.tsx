import {AppBar, Button, Toolbar} from "@mui/material";
import Link from "next/link";



function Header() {
    return (
        <div>
            <AppBar position="fixed" sx={{ background: '#76B900' }}>
                <Toolbar>
                    <Link href="/" passHref style={{marginRight:'60px'}}>
                        <Button variant="text" size="large" disableRipple={true} sx={{ background: '#76B900', color:'white', fontWeight: 'bold' }}>Daten</Button>
                    </Link>
                    <Link href="/document" passHref>
                        <Button variant="text" size="large" disableRipple={true} sx={{ background: '#76B900', color:'white', fontWeight: 'bold'  }}>Dokument Erzeugen</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;