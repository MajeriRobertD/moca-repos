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
    color: "#8b8a9f",
    border: 0,
    margin: 0,
    bottom: 0,
    background: "#120417",
    position: 'absolute',
    
    width: '100%',
    height: 115,
    fontFamily: "system-ui",
    overflow: 'hidden',
   
    
  },
  infoMedia: {
    color: '#583c51'
  },
  infoMediaFacebook: {
    color: '#3069ec'
  },
  infoMediaInstagram: {
    color: '#f876de',
  },
  infoMediaLinkIn: {
    color: '#0f63a7',
  },
  infoMediaGitHub: {
    color: '#ffffff',
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
                {/* {" "} */}
                Contact{" "}
              </Box>
              {/* <Box m={1}>Moca Repos</Box> */}
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Box m={1}>
                  <PhoneIcon className={classes.infoMedia}></PhoneIcon>
                </Box>
                <Box m={1} className={classes.infoMedia}>0733229530</Box>
                <Box m={1}>
                  <EmailIcon className={classes.infoMedia}></EmailIcon>
                </Box>
                <Box m={1} className={classes.infoMedia}>moca.repos@yahoo.com</Box>
             
              </Grid>
              {/* <Grid container direction="row" alignItems="center" spacing={1}>
                <Box m={1}>
                  <EmailIcon></EmailIcon>
                </Box>
                <Box m={1}>moca.repos@yahoo.com</Box>
              </Grid> */}
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
                <Link href="https://www.facebook.com" target="_blank" className={classes.infoMediaFacebook}>
                  <FacebookIcon></FacebookIcon>
                </Link>
                <Link href="https://www.instagram.com" target="_blank" className={classes.infoMediaInstagram}>
                  <InstagramIcon></InstagramIcon>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" className={classes.infoMediaLinkIn}>
                  <LinkedInIcon></LinkedInIcon>
                </Link>
                <Link href="https://www.github.com" target="_blank" className={classes.infoMediaGitHub}>
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
            <Box>Moca Repos 2021. All rights reserved</Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default FooterComponent;