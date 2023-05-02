import _ from "lodash";
import { getMockTitle, getMockShortParagraphs } from '../../utils';
import { getCardDefaultValues } from '../Cards/Card.helpers';

import { CardCollection, TextPosition, Color, CtaType } from '../../types/components';

export const validationInfo = ["Include at least 1 Image card"];

export const isHeaderValid = (obj: CardCollection): boolean => {
  return !_.isEmpty(obj.header);
}

export const isCardsValid = (obj: CardCollection): boolean => {
  return !((_.isEmpty(obj.cards) || !_.some(obj.cards, 'image')));
}

export const imageCardsReferenceIncludes = [
  "header.ctas.internal_link",
  "cards.link.internal_link",
]

export const imageCardsJsonRtePaths = [
  'header.text',
  'cards.description'
]

const count = _.random(2, 4);
export const defaultValues: CardCollection = {
  header: [{
    title: getMockTitle(),
    text: getMockShortParagraphs(1),
    ctas: [{
      text: 'See more',
      internal_link: [{
        url: '#',
        title: getMockTitle(),
        locale:''
      }],
      url: '?test=xyz',
      color: Color.primary,
      type: CtaType.link
    }],
  }],  
  cards: [...Array(count)].map(() => {
    return {
      ...getCardDefaultValues()
      ,count:count}
  }),
  styles: {
    text_position: TextPosition.below
  },
}

