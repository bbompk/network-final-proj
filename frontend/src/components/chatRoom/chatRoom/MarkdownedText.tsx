import { ReactNode } from 'react';

const Markdown = ({text}: {text:string}) => {
  function bolden(txt: string) {
    let result: ReactNode[] = [];

    let texts = txt.split('**');    
    for(let i=0; i < texts.length; i++) {
      if(i%2 == 0) result.push(<span key={i}>{texts[i]}</span>);
      else result.push(<span key={i} className='font-bold'>{texts[i]}</span>);
    }
    return result
  } 

  return <span>{bolden(text)}</span>
};

export default Markdown;