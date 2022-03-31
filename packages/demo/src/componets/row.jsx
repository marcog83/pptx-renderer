import {
    Shape,
    Text,
    Group
} from "pptx-renderer";
import { Box } from "./box";

export function Row() {
    return (
        <Group className='row'>
            <Group>
                <Group className="campaign column" style={{ justifyContent: "center" }}>
                    <Text className="campaign-name">Name of Campaign</Text>
                    <Text className="campaign-sub-title" style={{ bold: false }}>SUBTITLE</Text>
                </Group>
                <Group className="timeline">
                    <Group >
                        <Box name="BLUE VERSION (JUN) FF22 and overflow a bit?" label="Jul 12 - Jun 12" fill="#4472C4" />
                        <Box name="GREEN VERSION (JUN) SS21" label="Feb 12 - Mar 25" fill="#20E854" />
                    </Group>
                      <Group style={{ marginLeft: 100 }}>
                        <Box name="black VERSION (JUN) FF22" label="Jul 12 - Jun 12" fill="black" />
                        <Box style={{ marginLeft: 20 }} name="blue VERSION (JUN) SS21" label="Feb 12 - Mar 25" fill="blue" />
                    </Group>  
                </Group>
            </Group>
            <Shape type="line" line={{ color: "#efefef", width: 1 }} />
        </Group>
    )
}