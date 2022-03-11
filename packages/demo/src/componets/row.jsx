import {
    Shape,
    Text,
    Group
} from "pptx-renderer";
import { Box } from "./box";

export function Row() {
    return (
        <Group className='row'>

            <Group className="flex">
                <Group className="campaign column flex" style={{ justifyContent: "center" }}>
                    <Text className="flex campaign-name">Name of Campaign</Text>
                    <Text className="flex campaign-sub-title" style={{ bold: false }}>SUBTITLE</Text>
                </Group>
                <Group className="timeline">
                    <Group className="flex">
                        <Box name="BLUE VERSION (JUN) FF22 and overflow a bit?" label="Jul 12 - Jun 12" fill="#4472C4" />
                        <Box name="GREEN VERSION (JUN) SS21" label="Feb 12 - Mar 25" fill="#20E854" />
                    </Group>
                    <Group className="flex">
                        <Group className="flex">
                            <Box name="black VERSION (JUN) FF22" label="Jul 12 - Jun 12" fill="black" />
                            <Text className="campaign-label">Label 1 it is.</Text>
                            <Text className="campaign-label">Label 2 it is. Can be very Long</Text>
                            <Text className="campaign-label">Label 3 it is. Can be very Long</Text>
                        </Group>

                        <Group className="flex" style={{ marginLeft: 20 }}>
                            <Box style={{ marginLeft: 20 }} name="blue VERSION (JUN) SS21" label="Feb 12 - Mar 25" fill="blue" />
                        </Group>
                    </Group>
                </Group>
            </Group>
            <Shape type="line" line={{ color: "#efefef", width: 1 }} />
        </Group>
    )
}
