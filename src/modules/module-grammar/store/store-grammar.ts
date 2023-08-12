import alphabet from '../icon-assets/alphabet.png';
import phonetics from '../icon-assets/phonetics.png';
import adjectives from '../icon-assets/adjectives.png';
import adverbs from '../icon-assets/adverbs.png';
import comparison from '../icon-assets/comparison.png';
import nouns from '../icon-assets/nouns.png';
import numerals from '../icon-assets/numerals.png';
import particles from '../icon-assets/particles.png';
import pronouns from '../icon-assets/pronouns.png';
import question from '../icon-assets/question.png';
import sentence from '../icon-assets/sentence.png';
import time from '../icon-assets/time.png';
import verbs from '../icon-assets/verbs.png';
import what_is from '../icon-assets/what_is.png';
import year_to_day from '../icon-assets/year_to_day.png';
export const store_grammar = {
  main: {
    grammar: {
      block: {
        textTitle: 'Read our grammar guide',
        textSubtitle: 'Read our grammar guide',
      },
    },
  },
  grammar: {
    title: 'Grammar',
    subtitle: 'Read our grammar guide',
    lessons: [
      {
        id: 1,
        title: 'Alphabet',
        link: 'Alphabet',
        img: alphabet,
      },
      {
        id: 2,
        title: 'Phonetics',
        link: 'Phonetics',
        img: phonetics,
      },
      {
        id: 3,
        title: 'Sentence and questions',
        link: 'SimpleSentenceAndQuestions',
        img: sentence,
      },
      {
        id: 4,
        title: 'The personal pronouns',
        link: 'ThePersonalPronouns',
        img: pronouns,
      },
      {
        id: 5,
        title: 'Common questions',
        link: 'CommonQuestions',
        img: question,
      },
      {
        id: 6,
        title: 'Particles',
        link: 'Particles',
        img: particles,
      },
      {
        id: 7,
        title: 'Noun',
        link: 'Noun',
        img: nouns,
      },
      {
        id: 8,
        title: 'Verbs',
        link: 'Verbs',
        img: verbs,
      },
      {
        id: 9,
        title: 'Adverbs',
        link: 'Adverbs',
        img: adverbs,
      },
      {
        id: 10,
        title: 'Adjectives',
        link: 'Adjectives',
        img: adjectives,
      },
      {
        id: 11,
        title: 'Numerals',
        link: 'Numerals',
        img: numerals,
      },
      {
        id: 12,
        title: 'Time',
        link: 'Time',
        img: time,
      },
      {
        id: 13,
        title: 'From year to day',
        link: 'FromYearToDay',
        img: year_to_day,
      },
      {
        id: 14,
        title: 'Comparison',
        link: 'Comparison',
        img: comparison,
      },
      {
        id: 15,
        title: 'Who is it - what is it',
        link: 'WhoIsIt',
        img: what_is,
      },
    ],
  },
};
