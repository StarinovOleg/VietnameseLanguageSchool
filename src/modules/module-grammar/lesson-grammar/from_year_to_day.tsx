import React from "react";
import day from "../icon-assets/year_to_day/year_to_day.png";
import Main from "../main";
export default function FromYearToDay() {
  return (
    <Main>
      <div>
        <img src={day} className="lg:w-[10%] md:w-[10%] w-[30%] m-auto" />
      </div>
      <div>
        <div>
          <div>
            <p>Months</p>
          </div>
        </div>

        <div className="flex flex-1 mx-[1%]">
          <div>
            <div>
              <p className="font-bold">Tháng Một</p>
            </div>
            <div>
              <p className="font-bold">Tháng Hai</p>
            </div>
            <div>
              <p className="font-bold">Tháng Ba</p>
            </div>
            <div>
              <p className="font-bold">Tháng Tư</p>
            </div>
            <div>
              <p className="font-bold">Tháng Năm</p>
            </div>
            <div>
              <p className="font-bold">Tháng Sáu</p>
            </div>
            <div>
              <p className="font-bold">Tháng Bảy</p>
            </div>
            <div>
              <p className="font-bold">Tháng Tám</p>
            </div>
            <div>
              <p className="font-bold">Tháng Chín</p>
            </div>
            <div>
              <p className="font-bold">Tháng Mười</p>
            </div>
            <div>
              <p className="font-bold">Tháng Mười một</p>
            </div>
            <div>
              <p className="font-bold">Tháng Mười hai</p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-bold">January</p>
            </div>
            <div>
              <p className="font-bold">February</p>
            </div>
            <div>
              <p className="font-bold">March</p>
            </div>
            <div>
              <p className="font-bold">April</p>
            </div>
            <div>
              <p className="font-bold">May</p>
            </div>
            <div>
              <p className="font-bold">June</p>
            </div>
            <div>
              <p className="font-bold">July</p>
            </div>
            <div>
              <p className="font-bold">August</p>
            </div>
            <div>
              <p className="font-bold">September</p>
            </div>
            <div>
              <p className="font-bold">October</p>
            </div>
            <div>
              <p className="font-bold">November</p>
            </div>
            <div>
              <p className="font-bold">December</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Days of a week</p>
          </div>
        </div>

        <div className="flex flex-1 ">
          <div>
            <div>
              <p className="font-bold">Thứ hai</p>
            </div>
            <div>
              <p className="font-bold">Thứ ba</p>
            </div>
            <div>
              <p className="font-bold">Thứ tư</p>
            </div>
            <div>
              <p className="font-bold">Thứ năm</p>
            </div>
            <div>
              <p className="font-bold">Thứ sáu</p>
            </div>
            <div>
              <p className="font-bold">Thứ Bảy</p>
            </div>
            <div>
              <p className="font-bold">Chủ nhật</p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-bold">Monday</p>
            </div>
            <div>
              <p className="font-bold">Tuesday</p>
            </div>
            <div>
              <p className="font-bold">Wednesday</p>
            </div>
            <div>
              <p className="font-bold">Thursday</p>
            </div>
            <div>
              <p className="font-bold">Friday</p>
            </div>
            <div>
              <p className="font-bold">Saturday</p>
            </div>
            <div>
              <p className="font-bold">Sunday</p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
/*const styles = StyleSheet.create({
  gridBorder: { borderRadius: 20, borderWidth: 1, padding: 10, margin: 10 },
  align: { alignItems: "center" },
  imgContainer: {
    flexDirection: "row",
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 2,
  },
  textBold: { fontWeight: "bold" },
  tenContainer: {
    alignItems: "center",
  },
  flexRowContainer: { flexDirection: "row", justifyContent: "center" },
  flexColumnContainer: { flexDirection: "column", padding: 10 },
});
*/
