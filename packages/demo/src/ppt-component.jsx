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
            <Text style={{ flex: 1 }} color="green" fill="#FF0000">
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
    </Document >
}