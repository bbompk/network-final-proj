import React, { Fragment, ReactNode } from 'react';

const Markdown = ({text}: {text:string}) => {
  function bolden(txt: string) {
    let result: ReactNode[] = [];
    let occurs: number[] = [];

    // find all occurrences of '**'
    for(let i = 0; i < txt.length; i++) {
      if(i < txt.length-1 && txt[i] == '*' && txt[i+1] == '*')
        occurs.push(i);
    }
    // if there are an odd number of occurrences, remove the last one
    if(occurs.length %2 != 0) occurs = occurs.slice(0, occurs.length-1);
    // if there are no occurrences, return the text
    if(occurs.length == 0) return [txt];
    // push the normal text before the first occurrence
    result.push(<span>{txt.slice(0, occurs[0])}</span>);
    for(let i=0; i < occurs.length; i+=2) {
        // push the bold text
        result.push(<span className='font-bold'>{txt.slice(occurs[i]+2, occurs[i+1])}</span>);
        // if its not the last pair of occurrences, push the normal text between the occurrences
        if(i < occurs.length-2) result.push(<span>{txt.slice(occurs[i+1]+2, occurs[i+2])}</span>);
        // else push the normal text after the last occurrence
        else result.push(<span>{txt.slice(occurs[i+1]+2, txt.length)}</span>);
    }
    return result
  } 

  return <span>{bolden(text).map((node, idx) => <Fragment key={idx}>{node}</Fragment>)}</span>
};

export default Markdown;