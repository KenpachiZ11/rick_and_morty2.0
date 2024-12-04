import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useCtx } from '../context/context';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
// import generatePDF from 'react-to-pdf';

export const InfoId = () => {
  const { id } = useParams();
  const { arr } = useCtx();
  const { results } = arr;
  const targetRef = useRef(null)

  const [info, setInfo] = useState([]);

  const options = {
    filename: `${info[0]?.name}.pdf`,
    method: 'save',
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.LARGE,
      format: 'letter',
      orientation: 'portrait',
    },
    canvas: {
      mimeType: 'image/jpeg',
      qualityRatio: 1
    },
    overrides: {
      pdf: {
          compress: true
      },
      canvas: {
          useCORS: true
      }
    },
  };

  useEffect(() => {
    if(results?.length > 0) {
      const array = results.reduce(( arr, current ) => {
        if(current.id === parseInt(id)) {
          arr.push(current);
        }
  
        return arr;
      }, []);
  
      setInfo(array);
    }
  }, [arr, results, id]);

  return (
    <div>
      <img src={info[0]?.image} alt={info[0]?.name} style={{ width: '100%' }} ref={targetRef}/>

      <button type='button' onClick={() => generatePDF(targetRef, {filename: `${info[0]?.name}.pdf`})}>
      {/* <button type='button' onClick={() => generatePDF(targetRef, options)}> */}
        Take screenshot
      </button>
    </div>
  )
}