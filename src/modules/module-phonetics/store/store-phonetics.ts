import b_x_m from '../icon-assets/b_x_m.png';
import ban_can from '../icon-assets/ban_can.png';
import han_lan from '../icon-assets/han_lan.png';
import quan_van from '../icon-assets/quan_van.png';
import san_tan from '../icon-assets/san_tan.png';
import h from '../icon-assets/h.png';
import kh from '../icon-assets/kh.png';
import e_e from '../icon-assets/e_e.png';
import e from '../icon-assets/e.png';
import o_o from '../icon-assets/o_o.png';
import o from '../icon-assets/o.png';
import ba_ga from '../icon-assets/ba_ga.png';
import m_n from '../icon-assets/m_n.png';
import ma_na from '../icon-assets/ma_na.png';
import nh_ng from '../icon-assets/nh_ng.png';
import qua_sa from '../icon-assets/qua_sa.png';


import { array_b_x_m } from '../disctionary/unit6/b_x_m';
import {array_ban_can} from '../disctionary/unit7/ban_can';
import {array_han_lan} from '../disctionary/unit7/han_lan';
import {array_quan_van} from '../disctionary/unit7/quan_van';
import {array_san_tan} from '../disctionary/unit7/san_tan';
import {array_h} from '../disctionary/unit8/h';
import {array_kh} from '../disctionary/unit8/kh';
import {array_e_e} from '../disctionary/unit11/e_e';
import {array_e} from '../disctionary/unit11/e';
import {array_o_o} from '../disctionary/unit11/o_o';
import {array_o} from '../disctionary/unit11/o';
import {array_ba_ga} from '../disctionary/unit12/ba_ga';
import {array_m_n} from '../disctionary/unit12/m_n';
import {array_ma_na} from '../disctionary/unit12/ma_na';
import {array_nh_ng} from '../disctionary/unit12/nh_ng';
import {array_qua_sa} from '../disctionary/unit12/qua_sa';
export const store_phonetics = {
  main: {
    grammar: {
      block: {
        textTitle: 'Read our grammar guide',
        textSubtitle: 'Read our grammar guide',
      },
    },
  },
  phonetics: {
    title: 'Phonetics',
    subtitle: 'Phonetics practice',
    lessons: [
      {
        id: 1,
        title: 'B...m',
        array_data: array_b_x_m,
        img:b_x_m,
      },
      {
        id: 2,
        title: 'Ban and Can',
        array_data: array_ban_can,
        img: ban_can,
      },
      {
        id: 3,
        title: 'Han and Lan',
        array_data:array_han_lan,
        img: han_lan,
      },
      {
        id: 4,
        title: 'Quan and Van',
        array_data: array_quan_van,
        img: quan_van,
      },
      {
        id: 5,
        title: 'San and Tan',
        array_data: array_san_tan,
        img: san_tan,
      },
      {
        id: 6,
        title: 'H',
        array_data: array_h,
        img: h,
      },
      {
        id: 7,
        title: 'Kh',
        array_data: array_kh,
        img: kh,
      },
      {
        id: 8,
        title: 'E',
        array_data: array_e,
        img: e,
      },
      {
        id: 9,
        title: 'Ê',
        array_data: array_e_e,
        img: e_e,
      },
      {
        id: 10,
        title: 'O',
        array_data: array_o,
        img: o,
      },
      {
        id: 11,
        title: 'Ô',
        array_data: array_o_o,
        img: o_o,
      },
      {
        id: 12,
        title: 'Ba and Ga',
        array_data: array_ba_ga,
        img: ba_ga,
      },
      {
        id: 13,
        title: 'M and N',
        array_data: array_m_n,
        img: m_n,
      },
      {
        id: 14,
        title: 'Ma and Na',
        array_data: array_ma_na,
        img: ma_na,
      },
      {
        id: 15,
        title: 'Ng and Nh',
        array_data: array_nh_ng,
        img: nh_ng,
      },
      {
        id: 16,
        title: 'Qua and Sa',
        array_data: array_qua_sa,
        img: qua_sa,
      },
    ],
  },
};
