import {
    Shape,
    Text,
    Group
} from "pptx-renderer";
export function Box({ name, label, style, fill }) {
    return <Group style={{
        ...style,
        flexDirection: "column",
        width: 150,
        height: 40
    }}>
        <Text style={{ flex: 1, fontSize: 10, bold: true, wrap: false }} >
            {name}
        </Text>
        <Shape type="roundRect" rectRadius={1} style={{ flex: 1, color: "white", fill: fill }}>
            <Text style={{ fontSize: 10, align: 'center' }}>
                {label}
            </Text>
        </Shape>
    </Group>
}