import {
    Shape,
    Text,
    Group,
    Hyperlink
} from "pptx-renderer";

export function Box({ name, label, style, fill }) {
    return (
        <Group className="column flex-space-between" style={{ ...style, width: 150 }}>
            <Hyperlink url='https://google.com' >
                <Text className="item__name" >
                    {name}
                </Text>
            </Hyperlink>

            <Shape type="roundRect" rectRadius={1} style={{valign:"middle", fontSize:10, fill }}>
                <Text className='item__label'>
                    {label}
                </Text>
            </Shape>
        </Group>
    )
}