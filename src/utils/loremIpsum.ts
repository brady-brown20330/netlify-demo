import _ from "lodash";
import { loremIpsum } from 'lorem-ipsum';

const seed = "wondering how you can get an infusion of vitamins and antioxidants every morning with minimal effort finally theres an easy solution id seen these make ahead smoothie packs all over when I finally made them I realized they solved two of my pressing smoothie problems prewashed spinach that goes bad before I can use it all the small bags are too small the big boxes are too big morning laziness throwing some fruit and spinach into the blender doesnt seem like much effort but well you know how it goes what is a smoothie pack a smoothie pack is essentially meal prepping smoothies so that all you have to do is throw your ingredients in a blender and enjoy you prepare lots of smoothie ingredients and then portion them out for individual servings you can store individual portions in sandwich baggies or better yet in reusable containers prepare a dozen smoothie packs one weekend afternoon and you can set yourself up for two weeks of delicious convenient breakfasts what do you put in green smoothie packs green smoothie freezer packs are totally customizable spinach is my favorite leafy green to use because its mild tasting you could also use kale but start with a smaller amount since it has a stronger and sometimes bitter flavor banana lends a delightful creaminess and sweetness to your smoothies and beyond that its up to you you can use fresh or frozen fruit in whatever combination you like some ideas mixed berry strawberry blueberry raspberry tropical pineapple and mango fresh or frozen cherries oranges peaches what kind of bags work best you could certainly use regular quartsize freezer bags to reduce plastic waste you can also wash and reuse them I use foodgrade silicone bags theyre washable reusable and durable tried several brands and the bags from sipu and stasher are my current favorites because theyre easy to open and close ive also seen these smoothie kits packed in mason jars but I find that the contents can be hard to get out when its all frozen together especially if youre using narrowmouth jars what liquid do I use in my green smoothie one cup of cold water works just fine you can also use one cup of milk either dairy or nondairy im a fan of blending these with unsweetened vanilla almond milk for some extra flavor if your smoothie isnt sweet enough for your liking add a splash of pineapple or orange juice to the blender what kind of blender do I need frozen smoothie packs work best using a highspeed blender so the spinach is fully pulverized nobody likes bits of floating spinach in their drink ive tried many blenders over the years and outline the pros and cons in this post which blender is best for you which includes blenders in multiple pricepoints what texture are these green smoothies if your packets go straight from freezer to blender youll get a slushy consistency if youd prefer a more juicelike texture defrost them in the fridge overnight how long do smoothie packets last in the freezer frozen food stays edible for a long time but to avoid freezer burn use these smoothie packets with a few weeks"

export const getMockTitle = (): string => {
  return loremIpsum({
    count: 1,                // Number of "words", "sentences", or "paragraphs"
    format: "plain",         // "plain" or "html"
    // paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
    // paragraphUpperBound: 5,  // Max. number of sentences per paragarph.
    //   random: Math.random,     // A PRNG function
    sentenceLowerBound: 3,   // Min. number of words per sentence.
    sentenceUpperBound: 10,  // Max. number of words per sentence.
    //   suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
    words: seed.split(' ')       // Array of words to draw from      // Array of words to draw from
  })
}

export const getMockShortParagraphs = (count: number): string => {
  return loremIpsum({
    count: count,                // Number of "words", "sentences", or "paragraphs"
    format: "plain",         // "plain" or "html"
    paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
    paragraphUpperBound: 5,  // Max. number of sentences per paragarph.
    sentenceLowerBound: 5,   // Min. number of words per sentence.
    sentenceUpperBound: 10,  // Max. number of words per sentence.

    units: "paragraphs",
    words: seed.split(' ')       // Array of words to draw from      // Array of words to draw from
  })
}

export const getMockLongParagraphs = (count: number): string => {
  return loremIpsum({
    count: count,                // Number of "words", "sentences", or "paragraphs"
    format: "plain",         // "plain" or "html"
    paragraphLowerBound: 5,  // Min. number of sentences per paragraph.
    paragraphUpperBound: 15,  // Max. number of sentences per paragarph.
    sentenceLowerBound: 5,   // Min. number of words per sentence.
    sentenceUpperBound: 20,  // Max. number of words per sentence.

    units: "paragraphs",
    words: seed.split(' ')       // Array of words to draw from      // Array of words to draw from
  })
}

export const getSampleImage = () => {
  const imgs = ['https://images.contentstack.io/v3/assets/bltc6a507bf9a16e1e3/bltd1a2db59daee88c0/pexels-photo-281184-square-10.svg',
    'https://images.contentstack.io/v3/assets/bltc6a507bf9a16e1e3/blt4796968d9f577a2b/pexels-photo-618463-square-10.svg',
    'https://images.contentstack.io/v3/assets/bltc6a507bf9a16e1e3/blt292748857641d20a/pexels-photo-618463-square-100.svg'
  ]

  return imgs[_.random(0, 2)];
}
