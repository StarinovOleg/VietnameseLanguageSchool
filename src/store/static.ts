import img from '../assets/icons-lessons/unit1.png';
import img2 from '../assets/icons-lessons/unit2.png';
import img3 from '../assets/icons-lessons/unit3.png';
import img4 from '../assets/icons-lessons/unit4.png';
import img5 from '../assets/icons-lessons/unit5.png';
import img6 from '../assets/icons-lessons/unit6.png';
import img7 from '../assets/icons-lessons/unit7.png';
import img8 from '../assets/icons-lessons/unit8.png';
import img9 from '../assets/icons-lessons/unit9.png';
import img10 from '../assets/icons-lessons/unit10.png';
import img11 from '../assets/icons-lessons/unit11.png';
import img12 from '../assets/icons-lessons/unit12.png';
import img13 from '../assets/icons-lessons/unit13.png';
import img14 from '../assets/icons-lessons/unit14.png';
import img15 from '../assets/icons-lessons/unit15.png';
import start_conversation from '../assets/lesson_2/meet.png';
import introduce_yourself from '../assets/lesson_2/who.png';
import what_is from '../assets/lesson_2/andyou.png';
import six_tones from '../assets/conversation-icon/six_tones.png';
import pioneers from '../assets/background_promo.png';
import grammar from '../assets/baner-section/grammar.png';
import listening from '../assets/baner-section/listening.png';
import practice from '../assets/baner-section/practice.png';
import icon_market from "../assets/icon-market.png";
import icon_game from "../assets/icon-game.png";
import icon_device from "../assets/icon-device.png";
import icon_foot from "../assets/icon-foot.png";
import icon_correct from "../assets/icon-correct.png";
import icon_notcorrect from "../assets/icon-notcorrect.png";
import support_words from "../assets/support-words.png";
import support_audio from "../assets/support-audio.png";
import support_translate from "../assets/support-translate.png";
import window_translate_gif from "../assets/supports/gif-translate.gif";
import window_word from "../assets/supports/word.png";
import window_word_gif from "../assets/supports/gif-words.gif";
import window_audio from "../assets/supports/audio.png";
import window_audio_gif from "../assets/supports/gif-audio.gif";

import window_translate from "../assets/supports/translate.png";
import background from "../assets/phone.png";
import phone from '../assets/phone.png';
import appstore from '../assets/app-store-badge.png';
import googlestore from '../assets/google-play-badge.png';
import img_error from '../assets/error/error.png';
import end_screen from '../assets/end-screen/end-screen.png';
import b2 from "../assets/sounds/pronunciation/Bà.mp3";
import b3 from "../assets/sounds/pronunciation/Bá.mp3";
import b4 from "../assets/sounds/pronunciation/Bã.mp3";

import { unit_15 } from "../dictionary/unit-15/unit_15";
import { unit_14 } from "../dictionary/unit-14/unit_14";
import { unit_13 } from "../dictionary/unit-13/unit_13";
import { unit_12 } from "../dictionary/unit-12/unit_12";
import { unit_11 } from "../dictionary/unit-11/unit_11";
import { unit_10 } from "../dictionary/unit-10/unit_10";
import { unit_9 } from "../dictionary/unit-9/unit_9";
import { unit_8 } from "../dictionary/unit-8/unit_8";
import { unit_7 } from "../dictionary/unit-7/unit_7";
import { unit_6 } from "../dictionary/unit-6/unit_6";
import { unit_5 } from "../dictionary/unit-5/unit_5";
import { unit_4 } from "../dictionary/unit-4/unit_4";
import { unit_3 } from "../dictionary/unit-3/unit_3";
import { unit_2 } from "../dictionary/unit-2/unit_2";
import { unit_1 } from "../dictionary/unit-1/unit_1";

import audio_animation_magnitola from '../assets/demo-audio/magnitola.png'
import audio_animation_note1 from '../assets/demo-audio/note1.png'
import audio_animation_note2 from '../assets/demo-audio/note2.png'
import audio_animation_terminal from '../assets/demo-audio/terminal.png'

