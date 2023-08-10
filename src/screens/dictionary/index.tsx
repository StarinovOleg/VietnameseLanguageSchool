import React, { useContext, useMemo } from "react";

import { converstation } from "../../store/static";

function DictionaryIndex() {
  const ar = converstation.words.lessons.map((item: any, index: any) => {
    return item.array_data;
  });
  const words = useMemo(() => {
    const array_words = ar
      .flat(1)
      .sort((aa, b) => {
        return aa.vietnamese.localeCompare(b.vietnamese);
      })
      .map((item, index) => {
        return (
          <tr
            key={item.vietnamese}
            className="border  border-slate-400 lg:text-xl md:text-xl sm:text-auto text-auto"
          >
            <td className="pl-[1%]">{item.vietnamese}</td>
            <td className="pl-[1%]">{item.english}</td>
          </tr>
        );
      });
    return array_words;
  }, []);

  return (
    <div className="text-center pt-10 pb-10">
      <table className=" m-auto ">
        <thead className="text-center ">
          <tr>
            <th>Vietnamese</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody className="text-left ">{words}</tbody>
      </table>
    </div>
  );
}

export default DictionaryIndex;
