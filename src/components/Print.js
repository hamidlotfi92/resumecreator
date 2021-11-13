import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Button, Grid } from "@mui/material";

const styles = StyleSheet.create({
  header: {
    display: "grid",

    justifyContent: "center",
    marginTop: "4em",
  },
  image: {},
  text: {
    dir: "rtl",
  },
});

const Quixote = ({
  preview,
  skillsArray,
  personInfo,
  educationArray,
  employmentArray,
}) => (
  <Document>
    <Page style={styles.body}>
      <div>
        <div style={styles.header}>
          <Image src={preview} alt="user avatar" />
          <Text style={styles.text}>{personInfo.firstName}</Text>
        </div>
      </div>
    </Page>
  </Document>
);

const Print = ({
  preview,
  skillsArray,
  personInfo,
  educationArray,
  employmentArray,
}) => {
  return (
    <Grid
      sx={{
        "& iframe": {
          width: "100%",
          height: "40em",
        },
      }}
      container
    >
      <PDFViewer>
        <Quixote
          styles={{ width: "100%" }}
          preview={preview}
          skillsArray={skillsArray}
          personInfo={personInfo}
          educationArray={educationArray}
          employmentArray={employmentArray}
        />
      </PDFViewer>
    </Grid>
  );
};

export default Print;
