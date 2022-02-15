import { usePreview } from './use-preview';
import { Viewer } from './viewer';
export const App = ({pptx}) => {
  const {src,onChange,isLoading} = usePreview();

  const handleClick = async() => {     
    const blob=await pptx.write("blob");
    onChange(blob); 
  };
  
  return (
    <>
    <div className='button'>
    <button disabled={isLoading} onClick={handleClick}>CLICK TO REFRESH</button>
      {isLoading && <label>Loading...</label>}
    </div>     
      {src && <Viewer id={src}></Viewer>}
    </>
  );
};