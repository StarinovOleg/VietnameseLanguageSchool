import img from '../assets/icons-lessons/unit1.png'
import img1_1 from '../assets/icons-lessons/unit1_1.png'
import img2 from '../assets/icons-lessons/unit2.png'
import vocabulary from '../assets/icons-lessons/vocabulary.png'
import hello from '../assets/conversation-icon/hello.jpg'
import where_you_from from '../assets/conversation-icon/where_you_from.jpg'
import start_conversation from '../assets/conversation-icon/conversation.jpg'
import introduce_yourself from '../assets/conversation-icon/introduce.jpg'
import what_is from '../assets/conversation-icon/what_is.jpg'
import six_tones from '../assets/conversation-icon/six_tones.jpg'
import pioneers from '../assets/background_promo.png'
import grammar from '../assets/baner-section/grammar.png'
import listening from '../assets/baner-section/listening.png'
import practice from '../assets/baner-section/practice.png'
import icon_market from "../assets/icon-market.png";
import icon_game from "../assets/icon-game.png";
import icon_device from "../assets/icon-device.png";
import background from "../assets/phone.png"
import phone from '../assets/phone.png'
import appstore from '../assets/app-store-badge.png'
import googlestore from '../assets/google-play-badge.png'
export const converstation={
    promo:{
        'title':'Be a pioneer witch a new language!',
        'subtitle':'Pioneers is an effective service for learning Vietnamese',
        'img': pioneers
    },
    baner:[{
        id:1,
        src:listening,
        title:"Listening",
        text: "Practice pronunciation by listening to dialogues and texts"
      },{
        id:2,
        src:grammar,
        title:"Grammar",
        text: "Learn about the features of a language by studying its grammar and doing grammar exercises"
      },{
        id:3,
        src:practice,
        title:"Practice",
        text: "Memorize new words with the help of tests in a playful way"
      }],
    lessons:{
        'title':'Chose group words for training',
        'lessons':[{
            'id':1,
            'to': '/learning',
            'title':'Unit 1',
            'subtitle': 'Hello! My name is David',
            'img':img
          },{
            'id':2,
            'to': '/learning',
            'title':'Unit 1.1',
            'subtitle': 'Where you from?',
            'img':img1_1
          },{
            'id':3,
            'to': '/learning',
            'title':'Unit 2',
            'subtitle': 'What is THAT/THIS',
            'img':img2
          },{
            'id':4,
            'to': '/learning',
            'title':'Unit 2.2',
            'subtitle': 'Vocabulary words',
            'img':vocabulary
          },{
            'id':5,
            'to': '/learning',
            'title':'Unit 2.3',
            'subtitle': 'Vocabulary words',
            'img':vocabulary
          }]
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
        'title':'Listen to the conversation',
        'item':[{
            'id':1,
            'to': '/conversation',
            'title':'My name is Dung',
            'subtitle': 'Introduce yourself. Say "Hello" people!',
            'img':hello
          },{
            'id':2,
            'to': '/conversation',
            'title':'Where do you come from?',
            'subtitle': 'Introduce yourself. Say where you from and your nationality.',
            'img':where_you_from
          },{
            'id':3,
            'to': '/conversation',
            'title':'What is?',
            'subtitle': 'Ansk and answer on common question.',
            'img':what_is
          },{
            'id':4,
            'to': '/conversation',
            'title':'Introduce yourself',
            'subtitle': 'Say people about you and start converstation easy.',
            'img':introduce_yourself
          },{
            'id':5,
            'to': '/conversation',
            'title':'Start conversation.',
            'subtitle': 'Starting a casual conversation.',
            'img':start_conversation
          },{
            'id':6,
            'to': '/conversation',
            'title': 'Six tones',
            'subtitle': 'The difference of the six tones',
            'img':six_tones
          }]
    },
    method:{
        'group1':{
        'title':'2 step for first result:',
        'item':[{text:'Chose first group words for training.'},
                {text:'Chose dialog for listen and repeat.'}]
        },

    },
    practice_translate:{
      'title':'Translate these sentences',
      'item':[{
        'id':1,
        'to': '/translated',
        'title':'Hello! My name is David',
      },{
        'id':2,
        'to': '/translated',
        'title':'Where do you come from?',
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
        'title':'Chose Test Page',
    },
    end_screen:{
        'title':'Congratulation you done',
    },
    landing:{
        'continue':'Continue more training >>>'
    },
    button:{
        'button_name': 'Title Page',
        'button_name-training':'Training Page' 
    }

}