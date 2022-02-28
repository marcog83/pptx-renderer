import {
    Shape,
    Text,
    Group
} from "pptx-renderer";

export function Box({ name, label, style, fill }) {
    return (
        <Group className="column" style={{ ...style }}>
            <Text className="item__name" style={{flexShrink:0,flexGrow: 1}} >
                {name}
            </Text>
            <Shape type="roundRect" rectRadius={1} className='flex' style={{ fill }}>
                <Text className='item__label'>
                    {label}
                </Text>
            </Shape>
        </Group>
    )
}