import React from "react";

export default function ValueSection({ data }) {
  return (
    <section className="">
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_values_card cs_style_1">
          {/* <div className="cs_values_card_left">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0">
              {data.sectionTitle}
            </h3>
          </div> */}
          <div className="cs_values_card_left">
            <ul className="cs_values cs_mp_0 cs_heading_color cs_fs_20">
              {data.values.map((item, index) => (
                <li key={index}>
                  <span className="cs_bold">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="cs_value_text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
