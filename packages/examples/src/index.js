import { PPTX,
    Document,
    Notes,
    Section,
    Shape,
    Slide,
    SlideNumber,
    Text} from '@pptx-renderer/renderer';
 

import ReactDOM from 'react-dom';

const wee = 'wee';
const pptx = PPTX.render(
  <Document
    author="Brent Ely"
    company="S.T.A.R. Laboratories"
    revision="15"
    subject="Annual Report"
    title="PptxGenJS Sample Presentation"
    layout="LAYOUT_16x9"
  >
    <Section title="my section 1">
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
        <Text x={1} y={2} w={4} h={3} margin={5} fill={'FF0000'} color="FFCC00">
          {wee}
          text 1
          <Text x={10} y={20} bold>
            wee2
          </Text>
        </Text>
      </Slide>
    </Section>
    <Section title="my section 2">
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
    </Section>
  </Document>
);

const App = () => {
  const handleClick = () => {
    pptx.writeFile({ fileName: 'Browser-PowerPoint-Demo.pptx' });
  };
  return (
    <>
      <button onClick={handleClick}>CLICK TO DOWNLOAD</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
