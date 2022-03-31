import {
    Document,
    Notes,
    Shape,
    Slide,
    SlideNumber,
    Section,
    Text,
    Group,
    Image
} from "pptx-renderer";
import { Row } from "./componets/row";



export function PPTComponent() {

    const wee = "plain text";
    return <Document
        author="Brent Ely"
        company="S.T.A.R. Laboratories"
        revision="15"
        subject="Annual Report"
        title="PptxGenJS Sample Presentation"
        layout="LAYOUT_16x9"
    >
        <Section title="section-1">
             <Slide className='column'>
                <Row />
                <Row />
                {/* <Row />  */}
            </Slide> 
            <Slide>
               
                <Text style={{width:300}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Image src="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg" />   
               <Image style={{
                    position: "absolute",
                    top: 0,
                    left: 350,                    
                    width:150
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg" />
                {/* <Group style={{
                    flex: 1,
                    position: "absolute",
                    top: 25,
                    left: 350,
                    width: "400",
                    height: "500",
                    fontSize: 10,
                    color: "blue"
                }}>
                    <Text style={{ flex: 1 }} fill="#FF0000">WEEE</Text>
                    <Text style={{ flex: 1, fill: "blue" }} >blue</Text>
                    <Text style={{ flex: 1 }} fill="green">green</Text>
                    <Shape style={{
                        position: "absolute",
                        top: 25,
                        left: 50, width: 100, height: 100
                    }} type="sun" fill="white" />
                </Group> */}
            </Slide>

            {/* <Slide>
                <Text style={{ flex: 1 }} margin={[20, 20, 20, 20]} color="green" fill="#FF0000">
                    <Text bold color="#FFCC00" >
                        wee2
                    </Text>
                </Text>
                <Text style={{ flex: 1 }} fill="#FFCC00" fit='shrink'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Shape type="sun" style={{ width: 100, height: 100 }} fill="yellow">
                    sun
                    <Text bold color="#FFCC00" fontSize={6}>
                        wee2
                    </Text>
                </Shape>
                <Text style={{ flex: 1, color: "#FF0000" }} fill="grey">
                    before
                    <Text style={{ color: "blue", fontSize: 8 }} breakLine>MY TEXT 3</Text>
                    FF0000
                    <Text style={{ fontSize: 12 }} breakLine>fontSize</Text>
                </Text>
                <Text style={{ position: "absolute", top: 10, left: 20, width: 150, height: 60, color: "white" }} fill="green" >
                    ABSOLUTE
                </Text>
                <Shape style={{ width: 100, height: 100 }} type="sun" fill="red" />
            </Slide> */}
        </Section>

    </Document >
}

