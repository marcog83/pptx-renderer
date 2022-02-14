import {useState} from 'react';
import { Document, Page,pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Viewer({id}) {
    

    function onDocumentLoadSuccess(numPages){
        setPages(numPages)
    }
    return <div>
        <iframe src={`http://localhost:8012/download/${id}`} />
        
    </div>
}