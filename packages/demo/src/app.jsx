import { usePreview } from './use-preview';
import { Viewer } from './viewer';
export const App = ({pptx}) => {
  const {src,onChange,isLoading} = usePreview();

  const handleClick = async() => {     
   const blob=await pptx.write("blob");
     onChange(blob); 
  };

  const handleDownload = async() => {     
     pptx.writeFile({fileName:"blob.pptx"});
    
  };

  return (
    <>
    <div className='button'>
    <button disabled={isLoading} onClick={handleClick}>CLICK TO REFRESH</button>
    <button disabled={isLoading} onClick={handleDownload}>CLICK TO DOWNLOAD</button>
      {isLoading && <label>Loading...</label>}
    </div>     
      {src && <Viewer id={src}></Viewer>}
    </>
  );
};