import {
    Shape,
    Text,
    Group
} from "pptx-renderer";
export function Box({ name, label, style, fill }) {
    return (
        <Group className="column" style={{ ...style, width: 150 }}>
            <Text className="flex item__name" >
                {name}
            </Text>
            <Shape type="roundRect" rectRadius={1} style={{ flex: 1, color: "white", fill: fill }}>
                <Text className='item_label'>
                    {label}
                </Text>
            </Shape>
        </Group>
    )
}