import React from 'react'
import { NavLink } from "react-router-dom";
import ShowCounter from '../utils/ShowCounter';
import '../style/AllLink.css';
import { useState, useEffect } from 'react';

const AllLinks =  () => {

    const [isEnabled, setIsEnabled] = useState(false);

      useEffect(() => {
        ShowCounter()
            .then((data) => {
              setIsEnabled(data);
              console.log("AllLinks : ", data);
            })
            .catch((error) => {
              console.log(error);
            });
    }, []);

    return (
      <>
          <ul>
                <NavLink
                  className='link'
                  style={{visibility: isEnabled ? 'visible' : 'hidden'}}
                  to={`/demo1`}
                >
                  <li>Demo1</li>
                </NavLink>
                <NavLink
                  className='link'
                  to={`/demo2`}
                >
                  <li>Demo2</li>
                </NavLink>
              </ul>
      </>
    );

}

export default AllLinks