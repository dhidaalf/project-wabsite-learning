import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import { handleSectionNavigation } from "utils";

const WebsitePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://youtu.be/_OwCDThM3EI?si=MHpZKs8vCCOqCEf-";
  }
  function handleNavigate1() {
    window.location.href = "https://youtu.be/_OwCDThM3EI?si=MHpZKs8vCCOqCEf-";
  }
  function handleNavigate2() {
    window.location.href = "https://youtu.be/OAiZZqiSzxo?si=PJRpZMIqmfgshjRU";
  }
  function handleNavigate3() {
    window.location.href = "https://youtu.be/OAiZZqiSzxo?si=PJRpZMIqmfgshjRU";
  }
  function handleNavigate4() {
    window.location.href = "https://youtu.be/492A2poEoow?si=erWgs3QQZy_1fIg6";
  }
  function handleNavigate5() {
    window.location.href = "https://youtu.be/492A2poEoow?si=erWgs3QQZy_1fIg6";
  }
  function handleNavigate6() {
    window.location.href = "https://youtu.be/ddK6hExKhmM?si=wyTXxM_bmJkKnjEs";
  }
  function handleNavigate7() {
    window.location.href = "https://youtu.be/ddK6hExKhmM?si=wyTXxM_bmJkKnjEs";
  }
  function handleNavigate8() {
    window.location.href = "https://youtu.be/uHyfQV0kbgo?si=DhzPI7iJ3ZUvWame";
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="h-[897px] md:px-5 relative w-full">
          <Img
            className="h-[897px] m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[245px] justify-start right-[8%] top-[3%] w-[79%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div
                className="common-pointer bg-blue_gray-100 flex flex-col h-[100px] items-center justify-start p-1.5 rounded-[50%] w-[100px]"
                onClick={() => navigate("/website")}
              >
                <Img
                  className="h-[45px] md:h-auto my-[21px] object-cover w-[99%]"
                  src="images/img_javalearningh.png"
                  alt="javalearningh"
                />
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[61.21px] h-[45px] md:h-auto items-center justify-center md:ml-[0] ml-[118px] md:mt-0 mt-[21px] w-auto md:w-full">
                <div
                  className="common-pointer flex sm:flex-col flex-row gap-[30.61px] items-center justify-center w-auto sm:w-full"
                  
                >
                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="common-pointer text-[13px] text-white-A700 w-auto"
                      size="txtPoppinsSemiBold13"
                      onClick={() => navigate("/website")}
                    >
                      Beranda
                    </Text>
                  </div>
                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="common-pointer text-[13px] text-white-A700 w-auto"
                      size="txtPoppinsSemiBold13"
                      onClick={() => navigate("/tentangkami")}
                    >
                      Tentang Kami
                    </Text>
                  </div>
                  <Text
                    className="common-pointer  h-[30px] pb-[3px] pt-[7px] text-[13px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold13"
                    onClick={() => navigate("/halamanpengembangan")}
                  >
                    Layanan
                  </Text>
                  <Text
                    className="common-pointer text-[13px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold13"
                    onClick={() => navigate("/halamanpengembangan")}
                  >
                    Partnership
                  </Text>
                  <Text
                    className="text-[13px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold13"
                  >
                    Bantuan
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                    <Button
                      className="common-pointer cursor-pointer font-semibold h-[45px] text-base text-center w-[139px]"
                      onClick={() => navigate("/halamanpengembangan")}
                      shape="round"
                    >
                      Login
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-semibold h-[45px] text-base text-center w-[138px]"
                      onClick={() => navigate("/halamanpengembangan")}
                      shape="round"
                      color="white_A700"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="h-[60px] md:ml-[0] ml-[31px] md:mt-0 mt-3.5 w-[60px]"
                src="images/img_iconaccount.svg"
                alt="iconaccount"
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-start md:ml-[0] ml-[113px] w-auto md:w-full">
              <Text
                className="md:text-5xl text-6xl text-center text-white-A700 w-auto"
                size="txtPoppinsBold60"
              >
                Java Learning
              </Text>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[320px] rounded-[28px]"
                onClick={() => {
                  handleSectionNavigation("block1");
                }}
                rightIcon={
                  <Img
                    className="h-[30px] ml-2.5"
                    src="images/img_octiconarrowup16.svg"
                    alt="octicon:arrow-up-16"
                  />
                }
                size="sm"
              >
                <div className="!text-white-A700_01 font-bold font-inter leading-[normal] text-center text-xl">
                  Pelajari Selangkapnya
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center max-w-[1016px] mt-[132px] mx-auto md:px-5 w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-900 w-auto"
            size="txtPoppinsSemiBold48"
          >
            Bahasa Pemrograman Java
          </Text>
          <Text
            className="text-gray-600 text-xl w-auto"
            size="txtPoppinsRegular20"
          >
            Java merupakan bahasa pemrograman yang digunakan secara luas untuk
            pengodean aplikasi web.
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start max-w-[1440px] mt-[114px] md:px-10 sm:px-5 px-[200px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start max-w-[1040px] mx-auto w-full">
            <div className="h-[317px] relative w-[41%] md:w-full">
              <Img
                className="h-[317px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <Img
                className="absolute h-[120px] inset-[0] justify-center m-auto w-[120px]"
                src="images/img_frame.svg"
                alt="frame"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="common-pointer sm:text-4xl md:text-[38px] text-[40px] text-blue-400 w-auto"
                  size="txtPoppinsSemiBold40"
                  onClick={handleNavigate8}
                  id="block1"
                >
                  Java Intro
                </Text>
                <Text
                  className="leading-[132.00%] max-w-[542px] md:max-w-full text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                  iaculis in pharetra velit id at. Arcu nunc{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="border-blue-400 border-l-[3px] border-solid flex flex-col gap-0.5 items-start justify-start sm:pl-5 pl-6 py-4 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-cyan-900 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    Example
                  </Text>
                  <Text
                    className="max-w-[518px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                    iaculis in pis a tempor iaculi
                  </Text>
                </div>
                <Input
                  name="frame2608650"
                  placeholder="Exercise"
                  className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-cyan-900 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start max-w-[1040px] mx-auto w-full">
            <div className="h-[317px] relative w-[41%] md:w-full">
              <Img
                className="common-pointer h-[317px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image3.png"
                alt="imageThree"
                onClick={handleNavigate7}
              />
              <Img
                className="absolute h-[120px] inset-[0] justify-center m-auto w-[120px]"
                src="images/img_frame.svg"
                alt="frame_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="common-pointer sm:text-4xl md:text-[38px] text-[40px] text-blue-400 w-auto"
                  size="txtPoppinsSemiBold40"
                  onClick={handleNavigate6}
                >
                  Java Syntax
                </Text>
                <Text
                  className="leading-[132.00%] max-w-[543px] md:max-w-full text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                  iaculis in pharetra velit id at. Arcu nunc{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="frame2608650_One"
                  placeholder="Example"
                  className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-cyan-900 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                  size="sm"
                ></Input>
                <div className="border-blue-400 border-l-[3px] border-solid flex flex-col gap-0.5 items-start justify-start sm:pl-5 pl-6 py-4 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-cyan-900 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    Exercise
                  </Text>
                  <Text
                    className="max-w-[519px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                    iaculis in pis a tempor iaculi
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start max-w-[1040px] mx-auto w-full">
            <div className="h-[317px] relative w-[41%] md:w-full">
              <Img
                className="common-pointer h-[317px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image4.png"
                alt="imageFour"
                onClick={handleNavigate5}
              />
              <Img
                className="absolute h-[120px] inset-[0] justify-center m-auto w-[120px]"
                src="images/img_frame.svg"
                alt="frame_Two"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="common-pointer sm:text-4xl md:text-[38px] text-[40px] text-blue-400 w-auto"
                  size="txtPoppinsSemiBold40"
                  onClick={handleNavigate4}
                >
                  Java If-Else
                </Text>
                <Text
                  className="leading-[132.00%] max-w-[544px] md:max-w-full text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                  iaculis in pharetra velit id at. Arcu nunc{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="border-blue-400 border-l-[3px] border-solid flex flex-col gap-0.5 items-start justify-start sm:pl-5 pl-6 py-4 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-cyan-900 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    Example
                  </Text>
                  <Text
                    className="max-w-[520px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                    iaculis in pis a tempor iaculi
                  </Text>
                </div>
                <Input
                  name="frame2608650_Two"
                  placeholder="Exercise"
                  className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-cyan-900 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start max-w-[1040px] mx-auto w-full">
            <div className="h-[322px] relative rounded-[20px] shadow-bs w-[41%] md:w-full">
              <Img
                className="common-pointer h-[322px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image5.png"
                alt="imageFive"
                onClick={handleNavigate3}
              />
              <Img
                className="absolute h-[120px] inset-[0] justify-center m-auto rounded-[20px] w-[120px]"
                src="images/img_frame_blue_400.svg"
                alt="frame_Three"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="common-pointer sm:text-4xl md:text-[38px] text-[40px] text-blue-400 w-auto"
                  size="txtPoppinsSemiBold40"
                  onClick={handleNavigate2}
                >
                  Java For-Loop
                </Text>
                <Text
                  className="leading-[132.00%] max-w-[543px] md:max-w-full text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                  iaculis in pharetra velit id at. Arcu nunc{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="border-blue-400 border-l-[3px] border-solid flex flex-col gap-0.5 items-start justify-start sm:pl-5 pl-6 py-4 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-cyan-900 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    Example
                  </Text>
                  <Text
                    className="max-w-[519px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                    iaculis in pis a tempor iaculi
                  </Text>
                </div>
                <Input
                  name="frame2608650_Three"
                  placeholder="Exercise"
                  className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-cyan-900 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start max-w-[1040px] mx-auto w-full">
            <div className="h-[317px] relative w-[41%] md:w-full">
              <Img
                className="common-pointer h-[317px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_image6.png"
                alt="imageSix"
                onClick={handleNavigate1}
              />
              <Img
                className="absolute h-[120px] inset-[0] justify-center m-auto rounded-[20px] w-[120px]"
                src="images/img_frame_blue_400.svg"
                alt="frame_Four"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="common-pointer sm:text-4xl md:text-[38px] text-[40px] text-blue-400 w-auto"
                  size="txtPoppinsSemiBold40"
                  onClick={handleNavigate}
                >
                  Java Switch Case
                </Text>
                <Text
                  className="leading-[132.00%] max-w-[543px] md:max-w-full text-gray-600 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                  iaculis in pharetra velit id at. Arcu nunc{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="border-blue-400 border-l-[3px] border-solid flex flex-col gap-0.5 items-start justify-start sm:pl-5 pl-6 py-4 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-cyan-900 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    Example
                  </Text>
                  <Text
                    className="max-w-[519px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet consectetur. Turpis a tempor
                    iaculis in pis a tempor iaculi
                  </Text>
                </div>
                <Input
                  name="frame2608650_Four"
                  placeholder="Exercise"
                  className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-cyan-900 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-cyan-900 flex items-center justify-center mt-[187px] md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-center mb-[71px] ml-[183px] mr-24 mt-16 w-[81%]">
            <div className="flex flex-col md:gap-10 gap-[78px] items-start justify-start w-[94%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col h-[150px] items-center justify-start p-[9px] rounded-[50%] w-[150px]">
                <Img
                  className="h-[67px] md:h-auto my-[31px] object-cover w-full"
                  src="images/img_javalearningh.png"
                  alt="javalearningh_One"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 h-[212px] md:h-auto items-start justify-between max-w-[1089px] w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      Perusahaan
                    </Text>
                  </div>
                  <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtPoppinsRegular16">Beranda</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtPoppinsRegular16">Tentang Kami</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtPoppinsRegular16">Layanan</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      Gabung Kami
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtPoppinsRegular16"
                    >
                      Gabung Komunitas
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtPoppinsRegular16"
                    >
                      Gabung Admin
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      Lainnya
                    </Text>
                  </div>
                  <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtPoppinsRegular16">
                          Syarat dan ketentuan
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtPoppinsRegular16">
                          Kebijakan privasi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtPoppinsRegular16">Bantuan</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[38px] items-start justify-start w-64">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Ikuti kami
                      </Text>
                    </div>
                    <div className="flex flex-row gap-12 items-center justify-start w-full">
                      <Img
                        className="h-8 w-8"
                        src="images/img_akariconstwitterfill.svg"
                        alt="akariconstwitte"
                      />
                      <Img
                        className="h-8 w-8"
                        src="images/img_riinstagramfill.svg"
                        alt="riinstagramfill"
                      />
                      <Img
                        className="h-8 w-8"
                        src="images/img_rifacebookcirclefill.svg"
                        alt="rifacebookcircl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        Unduh Aplikasi{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-12 items-start justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_biapple.svg"
                        alt="biapple"
                      />
                      <Img
                        className="h-8 w-8"
                        src="images/img_cibgoogleplay.svg"
                        alt="cibgoogleplay"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1161px] w-full">
              <Line className="bg-blue_gray-100_01 h-px w-[97%]" />
              <div className="flex flex-col items-start justify-start max-w-[1161px] p-2.5 w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  2023 Java Learning | Copyright by @Java Learning Team
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WebsitePage;
