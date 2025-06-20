import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function ContactSection({ data }) {

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMobile, setContactMobile] = useState("");

  const [contactMsg, setContactMsg] = useState("");
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);


  useEffect(() => {
    if (isEmailSend) {
      setTimeout(() => {
        setIsEmailSend(false);
        setSuccessMsg(null);
      }, 3000);
    }
  }, [isEmailSend])


  const logSubmit = async (event) => {
    event.preventDefault();
    // let data = {
    //   name: contactName,
    //   email: contactEmail,
    //   msg: contactMsg
    // }
    setIsEmailSend(true);
    let payload = {
      "email": [contactEmail],
      "subject": "Test Email from Lambda",
      "body": contactMsg,
      "name": contactName,
      "mobile": contactMobile
    }
    try {
      // https://lgjvl2ad3vvyk6prrmd5u3w7jm0ngpnr.lambda-url.ap-south-1.on.aws/
      const response = await fetch('https://6jv4whxrlzhwkbmiuhvkp2f2gu0qsqcv.lambda-url.ap-south-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Success:', result);
      setSuccessMsg(result.message)
      document.getElementById("cs_form").reset();
      // Handle successful response (e.g., clear form, update state)
    } catch (error) {
      console.error('Error:', error);
      // Handle errors (e.g., display error message)
    }
    // console.log(`Form Submitted! Timestamp: `, data);
  }


  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-5">
            <div className="cs_map">
              <iframe id="map" src={data.locationUrl} allowFullScreen="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_pl_40 relative">
              <div className="cs_section_heading cs_style_4 cs_mb_25">
                <h2
                  className="cs_section_title cs_fs_32 cs_bold mb-0"
                  dangerouslySetInnerHTML={{ __html: data.mapTitle }}
                ></h2>
              </div>
              <div className="relative">
                <form
                  action="" //https://api.web3forms.com/submit
                  method="POST"
                  className="row cs_gap_y_24"
                  id="cs_form"
                  onSubmit={logSubmit}
                >
                  <input
                    type="hidden"
                    name="access_key"
                    defaultValue="cd98b256-0db3-478c-ab28-1ec94f80447c"
                  />
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field"
                      placeholder="Name"
                      required=""
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      className="cs_form_field"
                      placeholder="Email"
                      required=""
                      onChange={(e) => setContactEmail(e.target.value)}

                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      name="mobile"
                      className="cs_form_field"
                      placeholder="Mobile/WhatsApp"
                      required=""
                      onChange={(e) => setContactMobile(e.target.value)}

                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="cs_form_field"
                      name="message"
                      placeholder="Message"
                      rows={5}
                      required=""
                      defaultValue={""}
                      onChange={(e) => setContactMsg(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <Button
                      fullWidth
                      loading={isEmailSend}
                      loadingPosition="end"
                      className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                      type="submit"
                    >
                      {data.formButtonText}
                    </Button>
                    {/* <button
                    className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                    type="submit"
                  >
                    {data.formButtonText}
                  </button> */}
                    {/* <div id="cs_result" className="cs_heading_color" /> */}
                  </div>
                </form>
                {successMsg &&
                  <div className="alertMsgDiv">
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                      <b>{successMsg}</b>
                    </Alert>
                  </div>
                }
                <div className="cs_height_60 cs_height_lg_40" />
              </div>
              <div className="cs_section_heading cs_style_4 cs_mb_25">
                <h2
                  className="cs_section_title cs_fs_32 cs_bold mb-0"
                  dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
                ></h2>
              </div>
              <ul className="cs_contact_info cs_mp_0">
                {data.contactList.map((item, index) => (
                  <li key={index}>
                    <p className="mb-0">{item.label}</p>
                    <h4
                      className="mb-0 cs_fs_20 cs_bold"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    ></h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
