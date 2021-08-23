import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import CopyrightIcon from "@material-ui/icons/Copyright";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    color: "white",
    border: 0,
    margin: 0,
    background: "black",
  },
  lastGrid: {
    marginBottom: "10px",
  },
});

function FooterComponent() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Box m={2}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} m={1}>
                {" "}
                Contact{" "}
              </Box>
              <Box m={1}>Moca Repos</Box>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Box m={1}>
                  <PhoneIcon></PhoneIcon>
                </Box>
                <Box m={1}>0733229530</Box>
              </Grid>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Box m={1}>
                  <EmailIcon></EmailIcon>
                </Box>
                <Box m={1}>moca.repos@yahoo.com</Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} m={1}>
                {" "}
                Follow me{" "}
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Link href="https://www.facebook.com" target="_blank">
                  <FacebookIcon></FacebookIcon>
                </Link>
                <Link href="https://www.instagram.com" target="_blank">
                  <InstagramIcon></InstagramIcon>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <LinkedInIcon></LinkedInIcon>
                </Link>
                <Link href="https://www.github.com" target="_blank">
                  <GitHubIcon></GitHubIcon>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            className={classes.lastGrid}
          >
            <CopyrightIcon></CopyrightIcon>
            <Box>Copyright 2021. All rights reserved</Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default FooterComponent;