import negative from "../assets/sounds/noncorrect.mp3";
import positive from "../assets/sounds/correct.mp3";
export const converstation={
    promo:{
        'title':'Let’s make learning <span style="color: rgb(63 98 18)" > Vietnamese language </span><span style="color:#ba4e4a" class="span_promo">fun</span> and <span style="color:#ba4e4a" class="span_promo">accessible</span>!',
        'title_vietnamese':'Hãy làm cho việc học <span style="color: rgb(63 98 18)" >Tiếng Việt</span> trở nên <span style="color:#ba4e4a" class="span_promo">thú vị</span> và <span style="color:#ba4e4a" class="span_promo">dễ tiếp cận</span>!',
        "subtitle":"Online Vietnamese language  in any place - all  for FREE! ...",
        'img': pioneers,
        'button_listen_sound':'listen sound',
        'button_start_learning':'start learning'
    },
    baner:[{
        id:1,
        src:listening,
        title:"Listen",
        text: "Practice pronunciation by listening to dialogues and texts",
        color:'text-[#FBE754]'
      },{
        id:2,
        src:practice,
        title:"Practice",
        text: "Memorize new words with the help of tests in a playful way",
        color:'text-sky-500'
      },{
        id:3,
        src:grammar,
        title:"Understand",
        text: "Learn about grammar and doing grammar exercises",
        color:'text-[#B018C8]'
      }],
    words:{
        'title':'Chose group words for training',
        'section_img':support_words,
        'lessons':[{
            'id':0,
            'to': '/words',
            'title':'Unit 1',
            'subtitle': 'Hello! I am David',
            'img':img,
            'array_data':unit_1
          },{
            'id':1,
            'to': '/words',
            'title':'Unit 2',
            'subtitle': 'Where you from?',
            'img':img2,
            'array_data':unit_2
          },{
            'id':3,
            'to': '/words',
            'title':'Unit 3',
            'subtitle': 'I am a doctor',
            'img':img3,
            'array_data':unit_3
           },{
            'id':4,
            'to': '/words',
            'title':'Unit 4',
            'subtitle': 'How old is she?',
            'img':img4,
            'array_data':unit_4
           },{
            'id':5,
            'to': '/words',
            'title':'Unit 5',
            'subtitle': 'How much is it?',
            'img':img5,
            'array_data':unit_5
           },{
            'id':6,
            'to': '/words',
            'title':'Unit 6',
            'subtitle': 'We meet',
            'img':img6,
            'array_data':unit_6
           },{
            'id':7,
            'to': '/words',
            'title':'Unit 7',
            'subtitle': 'Where were you born?',
            'img':img7,
            'array_data':unit_7
           },{
            'id':8,
            'to': '/words',
            'title':'Unit 8',
            'subtitle': 'Do you like food?',
            'img':img8,
            'array_data':unit_8
           }
           ,{
            'id':9,
            'to': '/words',
            'title':'Unit 9',
            'subtitle': 'Weather today',
            'img':img9,
            'array_data':unit_9
           },{
            'id':10,
            'to': '/words',
            'title':'Unit 10',
            'subtitle': 'What is Vietnam like?',
            'img':img10,
            'array_data':unit_10
           },{
            'id':11,
            'to': '/words',
            'title':'Unit 11',
            'subtitle': 'Winter in Dalat and Hanoi',
            'img':img11,
            'array_data':unit_11
           },{
            'id':12,
            'to': '/words',
            'title':'Unit 12',
            'subtitle': 'You live in Vietnam',
            'img':img12,
            'array_data':unit_12
           },{
            'id':13,
            'to': '/words',
            'title':'Unit 13',
            'subtitle': 'Get to Hoan Kiem',
            'img':img13,
            'array_data':unit_13
           },{
            'id':14,
            'to': '/words',
            'title':'Unit 14',
            'subtitle': 'You can sit here',
            'img':img14,
            'array_data':unit_14
           },{
            'id':15,
            'to': '/words',
            'title':'Unit 15',
            'subtitle': 'You study vietnamese',
            'img':img15,
            'array_data':unit_15
           }
  ]
    },
    about:{      
        'background':background,
        'appstore':appstore,
        'googlestore':googlestore,
        'about':[
        {
          id: 1,
          title: "Free access",
          body: " Our mission is to make language learning accessible to everyone",
          img: icon_market,
       
        },
        {
          id: 2,
          title: "Learning in the game",
          body: " Game mechanics proven effective for all ages",
          img: icon_game,
        },
        {
          id: 3,
          title: "Practice anywhere",
          body: "Practice anywhere, with any device",
          img: icon_device,
        },
      ]},
    conversation:{
        'title':'Chose listen to the conversation',
        'section_img':support_audio,
        'item':[{
            'id':1,
            'to': '/audio',
            'title':'My name is Dung',
            'subtitle': 'Introduce yourself. Say "Hello" people!',
            'img':img
          },{
            'id':2,
            'to': '/audio',
            'title':'Where do you come from?',
            'subtitle': 'Introduce yourself. Say where you from and your nationality.',
            'img':img2
          },{
            'id':3,
            'to': '/audio',
            'title':'What is?',
            'subtitle': 'Ansk and answer on common question.',
            'img':what_is
          },{
            'id':4,
            'to': '/audio',
            'title':'Introduce yourself',
            'subtitle': 'Say people about you and start converstation easy.',
            'img':introduce_yourself
          },{
            'id':5,
            'to': '/audio',
            'title':'Start conversation.',
            'subtitle': 'Starting a casual conversation.',
            'img':start_conversation
          },{
            'id':6,
            'to': '/audio',
            'title': 'Six tones',
            'subtitle': 'The difference of the six tones',
            'img':six_tones
          }
        ]
    },
    method:{
        'img':icon_foot,
        'group1':{
        'title':'3 step for first result:',
        'item':[{text:'Chose first group words for training'},
                {text:'Chose dialog for listen and repeat'},
                {text:'Chose sentenses for translate'},
              ]
        },

    },
    practice_translate:{
      'title':'Chose translate these sentences',
      'section_img':support_translate,
      'icon_correct':icon_correct,
      'icon_notcorrect':icon_notcorrect,
      'item':[{
        'id':1,
        'to': '/translated',
        'title':'Hello! My name is David',
      },{
        'id':2,
        'to': '/translated',
        'title':'Your Nationality?',
      },
      {
        'id':3,
        'to': '/translated',
        'title':'I am a doctor',
      },      {
        'id':4,
        'to': '/translated',
        'title':'How old is she?',
      },
    ]
    },
    error:{
        'title':'404: Chose Main Page',
        'subtitle':'This page does not exist. Go back to main page.',
        'img':img_error
    },
    end_screen:{
        'title':'Congratulation you done training. Chose new test.',
        'picture':end_screen
    },
    landing:{
        'continue':'Continue more training >>>'
    },
    button:{
        'button_name': 'Title Page',
        'button_name-training':'Training Page' 
    },
    support_window:{
      'img_word': window_word,
      'img_audio':window_audio,
      'img_translate':window_translate,
      'text_word': window_word_gif,
      'text_audio':window_audio_gif,
      'text_translate':window_translate_gif
    },
    demo_audio:{
      'title':'Listen and learn your ',
      'subtitle':'Letter Sounds',
      'audio_animation_note1':audio_animation_note1,
      'audio_animation_note2':audio_animation_note2,
      'audio_animation_magnitola':audio_animation_magnitola,
      'audio_animation_terminal':audio_animation_terminal,
      'audio': [ {
          id:1, 
          name: 'Bà',
          color:'text-[#276f74]',
          audio:b2
      },
      {
          id:2, 
          name:'Bá',
          color:'text-[#ba4e4a]',
          audio:b3
      },   
      {
          id:3, 
          name:'Bã',
          color:'text-[#7fa73e]',
          audio:b4
      }
  ]
    },
    demo_test:{
      'title':'Practice and memorise your',
      'subtitle':'words'
    },
    footer:{
      'company_name':'© Starinov Production',
      'web_app_name':'Vietnamese Language school for foreigner'
    },
    header:{
      'words_training':'words',
      'audio_training':'audio',
      'translate_training':'translate'
    },
    words_sounds:{
      'negative':negative,
      'positive':positive,
    }
}