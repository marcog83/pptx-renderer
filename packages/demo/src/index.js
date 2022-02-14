import React, { useState } from 'react';
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


function usePreview() {
  const [src, setSrc] = useState();
  const [isLoading,setLoading]=useState(false);
  async function sendData(url, data) {
    const formData = new FormData();

    for (const name in data) {
      formData.append(name, data[name]);
    }

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    return URL.createObjectURL(await response.blob());

  }
  const onChange = async(pptx) => {
    setLoading(true);
    const iframeUrl = await sendData("http://localhost:8012/upload", { pptx });
    setLoading(false);
    setSrc(iframeUrl);
  }
  return { src, onChange ,isLoading}
}

const App = () => {
  const {src,onChange,isLoading} = usePreview();
  const handleClick = async() => {     
    const blob=await pptx.write("blob");
    onChange(blob); 
  };
  return (
    <>
    <div>
    <button disabled={isLoading} onClick={handleClick}>CLICK TO DOWNLOAD</button>
      {isLoading && <label>Loading...</label>}
    </div>
     
      {src && <Viewer id={src}></Viewer>}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



