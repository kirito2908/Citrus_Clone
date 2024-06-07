import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

const Footer = () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  return (
    <>
      <div className="mainfooter">
        <div className="footerTop">
          <div className="footerLeft">
            <Form
              {...formItemLayout}
              variant="filled"
              style={{
                maxWidth: 600,
              }}
            >
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input placeholder="Mobile Number" />
              </Form.Item>
              <Form.Item>
                <TextArea rows={4} cols={200}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="footerRight">
            <div className="location">
              <h4>location</h4>
              <div className="underline"></div>
              <div className="address">
                <p>
                  <FaLocationDot />
                  63-65 North Wharf Road, London, W2 1LA France
                </p>
              </div>
              <div className="mobile">
                <p>
                  <IoCall />
                  1800 - 2345 6789
                </p>
              </div>
              <div className="email">
                <p>
                  <MdEmail />
                  audio.example.com
                </p>
              </div>
            </div>

            <div className="bussinessHours">
              <h4>Business Hours</h4>
              <div className="underline"></div>
              <div className="details">
                <p>
                  <LuClock9 />
                  Monday - Friday - 9am to 5pm <br />
                  Saturday & Sunday - 9am to 1pm <br />
                  Note: All Commercial Holidays are Applicable 24 x 7 <br />
                  Live Customer Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom"></div>
      </div>
    </>
  );
};

export default Footer;
