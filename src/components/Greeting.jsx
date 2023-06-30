import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({identities}) {

  const randomMessage = () => identities[(Math.floor(Math.random() * identities.length))];
  
  const [identity, setIdentity] = useState(identities[0]);

  return (
    <div> 
      <h3>Who am I? {identity}</h3>
      <button onClick={() => setIdentity(randomMessage())}>
        What else?
      </button>
    </div>
  );
}