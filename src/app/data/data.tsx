type GachaItem = {
    color: string;
    link: string;
    image: string;
    subtitle: string;
    description: string;
    extra: string;
  };

const gachas: { [key: string]: GachaItem }[] = [
    {
        'ペコペコハム Hungy Hammy': {
            'color' : 'yellow',
            'subtitle' : 'もぐもぐもぐもぐ',
            'description' : 'This hungry hamster is quite the little chomper! Born with a full set of teeth that never stops growing, he wants to have a bite of everything!',
            'image' : '/img/hamu3.png',
            'extra' : 'When he\'s not eating, he sure likes to groove, too!',
            'link' : 'https://www.youtube.com/watch?v=p3G5IXn0K7A'
        }
    }, 
    {
        '爆睡した馬　Napping Pony' : {
            'color' : 'yellow',
            'subtitle' : 'うま～！',
            'description' : 'This sleepy horse has found peace in the world. Horses can sleep standing up, but this one is 変なの and I like 変.',
            'image' : '/img/uma.jpg',
            'extra' : 'In the future, let\'s go horseback riding together until the sunset, sounds romantic, right?',
            'link' : 'https://beachriding.jp/'
        }
    },
    {
        'Hey, Soul Sister': {
            'color' : 'blue',
            'subtitle' : 'by Train',
            'description' : 
                `The way you can cut a rug\n
                Watching you's the only drug I need\n
                So gangster, I'm so thug\n
                You're the only one I'm dreaming of, you see\n
                I can be myself now, finally\n
                In fact, there's nothing I can't be\n
                I want the world to see you be, with me`,
            'image' : '/img/soul_sister_artwork.jpeg',
            'extra' : '',
            'link' : 'https://www.youtube.com/watch?v=kVpv8-5XWOI'
        }
    }, 
    {
        'Night Dancer': {
            'color' : 'blue',
            'subtitle' : 'by Imase',
            'description' : 
                `透き通った 白い肌も\n
                その笑った 無邪気な顔も\n
                変わらないね 変わらないで\n
                いられるのは 今だけか`,
            'image' : '/img/imase_album_artwork.jpg',
            'extra' : '',
            'link' : 'https://www.youtube.com/watch?v=kagoEGKHZvU'
        }
    }, 
    {
        'Seven': {
            'color' : 'blue',
            'subtitle' : 'by Jung Kook, Latto',
            'description' : 
                `"Every hour, every minute, every second\n
                You know night after night\n
                I'll be lovin' you right"`,
            'image' : '/img/seven.jpeg',
            'extra' : '',
            'link' : 'https://youtu.be/QU9c0053UAU?si=ze_p6m-93kGvt8cr&t=9'
        }
    }, 
    {
        'Sweaty Sheepies': {
            'color' : 'green',
            'subtitle' : 'メーメー',
            'description' : 'Finding this hidden jjimjilbang was so hard! We walked around the entire abandoned mall like lost sheep, but luckily became spa sheep! I thought it was nice that we could relax and rest our legs after walking street markets hunting for Yoshiko\'s fancy clothes. Taking a nap together in a hot pizza oven was a bit extreme though as I couldn\'t breathe. After coming out of the oven baked, it was quite nice to lie down in a shady spot. I enjoy quiet moments where we can spend time together with you by my side.',
            'image' : '/img/sheep.jpg',
            'extra' : 'Next time, we should definitely go take a spicy bath in 箱根.',
            'link' : '#'
        }
    }, 
    {
        'コックカービィChef Kirby': {
            'color' : 'yellow',
            'subtitle' : 'ぽよぽよ！ご飯タイム！',
            'description' : 'This pink goofball is known to whip up delicious meals with their trusty golden pot! Although it may seem cute, the truth is',
            'image' : '/img/cook.png',
            'extra' : 'Chef Kirby throws his enemies into the pot and boils them alive. かわいくなくて本当に怖いよ！',
            'link' : 'https://www.youtube.com/watch?v=hrgrjshpIF8&t=10s'
        }
    }, 
    {
        '天使の涙わらび餅 Angel\'s Tear Mochi': {
            'color' : 'red',
            'subtitle' : '甘い！もちもち！',
            'description' : 'An angel from the skies above is weeping, but her tears are surprisingly sweet! Let this be a reminder to enjoy the sweet things in life when feeling sad. This delightful Japanese dessert is simply scrumptious! I never tried warabi mochi until I\'ve met you and I\'m happy to have so! I know that it\'s your favorite dessert and while visiting you, I just had to take you to this secret back-alley shop in Omotesandō!',
            'image' : '/img/mochi.jpeg',
            'extra' : '一緒にわらび餅を作ろうよ！', 
            'link' : 'https://www.justonecookbook.com/warabi-mochi/'
        }
    }, 
    {
        'Bingo Bongo': {
            'color' : 'green',
            'subtitle' : '長くて待たされたんだけど、美味しかった！',
            'description' : 'By staying at the Airbnb near Ootsuka station, we were so lucky to eat delicious onigiri! The wait was not so bad because we ended up sitting front row seats to watch the head chef make our order live! Looking back, Ootsuka station was one of my favorite stations to explore with you. We could go to the bookstore to look for your BL stuff, but found a stern Elon Musk with no upper lip. Walking back home, we can watch the ちんちん電車 come through. At the same time, there were just random girls waiting for おじさん for a night of fun. Compared to the morning, we could see actual おじさん doing stretches and exercise at the park. It was nice to just spend time together.',
            'image' : '/img/bongo.jpg',
            'extra' : '一緒にわらび餅を作ろうよ！', 
            'link' : 'https://www.justonecookbook.com/warabi-mochi/'
        }
    }, 
    {
        'Next Chapter': {
            'color' : 'green',
            'subtitle' : 'We\'ve come a long way',
            'description' : 'This was the last photo we took together before your return to Japan. The autumn outfit catalog and winter catalog inside the museum. Memories are not always fun, happy times. I felt a flood of emotions: happiness, sadness, anxiety and excitement. We were spending almost every waking moment together because that little time we had meant everything. The Robert back then was thinking, if we\'re still together later, then we truly love each other and want to make it work. The me right now is thinking I love this girl more than ever and more 変 than ever.',
            'image' : '/img/museum.jpg',
            'extra' : '', 
            'link' : ''
        }
    }, 
    {
        'スア・ガイ　Lao Chicken Noodle Soup': {
            'color' : 'red',
            'subtitle' : 'Sep Lai Lai!',
            'description' : 'It was a fun date night to cook this together, and we came out with 2 unique, yet yummy dishes! I appreciate that you went out of your way to source super, super rare ingredients. That\'s one thing I like about you, is putting in extra effort! Recently, I\'ve been adapting this soup to an easy to make at home version. You just dunk chicken thighs in a pot with Thai-Lao Ingredients for an hour, and you\'re done! I still think that food brings us together, and I cherish the times we are able to cook together. I want to spoon-feed you like the very first time I popped a blueberry into your mouth while all our friends were looking away in that tiny kitchen on your 22nd birthday. Once I have my own recipe down, I want to share it with you, and we can try cooking it together!',
            'image' : '/img/sua_gai.jpg',
            'extra' : '', 
            'link' : ''
        }
    }, 
    {
        'お好み焼き　Okonomiyaki': {
            'color' : 'red',
            'subtitle' : '美味しいパンケーキ！',
            'description' : 'Did you know? Okonomiyaki was the first Japanese food I cooked, and it was in Osaka. What makes it more special to me is that it later became the first dish that we cooked together. For a while, I considered okonomiyaki as my favorite Japanese food. Later on, you would introduce me to monja, which looks like a baby vomited into the hot plate, but it\'s super umai! Slowly, I\'ve come to like monja more than okonomiyaki because it\'s fun to eat together, and you can do so many delicious flavors like mentaiko!',
            'image' : '/img/okonomiyaki.jpg',
            'extra' : '', 
            'link' : ''
        }
    }
]

export default gachas; 
