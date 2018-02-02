import React from 'react'; 

function Bees(props) {

  let fontSize = 0;
  
  const bees = props.script.map((fragment, index) => {

    /*
      console.log(fragment);
      console.log(new RegExp("[Bb]ee").test(fragment));
    */

    if (new RegExp("[Bb]ee").test(fragment)) {
      fontSize = fontSize += 1;
      return (
        <div style={{ fontSize: fontSize }} key={index}>
          <p>
            {fragment}
          </p>
          <br />
        </div>
      ); 
    } else {
      return (
        <div style={{ fontSize: fontSize }} key={index}>
          <p>
            {fragment}
          </p>
          <br />
        </div>
      );
    }
  });

  return (
    <div className="bees-script">
      {bees}
    </div>
  )
}

export default Bees;