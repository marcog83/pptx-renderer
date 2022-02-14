import {useState} from 'react';

export function Viewer({id}) {
    

    
    return <div>
        <iframe src={`${id}#toolbar=0`} />
        
    </div>
}