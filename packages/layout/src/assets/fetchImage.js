async function _fetchImage(url) {
    return fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            return new Promise((resolve, reject) => {
                reader.onloadend = function () {
                    resolve(reader.result);
                };
            });
        });
}

export async function fetchImage(node) {
    const image = await _fetchImage(node.props.path);
    node.image = image;
    return node;
}