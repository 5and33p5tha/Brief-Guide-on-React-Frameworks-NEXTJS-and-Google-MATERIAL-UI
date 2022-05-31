import PaidIcon from "@mui/icons-material/Paid";
import { Button, Container, Typography } from "@mui/material";
//In a nutshell, Material-UI is an open-source project that features React components that implement Google's Material Design.
const first = () => {
  return (
    <>
      <PaidIcon />
      {/* This Is To Import Material Ui Icons Named PaidIcon */}

      <Container>
        {/* This container is NOT A BOOTSTRAP BUT A MATERIAL UI ELEMENT


      Typography is used for text related components. */}

        <Typography variant="h1">
          This is a text using typography variant h1
        </Typography>

        <Typography variant="body2">
          This is a text using typography variant body2
        </Typography>

        <Typography noWrap>
          This is a text is actually really long but noWrap Made it look like
          this. See The End. This is a text is actually really long but noWrap
          Made it look like this. See The End. This is a text is actually really
          long but noWrap Made it look like this. See The End. This is a text is
          actually really long but noWrap Made it look like this. See The End.
          This is a text is actually really long but noWrap Made it look like
          this. See The End. This is a text is actually really long but noWrap
          Made it look like this. See The End. This is a text is actually really
          long but noWrap Made it look like this. See The End. This is a text is
          actually really long but noWrap Made it look like this. See The End.
          This is a text is actually really long but noWrap Made it look like
          this. See The End. This is a text is actually really long but noWrap
          Made it look like this. See The End.
        </Typography>

        <Typography variant="button">
          This is button using typographyClick Me
        </Typography>

        <Button color="secondary" variant="contained">
          This is a normal Button using contained
        </Button>

        <Button color="primary" variant="outlined">
          This is a normal Button using outlined
        </Button>
      </Container>
    </>
  );
};

export default first;
