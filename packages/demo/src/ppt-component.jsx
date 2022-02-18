import {
    Document,
    Notes,
    Shape,
    Slide,
    SlideNumber,
    Text
} from "pptx-renderer";



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
        <Slide>
            <Text style={{ flex: 1 }} fill="FF0000">
                MY TEXT
            </Text>
            <Text style={{ flex: 1 }} fill="FFCC00">
                MY TEXT
            </Text>
            <Text style={{ flex: 1 }} fill="FF00CC">
                <Text style={{paddingLeft: 10}}>MY TEXT</Text>
            </Text>
        </Slide>
        {/* <Slide>
            <Notes>this is a note</Notes>
            <SlideNumber
                x="1.0"
                y="5%"
                color="FF0000"
                fontFace="Calibri"
                fontSize="20"
            />
            <Shape type="sun" style={{ x: "90%", y: "0", width: 100, height: 100 }} fill="FF0000">
                sun
                <Text style={{ x: 10, y: 20 }} bold color="FFCC00" fontSize={6}>
                    wee2
                </Text>
            </Shape>
            <Shape type="sun" x="90%" y="2" w={1} h={1} fill="FF0000" />

            <Text style={{ left: 10, top: 20, margin: 5, width: 400 }} fill={"FF0000"} color="FFCC00">
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
        </Slide> */}
    </Document>
}