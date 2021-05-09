import { useState, useEffect } from 'react';
// import { Http } from '@/utils/request';

export default function useHttpHook({
  // url,
  request,
  body = {},
  watch = []
}) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request(body).then(res=>{
      if(res.code === 0){
        setResult(res.data)
        setLoading(false)
      }
    })
    // Http({
    //   url,
    //   method,
    //   headers,
    //   body,
    //   setResult,
    //   setLoading
    // });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch);

  return [result, loading];
}