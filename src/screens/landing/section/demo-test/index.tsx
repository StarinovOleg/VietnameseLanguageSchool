import React from "react";
import H2 from "../../../../ui-library/H2";
import  {converstation}  from "../../../../store/static";

import Link from "../../../../ui-library/Link";

const DemoTest = (props:{id?:string;}) => {
           
  return (
    <div className=" text-center lg:p-20 p-4" id={props.id}>
        <H2
          children={converstation.demo_test.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary=''
        />
        <H2
          children={converstation.demo_test.subtitle}
          fontsizeprimary="lg:leading-[10rem] lg:h2-font-size-primary  sm:h2-font-size-secondary"
          fontcolorsecondary='text-sky-800'
          fontfamilysecondary="font-['KGLifeisMessy']"
        />
    </div>
  );
};
export default DemoTest;