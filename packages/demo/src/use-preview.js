import { useState } from 'react';

export function usePreview() {
  const [ src, setSrc ] = useState();
  const [ isLoading, setLoading ] = useState(false);

  async function sendData(url, data) {
    const formData = new FormData();

    for (const name of data) {
      formData.append(name, data[name]);
    }

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    return URL.createObjectURL(await response.blob());
  }
  const onChange = async (pptx) => {
    setLoading(true);
    const iframeUrl = await sendData('http://localhost:8013/upload', { pptx });

    setLoading(false);
    setSrc(iframeUrl);
  };

  return { src, onChange, isLoading };
}
