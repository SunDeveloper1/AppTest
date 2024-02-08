import React, { useState, useRef } from 'react';
import ReactDOMServer from 'react-dom/server'
import _, { template } from 'underscore';

export default function Home() {
  const [content, setContent] = useState("The order with id <%=ordernumber%> has been placed at <%=createdat%>");
  const contentRef = useRef(null);

  const handleChange = (e) => {
    let value = _.unescape(contentRef.current.innerHTML);
    console.log("initalvalue", value);

    let varArr = value.match(/<%=[A-Za-z0-9_.]+%>/g);

    if (varArr && varArr.length > 0) {
      varArr.forEach((variable, index) => {
        let newbtn = (
          <span>
            <select id="orderNumber">
              <option value="vivek">Vivek Ji</option>
              <option value="bablu">Bablu Ji</option>
            </select>
          </span>
        );

        value = value.replace(variable, ReactDOMServer.renderToString(newbtn));
        document.getElementById("orderNuumber").addEventListener("select",()=>{
          document.getElementById("orderNuumber").setAttribute("value","vivek")
        })
      });
    }

    if (value.includes('$')) {
      value = value.replace('$', "<span tabindex='0' role='link' class='varModify' style='font-weight: 600;'><%=Select%></span>");
    }
    console.log("finalvalue", value);
    setContent(value);
  };

  return (
    <>
      <main>
        <div
          id="subject"
          style={{ marginTop: '10px', text: 'green' }}
          className="subject"
          contentEditable="true"
          onBlur={handleChange}
          ref={contentRef}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </main>
    </>
  );
}
