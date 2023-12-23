import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const TentangKamiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient  border-2 border-black-900 border-solid flex flex-col items-start justify-start p-[46px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start mb-[768px] ml-8 md:ml-[0] w-[92%] md:w-full">
            <div className="h-[131px] relative w-[8%] md:w-full">
              <div
                className="common-pointer bg-blue_gray-100 h-[131px] m-auto rounded-[66px] w-full"
                onClick={() => navigate("/website")}
              ></div>
              <Img
                className="absolute h-[59px] inset-[0] justify-center m-auto object-cover w-[88%]"
                src="images/img_javalearningh.png"
                alt="javalearningh"
              />
            </div>
            <div className="flex flex-col justify-start md:mt-0 mt-3 w-[92%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[42px] items-center justify-end ml-80 md:ml-[0] w-4/5 md:w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center max-w-[1090px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[30.61px] items-center justify-center w-auto">
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
                      className="common-pointer text-[13px] text-white-A700 w-auto"
                      size="txtPoppinsSemiBold13"
                      onClick={() => navigate("/halamanpengembangan")}
                    >
                      Bantuan
                    </Text>
                  </div>
                </div>
                <Img
                  className="common-pointer h-[78px]"
                  src="images/img_iconaccount_white_a700_02.svg"
                  alt="iconaccount"
                  onClick={() => navigate("/halamanpengembangan")}
                />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[275px] mt-10 w-auto md:w-full">
                <Text
                  className="md:text-5xl text-6xl text-center text-white-A700 w-auto"
                  size="txtPoppinsBold60"
                >
                  Tentang Kami
                </Text>
              </div>
              <Text
                className="leading-[128.50%] mr-[74px] mt-[181px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtPoppinsBold40"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    Selamat Datang di Java Learning!
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>
                    Misi Kami
                    <br />
                    Di Java Learning, kami berdedikasi untuk menyediakan
                    pendidikan berkualitas tinggi dan mudah diakses di bidang
                    pemrograman Java. Kami percaya bahwa dengan pemahaman yang
                    kuat akan Java, para pelajar dan profesional dapat membuka
                    pintu ke dunia teknologi yang luas dan beragam. Tujuan kami
                    adalah untuk membantu Anda tidak hanya memahami bahasa
                    pemrograman ini, tetapi juga untuk mengaplikasikannya dalam
                    memecahkan masalah nyata.
                    <br />
                    Visi Kami
                    <br />
                    Kami bercita-cita menjadi platform pembelajaran Java
                    terdepan yang menginspirasi inovasi dan kreativitas. Visi
                    kami adalah menciptakan komunitas pembelajar yang beragam di
                    mana setiap anggota dapat belajar, berkembang, dan
                    berkolaborasi untuk menciptakan solusi teknologi yang
                    inovatif.
                    <br />
                    Tim Kami
                    <br />
                    Java Learning didirikan oleh sekelompok pengembang,
                    pendidik, dan penggemar teknologi yang berbagi gairah untuk
                    pendidikan dan teknologi. Tim kami terdiri dari profesional
                    berpengalaman dengan latar belakang yang luas dalam
                    pengembangan perangkat lunak, desain kurikulum, dan
                    pedagogi.
                    <br />
                    Apa yang Kami Tawarkan
                    <br />
                    Kursus Komprehensif: Dari dasar-dasar hingga konsep
                    lanjutan, kursus kami dirancang untuk menyesuaikan dengan
                    berbagai tingkat keahlian.
                    <br />
                    Pembelajaran Praktis: Kami menekankan pada pembelajaran
                    hands-on dengan proyek-proyek nyata dan studi kasus untuk
                    memastikan penguasaan materi yang efektif.
                    <br />
                    Komunitas: Akses ke komunitas online kami di mana Anda bisa
                    berinteraksi dengan pengajar dan sesama pelajar.
                    <br />
                    Dukungan Berkelanjutan: Tim pendukung kami siap membantu
                    Anda di setiap langkah belajar Anda.
                    <br />
                    Mengapa Memilih Java Learning
                    <br />
                    Fleksibilitas: Belajar sesuai kecepatan Anda sendiri, di
                    mana saja, kapan saja.
                    <br />
                    Kualitas Materi: Materi ajar yang dirancang oleh para ahli
                    di bidangnya.
                    <br />
                    Pengalaman Pembelajaran Interaktif: Kami menggunakan
                    teknologi terkini untuk menyediakan pengalaman belajar yang
                    menarik dan interaktif.
                    <br />
                    Komunitas yang Mendukung: Bergabunglah dengan jaringan
                    global pelajar dan profesional.
                    <br />
                    Bergabunglah Dengan Kami
                    <br />
                    Apakah Anda baru memulai atau ingin mengasah keterampilan
                    Java Anda, Java Learning adalah tempat yang tepat untuk
                    memulai perjalanan Anda. Kami berkomitmen untuk mendukung
                    Anda dalam setiap langkah Anda dalam belajar Java.
                    Bergabunglah dengan kami hari ini dan mulailah perjalanan
                    Anda menuju masa depan yang lebih cerah dan teknologi yang
                    lebih maju!
                    <br />
                    Kontak Kami Untuk pertanyaan lebih lanjut, jangan ragu untuk
                    menghubungi kami di email@javalearning.com. Ikuti kami juga
                    di media sosial untuk update terbaru dan tips belajar.
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangKamiPage;
