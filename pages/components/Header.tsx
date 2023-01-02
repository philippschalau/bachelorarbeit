import {AppBar, Button, Toolbar} from "@mui/material";
import Link from "next/link";


function Header() {
    return (
        <div>
            <AppBar position="relative" sx={{background: '#76B900', zIndex: '1201'}}>
                <Toolbar>
                    <Link href="/" passHref style={{marginRight: '60px'}}>
                        <Button variant="text" size="large" disableRipple={true}
                                sx={{background: '#76B900', color: 'white', fontWeight: 'bold'}}>Daten</Button>
                    </Link>
                    <Link href="/createDocument" passHref>
                        <Button variant="text" size="large" disableRipple={true}
                                sx={{background: '#76B900', color: 'white', fontWeight: 'bold'}}>Dokument
                            Erzeugen</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;