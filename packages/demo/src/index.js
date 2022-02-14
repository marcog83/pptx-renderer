import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  PPTX, Document,
  Notes,
  Section,
  Shape,
  Slide,
  SlideNumber,
  Text
} from "pptx-renderer";
import { Viewer } from './viewer';


const wee = "wee";

const pptx = PPTX.render(
  <Document
    author="Brent Ely"
    company="S.T.A.R. Laboratories"
    revision="15"
    subject="Annual Report"
    title="PptxGenJS Sample Presentation"
    layout="LAYOUT_16x9"
  >
    <Slide>
      <Notes>this is a note</Notes>
      <SlideNumber
        x="1.0"
        y="5%"
        color="FF0000"
        fontFace="Calibri"
        fontSize="20"
      />
      <Shape type="sun" x="90%" y="0" w={1} h={1} fill="FF0000">
        sun
        <Text x={10} y={20} bold color="FFCC00" fontSize={6}>
          wee2
        </Text>
      </Shape>
      <Shape type="sun" x="90%" y="2" w={1} h={1} fill="FF0000" />
      <Text x={1} y={2} w={4} h={3} margin={5} fill={"FF0000"} color="FFCC00">
        {wee}
        text 1<Text bold>wee2</Text>
      </Text>
    </Slide>
    <Slide>
      <SlideNumber
        x="2"
        y="5%"
        color="FF0000"
        fontFace="Calibri"
        fontSize="20"
      />
      <Text x={0} y={0} w={4} h={1} bold>
        slide 2
      </Text>
    </Slide>
  </Document>
);

const App = () => {
const [uuid,setUUID]=useState();
  const handleClick = () => {
    async function sendData(url, data) {
      const formData = new FormData();

      for (const name in data) {
        formData.append(name, data[name]);
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      }).then(r=>r.json());

      console.log("WEEE",response)
      setUUID(response.id); 
    }
    pptx.write("blob")
      .then((data) => {
        
        sendData("http://localhost:8012/upload", { pptx: data })
      })
      .catch((err) => {
        console.error(err);
      });


    //  pptx.writeFile({ fileName: "Browser-PowerPoint-Demo.pptx" });
  };



  return (
    <>
      <button onClick={handleClick}>CLICK TO DOWNLOAD</button>
      {uuid && <Viewer id={uuid}></Viewer>}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



