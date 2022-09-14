import React from "react";
import hello from "../../../src/assets/lessons_1/hello.png";
import sorry  from "../../../src/assets/lessons_1/sorry.png";
import name from "../../../src/assets/lessons_1/name.png";
import tobe from "../../../src/assets/lessons_1/tobe.png";
import meet from "../../../src/assets/lessons_1/meet.png";
import happy from "../../../src/assets/lessons_1/happy.png";
import very from "../../../src/assets/lessons_1/very.png";
import we from "../../../src/assets/lessons_1/we.png";
import what from "../../../src/assets/lessons_1/what.png";
import your from "../../../src/assets/lessons_1/your.png";

import audio from "../../../src/assets/sounds/correct.mp3"
import audio2 from "../../../src/assets/sounds/noncorrect.mp3"
export const unit_1_ob = {
    "Hello, hi": {"word":"Xin chào", "audio":audio,"example":"Chào Anh!", "picture":hello},
    "Sorry/ excuse me": {"word":"Xin lỗi/ xin mạn phép", "audio":audio2,"example":"Xin lỗi anh tên là gì?", "picture":sorry},
    "Name": {"word":"Tên", "audio":"check audio here3","example":"Tên tôi là David", "picture": name},
    "To be(am/is/are)": {"word":"Là", "audio":"check audio here4","example":"Tên em là Lính", "picture":tobe},
    "Too":{"word":"Cũng", "audio":"check audio here5","example":"Cũng tôi (We)", "picture":we},
    "Very":{"word":"Rất", "audio":"check audio here6","example":"Rất vui", "picture":very},
    "Glad/nice/happy": {"word":"Vui", "audio":"check audio here7","example":"Rất vui", "picture":happy},
    "Glad to meet you":{"word":"Rất vui được gặp", "audio":"check audio here8","example":"Em cũng rất vui được gặp anh", "picture":meet},
    "What is":{"word":"Là gì", "audio":"check audio here9","example":"Chủ Ngữ tên là gì?", "picture":what},
    "Your":{"word":"Của bạn", "audio":"check audio here10","example":"Em cũng rất vui được gặp anh", "picture":your}
  };
