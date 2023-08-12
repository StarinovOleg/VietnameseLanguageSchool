import React from "react";
import ButtonSound from "../../../ui-library/buttons/ButtonSound";
import mp from "../dictionary-grammar/number/number.mp3";
import Main from "../main";
import { sound } from "../../../services/sound_function";
import ReactAudioPlayer from "react-audio-player";

export default function Numerals() {
  return (
    <Main>
      <div>
        <div>
          <p className="font-bold">10 - Mười</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div className="flex flex-1">
              <p className="font-bold">1 </p>
              <p>- Một</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">2 </p>
              <p>- Hai</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">3 </p>
              <p>- Ba</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">4 </p>
              <p>- Bốn</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">5 </p>
              <p>- Năm</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">6 </p>
              <p>- Sáu</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">7 </p>
              <p>- Bảy</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">8 </p>
              <p>- Tám</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">9 </p>
              <p>- Chín</p>
            </div>

            <div className="flex flex-1">
              <p className="font-bold">11 </p>
              <p>- Mười một</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">12 </p>
              <p>- Mười hai</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">13 </p>
              <p>- Mười ba</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">14 </p>
              <p>- Mười bốn</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">15 </p>
              <p>- Mười lăm</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">16 </p>
              <p>- Mười sáu</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">17 </p>
              <p>- Mười bảy</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">18 </p>
              <p>- Mười tám</p>
            </div>
            <div className="flex flex-1">
              <p className="font-bold">19 </p>
              <p>- Mười chín</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <p className="font-bold">20 - Hai mươi</p>
      </div>

      <div>1. Counting from 1 to 10:</div>
      <ReactAudioPlayer
        className="inline-block bg-inherit mt-4 w-full lg:w-auto md:w-auto"
        src={mp}
        controls
      />
      <div>2. Anatomy of numerals:</div>
      <div>
        <div className="flex flex-1">
          <div>
            <div>
              <p className="font-bold">2</p>
            </div>
            <div>
              <p className="font-bold">22</p>
            </div>
            <div>
              <p className="font-bold">20 </p>
            </div>
            <div>
              <p className="font-bold">200 </p>
            </div>
            <div>
              <p className="font-bold">202 </p>
            </div>
            <div>
              <p className="font-bold">220 </p>
            </div>
            <div>
              <p className="font-bold">222 </p>
            </div>
            <div>
              <p className="font-bold">2000 </p>
            </div>
            <div>
              <p className="font-bold">20000 </p>
            </div>
            <div>
              <p className="font-bold">200000</p>
            </div>
            <div>
              <p className="font-bold">2,000,000 </p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-bold">Hai</p>
            </div>
            <div>
              <p className="font-bold">Hai mươi Hai</p>
            </div>
            <div>
              <p className="font-bold">Hai mươi</p>
            </div>
            <div>
              <p className="font-bold">Hai trăm</p>
            </div>
            <div>
              <p className="font-bold">Hai trăm Hai</p>
            </div>
            <div>
              <p className="font-bold">Hai trăm Hai mươi</p>
            </div>
            <div>
              <p className="font-bold">Hai trăm Hai mươi Hai </p>
            </div>
            <div>
              <p className="font-bold">Hai nghìn</p>
            </div>
            <div>
              <p className="font-bold">Hai mươi nghìn</p>
            </div>
            <div>
              <p className="font-bold">Hai trăm nghìn</p>
            </div>
            <div>
              <p className="font-bold">Hai triệu</p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
/*const styles = StyleSheet.create({
  gridBorder: { borderRadius: 20, borderWidth: 1, padding: 10, margin: 10 },
  textBold: { fontWeight: "bold" },
  tenContainer: {
    alignItems: "center",
  },
  flexRowContainer: { flexDirection: "row", justifyContent: "center" },
  flexColumnContainer: { flexDirection: "column", padding: 10 },
});*/
