import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Button, Grid } from "@mui/material";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const Quixote = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>

      <Text style={styles.subtitle}>
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Text>
    </Page>
  </Document>
);

const Print = ({ preview }) => {
  return (
    <PDFViewer>
      <Document>
        <Page size="A4">
          <Text fixed>~ Created with react-pdf ~</Text>
          <Text>Don Quijote de la Mancha</Text>
          <Text>Miguel de Cervantes</Text>
          {preview ? <Image src={preview} /> : <Text>no image</Text>}

          <Text>
            Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
            D. Quijote de la Mancha
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Print;
