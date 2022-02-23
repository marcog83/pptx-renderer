import {
    Shape,
    Text,
    Group
} from "pptx-renderer";
import { Box } from "./box";

export function Row() {
    return (
        <Group style={{ flex: 1, width: "100%", height: 91, flexDirection: "column" }}>
           
            <Group style={{ flex: 1 }}>
                <Group style={{ width: 200 }}>
                    <Text style={{ flex: 1, fontSize: 10, wrap: false, bold: true }} align="center">Name of Campaign</Text>
                </Group>
                <Shape type="line" line={{ color: "grey", width: 1 }} />
                <Group style={{ flex: 1, flexDirection: "column",padding:5 }}>
                    <Group style={{ flex: 1 }}>
                        <Box name="BLUE VERSION (JUN) FF22" label="Jul 12 - Jun 12" fill="#4472C4" />
                        <Box name="GREEN VERSION (JUN) SS21" label="Feb 12 - Mar 25" fill="#20E854" />
                    </Group>
                    <Group style={{ flex: 1, marginLeft: 100 }}>
                        <Box name="black VERSION (JUN) FF22" label="Jul 12 - Jun 12" fill="black" />
                        <Box style={{marginLeft: 20 }} name="blue VERSION (JUN) SS21" label="Feb 12 - Mar 25" fill="blue" />
                    </Group>
                </Group>
            </Group>
            <Shape type="line" line={{ color: "grey", width: 1 }} />
        </Group>
    )
}