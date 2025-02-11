import { Container, Typography } from "@mui/material";

export default function Page() {
    return ( 
        <Container maxWidth='laptop' sx={ { marginTop: '2rem', padding: '4rem' }}>
                <Typography variant="h4">プライベート！</Typography>   
        </Container>
    )
}